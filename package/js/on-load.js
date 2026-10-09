function loadXMLforSelect() {
    // Helper: get current HTA base path
    function getHtaBasePath() {
        var path = unescape(location.pathname);
        return path.substring(0, path.lastIndexOf("/") + 1);
    }

    // Load country codes
    var xmlCountries = new ActiveXObject("Microsoft.XMLDOM");
    xmlCountries.async = false;

    var xmlPath = "../xml/countryCodes.xml";
    //alert(xmlPath);

    if (!xmlCountries.load(xmlPath)) {
        alert("Failed to load country codes XML:\n" + xmlPath);
        return;
    }

    var countries = xmlCountries.getElementsByTagName("Country");
    var selectElements = document.getElementsByName("frm1709:txtJurisdiction");

    for (var j = 0; j < selectElements.length; j++) {
        var selectElement = selectElements[j];

        for (var i = 0; i < countries.length; i++) {
            var isoCode = countries[i]
                .getElementsByTagName("ISOCode")[0].text;
            var name = countries[i]
                .getElementsByTagName("Name")[0].text;

            var option = document.createElement("option");
            option.value = isoCode;
            option.text = name;

            selectElement.add(option);
        }
    }

    // Load relationships 
    var xmlSelects = new ActiveXObject("Microsoft.XMLDOM");
    xmlSelects.async = false;
    xmlSelects.load("../xml/1709v2025/1709_natureOfRelationship.xml");

    var relations = xmlSelects.getElementsByTagName("Relation");
    var relationSelects = document.getElementsByName("frm1709:txtNatureOfRelationship");

    for (var j = 0; j < relationSelects.length; j++) {
        var selectElement = relationSelects[j];
        for (var i = 0; i < relations.length; i++) {
            var value = relations[i].getElementsByTagName("Value")[0].text;
            var desc = relations[i].getElementsByTagName("Desc")[0].text;

            var option = document.createElement("option");
            option.value = value;
            option.text = desc;
            selectElement.add(option);
        }
    }

    // Load income transactions (Part 3A)
    var xmlTransaction = new ActiveXObject("Microsoft.XMLDOM");
    xmlTransaction.async = false;
    xmlTransaction.load("../xml/1709v2025/1709_transaction_income.xml");

    var transactions = xmlTransaction.getElementsByTagName("Transaction");
    var incomeSelects = [
        document.getElementById("frm1709:txtIncTransactionI1"),
        document.getElementById("frm1709:txtIncTransactionI2"),
        document.getElementById("frm1709:txtIncTransactionI3")
    ];

    for (var j = 0; j < incomeSelects.length; j++) {
        var selectElement = incomeSelects[j];
        for (var i = 0; i < transactions.length; i++) {
            var value = transactions[i].getElementsByTagName("Value")[0].text;
            var desc = transactions[i].getElementsByTagName("Desc")[0].text;
            var option = document.createElement("option");
            option.value = value;
            option.text = desc;
            selectElement.add(option);
        }
    }

    // Load expense transactions (Part 3B)
    var xmlTransactionExp = new ActiveXObject("Microsoft.XMLDOM");
    xmlTransactionExp.async = false;
    xmlTransactionExp.load("../xml/1709v2025/1709_transaction_expense.xml");

    var transactionsExp = xmlTransactionExp.getElementsByTagName("Transaction");
    var expenseSelects = [
        document.getElementById("frm1709:txtExpTransactionI1"),
        document.getElementById("frm1709:txtExpTransactionI2"),
        document.getElementById("frm1709:txtExpTransactionI3")
    ];

    for (var j = 0; j < expenseSelects.length; j++) {
        var selectElement = expenseSelects[j];
        for (var i = 0; i < transactionsExp.length; i++) {
            var value = transactionsExp[i].getElementsByTagName("Value")[0].text;
            var desc = transactionsExp[i].getElementsByTagName("Desc")[0].text;
            var option = document.createElement("option");
            option.value = value;
            option.text = desc;
            selectElement.add(option);
        }
    }

    // Load transfer pricing method
    var xmlTransPricing = new ActiveXObject("Microsoft.XMLDOM");
    xmlTransPricing.async = false;
    xmlTransPricing.load("../xml/1709v2025/1709_transferPricingMethod.xml");

    var transPricing = xmlTransPricing.getElementsByTagName("Method");
    var transPricingSelects = document.getElementsByName("frm1709:txtTransPricingMethod");

    for (var j = 0; j < transPricingSelects.length; j++) {
        var selectElement = transPricingSelects[j];

        while (selectElement.options.length > 0) { selectElement.remove(0); }

        var blankOpt = document.createElement("option");
        blankOpt.value = "";
        blankOpt.text = "";
        blankOpt.disabled = true;
        selectElement.add(blankOpt);
        selectElement.selectedIndex = 0;

        for (var i = 0; i < transPricing.length; i++) {
            var value = transPricing[i].getElementsByTagName("Value")[0].text;
            var abbrNode = transPricing[i].getElementsByTagName("Abbr")[0];
            var abbr = abbrNode ? abbrNode.text : value;
            var desc = transPricing[i].getElementsByTagName("Desc")[0].text;
            var fullText = abbr + " - " + desc;

            var option = document.createElement("option");
            option.value = value;
            option.text = fullText;
            option.setAttribute("data-abbr", abbr);
            option.setAttribute("data-full", fullText);
            selectElement.add(option);
        }
    }

    // Load profit level indicator
    var xmlPLI = new ActiveXObject("Microsoft.XMLDOM");
    xmlPLI.async = false;
    xmlPLI.load("../xml/1709v2025/1709_profitLevelIndicator.xml");

    var profitLevel = xmlPLI.getElementsByTagName("Level");
    var profitLevelSelects = document.getElementsByName("frm1709:txtProfitLevelIndicator");

    for (var j = 0; j < profitLevelSelects.length; j++) {
        var selectElement = profitLevelSelects[j];

        while (selectElement.options.length > 0) { selectElement.remove(0); }

        var blankOpt = document.createElement("option");
        blankOpt.value = "";
        blankOpt.text = "";
        blankOpt.disabled = true;
        selectElement.add(blankOpt);
        selectElement.selectedIndex = 0;

        for (var i = 0; i < profitLevel.length; i++) {
            var value = profitLevel[i].getElementsByTagName("Value")[0].text;
            var abbrNode = profitLevel[i].getElementsByTagName("Abbr")[0];
            var abbr = abbrNode ? abbrNode.text : value;
            var desc = profitLevel[i].getElementsByTagName("Desc")[0].text;
            var fullText = abbr + " - " + desc;

            var option = document.createElement("option");
            option.value = value;
            option.text = fullText;
            option.setAttribute("data-abbr", abbr);
            option.setAttribute("data-full", fullText);
            selectElement.add(option);
        }
    }

    // Load double taxation agreement countries
    var xmlPLI = new ActiveXObject("Microsoft.XMLDOM");
    xmlPLI.async = false;
    xmlPLI.load("../xml/1709v2025/1709_doubleTaxationAgrmnt.xml");

    var profitLevel = xmlPLI.getElementsByTagName("Country");
    var profitLevelSelects = document.getElementsByName("frm1709:txtDTA");

    for (var j = 0; j < profitLevelSelects.length; j++) {
        var selectElement = profitLevelSelects[j];
        for (var i = 0; i < profitLevel.length; i++) {
            var value = profitLevel[i].getElementsByTagName("Value")[0].text;
            var desc = profitLevel[i].getElementsByTagName("Desc")[0].text;

            var option = document.createElement("option");
            option.value = value;
            option.text = desc;
            selectElement.add(option);
        }
    }

}