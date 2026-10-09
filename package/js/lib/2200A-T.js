//START MODULE

var wsUrl = enviService.getWsUrl();
var wsSite = enviService.getWsSite();

+(function (window, $, JSON3, undefined) {
    'use strict';
    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    window.escapeXML = function (str) {
        if ($.type(str) === 'string') {
            return str.replace(/&/g, '&amp;')
                       .replace(/</g, '&lt;')
                       .replace(/>/g, '&gt;')
                       .replace(/"/g, '&quot;')
                       .replace(/%/g, '')
                       .replace(/'/g, '&apos;');
        }

        return str;
    };

    var transactionAttr = ['referenceNo', 'retrnPeriod', 'dateFiled', 'taxDue', 'unappliedPymt', 'creditableExcTax', 'totalCredits', 'netTaxDue', 'taxPaidPrevRetrn', 'amtPaybl', 'totPenalties', 'surcharge', 'interest', 'compromise', 'totalAmountPayable', 'taxPymtDep', 'penalties', 'taxPaidToday', 'balSubsequentRemvl', 'batchNo', 'amendedBy', 'numOfSheet', 'tin', 'branchCode', 'amendedYn', 'productionAddress1', 'placeOfRemoval', 'specialRateYn', 'internationalTreatyYn', 'pymtRemovalYn', 'prepaymentAdvYn', 'otherScheme', 'regionProd', 'provinceProd', 'cityProd', 'regionRem', 'provinceRem', 'cityRem', 'payPenaltiesYn', 'offlineFormVersion'];

    var atcAttr = ['atcCode', 'taxExmptRemovals', 'taxableRemovals', 'description', 'taxRate', 'taxDue', 'taxBracket', 'dateFiled', 'category', 'seqNo'];

    var taxPayerAttr = ['tinNumber', 'branchCode'];

    var efpsUserAttr = ['tinNumber', 'branchCode', 'username'];

    var FORM_CODE = {
        A: "Form2200A",
        T: "Form2200T"
    };

    var DEBUG_MODE = {
        ALERT: 1,
        SEND: 2,
		LOG: 4,
        OFF: 0
    };

    var defaultAjaxConfig = {
        type: 'POST',
        contentType: 'text/xml',
        dataType: 'xml',
        crossDomain: true
    };

    var elementType = {
        REGISTERED_TAX_PAYER: "registeredTaxpayer",
        EFPS_REGISTERED_TAX_PAYER: "efpsRegisteredTaxpayer",
        TRANSACTION: "transaction",
        ATC_LIST: "atcList"
    };

    //var saveToLogFile = function (txtObject) {
    //    var today = new Date();
    //    var fileSystemObject = new ActiveXObject("Scripting.FileSystemObject");
    //    var logFile = fileSystemObject.CreateTextFile("WEBSERVICE_LOGS/" + "L" + today.getTime() + "-" + today.getMonth() + "-" + today.getDate() + "-" + today.getFullYear() + ".json");
    //    logFile.write(JSON3.stringify(txtObject));
    //    logFile.close();
   // };

    var validationMethods = {
        required: function (value) {
            return value ? true : false;
        },
        integer: function (value) {
            return /^[0-9]+$/.test(value)
        },
        money: function (value) {
            return /(^(\-[0-9]*|[0-9]*)\.[0-9]+$|^\-[0-9]*$|^[0-9]*$)/.test(value);
        },
        date: function (value) {
            return /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/.test(value);
        },
        yn: function (value) {
            return /^[yYnN]$/.test(value);
        },
        nonzero: function (value) {
            return !/^[0]+$/.test(value);
        }
    };

    var validateObject = function (obj, validationConfig) {
        var attrValidation = null;
        var error = {};
        for (var attr in obj) {//
            //console.log(attr);
            attrValidation = validationConfig[attr];
            if (attrValidation) {
                $(attrValidation.split('|')).each(function (idx, validationMethod) {
                    validationMethod = $.trim(validationMethod);
                    if (!validationMethods[validationMethod](obj[attr])) {
                        error[attr] = error[attr] || {};
                        error[attr][validationMethod] = obj[attr];
                    }
                });

            }
        }
        return error;
    };

    var createElementsFromObject = function (attrList, obj) {
        var objBuff = '';
        for (var attr in attrList) {
            if (attr != "contains") {
                if (!/^function /.test(attrList[attr])) {

                    objBuff += '<' + attrList[attr] + '>' + escapeXML(obj[attrList[attr]] === undefined ? ' ' : obj[attrList[attr]]) + '</' + attrList[attr] + '>';

                }
            }

        }
        return objBuff;
    };

    var createXMLElement = function (attrList, obj, elementType) {
        if ($.isPlainObject(obj)) {
            return '<' + elementType + '>' + createElementsFromObject(attrList, obj) + '</' + elementType + '>';
        } else if ($.isArray(obj)) {
            var arrayBuff = '';
            for (var idx in obj) {
                if (idx != "contains") {
                    arrayBuff += '<' + elementType + '>' + createElementsFromObject(attrList, obj[idx]) + '</' + elementType + '>';
                }
            }

            return arrayBuff;
        }
    };

    var createRegisteredTaxPayerElement = function (attrList, obj) {
        return '<registeredTaxpayer>' + createElementsFromObject(attrList, obj) + '</registeredTaxpayer>';
    }

    var createEfpsRegisteredTaxPayerElement = function (attrList, obj) {
        return '<efpsRegisteredTaxpayer>' + createElementsFromObject(attrList, obj) + '</efpsRegisteredTaxpayer>';
    }

    var generateIsRegisteredTaxPayerSoapXML = function (tin, branchcode) {
        var top = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.client.ph.gov.bir.web"><soapenv:Header/><soapenv:Body><ws:isRegisteredTaxpayer>';
        var bottom = '</ws:isRegisteredTaxpayer></soapenv:Body></soapenv:Envelope>';

        return top + createXMLElement(taxPayerAttr, { tinNumber: tin, branchCode: branchcode }, elementType.REGISTERED_TAX_PAYER) + bottom;
    };

    var generateIsRegisteredEfpsUserSoapXML = function (tin, branchcode, username) {
        var top = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.client.ph.gov.bir.web"><soapenv:Header/><soapenv:Body><ws:isEfpsRegisteredTaxpayer>';
        var bottom = '</ws:isEfpsRegisteredTaxpayer></soapenv:Body></soapenv:Envelope>';

        return top + createXMLElement(efpsUserAttr, { tinNumber: tin, branchCode: branchcode, username: username }, elementType.EFPS_REGISTERED_TAX_PAYER) + bottom;
    };

    var generateFormSoapXML = function (transaction, atcList, formName) {

        var top = "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:ws='http://ws.client.ph.gov.bir.web'><soapenv:Header/><soapenv:Body><ws:submit" + formName + "><formBean>";
        var bottom = "</formBean></ws:submit" + formName + "></soapenv:Body></soapenv:Envelope>";

        return top + createXMLElement(transactionAttr, transaction, elementType.TRANSACTION) + createXMLElement(atcAttr, atcList, elementType.ATC_LIST) + bottom;
    };

    window.EFPSForm2200 = function (userFormCode, userWsUrl, userDebugMode) {
        var formName = userFormCode;
        var wsUrl = userWsUrl;
        var atcList = [];
        var trans = {};
        var successCallback = null;
        var failedCallback = null;
        var debugMode = userDebugMode || EFPSForm2200.DEBUG.OFF;
        var validationConfig = {};
        var errors = {};

        $.support.cors = true;

        return {
            setTransValidationConfig: function (userConfig) {
                validationConfig["trans"] = $.extend({}, validationConfig["trans"], userConfig);
            },
            setAtcListValidationConfig: function (userConfig) {
                validationConfig["atcList"] = $.extend({}, validationConfig["atcList"], userConfig);
            },
            setSuccessCallback: function (callback) {
                successCallback = callback;
            },
            setFailedCallback: function (callback) {
                failedCallback = callback;
            },
            clearData: function () {
                atcList = [];
                trans = {};
            },
            setTrans: function (userTrans) {
                if ($.isPlainObject(userTrans)) {
                    trans = userTrans;
                }
            },
            setAtcList: function (userAtcList) {
                if ($.isArray(userAtcList)) {
                    atcList = userAtcList;
                }
            },
            transactionBuilder: function () {
                var transMethods = {};

                for (var idx in transactionAttr) {
                    transMethods["set" + transactionAttr[idx].capitalize()] = (
                        function (attr) {
                            return function (val) { this.transaction[attr] = val; return this; };
                        })(transactionAttr[idx]);
                }

                transMethods.transaction = {};

                transMethods.save = function () {
                    trans = this.transaction;
                };

                return transMethods;
            },
            addAtc: function (userAtc) {
                if ($.isPlainObject(userAtc)) {
                    atcList.push(userAtc);
                }
            },
            atcBuilder: function () {
                var atcMethods = {};
                for (var idx in atcAttr) {
                    atcMethods["set" + atcAttr[idx].capitalize()] = (
                        function (attr) {
                            return function (val) { this.atc[attr] = val; return this; };
                        })(atcAttr[idx]);
                }

                atcMethods.atc = {};

                atcMethods.save = function () {
                    atcList.push(this.atc);
                };

                return atcMethods;
            },
            isRegisteredTaxPayer: function (tin, branchcode) {
                var data = generateIsRegisteredTaxPayerSoapXML(tin, branchcode);

                if (debugMode === EFPSForm2200.DEBUG.OFF) {
                    return $.ajax($.extend({}, ajaxConfig, { url: wsUrl, data: data }));
                } else if (debugMode === EFPSForm2200.DEBUG.ALERT_SEND) {
                    alert(data);
                    return $.ajax($.extend({}, ajaxConfig, { url: wsUrl, data: data }));
                } else if (debugMode === EFPSForm2200.DEBUG.ALERT) {
                    alert(data);
                }
            },
            isEfpsUser: function (tin, branchcode, username) {
                var data = generateIsRegisteredEfpsUserSoapXML(tin, branchcode, username);

                if (debugMode === EFPSForm2200.DEBUG.OFF) {
                    return $.ajax($.extend({}, ajaxConfig, { url: wsUrl, data: data }));
                } else if (debugMode === EFPSForm2200.DEBUG.ALERT_SEND) {
                    alert(data);
                    return $.ajax($.extend({}, ajaxConfig, { url: wsUrl, data: data }));
                } else if (debugMode === EFPSForm2200.DEBUG.ALERT) {
                    alert(data);
                }
            },
            validate: function (trans, atcList) {
                errors.trans = {};
                errors.atcList = [];
                var tempObj = null;
                if (!$.isEmptyObject(validationConfig.trans)) {
                    tempObj = validateObject(trans, validationConfig.trans);
                    if (!$.isEmptyObject(tempObj)) {
                        errors.trans = tempObj;
                    }
                }
                if (!$.isEmptyObject(validationConfig.atcList)) {
                    for (var idx in atcList) {
                        tempObj = validateObject(atcList[idx], validationConfig.atcList);
                        if (!$.isEmptyObject(tempObj)) {
                            errors.atcList.push(tempObj);
                        }
                    }
                }
            },
            submitForm: function () {
                var data = generateFormSoapXML(trans, atcList, formName); //console.log("At submit");
                var logData = {};
                if (!$.isEmptyObject(validationConfig.trans) || !$.isEmptyObject(validationConfig.atcList)) {//console.log("At validate");
                    this.validate(trans, atcList);
                }

                var ajaxConfig = $.extend({}, defaultAjaxConfig, { url: wsUrl, data: data, beforeSend: function (xhr) { xhr.setRequestHeader('SOAPAction', 'urn:Submit' + formName); } });
                //remove this line when in prod
				

				if(debugMode!==DEBUG_MODE.OFF){
				//Enable file logging on debug
					if(debugMode&DEBUG_MODE.LOG){
				//		saveToLogFile({ data: data, errors: errors });
					}
				//Enable Alert on Debug
					if(debugMode&DEBUG_MODE.ALERT){
						alert(data);
					}
				//Enable Sending on debug
					if(debugMode&DEBUG_MODE.SEND){
						return $.ajax(ajaxConfig)
							.done(successCallback)
							.fail(failedCallback);
						
					}
				} else {
                    return $.ajax(ajaxConfig)
                        .done(successCallback)
                        .fail(failedCallback);
				}
			
            }
        }; //END return
    }; //END EFPSForm2200

    window.EFPSForm2200.CODE = FORM_CODE;
    window.EFPSForm2200.DEBUG = DEBUG_MODE;


})(window, jQuery, JSON3);
//END MODULE
// integer: 1

//var saveToLogFile = function (txtObject) {
//    var today = new Date();
//    var fileSystemObject = new ActiveXObject("Scripting.FileSystemObject");
//    var logFile = fileSystemObject.CreateTextFile("WEBSERVICE_LOGS/" + "L" + today.getTime() + "-" + today.getMonth() + "-" + today.getDate() + "-" + today.getFullYear() + ".json");
//    logFile.write(JSON3.stringify(txtObject));
//    logFile.close();
//};

var processSuccess = function (data, status, req) {
    alert(data.text);
    var shell = new ActiveXObject("WScript.Shell");
    if (status == "success" && data.text.indexOf("now be redirected") > -1) {
        //var shell = new ActiveXObject("WScript.Shell");
        //shell.run("chrome " + wsSite);
	setTimeout(function () { shell.run(wsSite) }, 1000);    }
}

var processError = function (data, status, req) {

//    saveToLogFile(JSON3.stringify(arguments));

    alert(typeof data.text == "undefined" ? "Failed to connect to efps online." : data.text);

    $("#response").text(data.responseText + ' ' + status);
}

//CONFIGURE DATA CONFIGURATION FOR TRANS
var transValidation = {
    referenceNo: "integer",
    retrnPeriod: "required|date",
    dateFiled: "date",
    taxDue: "required|money",
    unappliedPymt: "required|money",
    creditableExcTax: "required|money",
    totalCredits: "required|money",
    netTaxDue: "required|money",
    taxPaidPrevRetrn: "required|money",
    amtPaybl: "required|money",
    totPenalties: "required|money",
    surcharge: "required|money",
    interest: "required|money",
    compromise: "required|money",
    totalAmountPayable: "required|money",
    taxPymtDep: "required|money",
    penalties: "required|money",
    taxPaidToday: "required|money",
    balSubsequentRemvl: "required|money",
    batchNo: "integer",
    amendedBy: "integer",
    numOfSheet: "integer",
    tin: "required",
    branchCode: "required",
    amendedYn: "required|yn",
    productionAddress1: "",
    placeOfRemoval: "",
    specialRateYn: "required|yn",
    internationalTreatyYn: "required|yn",
    pymtRemovalYn: "required|yn",
    prepaymentAdvYn: "required|yn",
    otherScheme: "",
    regionProd: "required|nonzero",
    provinceProd: "required|nonzero",
    cityProd: "required|nonzero",
    regionRem: "required|nonzero",
    provinceRem: "required|nonzero",
    cityRem: "required|nonzero",
    payPenaltiesYn: "required|yn"
};
//CONFIGURE DATA CONFIGURATION FOR SCHED 1
var atcListValidation = {
    atcCode: "required",
    seqNo: "required|integer",
    category: "required",
    taxExmptRemovals: "required|money",
    taxableRemovals: "required|money",
    description: "",
    taxRate: "required|money",
    taxDue: "required|money",
    taxBracket: "",
    dateFiled: "date"
};
