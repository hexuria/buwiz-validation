var wsUrl = enviService.getWsUrl();
var wsSite = enviService.getWsSite();
//Page 1 
//Part 1 Taxpayer
var taxpayer = {};
// Spouse
var taxpayerspouse = {};
// Qualified Dependents
var taxpayerdependent = {};
var TaxPayerDependentList = [];
// Address
var taxpayeraddress = {};
var taxpayeremployers = {};
var TaxpayerEmployersList = [];
var taxpayerspouseemployers = {};
var TaxpayerSpouseEmployersList = [];
// Page 2 Employer Compensation
// Taxpayer
var taxpayeremployercompensation = {};
// Spouse
var taxpayerspouseemployercompensation = {};
// page 3
var taxpayergrossincome = {};
var taxpayercompensationsubject = {};
var taxpayerCompensationSubjectList = [];
var taxpayerrealpropertysales = {};
var taxpayerRealPropertySalesList = [];
var taxpayerstockshares = {};
var taxpayerStockSharesList = [];
var taxpayerotherincome = {};
var taxpayerOtherIncomeList = [];
var taxpayergrossincomeexempt = {};
var taxpayerpersonalpropertyreceived = {};
var TaxpayerPersonalPropertyReceivedList = [];
var taxpayerotherexemptincome = {};
var TaxpayerOtherExemptIncomeList = [];
var taxpayergrosstaxablecompensation = {};
var taxpayerspousegrosstaxablecompensation = {};
var otherTaxableIncomes = {};
var OtherTaxableIncomeList = [];
var taxpayertaxcredit = {};
var taxpayerspousetaxcredit = {};
var taxpayerpenalty = {};
var taxpayable = {};



function populateTaxpayer(forTheYear, ammendedYN, jointFilling,
		compensationIncome, otherIncome, tin1, tin2, tin3, branchCode, rdoCode,
		psocCode, firstName, lastName, middleInitial, registeredAddress,
		changedAddressYN, birthDate, emailAddress, contactNumber, civilStatus,
		claimingAdditionalExemption, numberQualifiedDependent,
		authorizedRepresentative, numPagesFiled, govtIssuedId, govtIssueIdType,
		govtIssuedIdPlace, govtIssuedIdDate, govtIssuedIdAmount, dateFiled,
		dueDate, returnPeriod, dateRegistered, formVersion, dateOfBirth, offlineFormVersion) {

    taxpayer = {

        forTheYear: forTheYear,
        ammendedYN: ammendedYN,
        jointFilling: jointFilling,
        compensationIncome: compensationIncome,
        otherIncome: otherIncome,
        tin1: tin1,
        tin2: tin2,
        tin3: tin3,
        branchCode: branchCode,
        rdoCode: rdoCode,
        psocCode: psocCode,
        firstName: firstName,
        lastName: lastName,
        middleInitial: middleInitial,
        registeredAddress: registeredAddress,
        changedAddressYN: changedAddressYN,
        birthDate: birthDate,
        emailAddress: emailAddress,
        contactNumber: contactNumber,
        civilStatus: civilStatus,
        claimingAdditionalExemption: claimingAdditionalExemption,
        numberQualifiedDependent: numberQualifiedDependent,
        authorizedRepresentative: authorizedRepresentative,
        numPagesFiled: numPagesFiled,
        govtIssuedId: govtIssuedId,
        govtIssueIdType: govtIssueIdType,
        govtIssuedIdPlace: govtIssuedIdPlace,
        govtIssuedIdDate: govtIssuedIdDate,
        govtIssuedIdAmount: govtIssuedIdAmount,
        dateFiled: dateFiled,
        dueDate: dueDate,
        returnPeriod: returnPeriod,
        dateRegistered: dateRegistered,
        formVersion: formVersion,
        dateOfBirth: dateOfBirth,
        offlineFormVersion: offlineFormVersion
    };
};

function populateTaxpayerSpouse(firstName, lastName, middleInitial, tin1, tin2,
		tin3, branchCode, contactNumber, birthDate, emailAddress,
		claimingAdditionalExemption, numberQualifiedDependent) {

    taxpayerspouse = {

        firstName: firstName,
        lastName: lastName,
        middleInitial: middleInitial,
        tin1: tin1,
        tin2: tin2,
        tin3: tin3,
        branchCode: branchCode,
        contactNumber: contactNumber,
        birthDate: birthDate,
        emailAddress: emailAddress,
        claimingAdditionalExemption: claimingAdditionalExemption,
        numberQualifiedDependent: numberQualifiedDependent
    };

};

function populateTaxpayerDependent(firstName, lastName, middleInitial,
		birthDate, taxpayerRelation, incapacitatedYn) {

    taxpayerdependent = {

        firstName: firstName,
        lastName: lastName,
        middleInitial: middleInitial,
        birthDate: birthDate,
        taxpayerRelation: taxpayerRelation,
        incapacitatedYn: incapacitatedYn
    };
    TaxPayerDependentList.push(taxpayerdependent);

};

function populateTaxpayerAddress(unitNo, bldgName, lotNo, blockNo, phaseNo,
		houseNo, streetName, subdOrVill, barangay, municipality, province,
		zipCode, isCurrent) {

    taxpayeraddress = {

        unitNo: unitNo,
        bldgName: bldgName,
        lotNo: lotNo,
        blockNo: blockNo,
        phaseNo: phaseNo,
        houseNo: houseNo,
        streetName: streetName,
        subdOrVill: subdOrVill,
        barangay: barangay,
        municipality: municipality,
        province: province,
        zipCode: zipCode,
        isCurrent: isCurrent

    };
};

function populateTaxpayerEmployers(employer, employerTin1, employerTin2,
		employerTin3, employerBranchCode, taxFilerOrSps, compensationIcome,
		employerTaxWithheld) {

    taxpayeremployers = {

        employer: employer,
        employerTin1: employerTin1,
        employerTin2: employerTin2,
        employerTin3: employerTin3,
        employerBranchCode: employerBranchCode,
        taxFilerOrSps: taxFilerOrSps,
        compensationIcome: compensationIcome,
        employerTaxWithheld: employerTaxWithheld
    };
    TaxpayerEmployersList.push(taxpayeremployers);
};

function populateTaxpayerSpouseEmployers(employer, employerTin1, employerTin2,
		employerTin3, employerBranchCode, compensationIcome, employerTaxWithheld) {

    taxpayerspouseemployers = {

        employer: employer,
        employerTin1: employerTin1,
        employerTin2: employerTin2,
        employerTin3: employerTin3,
        employerBranchCode: employerBranchCode,
        compensationIcome: compensationIcome,
        employerTaxWithheld: employerTaxWithheld
    };
    TaxpayerSpouseEmployersList.push(taxpayerspouseemployers);
};

function populateTaxpayerEmployerCompensation(totalCompensationIncome, totalTaxWithheld) {

    taxpayeremployercompensation = {

        totalCompensationIncome: totalCompensationIncome,
        totalTaxWithheld: totalTaxWithheld

    };
};

function populateTaxpayerSpouseEmployerCompensation(totalCompensationIncome, totalTaxWithheld) {

    taxpayerspouseemployercompensation = {

        totalCompensationIncome: totalCompensationIncome,
        totalTaxWithheld: totalTaxWithheld

    };
};

function populateTaxpayerGrossIncome(interestExempt, interestsActualAmt,
		royaltiesActualAmt, dividendsActualAmt, prizesWinningsActualAmt,
		fringeBenefitsActualAmt, compSubjTo15PrefRateActualAmt, interestsFinalTaxWthldPd,
		royaltiesFinalTaxWthldPd, dividendsFinalTaxWthldPd, prizesWinningsFinalTaxWthldPd,
		fringeBenefitsFinalTaxWthldPd, compSubjTo15PrefRateFinalTaxWthldPd, totalFinalTaxWithheldOrPaid) {

    taxpayergrossincome = {

        interestExempt: interestExempt,
        interestsActualAmt: interestsActualAmt,
        royaltiesActualAmt: royaltiesActualAmt,
        dividendsActualAmt: dividendsActualAmt,
        prizesWinningsActualAmt: prizesWinningsActualAmt,
        fringeBenefitsActualAmt: fringeBenefitsActualAmt,
        compSubjTo15PrefRateActualAmt: compSubjTo15PrefRateActualAmt,
        interestsFinalTaxWthldPd: interestsFinalTaxWthldPd,
        royaltiesFinalTaxWthldPd: royaltiesFinalTaxWthldPd,
        dividendsFinalTaxWthldPd: dividendsFinalTaxWthldPd,
        prizesWinningsFinalTaxWthldPd: prizesWinningsFinalTaxWthldPd,
        fringeBenefitsFinalTaxWthldPd: fringeBenefitsFinalTaxWthldPd,
        compSubjTo15PrefRateFinalTaxWthldPd: compSubjTo15PrefRateFinalTaxWthldPd,
        totalFinalTaxWithheldOrPaid: totalFinalTaxWithheldOrPaid
    };

};

function populateTaxpayerCompensationSubject(actualFairMarketValue, finalTaxWithheld, description) {

    taxpayercompensationsubject = {

        actualFairMarketValue: actualFairMarketValue,
        finalTaxWithheld: finalTaxWithheld,
        description: description
    };
    taxpayerCompensationSubjectList.push(taxpayercompensationsubject);

};

function populateTaxpayerRealPropertySales(propDescription, taxDeclNo, carNo, actualAmount, propertyTaxWithheld) {

    taxpayerrealpropertysales = {

        propDescription: propDescription,
        taxDeclNo: taxDeclNo,
        carNo: carNo,
        actualAmount: actualAmount,
        propertyTaxWithheld: propertyTaxWithheld
    };
    taxpayerRealPropertySalesList.push(taxpayerrealpropertysales);

};

function populateTaxpayerStockShares(stockKind, stockSeries, stockCARNo, numShares, dateIssued, stockActualAmount, stockTaxWithheld) {

    taxpayerstockshares = {

        stockKind: stockKind,
        stockSeries: stockSeries,
        stockCARNo: stockCARNo,
        numShares: numShares,
        dateIssued: dateIssued,
        stockActualAmount: stockActualAmount,
        stockTaxWithheld: stockTaxWithheld
    };
    taxpayerStockSharesList.push(taxpayerstockshares);
};

function populateTaxpayerOtherIncome(otherIncome, actualAmount, otherIncomeTaxWithheld) {

    taxpayerotherincome = {

        otherIncome: otherIncome,
        actualAmount: actualAmount,
        otherIncomeTaxWithheld: otherIncomeTaxWithheld
    };
    taxpayerOtherIncomeList.push(taxpayerotherincome);

};

function populateTaxpayerGrossIncomeExempt(proceedsOfInsurance, returnOfPremium, retirementBenefitsEtc, totalFinalTaxWithheldOrPaid,
											TaxpayerPersonalPropertyReceivedList, TaxpayerOtherExemptIncomeList) {

    taxpayergrossincomeexempt = {

        proceedsOfInsurance: proceedsOfInsurance,
        returnOfPremium: returnOfPremium,
        retirementBenefitsEtc: retirementBenefitsEtc,
        totalFinalTaxWithheldOrPaid: totalFinalTaxWithheldOrPaid,
        TaxpayerPersonalPropertyReceivedList: TaxpayerPersonalPropertyReceivedList,
        TaxpayerOtherExemptIncomeList: TaxpayerOtherExemptIncomeList
    };

};

function populateTaxpayerPersonalPropertyReceived(personalPropertyDesc, personalPropertyTransferMode,
		personalPropertyCARNo, personalPropertyActualAmount) {

    taxpayerpersonalpropertyreceived = {

        personalPropertyDesc: personalPropertyDesc,
        personalPropertyTransferMode: personalPropertyTransferMode,
        personalPropertyCARNo: personalPropertyCARNo,
        personalPropertyActualAmount: personalPropertyActualAmount

    };
    TaxpayerPersonalPropertyReceivedList.push(taxpayerpersonalpropertyreceived);

};

function populateTaxpayerOtherExemptIncome(otherIncome, actualAmount) {

    taxpayerotherexemptincome = {

        otherIncome: otherIncome,
        actualAmount: actualAmount
    };
    TaxpayerOtherExemptIncomeList.push(taxpayerotherexemptincome);

};

function populateTaxpayerGrossTaxableCompensation(additionalExemption, grossTaxableCompensationIncome,
		netTaxableCompensation, nonTaxableIncome, personalExemption, premiumOnHelathInsurance, totalDeductions, totalIncomeTaxDue, totalTaxableIncome) {

    taxpayergrosstaxablecompensation = {

        additionalExemption: additionalExemption,
        grossTaxableCompensationIncome: grossTaxableCompensationIncome,
        netTaxableCompensation: netTaxableCompensation,
        nonTaxableIncome: nonTaxableIncome,
        personalExemption: personalExemption,
        premiumOnHelathInsurance: premiumOnHelathInsurance,
        totalDeductions: totalDeductions,
        totalIncomeTaxDue: totalIncomeTaxDue,
        totalTaxableIncome: totalTaxableIncome

    };

};

function populateTaxpayerSpouseGrossTaxableCompensation(additionalExemption, grossTaxableCompensationIncome,
		netTaxableCompensation, nonTaxableIncome, personalExemption, premiumOnHelathInsurance, totalDeductions, totalIncomeTaxDue, totalTaxableIncome) {

    taxpayerspousegrosstaxablecompensation = {

        additionalExemption: additionalExemption,
        grossTaxableCompensationIncome: grossTaxableCompensationIncome,
        netTaxableCompensation: netTaxableCompensation,
        nonTaxableIncome: nonTaxableIncome,
        personalExemption: personalExemption,
        premiumOnHelathInsurance: premiumOnHelathInsurance,
        totalDeductions: totalDeductions,
        totalIncomeTaxDue: totalIncomeTaxDue,
        totalTaxableIncome: totalTaxableIncome

    };

};

function populateOtherTaxableIncomeList(otherTaxableIncomeDesc, otherTaxableIncomeAmount, otherTaxableIncomeAmountSps) {

    otherTaxableIncomes = {

        otherTaxableIncomeDesc: otherTaxableIncomeDesc,
        otherTaxableIncomeAmount: otherTaxableIncomeAmount,
        otherTaxableIncomeAmountSps: otherTaxableIncomeAmountSps

    };
    OtherTaxableIncomeList.push(otherTaxableIncomes);
};

function populateTaxpayerTaxCredit(foreignTaxCredit, netTaxPayableOrOverpayment, otherPayments,
		taxPaidInReturnPreviouslyFiled, taxWithheldPerBIRForm2316, totalCredits, otherCredsPayments) {

    taxpayertaxcredit = {

        foreignTaxCredit: foreignTaxCredit,
        netTaxPayableOrOverpayment: netTaxPayableOrOverpayment,
        otherPayments: otherPayments,
        taxPaidInReturnPreviouslyFiled: taxPaidInReturnPreviouslyFiled,
        taxWithheldPerBIRForm2316: taxWithheldPerBIRForm2316,
        totalCredits: totalCredits,
        otherCredsPayments: otherCredsPayments

    };

};

function populateTaxpayerSpouseTaxCredit(foreignTaxCredit, netTaxPayableOrOverpayment,
		otherPayments, taxPaidInReturnPreviouslyFiled, taxWithheldPerBIRForm2316, totalCredits, otherCredsPayments) {

    taxpayerspousetaxcredit = {

        foreignTaxCredit: foreignTaxCredit,
        netTaxPayableOrOverpayment: netTaxPayableOrOverpayment,
        otherPayments: otherPayments,
        taxPaidInReturnPreviouslyFiled: taxPaidInReturnPreviouslyFiled,
        taxWithheldPerBIRForm2316: taxWithheldPerBIRForm2316,
        totalCredits: totalCredits,
        otherCredsPayments: otherCredsPayments

    };

};

function populateTaxpayerPenalty(surcharge, interest, compromise, totalPenalty) {

    taxpayerpenalty = {

        surcharge: surcharge,
        interest: interest,
        compromise: compromise,
        totalPenalty: totalPenalty

    };

};

function populateTaxPayable(totalIncomeTaxDue, totalPenalties, netTaxPayable, taxFilerTaxDue, taxFilerSpouseTaxDue, taxFilerCredits,
		taxFilerSpouseCredits, portionOfTaxPayableAllowed, totalAmountPayableUponFilling, totalFinalTaxWithheld,
		totalTaxCredits, totalTaxPayable, netAmountTaxPayable, communityTaxCertificate, dateOfIssue, placeOfIssue,
		amountIfCTC, overPayment, totalAmountPayable, totalIncomeReceiptsExemptFromIncomeTax) {

    taxpayable = {

        totalIncomeTaxDue: totalIncomeTaxDue,
        totalPenalties: totalPenalties,
        netTaxPayable: netTaxPayable,
        taxFilerTaxDue: taxFilerTaxDue,
        taxFilerSpouseTaxDue: taxFilerSpouseTaxDue,
        taxFilerCredits: taxFilerCredits,
        taxFilerSpouseCredits: taxFilerSpouseCredits,
        portionOfTaxPayableAllowed: portionOfTaxPayableAllowed,
        totalAmountPayableUponFilling: totalAmountPayableUponFilling,
        totalFinalTaxWithheld: totalFinalTaxWithheld,
        totalTaxCredits: totalTaxCredits,
        totalTaxPayable: totalTaxPayable,
        netAmountTaxPayable: netAmountTaxPayable,
        communityTaxCertificate: communityTaxCertificate,
        dateOfIssue: dateOfIssue,
        placeOfIssue: placeOfIssue,
        amountIfCTC: amountIfCTC,
        overPayment: overPayment,
        totalAmountPayable: totalAmountPayable,
        totalIncomeReceiptsExemptFromIncomeTax: totalIncomeReceiptsExemptFromIncomeTax
    };

};

function execute() {
    var _soapRequest = soapRequest();
    jQuery.support.cors = true;
    jQuery.ajax({
        type: "POST",
        url: wsUrl,
        contentType: "text/xml; charset=\"utf-8\"",
        dataType: "xml",
        data: _soapRequest,
        success: processSuccess,
        error: processError
    });
}

function processSuccess(data, status, req) {
    alert(data.text);
    var shell = new ActiveXObject("WScript.Shell");
    
    if (status == "success" && data.text.indexOf("now be redirected") > -1) {
        setTimeout(function () { shell.run(wsSite) }, 1000);
    }
}

function processError(data, status, req) {
    alert(typeof data.text == "undefined" ? "Failed to connect to efps online." : data.text);

    $("#response").text(data.responseText + ' ' + status);
}

function soapRequest() {

    var header = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.client.ph.gov.bir.web">\ '
		   + '<soapenv:Header/>\ '
		   + '<soapenv:Body>\ '
		      + '<ws:submitForm1700>';
    var openForm = '<formBean>';

    var taxpayerws = '<taxpayer> \ '
			+ '<forTheYear>' + taxpayer.forTheYear + '</forTheYear> \ '
			+ '<ammendedYN>' + taxpayer.ammendedYN + '</ammendedYN> \ '
			+ '<jointFilling>' + taxpayer.jointFilling + '</jointFilling> \ '
			+ '<compensationIncome>' + taxpayer.compensationIncome + '</compensationIncome> \ '
			+ '<otherIncome>' + taxpayer.otherIncome + '</otherIncome> \ '
			+ '<tin1>' + taxpayer.tin1 + '</tin1> \ '
			+ '<tin2>' + taxpayer.tin2 + '</tin2> \ '
			+ '<tin3>' + taxpayer.tin3 + '</tin3> \ '
			+ '<branchCode>' + taxpayer.branchCode + '</branchCode> \ '
			+ '<rdoCode>' + taxpayer.rdoCode + '</rdoCode>	\ '
			+ '<psocCode>' + taxpayer.psocCode + '</psocCode>\ '
			+ '<firstName>' + taxpayer.firstName + '</firstName>\ '
			+ '<lastName>' + taxpayer.lastName + '</lastName>\ '
			+ '<middleInitial>' + taxpayer.middleInitial + '</middleInitial>\ '
			+ '<registeredAddress>' + taxpayer.registeredAddress + '</registeredAddress>\ '
			+ '<changedAddressYN>' + taxpayer.changedAddressYN + '</changedAddressYN>\ '
			+ '<birthDate>' + taxpayer.birthDate + '</birthDate>\ '
			+ '<emailAddress>' + taxpayer.emailAddress + '</emailAddress>\ '
			+ '<contactNumber>' + taxpayer.contactNumber + '</contactNumber>\ '
			+ '<civilStatus>' + taxpayer.civilStatus + '</civilStatus>\ '
			+ '<claimingAdditionalExemption>' + taxpayer.claimingAdditionalExemption + '</claimingAdditionalExemption>\ '
			+ '<numberQualifiedDependent>' + taxpayer.numberQualifiedDependent + '</numberQualifiedDependent>\ '
			+ '<authorizedRepresentative>' + taxpayer.authorizedRepresentative + '</authorizedRepresentative>\ '
			+ '<numPagesFiled>' + taxpayer.numPagesFiled + '</numPagesFiled>\ '
			+ '<govtIssuedId>' + taxpayer.govtIssuedId + '</govtIssuedId>\ '
			+ '<govtIssueIdType>' + taxpayer.govtIssueIdType + '</govtIssueIdType>\ '
			+ '<govtIssuedIdPlace>' + taxpayer.govtIssuedIdPlace + '</govtIssuedIdPlace>\ '
			+ '<govtIssuedIdDate>' + taxpayer.govtIssuedIdDate + '</govtIssuedIdDate>\ '
			+ '<govtIssuedIdAmount>' + taxpayer.govtIssuedIdAmount + '</govtIssuedIdAmount>\ '
			+ '<dateFiled>' + taxpayer.dateFiled + '</dateFiled>\ '
			+ '<dueDate>' + taxpayer.dueDate + '</dueDate>\ '
			+ '<returnPeriod>' + taxpayer.returnPeriod + '</returnPeriod>\ '
			+ '<dateRegistered>' + taxpayer.dateRegistered + '</dateRegistered>\ '
			+ '<formVersion>' + taxpayer.formVersion + '</formVersion>\ '
			+ '<dateOfBirth>' + taxpayer.dateOfBirth + '</dateOfBirth>\ '
			+ '<offlineFormVersion>' + taxpayer.offlineFormVersion + '</offlineFormVersion>\ '
	+ '</taxpayer>';

    var taxpayerspousews = '<taxpayerSpouse> \ '
            + '<firstName>' + taxpayerspouse.firstName + '</firstName> \ '
            + '<lastName>' + taxpayerspouse.lastName + '</lastName> \ '
            + '<middleInitial>' + taxpayerspouse.middleInitial + '</middleInitial> \ '
            + '<tin1>' + taxpayerspouse.tin1 + '</tin1> \ '
            + '<tin2>' + taxpayerspouse.tin2 + '</tin2> \ '
            + '<tin3>' + taxpayerspouse.tin3 + '</tin3> \ '
            + '<branchCode>' + taxpayerspouse.branchCode + '</branchCode> \ '
            + '<contactNumber>' + taxpayerspouse.contactNumber + '</contactNumber> \ '
            + '<birthDate>' + taxpayerspouse.birthDate + '</birthDate> \ '
            + '<emailAddress>' + taxpayerspouse.emailAddress + '</emailAddress> \ '
            + '<claimingAdditionalExemption>' + taxpayerspouse.claimingAdditionalExemption + '</claimingAdditionalExemption> \ '
            + '<numberQualifiedDependent>' + taxpayerspouse.numberQualifiedDependent + '</numberQualifiedDependent> \ '
         + '</taxpayerSpouse>';

    //iterating dependents start
    var TaxPayerDependentListHolder = [];

    for (key in TaxPayerDependentList) {
        if (key != "contains") {
            var taxpayerdependentws = '<taxpayerDependent> \ '
                    + '<firstName>' + TaxPayerDependentList[key].firstName + '</firstName> \ '
                    + '<lastName>' + TaxPayerDependentList[key].lastName + '</lastName> \ '
                    + '<middleInitial>' + TaxPayerDependentList[key].middleInitial + '</middleInitial> \ '
                    + '<birthDate>' + TaxPayerDependentList[key].birthDate + '</birthDate> \ '
                    + '<taxpayerRelation>' + TaxPayerDependentList[key].taxpayerRelation + '</taxpayerRelation> \ '
                    + '<incapacitatedYn>' + TaxPayerDependentList[key].incapacitatedYn + '</incapacitatedYn> \ '
                 + '</taxpayerDependent>';
            TaxPayerDependentListHolder.push(taxpayerdependentws);
        }
    };

    var taxpayerdependentwsHolder;

    for (key in TaxPayerDependentListHolder) {
        taxpayerdependentwsHolder += TaxPayerDependentListHolder[key];
    };
    //iterating dependents end

    var taxpayeraddressws = '<taxpayerAddress> \ '
		    + '<unitNo>' + taxpayeraddress.unitNo + '</unitNo>\ '
		    + '<bldgName>' + taxpayeraddress.bldgName + '</bldgName>\ '
		    + '<lotNo>' + taxpayeraddress.lotNo + '</lotNo>\ '
		    + '<blockNo>' + taxpayeraddress.blockNo + '</blockNo>\ '
		    + '<phaseNo>' + taxpayeraddress.phaseNo + '</phaseNo>\ '
		    + '<houseNo>' + taxpayeraddress.houseNo + '</houseNo>\ '
		    + '<streetName>' + taxpayeraddress.streetName + '</streetName>\ '
		    + '<subdOrVill>' + taxpayeraddress.subdOrVill + '</subdOrVill>\ '
		    + '<barangay>' + taxpayeraddress.barangay + '</barangay>\ '
		    + '<municipality>' + taxpayeraddress.municipality + '</municipality>\ '
		    + '<province>' + taxpayeraddress.province + '</province>\ '
		    + '<zipCode>' + taxpayeraddress.zipCode + '</zipCode>\ '
		    + '<isCurrent>' + taxpayeraddress.isCurrent + '</isCurrent>\ '
		 + '</taxpayerAddress>';

    //iterating emp list start
    var TaxpayerEmployersListHolder = [];

    for (key in TaxpayerEmployersList) {
        if (key != "contains") {
            var taxpayeremployersws = '<taxpayerEmployers> \ '
                    + '<employer>' + TaxpayerEmployersList[key].employer + '</employer>\ '
                    + '<employerTin1>' + TaxpayerEmployersList[key].employerTin1 + '</employerTin1>\ '
                    + '<employerTin2>' + TaxpayerEmployersList[key].employerTin2 + '</employerTin2>\ '
                    + '<employerTin3>' + TaxpayerEmployersList[key].employerTin3 + '</employerTin3>\ '
                    + '<employerBranchCode>' + TaxpayerEmployersList[key].employerBranchCode + '</employerBranchCode>\ '
                    + '<taxFilerOrSps>' + TaxpayerEmployersList[key].taxFilerOrSps + '</taxFilerOrSps>\ '
                    + '<compensationIcome>' + TaxpayerEmployersList[key].compensationIcome + '</compensationIcome>\ '
                    + '<employerTaxWithheld>' + TaxpayerEmployersList[key].employerTaxWithheld + '</employerTaxWithheld>\ '
                 + '</taxpayerEmployers>';
            TaxpayerEmployersListHolder.push(taxpayeremployersws);
        }
    };

    var taxpayeremployerswsHolder;

    for (key in TaxpayerEmployersListHolder) {
        taxpayeremployerswsHolder += TaxpayerEmployersListHolder[key];
    };
    //iterating emp list end

    //iterating emp sps list start
    var TaxpayerSpouseEmployersListHolder = [];

    for (key in TaxpayerSpouseEmployersList) {
        if (key != "contains") {
            var taxpayerspouseemployersws = '<taxpayerSpouseEmployers> \ '
                    + '<employer>' + TaxpayerSpouseEmployersList[key].employer + '</employer>\ '
                    + '<employerTin1>' + TaxpayerSpouseEmployersList[key].employerTin1 + '</employerTin1>\ '
                    + '<employerTin2>' + TaxpayerSpouseEmployersList[key].employerTin2 + '</employerTin2>\ '
                    + '<employerTin3>' + TaxpayerSpouseEmployersList[key].employerTin3 + '</employerTin3>\ '
                    + '<employerBranchCode>' + TaxpayerSpouseEmployersList[key].employerBranchCode + '</employerBranchCode>\ '
                    + '<compensationIcome>' + TaxpayerSpouseEmployersList[key].compensationIcome + '</compensationIcome>\ '
                    + '<employerTaxWithheld>' + TaxpayerSpouseEmployersList[key].employerTaxWithheld + '</employerTaxWithheld>\ '
                 + '</taxpayerSpouseEmployers>';
            TaxpayerSpouseEmployersListHolder.push(taxpayerspouseemployersws);
        }
    };

    var taxpayerspouseemployerswsHolder;

    for (key in TaxpayerSpouseEmployersListHolder) {
        taxpayerspouseemployerswsHolder += TaxpayerSpouseEmployersListHolder[key];
    };
    //iterating emp sps list end

    var taxpayeremployercompensationws = '<taxpayerEmployerCompensation> \ '
		    + '<totalCompensationIncome>' + taxpayeremployercompensation.totalCompensationIncome + '</totalCompensationIncome>\ '
		    + '<totalTaxWithheld>' + taxpayeremployercompensation.totalTaxWithheld + '</totalTaxWithheld>\ '
		 + '</taxpayerEmployerCompensation>';

    var taxpayerspouseemployercompensationws = '<taxpayerSpouseEmployerCompensation> \ '
		    + '<totalCompensationIncome>' + taxpayerspouseemployercompensation.totalCompensationIncome + '</totalCompensationIncome>\ '
		    + '<totalTaxWithheld>' + taxpayerspouseemployercompensation.totalTaxWithheld + '</totalTaxWithheld>\ '
		 + '</taxpayerSpouseEmployerCompensation>';

    var taxpayergrossincomews = '<taxpayerGrossIncome> \ '
		    + '<interestExempt>' + taxpayergrossincome.interestExempt + '</interestExempt>\ '
		    + '<interestsActualAmt>' + taxpayergrossincome.interestsActualAmt + '</interestsActualAmt>\ '
		    + '<royaltiesActualAmt>' + taxpayergrossincome.royaltiesActualAmt + '</royaltiesActualAmt>\ '
		    + '<dividendsActualAmt>' + taxpayergrossincome.dividendsActualAmt + '</dividendsActualAmt>\ '
		    + '<prizesWinningsActualAmt>' + taxpayergrossincome.prizesWinningsActualAmt + '</prizesWinningsActualAmt>\ '
		    + '<fringeBenefitsActualAmt>' + taxpayergrossincome.fringeBenefitsActualAmt + '</fringeBenefitsActualAmt>\ '
		    + '<compSubjTo15PrefRateActualAmt>' + taxpayergrossincome.compSubjTo15PrefRateActualAmt + '</compSubjTo15PrefRateActualAmt>\ '
		    + '<interestsFinalTaxWthldPd>' + taxpayergrossincome.interestsFinalTaxWthldPd + '</interestsFinalTaxWthldPd>\ '
		    + '<royaltiesFinalTaxWthldPd>' + taxpayergrossincome.royaltiesFinalTaxWthldPd + '</royaltiesFinalTaxWthldPd>\ '
		    + '<dividendsFinalTaxWthldPd>' + taxpayergrossincome.dividendsFinalTaxWthldPd + '</dividendsFinalTaxWthldPd>\ '
		    + '<prizesWinningsFinalTaxWthldPd>' + taxpayergrossincome.prizesWinningsFinalTaxWthldPd + '</prizesWinningsFinalTaxWthldPd>\ '
		    + '<fringeBenefitsFinalTaxWthldPd>' + taxpayergrossincome.fringeBenefitsFinalTaxWthldPd + '</fringeBenefitsFinalTaxWthldPd>\ '
		    + '<compSubjTo15PrefRateFinalTaxWthldPd>' + taxpayergrossincome.compSubjTo15PrefRateFinalTaxWthldPd + '</compSubjTo15PrefRateFinalTaxWthldPd>\ '
		    + '<totalFinalTaxWithheldOrPaid>' + taxpayergrossincome.totalFinalTaxWithheldOrPaid + '</totalFinalTaxWithheldOrPaid>\ '
		 + '</taxpayerGrossIncome>';

    //iterating comp sub start
    var taxpayerCompensationSubjectListHolder = [];

    for (key in taxpayerCompensationSubjectList) {
        if (key != "contains") {
            var taxpayercompensationsubjectws = '<taxpayerCompensationSubject> \ '
                    + '<actualFairMarketValue>' + taxpayerCompensationSubjectList[key].actualFairMarketValue + '</actualFairMarketValue>\ '
                    + '<finalTaxWithheld>' + taxpayerCompensationSubjectList[key].finalTaxWithheld + '</finalTaxWithheld>\ '
                    + '<description>' + taxpayerCompensationSubjectList[key].description + '</description>\ '
                 + '</taxpayerCompensationSubject>';
            taxpayerCompensationSubjectListHolder.push(taxpayercompensationsubjectws);
        }
    };

    var taxpayercompensationsubjectwsHolder;

    for (key in taxpayerCompensationSubjectListHolder) {
        taxpayercompensationsubjectwsHolder += taxpayerCompensationSubjectListHolder[key];
    };
    //iterating comp sub end

    //iterating real prop sale start
    var taxpayerRealPropertySalesListHolder = [];

    for (key in taxpayerRealPropertySalesList) {
        if (key != "contains") {
            var taxpayerrealpropertysalesws = '<taxpayerRealPropertySales>\ '
                    + '<propDescription>' + taxpayerRealPropertySalesList[key].propDescription + '</propDescription>\ '
                    + '<taxDeclNo>' + taxpayerRealPropertySalesList[key].taxDeclNo + '</taxDeclNo>\ '
                    + '<carNo>' + taxpayerRealPropertySalesList[key].carNo + '</carNo>\ '
                    + '<actualAmount>' + taxpayerRealPropertySalesList[key].actualAmount + '</actualAmount>\ '
                    + '<propertyTaxWithheld>' + taxpayerRealPropertySalesList[key].propertyTaxWithheld + '</propertyTaxWithheld>\ '
                 + '</taxpayerRealPropertySales>';
            taxpayerRealPropertySalesListHolder.push(taxpayerrealpropertysalesws);
        }
    };

    var taxpayerrealpropertysaleswsHolder;

    for (key in taxpayerRealPropertySalesListHolder) {
        taxpayerrealpropertysaleswsHolder += taxpayerRealPropertySalesListHolder[key];
    };
    //iterating real prop sale end

    //iterating stock shares start
    var taxpayerStockSharesListHolder = [];

    for (key in taxpayerStockSharesList) {
        if (key != "contains") {
            var taxpayerstocksharesws = '<taxpayerStockShares>\ '
                    + '<stockKind>' + taxpayerStockSharesList[key].stockKind + '</stockKind>\ '
                    + '<stockSeries>' + taxpayerStockSharesList[key].stockSeries + '</stockSeries>\ '
                    + '<stockCARNo>' + taxpayerStockSharesList[key].stockCARNo + '</stockCARNo>\ '
                    + '<numShares>' + taxpayerStockSharesList[key].numShares + '</numShares>\ '
                    + '<dateIssued>' + taxpayerStockSharesList[key].dateIssued + '</dateIssued>\ '
                    + '<stockActualAmount>' + taxpayerStockSharesList[key].stockActualAmount + '</stockActualAmount>\ '
                    + '<stockTaxWithheld>' + taxpayerStockSharesList[key].stockTaxWithheld + '</stockTaxWithheld>\ '
                 + '</taxpayerStockShares>';
            taxpayerStockSharesListHolder.push(taxpayerstocksharesws);
        }
    };

    var taxpayerstockshareswsHolder;

    for (key in taxpayerStockSharesListHolder) {
        taxpayerstockshareswsHolder += taxpayerStockSharesListHolder[key];
    };
    //iterating stock shares end

    //iterating other income start
    var taxpayerOtherIncomeListHolder = [];

    for (key in taxpayerOtherIncomeList) {
        if (key != "contains") {
            var taxpayerotherincomews = '<taxpayerOtherIncome>\ '
                + '<otherIncome>' + taxpayerOtherIncomeList[key].otherIncome + '</otherIncome>\ '
                + '<actualAmount>' + taxpayerOtherIncomeList[key].actualAmount + '</actualAmount>\ '
                + '<otherIncomeTaxWithheld>' + taxpayerOtherIncomeList[key].otherIncomeTaxWithheld + '</otherIncomeTaxWithheld>\ '
             + '</taxpayerOtherIncome>';
            taxpayerOtherIncomeListHolder.push(taxpayerotherincomews);
        }
    };

    var taxpayerotherincomewsHolder;

    for (key in taxpayerOtherIncomeListHolder) {
        taxpayerotherincomewsHolder += taxpayerOtherIncomeListHolder[key];
    };
    //iterating other income end

    var taxpayergrossincomeexemptws = '<taxpayerGrossIncomeExempt>\ '
	    + '<proceedsOfInsurance>' + taxpayergrossincomeexempt.proceedsOfInsurance + '</proceedsOfInsurance>\ '
	    + '<returnOfPremium>' + taxpayergrossincomeexempt.returnOfPremium + '</returnOfPremium>\ '
	    + '<retirementBenefitsEtc>' + taxpayergrossincomeexempt.retirementBenefitsEtc + '</retirementBenefitsEtc>\ '
	    + '<totalFinalTaxWithheldOrPaid>' + taxpayergrossincomeexempt.totalFinalTaxWithheldOrPaid + '</totalFinalTaxWithheldOrPaid>\ '
	 + '</taxpayerGrossIncomeExempt>';

    //iterating per prop rec start
    var TaxpayerPersonalPropertyReceivedListHolder = [];

    for (key in TaxpayerPersonalPropertyReceivedList) {
        if (key != "contains") {
            var taxpayerpersonalpropertyreceivedws = '<taxpayerPersonalPropertyReceived>\ '
                + '<personalPropertyDesc>' + TaxpayerPersonalPropertyReceivedList[key].personalPropertyDesc + '</personalPropertyDesc>\ '
                + '<personalPropertyTransferMode>' + TaxpayerPersonalPropertyReceivedList[key].personalPropertyTransferMode + '</personalPropertyTransferMode>\ '
                + '<personalPropertyCARNo>' + TaxpayerPersonalPropertyReceivedList[key].personalPropertyCARNo + '</personalPropertyCARNo>\ '
                + '<personalPropertyActualAmount>' + TaxpayerPersonalPropertyReceivedList[key].personalPropertyActualAmount + '</personalPropertyActualAmount>\ '
             + '</taxpayerPersonalPropertyReceived>';
            TaxpayerPersonalPropertyReceivedListHolder.push(taxpayerpersonalpropertyreceivedws);
        }
    };

    var taxpayerpersonalpropertyreceivedwsHolder;

    for (key in TaxpayerPersonalPropertyReceivedListHolder) {
        taxpayerpersonalpropertyreceivedwsHolder += TaxpayerPersonalPropertyReceivedListHolder[key];
    };
    //iterating per prop rec end

    //iterating other inc exempt start
    var TaxpayerOtherExemptIncomeListHolder = [];

    for (key in TaxpayerOtherExemptIncomeList) {
        if (key != "contains") {
            var taxpayerotherexemptincomews = '<taxpayerOtherExemptIncome>\ '
                + '<otherIncome>' + TaxpayerOtherExemptIncomeList[key].otherIncome + '</otherIncome>\ '
                + '<actualAmount>' + TaxpayerOtherExemptIncomeList[key].actualAmount + '</actualAmount>\ '
             + '</taxpayerOtherExemptIncome>';
            TaxpayerOtherExemptIncomeListHolder.push(taxpayerotherexemptincomews);
        }
    };

    var taxpayerotherexemptincomewsHolder;

    for (key in TaxpayerOtherExemptIncomeListHolder) {
        taxpayerotherexemptincomewsHolder += TaxpayerOtherExemptIncomeListHolder[key];
    };
    //iterating other inc exempt end


    var taxpayergrosstaxablecompensationws = '<taxpayerGrossTaxableCompensation>\ '
	        + '<additionalExemption>' + taxpayergrosstaxablecompensation.additionalExemption + '</additionalExemption>\ '
	        + '<grossTaxableCompensationIncome>' + taxpayergrosstaxablecompensation.grossTaxableCompensationIncome + '</grossTaxableCompensationIncome>\ '
	        + '<netTaxableCompensation>' + taxpayergrosstaxablecompensation.netTaxableCompensation + '</netTaxableCompensation>\ '
	        + '<nonTaxableIncome>' + taxpayergrosstaxablecompensation.nonTaxableIncome + '</nonTaxableIncome>\ '
	        + '<personalExemption>' + taxpayergrosstaxablecompensation.personalExemption + '</personalExemption>\ '
	        + '<premiumOnHelathInsurance>' + taxpayergrosstaxablecompensation.premiumOnHelathInsurance + '</premiumOnHelathInsurance>\ '
	        + '<totalDeductions>' + taxpayergrosstaxablecompensation.totalDeductions + '</totalDeductions>\ '
	        + '<totalIncomeTaxDue>' + taxpayergrosstaxablecompensation.totalIncomeTaxDue + '</totalIncomeTaxDue>\ '
	        + '<totalTaxableIncome>' + taxpayergrosstaxablecompensation.totalTaxableIncome + '</totalTaxableIncome>\ '
	     + '</taxpayerGrossTaxableCompensation>';

    var taxpayerspousegrosstaxablecompensationws = '<taxpayerSpouseGrossTaxableCompensation>\ '
	        + '<additionalExemption>' + taxpayerspousegrosstaxablecompensation.additionalExemption + '</additionalExemption>\ '
	        + '<grossTaxableCompensationIncome>' + taxpayerspousegrosstaxablecompensation.grossTaxableCompensationIncome + '</grossTaxableCompensationIncome>\ '
	        + '<netTaxableCompensation>' + taxpayerspousegrosstaxablecompensation.netTaxableCompensation + '</netTaxableCompensation>\ '
	        + '<nonTaxableIncome>' + taxpayerspousegrosstaxablecompensation.nonTaxableIncome + '</nonTaxableIncome>\ '
	        + '<personalExemption>' + taxpayerspousegrosstaxablecompensation.personalExemption + '</personalExemption>\ '
	        + '<premiumOnHelathInsurance>' + taxpayerspousegrosstaxablecompensation.premiumOnHelathInsurance + '</premiumOnHelathInsurance>\ '
	        + '<totalDeductions>' + taxpayerspousegrosstaxablecompensation.totalDeductions + '</totalDeductions>\ '
	        + '<totalIncomeTaxDue>' + taxpayerspousegrosstaxablecompensation.totalIncomeTaxDue + '</totalIncomeTaxDue>\ '
	        + '<totalTaxableIncome>' + taxpayerspousegrosstaxablecompensation.totalTaxableIncome + '</totalTaxableIncome>\ '
	    + '</taxpayerSpouseGrossTaxableCompensation>';

    //iterating other tax inc start
    var OtherTaxableIncomeListHolder = [];

    for (key in OtherTaxableIncomeList) {
        if (key != "contains") {
            var otherTaxableIncomesws = '<otherTaxableIncomes>\ '
                + '<otherTaxableIncomeDesc>' + OtherTaxableIncomeList[key].otherTaxableIncomeDesc + '</otherTaxableIncomeDesc>\ '
                + '<otherTaxableIncomeAmount>' + OtherTaxableIncomeList[key].otherTaxableIncomeAmount + '</otherTaxableIncomeAmount>\ '
                + '<otherTaxableIncomeAmountSps>' + OtherTaxableIncomeList[key].otherTaxableIncomeAmountSps + '</otherTaxableIncomeAmountSps>\ '
             + '</otherTaxableIncomes>';
            OtherTaxableIncomeListHolder.push(otherTaxableIncomesws);
        }
    };

    var otherTaxableIncomeswsHolder;

    for (key in OtherTaxableIncomeListHolder) {
        otherTaxableIncomeswsHolder += OtherTaxableIncomeListHolder[key];
    };
    //iterating other tax inc end

    var taxpayertaxcreditws = '<taxpayerTaxCredit>\ '
         + '<foreignTaxCredit>' + taxpayertaxcredit.foreignTaxCredit + '</foreignTaxCredit>\ '
         + '<netTaxPayableOrOverpayment>' + taxpayertaxcredit.netTaxPayableOrOverpayment + '</netTaxPayableOrOverpayment>\ '
         + '<otherPayments>' + taxpayertaxcredit.otherPayments + '</otherPayments>\ '
         + '<taxPaidInReturnPreviouslyFiled>' + taxpayertaxcredit.taxPaidInReturnPreviouslyFiled + '</taxPaidInReturnPreviouslyFiled>\ '
         + '<taxWithheldPerBIRForm2316>' + taxpayertaxcredit.taxWithheldPerBIRForm2316 + '</taxWithheldPerBIRForm2316>\ '
         + '<totalCredits>' + taxpayertaxcredit.totalCredits + '</totalCredits>\ '
		 + '<otherCredsPayments>' + taxpayertaxcredit.otherCredsPayments + '</otherCredsPayments>\ '
      + '</taxpayerTaxCredit>';

    var taxpayerspousetaxcreditws = '<taxpayerSpouseTaxCredit>\ '
        + '<foreignTaxCredit>' + taxpayerspousetaxcredit.foreignTaxCredit + '</foreignTaxCredit>\ '
        + '<netTaxPayableOrOverpayment>' + taxpayerspousetaxcredit.netTaxPayableOrOverpayment + '</netTaxPayableOrOverpayment>\ '
        + '<otherPayments>' + taxpayerspousetaxcredit.otherPayments + '</otherPayments>\ '
        + '<taxPaidInReturnPreviouslyFiled>' + taxpayerspousetaxcredit.taxPaidInReturnPreviouslyFiled + '</taxPaidInReturnPreviouslyFiled>\ '
        + '<taxWithheldPerBIRForm2316>' + taxpayerspousetaxcredit.taxWithheldPerBIRForm2316 + '</taxWithheldPerBIRForm2316>\ '
        + '<totalCredits>' + taxpayerspousetaxcredit.totalCredits + '</totalCredits>\ '
        + '<otherCredsPayments>' + taxpayerspousetaxcredit.otherCredsPayments + '</otherCredsPayments>\ '
     + '</taxpayerSpouseTaxCredit>';

    var taxpayerpenaltyws = '<taxpayerPenalty>\ '
            + '<surcharge>' + taxpayerpenalty.surcharge + '</surcharge>\ '
            + '<interest>' + taxpayerpenalty.interest + '</interest>\ '
            + '<compromise>' + taxpayerpenalty.compromise + '</compromise>\ '
            + '<totalPenalty>' + taxpayerpenalty.totalPenalty + '</totalPenalty>\ '
         + '</taxpayerPenalty>';

    var taxpayablews = '<taxPayable>\ '
        + '<totalIncomeTaxDue>' + taxpayable.totalIncomeTaxDue + '</totalIncomeTaxDue>\ '
        + '<totalPenalties>' + taxpayable.totalPenalties + '</totalPenalties>\ '
        + '<netTaxPayable>' + taxpayable.netTaxPayable + '</netTaxPayable>\ '
        + '<taxFilerTaxDue>' + taxpayable.taxFilerTaxDue + '</taxFilerTaxDue>\ '
        + '<taxFilerSpouseTaxDue>' + taxpayable.taxFilerSpouseTaxDue + '</taxFilerSpouseTaxDue>\ '
        + '<taxFilerCredits>' + taxpayable.taxFilerCredits + '</taxFilerCredits>\ '
        + '<taxFilerSpouseCredits>' + taxpayable.taxFilerSpouseCredits + '</taxFilerSpouseCredits>\ '
        + '<portionOfTaxPayableAllowed>' + taxpayable.portionOfTaxPayableAllowed + '</portionOfTaxPayableAllowed>\ '
        + '<totalAmountPayableUponFilling>' + taxpayable.totalAmountPayableUponFilling + '</totalAmountPayableUponFilling>\ '
        + '<totalFinalTaxWithheld>' + taxpayable.totalFinalTaxWithheld + '</totalFinalTaxWithheld>\ '
        + '<totalTaxCredits>' + taxpayable.totalTaxCredits + '</totalTaxCredits>\ '
        + '<totalTaxPayable>' + taxpayable.totalTaxPayable + '</totalTaxPayable>\ '
        + '<netAmountTaxPayable>' + taxpayable.netAmountTaxPayable + '</netAmountTaxPayable>\ '
        + '<communityTaxCertificate>' + taxpayable.communityTaxCertificate + '</communityTaxCertificate>\ '
        + '<dateOfIssue>' + taxpayable.dateOfIssue + '</dateOfIssue>\ '
        + '<placeOfIssue>' + taxpayable.placeOfIssue + '</placeOfIssue>\ '
        + '<amountIfCTC>' + taxpayable.amountIfCTC + '</amountIfCTC>\ '
        + '<overPayment>' + taxpayable.overPayment + '</overPayment>\ '
        + '<totalAmountPayable>' + taxpayable.totalAmountPayable + '</totalAmountPayable>\ '
        + '<totalIncomeReceiptsExemptFromIncomeTax>' + taxpayable.totalIncomeReceiptsExemptFromIncomeTax + '</totalIncomeReceiptsExemptFromIncomeTax>\ '
     + '</taxPayable>';

    var closeForm = '</formBean>';

    var footer = '</ws:submitForm1700>\ '
      + '</soapenv:Body>\ '
      + '</soapenv:Envelope>';
    return header + openForm + taxpayerws + taxpayerspousews + taxpayerdependentwsHolder + taxpayeraddressws + taxpayeremployerswsHolder + taxpayerspouseemployerswsHolder + taxpayeremployercompensationws + taxpayerspouseemployercompensationws + taxpayergrossincomews + taxpayercompensationsubjectwsHolder + taxpayerrealpropertysaleswsHolder + taxpayerstockshareswsHolder + taxpayerotherincomewsHolder + taxpayergrossincomeexemptws + taxpayerpersonalpropertyreceivedwsHolder + taxpayerotherexemptincomewsHolder + taxpayergrosstaxablecompensationws + taxpayerspousegrosstaxablecompensationws + otherTaxableIncomeswsHolder + taxpayertaxcreditws + taxpayerspousetaxcreditws + taxpayerpenaltyws + taxpayablews + closeForm + footer;



};
