function updateFromXML() {
    try {
        var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        var loaded = xmlDoc.load("../xml/taxRate.xml");

        if (!loaded || xmlDoc.parseError.errorCode != 0) {
            var myErr = xmlDoc.parseError;
            alert("XML Parsing Error: " + myErr.reason + " at line " + myErr.line);
            return;
        }

        var cells = xmlDoc.getElementsByTagName("cell");

        for (var i = 0; i < cells.length; i++) {
            var cellId = cells[i].getAttribute("id");
            var valueNode = cells[i].getElementsByTagName("value")[0];
            var textNode = cells[i].getElementsByTagName("text")[0];

            if (cellId && valueNode) {
                var element = document.getElementById(cellId);

                if (element) {
                    if (element.tagName.toLowerCase() === "input") {
                        element.value = valueNode.text;
                    } else {
                        element.setAttribute("value", valueNode.text);

                        if (textNode) {
                            element.innerText = textNode.text;
                        }
                    }
                }
            }
        }
    } catch (e) {
        alert("Error loading XML: " + e.message);
    }
}

window.onload = updateFromXML;
//alert("tax-rate-helper.js loaded");