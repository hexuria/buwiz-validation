// Browser stand-ins for the Internet Explorer / HTA APIs eBIRForms uses, so an
// official form HTA can render in Chrome, Firefox or Safari for inspection.
// Nothing here touches the HTA itself; preview/view.html loads this first.
// File I/O, encryption, TIN check-digit (chkt.exe) and submission are stubbed:
// the preview shows the form and its JavaScript validation, not the Windows
// side of eBIRForms.
(function () {
  var report = function (kind, detail) {
    try { parent.postMessage({ ebirPreview: kind, detail: String(detail) }, '*'); } catch (e) {}
  };

  // Windows paths are case-insensitive and the forms rely on it (an HTA asks
  // for 1v2018.png, the package ships 1v2018.PNG). Map a URL inside package/
  // to the file's real spelling using the manifest view.html passes in.
  var files = window.__ebirFiles || {};
  var fixCase = function (url) {
    var pkg = window.__ebirPackage;
    if (!pkg) return null;
    var u = new URL(String(url).replace(/\\/g, '/'), document.baseURI);
    if (u.href.indexOf(pkg) !== 0) return null;
    var rel = decodeURIComponent(u.pathname.slice(new URL(pkg).pathname.length));
    var real = files[rel.toLowerCase()];
    return real && real !== rel ? new URL(real.split('/').map(encodeURIComponent).join('/'), pkg).href : null;
  };

  window.addEventListener('error', function (e) {
    var t = e.target;
    if (t && t !== window && (t.src || t.href)) {
      var url = t.src || t.href;
      var fixed = !t.__ebirRetried && fixCase(url);
      if (fixed) {
        t.__ebirRetried = true;
        report('case', url.slice(window.__ebirPackage.length) + ' → ' + fixed.slice(window.__ebirPackage.length));
        if (t.tagName === 'SCRIPT') {
          var s = document.createElement('script');
          s.src = fixed;
          t.parentNode.insertBefore(s, t.nextSibling);
        } else if (t.src) t.src = fixed; else t.href = fixed;
      } else {
        report('missing', url);
      }
    } else {
      var where = e.filename && e.filename !== location.href && window.__ebirPackage
        ? e.filename.replace(window.__ebirPackage, '') + ':' : 'line ';
      report('error', (e.message || 'error') + (e.lineno ? ' (' + where + e.lineno + ')' : ''));
    }
  }, true);

  // HTA windows have no blocking dialogs worth keeping in a preview; log them.
  window.alert = function (m) { report('alert', m); };
  window.confirm = function (m) { report('alert', 'confirm: ' + m); return false; };

  var noop = function () {};
  var textStream = {
    AtEndOfStream: true, AtEndOfLine: true, Line: 1,
    ReadAll: function () { return ''; }, ReadLine: function () { return ''; },
    Read: function () { return ''; }, Write: noop, WriteLine: noop,
    WriteBlankLines: noop, Skip: noop, SkipLine: noop, Close: noop
  };
  var folder = function (p) {
    return { Path: p || 'C:\\eBIRForms', Name: '', Files: [], SubFolders: [], Size: 0,
             Attributes: 16, DateLastModified: new Date() };
  };
  var fso = {
    FileExists: function () { return false; },
    FolderExists: function () { return false; },
    DriveExists: function () { return false; },
    CreateFolder: function (p) { return folder(p); },
    GetFolder: function (p) { return folder(p); },
    GetSpecialFolder: function () { return folder('C:\\Temp'); },
    GetFile: function (p) { return { Path: p, Name: p, Size: 0, Delete: noop, Copy: noop, Move: noop,
                                     OpenAsTextStream: function () { return textStream; } }; },
    OpenTextFile: function () { return textStream; },
    CreateTextFile: function () { return textStream; },
    DeleteFile: noop, DeleteFolder: noop, CopyFile: noop, MoveFile: noop, CopyFolder: noop,
    BuildPath: function (a, b) { return a + '\\' + b; },
    GetFileName: function (p) { return String(p).split(/[\\/]/).pop(); },
    GetBaseName: function (p) { return String(p).split(/[\\/]/).pop().replace(/\.[^.]*$/, ''); },
    GetExtensionName: function (p) { var m = /\.([^.\\/]*)$/.exec(p); return m ? m[1] : ''; },
    GetParentFolderName: function (p) { return String(p).replace(/[\\/][^\\/]*$/, ''); },
    GetAbsolutePathName: function (p) { return p; },
    GetTempName: function () { return 'rad' + Math.random().toString(36).slice(2, 7) + '.tmp'; }
  };
  var shell = {
    Run: function () { return 0; }, Exec: function () { return { StdOut: textStream, StdErr: textStream, Status: 1, ExitCode: 0 }; },
    ExpandEnvironmentStrings: function (s) { return String(s).replace(/%TEMP%/ig, 'C:\\Temp'); },
    RegRead: function () { return ''; }, RegWrite: noop, Popup: function (m) { report('alert', m); return 1; },
    CurrentDirectory: 'C:\\eBIRForms', Environment: function () { return { Item: function () { return ''; } }; },
    SpecialFolders: function () { return 'C:\\Temp'; }
  };

  // Microsoft.XMLDOM: load() reads reference XML (atcCodes, rdo, …) over HTTP
  // relative to the form, which is where eBIRForms keeps them too.
  function wrapDoc(doc) {
    doc.async = false;
    doc.parseError = { errorCode: 0, reason: '' };
    doc.setProperty = noop;
    doc.load = function (url) {
      try {
        var get = function (u) {
          var x = new XMLHttpRequest();
          x.open('GET', u, false);
          x.send();
          return x;
        };
        var x = get(String(url).replace(/\\/g, '/'));
        if (x.status === 404 && fixCase(url)) x = get(fixCase(url));
        if (x.status && x.status !== 200) throw new Error('HTTP ' + x.status);
        return doc.loadXML(x.responseText);
      } catch (e) {
        report('missing', url);
        doc.parseError = { errorCode: 1, reason: String(e) };
        return false;
      }
    };
    doc.loadXML = function (s) {
      var parsed = new DOMParser().parseFromString(s, 'text/xml');
      while (doc.firstChild) doc.removeChild(doc.firstChild);
      for (var n = parsed.firstChild; n; n = n.nextSibling) doc.appendChild(doc.importNode(n, true));
      var bad = doc.getElementsByTagName('parsererror').length > 0;
      doc.parseError = { errorCode: bad ? 1 : 0, reason: bad ? 'parse error' : '' };
      return !bad;
    };
    return doc;
  }
  function select(ctx, xpath, single) {
    var doc = ctx.nodeType === 9 ? ctx : ctx.ownerDocument;
    var r = doc.evaluate(xpath, ctx, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    if (single) return r.snapshotLength ? r.snapshotItem(0) : null;
    var list = [];
    for (var i = 0; i < r.snapshotLength; i++) list.push(r.snapshotItem(i));
    list.item = function (i) { return list[i] || null; };
    list.nextNode = function () { return list[list._i = (list._i == null ? 0 : list._i + 1)] || null; };
    return list;
  }
  [Document.prototype, Element.prototype].forEach(function (p) {
    if (!p.selectNodes) p.selectNodes = function (x) { return select(this, x, false); };
    if (!p.selectSingleNode) p.selectSingleNode = function (x) { return select(this, x, true); };
  });
  [Element.prototype, Node.prototype].forEach(function (p) {
    if (!('text' in p)) Object.defineProperty(p, 'text', {
      configurable: true,
      get: function () { return this.textContent; },
      set: function (v) { this.textContent = v; }
    });
    if (!('xml' in p)) Object.defineProperty(p, 'xml', {
      configurable: true,
      get: function () { return new XMLSerializer().serializeToString(this); }
    });
  });

  // HTAs run in IE7 document mode, where getElementById ignores case and also
  // matches an element whose name (not id) is the value. Forms depend on both
  // (getElementById('frm1702q:txtTIN1') for id="frm1702q:txtTin1").
  var byId = Document.prototype.getElementById;
  Document.prototype.getElementById = function (id) {
    var el = byId.call(this, id);
    if (el || id == null || id === '') return el;
    var named = this.getElementsByName(String(id));
    if (named.length) return named[0];
    var want = String(id).toLowerCase();
    var all = this.querySelectorAll('[id],[name]');
    for (var i = 0; i < all.length; i++) {
      if ((all[i].id && all[i].id.toLowerCase() === want) ||
          (all[i].getAttribute('name') || '').toLowerCase() === want) return all[i];
    }
    return null;
  };

  window.ActiveXObject = function (progid) {
    var id = String(progid).toLowerCase();
    if (id.indexOf('filesystemobject') >= 0) return fso;
    if (id.indexOf('wscript.shell') >= 0) return shell;
    if (id.indexOf('xmldom') >= 0 || id.indexOf('domdocument') >= 0) {
      return wrapDoc(document.implementation.createDocument('', '', null));
    }
    if (id.indexOf('xmlhttp') >= 0) return new XMLHttpRequest();
    report('error', 'ActiveXObject not available: ' + progid);
    return {};
  };
  window.Enumerator = function (c) {
    var items = c ? Array.prototype.slice.call(c) : [], i = 0;
    this.atEnd = function () { return i >= items.length; };
    this.item = function () { return items[i]; };
    this.moveNext = function () { i++; };
    this.moveFirst = function () { i = 0; };
  };
  if (!window.attachEvent) {
    var attach = function (ev, fn) { this.addEventListener(String(ev).replace(/^on/, ''), fn); return true; };
    var detach = function (ev, fn) { this.removeEventListener(String(ev).replace(/^on/, ''), fn); };
    window.attachEvent = attach; window.detachEvent = detach;
    Document.prototype.attachEvent = Element.prototype.attachEvent = attach;
    Document.prototype.detachEvent = Element.prototype.detachEvent = detach;
  }
  if (!window.event) {
    window.addEventListener('keydown', function (e) { window.event = e; }, true);
    window.addEventListener('keypress', function (e) { window.event = e; }, true);
    window.addEventListener('click', function (e) { window.event = e; }, true);
  }
  window.clipboardData = window.clipboardData || { getData: function () { return ''; }, setData: noop };

  // Another HTA (help page, a different form) opens in the viewer instead of
  // downloading.
  var toViewer = function (url) {
    if (!window.__ebirViewer || !window.__ebirPackage) return null;
    var u = new URL(String(url).replace(/\\/g, '/'), document.baseURI);
    if (!/\.hta$/i.test(u.pathname) || u.href.indexOf(window.__ebirPackage) !== 0) return null;
    return window.__ebirViewer + '?f=' + encodeURIComponent(u.pathname.slice(new URL(window.__ebirPackage).pathname.length));
  };
  var open = window.open;
  window.open = function (url) {
    var v = url && toViewer(url);
    var args = Array.prototype.slice.call(arguments);
    if (v) args[0] = v;
    return open.apply(window, args);
  };
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    var v = a && toViewer(a.getAttribute('href'));
    if (v) { e.preventDefault(); top.location.href = v; }
  }, true);

  // Functions eBIRTools.vbs defines (chkt.exe, Encrypt.exe, FTP/e-mail send).
  // view.html passes the names it found in the .vbs file.
  (window.__ebirVbsFunctions || []).forEach(function (name) {
    if (typeof window[name] === 'undefined') {
      window[name] = function () { report('vbs', name + '() is VBScript; stubbed in preview'); return ''; };
    }
  });
})();
