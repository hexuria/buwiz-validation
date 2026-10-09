function replaceVal(param) {
    param = param.replace(/(<b>|<\/b>)/g, '');
    param = param.replace(/<br\/>/g, ' ');
    param = param.replace(/&lt;=/g, ' less than or equal to ');
    param = param.replace(/&gt;=/g, ' greater than or equal to ');
    param = param.replace(/<=/g, ' less than or equal to ');
    param = param.replace(/>=/g, ' greater than or equal to ');
    param = param.replace(/&lt;/g, ' less than ');
    param = param.replace(/&gt;/g, ' greater than ');
    param = param.replace(/&amp;/g, ' and ');
    param = param.replace(/&/g, ' and ');
    param = param.replace(/</g, ' less than ');
    param = param.replace(/>/g, ' greater than ');
    param = param.replace(/  +/g, ' ');
    param = param.replace(/\( /g, "(");
    param = param.replace(/Ñ/g, "N");
    param = param.replace(/ñ/g, "n");
    param = param.replace(/[\u200B-\u200D\uFEFF]/g, '');

    return param;
}


function formatToObject(FormType, stringSaveFile, dateFiled) {
    var retParseObj = "",
        additionalFields = "",
        address = "";
    retParseObj = formatSoapObject(stringSaveFile);

    if (FormType != "1700v2013" && FormType != "1701v2013" && FormType != "1702EXv2013" && FormType != "1702MXv2013" && FormType != "1702RTv2013"
    && FormType != "2200Av2013" && FormType != "2200Tv2013" && FormType != "1707A") {
        address = getAddress(stringSaveFile, FormType);
        additionalFields = "<AdditionalFields>" + populateAdditionalFields(stringSaveFile, FormType, dateFiled) + "<txtAddress>" + replaceVal(unescape(address)) + "</txtAddress></AdditionalFields>";
        retParseObj = retParseObj.split("</formBean>")[0] + additionalFields + "</formBean>";
    }
    
    //overwrite dateFiled for forms 1700, 1701, 1701Qv2018, 1702EX, 1702MX, 1702RT, 2200A, 2200T
    if (FormType == "1700v2013" || FormType == "1701v2013" || FormType == "1701Qv2018" || FormType == "1702EXv2013" || FormType == "1702MXv2013" || FormType == "1702RTv2013"
    || FormType == "2200Av2013" || FormType == "2200Tv2013") {
        
        if (dateFiled != null) {
             var addFields = "<AdditionalFields>" + retParseObj.split("<AdditionalFields>")[1];
             addFields = addFields.split("dateFiled")[0] + "dateFiled>" + dateFiled.substring(0,14) + "</dateFiled" + addFields.split("dateFiled")[2];
            retParseObj = retParseObj.split("<AdditionalFields>")[0] + addFields;
        }
    }

    return retParseObj;
}


function getAddress(stringSaveFile, FormType) {
    //Returns Address field value
    var addressVal = '';
    var addressField = '';

    if (FormType == '0605' || FormType == '0619E' || FormType == '0619F' || FormType == '1600' || FormType == '1600WP' || FormType == '1601C' ||  FormType == '1601Cv2018' || 
        FormType == '1601E' || FormType == '1601F' || FormType == '1602' || FormType == '1602Qv2018' || FormType == '1604E' || FormType == '1704' || FormType == '1801' ||
        FormType == '2000' || FormType == '2000OT' || FormType == '2200AN' || FormType == '2200M' || FormType == '2200P' ||
        FormType == '2550M' || FormType == '2550Q' || FormType == '2551M' || FormType == '2552' || FormType == '2553' || FormType == '1701Qv2018') {
        var frmType = (FormType == '1601C' || FormType == '1604E' || FormType == '2550M' || FormType == '2550Q' || FormType == '2551M' || FormType == '1701Qv2018') ? FormType.toLowerCase() : FormType;
        addressField = "frm" + frmType + ":" + "txtAddress";

    } else if (FormType == '1602Qv2018' || FormType == '1603Qv2018' ||FormType == '2200Av2006' || FormType == '2200Tv2006') {
        addressField = "frm" + (FormType.split("v")[0]) + ":" + "txtAddress";
    } else if (FormType == '1603' || FormType == '1604CF') {
        addressField = "frm" + FormType.toLowerCase() + ":" + "registeredAddress";
    } else if (FormType == '1706' || FormType == '1707') {
        addressField = "frm" + FormType + ":" + "txtSellerAddress";
    } else if (FormType == '1606') {
        addressField = "frm" + FormType + ":" + "txtBuyerAddress";
    } else if (FormType == '1701Qv2008') {
        addressField = "frm" + (FormType.split("v")[0]).toLowerCase() + ":" + "txt11Address";
    } else if (FormType == '1702Qv2008') {
        addressField = "frm" + (FormType.split("v")[0]).toLowerCase() + ":" + "txtTaxPayerAdd";
    } else if (FormType == '1800') {
        addressField = "frm" + FormType + ":" + "txtAddress1";
    } else if (FormType == '2551Q') {
        addressField = "frm2551:registeredAddress";
    } else if (FormType == '2551Qv2018') {
        addressField = "frm2551Qv2018:registeredAddress";
    } else if (FormType == '1601EQ') {
        addressField = 'frm1601EQ:txtAddress';
    } else if (FormType == '1601FQ') {
        addressField = 'frm1601FQ:txtAddress';
    }

    var splitVal = stringSaveFile.split(addressField + "=");
    
    if (typeof (splitVal[1]) !== "undefined") {
        addressVal = unescape(splitVal[1]);
    }

    return addressVal.toString().substring(0, 100);
}


function populateAdditionalFields(xmlString, FormType, DateFiled) {
    //Format AdditionalFields tag
    var xmlArr = xmlString.split("<div>");
    newDateFiled = "";
    additionalFields = "";
    var totalNoDateFiled = 0;

    for (var i = 1; i < (xmlArr.length) ; i++) {
        var elementName = xmlArr[i].toString().split("=");
        var elementVal = xmlArr[i].toString().split(elementName[0] + "=");
        var elemVal = replaceVal(unescape(elementVal[1]));
        if (elemVal.indexOf(',') > -1 && elemVal.indexOf('.') > -1) {
            var str = elemVal.replace(/,/g, '');
            if (!isNaN(str)) {
                elemVal = str;
            }
        }
        if (FormType == '1702Qv2008' && elementName[0] == '1702q:OptMethodDeduct_1' || elementName[0] == '1702q:OptMethodDeduct_2') {
            additionalFields = additionalFields + "<frm" + elementName[0] + ">" + elemVal + "</frm" + elementName[0] + ">\r\n";
        }
        else if ((FormType == '2200AN' || FormType == '2200M' || FormType == '2200P') && elementName[0].toString().indexOf("optCity") > -1) {
            if (elemVal === '062200AN000' || elemVal === '062200M000' || elemVal === '062200P000') {
                elemVal = '060602000';
            } else if (elemVal === '0060400000') {
                elemVal = '060400000';
            } else if (elemVal === '0430421000') {
                elemVal = '430421000';
            }
            additionalFields = additionalFields + "<" + elementName[0] + ">" + elemVal + "</" + elementName[0] + ">\r\n";
        }
        else {
            additionalFields = additionalFields + "<" + elementName[0] + ">" + elemVal + "</" + elementName[0] + ">\r\n";
        }

    }

    if (additionalFields.indexOf("dateFiled") == -1 && additionalFields.indexOf("frn") == -1) {
        additionalFields = additionalFields + "<dateFiled>" + DateFiled + "</dateFiled><frn></frn>";
        totalNoDateFiled++;
    }
    
    //1601EQ modified 20180808
    if (additionalFields.indexOf("dateFiled") == -1 && FormType == '1601EQ') {
        newDateFiled = getDateToday();
        additionalFields = additionalFields + "<dateFiled>" + newDateFiled + "</dateFiled><frn></frn>";
        totalNoDateFiled++;
    }

    return additionalFields.replace(/:/g, "__");
}