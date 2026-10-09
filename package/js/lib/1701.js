var wsUrl = enviService.getWsUrl();
var wsSite = enviService.getWsSite();
//Page1
var taxpayer = {};
var totalTaxPayable1701 = {};
//Page2 - 3
var computationOfIncomeTax1701 = {}; // Taxpayer
var computationOfIncomeTax1701Spouse = {};
//Page 3
var taxReliefAvailment1701 = {};
var taxReliefAvailmentSpouse1701 = {};
//Page 4
var spouse = {};
var dependents = {};
var dependentsList = [];
var currentAddress = {};
var auditor = {};
//Page 5
var employers = {};
var employersList = [];
var employersSpouse = {};
var employersListSpouse = [];
var employerCompensation = {}
var employerCompensationSpouse = {};
var salesRevenue = {};
var salesRevenueSpouse = {};
var schedule3 = {};
var schedule3Spouse = {};
var otherTaxableIncomeNotSubjectToFinalTax = {};
var otherTaxableIncomeNotSubjectToFinalTaxList = [];
var otherTaxableIncomeNotSubjectToFinalTaxSpouse = {};
var otherTaxableIncomeNotSubjectToFinalTaxListSpouse = [];
//Page 5-6
var costOfSales = {};
var costOfSalesSpouse = {};
//Page 6
var nonOperatingIncome = {};
var nonOperatingIncomeList = [];
var nonOperatingIncomeSpouse = {};
var nonOperatingIncomeListSpouse = [];
//Page 6 - 7
var ordinaryAllowableItemizedDeduction = {};
var amortizations = {};
var listAmortizations = [];
var otherOrdinaryItemizedDeductions = {};
var listOtherOrdinaryItemizedDeductions = [];
//Spouse
var ordinaryAllowableItemizedDeductionSpouse = {};
var amortizationsSpouse = {};
var listAmortizationsSpouse = [];
var otherOrdinaryItemizedDeductionsSpouse = {};
var listOtherOrdinaryItemizedDeductionsSpouse = [];
//page 8
var specialAllowableItemizedDeduction = {};
var listSpecialAllowableItemizedDeduction = [];
//Spouse
var specialAllowableItemizedDeductionSpouse = {};
var listSpecialAllowableItemizedDeductionSpouse = [];
//Schedule 8A
var computationOfGrossIncome = {};
var detailedComputationOfGrossIncome = {};
var listDetailedComputationOfGrossIncome = [];
//Schedule 8B
var computationOfGrossIncomeSpouse = {};
var detailedComputationOfGrossIncomeSpouse = {};
var listDetailedComputationOfGrossIncomeSpouse = [];
//Page 9
var taxCreditsPayments = {};
var taxCreditsPaymentsSpouse = {};
var balanceSheet = {};
var balanceSheetSpouse = {};
//page 10
var reconciliationOfNetIncome = {};
var nonDeductibleExpense = {};
var nonDeductibleExpenseList = [];
var nonTaxable = {};
var listNonTaxable = [];
var specialDeductions = {};
var listSpecialDeductions = [];
//Spouse
var reconciliationOfNetIncomeSpouse = {};
var nonDeductibleExpenseSpouse = {};
var nonDeductibleExpenseListSpouse = [];
var nonTaxableSpouse = {};
var listNonTaxableSpouse = [];
var specialDeductionsSpouse = {};
var listSpecialDeductionsSpouse = [];
//Page 11
var taxpayerGrossIncome = {};
var taxpayerCompensationSubject = {};
var taxpayerCompensationSubjectList = [];
var taxpayerRealPropertySales = {};
var taxpayerRealPropertySalesList = [];
var taxpayerStockShares = {};
var taxpayerStockSharesList = [];
var taxpayerOtherIncome = {};
var taxpayerOtherIncomeList = [];
var taxpayerGrossIncomeExempt = {};
var taxpayerPersonalPropertyReceived = {};
var taxpayerPersonalPropertyReceivedList = [];
var taxpayerOtherExemptIncome = {};
var taxpayerOtherExemptIncomeList = [];
//Page 12
var taxpayerConsolidatedComputation = {};
var taxpayerConsolidatedComputationSpouse = {};

//Page1M
var taxRegime = {};
//Schedule A
var taxPayersActivityProfileSch = {};
var taxPayersActivityProfileSchSps = {};
//Schedule B
var computationOfIncomeTaxSch = {};
var computationOfIncomeTaxSchSps = {};

//Page 1M-2M
//ScheduleC
var taxReliefAvailmentSchedule = {};
var taxReliefAvailmentScheduleSpouse = {};
//Page 2M
//Schedule D
var salesRevenuesReceiptFeesSch = {};
var salesRevenuesReceiptFeesSchSpouse = {};
//Schedule E
var otherTaxableIncomeNotSubjectToFinalTaxSch = {};
var otherTaxableIncomeNotSubjectToFinalTaxListSch = [];
var otherTaxableIncomeNotSubjectToFinalTaxSchSps = {};
var otherTaxableIncomeNotSubjectToFinalTaxListSchSps = [];
//Schedule F
var costOfSalesServicesSch = {};
var costOfSalesServicesSchSps = {};
//Schedule G
var nonOperatingIncomeSch = {};
var nonOperatingIncomeListSch = [];
var nonOperatingIncomeSpouseSch = {};
var nonOperatingIncomeSpouseListSch = [];
//Schedule H
var ordinaryAllowableItemizedDeductionSch = {};
var amortizationsSch = {};
var listAmortizationsSch = [];
var otherOrdinaryItemizedDeductionsSch = {};
var listOtherOrdinaryItemizedDeductionsSch = [];
//Spouse
var ordinaryAllowableItemizedDeductionSpouseSch = {};
var amortizationsSpouseSch = {};
var listAmortizationsSpouseSch = [];
var otherOrdinaryItemizedDeductionsSpouseSch = {};
var listOtherOrdinaryItemizedDeductionsSpouseSch = [];
//Schedule I
var specialAllowableItemizedDeductionSch = {};
var listSpecialAllowableItemizedDeductionSch = [];
//Spouse
var specialAllowableItemizedDeductionSpouseSch = {};
var listSpecialAllowableItemizedDeductionSpouseSch = [];
//Schedule J
var taxCreditsPaymentsSch = {};
var taxCreditsPaymentsSpouseSch = {};
//Schedule K
var reconciliationOfNetIncomeSch = {};
var nonDeductibleExpenseSch = {};
var nonDeductibleExpenseListSch = [];
var nonTaxableSch = {};
var listNonTaxableSch = [];
var specialDeductionsSch = {};
var listSpecialDeductionsSch = [];
//Spouse
var reconciliationOfNetIncomeSpouseSch = {};
var nonDeductibleExpenseSpouseSch = {};
var nonDeductibleExpenseListSpouseSch = [];
var nonTaxableSpouseSch = {};
var listNonTaxableSpouseSch = [];
var specialDeductionsSpouseSch = {};
var listSpecialDeductionsSpouseSch = [];

var listAttachmentsHolder = [];
var attach = "";

function resetData() {


    dependentsList = [];

    employersList = [];

    employersListSpouse = [];

    otherTaxableIncomeNotSubjectToFinalTaxList = [];

    otherTaxableIncomeNotSubjectToFinalTaxListSpouse = [];

    nonOperatingIncomeList = [];

    nonOperatingIncomeListSpouse = [];

    listAmortizations = [];

    listOtherOrdinaryItemizedDeductions = [];

    listAmortizationsSpouse = [];

    listOtherOrdinaryItemizedDeductionsSpouse = [];

    listSpecialAllowableItemizedDeduction = [];

    listSpecialAllowableItemizedDeductionSpouse = [];

    listDetailedComputationOfGrossIncome = [];

    listDetailedComputationOfGrossIncomeSpouse = [];

    nonDeductibleExpenseList = [];

    listNonTaxable = [];

    listSpecialDeductions = [];

    nonDeductibleExpenseListSpouse = [];

    listNonTaxableSpouse = [];

    listSpecialDeductionsSpouse = [];

    taxpayerCompensationSubjectList = [];

    taxpayerRealPropertySalesList = [];

    taxpayerStockSharesList = [];

    taxpayerOtherIncomeList = [];


    taxpayerPersonalPropertyReceivedList = [];

    taxpayerOtherExemptIncomeList = [];

    taxpayerConsolidatedComputationSpouse = {};

    otherTaxableIncomeNotSubjectToFinalTaxListSch = [];

    otherTaxableIncomeNotSubjectToFinalTaxListSchSps = [];

    nonOperatingIncomeListSch = [];

    nonOperatingIncomeSpouseListSch = [];

    listAmortizationsSch = [];

    listOtherOrdinaryItemizedDeductionsSch = [];

    listAmortizationsSpouseSch = [];

    listOtherOrdinaryItemizedDeductionsSpouseSch = [];

    listSpecialAllowableItemizedDeductionSch = [];

    listSpecialAllowableItemizedDeductionSpouseSch = [];

    nonDeductibleExpenseListSch = [];

    listNonTaxableSch = [];

    listSpecialDeductionsSch = [];

    nonDeductibleExpenseListSpouseSch = [];

    listNonTaxableSpouseSch = [];

    listSpecialDeductionsSpouseSch = [];

    listAttachmentsHolder = [];
    attach = "";

}

function populateTaxpayer(branchCode, dateRegistered, exemptionTypeCode, cTypeCode, birthDate, zipCode, sex, tin1, tin2, tin3, registeredAddress, dateFile, psocCode, claimingAdditionalExemption, numberOfDependents, jointFilling, dueDate, returnPeriod, actCode, emailAddress, formVersion, govtIssuedId, govtIssuedIdPlace, govtIssuedIdAmount, govtIssuedIdDate, ammendedYN, batchNo, amdendedReturn, shortPeriodReturn, alphaNumericTaxCode, sheetFiledCount, taxFilerType, tradeName, contactNumber, civilStatus, ifMarriedSpouseIncome, filingStatus, mainLine, psic, methodOfAccounting, methodOfAccountingOthers, methodOfDeduction, incomeExemptFromIncomeTax, incomeSubjectToSpecialPreferentialRate, fiscalYear, filerName, lineOfBusiness, rdoCode, registeredActivity, lastName, midName, firstName, registeredName, amendedReturn, effectivityDateFrom, effectivityDateTo, legalBasisTaxExemption, offlineFormVersion) {
    taxpayer = {
        branchCode: branchCode,
        dateRegistered: dateRegistered,
        exemptionTypeCode: exemptionTypeCode,
        cTypeCode: cTypeCode,
        birthDate: birthDate,
        zipCode: zipCode,
        sex: sex,
        tin1: tin1,
        tin2: tin2,
        tin3: tin3,
        registeredAddress: registeredAddress,
        dateFile: dateFile,
        psocCode: psocCode,
        claimingAdditionalExemption: claimingAdditionalExemption,
        numberOfDependents: numberOfDependents,
        jointFilling: jointFilling,
        dueDate: dueDate,
        returnPeriod: returnPeriod,
        actCode: actCode,
        emailAddress: emailAddress,
        formVersion: formVersion,
        govtIssuedId: govtIssuedId,
        govtIssuedIdPlace: govtIssuedIdPlace,
        govtIssuedIdAmount: govtIssuedIdAmount,
        govtIssuedIdDate: govtIssuedIdDate,
        ammendedYN: ammendedYN,
        batchNo: batchNo,
        amdendedReturn: amdendedReturn,
        shortPeriodReturn: shortPeriodReturn,
        alphaNumericTaxCode: alphaNumericTaxCode,
        sheetFiledCount: sheetFiledCount,
        taxFilerType: taxFilerType,
        tradeName: tradeName,
        contactNumber: contactNumber,
        civilStatus: civilStatus,
        ifMarriedSpouseIncome: ifMarriedSpouseIncome,
        filingStatus: filingStatus,
        mainLine: mainLine,
        psic: psic,
        methodOfAccounting: methodOfAccounting,
        methodOfAccountingOthers: methodOfAccountingOthers,
        methodOfDeduction: methodOfDeduction,
        incomeExemptFromIncomeTax: incomeExemptFromIncomeTax,
        incomeSubjectToSpecialPreferentialRate: incomeSubjectToSpecialPreferentialRate,
        fiscalYear: fiscalYear,
        filerName: filerName,
        lineOfBusiness: lineOfBusiness,
        rdoCode: rdoCode,
        registeredActivity: registeredActivity,
        lastName: lastName,
        midName: midName,
        firstName: firstName,
        registeredName: registeredName,
        amendedReturn: amendedReturn,
        effectivityDateFrom: effectivityDateFrom,
        effectivityDateTo: effectivityDateTo,
        legalBasisTaxExemption: legalBasisTaxExemption,
        offlineFormVersion: offlineFormVersion
    };
};


function populateTotalTaxPayable1701(totalIncomeTaxDue, totalPenalties, netTaxPayable, taxFilerTaxDue, taxFilerSpouseTaxDue, taxFilerCredits, taxFilerSpouseCredits, portionOfTaxPayableAllowed, totalAmountPayableUponFilling, totalFinalTaxWithheld, totalTaxCredits, totalTaxPayable, netAmountTaxPayable, communityTaxCertificate, dateOfIssue, placeOfIssue, amountIfCTC, overPayment, totalAmountPayable, totalIncomeReceiptsExemptFromIncomeTax) {
    totalTaxPayable1701 =
	{
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

function populateComputationOfIncomeTax1701(grossCompensationIncome, nonTaxableExemptCompensation, grossTaxableCompensationIncome, premiumOnHealthHospitalizationInsurance, personalExemptionforEstateAndTrust, additionalExemption, totalDeductions, netTaxableCompensationIncome,
		excessOfDeductions, netSalesRevenuesReceiptFees, otherIncomeOperationsNotToSubjectToFinalTax, totalSalesRevenuesReceiptFees, totalCostOfSalesServices, grossIncomeFromBusinessProfession, nonOperatingIncome, totalGrossIncome, ordinaryAllowableItemizedDeductions, totalSpecialAllowableItemizedDeductions,
		 totalNOLCO, totalAllowableItemizedDeductions, optionalStandardDeductions, taxableIncomeFromBusinessProfession, netTaxableIncomeCompensationIncome, netTaxableIncome, excessDeductionsIfNoCompensationIncome, totalTaxableIncome, taxDueRegular, specialRateIncomeTaxDue, shareOfOtherGovernmentAgency,
		 netSpecialIncomeTaxDue, totalIncomeTaxDue, regular, special, exempt, totalTaxCreditPayments, netTaxPayable, netTaxPayableForTaxFilerAndSpouse, portionOfTaxPayableAllowed, netAmountOfTaxPayable, compromise, totalPenalties, totalAmountPayableUponFiling, regularIncomeTaxOtherwiseDue,
		 netSalesRevRcptFees, otherIncomeNoFinalTax, totalSalesRevRcptFees, costOfSalesServices, grossIncomeFrmBusiness, nonOperatingIncomeSch, ordinaryAllowableItemizedDed, specialAllowableItemizedDed, totalAllowableItemizedDed, taxableIncomeFrmBsnsPrfsn
		) {
    computationOfIncomeTax1701 = {
        grossCompensationIncome: grossCompensationIncome,
        nonTaxableExemptCompensation: nonTaxableExemptCompensation,
        grossTaxableCompensationIncome: grossTaxableCompensationIncome,
        premiumOnHealthHospitalizationInsurance: premiumOnHealthHospitalizationInsurance,
        personalExemptionforEstateAndTrust: personalExemptionforEstateAndTrust,
        additionalExemption: additionalExemption,
        totalDeductions: totalDeductions,
        netTaxableCompensationIncome: netTaxableCompensationIncome,
        excessOfDeductions: excessOfDeductions,
        netSalesRevenuesReceiptFees: netSalesRevenuesReceiptFees,
        otherIncomeOperationsNotToSubjectToFinalTax: otherIncomeOperationsNotToSubjectToFinalTax,
        totalSalesRevenuesReceiptFees: totalSalesRevenuesReceiptFees,
        totalCostOfSalesServices: totalCostOfSalesServices,
        grossIncomeFromBusinessProfession: grossIncomeFromBusinessProfession,
        nonOperatingIncome: nonOperatingIncome,
        totalGrossIncome: totalGrossIncome,
        ordinaryAllowableItemizedDeductions: ordinaryAllowableItemizedDeductions,
        totalSpecialAllowableItemizedDeductions: totalSpecialAllowableItemizedDeductions,
        totalNOLCO: totalNOLCO,
        totalAllowableItemizedDeductions: totalAllowableItemizedDeductions,
        optionalStandardDeductions: optionalStandardDeductions,
        taxableIncomeFromBusinessProfession: taxableIncomeFromBusinessProfession,
        netTaxableIncomeCompensationIncome: netTaxableIncomeCompensationIncome,
        netTaxableIncome: netTaxableIncome,
        excessDeductionsIfNoCompensationIncome: excessDeductionsIfNoCompensationIncome,
        totalTaxableIncome: totalTaxableIncome,
        taxDueRegular: taxDueRegular,
        specialRateIncomeTaxDue: specialRateIncomeTaxDue,
        shareOfOtherGovernmentAgency: shareOfOtherGovernmentAgency,
        netSpecialIncomeTaxDue: netSpecialIncomeTaxDue,
        totalIncomeTaxDue: totalIncomeTaxDue,
        regular: regular,
        special: special,
        exempt: exempt,
        totalTaxCreditPayments: totalTaxCreditPayments,
        netTaxPayable: netTaxPayable,
        netTaxPayableForTaxFilerAndSpouse: netTaxPayableForTaxFilerAndSpouse,
        portionOfTaxPayableAllowed: portionOfTaxPayableAllowed,
        netAmountOfTaxPayable: netAmountOfTaxPayable,
        compromise: compromise,
        totalPenalties: totalPenalties,
        totalAmountPayableUponFiling: totalAmountPayableUponFiling,
        regularIncomeTaxOtherwiseDue: regularIncomeTaxOtherwiseDue,
        netSalesRevRcptFees: netSalesRevRcptFees,
        otherIncomeNoFinalTax: otherIncomeNoFinalTax,
        totalSalesRevRcptFees: totalSalesRevRcptFees,
        costOfSalesServices: costOfSalesServices,
        grossIncomeFrmBusiness: grossIncomeFrmBusiness,
        nonOperatingIncomeSch: nonOperatingIncomeSch,
        ordinaryAllowableItemizedDed: ordinaryAllowableItemizedDed,
        specialAllowableItemizedDed: specialAllowableItemizedDed,
        totalAllowableItemizedDed: totalAllowableItemizedDed,
        taxableIncomeFrmBsnsPrfsn: taxableIncomeFrmBsnsPrfsn
    };
};


function populateComputationOfIncomeTax1701Spouse(grossCompensationIncome, nonTaxableExemptCompensation, grossTaxableCompensationIncome, premiumOnHealthHospitalizationInsurance, personalExemptionforEstateAndTrust, additionalExemption, totalDeductions, netTaxableCompensationIncome,
		excessOfDeductions, netSalesRevenuesReceiptFees, otherIncomeOperationsNotToSubjectToFinalTax, totalSalesRevenuesReceiptFees, totalCostOfSalesServices, grossIncomeFromBusinessProfession, nonOperatingIncome, totalGrossIncome, ordinaryAllowableItemizedDeductions, totalSpecialAllowableItemizedDeductions,
		 totalNOLCO, totalAllowableItemizedDeductions, optionalStandardDeductions, taxableIncomeFromBusinessProfession, netTaxableIncomeCompensationIncome, netTaxableIncome, excessDeductionsIfNoCompensationIncome, totalTaxableIncome, taxDueRegular, specialRateIncomeTaxDue, shareOfOtherGovernmentAgency,
		 netSpecialIncomeTaxDue, totalIncomeTaxDue, regular, special, exempt, totalTaxCreditPayments, netTaxPayable, netTaxPayableForTaxFilerAndSpouse, portionOfTaxPayableAllowed, netAmountOfTaxPayable, compromise, totalPenalties, totalAmountPayableUponFiling, regularIncomeTaxOtherwiseDue,
		 netSalesRevRcptFees, otherIncomeNoFinalTax, totalSalesRevRcptFees, costOfSalesServices, grossIncomeFrmBusiness, nonOperatingIncomeSch, ordinaryAllowableItemizedDed, specialAllowableItemizedDed, totalAllowableItemizedDed, taxableIncomeFrmBsnsPrfsn
		) {
    computationOfIncomeTax1701Spouse = {
        grossCompensationIncome: grossCompensationIncome,
        nonTaxableExemptCompensation: nonTaxableExemptCompensation,
        grossTaxableCompensationIncome: grossTaxableCompensationIncome,
        premiumOnHealthHospitalizationInsurance: premiumOnHealthHospitalizationInsurance,
        personalExemptionforEstateAndTrust: personalExemptionforEstateAndTrust,
        additionalExemption: additionalExemption,
        totalDeductions: totalDeductions,
        netTaxableCompensationIncome: netTaxableCompensationIncome,
        excessOfDeductions: excessOfDeductions,
        netSalesRevenuesReceiptFees: netSalesRevenuesReceiptFees,
        otherIncomeOperationsNotToSubjectToFinalTax: otherIncomeOperationsNotToSubjectToFinalTax,
        totalSalesRevenuesReceiptFees: totalSalesRevenuesReceiptFees,
        totalCostOfSalesServices: totalCostOfSalesServices,
        grossIncomeFromBusinessProfession: grossIncomeFromBusinessProfession,
        nonOperatingIncome: nonOperatingIncome,
        totalGrossIncome: totalGrossIncome,
        ordinaryAllowableItemizedDeductions: ordinaryAllowableItemizedDeductions,
        totalSpecialAllowableItemizedDeductions: totalSpecialAllowableItemizedDeductions,
        totalNOLCO: totalNOLCO,
        totalAllowableItemizedDeductions: totalAllowableItemizedDeductions,
        optionalStandardDeductions: optionalStandardDeductions,
        taxableIncomeFromBusinessProfession: taxableIncomeFromBusinessProfession,
        netTaxableIncomeCompensationIncome: netTaxableIncomeCompensationIncome,
        netTaxableIncome: netTaxableIncome,
        excessDeductionsIfNoCompensationIncome: excessDeductionsIfNoCompensationIncome,
        totalTaxableIncome: totalTaxableIncome,
        taxDueRegular: taxDueRegular,
        specialRateIncomeTaxDue: specialRateIncomeTaxDue,
        shareOfOtherGovernmentAgency: shareOfOtherGovernmentAgency,
        netSpecialIncomeTaxDue: netSpecialIncomeTaxDue,
        totalIncomeTaxDue: totalIncomeTaxDue,
        regular: regular,
        special: special,
        exempt: exempt,
        totalTaxCreditPayments: totalTaxCreditPayments,
        netTaxPayable: netTaxPayable,
        netTaxPayableForTaxFilerAndSpouse: netTaxPayableForTaxFilerAndSpouse,
        portionOfTaxPayableAllowed: portionOfTaxPayableAllowed,
        netAmountOfTaxPayable: netAmountOfTaxPayable,
        compromise: compromise,
        totalPenalties: totalPenalties,
        totalAmountPayableUponFiling: totalAmountPayableUponFiling,
        regularIncomeTaxOtherwiseDue: regularIncomeTaxOtherwiseDue,
        netSalesRevRcptFees: netSalesRevRcptFees,
        otherIncomeNoFinalTax: otherIncomeNoFinalTax,
        totalSalesRevRcptFees: totalSalesRevRcptFees,
        costOfSalesServices: costOfSalesServices,
        grossIncomeFrmBusiness: grossIncomeFrmBusiness,
        nonOperatingIncomeSch: nonOperatingIncomeSch,
        ordinaryAllowableItemizedDed: ordinaryAllowableItemizedDed,
        specialAllowableItemizedDed: specialAllowableItemizedDed,
        totalAllowableItemizedDed: totalAllowableItemizedDed,
        taxableIncomeFrmBsnsPrfsn: taxableIncomeFrmBsnsPrfsn
    };
};

function populateTaxReliefAvailment1701(taxReliefAvailmentBeforeSpecialTaxCredits, specialTaxCredits, regularTaxReliefAvailment, specialTaxReliefAvailment,
exemptTaxReliefAvailment, totalTaxReliefAvailment, totalTaxReliefAvailmentofTaxFilerAndSpouse, taxableIncomeFrmBsns, specialAllowableItemizedDed,
subTotal, regIncomeTaxOtherwiseDue, incomeTaxDueSpecialRate, taxReliefAvailment, totalTaxReliefAvailmentSpecial, taxableIncomeFrmBsnsRegular,
applicableTaxRate, taxReliefAvailmentExempt) {
    taxReliefAvailment1701 = {
        taxReliefAvailmentBeforeSpecialTaxCredits: taxReliefAvailmentBeforeSpecialTaxCredits,
        specialTaxCredits: specialTaxCredits,
        regularTaxReliefAvailment: regularTaxReliefAvailment,
        specialTaxReliefAvailment: specialTaxReliefAvailment,
        exemptTaxReliefAvailment: exemptTaxReliefAvailment,
        totalTaxReliefAvailment: totalTaxReliefAvailment,
        totalTaxReliefAvailmentofTaxFilerAndSpouse: totalTaxReliefAvailmentofTaxFilerAndSpouse,
        taxableIncomeFrmBsns: taxableIncomeFrmBsns,
        specialAllowableItemizedDed: specialAllowableItemizedDed,
        subTotal: subTotal,
        regIncomeTaxOtherwiseDue: regIncomeTaxOtherwiseDue,
        incomeTaxDueSpecialRate: incomeTaxDueSpecialRate,
        taxReliefAvailment: taxReliefAvailment,
        totalTaxReliefAvailmentSpecial: totalTaxReliefAvailmentSpecial,
        taxableIncomeFrmBsnsRegular: taxableIncomeFrmBsnsRegular,
        applicableTaxRate: applicableTaxRate,
        taxReliefAvailmentExempt: taxReliefAvailmentExempt
    };
};


function populateTaxReliefAvailmentSpouse1701(taxReliefAvailmentBeforeSpecialTaxCredits, specialTaxCredits, regularTaxReliefAvailment, specialTaxReliefAvailment,
		exemptTaxReliefAvailment, totalTaxReliefAvailment, totalTaxReliefAvailmentofTaxFilerAndSpouse, taxableIncomeFrmBsns, specialAllowableItemizedDed,
		subTotal, regIncomeTaxOtherwiseDue, incomeTaxDueSpecialRate, taxReliefAvailment, totalTaxReliefAvailmentSpecial, taxableIncomeFrmBsnsRegular,
		applicableTaxRate, taxReliefAvailmentExempt) {
    taxReliefAvailmentSpouse1701 = {
        taxReliefAvailmentBeforeSpecialTaxCredits: taxReliefAvailmentBeforeSpecialTaxCredits,
        specialTaxCredits: specialTaxCredits,
        regularTaxReliefAvailment: regularTaxReliefAvailment,
        specialTaxReliefAvailment: specialTaxReliefAvailment,
        exemptTaxReliefAvailment: exemptTaxReliefAvailment,
        totalTaxReliefAvailment: totalTaxReliefAvailment,
        totalTaxReliefAvailmentofTaxFilerAndSpouse: totalTaxReliefAvailmentofTaxFilerAndSpouse,
        taxableIncomeFrmBsns: taxableIncomeFrmBsns,
        specialAllowableItemizedDed: specialAllowableItemizedDed,
        subTotal: subTotal,
        regIncomeTaxOtherwiseDue: regIncomeTaxOtherwiseDue,
        incomeTaxDueSpecialRate: incomeTaxDueSpecialRate,
        taxReliefAvailment: taxReliefAvailment,
        totalTaxReliefAvailmentSpecial: totalTaxReliefAvailmentSpecial,
        taxableIncomeFrmBsnsRegular: taxableIncomeFrmBsnsRegular,
        applicableTaxRate: applicableTaxRate,
        taxReliefAvailmentExempt: taxReliefAvailmentExempt
    };
};



function populateSpouse(branchCode, birthDate, tin1, tin2, tin3, registeredAddress, psocCode, claimingAdditionalExemption, numberOfDependents, emailAddress, tradeName, contactNumber, civilStatus, mainLine, psic, methodOfAccounting, methodOfAccountingOthers, methodOfDeduction, incomeExemptFromIncomeTax, incomeSubjectToSpecialPreferentialRate, lineOfBusiness, rdoCode, lastName, midName, firstName, atc) {
    spouse = {
        branchCode: branchCode,
        birthDate: birthDate,
        tin1: tin1,
        tin2: tin2,
        tin3: tin3,
        registeredAddress: registeredAddress,
        psocCode: psocCode,
        claimingAdditionalExemption: claimingAdditionalExemption,
        numberOfDependents: numberOfDependents,
        emailAddress: emailAddress,
        tradeName: tradeName,
        contactNumber: contactNumber,
        civilStatus: civilStatus,
        mainLine: mainLine,
        psic: psic,
        methodOfAccounting: methodOfAccounting,
        methodOfAccountingOthers: methodOfAccountingOthers,
        methodOfDeduction: methodOfDeduction,
        incomeExemptFromIncomeTax: incomeExemptFromIncomeTax,
        incomeSubjectToSpecialPreferentialRate: incomeSubjectToSpecialPreferentialRate,
        lineOfBusiness: lineOfBusiness,
        rdoCode: rdoCode,
        lastName: lastName,
        midName: midName,
        firstName: firstName,
        atc: atc
    };
};



function populateDependents(lastName, firstName, middleInitial, incapacitatedYn, birthDate, spouseWaiver) {
    dependents = {
        lastName: lastName,
        firstName: firstName,
        middleInitial: middleInitial,
        incapacitatedYn: incapacitatedYn,
        birthDate: birthDate,
        spouseWaiver: spouseWaiver
    };
    dependentsList.push(dependents);
};


function populateCurrentAddress(unitNo, bldgName, lotNo, blockNo, phaseNo, houseNo, streetName, subdOrVill, barangay, municipality, province, zipCode, isCurrent) {
    currentAddress = {
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


function populateExternalAuditor(nameOfExternalAuditor, externalAuditorTIN, nameOfSigningPartner, signingPartnerTIN, birAccreditationNumber, isssueDate, expiryDate, accreditedTaxAgentBranchCode, signingPartnerBranchCode) {
    auditor = {
        nameOfExternalAuditor: nameOfExternalAuditor,
        externalAuditorTIN: externalAuditorTIN,
        nameOfSigningPartner: nameOfSigningPartner,
        signingPartnerTIN: signingPartnerTIN,
        birAccreditationNumber: birAccreditationNumber,
        isssueDate: isssueDate,
        expiryDate: expiryDate,
        accreditedTaxAgentBranchCode: accreditedTaxAgentBranchCode,
        signingPartnerBranchCode: signingPartnerBranchCode
    };
};


function populateEmployers(employer, employerTin1, employerTin2, employerTin3, employerBranchCode, compensationIcome, employerTaxWithheld) {
    employers = {
        employer: employer,
        employerTin1: employerTin1,
        employerTin2: employerTin2,
        employerTin3: employerTin3,
        employerBranchCode: employerBranchCode,
        compensationIcome: compensationIcome,
        employerTaxWithheld: employerTaxWithheld
    };
    employersList.push(employers);
};

function populateEmployersSpouse(employer, employerTin1, employerTin2, employerTin3, employerBranchCode, compensationIcome, employerTaxWithheld) {
    employersSpouse = {
        employer: employer,
        employerTin1: employerTin1,
        employerTin2: employerTin2,
        employerTin3: employerTin3,
        employerBranchCode: employerBranchCode,
        compensationIcome: compensationIcome,
        employerTaxWithheld: employerTaxWithheld
    };
    employersListSpouse.push(employersSpouse);
};

function populateEmployerCompensation(totalCompensationIncome, totalTaxWithheld) {
    employerCompensation = {
        totalCompensationIncome: totalCompensationIncome,
        totalTaxWithheld: totalTaxWithheld
    };
};

function populateEmployerCompensationSpouse(totalCompensationIncome, totalTaxWithheld) {
    employerCompensationSpouse = {
        totalCompensationIncome: totalCompensationIncome,
        totalTaxWithheld: totalTaxWithheld
    };
};

function populateSalesRevenue(totalSalesRevenuesReceiptsFees, grossSalesRevenuesReceiptsFees, totalRevenue, salesReturnsAllowancesAndDiscounts, NetSalesRevenueReceiptFees) {
    salesRevenue = {
        totalSalesRevenuesReceiptsFees: totalSalesRevenuesReceiptsFees,
        grossSalesRevenuesReceiptsFees: grossSalesRevenuesReceiptsFees,
        totalRevenue: totalRevenue,
        salesReturnsAllowancesAndDiscounts: salesReturnsAllowancesAndDiscounts,
        NetSalesRevenueReceiptFees: NetSalesRevenueReceiptFees
    };
};

function populateSalesRevenueSpouse(totalSalesRevenuesReceiptsFees, grossSalesRevenuesReceiptsFees, totalRevenue, salesReturnsAllowancesAndDiscounts, NetSalesRevenueReceiptFees) {
    salesRevenueSpouse = {
        totalSalesRevenuesReceiptsFees: totalSalesRevenuesReceiptsFees,
        grossSalesRevenuesReceiptsFees: grossSalesRevenuesReceiptsFees,
        totalRevenue: totalRevenue,
        salesReturnsAllowancesAndDiscounts: salesReturnsAllowancesAndDiscounts,
        NetSalesRevenueReceiptFees: NetSalesRevenueReceiptFees
    };
};
function populateSchedule3(otherTaxableIncomeNotSubjectToFinalTaxList) {
    schedule3 = {
        otherTaxableIncomeNotSubjectToFinalTaxList: otherTaxableIncomeNotSubjectToFinalTaxList
    };
};

function populateListOfOtherTaxableIncomeNotSubjectToFinalTax(description, amount) {
    otherTaxableIncomeNotSubjectToFinalTax = {
        description: description,
        amount: amount
    };
    otherTaxableIncomeNotSubjectToFinalTaxList.push(otherTaxableIncomeNotSubjectToFinalTax);
};

function populateSchedule3Spouse(otherTaxableIncomeNotSubjectToFinalTaxListSpouse) {
    schedule3Spouse =
		{
		    otherTaxableIncomeNotSubjectToFinalTaxListSpouse: otherTaxableIncomeNotSubjectToFinalTaxListSpouse
		};
};

function populateListOfOtherTaxableIncomeNotSubjectToFinalTaxSpouse(description, amount) {
    otherTaxableIncomeNotSubjectToFinalTaxSpouse = {
        description: description,
        amount: amount
    };
    otherTaxableIncomeNotSubjectToFinalTaxListSpouse.push(otherTaxableIncomeNotSubjectToFinalTaxSpouse);
};

function populateCostOfSales(goodsInvBeg, purGoods, goodsAvail, goodsInvEnd, costSales, directMatsBeg, purDirectMats, matsAvail, directMatsEnd, rawMats, directLabor, manufacturingOverhead, totalManufacturingCost, workInProgressBeg, winProgressEnd, costGoodsManufactured, finishedGoodsBeg, finishedGoodsEnd, totalCostGoodsManufacturedAndSold, salaries, materials, sched2CDepreciation, sched2CRental, outsideServ, others, costService, totalCostSalesAndServices) {
    costOfSales = {
        goodsInvBeg: goodsInvBeg,
        purGoods: purGoods,
        goodsAvail: goodsAvail,
        goodsInvEnd: goodsInvEnd,
        costSales: costSales,
        directMatsBeg: directMatsBeg,
        purDirectMats: purDirectMats,
        matsAvail: matsAvail,
        directMatsEnd: directMatsEnd,
        rawMats: rawMats,
        directLabor: directLabor,
        manufacturingOverhead: manufacturingOverhead,
        totalManufacturingCost: totalManufacturingCost,
        workInProgressBeg: workInProgressBeg,
        winProgressEnd: winProgressEnd,
        costGoodsManufactured: costGoodsManufactured,
        finishedGoodsBeg: finishedGoodsBeg,
        finishedGoodsEnd: finishedGoodsEnd,
        totalCostGoodsManufacturedAndSold: totalCostGoodsManufacturedAndSold,
        salaries: salaries,
        materials: materials,
        sched2CDepreciation: sched2CDepreciation,
        sched2CRental: sched2CRental,
        outsideServ: outsideServ,
        others: others,
        costService: costService,
        totalCostSalesAndServices: totalCostSalesAndServices
    };
};

function populateCostOfSalesSpouse(goodsInvBeg, purGoods, goodsAvail, goodsInvEnd, costSales, directMatsBeg, purDirectMats, matsAvail, directMatsEnd, rawMats, directLabor, manufacturingOverhead, totalManufacturingCost, workInProgressBeg, winProgressEnd, costGoodsManufactured, finishedGoodsBeg, finishedGoodsEnd, totalCostGoodsManufacturedAndSold, salaries, materials, sched2CDepreciation, sched2CRental, outsideServ, others, costService, totalCostSalesAndServices) {
    costOfSalesSpouse = {
        goodsInvBeg: goodsInvBeg,
        purGoods: purGoods,
        goodsAvail: goodsAvail,
        goodsInvEnd: goodsInvEnd,
        costSales: costSales,
        directMatsBeg: directMatsBeg,
        purDirectMats: purDirectMats,
        matsAvail: matsAvail,
        directMatsEnd: directMatsEnd,
        rawMats: rawMats,
        directLabor: directLabor,
        manufacturingOverhead: manufacturingOverhead,
        totalManufacturingCost: totalManufacturingCost,
        workInProgressBeg: workInProgressBeg,
        winProgressEnd: winProgressEnd,
        costGoodsManufactured: costGoodsManufactured,
        finishedGoodsBeg: finishedGoodsBeg,
        finishedGoodsEnd: finishedGoodsEnd,
        totalCostGoodsManufacturedAndSold: totalCostGoodsManufacturedAndSold,
        salaries: salaries,
        materials: materials,
        sched2CDepreciation: sched2CDepreciation,
        sched2CRental: sched2CRental,
        outsideServ: outsideServ,
        others: others,
        costService: costService,
        totalCostSalesAndServices: totalCostSalesAndServices
    };
};

function populateNonOperatingIncome(natureOfIncome, natureOfIncomeValue) {
    nonOperatingIncome = {
        natureOfIncome: natureOfIncome,
        natureOfIncomeValue: natureOfIncomeValue
    };
    nonOperatingIncomeList.push(nonOperatingIncome);
};

function populateNonOperatingIncomeSpouse(natureOfIncome, natureOfIncomeValue) {
    nonOperatingIncomeSpouse = {
        natureOfIncome: natureOfIncome,
        natureOfIncomeValue: natureOfIncomeValue
    };
    nonOperatingIncomeListSpouse.push(nonOperatingIncomeSpouse);
};

function populateOrdinaryAllowableItemizedDeduction(adAndPromotionsVal, listAmortizations, badDebts, charitableContributions, commissions, communicationLightWater, utilities, depletion, depreciation, directorFee, fringeBenefits, fuelAndOil, insurance, iterest, janitorialAndMessengerial, losses, mgmtAndConsultancyFee, misc, officeSupplies, otherServices, professionalFees, schedGRental, repairLabor, repairMaterials, entertainment, researchAndDev, royalties, salariesAndAllownces, securityServices, otherContributions, taxesAndLiscenses, tollingFees, trainingsAndSeminars, travelTransportaion, listOtherOrdinaryItemizedDeductions) {
    ordinaryAllowableItemizedDeduction = {
        adAndPromotionsVal: adAndPromotionsVal,
        listAmortizations: listAmortizations,
        badDebts: badDebts,
        charitableContributions: charitableContributions,
        commissions: commissions,
        communicationLightWater: communicationLightWater,
        utilities: utilities,
        depletion: depletion,
        depreciation: depreciation,
        directorFee: directorFee,
        fringeBenefits: fringeBenefits,
        fuelAndOil: fuelAndOil,
        insurance: insurance,
        iterest: iterest,
        janitorialAndMessengerial: janitorialAndMessengerial,
        losses: losses,
        mgmtAndConsultancyFee: mgmtAndConsultancyFee,
        misc: misc,
        officeSupplies: officeSupplies,
        otherServices: otherServices,
        professionalFees: professionalFees,
        schedGRental: schedGRental,
        repairLabor: repairLabor,
        repairMaterials: repairMaterials,
        entertainment: entertainment,
        researchAndDev: researchAndDev,
        royalties: royalties,
        salariesAndAllownces: salariesAndAllownces,
        securityServices: securityServices,
        otherContributions: otherContributions,
        taxesAndLiscenses: taxesAndLiscenses,
        tollingFees: tollingFees,
        trainingsAndSeminars: trainingsAndSeminars,
        travelTransportaion: travelTransportaion,
        listOtherOrdinaryItemizedDeductions: listOtherOrdinaryItemizedDeductions
    };
};

function populateAmortizations(otherExpandableDesc, otherExpandableAmount) {
    amortizations = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    listAmortizations.push(amortizations);
};

function populateListOtherOrdinaryItemizedDeductions(otherExpandableDesc, otherExpandableAmount) {
    otherOrdinaryItemizedDeductions =
        {
            otherExpandableDesc: otherExpandableDesc,
            otherExpandableAmount: otherExpandableAmount
        };
    listOtherOrdinaryItemizedDeductions.push(otherOrdinaryItemizedDeductions);
};

function populateOrdinaryAllowableItemizedDeductionSpouse(adAndPromotionsVal, listAmortizationsSpouse, badDebts, charitableContributions, commissions, communicationLightWater, utilities, depletion, depreciation, directorFee, fringeBenefits, fuelAndOil, insurance, iterest, janitorialAndMessengerial, losses, mgmtAndConsultancyFee, misc, officeSupplies, otherServices, professionalFees, schedGRental, repairLabor, repairMaterials, entertainment, researchAndDev, royalties, salariesAndAllownces, securityServices, otherContributions, taxesAndLiscenses, tollingFees, trainingsAndSeminars, travelTransportaion, listOtherOrdinaryItemizedDeductionsSpouse) {
    ordinaryAllowableItemizedDeductionSpouse = {
        adAndPromotionsVal: adAndPromotionsVal,
        listAmortizationsSpouse: listAmortizationsSpouse,
        badDebts: badDebts,
        charitableContributions: charitableContributions,
        commissions: commissions,
        communicationLightWater: communicationLightWater,
        utilities: utilities,
        depletion: depletion,
        depreciation: depreciation,
        directorFee: directorFee,
        fringeBenefits: fringeBenefits,
        fuelAndOil: fuelAndOil,
        insurance: insurance,
        iterest: iterest,
        janitorialAndMessengerial: janitorialAndMessengerial,
        losses: losses,
        mgmtAndConsultancyFee: mgmtAndConsultancyFee,
        misc: misc,
        officeSupplies: officeSupplies,
        otherServices: otherServices,
        professionalFees: professionalFees,
        schedGRental: schedGRental,
        repairLabor: repairLabor,
        repairMaterials: repairMaterials,
        entertainment: entertainment,
        researchAndDev: researchAndDev,
        royalties: royalties,
        salariesAndAllownces: salariesAndAllownces,
        securityServices: securityServices,
        otherContributions: otherContributions,
        taxesAndLiscenses: taxesAndLiscenses,
        tollingFees: tollingFees,
        trainingsAndSeminars: trainingsAndSeminars,
        travelTransportaion: travelTransportaion,
        listOtherOrdinaryItemizedDeductionsSpouse: listOtherOrdinaryItemizedDeductionsSpouse
    };
};

function populateAmortizationsSpouse(otherExpandableDesc, otherExpandableAmount) {
    amortizationsSpouse = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    listAmortizationsSpouse.push(amortizationsSpouse);
};

function populateListOtherOrdinaryItemizedDeductionsSpouse(otherExpandableDesc, otherExpandableAmount) {
    otherOrdinaryItemizedDeductionsSpouse =
        {
            otherExpandableDesc: otherExpandableDesc,
            otherExpandableAmount: otherExpandableAmount
        };
    listOtherOrdinaryItemizedDeductionsSpouse.push(otherOrdinaryItemizedDeductionsSpouse);
};


function populateSpecialAllowableItemizedDeduction(otherExpandableDesc, otherExpandableAmount, legalBasis) {
    specialAllowableItemizedDeduction = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount,
        legalBasis: legalBasis
    };
    listSpecialAllowableItemizedDeduction.push(specialAllowableItemizedDeduction);
};

function populateSpecialAllowableItemizedDeductionSpouse(otherExpandableDesc, otherExpandableAmount, legalBasis) {
    specialAllowableItemizedDeductionSpouse = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount,
        legalBasis: legalBasis
    };
    listSpecialAllowableItemizedDeductionSpouse.push(specialAllowableItemizedDeductionSpouse);
};

function populateComputationOfNetOperatingLoss(grossIncome, lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw, netOperatingLoss, total) {
    computationOfGrossIncome = {
        grossIncome: grossIncome,
        lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw: lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw,
        netOperatingLoss: netOperatingLoss,
        total: total
    };
};




function populateComputationOfGrossIncome(sequenceNumber, year, amount, nolcoAppliedPreviousYear, nolcoExpired, nolcoAppliedCurrentYear, netOperatingLossUnapplied) {
    detailedComputationOfGrossIncome = {
        sequenceNumber: sequenceNumber,
        year: year,
        amount: amount,
        nolcoAppliedPreviousYear: nolcoAppliedPreviousYear,
        nolcoExpired: nolcoExpired,
        nolcoAppliedCurrentYear: nolcoAppliedCurrentYear,
        netOperatingLossUnapplied: netOperatingLossUnapplied
    };
    listDetailedComputationOfGrossIncome.push(detailedComputationOfGrossIncome);
};



function populateComputationOfNetOperatingLossSpouse(grossIncome, lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw, netOperatingLoss, total) {
    computationOfGrossIncomeSpouse = {
        grossIncome: grossIncome,
        lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw: lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw,
        netOperatingLoss: netOperatingLoss,
        total: total
    };
};

function populateComputationOfGrossIncomeSpouse(sequenceNumber, year, amount, nolcoAppliedPreviousYear, nolcoExpired, nolcoAppliedCurrentYear, netOperatingLossUnapplied) {
    detailedComputationOfGrossIncomeSpouse = {
        sequenceNumber: sequenceNumber,
        year: year,
        amount: amount,
        nolcoAppliedPreviousYear: nolcoAppliedPreviousYear,
        nolcoExpired: nolcoExpired,
        nolcoAppliedCurrentYear: nolcoAppliedCurrentYear,
        netOperatingLossUnapplied: netOperatingLossUnapplied
    };
    listDetailedComputationOfGrossIncomeSpouse.push(detailedComputationOfGrossIncomeSpouse);
};



function populateTaxCreditsPayments(priorYearsExcessCredits, taxPaymentsfortheFirstQuarters, creditableTaxWithheldfortheFirstThreeQuarters, creditableTaxWithheldfortheFirst4thQuarters, taxPaidinReturnPreviouslyFiled, foreignTaxCredits, SpecialTaxCredits, otherPaymentsDescription, otherPaymentsCreditsSpecify, totalTaxCreditsPayments, creditableTaxWithheld2316) {
    taxCreditsPayments = {
        priorYearsExcessCredits: priorYearsExcessCredits,
        taxPaymentsfortheFirstQuarters: taxPaymentsfortheFirstQuarters,
        creditableTaxWithheldfortheFirstThreeQuarters: creditableTaxWithheldfortheFirstThreeQuarters,
        creditableTaxWithheldfortheFirst4thQuarters: creditableTaxWithheldfortheFirst4thQuarters,
        taxPaidinReturnPreviouslyFiled: taxPaidinReturnPreviouslyFiled,
        foreignTaxCredits: foreignTaxCredits,
        SpecialTaxCredits: SpecialTaxCredits,
        otherPaymentsDescription: otherPaymentsDescription,
        otherPaymentsCreditsSpecify: otherPaymentsCreditsSpecify,
        totalTaxCreditsPayments: totalTaxCreditsPayments,
        creditableTaxWithheld2316: creditableTaxWithheld2316
    };
};

function populateTaxCreditsPaymentsSpouse(priorYearsExcessCredits, taxPaymentsfortheFirstQuarters, creditableTaxWithheldfortheFirstThreeQuarters, creditableTaxWithheldfortheFirst4thQuarters, taxPaidinReturnPreviouslyFiled, foreignTaxCredits, SpecialTaxCredits, otherPaymentsDescription, otherPaymentsCreditsSpecify, totalTaxCreditsPayments, creditableTaxWithheld2316) {
    taxCreditsPaymentsSpouse = {
        priorYearsExcessCredits: priorYearsExcessCredits,
        taxPaymentsfortheFirstQuarters: taxPaymentsfortheFirstQuarters,
        creditableTaxWithheldfortheFirstThreeQuarters: creditableTaxWithheldfortheFirstThreeQuarters,
        creditableTaxWithheldfortheFirst4thQuarters: creditableTaxWithheldfortheFirst4thQuarters,
        taxPaidinReturnPreviouslyFiled: taxPaidinReturnPreviouslyFiled,
        foreignTaxCredits: foreignTaxCredits,
        SpecialTaxCredits: SpecialTaxCredits,
        otherPaymentsDescription: otherPaymentsDescription,
        otherPaymentsCreditsSpecify: otherPaymentsCreditsSpecify,
        totalTaxCreditsPayments: totalTaxCreditsPayments,
        creditableTaxWithheld2316: creditableTaxWithheld2316
    };
};

function populateBalanceSheet(currentAssests, longTermInvestment, propertyPlantEquipmentNet, longTermReceivables, intangibleAssets, otherAssets, totalAssets, currentLiabilities, longTermLiabilities, deferedCredits, otherLiabilities, totalLiabilities, capitalStock, additionalPaidInCapital, retainedEarnings, totalEquity, totalLiabilitiesEquity, beginningCapital, netIncomeForTheYear, drawings, endingCapital, totalLiabilitiesAndCapital) {
    balanceSheet = {
        currentAssests: currentAssests,
        longTermInvestment: longTermInvestment,
        propertyPlantEquipmentNet: propertyPlantEquipmentNet,
        longTermReceivables: longTermReceivables,
        intangibleAssets: intangibleAssets,
        otherAssets: otherAssets,
        totalAssets: totalAssets,
        currentLiabilities: currentLiabilities,
        longTermLiabilities: longTermLiabilities,
        deferedCredits: deferedCredits,
        otherLiabilities: otherLiabilities,
        totalLiabilities: totalLiabilities,
        capitalStock: capitalStock,
        additionalPaidInCapital: additionalPaidInCapital,
        retainedEarnings: retainedEarnings,
        totalEquity: totalEquity,
        totalLiabilitiesEquity: totalLiabilitiesEquity,
        beginningCapital: beginningCapital,
        netIncomeForTheYear: netIncomeForTheYear,
        drawings: drawings,
        endingCapital: endingCapital,
        totalLiabilitiesAndCapital: totalLiabilitiesAndCapital
    };
};

function populateBalanceSheetSpouse(currentAssests, longTermInvestment, propertyPlantEquipmentNet, longTermReceivables, intangibleAssets, otherAssets, totalAssets, currentLiabilities, longTermLiabilities, deferedCredits, otherLiabilities, totalLiabilities, capitalStock, additionalPaidInCapital, retainedEarnings, totalEquity, totalLiabilitiesEquity, beginningCapital, netIncomeForTheYear, drawings, endingCapital, totalLiabilitiesAndCapital) {
    balanceSheetSpouse = {
        currentAssests: currentAssests,
        longTermInvestment: longTermInvestment,
        propertyPlantEquipmentNet: propertyPlantEquipmentNet,
        longTermReceivables: longTermReceivables,
        intangibleAssets: intangibleAssets,
        otherAssets: otherAssets,
        totalAssets: totalAssets,
        currentLiabilities: currentLiabilities,
        longTermLiabilities: longTermLiabilities,
        deferedCredits: deferedCredits,
        otherLiabilities: otherLiabilities,
        totalLiabilities: totalLiabilities,
        capitalStock: capitalStock,
        additionalPaidInCapital: additionalPaidInCapital,
        retainedEarnings: retainedEarnings,
        totalEquity: totalEquity,
        totalLiabilitiesEquity: totalLiabilitiesEquity,
        beginningCapital: beginningCapital,
        netIncomeForTheYear: netIncomeForTheYear,
        drawings: drawings,
        endingCapital: endingCapital,
        totalLiabilitiesAndCapital: totalLiabilitiesAndCapital
    };
};


function populateReconciliationOfNetIncome(netIncomePerBooks, nonDeductibleExpenseList, totalNonDeductibleExpenses, listNonTaxable, listSpecialDeductions, totalNonTaxableAndSpDeductions, netTaxableIncome) {
    reconciliationOfNetIncome = {
        netIncomePerBooks: netIncomePerBooks,
        nonDeductibleExpenseList: nonDeductibleExpenseList,
        totalNonDeductibleExpenses: totalNonDeductibleExpenses,
        listNonTaxable: listNonTaxable,
        listSpecialDeductions: listSpecialDeductions,
        totalNonTaxableAndSpDeductions: totalNonTaxableAndSpDeductions,
        netTaxableIncome: netTaxableIncome
    };
};

function populateNonDeductible(otherExpandableDesc, otherExpandableAmount) {
    nonDeductibleExpense = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    nonDeductibleExpenseList.push(nonDeductibleExpense);
};


function populateListOfnonTaxableAndSpDeductions(otherExpandableDesc, otherExpandableAmount) {
    nonTaxable = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    listNonTaxable.push(nonTaxable);
};



function populateListOfSpecialDeductions(otherExpandableDesc, otherExpandableAmount) {

    specialDeductions = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    listSpecialDeductions.push(specialDeductions);
};


function populateReconciliationOfNetIncomeSpouse(netIncomePerBooks, nonDeductibleExpenseListSpouse, totalNonDeductibleExpenses, listNonTaxableSpouse, listSpecialDeductionsSpouse, totalNonTaxableAndSpDeductions, netTaxableIncome) {
    reconciliationOfNetIncomeSpouse = {
        netIncomePerBooks: netIncomePerBooks,
        nonDeductibleExpenseListSpouse: nonDeductibleExpenseListSpouse,
        totalNonDeductibleExpenses: totalNonDeductibleExpenses,
        listNonTaxableSpouse: listNonTaxableSpouse,
        listSpecialDeductionsSpouse: listSpecialDeductionsSpouse,
        totalNonTaxableAndSpDeductions: totalNonTaxableAndSpDeductions,
        netTaxableIncome: netTaxableIncome
    };
};

function populateNonDeductibleSpouse(otherExpandableDesc, otherExpandableAmount) {
    nonDeductibleExpenseSpouse = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    nonDeductibleExpenseListSpouse.push(nonDeductibleExpenseSpouse);
};


function populateListOfnonTaxableAndSpDeductionsSpouse(otherExpandableDesc, otherExpandableAmount) {
    nonTaxableSpouse = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    listNonTaxableSpouse.push(nonTaxableSpouse);
};



function populateListOfSpecialDeductionsSpouse(otherExpandableDesc, otherExpandableAmount) {

    specialDeductionsSpouse = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    listSpecialDeductionsSpouse.push(specialDeductionsSpouse);
};


function populateTaxpayerGrossIncome(interestExempt, interestsActualAmt, royaltiesExempt, royaltiesActualAmt, dividendsActualAmt, prizesWinningsActualAmt, fringeBenefitsActualAmt, compSubjTo15PrefRateActualAmt, interestsFinalTaxWthldPd, royaltiesFinalTaxWthldPd, dividendsFinalTaxWthldPd, prizesWinningsFinalTaxWthldPd, fringeBenefitsFinalTaxWthldPd, compSubjTo15PrefRateFinalTaxWthldPd, taxpayerCompensationSubjectList, taxpayerRealPropertySalesList, taxpayerStockSharesList, taxpayerOtherIncomeList, totalFinalTaxWithheldOrPaid) {
    taxpayerGrossIncome = {
        interestExempt: interestExempt,
        interestsActualAmt: interestsActualAmt,
        royaltiesExempt: royaltiesExempt,
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
        taxpayerCompensationSubjectList: taxpayerCompensationSubjectList,
        taxpayerRealPropertySalesList: taxpayerRealPropertySalesList,
        taxpayerStockSharesList: taxpayerStockSharesList,
        taxpayerOtherIncomeList: taxpayerOtherIncomeList,
        totalFinalTaxWithheldOrPaid: totalFinalTaxWithheldOrPaid
    };
};

function populateTaxpayerCompensationSubject(actualFairMarketValue, finalTaxWithheld, description) {
    taxpayerCompensationSubject = {
        actualFairMarketValue: actualFairMarketValue,
        finalTaxWithheld: finalTaxWithheld,
        description: description
    };
    taxpayerCompensationSubjectList.push(taxpayerCompensationSubject);
};

function populateTaxpayerRealPropertySales(propDescription, taxDeclNo, carNo, actualAmount, propertyTaxWithheld) {
    taxpayerRealPropertySales = {
        propDescription: propDescription,
        taxDeclNo: taxDeclNo,
        carNo: carNo,
        actualAmount: actualAmount,
        propertyTaxWithheld: propertyTaxWithheld
    };
    taxpayerRealPropertySalesList.push(taxpayerRealPropertySales);
};

function populateTaxpayerStockShares(stockKind, stockSeries, stockCARNo, numShares, dateIssued, stockActualAmount, stockTaxWithheld) {
    taxpayerStockShares = {
        stockKind: stockKind,
        stockSeries: stockSeries,
        stockCARNo: stockCARNo,
        numShares: numShares,
        dateIssued: dateIssued,
        stockActualAmount: stockActualAmount,
        stockTaxWithheld: stockTaxWithheld
    };
    taxpayerStockSharesList.push(taxpayerStockShares);
};

function populateTaxpayerOtherIncome(otherIncome, actualAmount, otherIncomeTaxWithheld) {
    taxpayerOtherIncome = {
        otherIncome: otherIncome,
        actualAmount: actualAmount,
        otherIncomeTaxWithheld: otherIncomeTaxWithheld
    };
    taxpayerOtherIncomeList.push(taxpayerOtherIncome);
};

function populateTaxpayerGrossIncomeExempt(proceedsOfInsurance, returnOfPremium, retirementBenefitsEtc, taxpayerOtherExemptIncomeList, totalFinalTaxWithheldOrPaid) {
    taxpayerGrossIncomeExempt = {
        proceedsOfInsurance: proceedsOfInsurance,
        returnOfPremium: returnOfPremium,
        retirementBenefitsEtc: retirementBenefitsEtc,
        taxpayerOtherExemptIncomeList: taxpayerOtherExemptIncomeList,
        totalFinalTaxWithheldOrPaid: totalFinalTaxWithheldOrPaid
    };
};

function populateTaxpayerPersonalPropertyReceived(personalPropertyDesc, personalPropertyTransferMode, personalPropertyCARNo, personalPropertyActualAmount) {
    taxpayerPersonalPropertyReceived = {
        personalPropertyDesc: personalPropertyDesc,
        personalPropertyTransferMode: personalPropertyTransferMode,
        personalPropertyCARNo: personalPropertyCARNo,
        personalPropertyActualAmount: personalPropertyActualAmount
    };
    taxpayerPersonalPropertyReceivedList.push(taxpayerPersonalPropertyReceived);
};

function populateTaxpayerOtherExemptIncome(otherIncome, actualAmount) {

    taxpayerOtherExemptIncome = {
        otherIncome: otherIncome,
        actualAmount: actualAmount
    };
    taxpayerOtherExemptIncomeList.push(taxpayerOtherExemptIncome);
};

function populateTaxpayerConsolidatedComputation(referenceNo, netSalesRegular, netSalesSpecial, netSalesExempt, netSalesTotal, otherIncomeRegular, otherIncomeSpecial, otherIncomeExempt, otherIncomeTotal, totalSalesRegular, totalSalesSpecial, totalSalesExempt, totalSalesTotal, costSalesRegular, costSalesSpecial, costSalesExempt, costSalesTotal, grossIncomeBusinessRegular, grossIncomeBusinessSpecial, grossIncomeBusinessExempt, grossIncomeBusinessTotal, nonOperatingIncomeRegular, nonOperatingIncomeSpecial, nonOperatingIncomeExempt, nonOperatingIncomeTotal, totalGrossIncomeRegular, totalGrossIncomeSpecial, totalGrossIncomeExempt, totalGrossIncomeTotal, ordinaryAllowItemDedRegular, ordinaryAllowItemDedSpecial, ordinaryAllowItemDedExempt, ordinaryAllowItemDedTotal, specialAllowItemDedRegular, specialAllowItemDedSpecial, specialAllowItemDedExempt, specialAllowItemDedTotal, nolcoRegular, nolcoSpecial, nolcoExempt, nolcoTotal, totalAllowItemDedRegular, totalAllowItemDedSpecial, totalAllowItemDedExempt, totalAllowItemDedTotal, osdRegular, osdSpecial, osdExempt, osdTotal, taxableIncomeFrmBsnsRegular, taxableIncomeFrmBsnsSpecial, taxableIncomeFrmBsnsExempt, taxableIncomeFrmBsnsTotal, netTaxableCompIncomeRegular, netTaxableCompIncomeSpecial, netTaxableCompIncomeExempt, netTaxableCompIncomeTotal, netTaxableIncomeRegular, netTaxableIncomeSpecial, netTaxableIncomeExempt, netTaxableIncomeTotal, excessDeductionsRegular, excessDeductionsSpecial, excessDeductionsExempt, excessDeductionsTotal, totalTaxableIncomeRegular, totalTaxableIncomeSpecial, totalTaxableIncomeExempt, totalTaxableIncomeTotal, totalIncomeTaxDueRegular, totalIncomeTaxDueSpecial, totalIncomeTaxDueExempt, totalIncomeTaxDueTotal, totalTaxCreditsPaymentsRegular, totalTaxCreditsPaymentsSpecial, totalTaxCreditsPaymentsExempt, totalTaxCreditsPaymentsTotal, netTaxPayableRegular, netTaxPayableSpecial, netTaxPayableExempt, netTaxPayableTotal, totalTaxReliefAvailmentRegular, totalTaxReliefAvailmentSpecial, totalTaxReliefAvailmentExempt, totalTaxReliefAvailmentTotal) {
    taxpayerConsolidatedComputation = {
        referenceNo: referenceNo,
        netSalesRegular: netSalesRegular,
        netSalesSpecial: netSalesSpecial,
        netSalesExempt: netSalesExempt,
        netSalesTotal: netSalesTotal,
        otherIncomeRegular: otherIncomeRegular,
        otherIncomeSpecial: otherIncomeSpecial,
        otherIncomeExempt: otherIncomeExempt,
        otherIncomeTotal: otherIncomeTotal,
        totalSalesRegular: totalSalesRegular,
        totalSalesSpecial: totalSalesSpecial,
        totalSalesExempt: totalSalesExempt,
        totalSalesTotal: totalSalesTotal,
        costSalesRegular: costSalesRegular,
        costSalesSpecial: costSalesSpecial,
        costSalesExempt: costSalesExempt,
        costSalesTotal: costSalesTotal,
        grossIncomeBusinessRegular: grossIncomeBusinessRegular,
        grossIncomeBusinessSpecial: grossIncomeBusinessSpecial,
        grossIncomeBusinessExempt: grossIncomeBusinessExempt,
        grossIncomeBusinessTotal: grossIncomeBusinessTotal,
        nonOperatingIncomeRegular: nonOperatingIncomeRegular,
        nonOperatingIncomeSpecial: nonOperatingIncomeSpecial,
        nonOperatingIncomeExempt: nonOperatingIncomeExempt,
        nonOperatingIncomeTotal: nonOperatingIncomeTotal,
        totalGrossIncomeRegular: totalGrossIncomeRegular,
        totalGrossIncomeSpecial: totalGrossIncomeSpecial,
        totalGrossIncomeExempt: totalGrossIncomeExempt,
        totalGrossIncomeTotal: totalGrossIncomeTotal,
        ordinaryAllowItemDedRegular: ordinaryAllowItemDedRegular,
        ordinaryAllowItemDedSpecial: ordinaryAllowItemDedSpecial,
        ordinaryAllowItemDedExempt: ordinaryAllowItemDedExempt,
        ordinaryAllowItemDedTotal: ordinaryAllowItemDedTotal,
        specialAllowItemDedRegular: specialAllowItemDedRegular,
        specialAllowItemDedSpecial: specialAllowItemDedSpecial,
        specialAllowItemDedExempt: specialAllowItemDedExempt,
        specialAllowItemDedTotal: specialAllowItemDedTotal,
        nolcoRegular: nolcoRegular,
        nolcoSpecial: nolcoSpecial,
        nolcoExempt: nolcoExempt,
        nolcoTotal: nolcoTotal,
        totalAllowItemDedRegular: totalAllowItemDedRegular,
        totalAllowItemDedSpecial: totalAllowItemDedSpecial,
        totalAllowItemDedExempt: totalAllowItemDedExempt,
        totalAllowItemDedTotal: totalAllowItemDedTotal,
        osdRegular: osdRegular,
        osdSpecial: osdSpecial,
        osdExempt: osdExempt,
        osdTotal: osdTotal,
        taxableIncomeFrmBsnsRegular: taxableIncomeFrmBsnsRegular,
        taxableIncomeFrmBsnsSpecial: taxableIncomeFrmBsnsSpecial,
        taxableIncomeFrmBsnsExempt: taxableIncomeFrmBsnsExempt,
        taxableIncomeFrmBsnsTotal: taxableIncomeFrmBsnsTotal,
        netTaxableCompIncomeRegular: netTaxableCompIncomeRegular,
        netTaxableCompIncomeSpecial: netTaxableCompIncomeSpecial,
        netTaxableCompIncomeExempt: netTaxableCompIncomeExempt,
        netTaxableCompIncomeTotal: netTaxableCompIncomeTotal,
        netTaxableIncomeRegular: netTaxableIncomeRegular,
        netTaxableIncomeSpecial: netTaxableIncomeSpecial,
        netTaxableIncomeExempt: netTaxableIncomeExempt,
        netTaxableIncomeTotal: netTaxableIncomeTotal,
        excessDeductionsRegular: excessDeductionsRegular,
        excessDeductionsSpecial: excessDeductionsSpecial,
        excessDeductionsExempt: excessDeductionsExempt,
        excessDeductionsTotal: excessDeductionsTotal,
        totalTaxableIncomeRegular: totalTaxableIncomeRegular,
        totalTaxableIncomeSpecial: totalTaxableIncomeSpecial,
        totalTaxableIncomeExempt: totalTaxableIncomeExempt,
        totalTaxableIncomeTotal: totalTaxableIncomeTotal,
        totalIncomeTaxDueRegular: totalIncomeTaxDueRegular,
        totalIncomeTaxDueSpecial: totalIncomeTaxDueSpecial,
        totalIncomeTaxDueExempt: totalIncomeTaxDueExempt,
        totalIncomeTaxDueTotal: totalIncomeTaxDueTotal,
        totalTaxCreditsPaymentsRegular: totalTaxCreditsPaymentsRegular,
        totalTaxCreditsPaymentsSpecial: totalTaxCreditsPaymentsSpecial,
        totalTaxCreditsPaymentsExempt: totalTaxCreditsPaymentsExempt,
        totalTaxCreditsPaymentsTotal: totalTaxCreditsPaymentsTotal,
        netTaxPayableRegular: netTaxPayableRegular,
        netTaxPayableSpecial: netTaxPayableSpecial,
        netTaxPayableExempt: netTaxPayableExempt,
        netTaxPayableTotal: netTaxPayableTotal,
        totalTaxReliefAvailmentRegular: totalTaxReliefAvailmentRegular,
        totalTaxReliefAvailmentSpecial: totalTaxReliefAvailmentSpecial,
        totalTaxReliefAvailmentExempt: totalTaxReliefAvailmentExempt,
        totalTaxReliefAvailmentTotal: totalTaxReliefAvailmentTotal
    };
};

function populateTaxpayerConsolidatedComputationSpouse(referenceNo, netSalesRegular, netSalesSpecial, netSalesExempt, netSalesTotal, otherIncomeRegular, otherIncomeSpecial, otherIncomeExempt, otherIncomeTotal, totalSalesRegular, totalSalesSpecial, totalSalesExempt, totalSalesTotal, costSalesRegular, costSalesSpecial, costSalesExempt, costSalesTotal, grossIncomeBusinessRegular, grossIncomeBusinessSpecial, grossIncomeBusinessExempt, grossIncomeBusinessTotal, nonOperatingIncomeRegular, nonOperatingIncomeSpecial, nonOperatingIncomeExempt, nonOperatingIncomeTotal, totalGrossIncomeRegular, totalGrossIncomeSpecial, totalGrossIncomeExempt, totalGrossIncomeTotal, ordinaryAllowItemDedRegular, ordinaryAllowItemDedSpecial, ordinaryAllowItemDedExempt, ordinaryAllowItemDedTotal, specialAllowItemDedRegular, specialAllowItemDedSpecial, specialAllowItemDedExempt, specialAllowItemDedTotal, nolcoRegular, nolcoSpecial, nolcoExempt, nolcoTotal, totalAllowItemDedRegular, totalAllowItemDedSpecial, totalAllowItemDedExempt, totalAllowItemDedTotal, osdRegular, osdSpecial, osdExempt, osdTotal, taxableIncomeFrmBsnsRegular, taxableIncomeFrmBsnsSpecial, taxableIncomeFrmBsnsExempt, taxableIncomeFrmBsnsTotal, netTaxableCompIncomeRegular, netTaxableCompIncomeSpecial, netTaxableCompIncomeExempt, netTaxableCompIncomeTotal, netTaxableIncomeRegular, netTaxableIncomeSpecial, netTaxableIncomeExempt, netTaxableIncomeTotal, excessDeductionsRegular, excessDeductionsSpecial, excessDeductionsExempt, excessDeductionsTotal, totalTaxableIncomeRegular, totalTaxableIncomeSpecial, totalTaxableIncomeExempt, totalTaxableIncomeTotal, totalIncomeTaxDueRegular, totalIncomeTaxDueSpecial, totalIncomeTaxDueExempt, totalIncomeTaxDueTotal, totalTaxCreditsPaymentsRegular, totalTaxCreditsPaymentsSpecial, totalTaxCreditsPaymentsExempt, totalTaxCreditsPaymentsTotal, netTaxPayableRegular, netTaxPayableSpecial, netTaxPayableExempt, netTaxPayableTotal, totalTaxReliefAvailmentRegular, totalTaxReliefAvailmentSpecial, totalTaxReliefAvailmentExempt, totalTaxReliefAvailmentTotal) {
    taxpayerConsolidatedComputationSpouse = {
        referenceNo: referenceNo,
        netSalesRegular: netSalesRegular,
        netSalesSpecial: netSalesSpecial,
        netSalesExempt: netSalesExempt,
        netSalesTotal: netSalesTotal,
        otherIncomeRegular: otherIncomeRegular,
        otherIncomeSpecial: otherIncomeSpecial,
        otherIncomeExempt: otherIncomeExempt,
        otherIncomeTotal: otherIncomeTotal,
        totalSalesRegular: totalSalesRegular,
        totalSalesSpecial: totalSalesSpecial,
        totalSalesExempt: totalSalesExempt,
        totalSalesTotal: totalSalesTotal,
        costSalesRegular: costSalesRegular,
        costSalesSpecial: costSalesSpecial,
        costSalesExempt: costSalesExempt,
        costSalesTotal: costSalesTotal,
        grossIncomeBusinessRegular: grossIncomeBusinessRegular,
        grossIncomeBusinessSpecial: grossIncomeBusinessSpecial,
        grossIncomeBusinessExempt: grossIncomeBusinessExempt,
        grossIncomeBusinessTotal: grossIncomeBusinessTotal,
        nonOperatingIncomeRegular: nonOperatingIncomeRegular,
        nonOperatingIncomeSpecial: nonOperatingIncomeSpecial,
        nonOperatingIncomeExempt: nonOperatingIncomeExempt,
        nonOperatingIncomeTotal: nonOperatingIncomeTotal,
        totalGrossIncomeRegular: totalGrossIncomeRegular,
        totalGrossIncomeSpecial: totalGrossIncomeSpecial,
        totalGrossIncomeExempt: totalGrossIncomeExempt,
        totalGrossIncomeTotal: totalGrossIncomeTotal,
        ordinaryAllowItemDedRegular: ordinaryAllowItemDedRegular,
        ordinaryAllowItemDedSpecial: ordinaryAllowItemDedSpecial,
        ordinaryAllowItemDedExempt: ordinaryAllowItemDedExempt,
        ordinaryAllowItemDedTotal: ordinaryAllowItemDedTotal,
        specialAllowItemDedRegular: specialAllowItemDedRegular,
        specialAllowItemDedSpecial: specialAllowItemDedSpecial,
        specialAllowItemDedExempt: specialAllowItemDedExempt,
        specialAllowItemDedTotal: specialAllowItemDedTotal,
        nolcoRegular: nolcoRegular,
        nolcoSpecial: nolcoSpecial,
        nolcoExempt: nolcoExempt,
        nolcoTotal: nolcoTotal,
        totalAllowItemDedRegular: totalAllowItemDedRegular,
        totalAllowItemDedSpecial: totalAllowItemDedSpecial,
        totalAllowItemDedExempt: totalAllowItemDedExempt,
        totalAllowItemDedTotal: totalAllowItemDedTotal,
        osdRegular: osdRegular,
        osdSpecial: osdSpecial,
        osdExempt: osdExempt,
        osdTotal: osdTotal,
        taxableIncomeFrmBsnsRegular: taxableIncomeFrmBsnsRegular,
        taxableIncomeFrmBsnsSpecial: taxableIncomeFrmBsnsSpecial,
        taxableIncomeFrmBsnsExempt: taxableIncomeFrmBsnsExempt,
        taxableIncomeFrmBsnsTotal: taxableIncomeFrmBsnsTotal,
        netTaxableCompIncomeRegular: netTaxableCompIncomeRegular,
        netTaxableCompIncomeSpecial: netTaxableCompIncomeSpecial,
        netTaxableCompIncomeExempt: netTaxableCompIncomeExempt,
        netTaxableCompIncomeTotal: netTaxableCompIncomeTotal,
        netTaxableIncomeRegular: netTaxableIncomeRegular,
        netTaxableIncomeSpecial: netTaxableIncomeSpecial,
        netTaxableIncomeExempt: netTaxableIncomeExempt,
        netTaxableIncomeTotal: netTaxableIncomeTotal,
        excessDeductionsRegular: excessDeductionsRegular,
        excessDeductionsSpecial: excessDeductionsSpecial,
        excessDeductionsExempt: excessDeductionsExempt,
        excessDeductionsTotal: excessDeductionsTotal,
        totalTaxableIncomeRegular: totalTaxableIncomeRegular,
        totalTaxableIncomeSpecial: totalTaxableIncomeSpecial,
        totalTaxableIncomeExempt: totalTaxableIncomeExempt,
        totalTaxableIncomeTotal: totalTaxableIncomeTotal,
        totalIncomeTaxDueRegular: totalIncomeTaxDueRegular,
        totalIncomeTaxDueSpecial: totalIncomeTaxDueSpecial,
        totalIncomeTaxDueExempt: totalIncomeTaxDueExempt,
        totalIncomeTaxDueTotal: totalIncomeTaxDueTotal,
        totalTaxCreditsPaymentsRegular: totalTaxCreditsPaymentsRegular,
        totalTaxCreditsPaymentsSpecial: totalTaxCreditsPaymentsSpecial,
        totalTaxCreditsPaymentsExempt: totalTaxCreditsPaymentsExempt,
        totalTaxCreditsPaymentsTotal: totalTaxCreditsPaymentsTotal,
        netTaxPayableRegular: netTaxPayableRegular,
        netTaxPayableSpecial: netTaxPayableSpecial,
        netTaxPayableExempt: netTaxPayableExempt,
        netTaxPayableTotal: netTaxPayableTotal,
        totalTaxReliefAvailmentRegular: totalTaxReliefAvailmentRegular,
        totalTaxReliefAvailmentSpecial: totalTaxReliefAvailmentSpecial,
        totalTaxReliefAvailmentExempt: totalTaxReliefAvailmentExempt,
        totalTaxReliefAvailmentTotal: totalTaxReliefAvailmentTotal
    };
};

function populateTaxRegime(taxRegimes) {
    taxRegime = {
        taxRegimes: taxRegimes
    };
};



function populateTaxPayersActivityProfileSch(investmentPromotionAgency, legalBasis, registrationNo, specialTaxRate, specialTaxRated, effectivityDateofTaxReliefExemptionFrom, effectivityDateofTaxReliefExemptionTo) {
    taxPayersActivityProfileSch = {
        investmentPromotionAgency: investmentPromotionAgency,
        legalBasis: legalBasis,
        registrationNo: registrationNo,
        specialTaxRate: specialTaxRate,
        specialTaxRated: specialTaxRated,
        effectivityDateofTaxReliefExemptionFrom: effectivityDateofTaxReliefExemptionFrom,
        effectivityDateofTaxReliefExemptionTo: effectivityDateofTaxReliefExemptionTo
    };
};

function populateTaxPayersActivityProfileSchSps(investmentPromotionAgency, legalBasis, registrationNo, specialTaxRate, specialTaxRated, effectivityDateofTaxReliefExemptionFrom, effectivityDateofTaxReliefExemptionTo) {
    taxPayersActivityProfileSchSps = {
        investmentPromotionAgency: investmentPromotionAgency,
        legalBasis: legalBasis,
        registrationNo: registrationNo,
        specialTaxRate: specialTaxRate,
        specialTaxRated: specialTaxRated,
        effectivityDateofTaxReliefExemptionFrom: effectivityDateofTaxReliefExemptionFrom,
        effectivityDateofTaxReliefExemptionTo: effectivityDateofTaxReliefExemptionTo
    };
};

function populateComputationOfIncomeTaxSch(grossCompensationIncome, nonTaxableExemptCompensation, grossTaxableCompensationIncome, premiumOnHealthHospitalizationInsurance, personalExemptionforEstateAndTrust, additionalExemption, totalDeductions, netTaxableCompensationIncome, excessOfDeductions, netSalesRevenuesReceiptFees, otherIncomeOperationsNotToSubjectToFinalTax, totalSalesRevenuesReceiptFees, totalCostOfSalesServices, grossIncomeFromBusinessProfession, nonOperatingIncome, totalGrossIncome, ordinaryAllowableItemizedDeductions, totalSpecialAllowableItemizedDeductions, totalNOLCO, totalAllowableItemizedDeductions, optionalStandardDeductions, taxableIncomeFromBusinessProfession, netTaxableIncomeCompensationIncome, netTaxableIncome, excessDeductionsIfNoCompensationIncome, totalTaxableIncome, taxDueRegular, specialRateIncomeTaxDue, shareOfOtherGovernmentAgency, netSpecialIncomeTaxDue, totalIncomeTaxDue, regular, special, exempt, totalTaxCreditPayments, netTaxPayable, netTaxPayableForTaxFilerAndSpouse, portionOfTaxPayableAllowed, netAmountOfTaxPayable, surcharge, interest, compromise, totalPenalties, totalAmountPayableUponFiling, regularIncomeTaxOtherwiseDue, netSalesRevRcptFees, otherIncomeNoFinalTax, totalSalesRevRcptFees, costOfSalesServices, grossIncomeFrmBusiness, nonOperatingIncomeSch, ordinaryAllowableItemizedDed, specialAllowableItemizedDed, totalAllowableItemizedDed, taxableIncomeFrmBsnsPrfsn) {
    computationOfIncomeTaxSch = {
        grossCompensationIncome: grossCompensationIncome,
        nonTaxableExemptCompensation: nonTaxableExemptCompensation,
        grossTaxableCompensationIncome: grossTaxableCompensationIncome,
        premiumOnHealthHospitalizationInsurance: premiumOnHealthHospitalizationInsurance,
        personalExemptionforEstateAndTrust: personalExemptionforEstateAndTrust,
        additionalExemption: additionalExemption,
        totalDeductions: totalDeductions,
        netTaxableCompensationIncome: netTaxableCompensationIncome,
        excessOfDeductions: excessOfDeductions,
        netSalesRevenuesReceiptFees: netSalesRevenuesReceiptFees,
        otherIncomeOperationsNotToSubjectToFinalTax: otherIncomeOperationsNotToSubjectToFinalTax,
        totalSalesRevenuesReceiptFees: totalSalesRevenuesReceiptFees,
        totalCostOfSalesServices: totalCostOfSalesServices,
        grossIncomeFromBusinessProfession: grossIncomeFromBusinessProfession,
        nonOperatingIncome: nonOperatingIncome,
        totalGrossIncome: totalGrossIncome,
        ordinaryAllowableItemizedDeductions: ordinaryAllowableItemizedDeductions,
        totalSpecialAllowableItemizedDeductions: totalSpecialAllowableItemizedDeductions,
        totalNOLCO: totalNOLCO,
        totalAllowableItemizedDeductions: totalAllowableItemizedDeductions,
        optionalStandardDeductions: optionalStandardDeductions,
        taxableIncomeFromBusinessProfession: taxableIncomeFromBusinessProfession,
        netTaxableIncomeCompensationIncome: netTaxableIncomeCompensationIncome,
        netTaxableIncome: netTaxableIncome,
        excessDeductionsIfNoCompensationIncome: excessDeductionsIfNoCompensationIncome,
        totalTaxableIncome: totalTaxableIncome,
        taxDueRegular: taxDueRegular,
        specialRateIncomeTaxDue: specialRateIncomeTaxDue,
        shareOfOtherGovernmentAgency: shareOfOtherGovernmentAgency,
        netSpecialIncomeTaxDue: netSpecialIncomeTaxDue,
        totalIncomeTaxDue: totalIncomeTaxDue,
        regular: regular,
        special: special,
        exempt: exempt,
        totalTaxCreditPayments: totalTaxCreditPayments,
        netTaxPayable: netTaxPayable,
        netTaxPayableForTaxFilerAndSpouse: netTaxPayableForTaxFilerAndSpouse,
        portionOfTaxPayableAllowed: portionOfTaxPayableAllowed,
        netAmountOfTaxPayable: netAmountOfTaxPayable,
        surcharge: surcharge,
        interest: interest,
        compromise: compromise,
        totalPenalties: totalPenalties,
        totalAmountPayableUponFiling: totalAmountPayableUponFiling,
        regularIncomeTaxOtherwiseDue: regularIncomeTaxOtherwiseDue,
        netSalesRevRcptFees: netSalesRevRcptFees,
        otherIncomeNoFinalTax: otherIncomeNoFinalTax,
        totalSalesRevRcptFees: totalSalesRevRcptFees,
        costOfSalesServices: costOfSalesServices,
        grossIncomeFrmBusiness: grossIncomeFrmBusiness,
        nonOperatingIncomeSch: nonOperatingIncomeSch,
        ordinaryAllowableItemizedDed: ordinaryAllowableItemizedDed,
        specialAllowableItemizedDed: specialAllowableItemizedDed,
        totalAllowableItemizedDed: totalAllowableItemizedDed,
        taxableIncomeFrmBsnsPrfsn: taxableIncomeFrmBsnsPrfsn
    };
};

function populateComputationOfIncomeTaxSchSps(grossCompensationIncome, nonTaxableExemptCompensation, grossTaxableCompensationIncome, premiumOnHealthHospitalizationInsurance, personalExemptionforEstateAndTrust, additionalExemption, totalDeductions, netTaxableCompensationIncome, excessOfDeductions, netSalesRevenuesReceiptFees, otherIncomeOperationsNotToSubjectToFinalTax, totalSalesRevenuesReceiptFees, totalCostOfSalesServices, grossIncomeFromBusinessProfession, nonOperatingIncome, totalGrossIncome, ordinaryAllowableItemizedDeductions, totalSpecialAllowableItemizedDeductions, totalNOLCO, totalAllowableItemizedDeductions, optionalStandardDeductions, taxableIncomeFromBusinessProfession, netTaxableIncomeCompensationIncome, netTaxableIncome, excessDeductionsIfNoCompensationIncome, totalTaxableIncome, taxDueRegular, specialRateIncomeTaxDue, shareOfOtherGovernmentAgency, netSpecialIncomeTaxDue, totalIncomeTaxDue, regular, special, exempt, totalTaxCreditPayments, netTaxPayable, netTaxPayableForTaxFilerAndSpouse, portionOfTaxPayableAllowed, netAmountOfTaxPayable, surcharge, interest, compromise, totalPenalties, totalAmountPayableUponFiling, regularIncomeTaxOtherwiseDue, netSalesRevRcptFees, otherIncomeNoFinalTax, totalSalesRevRcptFees, costOfSalesServices, grossIncomeFrmBusiness, nonOperatingIncomeSch, ordinaryAllowableItemizedDed, specialAllowableItemizedDed, totalAllowableItemizedDed, taxableIncomeFrmBsnsPrfsn) {
    computationOfIncomeTaxSchSps = {
        grossCompensationIncome: grossCompensationIncome,
        nonTaxableExemptCompensation: nonTaxableExemptCompensation,
        grossTaxableCompensationIncome: grossTaxableCompensationIncome,
        premiumOnHealthHospitalizationInsurance: premiumOnHealthHospitalizationInsurance,
        personalExemptionforEstateAndTrust: personalExemptionforEstateAndTrust,
        additionalExemption: additionalExemption,
        totalDeductions: totalDeductions,
        netTaxableCompensationIncome: netTaxableCompensationIncome,
        excessOfDeductions: excessOfDeductions,
        netSalesRevenuesReceiptFees: netSalesRevenuesReceiptFees,
        otherIncomeOperationsNotToSubjectToFinalTax: otherIncomeOperationsNotToSubjectToFinalTax,
        totalSalesRevenuesReceiptFees: totalSalesRevenuesReceiptFees,
        totalCostOfSalesServices: totalCostOfSalesServices,
        grossIncomeFromBusinessProfession: grossIncomeFromBusinessProfession,
        nonOperatingIncome: nonOperatingIncome,
        totalGrossIncome: totalGrossIncome,
        ordinaryAllowableItemizedDeductions: ordinaryAllowableItemizedDeductions,
        totalSpecialAllowableItemizedDeductions: totalSpecialAllowableItemizedDeductions,
        totalNOLCO: totalNOLCO,
        totalAllowableItemizedDeductions: totalAllowableItemizedDeductions,
        optionalStandardDeductions: optionalStandardDeductions,
        taxableIncomeFromBusinessProfession: taxableIncomeFromBusinessProfession,
        netTaxableIncomeCompensationIncome: netTaxableIncomeCompensationIncome,
        netTaxableIncome: netTaxableIncome,
        excessDeductionsIfNoCompensationIncome: excessDeductionsIfNoCompensationIncome,
        totalTaxableIncome: totalTaxableIncome,
        taxDueRegular: taxDueRegular,
        specialRateIncomeTaxDue: specialRateIncomeTaxDue,
        shareOfOtherGovernmentAgency: shareOfOtherGovernmentAgency,
        netSpecialIncomeTaxDue: netSpecialIncomeTaxDue,
        totalIncomeTaxDue: totalIncomeTaxDue,
        regular: regular,
        special: special,
        exempt: exempt,
        totalTaxCreditPayments: totalTaxCreditPayments,
        netTaxPayable: netTaxPayable,
        netTaxPayableForTaxFilerAndSpouse: netTaxPayableForTaxFilerAndSpouse,
        portionOfTaxPayableAllowed: portionOfTaxPayableAllowed,
        netAmountOfTaxPayable: netAmountOfTaxPayable,
        surcharge: surcharge,
        interest: interest,
        compromise: compromise,
        totalPenalties: totalPenalties,
        totalAmountPayableUponFiling: totalAmountPayableUponFiling,
        regularIncomeTaxOtherwiseDue: regularIncomeTaxOtherwiseDue,
        netSalesRevRcptFees: netSalesRevRcptFees,
        otherIncomeNoFinalTax: otherIncomeNoFinalTax,
        totalSalesRevRcptFees: totalSalesRevRcptFees,
        costOfSalesServices: costOfSalesServices,
        grossIncomeFrmBusiness: grossIncomeFrmBusiness,
        nonOperatingIncomeSch: nonOperatingIncomeSch,
        ordinaryAllowableItemizedDed: ordinaryAllowableItemizedDed,
        specialAllowableItemizedDed: specialAllowableItemizedDed,
        totalAllowableItemizedDed: totalAllowableItemizedDed,
        taxableIncomeFrmBsnsPrfsn: taxableIncomeFrmBsnsPrfsn
    };
};

function populateTaxReliefAvailmentSchedule(taxReliefAvailmentBeforeSpecialTaxCredits, specialTaxCredits, regularTaxReliefAvailment, specialTaxReliefAvailment,
		exemptTaxReliefAvailment, totalTaxReliefAvailment, totalTaxReliefAvailmentofTaxFilerAndSpouse, taxableIncomeFrmBsns, specialAllowableItemizedDed,
		subTotal, regIncomeTaxOtherwiseDue, incomeTaxDueSpecialRate, taxReliefAvailment, totalTaxReliefAvailmentSpecial, taxableIncomeFrmBsnsRegular,
		applicableTaxRate, taxReliefAvailmentExempt) {
    taxReliefAvailmentSchedule = {
        taxReliefAvailmentBeforeSpecialTaxCredits: taxReliefAvailmentBeforeSpecialTaxCredits,
        specialTaxCredits: specialTaxCredits,
        regularTaxReliefAvailment: regularTaxReliefAvailment,
        specialTaxReliefAvailment: specialTaxReliefAvailment,
        exemptTaxReliefAvailment: exemptTaxReliefAvailment,
        totalTaxReliefAvailment: totalTaxReliefAvailment,
        totalTaxReliefAvailmentofTaxFilerAndSpouse: totalTaxReliefAvailmentofTaxFilerAndSpouse,
        taxableIncomeFrmBsns: taxableIncomeFrmBsns,
        specialAllowableItemizedDed: specialAllowableItemizedDed,
        subTotal: subTotal,
        regIncomeTaxOtherwiseDue: regIncomeTaxOtherwiseDue,
        incomeTaxDueSpecialRate: incomeTaxDueSpecialRate,
        taxReliefAvailment: taxReliefAvailment,
        totalTaxReliefAvailmentSpecial: totalTaxReliefAvailmentSpecial,
        taxableIncomeFrmBsnsRegular: taxableIncomeFrmBsnsRegular,
        applicableTaxRate: applicableTaxRate,
        taxReliefAvailmentExempt: taxReliefAvailmentExempt
    };
};

function populateTaxReliefAvailmentScheduleSpouse(taxReliefAvailmentBeforeSpecialTaxCredits, specialTaxCredits, regularTaxReliefAvailment, specialTaxReliefAvailment,
		exemptTaxReliefAvailment, totalTaxReliefAvailment, totalTaxReliefAvailmentofTaxFilerAndSpouse, taxableIncomeFrmBsns, specialAllowableItemizedDed,
		subTotal, regIncomeTaxOtherwiseDue, incomeTaxDueSpecialRate, taxReliefAvailment, totalTaxReliefAvailmentSpecial, taxableIncomeFrmBsnsRegular,
		applicableTaxRate, taxReliefAvailmentExempt) {
    taxReliefAvailmentScheduleSpouse = {
        taxReliefAvailmentBeforeSpecialTaxCredits: taxReliefAvailmentBeforeSpecialTaxCredits,
        specialTaxCredits: specialTaxCredits,
        regularTaxReliefAvailment: regularTaxReliefAvailment,
        specialTaxReliefAvailment: specialTaxReliefAvailment,
        exemptTaxReliefAvailment: exemptTaxReliefAvailment,
        totalTaxReliefAvailment: totalTaxReliefAvailment,
        totalTaxReliefAvailmentofTaxFilerAndSpouse: totalTaxReliefAvailmentofTaxFilerAndSpouse,
        taxableIncomeFrmBsns: taxableIncomeFrmBsns,
        specialAllowableItemizedDed: specialAllowableItemizedDed,
        subTotal: subTotal,
        regIncomeTaxOtherwiseDue: regIncomeTaxOtherwiseDue,
        incomeTaxDueSpecialRate: incomeTaxDueSpecialRate,
        taxReliefAvailment: taxReliefAvailment,
        totalTaxReliefAvailmentSpecial: totalTaxReliefAvailmentSpecial,
        taxableIncomeFrmBsnsRegular: taxableIncomeFrmBsnsRegular,
        applicableTaxRate: applicableTaxRate,
        taxReliefAvailmentExempt: taxReliefAvailmentExempt
    };
};


function populateSalesRevenuesReceiptFeesSch(totalSalesRevenuesReceiptsFees, grossSalesRevenuesReceiptsFees, totalRevenue, salesReturnsAllowancesAndDiscounts, NetSalesRevenueReceiptFees) {
    salesRevenuesReceiptFeesSch = {
        totalSalesRevenuesReceiptsFees: totalSalesRevenuesReceiptsFees,
        grossSalesRevenuesReceiptsFees: grossSalesRevenuesReceiptsFees,
        totalRevenue: totalRevenue,
        salesReturnsAllowancesAndDiscounts: salesReturnsAllowancesAndDiscounts,
        NetSalesRevenueReceiptFees: NetSalesRevenueReceiptFees
    };
};

function populateSalesRevenuesReceiptFeesSchSpouse(totalSalesRevenuesReceiptsFees, grossSalesRevenuesReceiptsFees, totalRevenue, salesReturnsAllowancesAndDiscounts, NetSalesRevenueReceiptFees) {
    salesRevenuesReceiptFeesSchSpouse = {
        totalSalesRevenuesReceiptsFees: totalSalesRevenuesReceiptsFees,
        grossSalesRevenuesReceiptsFees: grossSalesRevenuesReceiptsFees,
        totalRevenue: totalRevenue,
        salesReturnsAllowancesAndDiscounts: salesReturnsAllowancesAndDiscounts,
        NetSalesRevenueReceiptFees: NetSalesRevenueReceiptFees
    };
};

function populateListOfOtherTaxableIncomeNotSubjectToFinalTaxSch(description, amount) {
    otherTaxableIncomeNotSubjectToFinalTaxSch = {
        description: description,
        amount: amount
    };
    otherTaxableIncomeNotSubjectToFinalTaxListSch.push(otherTaxableIncomeNotSubjectToFinalTaxSch);
};

function populateListOfOtherTaxableIncomeNotSubjectToFinalTaxSchSps(description, amount) {
    otherTaxableIncomeNotSubjectToFinalTaxSchSps = {
        description: description,
        amount: amount
    };
    otherTaxableIncomeNotSubjectToFinalTaxListSchSps.push(otherTaxableIncomeNotSubjectToFinalTaxSchSps);
};

function populateCostOfSalesServicesSch(goodsInvBeg, purGoods, goodsAvail, goodsInvEnd, costSales, directMatsBeg, purDirectMats, matsAvail, directMatsEnd, rawMats, directLabor, manufacturingOverhead, totalManufacturingCost, workInProgressBeg, winProgressEnd, costGoodsManufactured, finishedGoodsBeg, finishedGoodsEnd, totalCostGoodsManufacturedAndSold, salaries, materials, sched2CDepreciation, sched2CRental, outsideServ, others, costService, totalCostSalesAndServices) {
    costOfSalesServicesSch = {
        goodsInvBeg: goodsInvBeg,
        purGoods: purGoods,
        goodsAvail: goodsAvail,
        goodsInvEnd: goodsInvEnd,
        costSales: costSales,
        directMatsBeg: directMatsBeg,
        purDirectMats: purDirectMats,
        matsAvail: matsAvail,
        directMatsEnd: directMatsEnd,
        rawMats: rawMats,
        directLabor: directLabor,
        manufacturingOverhead: manufacturingOverhead,
        totalManufacturingCost: totalManufacturingCost,
        workInProgressBeg: workInProgressBeg,
        winProgressEnd: winProgressEnd,
        costGoodsManufactured: costGoodsManufactured,
        finishedGoodsBeg: finishedGoodsBeg,
        finishedGoodsEnd: finishedGoodsEnd,
        totalCostGoodsManufacturedAndSold: totalCostGoodsManufacturedAndSold,
        salaries: salaries,
        materials: materials,
        sched2CDepreciation: sched2CDepreciation,
        sched2CRental: sched2CRental,
        outsideServ: outsideServ,
        others: others,
        costService: costService,
        totalCostSalesAndServices: totalCostSalesAndServices
    };
};


function populateCostOfSalesServicesSchSps(goodsInvBeg, purGoods, goodsAvail, goodsInvEnd, costSales, directMatsBeg, purDirectMats, matsAvail, directMatsEnd, rawMats, directLabor, manufacturingOverhead, totalManufacturingCost, workInProgressBeg, winProgressEnd, costGoodsManufactured, finishedGoodsBeg, finishedGoodsEnd, totalCostGoodsManufacturedAndSold, salaries, materials, sched2CDepreciation, sched2CRental, outsideServ, others, costService, totalCostSalesAndServices) {
    costOfSalesServicesSchSps = {
        goodsInvBeg: goodsInvBeg,
        purGoods: purGoods,
        goodsAvail: goodsAvail,
        goodsInvEnd: goodsInvEnd,
        costSales: costSales,
        directMatsBeg: directMatsBeg,
        purDirectMats: purDirectMats,
        matsAvail: matsAvail,
        directMatsEnd: directMatsEnd,
        rawMats: rawMats,
        directLabor: directLabor,
        manufacturingOverhead: manufacturingOverhead,
        totalManufacturingCost: totalManufacturingCost,
        workInProgressBeg: workInProgressBeg,
        winProgressEnd: winProgressEnd,
        costGoodsManufactured: costGoodsManufactured,
        finishedGoodsBeg: finishedGoodsBeg,
        finishedGoodsEnd: finishedGoodsEnd,
        totalCostGoodsManufacturedAndSold: totalCostGoodsManufacturedAndSold,
        salaries: salaries,
        materials: materials,
        sched2CDepreciation: sched2CDepreciation,
        sched2CRental: sched2CRental,
        outsideServ: outsideServ,
        others: others,
        costService: costService,
        totalCostSalesAndServices: totalCostSalesAndServices
    };
};
function populateNonOperatingIncomeSch(natureOfIncome, natureOfIncomeValue) {
    nonOperatingIncomeSch = {
        natureOfIncome: natureOfIncome,
        natureOfIncomeValue: natureOfIncomeValue
    };
    nonOperatingIncomeListSch.push(nonOperatingIncomeSch);
};

function populateNonOperatingIncomeSpouseSch(natureOfIncome, natureOfIncomeValue) {
    nonOperatingIncomeSpouseSch = {
        natureOfIncome: natureOfIncome,
        natureOfIncomeValue: natureOfIncomeValue
    };
    nonOperatingIncomeSpouseListSch.push(nonOperatingIncomeSpouseSch);
};

function populateOrdinaryAllowableItemizedDeductionSch(adAndPromotionsVal, listAmortizationsSch, badDebts, charitableContributions, commissions, communicationLightWater, utilities, depletion, depreciation, directorFee, fringeBenefits, fuelAndOil, insurance, iterest, janitorialAndMessengerial, losses, mgmtAndConsultancyFee, misc, officeSupplies, otherServices, professionalFees, schedGRental, repairLabor, repairMaterials, entertainment, researchAndDev, royalties, salariesAndAllownces, securityServices, otherContributions, taxesAndLiscenses, tollingFees, trainingsAndSeminars, travelTransportaion, listOtherOrdinaryItemizedDeductionsSch) {
    ordinaryAllowableItemizedDeductionSch = {
        adAndPromotionsVal: adAndPromotionsVal,
        listAmortizationsSch: listAmortizationsSch,
        badDebts: badDebts,
        charitableContributions: charitableContributions,
        commissions: commissions,
        communicationLightWater: communicationLightWater,
        utilities: utilities,
        depletion: depletion,
        depreciation: depreciation,
        directorFee: directorFee,
        fringeBenefits: fringeBenefits,
        fuelAndOil: fuelAndOil,
        insurance: insurance,
        iterest: iterest,
        janitorialAndMessengerial: janitorialAndMessengerial,
        losses: losses,
        mgmtAndConsultancyFee: mgmtAndConsultancyFee,
        misc: misc,
        officeSupplies: officeSupplies,
        otherServices: otherServices,
        professionalFees: professionalFees,
        schedGRental: schedGRental,
        repairLabor: repairLabor,
        repairMaterials: repairMaterials,
        entertainment: entertainment,
        researchAndDev: researchAndDev,
        royalties: royalties,
        salariesAndAllownces: salariesAndAllownces,
        securityServices: securityServices,
        otherContributions: otherContributions,
        taxesAndLiscenses: taxesAndLiscenses,
        tollingFees: tollingFees,
        trainingsAndSeminars: trainingsAndSeminars,
        travelTransportaion: travelTransportaion,
        listOtherOrdinaryItemizedDeductionsSch: listOtherOrdinaryItemizedDeductionsSch
    };
};

function populateAmortizationsSch(otherExpandableDesc, otherExpandableAmount) {
    amortizationsSch = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    listAmortizationsSch.push(amortizationsSch);
};

function populateListOtherOrdinaryItemizedDeductionsSch(otherExpandableDesc, otherExpandableAmount) {
    otherOrdinaryItemizedDeductionsSch =
        {
            otherExpandableDesc: otherExpandableDesc,
            otherExpandableAmount: otherExpandableAmount
        };
    listOtherOrdinaryItemizedDeductionsSch.push(otherOrdinaryItemizedDeductionsSch);
};

function populateOrdinaryAllowableItemizedDeductionSpouseSch(adAndPromotionsVal, listAmortizationsSpouseSch, badDebts, charitableContributions, commissions, communicationLightWater, utilities, depletion, depreciation, directorFee, fringeBenefits, fuelAndOil, insurance, iterest, janitorialAndMessengerial, losses, mgmtAndConsultancyFee, misc, officeSupplies, otherServices, professionalFees, schedGRental, repairLabor, repairMaterials, entertainment, researchAndDev, royalties, salariesAndAllownces, securityServices, otherContributions, taxesAndLiscenses, tollingFees, trainingsAndSeminars, travelTransportaion, listOtherOrdinaryItemizedDeductionsSpouseSch) {
    ordinaryAllowableItemizedDeductionSpouseSch = {
        adAndPromotionsVal: adAndPromotionsVal,
        listAmortizationsSpouseSch: listAmortizationsSpouseSch,
        badDebts: badDebts,
        charitableContributions: charitableContributions,
        commissions: commissions,
        communicationLightWater: communicationLightWater,
        utilities: utilities,
        depletion: depletion,
        depreciation: depreciation,
        directorFee: directorFee,
        fringeBenefits: fringeBenefits,
        fuelAndOil: fuelAndOil,
        insurance: insurance,
        iterest: iterest,
        janitorialAndMessengerial: janitorialAndMessengerial,
        losses: losses,
        mgmtAndConsultancyFee: mgmtAndConsultancyFee,
        misc: misc,
        officeSupplies: officeSupplies,
        otherServices: otherServices,
        professionalFees: professionalFees,
        schedGRental: schedGRental,
        repairLabor: repairLabor,
        repairMaterials: repairMaterials,
        entertainment: entertainment,
        researchAndDev: researchAndDev,
        royalties: royalties,
        salariesAndAllownces: salariesAndAllownces,
        securityServices: securityServices,
        otherContributions: otherContributions,
        taxesAndLiscenses: taxesAndLiscenses,
        tollingFees: tollingFees,
        trainingsAndSeminars: trainingsAndSeminars,
        travelTransportaion: travelTransportaion,
        listOtherOrdinaryItemizedDeductionsSpouseSch: listOtherOrdinaryItemizedDeductionsSpouseSch
    };
};

function populateAmortizationsSpouseSch(otherExpandableDesc, otherExpandableAmount) {
    amortizationsSpouseSch = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    listAmortizationsSpouseSch.push(amortizationsSpouseSch);
};

function populateListOtherOrdinaryItemizedDeductionsSpouseSch(otherExpandableDesc, otherExpandableAmount) {
    otherOrdinaryItemizedDeductionsSpouseSch =
        {
            otherExpandableDesc: otherExpandableDesc,
            otherExpandableAmount: otherExpandableAmount
        };
    listOtherOrdinaryItemizedDeductionsSpouseSch.push(otherOrdinaryItemizedDeductionsSpouseSch);
};

function populateSpecialAllowableItemizedDeductionSch(otherExpandableDesc, otherExpandableAmount, legalBasis) {
    specialAllowableItemizedDeductionSch = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount,
        legalBasis: legalBasis
    };
    listSpecialAllowableItemizedDeductionSch.push(specialAllowableItemizedDeductionSch);
};

function populateSpecialAllowableItemizedDeductionSpouseSch(otherExpandableDesc, otherExpandableAmount, legalBasis) {
    specialAllowableItemizedDeductionSpouseSch = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount,
        legalBasis: legalBasis
    };
    listSpecialAllowableItemizedDeductionSpouseSch.push(specialAllowableItemizedDeductionSpouseSch);
};

function populateTaxCreditsPaymentsSch(priorYearsExcessCredits, taxPaymentsfortheFirstQuarters, creditableTaxWithheldfortheFirstThreeQuarters, creditableTaxWithheldfortheFirst4thQuarters, taxPaidinReturnPreviouslyFiled, foreignTaxCredits, SpecialTaxCredits, otherPaymentsDescription, otherPaymentsCreditsSpecify, totalTaxCreditsPayments, creditableTaxWithheld2316) {
    taxCreditsPaymentsSch = {
        priorYearsExcessCredits: priorYearsExcessCredits,
        taxPaymentsfortheFirstQuarters: taxPaymentsfortheFirstQuarters,
        creditableTaxWithheldfortheFirstThreeQuarters: creditableTaxWithheldfortheFirstThreeQuarters,
        creditableTaxWithheldfortheFirst4thQuarters: creditableTaxWithheldfortheFirst4thQuarters,
        taxPaidinReturnPreviouslyFiled: taxPaidinReturnPreviouslyFiled,
        foreignTaxCredits: foreignTaxCredits,
        SpecialTaxCredits: SpecialTaxCredits,
        otherPaymentsDescription: otherPaymentsDescription,
        otherPaymentsCreditsSpecify: otherPaymentsCreditsSpecify,
        totalTaxCreditsPayments: totalTaxCreditsPayments,
        creditableTaxWithheld2316: creditableTaxWithheld2316
    };
};

function populateTaxCreditsPaymentsSpouseSch(priorYearsExcessCredits, taxPaymentsfortheFirstQuarters, creditableTaxWithheldfortheFirstThreeQuarters, creditableTaxWithheldfortheFirst4thQuarters, taxPaidinReturnPreviouslyFiled, foreignTaxCredits, SpecialTaxCredits, otherPaymentsDescription, otherPaymentsCreditsSpecify, totalTaxCreditsPayments, creditableTaxWithheld2316) {
    taxCreditsPaymentsSpouseSch = {
        priorYearsExcessCredits: priorYearsExcessCredits,
        taxPaymentsfortheFirstQuarters: taxPaymentsfortheFirstQuarters,
        creditableTaxWithheldfortheFirstThreeQuarters: creditableTaxWithheldfortheFirstThreeQuarters,
        creditableTaxWithheldfortheFirst4thQuarters: creditableTaxWithheldfortheFirst4thQuarters,
        taxPaidinReturnPreviouslyFiled: taxPaidinReturnPreviouslyFiled,
        foreignTaxCredits: foreignTaxCredits,
        SpecialTaxCredits: SpecialTaxCredits,
        otherPaymentsDescription: otherPaymentsDescription,
        otherPaymentsCreditsSpecify: otherPaymentsCreditsSpecify,
        totalTaxCreditsPayments: totalTaxCreditsPayments,
        creditableTaxWithheld2316: creditableTaxWithheld2316
    };
};

function populateReconciliationOfNetIncomeSch(netIncomePerBooks, nonDeductibleExpenseListSch, totalNonDeductibleExpenses, listNonTaxableSch, listSpecialDeductionsSch, totalNonTaxableAndSpDeductions, netTaxableIncome) {
    reconciliationOfNetIncomeSch = {
        netIncomePerBooks: netIncomePerBooks,
        nonDeductibleExpenseListSch: nonDeductibleExpenseListSch,
        totalNonDeductibleExpenses: totalNonDeductibleExpenses,
        listNonTaxableSch: listNonTaxableSch,
        listSpecialDeductionsSch: listSpecialDeductionsSch,
        totalNonTaxableAndSpDeductions: totalNonTaxableAndSpDeductions,
        netTaxableIncome: netTaxableIncome
    };
};

function populateNonDeductibleSch(otherExpandableDesc, otherExpandableAmount) {
    nonDeductibleExpenseSch = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    nonDeductibleExpenseListSch.push(nonDeductibleExpenseSch);
};


function populateListOfnonTaxableAndSpDeductionsSch(otherExpandableDesc, otherExpandableAmount) {
    nonTaxableSch = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    listNonTaxableSch.push(nonTaxableSch);
};



function populateListOfSpecialDeductionsSch(otherExpandableDesc, otherExpandableAmount) {

    specialDeductionsSch = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    listSpecialDeductionsSch.push(specialDeductionsSch);
};


function populateReconciliationOfNetIncomeSpouseSch(netIncomePerBooks, nonDeductibleExpenseListSpouseSch, totalNonDeductibleExpenses, listNonTaxableSpouseSch, listSpecialDeductionsSpouseSch, totalNonTaxableAndSpDeductions, netTaxableIncome) {
    reconciliationOfNetIncomeSpouseSch = {
        netIncomePerBooks: netIncomePerBooks,
        nonDeductibleExpenseListSpouseSch: nonDeductibleExpenseListSpouseSch,
        totalNonDeductibleExpenses: totalNonDeductibleExpenses,
        listNonTaxableSpouseSch: listNonTaxableSpouseSch,
        listSpecialDeductionsSpouseSch: listSpecialDeductionsSpouseSch,
        totalNonTaxableAndSpDeductions: totalNonTaxableAndSpDeductions,
        netTaxableIncome: netTaxableIncome
    };
};

function populateNonDeductibleSpouseSch(otherExpandableDesc, otherExpandableAmount) {
    nonDeductibleExpenseSpouseSch = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    nonDeductibleExpenseListSpouseSch.push(nonDeductibleExpenseSpouseSch);
};


function populateListOfnonTaxableAndSpDeductionsSpouseSch(otherExpandableDesc, otherExpandableAmount) {
    nonTaxableSpouseSch = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    listNonTaxableSpouseSch.push(nonTaxableSpouseSch);
};



function populateListOfSpecialDeductionsSpouseSch(otherExpandableDesc, otherExpandableAmount) {

    specialDeductionsSpouseSch = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount
    };
    listSpecialDeductionsSpouseSch.push(specialDeductionsSpouseSch);
};




function execute() {
    var _soapRequest = generateSoapRequest();
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


    resetData();
};

function processSuccess(data, status, req) {
    alert(data.text);
    var shell = new ActiveXObject("WScript.Shell");
    if (status == "success" && data.text.indexOf("now be redirected") > -1) {
        setTimeout(function () { shell.run(wsSite) }, 1000);
    }
};

function processError(data, status, req) {

    alert(typeof data.text == "undefined" ? "Failed to connect to efps online." : data.text);

    $("#response").text(data.responseText + ' ' + status);
}

function generateAttachmentXML() {

    var attachmentsOpening = '<!--Zero or more repetitions:-->  \ '
        + '<attachments>  \ ';

    var taxRegimeWs =
        '<taxRegime>  \ '
           + '<taxRegime>' + taxRegime.taxRegimes + '</taxRegime>  \ '
        + '</taxRegime>  \ ';

    var taxPayersActivityProfileSchWs = '<taxPayersActivityProfileSch>                   \ '
        + '<investmentPromotionAgency>' + taxPayersActivityProfileSch.investmentPromotionAgency + '</investmentPromotionAgency>                   \ '
        + '<legalBasis>' + taxPayersActivityProfileSch.legalBasis + '</legalBasis>                   \ '
        + '<registrationNo>' + taxPayersActivityProfileSch.registrationNo + '</registrationNo>                   \ '
        + '<specialTaxRate>' + taxPayersActivityProfileSch.specialTaxRate + '</specialTaxRate>                   \ '
        + '<specialTaxRated>' + taxPayersActivityProfileSch.specialTaxRated + '</specialTaxRated>                   \ '
        + '<effectivityDateofTaxReliefExemptionFrom>' + taxPayersActivityProfileSch.effectivityDateofTaxReliefExemptionFrom + '</effectivityDateofTaxReliefExemptionFrom>                   \ '
        + '<effectivityDateofTaxReliefExemptionTo>' + taxPayersActivityProfileSch.effectivityDateofTaxReliefExemptionTo + '</effectivityDateofTaxReliefExemptionTo> \ '
     + '</taxPayersActivityProfileSch>\ ';

    var taxPayersActivityProfileSpsSchWs = '<taxPayersActivityProfileSpsSch>  \ '
        + '<investmentPromotionAgency>' + taxPayersActivityProfileSchSps.investmentPromotionAgency + '</investmentPromotionAgency>                   \ '
        + '<legalBasis>' + taxPayersActivityProfileSchSps.legalBasis + '</legalBasis>                   \ '
        + '<registrationNo>' + taxPayersActivityProfileSchSps.registrationNo + '</registrationNo>                   \ '
        + '<specialTaxRate>' + taxPayersActivityProfileSchSps.specialTaxRate + '</specialTaxRate>                   \ '
        + '<specialTaxRated>' + taxPayersActivityProfileSchSps.specialTaxRated + '</specialTaxRated>                   \ '
        + '<effectivityDateofTaxReliefExemptionFrom>' + taxPayersActivityProfileSchSps.effectivityDateofTaxReliefExemptionFrom + '</effectivityDateofTaxReliefExemptionFrom>                   \ '
        + '<effectivityDateofTaxReliefExemptionTo>' + taxPayersActivityProfileSchSps.effectivityDateofTaxReliefExemptionTo + '</effectivityDateofTaxReliefExemptionTo> \ '
        + '</taxPayersActivityProfileSpsSch> \ ';

    var computationOfIncomeTaxSchWs = '<computationOfIncomeTaxSch>\ '
        + '<grossCompensationIncome>' + computationOfIncomeTaxSch.grossCompensationIncome + '</grossCompensationIncome>\ '
        + '<nonTaxableExemptCompensation>' + computationOfIncomeTaxSch.nonTaxableExemptCompensation + '</nonTaxableExemptCompensation>\ '
        + '<grossTaxableCompensationIncome>' + computationOfIncomeTaxSch.grossTaxableCompensationIncome + '</grossTaxableCompensationIncome>\ '
        + '<premiumOnHealthHospitalizationInsurance>' + computationOfIncomeTaxSch.premiumOnHealthHospitalizationInsurance + '</premiumOnHealthHospitalizationInsurance>\ '
        + '<personalExemptionforEstateAndTrust>' + computationOfIncomeTaxSch.personalExemptionforEstateAndTrust + '</personalExemptionforEstateAndTrust>\ '
        + '<additionalExemption>' + computationOfIncomeTaxSch.additionalExemption + '</additionalExemption>\ '
        + '<totalDeductions>' + computationOfIncomeTaxSch.totalDeductions + '</totalDeductions>\ '
        + '<netTaxableCompensationIncome>' + computationOfIncomeTaxSch.netTaxableCompensationIncome + '</netTaxableCompensationIncome>\ '
        + '<excessOfDeductions>' + computationOfIncomeTaxSch.excessOfDeductions + '</excessOfDeductions>\ '
        + '<netSalesRevenuesReceiptFees>' + computationOfIncomeTaxSch.netSalesRevenuesReceiptFees + '</netSalesRevenuesReceiptFees>\ '
        + '<otherIncomeOperationsNotToSubjectToFinalTax>' + computationOfIncomeTaxSch.otherIncomeOperationsNotToSubjectToFinalTax + '</otherIncomeOperationsNotToSubjectToFinalTax>\ '
        + '<totalSalesRevenuesReceiptFees>' + computationOfIncomeTaxSch.totalSalesRevenuesReceiptFees + '</totalSalesRevenuesReceiptFees>\ '
        + '<totalCostOfSalesServices>' + computationOfIncomeTaxSch.totalCostOfSalesServices + '</totalCostOfSalesServices>\ '
        + '<grossIncomeFromBusinessProfession>' + computationOfIncomeTaxSch.grossIncomeFromBusinessProfession + '</grossIncomeFromBusinessProfession>\ '
        + '<nonOperatingIncome>' + computationOfIncomeTaxSch.nonOperatingIncome + '</nonOperatingIncome>\ '
        + '<totalGrossIncome>' + computationOfIncomeTaxSch.totalGrossIncome + '</totalGrossIncome>\ '
        + '<ordinaryAllowableItemizedDeductions>' + computationOfIncomeTaxSch.ordinaryAllowableItemizedDeductions + '</ordinaryAllowableItemizedDeductions>\ '
        + '<totalSpecialAllowableItemizedDeductions>' + computationOfIncomeTaxSch.totalSpecialAllowableItemizedDeductions + '</totalSpecialAllowableItemizedDeductions>\ '
        + '<totalNOLCO>' + computationOfIncomeTaxSch.totalNOLCO + '</totalNOLCO>\ '
        + '<totalAllowableItemizedDeductions>' + computationOfIncomeTaxSch.totalAllowableItemizedDeductions + '</totalAllowableItemizedDeductions>\ '
        + '<optionalStandardDeductions>' + computationOfIncomeTaxSch.optionalStandardDeductions + '</optionalStandardDeductions>\ '
        + '<taxableIncomeFromBusinessProfession>' + computationOfIncomeTaxSch.taxableIncomeFromBusinessProfession + '</taxableIncomeFromBusinessProfession>\ '
        + '<netTaxableIncomeCompensationIncome>' + computationOfIncomeTaxSch.netTaxableIncomeCompensationIncome + '</netTaxableIncomeCompensationIncome>\ '
        + '<netTaxableIncome>' + computationOfIncomeTaxSch.netTaxableIncome + '</netTaxableIncome>\ '
        + '<excessDeductionsIfNoCompensationIncome>' + computationOfIncomeTaxSch.excessDeductionsIfNoCompensationIncome + '</excessDeductionsIfNoCompensationIncome>\ '
        + '<totalTaxableIncome>' + computationOfIncomeTaxSch.totalTaxableIncome + '</totalTaxableIncome>\ '
        + '<taxDueRegular>' + computationOfIncomeTaxSch.taxDueRegular + '</taxDueRegular>\ '
        + '<specialRateIncomeTaxDue>' + computationOfIncomeTaxSch.specialRateIncomeTaxDue + '</specialRateIncomeTaxDue>\ '
        + '<shareOfOtherGovernmentAgency>' + computationOfIncomeTaxSch.shareOfOtherGovernmentAgency + '</shareOfOtherGovernmentAgency>\ '
        + '<netSpecialIncomeTaxDue>' + computationOfIncomeTaxSch.netSpecialIncomeTaxDue + '</netSpecialIncomeTaxDue>\ '
        + '<totalIncomeTaxDue>' + computationOfIncomeTaxSch.totalIncomeTaxDue + '</totalIncomeTaxDue>\ '
        + '<regular>' + computationOfIncomeTaxSch.regular + '</regular>\ '
        + '<special>' + computationOfIncomeTaxSch.special + '</special>\ '
        + '<exempt>' + computationOfIncomeTaxSch.exempt + '</exempt>\ '
        + '<totalTaxCreditPayments>' + computationOfIncomeTaxSch.totalTaxCreditPayments + '</totalTaxCreditPayments>\ '
        + '<netTaxPayable>' + computationOfIncomeTaxSch.netTaxPayable + '</netTaxPayable>\ '
        + '<netTaxPayableForTaxFilerAndSpouse>' + computationOfIncomeTaxSch.netTaxPayableForTaxFilerAndSpouse + '</netTaxPayableForTaxFilerAndSpouse>\ '
        + '<portionOfTaxPayableAllowed>' + computationOfIncomeTaxSch.portionOfTaxPayableAllowed + '</portionOfTaxPayableAllowed>\ '
        + '<netAmountOfTaxPayable>' + computationOfIncomeTaxSch.netAmountOfTaxPayable + '</netAmountOfTaxPayable>\ '
        + '<surcharge>' + computationOfIncomeTaxSch.surcharge + '</surcharge>\ '
        + '<interest>' + computationOfIncomeTaxSch.interest + '</interest>\ '
        + '<compromise>' + computationOfIncomeTaxSch.compromise + '</compromise>\ '
        + '<totalPenalties>' + computationOfIncomeTaxSch.totalPenalties + '</totalPenalties>\ '
        + '<totalAmountPayableUponFiling>' + computationOfIncomeTaxSch.totalAmountPayableUponFiling + '</totalAmountPayableUponFiling>\ '
        + '<regularIncomeTaxOtherwiseDue>' + computationOfIncomeTaxSch.regularIncomeTaxOtherwiseDue + '</regularIncomeTaxOtherwiseDue>\ '
        + '<netSalesRevRcptFees>' + computationOfIncomeTaxSch.netSalesRevRcptFees + '</netSalesRevRcptFees>\ '
        + '<otherIncomeNoFinalTax>' + computationOfIncomeTaxSch.otherIncomeNoFinalTax + '</otherIncomeNoFinalTax>\ '
        + '<totalSalesRevRcptFees>' + computationOfIncomeTaxSch.totalSalesRevRcptFees + '</totalSalesRevRcptFees>\ '
        + '<costOfSalesServices>' + computationOfIncomeTaxSch.costOfSalesServices + '</costOfSalesServices>\ '
        + '<grossIncomeFrmBusiness>' + computationOfIncomeTaxSch.grossIncomeFrmBusiness + '</grossIncomeFrmBusiness>\ '
        + '<nonOperatingIncomeSch>' + computationOfIncomeTaxSch.nonOperatingIncomeSch + '</nonOperatingIncomeSch>\ '
        + '<ordinaryAllowableItemizedDed>' + computationOfIncomeTaxSch.ordinaryAllowableItemizedDed + '</ordinaryAllowableItemizedDed>\ '
        + '<specialAllowableItemizedDed>' + computationOfIncomeTaxSch.specialAllowableItemizedDed + '</specialAllowableItemizedDed>\ '
        + '<totalAllowableItemizedDed>' + computationOfIncomeTaxSch.totalAllowableItemizedDed + '</totalAllowableItemizedDed>\ '
        + '<taxableIncomeFrmBsnsPrfsn>' + computationOfIncomeTaxSch.taxableIncomeFrmBsnsPrfsn + '</taxableIncomeFrmBsnsPrfsn>\ '
        + '</computationOfIncomeTaxSch>\ ';


    var computationOfIncomeTaxSpsSchWs = '<computationOfIncomeTaxSpsSch>\ '
        + '<grossCompensationIncome>' + computationOfIncomeTaxSchSps.grossCompensationIncome + '</grossCompensationIncome>\ '
        + '<nonTaxableExemptCompensation>' + computationOfIncomeTaxSchSps.nonTaxableExemptCompensation + '</nonTaxableExemptCompensation>\ '
        + '<grossTaxableCompensationIncome>' + computationOfIncomeTaxSchSps.grossTaxableCompensationIncome + '</grossTaxableCompensationIncome>\ '
        + '<premiumOnHealthHospitalizationInsurance>' + computationOfIncomeTaxSchSps.premiumOnHealthHospitalizationInsurance + '</premiumOnHealthHospitalizationInsurance>\ '
        + '<personalExemptionforEstateAndTrust>' + computationOfIncomeTaxSchSps.personalExemptionforEstateAndTrust + '</personalExemptionforEstateAndTrust>\ '
        + '<additionalExemption>' + computationOfIncomeTaxSchSps.additionalExemption + '</additionalExemption>\ '
        + '<totalDeductions>' + computationOfIncomeTaxSchSps.totalDeductions + '</totalDeductions>\ '
        + '<netTaxableCompensationIncome>' + computationOfIncomeTaxSchSps.netTaxableCompensationIncome + '</netTaxableCompensationIncome>\ '
        + '<excessOfDeductions>' + computationOfIncomeTaxSchSps.excessOfDeductions + '</excessOfDeductions>\ '
        + '<netSalesRevenuesReceiptFees>' + computationOfIncomeTaxSchSps.netSalesRevenuesReceiptFees + '</netSalesRevenuesReceiptFees>\ '
        + '<otherIncomeOperationsNotToSubjectToFinalTax>' + computationOfIncomeTaxSchSps.otherIncomeOperationsNotToSubjectToFinalTax + '</otherIncomeOperationsNotToSubjectToFinalTax>\ '
        + '<totalSalesRevenuesReceiptFees>' + computationOfIncomeTaxSchSps.totalSalesRevenuesReceiptFees + '</totalSalesRevenuesReceiptFees>\ '
        + '<totalCostOfSalesServices>' + computationOfIncomeTaxSchSps.totalCostOfSalesServices + '</totalCostOfSalesServices>\ '
        + '<grossIncomeFromBusinessProfession>' + computationOfIncomeTaxSchSps.grossIncomeFromBusinessProfession + '</grossIncomeFromBusinessProfession>\ '
        + '<nonOperatingIncome>' + computationOfIncomeTaxSchSps.nonOperatingIncome + '</nonOperatingIncome>\ '
        + '<totalGrossIncome>' + computationOfIncomeTaxSchSps.totalGrossIncome + '</totalGrossIncome>\ '
        + '<ordinaryAllowableItemizedDeductions>' + computationOfIncomeTaxSchSps.ordinaryAllowableItemizedDeductions + '</ordinaryAllowableItemizedDeductions>\ '
        + '<totalSpecialAllowableItemizedDeductions>' + computationOfIncomeTaxSchSps.totalSpecialAllowableItemizedDeductions + '</totalSpecialAllowableItemizedDeductions>\ '
        + '<totalNOLCO>' + computationOfIncomeTaxSchSps.totalNOLCO + '</totalNOLCO>\ '
        + '<totalAllowableItemizedDeductions>' + computationOfIncomeTaxSchSps.totalAllowableItemizedDeductions + '</totalAllowableItemizedDeductions>\ '
        + '<optionalStandardDeductions>' + computationOfIncomeTaxSchSps.optionalStandardDeductions + '</optionalStandardDeductions>\ '
        + '<taxableIncomeFromBusinessProfession>' + computationOfIncomeTaxSchSps.taxableIncomeFromBusinessProfession + '</taxableIncomeFromBusinessProfession>\ '
        + '<netTaxableIncomeCompensationIncome>' + computationOfIncomeTaxSchSps.netTaxableIncomeCompensationIncome + '</netTaxableIncomeCompensationIncome>\ '
        + '<netTaxableIncome>' + computationOfIncomeTaxSchSps.netTaxableIncome + '</netTaxableIncome>\ '
        + '<excessDeductionsIfNoCompensationIncome>' + computationOfIncomeTaxSchSps.excessDeductionsIfNoCompensationIncome + '</excessDeductionsIfNoCompensationIncome>\ '
        + '<totalTaxableIncome>' + computationOfIncomeTaxSchSps.totalTaxableIncome + '</totalTaxableIncome>\ '
        + '<taxDueRegular>' + computationOfIncomeTaxSchSps.taxDueRegular + '</taxDueRegular>\ '
        + '<specialRateIncomeTaxDue>' + computationOfIncomeTaxSchSps.specialRateIncomeTaxDue + '</specialRateIncomeTaxDue>\ '
        + '<shareOfOtherGovernmentAgency>' + computationOfIncomeTaxSchSps.shareOfOtherGovernmentAgency + '</shareOfOtherGovernmentAgency>\ '
        + '<netSpecialIncomeTaxDue>' + computationOfIncomeTaxSchSps.netSpecialIncomeTaxDue + '</netSpecialIncomeTaxDue>\ '
        + '<totalIncomeTaxDue>' + computationOfIncomeTaxSchSps.totalIncomeTaxDue + '</totalIncomeTaxDue>\ '
        + '<regular>' + computationOfIncomeTaxSchSps.regular + '</regular>\ '
        + '<special>' + computationOfIncomeTaxSchSps.special + '</special>\ '
        + '<exempt>' + computationOfIncomeTaxSchSps.exempt + '</exempt>\ '
        + '<totalTaxCreditPayments>' + computationOfIncomeTaxSchSps.totalTaxCreditPayments + '</totalTaxCreditPayments>\ '
        + '<netTaxPayable>' + computationOfIncomeTaxSchSps.netTaxPayable + '</netTaxPayable>\ '
        + '<netTaxPayableForTaxFilerAndSpouse>' + computationOfIncomeTaxSchSps.netTaxPayableForTaxFilerAndSpouse + '</netTaxPayableForTaxFilerAndSpouse>\ '
        + '<portionOfTaxPayableAllowed>' + computationOfIncomeTaxSchSps.portionOfTaxPayableAllowed + '</portionOfTaxPayableAllowed>\ '
        + '<netAmountOfTaxPayable>' + computationOfIncomeTaxSchSps.netAmountOfTaxPayable + '</netAmountOfTaxPayable>\ '
        + '<surcharge>' + computationOfIncomeTaxSchSps.surcharge + '</surcharge>\ '
        + '<interest>' + computationOfIncomeTaxSchSps.interest + '</interest>\ '
        + '<compromise>' + computationOfIncomeTaxSchSps.compromise + '</compromise>\ '
        + '<totalPenalties>' + computationOfIncomeTaxSchSps.totalPenalties + '</totalPenalties>\ '
        + '<totalAmountPayableUponFiling>' + computationOfIncomeTaxSchSps.totalAmountPayableUponFiling + '</totalAmountPayableUponFiling>\ '
        + '<regularIncomeTaxOtherwiseDue>' + computationOfIncomeTaxSchSps.regularIncomeTaxOtherwiseDue + '</regularIncomeTaxOtherwiseDue>\ '
        + '<netSalesRevRcptFees>' + computationOfIncomeTaxSchSps.netSalesRevRcptFees + '</netSalesRevRcptFees>\ '
        + '<otherIncomeNoFinalTax>' + computationOfIncomeTaxSchSps.otherIncomeNoFinalTax + '</otherIncomeNoFinalTax>\ '
        + '<totalSalesRevRcptFees>' + computationOfIncomeTaxSchSps.totalSalesRevRcptFees + '</totalSalesRevRcptFees>\ '
        + '<costOfSalesServices>' + computationOfIncomeTaxSchSps.costOfSalesServices + '</costOfSalesServices>\ '
        + '<grossIncomeFrmBusiness>' + computationOfIncomeTaxSchSps.grossIncomeFrmBusiness + '</grossIncomeFrmBusiness>\ '
        + '<nonOperatingIncomeSch>' + computationOfIncomeTaxSchSps.nonOperatingIncomeSch + '</nonOperatingIncomeSch>\ '
        + '<ordinaryAllowableItemizedDed>' + computationOfIncomeTaxSchSps.ordinaryAllowableItemizedDed + '</ordinaryAllowableItemizedDed>\ '
        + '<specialAllowableItemizedDed>' + computationOfIncomeTaxSchSps.specialAllowableItemizedDed + '</specialAllowableItemizedDed>\ '
        + '<totalAllowableItemizedDed>' + computationOfIncomeTaxSchSps.totalAllowableItemizedDed + '</totalAllowableItemizedDed>\ '
        + '<taxableIncomeFrmBsnsPrfsn>' + computationOfIncomeTaxSchSps.taxableIncomeFrmBsnsPrfsn + '</taxableIncomeFrmBsnsPrfsn>\ '
        + '</computationOfIncomeTaxSpsSch>\ ';


    var taxReliefAvailmentSchWs = '<taxReliefAvailmentSch>\ '
        + '<taxReliefAvailmentBeforeSpecialTaxCredits>' + taxReliefAvailmentSchedule.taxReliefAvailmentBeforeSpecialTaxCredits + '</taxReliefAvailmentBeforeSpecialTaxCredits>\ '
        + '<specialTaxCredits>' + taxReliefAvailmentSchedule.specialTaxCredits + '</specialTaxCredits>\ '
        + '<regularTaxReliefAvailment>' + taxReliefAvailmentSchedule.regularTaxReliefAvailment + '</regularTaxReliefAvailment>\ '
        + '<specialTaxReliefAvailment>' + taxReliefAvailmentSchedule.specialTaxReliefAvailment + '</specialTaxReliefAvailment>\ '
        + '<exemptTaxReliefAvailment>' + taxReliefAvailmentSchedule.exemptTaxReliefAvailment + '</exemptTaxReliefAvailment>\ '
        + '<totalTaxReliefAvailment>' + taxReliefAvailmentSchedule.totalTaxReliefAvailment + '</totalTaxReliefAvailment>\ '
        + '<totalTaxReliefAvailmentofTaxFilerAndSpouse>' + taxReliefAvailmentSchedule.totalTaxReliefAvailmentofTaxFilerAndSpouse + '</totalTaxReliefAvailmentofTaxFilerAndSpouse>\ '
        + '<taxableIncomeFrmBsns>' + taxReliefAvailmentSchedule.taxableIncomeFrmBsns + '</taxableIncomeFrmBsns>\ '
        + '<specialAllowableItemizedDed>' + taxReliefAvailmentSchedule.specialAllowableItemizedDed + '</specialAllowableItemizedDed>\ '
        + '<subTotal>' + taxReliefAvailmentSchedule.subTotal + '</subTotal>\ '
        + '<regIncomeTaxOtherwiseDue>' + taxReliefAvailmentSchedule.regIncomeTaxOtherwiseDue + '</regIncomeTaxOtherwiseDue>\ '
        + '<incomeTaxDueSpecialRate>' + taxReliefAvailmentSchedule.incomeTaxDueSpecialRate + '</incomeTaxDueSpecialRate>\ '
        + '<taxReliefAvailment>' + taxReliefAvailmentSchedule.taxReliefAvailment + '</taxReliefAvailment>\ '
        + '<totalTaxReliefAvailmentSpecial>' + taxReliefAvailmentSchedule.totalTaxReliefAvailmentSpecial + '</totalTaxReliefAvailmentSpecial>\ '
        + '<taxableIncomeFrmBsnsRegular>' + taxReliefAvailmentSchedule.taxableIncomeFrmBsnsRegular + '</taxableIncomeFrmBsnsRegular>\ '
        + '<applicableTaxRate>' + taxReliefAvailmentSchedule.applicableTaxRate + '</applicableTaxRate>\ '
        + '<taxReliefAvailmentExempt>' + taxReliefAvailmentSchedule.taxReliefAvailmentExempt + '</taxReliefAvailmentExempt>\ '
        + '</taxReliefAvailmentSch>\ ';

    var taxReliefAvailmentSpsSchWs = '<taxReliefAvailmentSpsSch>\ '
        + '<taxReliefAvailmentBeforeSpecialTaxCredits>' + taxReliefAvailmentScheduleSpouse.taxReliefAvailmentBeforeSpecialTaxCredits + '</taxReliefAvailmentBeforeSpecialTaxCredits>\ '
        + '<specialTaxCredits>' + taxReliefAvailmentScheduleSpouse.specialTaxCredits + '</specialTaxCredits>\ '
        + '<regularTaxReliefAvailment>' + taxReliefAvailmentScheduleSpouse.regularTaxReliefAvailment + '</regularTaxReliefAvailment>\ '
        + '<specialTaxReliefAvailment>' + taxReliefAvailmentScheduleSpouse.specialTaxReliefAvailment + '</specialTaxReliefAvailment>\ '
        + '<exemptTaxReliefAvailment>' + taxReliefAvailmentScheduleSpouse.exemptTaxReliefAvailment + '</exemptTaxReliefAvailment>\ '
        + '<totalTaxReliefAvailment>' + taxReliefAvailmentScheduleSpouse.totalTaxReliefAvailment + '</totalTaxReliefAvailment>\ '
        + '<totalTaxReliefAvailmentofTaxFilerAndSpouse>' + taxReliefAvailmentScheduleSpouse.totalTaxReliefAvailmentofTaxFilerAndSpouse + '</totalTaxReliefAvailmentofTaxFilerAndSpouse>\ '
        + '<taxableIncomeFrmBsns>' + taxReliefAvailmentScheduleSpouse.taxableIncomeFrmBsns + '</taxableIncomeFrmBsns>\ '
        + '<specialAllowableItemizedDed>' + taxReliefAvailmentScheduleSpouse.specialAllowableItemizedDed + '</specialAllowableItemizedDed>\ '
        + '<subTotal>' + taxReliefAvailmentScheduleSpouse.subTotal + '</subTotal>\ '
        + '<regIncomeTaxOtherwiseDue>' + taxReliefAvailmentScheduleSpouse.regIncomeTaxOtherwiseDue + '</regIncomeTaxOtherwiseDue>\ '
        + '<incomeTaxDueSpecialRate>' + taxReliefAvailmentScheduleSpouse.incomeTaxDueSpecialRate + '</incomeTaxDueSpecialRate>\ '
        + '<taxReliefAvailment>' + taxReliefAvailmentScheduleSpouse.taxReliefAvailment + '</taxReliefAvailment>\ '
        + '<totalTaxReliefAvailmentSpecial>' + taxReliefAvailmentScheduleSpouse.totalTaxReliefAvailmentSpecial + '</totalTaxReliefAvailmentSpecial>\ '
        + '<taxableIncomeFrmBsnsRegular>' + taxReliefAvailmentScheduleSpouse.taxableIncomeFrmBsnsRegular + '</taxableIncomeFrmBsnsRegular>\ '
        + '<applicableTaxRate>' + taxReliefAvailmentScheduleSpouse.applicableTaxRate + '</applicableTaxRate>\ '
        + '<taxReliefAvailmentExempt>' + taxReliefAvailmentScheduleSpouse.taxReliefAvailmentExempt + '</taxReliefAvailmentExempt>\ '
        + '</taxReliefAvailmentSpsSch>\ ';

    var salesRevenuesReceiptFeesSchWs = '<salesRevenuesReceiptFeesSch>\ '
        + '<totalSalesRevenuesReceiptsFees>' + salesRevenuesReceiptFeesSch.totalSalesRevenuesReceiptsFees + '</totalSalesRevenuesReceiptsFees>\ '
        + '<grossSalesRevenuesReceiptsFees>' + salesRevenuesReceiptFeesSch.grossSalesRevenuesReceiptsFees + '</grossSalesRevenuesReceiptsFees>\ '
        + '<totalRevenue>' + salesRevenuesReceiptFeesSch.totalRevenue + '</totalRevenue>\ '
        + '<salesReturnsAllowancesAndDiscounts>' + salesRevenuesReceiptFeesSch.salesReturnsAllowancesAndDiscounts + '</salesReturnsAllowancesAndDiscounts>\ '
        + '<NetSalesRevenueReceiptFees>' + salesRevenuesReceiptFeesSch.NetSalesRevenueReceiptFees + '</NetSalesRevenueReceiptFees>\ '
        + '</salesRevenuesReceiptFeesSch>\ ';

    var salesRevenuesReceiptFeesSpsSchWs = '<salesRevenuesReceiptFeesSpsSch>\ '
        + '<totalSalesRevenuesReceiptsFees>' + salesRevenuesReceiptFeesSchSpouse.totalSalesRevenuesReceiptsFees + '</totalSalesRevenuesReceiptsFees>\ '
        + '<grossSalesRevenuesReceiptsFees>' + salesRevenuesReceiptFeesSchSpouse.grossSalesRevenuesReceiptsFees + '</grossSalesRevenuesReceiptsFees>\ '
        + '<totalRevenue>' + salesRevenuesReceiptFeesSchSpouse.totalRevenue + '</totalRevenue>\ '
        + '<salesReturnsAllowancesAndDiscounts>' + salesRevenuesReceiptFeesSchSpouse.salesReturnsAllowancesAndDiscounts + '</salesReturnsAllowancesAndDiscounts>\ '
        + '<NetSalesRevenueReceiptFees>' + salesRevenuesReceiptFeesSchSpouse.NetSalesRevenueReceiptFees + '</NetSalesRevenueReceiptFees>\ '
        + '</salesRevenuesReceiptFeesSpsSch>\ ';

    var othertaxableIncomeWsSch =
         '<otherTaxableIncomeNotSubjectedSch>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxDescFirst>First Desc</otherTaxableIncomeNotSubjectToFinalTaxDescFirst>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxDescSecond>Sceond Desc</otherTaxableIncomeNotSubjectToFinalTaxDescSecond>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxDescThird>Third Desc</otherTaxableIncomeNotSubjectToFinalTaxDescThird>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxValueFirst>100</otherTaxableIncomeNotSubjectToFinalTaxValueFirst>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxValueSecond>100</otherTaxableIncomeNotSubjectToFinalTaxValueSecond>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxValueThird>100</otherTaxableIncomeNotSubjectToFinalTaxValueThird>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxValueTotal>100</otherTaxableIncomeNotSubjectToFinalTaxValueTotal>  \ '
       + '<!--Zero or more repetitions:--> \ ';

    var otherTaxableIncomeNotSubjectToFinalTaxValueListHolderSch = [];
    for (key in otherTaxableIncomeNotSubjectToFinalTaxListSch) {
        var obj = '<otherTaxableIncomeNotSubjectToFinalTaxValue> \  '
       + '<otherExpandableDesc>' + otherTaxableIncomeNotSubjectToFinalTaxListSch[key].description + '</otherExpandableDesc>  \ '
       + '<otherExpandableAmount>' + otherTaxableIncomeNotSubjectToFinalTaxListSch[key].amount + '</otherExpandableAmount>  \ '
       + '</otherTaxableIncomeNotSubjectToFinalTaxValue>  \ ';
        otherTaxableIncomeNotSubjectToFinalTaxValueListHolderSch.push(obj);
    }
    var otherTaxableIncomeNotSubjectToFinalTaxSchObjectHolder = "";
    for (key in otherTaxableIncomeNotSubjectToFinalTaxValueListHolderSch) {
        otherTaxableIncomeNotSubjectToFinalTaxSchObjectHolder += otherTaxableIncomeNotSubjectToFinalTaxValueListHolderSch[key];
    }

    var othertaxableIncomeWsClosingSch = '</otherTaxableIncomeNotSubjectedSch>  \ ';

    var othertaxableIncomeSpouseWsSps =
         '<otherTaxableIncomeNotSubjectedSchSps>\ '
            + '<otherTaxableIncomeNotSubjectToFinalTaxDescFirst> </otherTaxableIncomeNotSubjectToFinalTaxDescFirst> \    '
            + '<otherTaxableIncomeNotSubjectToFinalTaxDescSecond> </otherTaxableIncomeNotSubjectToFinalTaxDescSecond> \    '
            + '<otherTaxableIncomeNotSubjectToFinalTaxDescThird> </otherTaxableIncomeNotSubjectToFinalTaxDescThird>  \ '
            + '<otherTaxableIncomeNotSubjectToFinalTaxValueFirst> </otherTaxableIncomeNotSubjectToFinalTaxValueFirst>  \ '
            + '<otherTaxableIncomeNotSubjectToFinalTaxValueSecond> </otherTaxableIncomeNotSubjectToFinalTaxValueSecond>  \ '
            + '<otherTaxableIncomeNotSubjectToFinalTaxValueThird> </otherTaxableIncomeNotSubjectToFinalTaxValueThird>  \ '
            + '<otherTaxableIncomeNotSubjectToFinalTaxValueTotal> </otherTaxableIncomeNotSubjectToFinalTaxValueTotal>  \ '
            + '<!--Zero or more repetitions:-->\ ';

    var otherTaxableIncomeNotSubjectToFinalTaxValueListSpouseHolderSchSps = [];
    for (key in otherTaxableIncomeNotSubjectToFinalTaxListSchSps) {
        var obj = '<otherTaxableIncomeNotSubjectToFinalTaxValue> \  '
       + '<otherExpandableDesc>' + otherTaxableIncomeNotSubjectToFinalTaxListSchSps[key].description + '</otherExpandableDesc>  \ '
       + '<otherExpandableAmount>' + otherTaxableIncomeNotSubjectToFinalTaxListSchSps[key].amount + '</otherExpandableAmount>  \ '
       + '</otherTaxableIncomeNotSubjectToFinalTaxValue> \ ';
        otherTaxableIncomeNotSubjectToFinalTaxValueListSpouseHolderSchSps.push(obj);
    }
    var otherTaxableIncomeNotSubjectToFinalTaxObjectSpouseHolderSch = "";
    for (key in otherTaxableIncomeNotSubjectToFinalTaxValueListSpouseHolderSchSps) {
        otherTaxableIncomeNotSubjectToFinalTaxObjectSpouseHolderSch += otherTaxableIncomeNotSubjectToFinalTaxValueListSpouseHolderSchSps[key];
    }

    var othertaxableIncomeSpouseWsClosingSch = '</otherTaxableIncomeNotSubjectedSchSps> \ ';

    var costOfSalesServicesSchWs = '<costOfSalesServicesSch>\ '
            + '<goodsInvBeg>' + costOfSalesServicesSch.goodsInvBeg + '</goodsInvBeg>\ '
            + '<purGoods>' + costOfSalesServicesSch.purGoods + '</purGoods>\ '
            + '<goodsAvail>' + costOfSalesServicesSch.goodsAvail + '</goodsAvail>\ '
            + '<goodsInvEnd>' + costOfSalesServicesSch.goodsInvEnd + '</goodsInvEnd>\ '
            + '<costSales>' + costOfSalesServicesSch.costSales + '</costSales>\ '
            + '<directMatsBeg>' + costOfSalesServicesSch.directMatsBeg + '</directMatsBeg>\ '
            + '<purDirectMats>' + costOfSalesServicesSch.purDirectMats + '</purDirectMats>\ '
            + '<matsAvail>' + costOfSalesServicesSch.matsAvail + '</matsAvail>\ '
            + '<directMatsEnd>' + costOfSalesServicesSch.directMatsEnd + '</directMatsEnd>\ '
            + '<rawMats>' + costOfSalesServicesSch.rawMats + '</rawMats>\ '
            + '<directLabor>' + costOfSalesServicesSch.directLabor + '</directLabor>\ '
            + '<manufacturingOverhead>' + costOfSalesServicesSch.manufacturingOverhead + '</manufacturingOverhead>\ '
            + '<totalManufacturingCost>' + costOfSalesServicesSch.totalManufacturingCost + '</totalManufacturingCost>\ '
            + '<workInProgressBeg>' + costOfSalesServicesSch.workInProgressBeg + '</workInProgressBeg>\ '
            + '<winProgressEnd>' + costOfSalesServicesSch.winProgressEnd + '</winProgressEnd>\ '
            + '<costGoodsManufactured>' + costOfSalesServicesSch.costGoodsManufactured + '</costGoodsManufactured>\ '
            + '<finishedGoodsBeg>' + costOfSalesServicesSch.finishedGoodsBeg + '</finishedGoodsBeg>\ '
            + '<finishedGoodsEnd>' + costOfSalesServicesSch.finishedGoodsEnd + '</finishedGoodsEnd>\ '
            + '<totalCostGoodsManufacturedAndSold>' + costOfSalesServicesSch.totalCostGoodsManufacturedAndSold + '</totalCostGoodsManufacturedAndSold>\ '
            + '<salaries>' + costOfSalesServicesSch.salaries + '</salaries>\ '
            + '<materials>' + costOfSalesServicesSch.materials + '</materials>\ '
            + '<sched2CDepreciation>' + costOfSalesServicesSch.sched2CDepreciation + '</sched2CDepreciation>\ '
            + '<sched2CRental>' + costOfSalesServicesSch.sched2CRental + '</sched2CRental>\ '
            + '<outsideServ>' + costOfSalesServicesSch.outsideServ + '</outsideServ>\ '
            + '<others>' + costOfSalesServicesSch.others + '</others>\ '
            + '<costService>' + costOfSalesServicesSch.costService + '</costService>\ '
            + '<totalCostSalesAndServices>' + costOfSalesServicesSch.totalCostSalesAndServices + '</totalCostSalesAndServices>\ '
         + '</costOfSalesServicesSch>\ ';

    var costOfSalesServicesSchSpsWs = '<costOfSalesServicesSchSps>\ '
        + '<goodsInvBeg>' + costOfSalesServicesSchSps.goodsInvBeg + '</goodsInvBeg>\ '
        + '<purGoods>' + costOfSalesServicesSchSps.purGoods + '</purGoods>\ '
        + '<goodsAvail>' + costOfSalesServicesSchSps.goodsAvail + '</goodsAvail>\ '
        + '<goodsInvEnd>' + costOfSalesServicesSchSps.goodsInvEnd + '</goodsInvEnd>\ '
        + '<costSales>' + costOfSalesServicesSchSps.costSales + '</costSales>\ '
        + '<directMatsBeg>' + costOfSalesServicesSchSps.directMatsBeg + '</directMatsBeg>\ '
        + '<purDirectMats>' + costOfSalesServicesSchSps.purDirectMats + '</purDirectMats>\ '
        + '<matsAvail>' + costOfSalesServicesSchSps.matsAvail + '</matsAvail>\ '
        + '<directMatsEnd>' + costOfSalesServicesSchSps.directMatsEnd + '</directMatsEnd>\ '
        + '<rawMats>' + costOfSalesServicesSchSps.rawMats + '</rawMats>\ '
        + '<directLabor>' + costOfSalesServicesSchSps.directLabor + '</directLabor>\ '
        + '<manufacturingOverhead>' + costOfSalesServicesSchSps.manufacturingOverhead + '</manufacturingOverhead>\ '
        + '<totalManufacturingCost>' + costOfSalesServicesSchSps.totalManufacturingCost + '</totalManufacturingCost>\ '
        + '<workInProgressBeg>' + costOfSalesServicesSchSps.workInProgressBeg + '</workInProgressBeg>\ '
        + '<winProgressEnd>' + costOfSalesServicesSchSps.winProgressEnd + '</winProgressEnd>\ '
        + '<costGoodsManufactured>' + costOfSalesServicesSchSps.costGoodsManufactured + '</costGoodsManufactured>\ '
        + '<finishedGoodsBeg>' + costOfSalesServicesSchSps.finishedGoodsBeg + '</finishedGoodsBeg>\ '
        + '<finishedGoodsEnd>' + costOfSalesServicesSchSps.finishedGoodsEnd + '</finishedGoodsEnd>\ '
        + '<totalCostGoodsManufacturedAndSold>' + costOfSalesServicesSchSps.totalCostGoodsManufacturedAndSold + '</totalCostGoodsManufacturedAndSold>\ '
        + '<salaries>' + costOfSalesServicesSchSps.salaries + '</salaries>\ '
        + '<materials>' + costOfSalesServicesSchSps.materials + '</materials>\ '
        + '<sched2CDepreciation>' + costOfSalesServicesSchSps.sched2CDepreciation + '</sched2CDepreciation>\ '
        + '<sched2CRental>' + costOfSalesServicesSchSps.sched2CRental + '</sched2CRental>\ '
        + '<outsideServ>' + costOfSalesServicesSchSps.outsideServ + '</outsideServ>\ '
        + '<others>' + costOfSalesServicesSchSps.others + '</others>\ '
        + '<costService>' + costOfSalesServicesSchSps.costService + '</costService>\ '
        + '<totalCostSalesAndServices>' + costOfSalesServicesSchSps.totalCostSalesAndServices + '</totalCostSalesAndServices>\ '
     + '</costOfSalesServicesSchSps>\ ';

    var nonOperatingIncomeWsSch = '<nonOperatingIncomeSch>\ '
        + '<natureOfIncome></natureOfIncome>\ '
        + '<natureOfIncomeValue></natureOfIncomeValue>\ '
        + '<totalNonOperatingIncome>0</totalNonOperatingIncome>\ ';
    //iter start
    var nonOperatingIncomeListHolderSch = [];

    for (key in nonOperatingIncomeListSch) {
        var obj = '<nonOperatingIncome>\ '
		   + '<natureOfIncome>' + nonOperatingIncomeListSch[key].natureOfIncome + '</natureOfIncome>\ '
		   + '<natureOfIncomeValue>' + nonOperatingIncomeListSch[key].natureOfIncomeValue + '</natureOfIncomeValue>\ '
		+ '</nonOperatingIncome>\ ';
        nonOperatingIncomeListHolderSch.push(obj);
    };

    var nonOperatingIncomeobjHolderSch = "";

    for (key in nonOperatingIncomeListHolderSch) {
        nonOperatingIncomeobjHolderSch += nonOperatingIncomeListHolderSch[key];
    };

    //iter end
    var nonOperatingIncomeSchClosing = '</nonOperatingIncomeSch>\ ';


    var nonOperatingIncomeSpouseWSSch = '<nonOperatingIncomeSchSps>\ '
		+ '<natureOfIncome></natureOfIncome>\ '
		+ '<natureOfIncomeValue></natureOfIncomeValue>\ '
		+ '<totalNonOperatingIncome>0</totalNonOperatingIncome>\ ';
    //iter start
    var nonOperatingIncomeListSpouseHolderSch = [];

    for (key in nonOperatingIncomeSpouseListSch) {
        var obj = '<nonOperatingIncome>\ '
           + '<natureOfIncome>' + nonOperatingIncomeSpouseListSch[key].natureOfIncome + '</natureOfIncome>\ '
           + '<natureOfIncomeValue>' + nonOperatingIncomeSpouseListSch[key].natureOfIncomeValue + '</natureOfIncomeValue>\ '
        + '</nonOperatingIncome>\ ';
        nonOperatingIncomeListSpouseHolderSch.push(obj);
    };

    var nonOperatingIncomeSpouseobjHolderSch = "";

    for (key in nonOperatingIncomeListSpouseHolderSch) {
        nonOperatingIncomeSpouseobjHolderSch += nonOperatingIncomeListSpouseHolderSch[key];
    }

    //iter end
    var nonOperatingIncomeCloseSch = '</nonOperatingIncomeSchSps>\ ';



    var ordinaryAllowableItemizedDeductionWsSch = '<OrdinaryAllowableItemizedDeductionSch>\ '
        + '<adAndPromotionsVal>' + ordinaryAllowableItemizedDeductionSch.adAndPromotionsVal + '</adAndPromotionsVal>\ '
        + '<amortizatiosDescSecond></amortizatiosDescSecond>\ '
        + '<amortizatiosDescThird></amortizatiosDescThird>\ '
        + '<amortizatiosDescFourth></amortizatiosDescFourth>\ '
        + '<amortizatiosValSecond></amortizatiosValSecond>\ '
        + '<amortizatiosValThird></amortizatiosValThird>\ '
        + '<amortizatiosValFourth></amortizatiosValFourth>\ ';
    var listAmortizationsHolderSch = [];
    for (key in listAmortizationsSch) {
        var obj = '<listAmortizations>\ '
        + '<otherExpandableDesc>' + listAmortizationsSch[key].otherExpandableDesc + '</otherExpandableDesc>\ '
        + '<otherExpandableAmount>' + listAmortizationsSch[key].otherExpandableAmount + '</otherExpandableAmount>\ '
        + '<otherExpandableAmountSpecial></otherExpandableAmountSpecial>\ '
        + '<otherExpandableAmountRegular></otherExpandableAmountRegular>\ '
        + '<otherExpandableAmountTotal></otherExpandableAmountTotal>\ '
        + '</listAmortizations>';
        listAmortizationsHolderSch.push(obj);
    }
    var listAmortizationsObjectHolderSch = "";
    for (key in listAmortizationsHolderSch) {
        listAmortizationsObjectHolderSch += listAmortizationsHolderSch[key];
    }
    var badDebtsToTravelSch =
        '<badDebts>' + ordinaryAllowableItemizedDeductionSch.badDebts + '</badDebts>\ '
        + '<charitableContributions>' + ordinaryAllowableItemizedDeductionSch.charitableContributions + '</charitableContributions>\ '
        + '<commissions>' + ordinaryAllowableItemizedDeductionSch.commissions + '</commissions>\ '
        + '<communicationLightWater>' + ordinaryAllowableItemizedDeductionSch.communicationLightWater + '</communicationLightWater>\ '
        + '<utilities>' + ordinaryAllowableItemizedDeductionSch.utilities + '</utilities>\ '
        + '<depletion>' + ordinaryAllowableItemizedDeductionSch.depletion + '</depletion>\ '
        + '<depreciation>' + ordinaryAllowableItemizedDeductionSch.depreciation + '</depreciation>\ '
        + '<directorFee>' + ordinaryAllowableItemizedDeductionSch.directorFee + '</directorFee>\ '
        + '<fringeBenefits>' + ordinaryAllowableItemizedDeductionSch.fringeBenefits + '</fringeBenefits>\ '
        + '<fuelAndOil>' + ordinaryAllowableItemizedDeductionSch.fuelAndOil + '</fuelAndOil>\ '
        + '<insurance>' + ordinaryAllowableItemizedDeductionSch.insurance + '</insurance>\ '
        + '<iterest>' + ordinaryAllowableItemizedDeductionSch.iterest + '</iterest>\ '
        + '<janitorialAndMessengerial>' + ordinaryAllowableItemizedDeductionSch.janitorialAndMessengerial + '</janitorialAndMessengerial>\ '
        + '<losses>' + ordinaryAllowableItemizedDeductionSch.losses + '</losses>\ '
        + '<mgmtAndConsultancyFee>' + ordinaryAllowableItemizedDeductionSch.mgmtAndConsultancyFee + '</mgmtAndConsultancyFee>\ '
        + '<misc>' + ordinaryAllowableItemizedDeductionSch.misc + '</misc>\ '
        + '<officeSupplies>' + ordinaryAllowableItemizedDeductionSch.officeSupplies + '</officeSupplies>\ '
        + '<otherServices>' + ordinaryAllowableItemizedDeductionSch.otherServices + '</otherServices>\ '
        + '<professionalFees>' + ordinaryAllowableItemizedDeductionSch.professionalFees + '</professionalFees>\ '
        + '<schedGRental>' + ordinaryAllowableItemizedDeductionSch.schedGRental + '</schedGRental>\ '
        + '<repairLabor>' + ordinaryAllowableItemizedDeductionSch.repairLabor + '</repairLabor>\ '
        + '<repairMaterials>' + ordinaryAllowableItemizedDeductionSch.repairMaterials + '</repairMaterials>\ '
        + '<entertainment>' + ordinaryAllowableItemizedDeductionSch.entertainment + '</entertainment>\ '
        + '<researchAndDev>' + ordinaryAllowableItemizedDeductionSch.researchAndDev + '</researchAndDev>\ '
        + '<royalties>' + ordinaryAllowableItemizedDeductionSch.royalties + '</royalties>\ '
        + '<salariesAndAllownces>' + ordinaryAllowableItemizedDeductionSch.salariesAndAllownces + '</salariesAndAllownces>\ '
        + '<securityServices>' + ordinaryAllowableItemizedDeductionSch.securityServices + '</securityServices>\ '
        + '<otherContributions>' + ordinaryAllowableItemizedDeductionSch.otherContributions + '</otherContributions>\ '
        + '<taxesAndLiscenses>' + ordinaryAllowableItemizedDeductionSch.taxesAndLiscenses + '</taxesAndLiscenses>\ '
        + '<tollingFees>' + ordinaryAllowableItemizedDeductionSch.tollingFees + '</tollingFees>\ '
        + '<trainingsAndSeminars>' + ordinaryAllowableItemizedDeductionSch.trainingsAndSeminars + '</trainingsAndSeminars>\ '
        + '<travelTransportaion>' + ordinaryAllowableItemizedDeductionSch.travelTransportaion + '</travelTransportaion>\ ';

    var ordinaryOtherAlllowableItemizedDeductionSch =
        '<othersFirstDescFirst>' + '</othersFirstDescFirst>  \ '
        + '<othersFirstDescSecond>' + '</othersFirstDescSecond> \ '
        + '<othersFirstDescThird>' + '</othersFirstDescThird>  \ '
        + '<othersFirstDescfourth>' + '</othersFirstDescfourth>  \ '
        + '<otherFirstValue>' + '</otherFirstValue>  \ '
        + '<otherSecondValue>' + '</otherSecondValue>  \ '
        + '<otherThirdValue>' + '</otherThirdValue>  \ '
        + '<otherFourthValue>' + '</otherFourthValue>';

    var listOtherOrdinaryItemizedDeductionsHolderSch = [];
    for (key in listOtherOrdinaryItemizedDeductionsSch) {
        var obj =
            '<listOtherOrdinaryItemizedDeductions\>\ '
            + '<otherExpandableDesc>' + listOtherOrdinaryItemizedDeductionsSch[key].otherExpandableDesc + '</otherExpandableDesc> \ '
            + '<otherExpandableAmount>' + listOtherOrdinaryItemizedDeductionsSch[key].otherExpandableAmount + '</otherExpandableAmount> \ '
            + '<otherExpandableAmountSpecial>' + listOtherOrdinaryItemizedDeductionsSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial> \ '
            + '<otherExpandableAmountRegular>' + listOtherOrdinaryItemizedDeductionsSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular> \ '
            + '<otherExpandableAmountTotal>' + listOtherOrdinaryItemizedDeductionsSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal> \ '
            + '</listOtherOrdinaryItemizedDeductions>';

        listOtherOrdinaryItemizedDeductionsHolderSch.push(obj);
    }

    var listOtherOrdinaryItemizedDeductionsObjectHolderSch = "";
    for (key in listOtherOrdinaryItemizedDeductionsHolderSch) {
        listOtherOrdinaryItemizedDeductionsObjectHolderSch += listOtherOrdinaryItemizedDeductionsHolderSch[key];
    }

    var closingOrdinaryOtherAlllowableItemizedDeductionSch =
        '<totalOrdinaryAllowableItemizedDeductions>' + ordinaryAllowableItemizedDeductionSch.totalOrdinaryAllowableItemizedDeductions + '</totalOrdinaryAllowableItemizedDeductions>'
        + '</OrdinaryAllowableItemizedDeductionSch>';



    var ordinaryAllowableItemizedDeductionSpouseWsSch = '<OrdinaryAllowableItemizedDeductionSchSps>\ '
        + '<adAndPromotionsVal>' + ordinaryAllowableItemizedDeductionSpouseSch.adAndPromotionsVal + '</adAndPromotionsVal>\ '
        + '<amortizatiosDescSecond></amortizatiosDescSecond>\ '
        + '<amortizatiosDescThird></amortizatiosDescThird>\ '
        + '<amortizatiosDescFourth></amortizatiosDescFourth>\ '
        + '<amortizatiosValSecond></amortizatiosValSecond>\ '
        + '<amortizatiosValThird></amortizatiosValThird>\ '
        + '<amortizatiosValFourth></amortizatiosValFourth>';

    var listAmortizationsHolderSpouseSch = [];
    for (key in listAmortizationsSpouseSch) {
        var obj = '<listAmortizations>\ '
        + '<otherExpandableDesc>' + listAmortizationsSpouseSch[key].otherExpandableDesc + '</otherExpandableDesc>\ '
        + '<otherExpandableAmount>' + listAmortizationsSpouseSch[key].otherExpandableAmount + '</otherExpandableAmount>\ '
        + '<otherExpandableAmountSpecial></otherExpandableAmountSpecial>\ '
        + '<otherExpandableAmountRegular></otherExpandableAmountRegular>\ '
        + '<otherExpandableAmountTotal></otherExpandableAmountTotal>\ '
        + '</listAmortizations>';
        listAmortizationsHolderSpouseSch.push(obj);
    }

    var listAmortizationsObjectHolderSpouseSch = "";
    for (key in listAmortizationsHolderSpouseSch) {
        listAmortizationsObjectHolderSpouseSch += listAmortizationsHolderSpouseSch[key];
    }
    var badDebtsToTraveSpouselSch =
        '<badDebts>' + ordinaryAllowableItemizedDeductionSpouseSch.badDebts + '</badDebts>\ '
        + '<charitableContributions>' + ordinaryAllowableItemizedDeductionSpouseSch.charitableContributions + '</charitableContributions>\ '
        + '<commissions>' + ordinaryAllowableItemizedDeductionSpouseSch.commissions + '</commissions>\ '
        + '<communicationLightWater>' + ordinaryAllowableItemizedDeductionSpouseSch.communicationLightWater + '</communicationLightWater>\ '
        + '<utilities>' + ordinaryAllowableItemizedDeductionSpouseSch.utilities + '</utilities>\ '
        + '<depletion>' + ordinaryAllowableItemizedDeductionSpouseSch.depletion + '</depletion>\ '
        + '<depreciation>' + ordinaryAllowableItemizedDeductionSpouseSch.depreciation + '</depreciation>\ '
        + '<directorFee>' + ordinaryAllowableItemizedDeductionSpouseSch.directorFee + '</directorFee>\ '
        + '<fringeBenefits>' + ordinaryAllowableItemizedDeductionSpouseSch.fringeBenefits + '</fringeBenefits>\ '
        + '<fuelAndOil>' + ordinaryAllowableItemizedDeductionSpouseSch.fuelAndOil + '</fuelAndOil>\ '
        + '<insurance>' + ordinaryAllowableItemizedDeductionSpouseSch.insurance + '</insurance>\ '
        + '<iterest>' + ordinaryAllowableItemizedDeductionSpouseSch.iterest + '</iterest>\ '
        + '<janitorialAndMessengerial>' + ordinaryAllowableItemizedDeductionSpouseSch.janitorialAndMessengerial + '</janitorialAndMessengerial>\ '
        + '<losses>' + ordinaryAllowableItemizedDeductionSpouseSch.losses + '</losses>\ '
        + '<mgmtAndConsultancyFee>' + ordinaryAllowableItemizedDeductionSpouseSch.mgmtAndConsultancyFee + '</mgmtAndConsultancyFee>\ '
        + '<misc>' + ordinaryAllowableItemizedDeductionSpouseSch.misc + '</misc>\ '
        + '<officeSupplies>' + ordinaryAllowableItemizedDeductionSpouseSch.officeSupplies + '</officeSupplies>\ '
        + '<otherServices>' + ordinaryAllowableItemizedDeductionSpouseSch.otherServices + '</otherServices>\ '
        + '<professionalFees>' + ordinaryAllowableItemizedDeductionSpouseSch.professionalFees + '</professionalFees>\ '
        + '<schedGRental>' + ordinaryAllowableItemizedDeductionSpouseSch.schedGRental + '</schedGRental>\ '
        + '<repairLabor>' + ordinaryAllowableItemizedDeductionSpouseSch.repairLabor + '</repairLabor>\ '
        + '<repairMaterials>' + ordinaryAllowableItemizedDeductionSpouseSch.repairMaterials + '</repairMaterials>\ '
        + '<entertainment>' + ordinaryAllowableItemizedDeductionSpouseSch.entertainment + '</entertainment>\ '
        + '<researchAndDev>' + ordinaryAllowableItemizedDeductionSpouseSch.researchAndDev + '</researchAndDev>\ '
        + '<royalties>' + ordinaryAllowableItemizedDeductionSpouseSch.royalties + '</royalties>\ '
        + '<salariesAndAllownces>' + ordinaryAllowableItemizedDeductionSpouseSch.salariesAndAllownces + '</salariesAndAllownces>\ '
        + '<securityServices>' + ordinaryAllowableItemizedDeductionSpouseSch.securityServices + '</securityServices>\ '
        + '<otherContributions>' + ordinaryAllowableItemizedDeductionSpouseSch.otherContributions + '</otherContributions>\ '
        + '<taxesAndLiscenses>' + ordinaryAllowableItemizedDeductionSpouseSch.taxesAndLiscenses + '</taxesAndLiscenses>\ '
        + '<tollingFees>' + ordinaryAllowableItemizedDeductionSpouseSch.tollingFees + '</tollingFees>\ '
        + '<trainingsAndSeminars>' + ordinaryAllowableItemizedDeductionSpouseSch.trainingsAndSeminars + '</trainingsAndSeminars>\ '
        + '<travelTransportaion>' + ordinaryAllowableItemizedDeductionSpouseSch.travelTransportaion + '</travelTransportaion>';

    var ordinaryOtherAlllowableItemizedDeductionSpouseSch =
        '<othersFirstDescFirst></othersFirstDescFirst>\ '
        + '<othersFirstDescSecond></othersFirstDescSecond>\ '
        + '<othersFirstDescThird></othersFirstDescThird>\ '
        + '<othersFirstDescfourth></othersFirstDescfourth>\ '
        + '<otherFirstValue></otherFirstValue>\ '
        + '<otherSecondValue></otherSecondValue>\ '
        + '<otherThirdValue></otherThirdValue>\ '
        + '<otherFourthValue></otherFourthValue>\ ';

    var listOtherOrdinaryItemizedDeductionsHolderSpouseSch = [];
    for (key in listOtherOrdinaryItemizedDeductionsSpouseSch) {
        var obj =
            '<listOtherOrdinaryItemizedDeductions>\ '
            + '<otherExpandableDesc>' + listOtherOrdinaryItemizedDeductionsSpouseSch[key].otherExpandableDesc + '</otherExpandableDesc>\ '
            + '<otherExpandableAmount>' + listOtherOrdinaryItemizedDeductionsSpouseSch[key].otherExpandableAmount + '</otherExpandableAmount>\ '
            + '<otherExpandableAmountSpecial>' + listOtherOrdinaryItemizedDeductionsSpouseSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>\ '
            + '<otherExpandableAmountRegular>' + listOtherOrdinaryItemizedDeductionsSpouseSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>\ '
            + '<otherExpandableAmountTotal>' + listOtherOrdinaryItemizedDeductionsSpouseSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>\ '
            + '</listOtherOrdinaryItemizedDeductions>';

        listOtherOrdinaryItemizedDeductionsHolderSpouseSch.push(obj);
    }

    var listOtherOrdinaryItemizedDeductionsObjectHolderSpouseSch = "";
    for (key in listOtherOrdinaryItemizedDeductionsHolderSpouseSch) {
        listOtherOrdinaryItemizedDeductionsObjectHolderSpouseSch += listOtherOrdinaryItemizedDeductionsHolderSpouseSch[key];
    }

    var closingOrdinaryOtherAlllowableItemizedDeductionSpouseSch =
        '<totalOrdinaryAllowableItemizedDeductions>' + ordinaryAllowableItemizedDeductionSpouseSch.totalOrdinaryAllowableItemizedDeductions + '</totalOrdinaryAllowableItemizedDeductions>'
        + '</OrdinaryAllowableItemizedDeductionSchSps>';

    var specialAllowableItemizedDeductionWsSch =
        '<specialAllowableItemizedDeductionSch> \ '
        + '<specialAllowableItemizedDeductionsDescription1></specialAllowableItemizedDeductionsDescription1> \ '
        + '<specialAllowableItemizedDeductionsDescription2></specialAllowableItemizedDeductionsDescription2> \ '
        + '<specialAllowableItemizedDeductionsDescription3></specialAllowableItemizedDeductionsDescription3> \ '
        + '<specialAllowableItemizedDeductionsDescription4></specialAllowableItemizedDeductionsDescription4> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis1></specialAllowableItemizedDeductionsLegalBasis1> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis2></specialAllowableItemizedDeductionsLegalBasis2> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis3></specialAllowableItemizedDeductionsLegalBasis3> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis4></specialAllowableItemizedDeductionsLegalBasis4> \ '
        + '<specialAllowableItemizedDeductionsAmount1></specialAllowableItemizedDeductionsAmount1> \ '
        + '<specialAllowableItemizedDeductionsAmount2></specialAllowableItemizedDeductionsAmount2> \ '
        + '<specialAllowableItemizedDeductionsAmount3></specialAllowableItemizedDeductionsAmount3> \ '
        + '<specialAllowableItemizedDeductionsAmount4></specialAllowableItemizedDeductionsAmount4> \ '
        + '<totalSpecialAllowableItemizedDeductions></totalSpecialAllowableItemizedDeductions> \ '
        + '<!--Zero or more repetitions:-->\ ';

    var listSpecialAllowableItemizedDeductionHolderSch = [];
    for (key in listSpecialAllowableItemizedDeductionSch) {
        var obj = '<listSched5AdditionalAttachments>'
        + '<otherExpandableDesc>' + listSpecialAllowableItemizedDeductionSch[key].otherExpandableDesc + '</otherExpandableDesc> \ '
                + '<otherExpandableAmount>' + listSpecialAllowableItemizedDeductionSch[key].otherExpandableAmount + '</otherExpandableAmount> \ '
                + '<otherExpandableAmountSpecial></otherExpandableAmountSpecial> \ '
                + '<otherExpandableAmountRegular></otherExpandableAmountRegular> \ '
                + '<otherExpandableAmountTotal>' + listSpecialAllowableItemizedDeductionSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal> \ '
                + '<legalBasis>' + listSpecialAllowableItemizedDeductionSch[key].legalBasis + '</legalBasis> \ '
                + '<description></description> \ '
                + '<value></value> \ '
                + '</listSched5AdditionalAttachments> \ ';
        listSpecialAllowableItemizedDeductionHolderSch.push(obj);
    }

    var listSpecialAllowableItemizedDeductionObjectHolderSch = "";
    for (key in listSpecialAllowableItemizedDeductionHolderSch) {
        listSpecialAllowableItemizedDeductionObjectHolderSch += listSpecialAllowableItemizedDeductionHolderSch[key];
    }

    var closingSpecialAllowableItemizedDeductionWsSch =
        '</specialAllowableItemizedDeductionSch> \ ';


    var specialAllowableItemizedDeductionSpouseWsSch =
        '<specialAllowableItemizedDeductionSchSps> \ '
        + '<specialAllowableItemizedDeductionsDescription1></specialAllowableItemizedDeductionsDescription1> \ '
        + '<specialAllowableItemizedDeductionsDescription2></specialAllowableItemizedDeductionsDescription2> \ '
        + '<specialAllowableItemizedDeductionsDescription3></specialAllowableItemizedDeductionsDescription3> \ '
        + '<specialAllowableItemizedDeductionsDescription4></specialAllowableItemizedDeductionsDescription4> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis1></specialAllowableItemizedDeductionsLegalBasis1> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis2></specialAllowableItemizedDeductionsLegalBasis2> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis3></specialAllowableItemizedDeductionsLegalBasis3> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis4></specialAllowableItemizedDeductionsLegalBasis4> \ '
        + '<specialAllowableItemizedDeductionsAmount1></specialAllowableItemizedDeductionsAmount1> \ '
        + '<specialAllowableItemizedDeductionsAmount2></specialAllowableItemizedDeductionsAmount2> \ '
        + '<specialAllowableItemizedDeductionsAmount3></specialAllowableItemizedDeductionsAmount3> \ '
        + '<specialAllowableItemizedDeductionsAmount4></specialAllowableItemizedDeductionsAmount4> \ '
        + '<totalSpecialAllowableItemizedDeductions></totalSpecialAllowableItemizedDeductions> \ '
        + '<!--Zero or more repetitions:-->\ ';

    var listSpecialAllowableItemizedDeductionSpouseHolderSch = [];
    for (key in listSpecialAllowableItemizedDeductionSpouseSch) {
        var obj = '<listSched5AdditionalAttachments>'
        + '<otherExpandableDesc>' + listSpecialAllowableItemizedDeductionSpouseSch[key].otherExpandableDesc + '</otherExpandableDesc> \ '
                + '<otherExpandableAmount>' + listSpecialAllowableItemizedDeductionSpouseSch[key].otherExpandableAmount + '</otherExpandableAmount> \ '
                + '<otherExpandableAmountSpecial></otherExpandableAmountSpecial> \ '
                + '<otherExpandableAmountRegular></otherExpandableAmountRegular> \ '
                + '<otherExpandableAmountTotal>' + listSpecialAllowableItemizedDeductionSpouseSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal> \ '
                + '<legalBasis>' + listSpecialAllowableItemizedDeductionSpouseSch[key].legalBasis + '</legalBasis> \ '
                + '<description></description> \ '
                + '<value></value> \ '
                + '</listSched5AdditionalAttachments> \ ';
        listSpecialAllowableItemizedDeductionSpouseHolderSch.push(obj);
    }

    var listSpecialAllowableItemizedDeductionObjectSpouseHolderSch = "";
    for (key in listSpecialAllowableItemizedDeductionSpouseHolderSch) {
        listSpecialAllowableItemizedDeductionObjectSpouseHolderSch += listSpecialAllowableItemizedDeductionSpouseHolderSch[key];
    }

    var closingSpecialAllowableItemizedDeductionSpouseSchWs =
        '</specialAllowableItemizedDeductionSchSps> \ ';

    var taxCreditsPaymentSchWs = '<taxCreditsPaymentSch>\ '
            + '<priorYearsExcessCredits>' + taxCreditsPaymentsSch.priorYearsExcessCredits + '</priorYearsExcessCredits>\ '
            + '<taxPaymentsfortheFirstQuarters>' + taxCreditsPaymentsSch.taxPaymentsfortheFirstQuarters + '</taxPaymentsfortheFirstQuarters>\ '
            + '<creditableTaxWithheldfortheFirstThreeQuarters>' + taxCreditsPaymentsSch.creditableTaxWithheldfortheFirstThreeQuarters + '</creditableTaxWithheldfortheFirstThreeQuarters>\ '
            + '<creditableTaxWithheldfortheFirst4thQuarters>' + taxCreditsPaymentsSch.creditableTaxWithheldfortheFirst4thQuarters + '</creditableTaxWithheldfortheFirst4thQuarters>\ '
            + '<taxPaidinReturnPreviouslyFiled>' + taxCreditsPaymentsSch.taxPaidinReturnPreviouslyFiled + '</taxPaidinReturnPreviouslyFiled>\ '
            + '<foreignTaxCredits>' + taxCreditsPaymentsSch.foreignTaxCredits + '</foreignTaxCredits>\ '
            + '<SpecialTaxCredits>' + taxCreditsPaymentsSch.SpecialTaxCredits + '</SpecialTaxCredits>\ '
            + '<otherPaymentsDescription>' + taxCreditsPaymentsSch.otherPaymentsDescription + '</otherPaymentsDescription>\ '
            + '<otherPaymentsCreditsSpecify>' + taxCreditsPaymentsSch.otherPaymentsCreditsSpecify + '</otherPaymentsCreditsSpecify>\ '
            + '<totalTaxCreditsPayments>' + taxCreditsPaymentsSch.totalTaxCreditsPayments + '</totalTaxCreditsPayments>\ '
            + '<creditableTaxWithheld2316>' + taxCreditsPaymentsSch.creditableTaxWithheld2316 + '</creditableTaxWithheld2316>\ '
            + '</taxCreditsPaymentSch>\ ';

    var taxCreditsPaymentSchSpsWs = '<taxCreditsPaymentSchSps>\ '
        + '<priorYearsExcessCredits>' + taxCreditsPaymentsSpouseSch.priorYearsExcessCredits + '</priorYearsExcessCredits>\ '
        + '<taxPaymentsfortheFirstQuarters>' + taxCreditsPaymentsSpouseSch.taxPaymentsfortheFirstQuarters + '</taxPaymentsfortheFirstQuarters>\ '
        + '<creditableTaxWithheldfortheFirstThreeQuarters>' + taxCreditsPaymentsSpouseSch.creditableTaxWithheldfortheFirstThreeQuarters + '</creditableTaxWithheldfortheFirstThreeQuarters>\ '
        + '<creditableTaxWithheldfortheFirst4thQuarters>' + taxCreditsPaymentsSpouseSch.creditableTaxWithheldfortheFirst4thQuarters + '</creditableTaxWithheldfortheFirst4thQuarters>\ '
        + '<taxPaidinReturnPreviouslyFiled>' + taxCreditsPaymentsSpouseSch.taxPaidinReturnPreviouslyFiled + '</taxPaidinReturnPreviouslyFiled>\ '
        + '<foreignTaxCredits>' + taxCreditsPaymentsSpouseSch.foreignTaxCredits + '</foreignTaxCredits>\ '
        + '<SpecialTaxCredits>' + taxCreditsPaymentsSpouseSch.SpecialTaxCredits + '</SpecialTaxCredits>\ '
        + '<otherPaymentsDescription>' + taxCreditsPaymentsSpouseSch.otherPaymentsDescription + '</otherPaymentsDescription>\ '
        + '<otherPaymentsCreditsSpecify>' + taxCreditsPaymentsSpouseSch.otherPaymentsCreditsSpecify + '</otherPaymentsCreditsSpecify>\ '
        + '<totalTaxCreditsPayments>' + taxCreditsPaymentsSpouseSch.totalTaxCreditsPayments + '</totalTaxCreditsPayments>\ '
        + '<creditableTaxWithheld2316>' + taxCreditsPaymentsSpouseSch.creditableTaxWithheld2316 + '</creditableTaxWithheld2316>\ '
        + '</taxCreditsPaymentSchSps>\ ';

    var reconciliationOfNetIncomeWsSch = '<reconciliationOfNetIncomeSch>'
        + '<netIncomePerBooks>' + reconciliationOfNetIncomeSch.netIncomePerBooks + '</netIncomePerBooks>'
        + '<nonDeductibleExpensesItem2Description>' + '</nonDeductibleExpensesItem2Description>'
        + '<nonDeductibleExpensesItem2Value>' + '</nonDeductibleExpensesItem2Value>'
        + '<nonDeductibleExpensesItem3Description>' + '</nonDeductibleExpensesItem3Description>'
        + '<nonDeductibleExpensesItem3Value>' + '</nonDeductibleExpensesItem3Value> \ ';
    //iter start
    var nonDeductibleExpenseListHolderSch = [];
    for (key in nonDeductibleExpenseListSch) {
        var obj = '<listOfNonDeductibleExpensesItem3>'
               + '<otherExpandableDesc>' + nonDeductibleExpenseListSch[key].otherExpandableDesc + '</otherExpandableDesc>'
               + '<otherExpandableAmount>' + nonDeductibleExpenseListSch[key].otherExpandableAmount + '</otherExpandableAmount>'
               + '<otherExpandableAmountSpecial>' + nonDeductibleExpenseListSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
               + '<otherExpandableAmountRegular>' + nonDeductibleExpenseListSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
               + '<otherExpandableAmountTotal>' + nonDeductibleExpenseListSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
            + '</listOfNonDeductibleExpensesItem3>';
        nonDeductibleExpenseListHolderSch.push(obj);
    }
    var nonDeductibleExpenseListObjectHolderSch = "";
    for (key in nonDeductibleExpenseListHolderSch) {
        nonDeductibleExpenseListObjectHolderSch += nonDeductibleExpenseListHolderSch[key];
    }
    var nonTaxableWsSch =
	'<totalNonDeductibleExpenses>' + reconciliationOfNetIncomeSch.totalNonDeductibleExpenses + '</totalNonDeductibleExpenses>'
	+ '<nonTaxableAndSpDeductionsItem5Description>' + '</nonTaxableAndSpDeductionsItem5Description>'
	+ '<nonTaxableAndSpDeductionsItem5Value>' + '</nonTaxableAndSpDeductionsItem5Value>'
	+ '<nonTaxableAndSpDeductionsItem6Description>' + '</nonTaxableAndSpDeductionsItem6Description>'
	+ '<nonTaxableAndSpDeductionsItem6Value>' + '</nonTaxableAndSpDeductionsItem6Value>'
    //iter start
    var listNonTaxableHolderSch = [];
    for (key in listNonTaxableSch) {
        var obj = '<listOfnonTaxableAndSpDeductionsItem6>\ '
               + '<otherExpandableDesc>' + listNonTaxableSch[key].otherExpandableDesc + '</otherExpandableDesc>'
               + '<otherExpandableAmount>' + listNonTaxableSch[key].otherExpandableAmount + '</otherExpandableAmount>'
               + '<otherExpandableAmountSpecial>' + listNonTaxableSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
               + '<otherExpandableAmountRegular>' + listNonTaxableSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
               + '<otherExpandableAmountTotal>' + listNonTaxableSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
            + '</listOfnonTaxableAndSpDeductionsItem6>';
        listNonTaxableHolderSch.push(obj);
    }
    var listNonTaxableObjectHolderSch = "";
    for (key in listNonTaxableHolderSch) {
        listNonTaxableObjectHolderSch += listNonTaxableHolderSch[key];
    }

    //iter end
    var specialDeductionWsSch =
	'<specialDeductionsItem7Description>' + '</specialDeductionsItem7Description>'
	+ '<specialDeductionsItem7Value>' + '</specialDeductionsItem7Value>'
	+ '<specialDeductionsItem8Description>' + '</specialDeductionsItem8Description>'
	+ '<specialDeductionsItem8Value>' + '</specialDeductionsItem8Value>';
    //iter start
    var listSpecialDeductionsHolderSch = [];
    for (key in listSpecialDeductionsSch) {
        var obj =
        '<listOfSpecialDeductionsItem8>'
        + '<otherExpandableDesc>' + listSpecialDeductionsSch[key].otherExpandableDesc + '</otherExpandableDesc>'
        + '<otherExpandableAmount>' + listSpecialDeductionsSch[key].otherExpandableAmount + '</otherExpandableAmount>'
        + '<otherExpandableAmountSpecial>' + listSpecialDeductionsSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
        + '<otherExpandableAmountRegular>' + listSpecialDeductionsSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
        + '<otherExpandableAmountTotal>' + listSpecialDeductionsSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
        + '</listOfSpecialDeductionsItem8>';
        listSpecialDeductionsHolderSch.push(obj);
    }
    var listSpecialDeductionObjectHolderSch = "";
    for (key in listSpecialDeductionsHolderSch) {
        listSpecialDeductionObjectHolderSch += listSpecialDeductionsHolderSch[key];
    }
    //iter end
    var closeReconciliationOfNetIncomeWsSch =
	'<totalNonTaxableAndSpDeductions>' + reconciliationOfNetIncomeSch.totalNonTaxableAndSpDeductions + '</totalNonTaxableAndSpDeductions>'
	+ '<netTaxableIncome>' + reconciliationOfNetIncomeSch.reconciliationOfNetIncome + '</netTaxableIncome>'
	+ '</reconciliationOfNetIncomeSch>';




    var reconciliationOfNetIncomeWsSchSpouse = '<reconciliationOfNetIncomeSchSps>'
		+ '<netIncomePerBooks>' + reconciliationOfNetIncomeSpouseSch.netIncomePerBooks + '</netIncomePerBooks>'
		+ '<nonDeductibleExpensesItem2Description>' + '</nonDeductibleExpensesItem2Description>'
		+ '<nonDeductibleExpensesItem2Value>' + '</nonDeductibleExpensesItem2Value>'
		+ '<nonDeductibleExpensesItem3Description>' + '</nonDeductibleExpensesItem3Description>'
		+ '<nonDeductibleExpensesItem3Value>' + '</nonDeductibleExpensesItem3Value>\ ';
    //iter start
    var nonDeductibleExpenseListSpouseHolderSch = [];
    for (key in nonDeductibleExpenseListSpouseSch) {
        var obj = '<listOfNonDeductibleExpensesItem3>'
               + '<otherExpandableDesc>' + nonDeductibleExpenseListSpouseSch[key].otherExpandableDesc + '</otherExpandableDesc>'
               + '<otherExpandableAmount>' + nonDeductibleExpenseListSpouseSch[key].otherExpandableAmount + '</otherExpandableAmount>'
               + '<otherExpandableAmountSpecial>' + nonDeductibleExpenseListSpouseSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
               + '<otherExpandableAmountRegular>' + nonDeductibleExpenseListSpouseSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
               + '<otherExpandableAmountTotal>' + nonDeductibleExpenseListSpouseSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
            + '</listOfNonDeductibleExpensesItem3>';
        nonDeductibleExpenseListSpouseHolderSch.push(obj);
    }
    var nonDeductibleExpenseListObjectSpouseHolderSch = "";
    for (key in nonDeductibleExpenseListSpouseHolderSch) {
        nonDeductibleExpenseListObjectSpouseHolderSch += nonDeductibleExpenseListSpouseHolderSch[key];
    }
    var nonTaxableWsSpouseSch =
    '<totalNonDeductibleExpenses>' + reconciliationOfNetIncomeSpouseSch.totalNonDeductibleExpenses + '</totalNonDeductibleExpenses>'
    + '<nonTaxableAndSpDeductionsItem5Description>' + '</nonTaxableAndSpDeductionsItem5Description>'
    + '<nonTaxableAndSpDeductionsItem5Value>' + '</nonTaxableAndSpDeductionsItem5Value>'
    + '<nonTaxableAndSpDeductionsItem6Description>' + '</nonTaxableAndSpDeductionsItem6Description>'
    + '<nonTaxableAndSpDeductionsItem6Value>' + '</nonTaxableAndSpDeductionsItem6Value>'
    //iter start
    var listNonTaxableSpouseHolderSch = [];
    for (key in listNonTaxableSpouseSch) {
        var obj = '<listOfnonTaxableAndSpDeductionsItem6>\ '
               + '<otherExpandableDesc>' + listNonTaxableSpouseSch[key].otherExpandableDesc + '</otherExpandableDesc>'
               + '<otherExpandableAmount>' + listNonTaxableSpouseSch[key].otherExpandableAmount + '</otherExpandableAmount>'
               + '<otherExpandableAmountSpecial>' + listNonTaxableSpouseSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
               + '<otherExpandableAmountRegular>' + listNonTaxableSpouseSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
               + '<otherExpandableAmountTotal>' + listNonTaxableSpouseSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
            + '</listOfnonTaxableAndSpDeductionsItem6>';
        listNonTaxableSpouseHolderSch.push(obj);
    }
    var listNonTaxableObjectSpouseHolderSch = "";
    for (key in listNonTaxableSpouseHolderSch) {
        listNonTaxableObjectSpouseHolderSch += listNonTaxableSpouseHolderSch[key];
    }

    //iter end
    var specialDeductionWsSpouse =
    '<specialDeductionsItem7Description>' + '</specialDeductionsItem7Description>'
    + '<specialDeductionsItem7Value>' + '</specialDeductionsItem7Value>'
    + '<specialDeductionsItem8Description>' + '</specialDeductionsItem8Description>'
    + '<specialDeductionsItem8Value>' + '</specialDeductionsItem8Value>';
    //iter start
    var listSpecialDeductionsSpouseHolderSch = [];
    for (key in listSpecialDeductionsSpouseSch) {
        var obj =
        '<listOfSpecialDeductionsItem8>'
        + '<otherExpandableDesc>' + listSpecialDeductionsSpouseSch[key].otherExpandableDesc + '</otherExpandableDesc>'
        + '<otherExpandableAmount>' + listSpecialDeductionsSpouseSch[key].otherExpandableAmount + '</otherExpandableAmount>'
        + '<otherExpandableAmountSpecial>' + listSpecialDeductionsSpouseSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
        + '<otherExpandableAmountRegular>' + listSpecialDeductionsSpouseSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
        + '<otherExpandableAmountTotal>' + listSpecialDeductionsSpouseSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
        + '</listOfSpecialDeductionsItem8>';
        listSpecialDeductionsSpouseHolderSch.push(obj);
    }
    var listSpecialDeductionObjectSpouseHolderSch = "";
    for (key in listSpecialDeductionsSpouseHolderSch) {
        listSpecialDeductionObjectSpouseHolderSch += listSpecialDeductionsSpouseHolderSch[key];
    }
    //iter end
    var closeReconciliationOfNetIncomeWsSpouseSch =
    '<totalNonTaxableAndSpDeductions>' + reconciliationOfNetIncomeSpouseSch.totalNonTaxableAndSpDeductions + '</totalNonTaxableAndSpDeductions>'
    + '<netTaxableIncome>' + reconciliationOfNetIncomeSpouseSch.reconciliationOfNetIncome + '</netTaxableIncome>'
    + '</reconciliationOfNetIncomeSchSps> \ ';


    var closeAttachments = '</attachments> \ ';

    attach = "";
    attach = attachmentsOpening + taxRegimeWs + taxPayersActivityProfileSchWs + taxPayersActivityProfileSpsSchWs + computationOfIncomeTaxSchWs
    + computationOfIncomeTaxSpsSchWs + taxReliefAvailmentSchWs + taxReliefAvailmentSpsSchWs + salesRevenuesReceiptFeesSchWs
    + salesRevenuesReceiptFeesSpsSchWs + othertaxableIncomeWsSch + otherTaxableIncomeNotSubjectToFinalTaxSchObjectHolder
    + othertaxableIncomeWsClosingSch + othertaxableIncomeSpouseWsSps + otherTaxableIncomeNotSubjectToFinalTaxObjectSpouseHolderSch
    + othertaxableIncomeSpouseWsClosingSch + costOfSalesServicesSchWs + costOfSalesServicesSchSpsWs + nonOperatingIncomeWsSch
    + nonOperatingIncomeobjHolderSch + nonOperatingIncomeSchClosing + nonOperatingIncomeSpouseWSSch + nonOperatingIncomeSpouseobjHolderSch
    + nonOperatingIncomeCloseSch + ordinaryAllowableItemizedDeductionWsSch + listAmortizationsObjectHolderSch + badDebtsToTravelSch
    + ordinaryOtherAlllowableItemizedDeductionSch + listOtherOrdinaryItemizedDeductionsObjectHolderSch + closingOrdinaryOtherAlllowableItemizedDeductionSch
    + ordinaryAllowableItemizedDeductionSpouseWsSch + listAmortizationsObjectHolderSpouseSch + badDebtsToTraveSpouselSch + ordinaryOtherAlllowableItemizedDeductionSpouseSch
    + listOtherOrdinaryItemizedDeductionsObjectHolderSpouseSch + closingOrdinaryOtherAlllowableItemizedDeductionSpouseSch + specialAllowableItemizedDeductionWsSch
    + listSpecialAllowableItemizedDeductionObjectHolderSch + closingSpecialAllowableItemizedDeductionWsSch + specialAllowableItemizedDeductionSpouseWsSch
    + listSpecialAllowableItemizedDeductionObjectSpouseHolderSch + closingSpecialAllowableItemizedDeductionSpouseSchWs + taxCreditsPaymentSchWs
    + taxCreditsPaymentSchSpsWs + reconciliationOfNetIncomeWsSch + nonDeductibleExpenseListObjectHolderSch + listNonTaxableObjectHolderSch
    + specialDeductionWsSch + listSpecialDeductionObjectHolderSch + closeReconciliationOfNetIncomeWsSch + reconciliationOfNetIncomeWsSchSpouse
    + nonDeductibleExpenseListObjectSpouseHolderSch + nonTaxableWsSpouseSch + listNonTaxableObjectSpouseHolderSch + specialDeductionWsSpouse
    + listSpecialDeductionObjectSpouseHolderSch + closeReconciliationOfNetIncomeWsSpouseSch + closeAttachments;

    //reset list
    otherTaxableIncomeNotSubjectToFinalTaxListSch = [];
    otherTaxableIncomeNotSubjectToFinalTaxListSchSps = [];
    nonOperatingIncomeListSch = [];
    nonOperatingIncomeSpouseListSch = [];
    listAmortizationsSch = [];
    listAmortizationsSpouseSch = [];
    listOtherOrdinaryItemizedDeductionsSch = [];
    listOtherOrdinaryItemizedDeductionsSpouseSch = [];
    listSpecialAllowableItemizedDeductionSch = [];
    listSpecialAllowableItemizedDeductionSpouseSch = [];
    nonDeductibleExpenseListSch = [];
    nonDeductibleExpenseListSpouseSch = [];
    listNonTaxableSch = [];
    listNonTaxableSpouseSch = [];
    listSpecialDeductionsSch = [];
    listSpecialDeductionsSpouseSch = [];


    return attach;

}




function generateSoapRequest() {


    var soapRequestHeader = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.client.ph.gov.bir.web"> \
				<soapenv:Header/> \
				<soapenv:Body> \
				<ws:submitForm1701> \ ';

    var openForm = '<formBean> \ ';
    var taxpayerWs = '<taxpayer1701>\ '
	    + '<taxIdNumber>' + taxpayer.tin1 + taxpayer.tin2 + taxpayer.tin3 + '</taxIdNumber>\ '
	    + '<branchCode>' + taxpayer.branchCode + '</branchCode>\ '
	    + '<industryTypeCode>' + taxpayer.industryTypeCode + '</industryTypeCode>\ '
	    + '<industryTypeMitCode>' + taxpayer.industryTypeMitCode + '</industryTypeMitCode>\ '
	    + '<description>' + taxpayer.description + '</description>\ '
	    + '<barangayAddress>' + taxpayer.barangayAddress + '</barangayAddress>\ '
	    + '<districtAddress>' + taxpayer.districtAddress + '</districtAddress>\ '
	    + '<dateRegistered>' + taxpayer.dateRegistered + '</dateRegistered>\ '
	    + '<exemptionTypeCode>' + taxpayer.exemptionTypeCode + '</exemptionTypeCode>\ '
	    + '<subCode>' + taxpayer.subCode + '</subCode>\ '
	    + '<cTypeCode>' + taxpayer.cTypeCode + '</cTypeCode>\ '
	    + '<gTypeCode>' + taxpayer.gTypeCode + '</gTypeCode>\ '
	    + '<spouseTaxPayer>' + taxpayer.spouseTaxPayer + '</spouseTaxPayer>\ '
	    + '<startMonth>' + taxpayer.startMonth + '</startMonth>\ '
	    + '<incorporationDate>' + taxpayer.incorporationDate + '</incorporationDate>\ '
	    + '<birthDate>' + taxpayer.birthDate + '</birthDate>\ '
	    + '<zipCode>' + taxpayer.sex + '</zipCode>\ '
	    + '<sex>' + taxpayer.sex + '</sex>\ '
	    + '<tinPart1>' + taxpayer.tin1 + '</tinPart1>\ '
	    + '<tinPart2>' + taxpayer.tin2 + '</tinPart2>\ '
	    + '<tinPart3>' + taxpayer.tin3 + '</tinPart3>\ '
	    + '<registeredAddress>' + taxpayer.registeredAddress + '</registeredAddress>\ '
	    + '<dateFiled>' + taxpayer.dateFile + '</dateFiled>\ '
	    + '<psocCode>' + taxpayer.psocCode + '</psocCode>\ '
	    + '<claimingAdditionalExemption>' + taxpayer.claimingAdditionalExemption + '</claimingAdditionalExemption>\ '
	    + '<numberOfDependents>' + taxpayer.numberOfDependents + '</numberOfDependents>\ '
	    + '<jointFilling>' + taxpayer.jointFilling + '</jointFilling>\ '
	    + '<dueDate>' + taxpayer.dueDate + '</dueDate>\ '
	    + '<returnPeriod>' + taxpayer.returnPeriod + '</returnPeriod>\ '
	    + '<actCode>' + taxpayer.actCode + '</actCode>\ '
	    + '<emailAddress>' + taxpayer.emailAddress + '</emailAddress>\ '
	    + '<formVersion>' + taxpayer.formVersion + '</formVersion>\ '
	    + '<sourceOfIncome>' + taxpayer.sourceOfIncome + '</sourceOfIncome>\ '
	    + '<govtIssuedId>' + taxpayer.govtIssuedId + '</govtIssuedId>\ '
	    + '<govtIssuedIdPlace>' + taxpayer.govtIssuedIdPlace + '</govtIssuedIdPlace>\ '
	    + '<govtIssuedIdAmount>' + taxpayer.govtIssuedIdAmount + '</govtIssuedIdAmount>\ '
	    + '<govtIssuedIdDate>' + taxpayer.govtIssuedIdDate + '</govtIssuedIdDate>\ '
	    + '<ammendedYN>' + taxpayer.ammendedYN + '</ammendedYN>\ '
	    + '<batchNo>' + taxpayer.batchNo + '</batchNo>\ '
	    + '<amdendedReturn>' + taxpayer.amdendedReturn + '</amdendedReturn>\ '
	    + '<shortPeriodReturn>' + taxpayer.shortPeriodReturn + '</shortPeriodReturn>\ '
	    + '<alphaNumericTaxCode>' + taxpayer.alphaNumericTaxCode + '</alphaNumericTaxCode>\ '
	    + '<sheetFiledCount>' + taxpayer.sheetFiledCount + '</sheetFiledCount>\ '
	    + '<taxFilerType>' + taxpayer.taxFilerType + '</taxFilerType>\ '
	    + '<tradeName>' + taxpayer.tradeName + '</tradeName>\ '
	    + '<contactNumber>' + taxpayer.contactNumber + '</contactNumber>\ '
	    + '<civilStatus>' + taxpayer.civilStatus + '</civilStatus>\ '
	    + '<ifMarriedSpouseIncome>' + taxpayer.ifMarriedSpouseIncome + '</ifMarriedSpouseIncome>\ '
	    + '<filingStatus>' + taxpayer.filingStatus + '</filingStatus>\ '
	    + '<mainLine>' + taxpayer.mainLine + '</mainLine>\ '
	    + '<psic>' + taxpayer.psic + '</psic>\ '
	    + '<methodOfAccounting>' + taxpayer.methodOfAccounting + '</methodOfAccounting>\ '
	    + '<methodOfAccountingOthers>' + taxpayer.methodOfAccountingOthers + '</methodOfAccountingOthers>\ '
	    + '<methodOfDeduction>' + taxpayer.methodOfDeduction + '</methodOfDeduction>\ '
	    + '<incomeExemptFromIncomeTax>' + taxpayer.incomeExemptFromIncomeTax + '</incomeExemptFromIncomeTax>\ '
	    + '<incomeSubjectToSpecialPreferentialRate>' + taxpayer.incomeSubjectToSpecialPreferentialRate + '</incomeSubjectToSpecialPreferentialRate>\ '
	    + '<internationalTreatyYn>' + 'N' + '</internationalTreatyYn>\ '
	    + '<fiscalYear>' + taxpayer.fiscalYear + '</fiscalYear>\ '
	    + '<filerName>' + taxpayer.filerName + '</filerName>\ '
	    + '<lineOfBusiness>' + taxpayer.lineOfBusiness + '</lineOfBusiness>\ '
	    + '<calendarFiscal>' + taxpayer.calendarFiscal + '</calendarFiscal>\ '
	    + '<yearEndedMonth>' + taxpayer.yearEndedMonth + '</yearEndedMonth>\ '
	    + '<yearEnded>' + taxpayer.yearEnded + '</yearEnded>\ '
	    + '<rdoCode>' + taxpayer.rdoCode + '</rdoCode>\ '
	    + '<registeredActivity>' + taxpayer.registeredActivity + '</registeredActivity>\ '
	    + '<lastName>' + taxpayer.lastName + '</lastName>\ '
	    + '<midName>' + taxpayer.midName + '</midName>\ '
	    + '<firstName>' + taxpayer.firstName + '</firstName>\ '
	    + '<registeredName>' + taxpayer.registeredName + '</registeredName>\ '
	    + '<ctcSecType>' + taxpayer.ctcSecType + '</ctcSecType>\ '
	    + '<amendedReturn>' + taxpayer.amendedReturn + '</amendedReturn>\ '
	    + '<atc1>' + taxpayer.atc1 + '</atc1>\ '
	    + '<atc1Desc>' + taxpayer.atc1Desc + '</atc1Desc>\ '
	    + '<atc2Desc>' + taxpayer.atc2Desc + '</atc2Desc>\ '
	    + '<atc2>' + taxpayer.atc2 + '</atc2>\ '
	    + '<atcIC011>' + taxpayer.atcIC011 + '</atcIC011>\ '
	    + '<atcIC021>' + taxpayer.atcIC021 + '</atcIC021>\ '
	    + '<effectivityDateFrom>' + taxpayer.effectivityDateFrom + '</effectivityDateFrom>\ '
	    + '<effectivityDateTo>' + taxpayer.effectivityDateTo + '</effectivityDateTo>\ '
	    + '<legalBasisTaxExemption>' + taxpayer.legalBasisTaxExemption + '</legalBasisTaxExemption>\ '
	    + '<investmentPromotionAgency>' + taxpayer.investmentPromotionAgency + '</investmentPromotionAgency>\ '
	    + '<subStreet>' + taxpayer.subStreet + '</subStreet>\ '
	    + '<street>' + taxpayer.street + '</street>\ '
	    + '<city>' + taxpayer.city + '</city>\ '
	    + '<offlineFormVersion>' + taxpayer.offlineFormVersion + '</offlineFormVersion>\ '
	 + '</taxpayer1701>';


    var taxPayerWsSpouse = '<taxpayerSpouse1701>  \ '
       + '<taxIdNumber>' + '' + '</taxIdNumber>  \ '
       + '<branchCode>' + spouse.branchCode + '</branchCode>  \ '
       + '<industryTypeCode>' + '' + '</industryTypeCode>  \ '
       + '<industryTypeMitCode>' + '' + '</industryTypeMitCode>  \ '
       + '<description>Description' + '' + '</description>  \ '
       + '<barangayAddress>' + '' + '</barangayAddress>  \ '
       + '<districtAddress>' + '' + '</districtAddress>  \ '
       + '<dateRegistered>' + '' + '</dateRegistered>  \ '
       + '<exemptionTypeCode>' + '' + '</exemptionTypeCode>  \ '
       + '<subCode>' + '' + '</subCode>  \ '
       + '<cTypeCode>' + '' + '</cTypeCode>  \ '
       + '<gTypeCode>' + '' + '</gTypeCode>  \ '
       + '<spouseTaxPayer>' + '' + '</spouseTaxPayer>  \ '
       + '<startMonth>' + '' + '</startMonth>  \ '
       + '<incorporationDate>' + '' + '</incorporationDate> \    '
       + '<birthDate>' + spouse.birthDate + '</birthDate>  \ '
       + '<zipCode>' + '' + '</zipCode>  \ '
       + '<sex>' + '' + '</sex> \ '
       + '<tinPart1>' + spouse.tin1 + '</tinPart1> \  '
       + '<tinPart2>' + spouse.tin2 + '</tinPart2> \  '
       + '<tinPart3>' + spouse.tin3 + '</tinPart3> \   '
       + '<registeredAddress>' + spouse.registeredAddress + '</registeredAddress> \   '
       + '<dateFiled>' + '' + '</dateFiled>\ '
       + '<psocCode>' + spouse.psocCode + '</psocCode> \    '
       + '<claimingAdditionalExemption>' + spouse.claimingAdditionalExemption + '</claimingAdditionalExemption>  \ '
       + '<numberOfDependents>' + spouse.numberOfDependents + '</numberOfDependents> \  '
       + '<jointFilling>' + '' + '</jointFilling> \  '
       + '<dueDate>' + '' + '</dueDate> \ '
       + '<returnPeriod>' + '' + '</returnPeriod> \ '
       + '<actCode>' + '' + '</actCode> \  '
       + '<emailAddress>' + spouse.emailAddress + '</emailAddress>  \ '
       + '<formVersion>' + '' + '</formVersion> \    '
       + '<sourceOfIncome>' + '' + '</sourceOfIncome> \    '
       + '<govtIssuedId>' + '' + '</govtIssuedId> \    '
       + '<govtIssuedIdPlace>' + '' + '</govtIssuedIdPlace>  \ '
       + '<govtIssuedIdAmount>' + '' + '</govtIssuedIdAmount> \  '
       + '<govtIssuedIdDate>' + '' + '</govtIssuedIdDate> \   '
       + '<ammendedYN>' + '' + '</ammendedYN>  \ '
       + '<batchNo>' + '' + '</batchNo> \    '
       + '<amdendedReturn>' + '' + '</amdendedReturn> \   '
       + '<shortPeriodReturn>' + '' + '</shortPeriodReturn> \    '
       + '<alphaNumericTaxCode>' + spouse.atc + '</alphaNumericTaxCode>  \ '
       + '<sheetFiledCount>' + '' + '</sheetFiledCount> \  '
       + '<taxFilerType>' + '' + '</taxFilerType> \    '
       + '<tradeName>' + spouse.tradeName + '</tradeName> \    '
       + '<contactNumber>' + spouse.contactNumber + '</contactNumber> \    '
       + '<civilStatus>' + spouse.civilStatus + '</civilStatus> \    '
       + '<ifMarriedSpouseIncome>' + '' + '</ifMarriedSpouseIncome> \   '
       + '<filingStatus>' + '' + '</filingStatus> \  '
       + '<mainLine>' + '' + '</mainLine> \    '
       + '<psic>' + spouse.psic + '</psic> \    '
       + '<methodOfAccounting>' + spouse.methodOfAccounting + '</methodOfAccounting> \    '
       + '<methodOfAccountingOthers>' + spouse.methodOfAccountingOthers + '</methodOfAccountingOthers> \    '
       + '<methodOfDeduction>' + spouse.methodOfDeduction + '</methodOfDeduction> \    '
       + '<incomeExemptFromIncomeTax>' + spouse.incomeExemptFromIncomeTax + '</incomeExemptFromIncomeTax> \    '
       + '<incomeSubjectToSpecialPreferentialRate>' + spouse.incomeSubjectToSpecialPreferentialRate + '</incomeSubjectToSpecialPreferentialRate> \  '
       + '<internationalTreatyYn>' + '' + '</internationalTreatyYn> \    '
       + '<fiscalYear>' + '' + '</fiscalYear> \    '
       + '<filerName>' + '' + '</filerName> \    '
       + '<lineOfBusiness>' + spouse.lineOfBusiness + '</lineOfBusiness> \    '
       + '<calendarFiscal>' + '' + '</calendarFiscal> \    '
       + '<yearEndedMonth>' + '' + '</yearEndedMonth> \    '
       + '<yearEnded>' + '' + '</yearEnded> \    '
       + '<rdoCode>' + spouse.rdoCode + '</rdoCode> \    '
       + '<registeredActivity>' + '' + '</registeredActivity> \    '
       + '<lastName>' + spouse.lastName + '</lastName> \    '
       + '<midName>' + spouse.midName + '</midName> \    '
       + '<firstName>' + spouse.firstName + '</firstName> \ '
       + '<registeredName>' + '' + '</registeredName> \   '
       + '<amendedReturn>' + '' + '</amendedReturn> \   '
       + '<atc1>' + '' + '</atc1> \ '
       + '<atc1Desc>' + '' + '</atc1Desc> \ '
       + '<atc2Desc>' + '' + '</atc2Desc>  \ '
       + '<atc2>' + '' + '</atc2>  \ '
       + '<atcIC011>' + '' + '</atcIC011>  \ '
       + '<atcIC021>' + '' + '</atcIC021> \    '
       + '<effectivityDateFrom>' + '' + '</effectivityDateFrom>  \ '
       + '<effectivityDateTo>' + '' + '</effectivityDateTo> \    '
       + '<legalBasisTaxExemption>' + '' + '</legalBasisTaxExemption>  \ '
       + '<investmentPromotionAgency>' + '' + '</investmentPromotionAgency>  \ '
       + '<subStreet>' + '' + '</subStreet> \  '
       + '<street>' + '' + '</street> \    '
       + '<city>' + '' + '</city>  \ '
    + '</taxpayerSpouse1701>';

    var totalTaxPayableWs = '<totalTaxPayable1701>  \ '
       + '<totalIncomeTaxDue>' + totalTaxPayable1701.totalIncomeTaxDue + '</totalIncomeTaxDue>  \ '
       + '<totalPenalties>' + totalTaxPayable1701.totalPenalties + '</totalPenalties>  \ '
       + '<netTaxPayable>' + totalTaxPayable1701.netTaxPayable + '</netTaxPayable>  \ '
       + '<taxFilerTaxDue>' + totalTaxPayable1701.taxFilerTaxDue + '</taxFilerTaxDue>  \ '
       + '<taxFilerSpouseTaxDue>' + totalTaxPayable1701.taxFilerSpouseTaxDue + '</taxFilerSpouseTaxDue>  \ '
       + '<taxFilerCredits>' + totalTaxPayable1701.taxFilerCredits + '</taxFilerCredits>  \ '
       + '<taxFilerSpouseCredits>' + totalTaxPayable1701.taxFilerSpouseCredits + '</taxFilerSpouseCredits>  \ '
       + '<portionOfTaxPayableAllowed>' + totalTaxPayable1701.portionOfTaxPayableAllowed + '</portionOfTaxPayableAllowed>  \ '
       + '<totalAmountPayableUponFilling>' + totalTaxPayable1701.totalAmountPayableUponFilling + '</totalAmountPayableUponFilling>  \ '
       + '<totalFinalTaxWithheld>' + totalTaxPayable1701.totalFinalTaxWithheld + '</totalFinalTaxWithheld>  \ '
       + '<totalTaxCredits>' + totalTaxPayable1701.totalTaxCredits + '</totalTaxCredits>  \ '
       + '<totalTaxPayable>' + totalTaxPayable1701.totalTaxPayable + '</totalTaxPayable>  \ '
       + '<netAmountTaxPayable>' + totalTaxPayable1701.netAmountTaxPayable + '</netAmountTaxPayable>  \ '
       + '<communityTaxCertificate>' + totalTaxPayable1701.communityTaxCertificate + '</communityTaxCertificate>  \ '
       + '<dateOfIssue>' + totalTaxPayable1701.dateOfIssue + '</dateOfIssue>  \ '
       + '<placeOfIssue>' + totalTaxPayable1701.placeOfIssue + '</placeOfIssue>  \ '
       + '<amountIfCTC>' + totalTaxPayable1701.amountIfCTC + '</amountIfCTC>  \ '
       + '<overPayment>' + totalTaxPayable1701.overPayment + '</overPayment>  \ '
       + '<totalAmountPayable>' + totalTaxPayable1701.totalAmountPayable + '</totalAmountPayable>  \ '
       + '<totalIncomeReceiptsExemptFromIncomeTax>' + totalTaxPayable1701.totalIncomeReceiptsExemptFromIncomeTax + '</totalIncomeReceiptsExemptFromIncomeTax>  \ '
       + '</totalTaxPayable1701> \ ';

    var computationOfIncomeWs = '<computationOfIncomeTax1701>  \ '
        + '<grossCompensationIncome>' + computationOfIncomeTax1701.grossCompensationIncome + '</grossCompensationIncome>  \ '
        + '<nonTaxableExemptCompensation>' + computationOfIncomeTax1701.nonTaxableExemptCompensation + '</nonTaxableExemptCompensation>  \ '
        + '<grossTaxableCompensationIncome>' + computationOfIncomeTax1701.grossTaxableCompensationIncome + '</grossTaxableCompensationIncome>  \ '
        + '<premiumOnHealthHospitalizationInsurance>' + computationOfIncomeTax1701.premiumOnHealthHospitalizationInsurance + '</premiumOnHealthHospitalizationInsurance>  \ '
        + '<personalExemptionforEstateAndTrust>' + computationOfIncomeTax1701.personalExemptionforEstateAndTrust + '</personalExemptionforEstateAndTrust>  \ '
        + '<additionalExemption>' + computationOfIncomeTax1701.additionalExemption + '</additionalExemption>  \ '
        + '<totalDeductions>' + computationOfIncomeTax1701.totalDeductions + '</totalDeductions>  \ '
        + '<netTaxableCompensationIncome>' + computationOfIncomeTax1701.netTaxableCompensationIncome + '</netTaxableCompensationIncome>  \ '
        + '<excessOfDeductions>' + computationOfIncomeTax1701.excessOfDeductions + '</excessOfDeductions>  \ '
        + '<netSalesRevenuesReceiptFees>' + computationOfIncomeTax1701.netSalesRevenuesReceiptFees + '</netSalesRevenuesReceiptFees>  \ '
        + '<otherIncomeOperationsNotToSubjectToFinalTax>' + computationOfIncomeTax1701.otherIncomeOperationsNotToSubjectToFinalTax + '</otherIncomeOperationsNotToSubjectToFinalTax>  \ '
        + '<totalSalesRevenuesReceiptFees>' + computationOfIncomeTax1701.totalSalesRevenuesReceiptFees + '</totalSalesRevenuesReceiptFees>  \ '
        + '<totalCostOfSalesServices>' + computationOfIncomeTax1701.totalCostOfSalesServices + '</totalCostOfSalesServices>  \ '
        + '<grossIncomeFromBusinessProfession>' + computationOfIncomeTax1701.grossIncomeFromBusinessProfession + '</grossIncomeFromBusinessProfession>  \ '
        + '<nonOperatingIncome>' + computationOfIncomeTax1701.nonOperatingIncome + '</nonOperatingIncome>  \ '
        + '<totalGrossIncome>' + computationOfIncomeTax1701.totalGrossIncome + '</totalGrossIncome>  \ '
        + '<ordinaryAllowableItemizedDeductions>' + computationOfIncomeTax1701.ordinaryAllowableItemizedDeductions + '</ordinaryAllowableItemizedDeductions>  \ '
        + '<totalSpecialAllowableItemizedDeductions>' + computationOfIncomeTax1701.totalSpecialAllowableItemizedDeductions + '</totalSpecialAllowableItemizedDeductions>  \ '
        + '<totalNOLCO>' + computationOfIncomeTax1701.totalNOLCO + '</totalNOLCO>  \ '
        + '<totalAllowableItemizedDeductions>' + computationOfIncomeTax1701.totalAllowableItemizedDeductions + '</totalAllowableItemizedDeductions>  \ '
        + '<optionalStandardDeductions>' + computationOfIncomeTax1701.optionalStandardDeductions + '</optionalStandardDeductions>  \ '
        + '<taxableIncomeFromBusinessProfession>' + computationOfIncomeTax1701.taxableIncomeFromBusinessProfession + '</taxableIncomeFromBusinessProfession>  \ '
        + '<netTaxableIncomeCompensationIncome>' + computationOfIncomeTax1701.netTaxableIncomeCompensationIncome + '</netTaxableIncomeCompensationIncome>  \ '
        + '<netTaxableIncome>' + computationOfIncomeTax1701.netTaxableIncome + '</netTaxableIncome>  \ '
        + '<excessDeductionsIfNoCompensationIncome>' + computationOfIncomeTax1701.excessDeductionsIfNoCompensationIncome + '</excessDeductionsIfNoCompensationIncome>  \ '
        + '<totalTaxableIncome>' + computationOfIncomeTax1701.totalTaxableIncome + '</totalTaxableIncome>  \ '
        + '<taxDueRegular>' + computationOfIncomeTax1701.taxDueRegular + '</taxDueRegular>  \ '
        + '<specialRateIncomeTaxDue>' + computationOfIncomeTax1701.specialRateIncomeTaxDue + '</specialRateIncomeTaxDue>  \ '
        + '<shareOfOtherGovernmentAgency>' + computationOfIncomeTax1701.shareOfOtherGovernmentAgency + '</shareOfOtherGovernmentAgency>  \ '
        + '<netSpecialIncomeTaxDue>' + computationOfIncomeTax1701.netSpecialIncomeTaxDue + '</netSpecialIncomeTaxDue>  \ '
        + '<totalIncomeTaxDue>' + computationOfIncomeTax1701.totalIncomeTaxDue + '</totalIncomeTaxDue>  \ '
        + '<regular>' + computationOfIncomeTax1701.regular + '</regular>  \ '
        + '<special>' + computationOfIncomeTax1701.special + '</special>  \ '
        + '<exempt>' + computationOfIncomeTax1701.exempt + '</exempt>  \ '
        + '<totalTaxCreditPayments>' + computationOfIncomeTax1701.totalTaxCreditPayments + '</totalTaxCreditPayments>  \ '
        + '<netTaxPayable>' + computationOfIncomeTax1701.netTaxPayable + '</netTaxPayable>  \ '
        + '<netTaxPayableForTaxFilerAndSpouse>' + computationOfIncomeTax1701.netTaxPayableForTaxFilerAndSpouse + '</netTaxPayableForTaxFilerAndSpouse>  \ '
        + '<portionOfTaxPayableAllowed>' + computationOfIncomeTax1701.portionOfTaxPayableAllowed + '</portionOfTaxPayableAllowed>  \ '
        + '<netAmountOfTaxPayable>' + computationOfIncomeTax1701.netAmountOfTaxPayable + '</netAmountOfTaxPayable>  \ '
        + '<compromise>' + computationOfIncomeTax1701.compromise + '</compromise>  \ '
       + '<totalPenalties>' + computationOfIncomeTax1701.totalPenalties + '</totalPenalties>  \ '
       + '<totalAmountPayableUponFiling>' + computationOfIncomeTax1701.totalAmountPayableUponFiling + '</totalAmountPayableUponFiling>  \ '
       + '<regularIncomeTaxOtherwiseDue>' + computationOfIncomeTax1701.regularIncomeTaxOtherwiseDue + '</regularIncomeTaxOtherwiseDue>  \ '
       + '<netSalesRevRcptFees>' + computationOfIncomeTax1701.netSalesRevRcptFees + '</netSalesRevRcptFees>  \ '
       + '<otherIncomeNoFinalTax>' + computationOfIncomeTax1701.otherIncomeNoFinalTax + '</otherIncomeNoFinalTax>  \ '
       + '<totalSalesRevRcptFees>' + computationOfIncomeTax1701.totalSalesRevRcptFees + '</totalSalesRevRcptFees>  \ '
       + '<costOfSalesServices>' + computationOfIncomeTax1701.costOfSalesServices + '</costOfSalesServices>  \ '
       + '<grossIncomeFrmBusiness>' + computationOfIncomeTax1701.grossIncomeFrmBusiness + '</grossIncomeFrmBusiness>  \ '
       + '<nonOperatingIncomeSch>' + computationOfIncomeTax1701.nonOperatingIncomeSch + '</nonOperatingIncomeSch>  \ '
       + '<ordinaryAllowableItemizedDed>' + computationOfIncomeTax1701.ordinaryAllowableItemizedDed + '</ordinaryAllowableItemizedDed>  \ '
       + '<specialAllowableItemizedDed>' + computationOfIncomeTax1701.specialAllowableItemizedDed + '</specialAllowableItemizedDed>  \ '
       + '<totalAllowableItemizedDed>' + computationOfIncomeTax1701.totalAllowableItemizedDed + '</totalAllowableItemizedDed>  \ '
       + '<taxableIncomeFrmBsnsPrfsn>' + computationOfIncomeTax1701.taxableIncomeFrmBsnsPrfsn + '</taxableIncomeFrmBsnsPrfsn>  \ '
       + '</computationOfIncomeTax1701> \ ';

    var computationOfIncomeTaxWsSpouse = '<computationOfIncomeTaxSpouse1701>  \ '
       + '<grossCompensationIncome>' + computationOfIncomeTax1701Spouse.grossCompensationIncome + '</grossCompensationIncome>                \ '
       + '<nonTaxableExemptCompensation>' + computationOfIncomeTax1701Spouse.nonTaxableExemptCompensation + '</nonTaxableExemptCompensation>               \ '
       + '<grossTaxableCompensationIncome>' + computationOfIncomeTax1701Spouse.grossTaxableCompensationIncome + '</grossTaxableCompensationIncome>                \ '
       + '<premiumOnHealthHospitalizationInsurance>' + computationOfIncomeTax1701Spouse.premiumOnHealthHospitalizationInsurance + '</premiumOnHealthHospitalizationInsurance>                \ '
       + '<personalExemptionforEstateAndTrust>' + computationOfIncomeTax1701Spouse.personalExemptionforEstateAndTrust + '</personalExemptionforEstateAndTrust>                \ '
       + '<additionalExemption>' + computationOfIncomeTax1701Spouse.additionalExemption + '</additionalExemption>                \ '
       + '<totalDeductions>' + computationOfIncomeTax1701Spouse.totalDeductions + '</totalDeductions>                \ '
       + '<netTaxableCompensationIncome>' + computationOfIncomeTax1701Spouse.netTaxableCompensationIncome + '</netTaxableCompensationIncome>                \ '
       + '<excessOfDeductions>' + computationOfIncomeTax1701Spouse.excessOfDeductions + '</excessOfDeductions>                \ '
       + '<netSalesRevenuesReceiptFees>' + computationOfIncomeTax1701Spouse.netSalesRevenuesReceiptFees + '</netSalesRevenuesReceiptFees>                \ '
       + '<otherIncomeOperationsNotToSubjectToFinalTax>' + computationOfIncomeTax1701Spouse.otherIncomeOperationsNotToSubjectToFinalTax + '</otherIncomeOperationsNotToSubjectToFinalTax>                \ '
       + '<totalSalesRevenuesReceiptFees>' + computationOfIncomeTax1701Spouse.totalSalesRevenuesReceiptFees + '</totalSalesRevenuesReceiptFees>                \ '
       + '<totalCostOfSalesServices>' + computationOfIncomeTax1701Spouse.totalCostOfSalesServices + '</totalCostOfSalesServices>                \ '
       + '<grossIncomeFromBusinessProfession>' + computationOfIncomeTax1701Spouse.grossIncomeFromBusinessProfession + '</grossIncomeFromBusinessProfession>                \ '
       + '<nonOperatingIncome>' + computationOfIncomeTax1701Spouse.nonOperatingIncome + '</nonOperatingIncome>                \ '
       + '<totalGrossIncome>' + computationOfIncomeTax1701Spouse.totalGrossIncome + '</totalGrossIncome>                \ '
       + '<ordinaryAllowableItemizedDeductions>' + computationOfIncomeTax1701Spouse.ordinaryAllowableItemizedDeductions + '</ordinaryAllowableItemizedDeductions>                \ '
       + '<totalSpecialAllowableItemizedDeductions>' + computationOfIncomeTax1701Spouse.totalSpecialAllowableItemizedDeductions + '</totalSpecialAllowableItemizedDeductions>                \ '
       + '<totalNOLCO>' + computationOfIncomeTax1701Spouse.totalNOLCO + '</totalNOLCO>                \ '
       + '<totalAllowableItemizedDeductions>' + computationOfIncomeTax1701Spouse.totalAllowableItemizedDeductions + '</totalAllowableItemizedDeductions>                \ '
       + '<optionalStandardDeductions>' + computationOfIncomeTax1701Spouse.optionalStandardDeductions + '</optionalStandardDeductions>                \ '
       + '<taxableIncomeFromBusinessProfession>' + computationOfIncomeTax1701Spouse.taxableIncomeFromBusinessProfession + '</taxableIncomeFromBusinessProfession>                \ '
       + '<netTaxableIncomeCompensationIncome>' + computationOfIncomeTax1701Spouse.netTaxableIncomeCompensationIncome + '</netTaxableIncomeCompensationIncome>                \ '
       + '<netTaxableIncome>' + computationOfIncomeTax1701Spouse.netTaxableIncome + '</netTaxableIncome>                \ '
       + '<excessDeductionsIfNoCompensationIncome>' + computationOfIncomeTax1701Spouse.excessDeductionsIfNoCompensationIncome + '</excessDeductionsIfNoCompensationIncome>                \ '
       + '<totalTaxableIncome>' + computationOfIncomeTax1701Spouse.totalTaxableIncome + '</totalTaxableIncome>                \ '
       + '<taxDueRegular>' + computationOfIncomeTax1701Spouse.taxDueRegular + '</taxDueRegular>                \ '
       + '<specialRateIncomeTaxDue>' + computationOfIncomeTax1701Spouse.specialRateIncomeTaxDue + '</specialRateIncomeTaxDue>                \ '
       + '<shareOfOtherGovernmentAgency>' + computationOfIncomeTax1701Spouse.shareOfOtherGovernmentAgency + '</shareOfOtherGovernmentAgency>                \ '
       + '<netSpecialIncomeTaxDue>' + computationOfIncomeTax1701Spouse.netSpecialIncomeTaxDue + '</netSpecialIncomeTaxDue>                \ '
       + '<totalIncomeTaxDue>' + computationOfIncomeTax1701Spouse.totalIncomeTaxDue + '</totalIncomeTaxDue>                \ '
       + '<regular>' + computationOfIncomeTax1701Spouse.regular + '</regular>                \ '
       + '<special>' + computationOfIncomeTax1701Spouse.special + '</special>                \ '
       + '<exempt>' + computationOfIncomeTax1701Spouse.exempt + '</exempt>                \ '
       + '<totalTaxCreditPayments>' + computationOfIncomeTax1701Spouse.totalTaxCreditPayments + '</totalTaxCreditPayments>                \ '
       + '<netTaxPayable>' + computationOfIncomeTax1701Spouse.netTaxPayable + '</netTaxPayable>                \ '
       + '<netTaxPayableForTaxFilerAndSpouse>' + computationOfIncomeTax1701Spouse.netTaxPayableForTaxFilerAndSpouse + '</netTaxPayableForTaxFilerAndSpouse>                \ '
       + '<portionOfTaxPayableAllowed>' + computationOfIncomeTax1701Spouse.portionOfTaxPayableAllowed + '</portionOfTaxPayableAllowed>                \ '
       + '<netAmountOfTaxPayable>' + computationOfIncomeTax1701Spouse.netAmountOfTaxPayable + '</netAmountOfTaxPayable>                \ '
       + '<compromise>' + computationOfIncomeTax1701Spouse.compromise + '</compromise>                \ '
       + '<totalPenalties>' + computationOfIncomeTax1701Spouse.totalPenalties + '</totalPenalties>                \ '
       + '<totalAmountPayableUponFiling>' + computationOfIncomeTax1701Spouse.totalAmountPayableUponFiling + '</totalAmountPayableUponFiling>                \ '
       + '<regularIncomeTaxOtherwiseDue>' + computationOfIncomeTax1701Spouse.regularIncomeTaxOtherwiseDue + '</regularIncomeTaxOtherwiseDue> \ '
       + '<netSalesRevRcptFees>' + computationOfIncomeTax1701Spouse.netSalesRevRcptFees + '</netSalesRevRcptFees> \ '
       + '<otherIncomeNoFinalTax>' + computationOfIncomeTax1701Spouse.otherIncomeNoFinalTax + '</otherIncomeNoFinalTax> \ '
       + '<totalSalesRevRcptFees>' + computationOfIncomeTax1701Spouse.totalSalesRevRcptFees + '</totalSalesRevRcptFees> \ '
       + '<costOfSalesServices>' + computationOfIncomeTax1701Spouse.costOfSalesServices + '</costOfSalesServices> \ '
       + '<grossIncomeFrmBusiness>' + computationOfIncomeTax1701Spouse.grossIncomeFrmBusiness + '</grossIncomeFrmBusiness> \ '
       + '<nonOperatingIncomeSch>' + computationOfIncomeTax1701Spouse.nonOperatingIncomeSch + '</nonOperatingIncomeSch> \ '
       + '<ordinaryAllowableItemizedDed>' + computationOfIncomeTax1701Spouse.ordinaryAllowableItemizedDed + '</ordinaryAllowableItemizedDed> \ '
       + '<specialAllowableItemizedDed>' + computationOfIncomeTax1701Spouse.specialAllowableItemizedDed + '</specialAllowableItemizedDed> \ '
       + '<totalAllowableItemizedDed>' + computationOfIncomeTax1701Spouse.totalAllowableItemizedDed + '</totalAllowableItemizedDed> \ '
       + '<taxableIncomeFrmBsnsPrfsn>' + computationOfIncomeTax1701Spouse.taxableIncomeFrmBsnsPrfsn + '</taxableIncomeFrmBsnsPrfsn> \ '
   + '</computationOfIncomeTaxSpouse1701> \ ';

    var taxReliefAvailmentWs = '<taxReliefAvailment1701>      \ '
        + '<taxReliefAvailmentBeforeSpecialTaxCredits>' + taxReliefAvailment1701.taxReliefAvailmentBeforeSpecialTaxCredits + '</taxReliefAvailmentBeforeSpecialTaxCredits>                \ '
        + '<specialTaxCredits>' + taxReliefAvailment1701.specialTaxCredits + '</specialTaxCredits>                \ '
        + '<regularTaxReliefAvailment>' + taxReliefAvailment1701.regularTaxReliefAvailment + '</regularTaxReliefAvailment>                \ '
        + '<specialTaxReliefAvailment>' + taxReliefAvailment1701.specialTaxReliefAvailment + '</specialTaxReliefAvailment>                \ '
        + '<exemptTaxReliefAvailment>' + taxReliefAvailment1701.exemptTaxReliefAvailment + '</exemptTaxReliefAvailment>                \ '
        + '<totalTaxReliefAvailment>' + taxReliefAvailment1701.totalTaxReliefAvailment + '</totalTaxReliefAvailment>                \ '
        + '<totalTaxReliefAvailmentofTaxFilerAndSpouse>' + taxReliefAvailment1701.totalTaxReliefAvailmentofTaxFilerAndSpouse + '</totalTaxReliefAvailmentofTaxFilerAndSpouse> \ '
        + '<taxableIncomeFrmBsns>' + taxReliefAvailment1701.taxableIncomeFrmBsns + '</taxableIncomeFrmBsns> \ '
        + '<specialAllowableItemizedDed>' + taxReliefAvailment1701.specialAllowableItemizedDed + '</specialAllowableItemizedDed> \ '
        + '<subTotal>' + taxReliefAvailment1701.subTotal + '</subTotal> \ '
        + '<regIncomeTaxOtherwiseDue>' + taxReliefAvailment1701.regIncomeTaxOtherwiseDue + '</regIncomeTaxOtherwiseDue> \ '
        + '<incomeTaxDueSpecialRate>' + taxReliefAvailment1701.incomeTaxDueSpecialRate + '</incomeTaxDueSpecialRate> \ '
        + '<taxReliefAvailment>' + taxReliefAvailment1701.taxReliefAvailment + '</taxReliefAvailment> \ '
        + '<totalTaxReliefAvailmentSpecial>' + taxReliefAvailment1701.totalTaxReliefAvailmentSpecial + '</totalTaxReliefAvailmentSpecial> \ '
        + '<taxableIncomeFrmBsnsRegular>' + taxReliefAvailment1701.taxableIncomeFrmBsnsRegular + '</taxableIncomeFrmBsnsRegular> \ '
        + '<applicableTaxRate>' + taxReliefAvailment1701.applicableTaxRate + '</applicableTaxRate> \ '
        + '<taxReliefAvailmentExempt>' + taxReliefAvailment1701.taxReliefAvailmentExempt + '</taxReliefAvailmentExempt> \ '
    + ' </taxReliefAvailment1701> \ ';

    var taxReliefAvailmentWsSpouse = '<taxReliefAvailmentSpouse1701>                \ '
        + '<taxReliefAvailmentBeforeSpecialTaxCredits>' + taxReliefAvailmentSpouse1701.taxReliefAvailmentBeforeSpecialTaxCredits + '</taxReliefAvailmentBeforeSpecialTaxCredits>                \ '
        + '<specialTaxCredits>' + taxReliefAvailmentSpouse1701.specialTaxCredits + '</specialTaxCredits>                \ '
        + '<regularTaxReliefAvailment>' + taxReliefAvailmentSpouse1701.regularTaxReliefAvailment + '</regularTaxReliefAvailment>                \ '
        + '<specialTaxReliefAvailment>' + taxReliefAvailmentSpouse1701.specialTaxReliefAvailment + '</specialTaxReliefAvailment>                \ '
        + '<exemptTaxReliefAvailment>' + taxReliefAvailmentSpouse1701.exemptTaxReliefAvailment + '</exemptTaxReliefAvailment>                \ '
        + '<totalTaxReliefAvailment>' + taxReliefAvailmentSpouse1701.totalTaxReliefAvailment + '</totalTaxReliefAvailment>                \ '
        + '<totalTaxReliefAvailmentofTaxFilerAndSpouse>' + taxReliefAvailmentSpouse1701.totalTaxReliefAvailmentofTaxFilerAndSpouse + '</totalTaxReliefAvailmentofTaxFilerAndSpouse> \ '
        + '<taxableIncomeFrmBsns>' + taxReliefAvailmentSpouse1701.taxableIncomeFrmBsns + '</taxableIncomeFrmBsns> \ '
        + '<specialAllowableItemizedDed>' + taxReliefAvailmentSpouse1701.specialAllowableItemizedDed + '</specialAllowableItemizedDed> \ '
        + '<subTotal>' + taxReliefAvailmentSpouse1701.subTotal + '</subTotal> \ '
        + '<regIncomeTaxOtherwiseDue>' + taxReliefAvailmentSpouse1701.regIncomeTaxOtherwiseDue + '</regIncomeTaxOtherwiseDue> \ '
        + '<incomeTaxDueSpecialRate>' + taxReliefAvailmentSpouse1701.incomeTaxDueSpecialRate + '</incomeTaxDueSpecialRate> \ '
        + '<taxReliefAvailment>' + taxReliefAvailmentSpouse1701.taxReliefAvailment + '</taxReliefAvailment> \ '
        + '<totalTaxReliefAvailmentSpecial>' + taxReliefAvailmentSpouse1701.totalTaxReliefAvailmentSpecial + '</totalTaxReliefAvailmentSpecial> \ '
        + '<taxableIncomeFrmBsnsRegular>' + taxReliefAvailmentSpouse1701.taxableIncomeFrmBsnsRegular + '</taxableIncomeFrmBsnsRegular> \ '
        + '<applicableTaxRate>' + taxReliefAvailmentSpouse1701.applicableTaxRate + '</applicableTaxRate> \ '
        + '<taxReliefAvailmentExempt>' + taxReliefAvailmentSpouse1701.taxReliefAvailmentExempt + '</taxReliefAvailmentExempt> \ '
        + '</taxReliefAvailmentSpouse1701>\ '
        + '<!--Zero or more repetitions:--> \ ';
    var dependentsListHolder = [];
    for (key in dependentsList) {
        var obj = '<qualifiedDependendentChildren>  \ '
               + '<lastName>' + dependentsList[key].lastName + '</lastName> \ '
               + '<firstName>' + dependentsList[key].firstName + '</firstName> \ '
               + '<middleInitial>' + dependentsList[key].middleInitial + '</middleInitial> \ '
               + '<incapacitatedYn>' + dependentsList[key].incapacitatedYn + '</incapacitatedYn> \ '
               + '<birthDate>' + dependentsList[key].birthDate + '</birthDate> \ '
               + '<spouseWaiver>' + dependentsList[key].spouseWaiver + '</spouseWaiver> \ '
		+ '</qualifiedDependendentChildren>  \ ';
        dependentsListHolder.push(obj);
    }
    var dependentObjectHolder = "";
    for (key in dependentsListHolder) {
        dependentObjectHolder += dependentsListHolder[key];
    }

    var currentAddressWs = '<currentAddress>                \ '
        + '<unitNo>' + currentAddress.unitNo + '</unitNo>                \ '
        + '<bldgName>' + currentAddress.bldgName + '</bldgName>                \ '
        + '<lotNo>' + currentAddress.lotNo + '</lotNo>                \ '
        + '<blockNo>' + currentAddress.blockNo + '</blockNo>                \ '
        + '<phaseNo>' + currentAddress.phaseNo + '</phaseNo>                \ '
        + '<houseNo>' + currentAddress.houseNo + '</houseNo>                \ '
        + '<streetName>' + currentAddress.streetName + '</streetName>                \ '
        + '<subdOrVill>' + currentAddress.subdOrVill + '</subdOrVill>                \ '
        + '<barangay>' + currentAddress.barangay + '</barangay>                \ '
        + '<municipality>' + currentAddress.municipality + '</municipality>                \ '
        + '<province>' + currentAddress.province + '</province>                \ '
        + '<zipCode>' + currentAddress.zipCode + '</zipCode>                \ '
        + '<isCurrent>' + currentAddress.isCurrent + '</isCurrent> \ '
        + '</currentAddress>\ ';

    var externalAuditorWs = '<externalAuditorAccreditedTaxAgent>                \ '
        + '<nameOfExternalAuditor>' + auditor.nameOfExternalAuditor + '</nameOfExternalAuditor>                \ '
        + '<externalAuditorTIN>' + auditor.externalAuditorTIN + '</externalAuditorTIN>\ '
        + '<nameOfSigningPartner>' + auditor.nameOfSigningPartner + '</nameOfSigningPartner>                \ '
        + '<signingPartnerTIN>' + auditor.signingPartnerTIN + '</signingPartnerTIN>                \ '
        + '<birAccreditationNumber>' + auditor.birAccreditationNumber + '</birAccreditationNumber>                \ '
        + '<isssueDate>' + auditor.isssueDate + '</isssueDate>                \ '
        + '<expiryDate>' + auditor.expiryDate + '</expiryDate>                \ '
        + '<accreditedTaxAgentBranchCode>' + auditor.accreditedTaxAgentBranchCode + '</accreditedTaxAgentBranchCode>             \ '
        + '<signingPartnerBranchCode>' + auditor.signingPartnerBranchCode + '</signingPartnerBranchCode> \ '
        + '</externalAuditorAccreditedTaxAgent> \ ';

    var employerListHolder = [];
    for (key in employersList) {
        var obj = '<employer> \ '
            + '<employer>' + employersList[key].employer + '</employer> \ '
            + '<employerTin1>' + employersList[key].employerTin1 + '</employerTin1> \ '
            + '<employerTin2>' + employersList[key].employerTin2 + '</employerTin2> \ '
            + '<employerTin3>' + employersList[key].employerTin3 + '</employerTin3> \ '
            + '<employerBranchCode>' + employersList[key].employerBranchCode + '</employerBranchCode> \ '
            + '<compensationIcome>' + employersList[key].compensationIcome + '</compensationIcome> \ '
            + '<employerTaxWithheld>' + employersList[key].employerTaxWithheld + '</employerTaxWithheld> \ '
			+ '</employer>  \ ';
        employerListHolder.push(obj);
    }

    var employerObjectHolder = "";
    for (key in employerListHolder) {
        employerObjectHolder += employerListHolder[key];
    }

    var employersListSpouseHolder = [];
    for (key in employersListSpouse) {
        var obj = '<employerSpouse> \ '
            + '<employer>' + employersListSpouse[key].employer + '</employer> \ '
            + '<employerTin1>' + employersListSpouse[key].employerTin1 + '</employerTin1> \ '
            + '<employerTin2>' + employersListSpouse[key].employerTin2 + '</employerTin2> \ '
            + '<employerTin3>' + employersListSpouse[key].employerTin3 + '</employerTin3> \ '
            + '<employerBranchCode>' + employersListSpouse[key].employerBranchCode + '</employerBranchCode> \ '
            + '<compensationIcome>' + employersListSpouse[key].compensationIcome + '</compensationIcome> \ '
            + '<employerTaxWithheld>' + employersListSpouse[key].employerTaxWithheld + '</employerTaxWithheld> \ '
            + '</employerSpouse>  \ ';
        employersListSpouseHolder.push(obj);
    }
    var employerSpouseObjectHolder = "";
    for (key in employersListSpouseHolder) {
        employerSpouseObjectHolder += employersListSpouseHolder[key];
    }

    var employerCompensationWs = '<employerCompensation>'
        + '<totalCompensationIncome>' + employerCompensation.totalCompensationIncome + '</totalCompensationIncome> \ '
        + '<totalTaxWithheld>' + employerCompensation.totalTaxWithheld + '</totalTaxWithheld>  \ '
        + '</employerCompensation> \ ';


    var salesRevenueWs = '<salesRevenue>                \ '
        + '<totalSalesRevenuesReceiptsFees>' + salesRevenue.totalSalesRevenuesReceiptsFees + '</totalSalesRevenuesReceiptsFees>\ '
        + '<grossSalesRevenuesReceiptsFees>' + salesRevenue.grossSalesRevenuesReceiptsFees + '</grossSalesRevenuesReceiptsFees> \ '
        + '<totalRevenue>' + salesRevenue.totalRevenue + '</totalRevenue>                \ '
        + '<salesReturnsAllowancesAndDiscounts>' + salesRevenue.salesReturnsAllowancesAndDiscounts + '</salesReturnsAllowancesAndDiscounts>                \ '
        + '<NetSalesRevenueReceiptFees>' + salesRevenue.NetSalesRevenueReceiptFees + '</NetSalesRevenueReceiptFees> \ '
     + '</salesRevenue>\ ';

    var salesRevenueWsSpouse = '<salesRevenueSpouse> \    '
           + '<totalSalesRevenuesReceiptsFees>' + salesRevenueSpouse.totalSalesRevenuesReceiptsFees + '</totalSalesRevenuesReceiptsFees> \    '
           + '<grossSalesRevenuesReceiptsFees>' + salesRevenueSpouse.grossSalesRevenuesReceiptsFees + '</grossSalesRevenuesReceiptsFees> \    '
           + '<totalRevenue>' + salesRevenueSpouse.totalRevenue + '</totalRevenue> \    '
           + '<salesReturnsAllowancesAndDiscounts>' + salesRevenueSpouse.salesReturnsAllowancesAndDiscounts + '</salesReturnsAllowancesAndDiscounts> \    '
           + '<NetSalesRevenueReceiptFees>' + salesRevenueSpouse.NetSalesRevenueReceiptFees + '</NetSalesRevenueReceiptFees>  \ '
        + '</salesRevenueSpouse>  \ ';

    var othertaxableIncomeWs =
        '<otherTaxableIncome>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxDescFirst>First Desc</otherTaxableIncomeNotSubjectToFinalTaxDescFirst>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxDescSecond>Sceond Desc</otherTaxableIncomeNotSubjectToFinalTaxDescSecond>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxDescThird>Third Desc</otherTaxableIncomeNotSubjectToFinalTaxDescThird>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxValueFirst>100</otherTaxableIncomeNotSubjectToFinalTaxValueFirst>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxValueSecond>100</otherTaxableIncomeNotSubjectToFinalTaxValueSecond>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxValueThird>100</otherTaxableIncomeNotSubjectToFinalTaxValueThird>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxValueTotal>100</otherTaxableIncomeNotSubjectToFinalTaxValueTotal>  \ ';

    var otherTaxableIncomeNotSubjectToFinalTaxValueListHolder = [];
    for (key in otherTaxableIncomeNotSubjectToFinalTaxList) {
        var obj = '<otherTaxableIncomeNotSubjectToFinalTaxValue>\ '
            + '<otherExpandableDesc>' + otherTaxableIncomeNotSubjectToFinalTaxList[key].description + '</otherExpandableDesc>\ '
            + '<otherExpandableAmount>' + otherTaxableIncomeNotSubjectToFinalTaxList[key].amount + '</otherExpandableAmount>\ '
            + '</otherTaxableIncomeNotSubjectToFinalTaxValue>';
        //alert( otherTaxableIncomeNotSubjectToFinalTaxList[key].otherExpandableDesc, otherTaxableIncomeNotSubjectToFinalTaxList[key].otherExpandableAmount);
        otherTaxableIncomeNotSubjectToFinalTaxValueListHolder.push(obj);
    }
    var otherTaxableIncomeNotSubjectToFinalTaxObjectHolder = "";
    for (key in otherTaxableIncomeNotSubjectToFinalTaxValueListHolder) {
        otherTaxableIncomeNotSubjectToFinalTaxObjectHolder += otherTaxableIncomeNotSubjectToFinalTaxValueListHolder[key];
    }

    var othertaxableIncomeWsClosing = '</otherTaxableIncome>  \ ';

    var othertaxableIncomeSpouseWs =
        '<otherTaxableIncomeSpouse>\ '
           + '<otherTaxableIncomeNotSubjectToFinalTaxDescFirst> </otherTaxableIncomeNotSubjectToFinalTaxDescFirst> \    '
           + '<otherTaxableIncomeNotSubjectToFinalTaxDescSecond> </otherTaxableIncomeNotSubjectToFinalTaxDescSecond> \    '
           + '<otherTaxableIncomeNotSubjectToFinalTaxDescThird> </otherTaxableIncomeNotSubjectToFinalTaxDescThird>  \ '
           + '<otherTaxableIncomeNotSubjectToFinalTaxValueFirst> </otherTaxableIncomeNotSubjectToFinalTaxValueFirst>  \ '
           + '<otherTaxableIncomeNotSubjectToFinalTaxValueSecond> </otherTaxableIncomeNotSubjectToFinalTaxValueSecond>  \ '
           + '<otherTaxableIncomeNotSubjectToFinalTaxValueThird> </otherTaxableIncomeNotSubjectToFinalTaxValueThird>  \ '
           + '<otherTaxableIncomeNotSubjectToFinalTaxValueTotal> </otherTaxableIncomeNotSubjectToFinalTaxValueTotal>';

    var otherTaxableIncomeNotSubjectToFinalTaxValueListSpouseHolder = [];
    for (key in otherTaxableIncomeNotSubjectToFinalTaxListSpouse) {
        var obj = '<otherTaxableIncomeNotSubjectToFinalTaxValue> \  '
        + '<otherExpandableDesc>' + otherTaxableIncomeNotSubjectToFinalTaxListSpouse[key].description + '</otherExpandableDesc>  \ '
        + '<otherExpandableAmount>' + otherTaxableIncomeNotSubjectToFinalTaxListSpouse[key].amount + '</otherExpandableAmount>  \ '
        + '</otherTaxableIncomeNotSubjectToFinalTaxValue>';
        otherTaxableIncomeNotSubjectToFinalTaxValueListSpouseHolder.push(obj);
    }
    var otherTaxableIncomeNotSubjectToFinalTaxObjectSpouseHolder = "";
    for (key in otherTaxableIncomeNotSubjectToFinalTaxValueListSpouseHolder) {
        otherTaxableIncomeNotSubjectToFinalTaxObjectSpouseHolder += otherTaxableIncomeNotSubjectToFinalTaxValueListSpouseHolder[key];
    }

    var othertaxableIncomeSpouseWsClosing = '</otherTaxableIncomeSpouse>';

    var costOfSalesWs = ' <costOfSales>'
        + '<goodsInvBeg>' + costOfSales.goodsInvBeg + '</goodsInvBeg> \ '
        + '<purGoods>' + costOfSales.purGoods + '</purGoods> \ '
        + '<goodsAvail>' + costOfSales.goodsAvail + '</goodsAvail> \ '
        + '<goodsInvEnd>' + costOfSales.goodsInvEnd + '</goodsInvEnd> \ '
        + '<costSales>' + costOfSales.costSales + '</costSales> \ '
        + '<directMatsBeg>' + costOfSales.directMatsBeg + '</directMatsBeg> \ '
        + '<purDirectMats>' + costOfSales.purDirectMats + '</purDirectMats> \ '
        + '<matsAvail>' + costOfSales.matsAvail + '</matsAvail> \ '
        + '<directMatsEnd>' + costOfSales.directMatsEnd + '</directMatsEnd> \ '
        + '<rawMats>' + costOfSales.rawMats + '</rawMats> \ '
        + '<directLabor>' + costOfSales.directLabor + '</directLabor> \ '
        + '<manufacturingOverhead>' + costOfSales.manufacturingOverhead + '</manufacturingOverhead> \ '
        + '<totalManufacturingCost>' + costOfSales.totalManufacturingCost + '</totalManufacturingCost> \ '
        + '<workInProgressBeg>' + costOfSales.workInProgressBeg + '</workInProgressBeg> \ '
        + '<winProgressEnd>' + costOfSales.winProgressEnd + '</winProgressEnd> \ '
        + '<costGoodsManufactured>' + costOfSales.costGoodsManufactured + '</costGoodsManufactured> \ '
        + '<finishedGoodsBeg>' + costOfSales.finishedGoodsBeg + '</finishedGoodsBeg> \ '
        + '<finishedGoodsEnd>' + costOfSales.finishedGoodsEnd + '</finishedGoodsEnd> \ '
        + '<totalCostGoodsManufacturedAndSold>' + costOfSales.totalCostGoodsManufacturedAndSold + '</totalCostGoodsManufacturedAndSold> \ '
        + '<salaries>' + costOfSales.salaries + '</salaries> \ '
        + '<materials>' + costOfSales.materials + '</materials> \ '
        + '<sched2CDepreciation>' + costOfSales.sched2CDepreciation + '</sched2CDepreciation> \ '
        + '<sched2CRental>' + costOfSales.sched2CRental + '</sched2CRental> \ '
        + '<outsideServ>' + costOfSales.outsideServ + '</outsideServ> \ '
        + '<others>' + costOfSales.others + '</others> \ '
        + '<costService>' + costOfSales.costService + '</costService> \ '
        + '<totalCostSalesAndServices>' + costOfSales.totalCostSalesAndServices + '</totalCostSalesAndServices> \ '
        + '</costOfSales>\ ';

    var costOfSalesSpouseWs = '<costOfSalesSpouse>  \ '
        + '<goodsInvBeg>' + costOfSalesSpouse.goodsInvBeg + '</goodsInvBeg> \ '
        + '<purGoods>' + costOfSalesSpouse.purGoods + '</purGoods> \ '
        + '<goodsAvail>' + costOfSalesSpouse.goodsAvail + '</goodsAvail> \ '
        + '<goodsInvEnd>' + costOfSalesSpouse.goodsInvEnd + '</goodsInvEnd> \ '
        + '<costSales>' + costOfSalesSpouse.costSales + '</costSales> \ '
        + '<directMatsBeg>' + costOfSalesSpouse.directMatsBeg + '</directMatsBeg> \ '
        + '<purDirectMats>' + costOfSalesSpouse.purDirectMats + '</purDirectMats> \ '
        + '<matsAvail>' + costOfSalesSpouse.matsAvail + '</matsAvail> \ '
        + '<directMatsEnd>' + costOfSalesSpouse.directMatsEnd + '</directMatsEnd> \ '
        + '<rawMats>' + costOfSalesSpouse.rawMats + '</rawMats> \ '
        + '<directLabor>' + costOfSalesSpouse.directLabor + '</directLabor> \ '
        + '<manufacturingOverhead>' + costOfSalesSpouse.manufacturingOverhead + '</manufacturingOverhead> \ '
        + '<totalManufacturingCost>' + costOfSalesSpouse.totalManufacturingCost + '</totalManufacturingCost> \ '
        + '<workInProgressBeg>' + costOfSalesSpouse.workInProgressBeg + '</workInProgressBeg> \ '
        + '<winProgressEnd>' + costOfSalesSpouse.winProgressEnd + '</winProgressEnd> \ '
        + '<costGoodsManufactured>' + costOfSalesSpouse.costGoodsManufactured + '</costGoodsManufactured> \ '
        + '<finishedGoodsBeg>' + costOfSalesSpouse.finishedGoodsBeg + '</finishedGoodsBeg> \ '
        + '<finishedGoodsEnd>' + costOfSalesSpouse.finishedGoodsEnd + '</finishedGoodsEnd> \ '
        + '<totalCostGoodsManufacturedAndSold>' + costOfSalesSpouse.totalCostGoodsManufacturedAndSold + '</totalCostGoodsManufacturedAndSold> \ '
        + '<salaries>' + costOfSalesSpouse.salaries + '</salaries> \ '
        + '<materials>' + costOfSalesSpouse.materials + '</materials> \ '
        + '<sched2CDepreciation>' + costOfSalesSpouse.sched2CDepreciation + '</sched2CDepreciation> \ '
        + '<sched2CRental>' + costOfSalesSpouse.sched2CRental + '</sched2CRental> \ '
        + '<outsideServ>' + costOfSalesSpouse.outsideServ + '</outsideServ> \ '
        + '<others>' + costOfSalesSpouse.others + '</others> \ '
        + '<costService>' + costOfSalesSpouse.costService + '</costService> \ '
        + '<totalCostSalesAndServices>' + costOfSalesSpouse.totalCostSalesAndServices + '</totalCostSalesAndServices> \ '
     + '</costOfSalesSpouse> \ ';

    var nonOperatingIncomeWs = '<nonOperatingIncome>\ '
        + '<natureOfIncome></natureOfIncome>\ '
        + '<natureOfIncomeValue></natureOfIncomeValue>\ '
        + '<totalNonOperatingIncome>0</totalNonOperatingIncome>';
    //iter start
    var nonOperatingIncomeListHolder = [];

    for (key in nonOperatingIncomeList) {
        var obj = '<nonOperatingIncome>\ '
		   + '<natureOfIncome>' + nonOperatingIncomeList[key].natureOfIncome + '</natureOfIncome>\ '
		   + '<natureOfIncomeValue>' + nonOperatingIncomeList[key].natureOfIncomeValue + '</natureOfIncomeValue>\ '
		+ '</nonOperatingIncome>';
        nonOperatingIncomeListHolder.push(obj);
    }

    var nonOperatingIncomeobjHolder = "";

    for (key in nonOperatingIncomeListHolder) {
        nonOperatingIncomeobjHolder += nonOperatingIncomeListHolder[key];
        //alert(nonOperatingIncomeobjHolder);
    }

    //iter end
    var nonOperatingIncomeClosing = '</nonOperatingIncome>';

    var nonOperatingIncomeSpouseWS = '<nonOperatingIncomeSpouse>\ '
        + '<natureOfIncome></natureOfIncome>\ '
        + '<natureOfIncomeValue></natureOfIncomeValue>\ '
        + '<totalNonOperatingIncome>0</totalNonOperatingIncome>';
    //iter start
    var nonOperatingIncomeListSpouseHolder = [];

    for (key in nonOperatingIncomeListSpouse) {
        var obj = '<nonOperatingIncome>\ '
		   + '<natureOfIncome>' + nonOperatingIncomeListSpouse[key].natureOfIncome + '</natureOfIncome>\ '
		   + '<natureOfIncomeValue>' + nonOperatingIncomeListSpouse[key].natureOfIncomeValue + '</natureOfIncomeValue>\ '
		+ '</nonOperatingIncome>';
        nonOperatingIncomeListSpouseHolder.push(obj);
    }

    var nonOperatingIncomeSpouseobjHolder = "";

    for (key in nonOperatingIncomeListSpouseHolder) {
        nonOperatingIncomeSpouseobjHolder += nonOperatingIncomeListSpouseHolder[key];
    }

    //iter end
    var nonOperatingIncomeClose = '</nonOperatingIncomeSpouse>';

    var ordinaryAllowableItemizedDeductionWs = '<ordinaryAllowableItemizedDeduction>  \ '
       + '<adAndPromotionsVal>' + ordinaryAllowableItemizedDeduction.adAndPromotionsVal + '</adAndPromotionsVal>  \ '
       + '<amortizatiosDescSecond></amortizatiosDescSecond>  \ '
       + '<amortizatiosDescThird></amortizatiosDescThird>  \ '
       + '<amortizatiosDescFourth></amortizatiosDescFourth>  \ '
       + '<amortizatiosValSecond></amortizatiosValSecond>  \ '
       + '<amortizatiosValThird></amortizatiosValThird>  \ '
       + '<amortizatiosValFourth></amortizatiosValFourth> \ ';
    var listAmortizationsHolder = [];
    for (key in listAmortizations) {
        var obj = '<listAmortizations> \ '
        + '<otherExpandableDesc>' + listAmortizations[key].otherExpandableDesc + '</otherExpandableDesc> \ '
        + '<otherExpandableAmount>' + listAmortizations[key].otherExpandableAmount + '</otherExpandableAmount> \ '
        + '<otherExpandableAmountSpecial></otherExpandableAmountSpecial> \ '
        + '<otherExpandableAmountRegular></otherExpandableAmountRegular> \ '
        + '<otherExpandableAmountTotal>0</otherExpandableAmountTotal> \ '
        + '</listAmortizations>\ ';
        listAmortizationsHolder.push(obj);
    }
    var listAmortizationsObjectHolder = "";
    for (key in listAmortizationsHolder) {
        listAmortizationsObjectHolder += listAmortizationsHolder[key];
    }
    var badDebtsToTravel =
    	'<badDebts>' + ordinaryAllowableItemizedDeduction.badDebts + '</badDebts> \ '
    	+ '<charitableContributions>' + ordinaryAllowableItemizedDeduction.charitableContributions + '</charitableContributions> \ '
    	+ '<commissions>' + ordinaryAllowableItemizedDeduction.commissions + '</commissions> \ '
    	+ '<communicationLightWater>' + ordinaryAllowableItemizedDeduction.communicationLightWater + '</communicationLightWater> \ '
    	+ '<utilities>' + ordinaryAllowableItemizedDeduction.utilities + '</utilities> \ '
    	+ '<depletion>' + ordinaryAllowableItemizedDeduction.depletion + '</depletion> \ '
    	+ '<depreciation>' + ordinaryAllowableItemizedDeduction.depreciation + '</depreciation> \ '
    	+ '<directorFee>' + ordinaryAllowableItemizedDeduction.directorFee + '</directorFee> \ '
    	+ '<fringeBenefits>' + ordinaryAllowableItemizedDeduction.fringeBenefits + '</fringeBenefits> \ '
    	+ '<fuelAndOil>' + ordinaryAllowableItemizedDeduction.fuelAndOil + '</fuelAndOil> \ '
    	+ '<insurance>' + ordinaryAllowableItemizedDeduction.insurance + '</insurance> \ '
    	+ '<iterest>' + ordinaryAllowableItemizedDeduction.iterest + '</iterest> \ '
    	+ '<janitorialAndMessengerial>' + ordinaryAllowableItemizedDeduction.janitorialAndMessengerial + '</janitorialAndMessengerial> \ '
    	+ '<losses>' + ordinaryAllowableItemizedDeduction.losses + '</losses> \ '
    	+ '<mgmtAndConsultancyFee>' + ordinaryAllowableItemizedDeduction.mgmtAndConsultancyFee + '</mgmtAndConsultancyFee> \ '
    	+ '<misc>' + ordinaryAllowableItemizedDeduction.misc + '</misc> \ '
    	+ '<officeSupplies>' + ordinaryAllowableItemizedDeduction.officeSupplies + '</officeSupplies> \ '
    	+ '<otherServices>' + ordinaryAllowableItemizedDeduction.otherServices + '</otherServices> \ '
    	+ '<professionalFees>' + ordinaryAllowableItemizedDeduction.professionalFees + '</professionalFees> \ '
    	+ '<schedGRental>' + ordinaryAllowableItemizedDeduction.schedGRental + '</schedGRental> \ '
    	+ '<repairLabor>' + ordinaryAllowableItemizedDeduction.repairLabor + '</repairLabor> \ '
    	+ '<repairMaterials>' + ordinaryAllowableItemizedDeduction.repairMaterials + '</repairMaterials> \ '
    	+ '<entertainment>' + ordinaryAllowableItemizedDeduction.entertainment + '</entertainment> \ '
    	+ '<researchAndDev>' + ordinaryAllowableItemizedDeduction.researchAndDev + '</researchAndDev> \ '
    	+ '<royalties>' + ordinaryAllowableItemizedDeduction.royalties + '</royalties> \ '
    	+ '<salariesAndAllownces>' + ordinaryAllowableItemizedDeduction.salariesAndAllownces + '</salariesAndAllownces> \ '
    	+ '<securityServices>' + ordinaryAllowableItemizedDeduction.securityServices + '</securityServices> \ '
    	+ '<otherContributions>' + ordinaryAllowableItemizedDeduction.otherContributions + '</otherContributions> \ '
    	+ '<taxesAndLiscenses>' + ordinaryAllowableItemizedDeduction.taxesAndLiscenses + '</taxesAndLiscenses> \ '
    	+ '<tollingFees>' + ordinaryAllowableItemizedDeduction.tollingFees + '</tollingFees> \ '
    	+ '<trainingsAndSeminars>' + ordinaryAllowableItemizedDeduction.trainingsAndSeminars + '</trainingsAndSeminars> \ '
    	+ '<travelTransportaion>' + ordinaryAllowableItemizedDeduction.travelTransportaion + '</travelTransportaion>';

    var ordinaryOtherAlllowableItemizedDeduction =
    	'<othersFirstDescFirst>' + '</othersFirstDescFirst>\ '
    	+ '<othersFirstDescSecond>' + '</othersFirstDescSecond>\ '
    	+ '<othersFirstDescThird>' + '</othersFirstDescThird>\ '
    	+ '<othersFirstDescfourth>' + '</othersFirstDescfourth>\ '
    	+ '<otherFirstValue>' + '</otherFirstValue>\ '
    	+ '<otherSecondValue>' + '</otherSecondValue>\ '
    	+ '<otherThirdValue>' + '</otherThirdValue>\ '
    	+ '<otherFourthValue>' + '</otherFourthValue>';

    var listOtherOrdinaryItemizedDeductionsHolder = [];
    for (key in listOtherOrdinaryItemizedDeductions) {
        var obj =
            '<listOtherOrdinaryItemizedDeductions>\ '
            + '<otherExpandableDesc>' + listOtherOrdinaryItemizedDeductions[key].otherExpandableDesc + '</otherExpandableDesc>\ '
            + '<otherExpandableAmount>' + listOtherOrdinaryItemizedDeductions[key].otherExpandableAmount + '</otherExpandableAmount>\ '
            + '<otherExpandableAmountSpecial>' + listOtherOrdinaryItemizedDeductions[key].otherExpandableAmountSpecial + '1' + '</otherExpandableAmountSpecial>\ '
            + '<otherExpandableAmountRegular>' + listOtherOrdinaryItemizedDeductions[key].otherExpandableAmountRegular + '2' + '</otherExpandableAmountRegular>\ '
            + '<otherExpandableAmountTotal>' + listOtherOrdinaryItemizedDeductions[key].otherExpandableAmountTotal + '3' + '</otherExpandableAmountTotal>\ '
            + '</listOtherOrdinaryItemizedDeductions>';
        listOtherOrdinaryItemizedDeductionsHolder.push(obj);
    }

    var listOtherOrdinaryItemizedDeductionsObjectHolder = "";
    for (key in listOtherOrdinaryItemizedDeductionsHolder) {
        listOtherOrdinaryItemizedDeductionsObjectHolder += listOtherOrdinaryItemizedDeductionsHolder[key];
    }

    var closingOrdinaryOtherAlllowableItemizedDeduction =
    	'<totalOrdinaryAllowableItemizedDeductions>' + ordinaryAllowableItemizedDeduction.totalOrdinaryAllowableItemizedDeductions + '</totalOrdinaryAllowableItemizedDeductions>\ '
    	+ '</ordinaryAllowableItemizedDeduction>';

    var ordinaryAllowableItemizedDeductionSpouseWs = '<ordinaryAllowableItemizedDeductionSpouse>\ '
        + '<adAndPromotionsVal>' + ordinaryAllowableItemizedDeductionSpouse.adAndPromotionsVal + '</adAndPromotionsVal>\ '
        + '<amortizatiosDescSecond></amortizatiosDescSecond>\ '
        + '<amortizatiosDescThird></amortizatiosDescThird>\ '
        + '<amortizatiosDescFourth></amortizatiosDescFourth>\ '
        + '<amortizatiosValSecond></amortizatiosValSecond>\ '
        + '<amortizatiosValThird></amortizatiosValThird>\ '
        + '<amortizatiosValFourth></amortizatiosValFourth>';

    var listAmortizationsHolderSpouse = [];
    for (key in listAmortizationsSpouse) {
        var obj = '<listAmortizations>\ '
            + '<otherExpandableDesc>' + listAmortizationsSpouse[key].otherExpandableDesc + '</otherExpandableDesc>\ '
            + '<otherExpandableAmount>' + listAmortizationsSpouse[key].otherExpandableAmount + '</otherExpandableAmount>\ '
            + '<otherExpandableAmountSpecial></otherExpandableAmountSpecial>\ '
            + '<otherExpandableAmountRegular></otherExpandableAmountRegular>\ '
            + '<otherExpandableAmountTotal></otherExpandableAmountTotal>\ '
        + '</listAmortizations>';
        listAmortizationsHolderSpouse.push(obj);
    }

    var listAmortizationsObjectHolderSpouse = "";
    for (key in listAmortizationsHolderSpouse) {
        listAmortizationsObjectHolderSpouse += listAmortizationsHolderSpouse[key];
    }

    var badDebtsToTraveSpousel =
        '<badDebts>' + ordinaryAllowableItemizedDeductionSpouse.badDebts + '</badDebts>\ '
        + '<charitableContributions>' + ordinaryAllowableItemizedDeductionSpouse.charitableContributions + '</charitableContributions>\ '
        + '<commissions>' + ordinaryAllowableItemizedDeductionSpouse.commissions + '</commissions>\ '
        + '<communicationLightWater>' + ordinaryAllowableItemizedDeductionSpouse.communicationLightWater + '</communicationLightWater>\ '
        + '<utilities>' + ordinaryAllowableItemizedDeductionSpouse.utilities + '</utilities>\ '
        + '<depletion>' + ordinaryAllowableItemizedDeductionSpouse.depletion + '</depletion>\ '
        + '<depreciation>' + ordinaryAllowableItemizedDeductionSpouse.depreciation + '</depreciation>\ '
        + '<directorFee>' + ordinaryAllowableItemizedDeductionSpouse.directorFee + '</directorFee>\ '
        + '<fringeBenefits>' + ordinaryAllowableItemizedDeductionSpouse.fringeBenefits + '</fringeBenefits>\ '
        + '<fuelAndOil>' + ordinaryAllowableItemizedDeductionSpouse.fuelAndOil + '</fuelAndOil>\ '
        + '<insurance>' + ordinaryAllowableItemizedDeductionSpouse.insurance + '</insurance>\ '
        + '<iterest>' + ordinaryAllowableItemizedDeductionSpouse.iterest + '</iterest>\ '
        + '<janitorialAndMessengerial>' + ordinaryAllowableItemizedDeductionSpouse.janitorialAndMessengerial + '</janitorialAndMessengerial>\ '
        + '<losses>' + ordinaryAllowableItemizedDeductionSpouse.losses + '</losses>\ '
        + '<mgmtAndConsultancyFee>' + ordinaryAllowableItemizedDeductionSpouse.mgmtAndConsultancyFee + '</mgmtAndConsultancyFee>\ '
        + '<misc>' + ordinaryAllowableItemizedDeductionSpouse.misc + '</misc>\ '
        + '<officeSupplies>' + ordinaryAllowableItemizedDeductionSpouse.officeSupplies + '</officeSupplies>\ '
        + '<otherServices>' + ordinaryAllowableItemizedDeductionSpouse.otherServices + '</otherServices>\ '
        + '<professionalFees>' + ordinaryAllowableItemizedDeductionSpouse.professionalFees + '</professionalFees>\ '
        + '<schedGRental>' + ordinaryAllowableItemizedDeductionSpouse.schedGRental + '</schedGRental>\ '
        + '<repairLabor>' + ordinaryAllowableItemizedDeductionSpouse.repairLabor + '</repairLabor>\ '
        + '<repairMaterials>' + ordinaryAllowableItemizedDeductionSpouse.repairMaterials + '</repairMaterials>\ '
        + '<entertainment>' + ordinaryAllowableItemizedDeductionSpouse.entertainment + '</entertainment>\ '
        + '<researchAndDev>' + ordinaryAllowableItemizedDeductionSpouse.researchAndDev + '</researchAndDev>\ '
        + '<royalties>' + ordinaryAllowableItemizedDeductionSpouse.royalties + '</royalties>\ '
        + '<salariesAndAllownces>' + ordinaryAllowableItemizedDeductionSpouse.salariesAndAllownces + '</salariesAndAllownces>\ '
        + '<securityServices>' + ordinaryAllowableItemizedDeductionSpouse.securityServices + '</securityServices>\ '
        + '<otherContributions>' + ordinaryAllowableItemizedDeductionSpouse.otherContributions + '</otherContributions>\ '
        + '<taxesAndLiscenses>' + ordinaryAllowableItemizedDeductionSpouse.taxesAndLiscenses + '</taxesAndLiscenses>\ '
        + '<tollingFees>' + ordinaryAllowableItemizedDeductionSpouse.tollingFees + '</tollingFees>\ '
        + '<trainingsAndSeminars>' + ordinaryAllowableItemizedDeductionSpouse.trainingsAndSeminars + '</trainingsAndSeminars>\ '
        + '<travelTransportaion>' + ordinaryAllowableItemizedDeductionSpouse.travelTransportaion + '</travelTransportaion>';

    var ordinaryOtherAlllowableItemizedDeductionSpouse =
        '<othersFirstDescFirst></othersFirstDescFirst>\ '
        + '<othersFirstDescSecond></othersFirstDescSecond>\ '
        + '<othersFirstDescThird></othersFirstDescThird>\ '
        + '<othersFirstDescfourth></othersFirstDescfourth>\ '
        + '<otherFirstValue></otherFirstValue>\ '
        + '<otherSecondValue></otherSecondValue>\ '
        + '<otherThirdValue></otherThirdValue>\ '
        + '<otherFourthValue></otherFourthValue>';

    var listOtherOrdinaryItemizedDeductionsHolderSpouse = [];
    for (key in listOtherOrdinaryItemizedDeductionsSpouse) {
        var obj =
            '<listOtherOrdinaryItemizedDeductions>\ '
            + '<otherExpandableDesc>' + listOtherOrdinaryItemizedDeductionsSpouse[key].otherExpandableDesc + '</otherExpandableDesc> \ '
            + '<otherExpandableAmount>' + listOtherOrdinaryItemizedDeductionsSpouse[key].otherExpandableAmount + '</otherExpandableAmount> \ '
            + '<otherExpandableAmountSpecial>' + listOtherOrdinaryItemizedDeductionsSpouse[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial> \ '
            + '<otherExpandableAmountRegular>' + listOtherOrdinaryItemizedDeductionsSpouse[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular> \ '
            + '<otherExpandableAmountTotal>' + listOtherOrdinaryItemizedDeductionsSpouse[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal> \ '
            + '</listOtherOrdinaryItemizedDeductions>';

        listOtherOrdinaryItemizedDeductionsHolderSpouse.push(obj);
    }

    var listOtherOrdinaryItemizedDeductionsObjectHolderSpouse = "";
    for (key in listOtherOrdinaryItemizedDeductionsHolderSpouse) {
        listOtherOrdinaryItemizedDeductionsObjectHolderSpouse += listOtherOrdinaryItemizedDeductionsHolderSpouse[key];
    }

    var closingOrdinaryOtherAlllowableItemizedDeductionSpouse =
        '<totalOrdinaryAllowableItemizedDeductions>' + ordinaryAllowableItemizedDeductionSpouse.totalOrdinaryAllowableItemizedDeductions + '</totalOrdinaryAllowableItemizedDeductions>'
        + '</ordinaryAllowableItemizedDeductionSpouse>';


    var specialAllowableItemizedDeductionWs =
        '<SpecialAllowableItemizedDeduction> \ '
        + '<specialAllowableItemizedDeductionsDescription1></specialAllowableItemizedDeductionsDescription1> \ '
        + '<specialAllowableItemizedDeductionsDescription2></specialAllowableItemizedDeductionsDescription2> \ '
        + '<specialAllowableItemizedDeductionsDescription3></specialAllowableItemizedDeductionsDescription3> \ '
        + '<specialAllowableItemizedDeductionsDescription4></specialAllowableItemizedDeductionsDescription4> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis1></specialAllowableItemizedDeductionsLegalBasis1> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis2></specialAllowableItemizedDeductionsLegalBasis2> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis3></specialAllowableItemizedDeductionsLegalBasis3> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis4></specialAllowableItemizedDeductionsLegalBasis4> \ '
        + '<specialAllowableItemizedDeductionsAmount1></specialAllowableItemizedDeductionsAmount1> \ '
        + '<specialAllowableItemizedDeductionsAmount2></specialAllowableItemizedDeductionsAmount2> \ '
        + '<specialAllowableItemizedDeductionsAmount3></specialAllowableItemizedDeductionsAmount3> \ '
        + '<specialAllowableItemizedDeductionsAmount4></specialAllowableItemizedDeductionsAmount4> \ '
        + '<totalSpecialAllowableItemizedDeductions>0</totalSpecialAllowableItemizedDeductions>';

    var listSpecialAllowableItemizedDeductionHolder = [];
    for (key in listSpecialAllowableItemizedDeduction) {
        var obj = '<listSched5AdditionalAttachments>'
        + '<otherExpandableDesc>' + listSpecialAllowableItemizedDeduction[key].otherExpandableDesc + '</otherExpandableDesc> \ '
                + '<otherExpandableAmount>' + listSpecialAllowableItemizedDeduction[key].otherExpandableAmount + '</otherExpandableAmount> \ '
                + '<otherExpandableAmountSpecial>' + listSpecialAllowableItemizedDeduction[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial> \ '
                + '<otherExpandableAmountRegular>' + listSpecialAllowableItemizedDeduction[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular> \ '
                + '<otherExpandableAmountTotal>' + listSpecialAllowableItemizedDeduction[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal> \ '
                + '<legalBasis>' + listSpecialAllowableItemizedDeduction[key].legalBasis + '</legalBasis> \ '
                + '<description></description> \ '
                + '<value></value>\ '
                + '</listSched5AdditionalAttachments>';
        listSpecialAllowableItemizedDeductionHolder.push(obj);
    }

    var listSpecialAllowableItemizedDeductionObjectHolder = "";
    for (key in listSpecialAllowableItemizedDeductionHolder) {
        listSpecialAllowableItemizedDeductionObjectHolder += listSpecialAllowableItemizedDeductionHolder[key];
    }

    var closingSpecialAllowableItemizedDeductionWs =
        '</SpecialAllowableItemizedDeduction> \ ';


    var specialAllowableItemizedDeductionSpouseWs =
        '<SpecialAllowableItemizedDeductionSpouse>\ '
        + '<specialAllowableItemizedDeductionsDescription1></specialAllowableItemizedDeductionsDescription1>\ '
        + '<specialAllowableItemizedDeductionsDescription2></specialAllowableItemizedDeductionsDescription2>\ '
        + '<specialAllowableItemizedDeductionsDescription3></specialAllowableItemizedDeductionsDescription3>\ '
        + '<specialAllowableItemizedDeductionsDescription4></specialAllowableItemizedDeductionsDescription4>\ '
        + '<specialAllowableItemizedDeductionsLegalBasis1></specialAllowableItemizedDeductionsLegalBasis1>\ '
        + '<specialAllowableItemizedDeductionsLegalBasis2></specialAllowableItemizedDeductionsLegalBasis2>\ '
        + '<specialAllowableItemizedDeductionsLegalBasis3></specialAllowableItemizedDeductionsLegalBasis3>\ '
        + '<specialAllowableItemizedDeductionsLegalBasis4></specialAllowableItemizedDeductionsLegalBasis4>\ '
        + '<specialAllowableItemizedDeductionsAmount1></specialAllowableItemizedDeductionsAmount1>\ '
        + '<specialAllowableItemizedDeductionsAmount2></specialAllowableItemizedDeductionsAmount2>\ '
        + '<specialAllowableItemizedDeductionsAmount3></specialAllowableItemizedDeductionsAmount3>\ '
        + '<specialAllowableItemizedDeductionsAmount4></specialAllowableItemizedDeductionsAmount4>\ '
        + '<totalSpecialAllowableItemizedDeductions>0</totalSpecialAllowableItemizedDeductions>';

    var listSpecialAllowableItemizedDeductionSpouseHolder = [];
    for (key in listSpecialAllowableItemizedDeductionSpouse) {
        var obj = '<listSched5AdditionalAttachments>\ '
        + '<otherExpandableDesc>' + listSpecialAllowableItemizedDeductionSpouse[key].otherExpandableDesc + '</otherExpandableDesc>\ '
                + '<otherExpandableAmount>' + listSpecialAllowableItemizedDeductionSpouse[key].otherExpandableAmount + '</otherExpandableAmount>\ '
                + '<otherExpandableAmountSpecial>' + listSpecialAllowableItemizedDeductionSpouse[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>\ '
                + '<otherExpandableAmountRegular>' + listSpecialAllowableItemizedDeductionSpouse[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>\ '
                + '<otherExpandableAmountTotal>' + listSpecialAllowableItemizedDeductionSpouse[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>\ '
                + '<legalBasis>' + listSpecialAllowableItemizedDeductionSpouse[key].legalBasis + '</legalBasis>\ '
                + '<description></description>\ '
                + '<value></value>\ '
                + '</listSched5AdditionalAttachments>';
        listSpecialAllowableItemizedDeductionSpouseHolder.push(obj);
    }

    var listSpecialAllowableItemizedDeductionObjectSpouseHolder = "";
    for (key in listSpecialAllowableItemizedDeductionSpouseHolder) {
        listSpecialAllowableItemizedDeductionObjectSpouseHolder += listSpecialAllowableItemizedDeductionSpouseHolder[key];
    }

    var closingSpecialAllowableItemizedDeductionSpouseWs = '</SpecialAllowableItemizedDeductionSpouse>';

    var ComputationOfNetOperatingLossWs = '<ComputationOfNetOperatingLoss>'
            + '<grossIncome>' + computationOfGrossIncome.grossIncome + '</grossIncome>'
            + '<lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw>' + computationOfGrossIncome.lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw + '</lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw>'
            + '<netOperatingLoss>' + computationOfGrossIncome.netOperatingLoss + '</netOperatingLoss>';

    var listDetailedComputationOfGrossIncomeHolder = [];
    for (key in listDetailedComputationOfGrossIncome) {
        var obj =
			'<listSched6OperatingLoss>'
		+ '<sequenceNumber>' + listDetailedComputationOfGrossIncome[key].sequenceNumber + '</sequenceNumber>'
			  + ' <year>' + listDetailedComputationOfGrossIncome[key].year + '</year>'
			  + ' <amount>' + listDetailedComputationOfGrossIncome[key].amount + '</amount>'
			  + ' <nolcoAppliedPreviousYear>' + listDetailedComputationOfGrossIncome[key].nolcoAppliedPreviousYear + '</nolcoAppliedPreviousYear>'
			  + ' <nolcoExpired>' + listDetailedComputationOfGrossIncome[key].nolcoExpired + '</nolcoExpired>'
			  + ' <nolcoAppliedCurrentYear>' + listDetailedComputationOfGrossIncome[key].nolcoAppliedCurrentYear + '</nolcoAppliedCurrentYear>'
			+ '</listSched6OperatingLoss>';
        listDetailedComputationOfGrossIncomeHolder.push(obj)
    }
    var listDetailedComputationOfGrossIncomeObjectHolder = "";

    for (key in listDetailedComputationOfGrossIncomeHolder) {
        listDetailedComputationOfGrossIncomeObjectHolder += listDetailedComputationOfGrossIncomeHolder[key];
    }
    var continueComputationOfNetOperatingLossWs =
		'<netOperatingLossYearIncurred1>' + 0 + '</netOperatingLossYearIncurred1>'
		+ '<netOperatingLossYearIncurred2>' + 0 + '</netOperatingLossYearIncurred2>'
		+ '<netOperatingLossYearIncurred3>' + 0 + '</netOperatingLossYearIncurred3>'
		+ '<netOperatingLossYearIncurred4>' + 0 + '</netOperatingLossYearIncurred4>'
		+ '<netOperatingLossAmount1>' + 0 + '</netOperatingLossAmount1>'
		+ '<netOperatingLossAmount2>' + 0 + '</netOperatingLossAmount2>'
		+ '<netOperatingLossAmount3>' + 0 + '</netOperatingLossAmount3>'
		+ '<netOperatingLossAmount4>' + 0 + '</netOperatingLossAmount4>'
		+ '<NOLCOAppliedPreviousYear1>' + 0 + '</NOLCOAppliedPreviousYear1>'
		+ '<NOLCOAppliedPreviousYear2>' + 0 + '</NOLCOAppliedPreviousYear2>'
		+ '<NOLCOAppliedPreviousYear3>' + 0 + '</NOLCOAppliedPreviousYear3>'
		+ '<NOLCOAppliedPreviousYear4>' + 0 + '</NOLCOAppliedPreviousYear4>'
		+ '<NOLCOExpired1>' + 0 + '</NOLCOExpired1>'
		+ '<NOLCOExpired2>' + 0 + '</NOLCOExpired2>'
		+ '<NOLCOExpired3>' + 0 + '</NOLCOExpired3>'
		+ '<NOLCOExpired4>' + 0 + '</NOLCOExpired4>'
		+ '<NOLCOAppliedCurrentYear1>' + 0 + '</NOLCOAppliedCurrentYear1>'
		+ '<NOLCOAppliedCurrentYear2>' + 0 + '</NOLCOAppliedCurrentYear2>'
		+ '<NOLCOAppliedCurrentYear3>' + 0 + '</NOLCOAppliedCurrentYear3>'
		+ '<NOLCOAppliedCurrentYear4>' + 0 + '</NOLCOAppliedCurrentYear4>'
		+ '<netOperatingLossUnapplied1>' + 0 + '</netOperatingLossUnapplied1>'
		+ '<netOperatingLossUnapplied2>' + 0 + '</netOperatingLossUnapplied2>'
		+ '<netOperatingLossUnapplied3>' + 0 + '</netOperatingLossUnapplied3>'
		+ '<netOperatingLossUnapplied4>' + 0 + '</netOperatingLossUnapplied4>'
		+ '<totalNOLCO>' + computationOfGrossIncome.total + '</totalNOLCO>'
		+ '</ComputationOfNetOperatingLoss>';


    var ComputationOfNetOperatingLossSpouseWs = '<ComputationOfNetOperatingLossSpouse>'
        + '<grossIncome>' + computationOfGrossIncomeSpouse.grossIncome + '</grossIncome>'
        + '<lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw>' + computationOfGrossIncomeSpouse.lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw + '</lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw>'
        + '<netOperatingLoss>' + computationOfGrossIncomeSpouse.netOperatingLoss + '</netOperatingLoss>'

    var listDetailedComputationOfGrossIncomeHolderSpouse = [];
    for (key in listDetailedComputationOfGrossIncomeSpouse) {
        var obj =
			'<listSched6OperatingLoss>'
		+ '<sequenceNumber>' + listDetailedComputationOfGrossIncomeSpouse[key].sequenceNumber + '</sequenceNumber>'
			  + ' <year>' + listDetailedComputationOfGrossIncomeSpouse[key].year + '</year>'
			  + ' <amount>' + listDetailedComputationOfGrossIncomeSpouse[key].amount + '</amount>'
			  + ' <nolcoAppliedPreviousYear>' + listDetailedComputationOfGrossIncomeSpouse[key].nolcoAppliedPreviousYear + '</nolcoAppliedPreviousYear>'
			  + ' <nolcoExpired>' + listDetailedComputationOfGrossIncomeSpouse[key].nolcoExpired + '</nolcoExpired>'
			  + ' <nolcoAppliedCurrentYear>' + listDetailedComputationOfGrossIncomeSpouse[key].nolcoAppliedCurrentYear + '</nolcoAppliedCurrentYear>'
			+ '</listSched6OperatingLoss>';
        listDetailedComputationOfGrossIncomeHolderSpouse.push(obj)
    }
    var listDetailedComputationOfGrossIncomeObjectHolderSpouse = "";

    for (key in listDetailedComputationOfGrossIncomeHolderSpouse) {
        listDetailedComputationOfGrossIncomeObjectHolderSpouse += listDetailedComputationOfGrossIncomeHolderSpouse[key];
    }
    var continueComputationOfNetOperatingLossWsSpouse =
		'<netOperatingLossYearIncurred1>' + 0 + '</netOperatingLossYearIncurred1>'
		+ '<netOperatingLossYearIncurred2>' + 0 + '</netOperatingLossYearIncurred2>'
		+ '<netOperatingLossYearIncurred3>' + 0 + '</netOperatingLossYearIncurred3>'
		+ '<netOperatingLossYearIncurred4>' + 0 + '</netOperatingLossYearIncurred4>'
		+ '<netOperatingLossAmount1>' + 0 + '</netOperatingLossAmount1>'
		+ '<netOperatingLossAmount2>' + 0 + '</netOperatingLossAmount2>'
		+ '<netOperatingLossAmount3>' + 0 + '</netOperatingLossAmount3>'
		+ '<netOperatingLossAmount4>' + 0 + '</netOperatingLossAmount4>'
		+ '<NOLCOAppliedPreviousYear1>' + 0 + '</NOLCOAppliedPreviousYear1>'
		+ '<NOLCOAppliedPreviousYear2>' + 0 + '</NOLCOAppliedPreviousYear2>'
		+ '<NOLCOAppliedPreviousYear3>' + 0 + '</NOLCOAppliedPreviousYear3>'
		+ '<NOLCOAppliedPreviousYear4>' + 0 + '</NOLCOAppliedPreviousYear4>'
		+ '<NOLCOExpired1>' + 0 + '</NOLCOExpired1>'
		+ '<NOLCOExpired2>' + 0 + '</NOLCOExpired2>'
		+ '<NOLCOExpired3>' + 0 + '</NOLCOExpired3>'
		+ '<NOLCOExpired4>' + 0 + '</NOLCOExpired4>'
		+ '<NOLCOAppliedCurrentYear1>' + 0 + '</NOLCOAppliedCurrentYear1>'
		+ '<NOLCOAppliedCurrentYear2>' + 0 + '</NOLCOAppliedCurrentYear2>'
		+ '<NOLCOAppliedCurrentYear3>' + 0 + '</NOLCOAppliedCurrentYear3>'
		+ '<NOLCOAppliedCurrentYear4>' + 0 + '</NOLCOAppliedCurrentYear4>'
		+ '<netOperatingLossUnapplied1>' + 0 + '</netOperatingLossUnapplied1>'
		+ '<netOperatingLossUnapplied2>' + 0 + '</netOperatingLossUnapplied2>'
		+ '<netOperatingLossUnapplied3>' + 0 + '</netOperatingLossUnapplied3>'
		+ '<netOperatingLossUnapplied4>' + 0 + '</netOperatingLossUnapplied4>'
	+ '<totalNOLCO>' + computationOfGrossIncomeSpouse.total + '</totalNOLCO>'
	+ '</ComputationOfNetOperatingLossSpouse>';

    var taxCreditPaymentsWs = '<taxCreditPayments>'
    + '<priorYearsExcessCredits>' + taxCreditsPayments.priorYearsExcessCredits + '</priorYearsExcessCredits>                \ '
    + '<taxPaymentsfortheFirstQuarters>' + taxCreditsPayments.taxPaymentsfortheFirstQuarters + '</taxPaymentsfortheFirstQuarters>                \ '
    + '<creditableTaxWithheldfortheFirstThreeQuarters>' + taxCreditsPayments.creditableTaxWithheldfortheFirstThreeQuarters + '</creditableTaxWithheldfortheFirstThreeQuarters>                \ '
    + '<creditableTaxWithheldfortheFirst4thQuarters>' + taxCreditsPayments.creditableTaxWithheldfortheFirst4thQuarters + '</creditableTaxWithheldfortheFirst4thQuarters>                \ '
    + '<taxPaidinReturnPreviouslyFiled>' + taxCreditsPayments.taxPaidinReturnPreviouslyFiled + '</taxPaidinReturnPreviouslyFiled>                \ '
    + '<foreignTaxCredits>' + taxCreditsPayments.foreignTaxCredits + '</foreignTaxCredits>                \ '
    + '<SpecialTaxCredits>' + taxCreditsPayments.SpecialTaxCredits + '</SpecialTaxCredits>                \ '
    + '<otherPaymentsDescription>' + taxCreditsPayments.otherPaymentsDescription + '</otherPaymentsDescription>                \ '
    + '<otherPaymentsCreditsSpecify>' + taxCreditsPayments.otherPaymentsCreditsSpecify + '</otherPaymentsCreditsSpecify>                \ '
    + '<totalTaxCreditsPayments>' + taxCreditsPayments.totalTaxCreditsPayments + '</totalTaxCreditsPayments>                \ '
    + '<creditableTaxWithheld2316>' + taxCreditsPayments.creditableTaxWithheld2316 + '</creditableTaxWithheld2316> \ '
    + '</taxCreditPayments> \ ';

    var taxCreditPaymentsWsSpouse = ' <taxCreditPaymentsSpouse> \ '
         + '<priorYearsExcessCredits>' + taxCreditsPaymentsSpouse.priorYearsExcessCredits + '</priorYearsExcessCredits>                \ '
         + '<taxPaymentsfortheFirstQuarters>' + taxCreditsPaymentsSpouse.taxPaymentsfortheFirstQuarters + '</taxPaymentsfortheFirstQuarters>                \ '
         + '<creditableTaxWithheldfortheFirstThreeQuarters>' + taxCreditsPaymentsSpouse.creditableTaxWithheldfortheFirstThreeQuarters + '</creditableTaxWithheldfortheFirstThreeQuarters>                \ '
         + '<creditableTaxWithheldfortheFirst4thQuarters>' + taxCreditsPaymentsSpouse.creditableTaxWithheldfortheFirst4thQuarters + '</creditableTaxWithheldfortheFirst4thQuarters>                \ '
         + '<taxPaidinReturnPreviouslyFiled>' + taxCreditsPaymentsSpouse.taxPaidinReturnPreviouslyFiled + '</taxPaidinReturnPreviouslyFiled>                \ '
         + '<foreignTaxCredits>' + taxCreditsPaymentsSpouse.foreignTaxCredits + '</foreignTaxCredits>                \ '
         + '<SpecialTaxCredits>' + taxCreditsPaymentsSpouse.SpecialTaxCredits + '</SpecialTaxCredits>                \ '
         + '<otherPaymentsDescription>' + taxCreditsPaymentsSpouse.otherPaymentsDescription + '</otherPaymentsDescription>                \ '
         + '<otherPaymentsCreditsSpecify>' + taxCreditsPaymentsSpouse.otherPaymentsCreditsSpecify + '</otherPaymentsCreditsSpecify>                \ '
         + '<totalTaxCreditsPayments>' + taxCreditsPaymentsSpouse.totalTaxCreditsPayments + '</totalTaxCreditsPayments>                \ '
         + '<creditableTaxWithheld2316>' + taxCreditsPaymentsSpouse.creditableTaxWithheld2316 + '</creditableTaxWithheld2316> \ '
         + '</taxCreditPaymentsSpouse> \ ';


    var balanceSheetWs = '<balanceSheet> \ '
        + '<currentAssests>' + balanceSheet.currentAssests + '</currentAssests> \ '
        + '<longTermInvestment>' + balanceSheet.longTermInvestment + '</longTermInvestment> \ '
        + '<propertyPlantEquipmentNet>' + balanceSheet.propertyPlantEquipmentNet + '</propertyPlantEquipmentNet> \ '
        + '<longTermReceivables>' + balanceSheet.longTermReceivables + '</longTermReceivables> \ '
        + '<intangibleAssets>' + balanceSheet.intangibleAssets + '</intangibleAssets> \ '
        + '<otherAssets>' + balanceSheet.otherAssets + '</otherAssets> \ '
        + '<totalAssets>' + balanceSheet.totalAssets + '</totalAssets> \ '
        + '<currentLiabilities>' + balanceSheet.currentLiabilities + '</currentLiabilities> \ '
        + '<longTermLiabilities>' + balanceSheet.longTermLiabilities + '</longTermLiabilities> \ '
        + '<deferedCredits>' + balanceSheet.deferedCredits + '</deferedCredits> \ '
        + '<otherLiabilities>' + balanceSheet.otherLiabilities + '</otherLiabilities> \ '
        + '<totalLiabilities>' + balanceSheet.totalLiabilities + '</totalLiabilities> \ '
        + '<capitalStock>' + balanceSheet.capitalStock + '</capitalStock> \ '
        + '<additionalPaidInCapital>' + balanceSheet.additionalPaidInCapital + '</additionalPaidInCapital> \ '
        + '<retainedEarnings>' + balanceSheet.retainedEarnings + '</retainedEarnings> \ '
        + '<totalEquity>' + balanceSheet.totalEquity + '</totalEquity> \ '
        + '<totalLiabilitiesEquity>' + balanceSheet.totalLiabilitiesEquity + '</totalLiabilitiesEquity> \ '
        + '<beginningCapital>' + balanceSheet.beginningCapital + '</beginningCapital> \ '
        + '<netIncomeForTheYear>' + balanceSheet.netIncomeForTheYear + '</netIncomeForTheYear> \ '
        + '<drawings>' + balanceSheet.drawings + '</drawings> \ '
        + '<endingCapital>' + balanceSheet.endingCapital + '</endingCapital> \ '
        + '<totalLiabilitiesAndCapital>' + balanceSheet.totalLiabilitiesAndCapital + '</totalLiabilitiesAndCapital> \ '
     + '</balanceSheet>\ ';

    var balanceSheetWsSpouse = '<balanceSheetSpouse>\ '
        + '<currentAssests>' + balanceSheetSpouse.currentAssests + '</currentAssests>\ '
           + '<longTermInvestment>' + balanceSheetSpouse.longTermInvestment + '</longTermInvestment>\ '
           + '<propertyPlantEquipmentNet>' + balanceSheetSpouse.propertyPlantEquipmentNet + '</propertyPlantEquipmentNet>\ '
           + '<longTermReceivables>' + balanceSheetSpouse.longTermReceivables + '</longTermReceivables>\ '
           + '<intangibleAssets>' + balanceSheetSpouse.intangibleAssets + '</intangibleAssets>\ '
           + '<otherAssets>' + balanceSheetSpouse.otherAssets + '</otherAssets>\ '
           + '<totalAssets>' + balanceSheetSpouse.totalAssets + '</totalAssets>\ '
           + '<currentLiabilities>' + balanceSheetSpouse.currentLiabilities + '</currentLiabilities>\ '
           + '<longTermLiabilities>' + balanceSheetSpouse.longTermLiabilities + '</longTermLiabilities>\ '
           + '<deferedCredits>' + balanceSheetSpouse.deferedCredits + '</deferedCredits>\ '
           + '<otherLiabilities>' + balanceSheetSpouse.otherLiabilities + '</otherLiabilities>\ '
           + '<totalLiabilities>' + balanceSheetSpouse.totalLiabilities + '</totalLiabilities>\ '
           + '<capitalStock>' + balanceSheetSpouse.capitalStock + '</capitalStock>\ '
           + '<additionalPaidInCapital>' + balanceSheetSpouse.additionalPaidInCapital + '</additionalPaidInCapital>\ '
           + '<retainedEarnings>' + balanceSheetSpouse.retainedEarnings + '</retainedEarnings>\ '
           + '<totalEquity>' + balanceSheetSpouse.totalEquity + '</totalEquity>\ '
           + '<totalLiabilitiesEquity>' + balanceSheetSpouse.totalLiabilitiesEquity + '</totalLiabilitiesEquity>\ '
           + '<beginningCapital>' + balanceSheetSpouse.beginningCapital + '</beginningCapital>\ '
           + '<netIncomeForTheYear>' + balanceSheetSpouse.netIncomeForTheYear + '</netIncomeForTheYear>\ '
           + '<drawings>' + balanceSheetSpouse.drawings + '</drawings>\ '
           + '<endingCapital>' + balanceSheetSpouse.endingCapital + '</endingCapital>\ '
           + '<totalLiabilitiesAndCapital>' + balanceSheetSpouse.totalLiabilitiesAndCapital + '</totalLiabilitiesAndCapital>\ '
    + '</balanceSheetSpouse>\ ';

    var reconciliationOfNetIncomeWs = '<reconciliationOfNetIncome>'
            + '<netIncomePerBooks>' + reconciliationOfNetIncome.netIncomePerBooks + '</netIncomePerBooks>'
            + '<nonDeductibleExpensesItem2Description>' + '</nonDeductibleExpensesItem2Description>'
            + '<nonDeductibleExpensesItem2Value>' + '</nonDeductibleExpensesItem2Value>'
            + '<nonDeductibleExpensesItem3Description>' + '</nonDeductibleExpensesItem3Description>'
            + '<nonDeductibleExpensesItem3Value>' + '</nonDeductibleExpensesItem3Value> \ ';
    //iter start
    var nonDeductibleExpenseListHolder = [];
    for (key in nonDeductibleExpenseList) {
        var obj = '<listOfNonDeductibleExpensesItem3>'
               + '<otherExpandableDesc>' + nonDeductibleExpenseList[key].otherExpandableDesc + '</otherExpandableDesc>'
               + '<otherExpandableAmount>' + nonDeductibleExpenseList[key].otherExpandableAmount + '</otherExpandableAmount>'
               + '<otherExpandableAmountSpecial>' + nonDeductibleExpenseList[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
               + '<otherExpandableAmountRegular>' + nonDeductibleExpenseList[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
               + '<otherExpandableAmountTotal>' + nonDeductibleExpenseList[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
            + '</listOfNonDeductibleExpensesItem3>';
        nonDeductibleExpenseListHolder.push(obj);
    }
    var nonDeductibleExpenseListObjectHolder = "";
    for (key in nonDeductibleExpenseListHolder) {
        nonDeductibleExpenseListObjectHolder += nonDeductibleExpenseListHolder[key];
    }
    var nonTaxableWs =
    '<totalNonDeductibleExpenses>' + reconciliationOfNetIncome.totalNonDeductibleExpenses + '</totalNonDeductibleExpenses>'
    + '<nonTaxableAndSpDeductionsItem5Description>' + '</nonTaxableAndSpDeductionsItem5Description>'
    + '<nonTaxableAndSpDeductionsItem5Value>' + '</nonTaxableAndSpDeductionsItem5Value>'
    + '<nonTaxableAndSpDeductionsItem6Description>' + '</nonTaxableAndSpDeductionsItem6Description>'
    + '<nonTaxableAndSpDeductionsItem6Value>' + '</nonTaxableAndSpDeductionsItem6Value>'
    //iter start
    var listNonTaxableHolder = [];
    for (key in listNonTaxable) {
        var obj = '<listOfnonTaxableAndSpDeductionsItem6>\ '
               + '<otherExpandableDesc>' + listNonTaxable[key].otherExpandableDesc + '</otherExpandableDesc>'
               + '<otherExpandableAmount>' + listNonTaxable[key].otherExpandableAmount + '</otherExpandableAmount>'
               + '<otherExpandableAmountSpecial>' + listNonTaxable[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
               + '<otherExpandableAmountRegular>' + listNonTaxable[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
               + '<otherExpandableAmountTotal>' + listNonTaxable[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
            + '</listOfnonTaxableAndSpDeductionsItem6>';
        listNonTaxableHolder.push(obj);
    }
    var listNonTaxableObjectHolder = "";
    for (key in listNonTaxableHolder) {
        listNonTaxableObjectHolder += listNonTaxableHolder[key];
    }

    //iter end
    var specialDeductionWs =
    '<specialDeductionsItem7Description>' + '</specialDeductionsItem7Description>'
    + '<specialDeductionsItem7Value>' + '</specialDeductionsItem7Value>'
    + '<specialDeductionsItem8Description>' + '</specialDeductionsItem8Description>'
    + '<specialDeductionsItem8Value>' + '</specialDeductionsItem8Value>';
    //iter start
    var listSpecialDeductionsHolder = [];
    for (key in listSpecialDeductions) {
        var obj =
        '<listOfSpecialDeductionsItem8>'
        + '<otherExpandableDesc>' + listSpecialDeductions[key].otherExpandableDesc + '</otherExpandableDesc>'
        + '<otherExpandableAmount>' + listSpecialDeductions[key].otherExpandableAmount + '</otherExpandableAmount>'
        + '<otherExpandableAmountSpecial>' + listSpecialDeductions[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
        + '<otherExpandableAmountRegular>' + listSpecialDeductions[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
        + '<otherExpandableAmountTotal>' + listSpecialDeductions[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
        + '</listOfSpecialDeductionsItem8>';
        listSpecialDeductionsHolder.push(obj);
    }
    var listSpecialDeductionObjectHolder = "";
    for (key in listSpecialDeductionsHolder) {
        listSpecialDeductionObjectHolder += listSpecialDeductionsHolder[key];
    }
    //iter end
    var closeReconciliationOfNetIncomeWs =
    '<totalNonTaxableAndSpDeductions>' + reconciliationOfNetIncome.totalNonTaxableAndSpDeductions + '</totalNonTaxableAndSpDeductions>'
    + '<netTaxableIncome>' + reconciliationOfNetIncome.reconciliationOfNetIncome + '</netTaxableIncome>'
    + '</reconciliationOfNetIncome>';




    var reconciliationOfNetIncomeWsSpouse = '<reconciliationOfNetIncomeSpouse>'
        + '<netIncomePerBooks>' + reconciliationOfNetIncomeSpouse.netIncomePerBooks + '</netIncomePerBooks>'
        + '<nonDeductibleExpensesItem2Description>' + '</nonDeductibleExpensesItem2Description>'
        + '<nonDeductibleExpensesItem2Value>' + '</nonDeductibleExpensesItem2Value>'
        + '<nonDeductibleExpensesItem3Description>' + '</nonDeductibleExpensesItem3Description>'
        + '<nonDeductibleExpensesItem3Value>' + '</nonDeductibleExpensesItem3Value>\ ';
    //iter start
    var nonDeductibleExpenseListSpouseHolder = [];
    for (key in nonDeductibleExpenseListSpouse) {
        var obj = '<listOfNonDeductibleExpensesItem3>'
               + '<otherExpandableDesc>' + nonDeductibleExpenseListSpouse[key].otherExpandableDesc + '</otherExpandableDesc>'
               + '<otherExpandableAmount>' + nonDeductibleExpenseListSpouse[key].otherExpandableAmount + '</otherExpandableAmount>'
               + '<otherExpandableAmountSpecial>' + nonDeductibleExpenseListSpouse[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
               + '<otherExpandableAmountRegular>' + nonDeductibleExpenseListSpouse[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
               + '<otherExpandableAmountTotal>' + nonDeductibleExpenseListSpouse[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
            + '</listOfNonDeductibleExpensesItem3>';
        nonDeductibleExpenseListSpouseHolder.push(obj);
    }
    var nonDeductibleExpenseListObjectSpouseHolder = "";
    for (key in nonDeductibleExpenseListSpouseHolder) {
        nonDeductibleExpenseListObjectSpouseHolder += nonDeductibleExpenseListSpouseHolder[key];
    }
    var nonTaxableWsSpouse =
    '<totalNonDeductibleExpenses>' + reconciliationOfNetIncomeSpouse.totalNonDeductibleExpenses + '</totalNonDeductibleExpenses>'
    + '<nonTaxableAndSpDeductionsItem5Description>' + '</nonTaxableAndSpDeductionsItem5Description>'
    + '<nonTaxableAndSpDeductionsItem5Value>' + '</nonTaxableAndSpDeductionsItem5Value>'
    + '<nonTaxableAndSpDeductionsItem6Description>' + '</nonTaxableAndSpDeductionsItem6Description>'
    + '<nonTaxableAndSpDeductionsItem6Value>' + '</nonTaxableAndSpDeductionsItem6Value>'
    //iter start
    var listNonTaxableSpouseHolder = [];
    for (key in listNonTaxableSpouse) {
        var obj = '<listOfnonTaxableAndSpDeductionsItem6>\ '
               + '<otherExpandableDesc>' + listNonTaxableSpouse[key].otherExpandableDesc + '</otherExpandableDesc>'
               + '<otherExpandableAmount>' + listNonTaxableSpouse[key].otherExpandableAmount + '</otherExpandableAmount>'
               + '<otherExpandableAmountSpecial>' + listNonTaxableSpouse[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
               + '<otherExpandableAmountRegular>' + listNonTaxableSpouse[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
               + '<otherExpandableAmountTotal>' + listNonTaxableSpouse[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
            + '</listOfnonTaxableAndSpDeductionsItem6>';
        listNonTaxableSpouseHolder.push(obj);
    }
    var listNonTaxableObjectSpouseHolder = "";
    for (key in listNonTaxableSpouseHolder) {
        listNonTaxableObjectSpouseHolder += listNonTaxableSpouseHolder[key];
    }

    //iter end
    var specialDeductionWsSpouse =
    '<specialDeductionsItem7Description>' + '</specialDeductionsItem7Description>'
    + '<specialDeductionsItem7Value>' + '</specialDeductionsItem7Value>'
    + '<specialDeductionsItem8Description>' + '</specialDeductionsItem8Description>'
    + '<specialDeductionsItem8Value>' + '</specialDeductionsItem8Value>';
    //iter start
    var listSpecialDeductionsSpouseHolder = [];
    for (key in listSpecialDeductionsSpouse) {
        var obj =
        '<listOfSpecialDeductionsItem8>'
        + '<otherExpandableDesc>' + listSpecialDeductionsSpouse[key].otherExpandableDesc + '</otherExpandableDesc>'
        + '<otherExpandableAmount>' + listSpecialDeductionsSpouse[key].otherExpandableAmount + '</otherExpandableAmount>'
        + '<otherExpandableAmountSpecial>' + listSpecialDeductionsSpouse[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
        + '<otherExpandableAmountRegular>' + listSpecialDeductionsSpouse[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
        + '<otherExpandableAmountTotal>' + listSpecialDeductionsSpouse[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
        + '</listOfSpecialDeductionsItem8>';
        listSpecialDeductionsSpouseHolder.push(obj);
    }
    var listSpecialDeductionObjectSpouseHolder = "";
    for (key in listSpecialDeductionsSpouseHolder) {
        listSpecialDeductionObjectSpouseHolder += listSpecialDeductionsSpouseHolder[key];
    }
    //iter end
    var closeReconciliationOfNetIncomeWsSpouse =
    '<totalNonTaxableAndSpDeductions>' + reconciliationOfNetIncomeSpouse.totalNonTaxableAndSpDeductions + '</totalNonTaxableAndSpDeductions>'
    + '<netTaxableIncome>' + reconciliationOfNetIncomeSpouse.reconciliationOfNetIncome + '</netTaxableIncome>'
    + '</reconciliationOfNetIncomeSpouse> \ ';



    var taxpayerGrossIncomeWs =
        '<taxpayerGrossIncome>'
        + '<interestExempt>' + taxpayerGrossIncome.interestExempt + '</interestExempt>'
        + '<interestsActualAmt>' + taxpayerGrossIncome.interestsActualAmt + '</interestsActualAmt>'
        + '<royaltiesActualAmt>' + taxpayerGrossIncome.royaltiesActualAmt + '</royaltiesActualAmt>'
        + '<dividendsActualAmt>' + taxpayerGrossIncome.dividendsActualAmt + '</dividendsActualAmt>'
        + '<prizesWinningsActualAmt>' + taxpayerGrossIncome.prizesWinningsActualAmt + '</prizesWinningsActualAmt>'
        + '<fringeBenefitsActualAmt>' + taxpayerGrossIncome.fringeBenefitsActualAmt + '</fringeBenefitsActualAmt>'
        + '<compSubjTo15PrefRateActualAmt>' + taxpayerGrossIncome.compSubjTo15PrefRateActualAmt + '</compSubjTo15PrefRateActualAmt>'
        + '<interestsFinalTaxWthldPd>' + taxpayerGrossIncome.interestsFinalTaxWthldPd + '</interestsFinalTaxWthldPd>'
        + '<royaltiesFinalTaxWthldPd>' + taxpayerGrossIncome.royaltiesFinalTaxWthldPd + '</royaltiesFinalTaxWthldPd>'
        + '<dividendsFinalTaxWthldPd>' + taxpayerGrossIncome.dividendsFinalTaxWthldPd + '</dividendsFinalTaxWthldPd>'
        + '<prizesWinningsFinalTaxWthldPd>' + taxpayerGrossIncome.prizesWinningsFinalTaxWthldPd + '</prizesWinningsFinalTaxWthldPd>'
        + '<fringeBenefitsFinalTaxWthldPd>' + taxpayerGrossIncome.fringeBenefitsFinalTaxWthldPd + '</fringeBenefitsFinalTaxWthldPd>'
        + '<compSubjTo15PrefRateFinalTaxWthldPd>' + taxpayerGrossIncome.compSubjTo15PrefRateFinalTaxWthldPd + '</compSubjTo15PrefRateFinalTaxWthldPd>'
        + '<totalFinalTaxWithheldOrPaid>' + taxpayerGrossIncome.totalFinalTaxWithheldOrPaid + '</totalFinalTaxWithheldOrPaid>'
       + '</taxpayerGrossIncome>';


    var taxpayerCompensationSubjectListHolder = [];
    for (key in taxpayerCompensationSubjectList) {
        var obj =
			'<taxpayerCompensationSubject>'
			+ '<actualFairMarketValue>' + taxpayerCompensationSubjectList[key].actualFairMarketValue + '</actualFairMarketValue>'
			+ '<finalTaxWithheld>' + taxpayerCompensationSubjectList[key].finalTaxWithheld + '</finalTaxWithheld>'
			+ '<description>' + taxpayerCompensationSubjectList[key].description + '</description>'
			+ '</taxpayerCompensationSubject>';
        taxpayerCompensationSubjectListHolder.push(obj);
    }

    var taxpayerCompensationSubjectListObjectHolder = "";
    for (key in taxpayerCompensationSubjectListHolder) {
        taxpayerCompensationSubjectListObjectHolder += taxpayerCompensationSubjectListHolder[key];
    }

    var taxpayerRealPropertySalesListHolder = [];
    for (key in taxpayerRealPropertySalesList) {
        var obj = '<taxpayerRealPropertySales>'
            + '<propDescription>' + taxpayerRealPropertySalesList[key].propDescription + '</propDescription>'
            + '<taxDeclNo>' + taxpayerRealPropertySalesList[key].taxDeclNo + '</taxDeclNo>'
            + '<carNo>' + taxpayerRealPropertySalesList[key].carNo + '</carNo>'
            + '<actualAmount>' + taxpayerRealPropertySalesList[key].actualAmount + '</actualAmount>'
            + '<propertyTaxWithheld>' + taxpayerRealPropertySalesList[key].propertyTaxWithheld + '</propertyTaxWithheld>'
            + '</taxpayerRealPropertySales>';
        taxpayerRealPropertySalesListHolder.push(obj);
    }
    var taxpayerRealPropertySalesListObjectHolder = "";
    for (key in taxpayerRealPropertySalesListHolder) {
        taxpayerRealPropertySalesListObjectHolder += taxpayerRealPropertySalesListHolder[key];
    }

    var taxpayerStockSharesListHolder = [];
    for (key in taxpayerStockSharesList) {
        var obj =
			'<taxpayerStockShares>'
			+ '<stockKind>' + taxpayerStockSharesList[key].stockKind + '</stockKind>'
			+ '<stockSeries>' + taxpayerStockSharesList[key].stockSeries + '</stockSeries>'
			+ '<stockCARNo>' + taxpayerStockSharesList[key].stockCARNo + '</stockCARNo>'
			+ '<numShares>' + taxpayerStockSharesList[key].numShares + '</numShares>'
			+ '<dateIssued>' + taxpayerStockSharesList[key].dateIssued + '</dateIssued>'
			+ '<stockActualAmount>' + taxpayerStockSharesList[key].stockActualAmount + '</stockActualAmount>'
			+ '<stockTaxWithheld>' + taxpayerStockSharesList[key].stockTaxWithheld + '</stockTaxWithheld>'
			+ '</taxpayerStockShares>';

        taxpayerStockSharesListHolder.push(obj);
    }

    var taxpayerStockSharesListObjectHolder = "";
    for (key in taxpayerStockSharesListHolder) {
        taxpayerStockSharesListObjectHolder += taxpayerStockSharesListHolder[key];
    }

    var taxpayerOtherIncomeListHolder = [];
    for (key in taxpayerOtherIncomeList) {
        var obj = '<taxpayerOtherIncome>'
			+ '<otherIncome>' + taxpayerOtherIncomeList[key].otherIncome + '</otherIncome>'
			+ '<actualAmount>' + taxpayerOtherIncomeList[key].actualAmount + '</actualAmount>'
			+ '<otherIncomeTaxWithheld>' + taxpayerOtherIncomeList[key].otherIncomeTaxWithheld + '</otherIncomeTaxWithheld>'
			+ '</taxpayerOtherIncome>';
        taxpayerOtherIncomeListHolder.push(obj);
    }
    var taxpayerOtherIncomeListObjectHolder = "";
    for (key in taxpayerOtherIncomeListHolder) {
        taxpayerOtherIncomeListObjectHolder += taxpayerOtherIncomeListHolder[key];
    }

    var taxpayerGrossIncomeExemptWs =
		'<taxpayerGrossIncomeExempt>'
				+ '<proceedsOfInsurance>' + taxpayerGrossIncomeExempt.proceedsOfInsurance + '</proceedsOfInsurance>'
				+ '<returnOfPremium>' + taxpayerGrossIncomeExempt.returnOfPremium + '</returnOfPremium>'
				+ '<retirementBenefitsEtc>' + taxpayerGrossIncomeExempt.retirementBenefitsEtc + '</retirementBenefitsEtc>'
				+ '<totalFinalTaxWithheldOrPaid>' + taxpayerGrossIncomeExempt.totalFinalTaxWithheldOrPaid + '</totalFinalTaxWithheldOrPaid>'
		+ '</taxpayerGrossIncomeExempt>';

    var taxpayerPersonalPropertyReceivedListHolder = [];
    for (key in taxpayerPersonalPropertyReceivedList) {
        var obj = ' <taxpayerPersonalPropertyReceived>'
            + '<personalPropertyDesc>' + taxpayerPersonalPropertyReceivedList[key].personalPropertyDesc + '</personalPropertyDesc>'
            + '<personalPropertyTransferMode>' + taxpayerPersonalPropertyReceivedList[key].personalPropertyTransferMode + '</personalPropertyTransferMode>'
            + '<personalPropertyCARNo>' + taxpayerPersonalPropertyReceivedList[key].personalPropertyCARNo + '</personalPropertyCARNo>'
            + '<personalPropertyActualAmount>' + taxpayerPersonalPropertyReceivedList[key].personalPropertyActualAmount + '</personalPropertyActualAmount>'
            + '</taxpayerPersonalPropertyReceived>';
        taxpayerPersonalPropertyReceivedListHolder.push(obj);
    }
    var taxpayerPersonalPropertyReceivedListObjectHolder = "";
    for (key in taxpayerPersonalPropertyReceivedListHolder) {
        taxpayerPersonalPropertyReceivedListObjectHolder += taxpayerPersonalPropertyReceivedListHolder[key];
    }

    var taxpayerOtherExemptIncomeListHolder = [];
    for (key in taxpayerOtherExemptIncomeList) {
        var obj = '<taxpayerOtherExemptIncome>'
        + '<otherIncome>' + taxpayerOtherExemptIncomeList[key].otherIncome + '</otherIncome>'
        + '<actualAmount>' + taxpayerOtherExemptIncomeList[key].actualAmount + '</actualAmount>'
        + '</taxpayerOtherExemptIncome>';
        taxpayerOtherExemptIncomeListHolder.push(obj);
    }
    var taxpayerOtherExemptIncomeListObjectHolder = "";
    for (key in taxpayerOtherExemptIncomeListHolder) {
        taxpayerOtherExemptIncomeListObjectHolder += taxpayerOtherExemptIncomeListHolder[key];
    }



    var taxpayerConsolidatedComputationWs = '<taxpayerConsolidatedComputation>		 \ '
        + '<referenceNo>' + taxpayerConsolidatedComputation.referenceNo + '</referenceNo> \ '
        + '<netSalesRegular>' + taxpayerConsolidatedComputation.netSalesRegular + '</netSalesRegular> \ '
        + '<netSalesSpecial>' + taxpayerConsolidatedComputation.netSalesSpecial + '</netSalesSpecial> \ '
        + '<netSalesExempt>' + taxpayerConsolidatedComputation.netSalesExempt + '</netSalesExempt> \ '
        + '<netSalesTotal>' + taxpayerConsolidatedComputation.netSalesTotal + '</netSalesTotal> \ '
        + '<otherIncomeRegular>' + taxpayerConsolidatedComputation.otherIncomeRegular + '</otherIncomeRegular> \ '
        + '<otherIncomeSpecial>' + taxpayerConsolidatedComputation.otherIncomeSpecial + '</otherIncomeSpecial> \ '
        + '<otherIncomeExempt>' + taxpayerConsolidatedComputation.otherIncomeExempt + '</otherIncomeExempt> \ '
        + '<otherIncomeTotal>' + taxpayerConsolidatedComputation.otherIncomeTotal + '</otherIncomeTotal> \ '
        + '<totalSalesRegular>' + taxpayerConsolidatedComputation.totalSalesRegular + '</totalSalesRegular> \ '
        + '<totalSalesSpecial>' + taxpayerConsolidatedComputation.totalSalesSpecial + '</totalSalesSpecial> \ '
        + '<totalSalesExempt>' + taxpayerConsolidatedComputation.totalSalesExempt + '</totalSalesExempt> \ '
        + '<totalSalesTotal>' + taxpayerConsolidatedComputation.totalSalesTotal + '</totalSalesTotal> \ '
        + '<costSalesRegular>' + taxpayerConsolidatedComputation.costSalesRegular + '</costSalesRegular> \ '
        + '<costSalesSpecial>' + taxpayerConsolidatedComputation.costSalesSpecial + '</costSalesSpecial> \ '
        + '<costSalesExempt>' + taxpayerConsolidatedComputation.costSalesExempt + '</costSalesExempt> \ '
        + '<costSalesTotal>' + taxpayerConsolidatedComputation.costSalesTotal + '</costSalesTotal> \ '
        + '<grossIncomeBusinessRegular>' + taxpayerConsolidatedComputation.grossIncomeBusinessRegular + '</grossIncomeBusinessRegular> \ '
        + '<grossIncomeBusinessSpecial>' + taxpayerConsolidatedComputation.grossIncomeBusinessSpecial + '</grossIncomeBusinessSpecial> \ '
        + '<grossIncomeBusinessExempt>' + taxpayerConsolidatedComputation.grossIncomeBusinessExempt + '</grossIncomeBusinessExempt> \ '
        + '<grossIncomeBusinessTotal>' + taxpayerConsolidatedComputation.grossIncomeBusinessTotal + '</grossIncomeBusinessTotal> \ '
        + '<nonOperatingIncomeRegular>' + taxpayerConsolidatedComputation.nonOperatingIncomeRegular + '</nonOperatingIncomeRegular> \ '
        + '<nonOperatingIncomeSpecial>' + taxpayerConsolidatedComputation.nonOperatingIncomeSpecial + '</nonOperatingIncomeSpecial> \ '
        + '<nonOperatingIncomeExempt>' + taxpayerConsolidatedComputation.nonOperatingIncomeExempt + '</nonOperatingIncomeExempt> \ '
        + '<nonOperatingIncomeTotal>' + taxpayerConsolidatedComputation.nonOperatingIncomeTotal + '</nonOperatingIncomeTotal> \ '
        + '<totalGrossIncomeRegular>' + taxpayerConsolidatedComputation.totalGrossIncomeRegular + '</totalGrossIncomeRegular> \ '
        + '<totalGrossIncomeSpecial>' + taxpayerConsolidatedComputation.totalGrossIncomeSpecial + '</totalGrossIncomeSpecial> \ '
        + '<totalGrossIncomeExempt>' + taxpayerConsolidatedComputation.totalGrossIncomeExempt + '</totalGrossIncomeExempt> \ '
        + '<totalGrossIncomeTotal>' + taxpayerConsolidatedComputation.totalGrossIncomeTotal + '</totalGrossIncomeTotal> \ '
        + '<ordinaryAllowItemDedRegular>' + taxpayerConsolidatedComputation.ordinaryAllowItemDedRegular + '</ordinaryAllowItemDedRegular> \ '
        + '<ordinaryAllowItemDedSpecial>' + taxpayerConsolidatedComputation.ordinaryAllowItemDedSpecial + '</ordinaryAllowItemDedSpecial> \ '
        + '<ordinaryAllowItemDedExempt>' + taxpayerConsolidatedComputation.ordinaryAllowItemDedExempt + '</ordinaryAllowItemDedExempt> \ '
        + '<ordinaryAllowItemDedTotal>' + taxpayerConsolidatedComputation.ordinaryAllowItemDedTotal + '</ordinaryAllowItemDedTotal> \ '
        + '<specialAllowItemDedRegular>' + taxpayerConsolidatedComputation.specialAllowItemDedRegular + '</specialAllowItemDedRegular> \ '
        + '<specialAllowItemDedSpecial>' + taxpayerConsolidatedComputation.specialAllowItemDedSpecial + '</specialAllowItemDedSpecial> \ '
        + '<specialAllowItemDedExempt>' + taxpayerConsolidatedComputation.specialAllowItemDedExempt + '</specialAllowItemDedExempt> \ '
        + '<specialAllowItemDedTotal>' + taxpayerConsolidatedComputation.specialAllowItemDedTotal + '</specialAllowItemDedTotal> \ '
        + '<nolcoRegular>' + taxpayerConsolidatedComputation.nolcoRegular + '</nolcoRegular> \ '
        + '<nolcoSpecial>' + taxpayerConsolidatedComputation.nolcoSpecial + '</nolcoSpecial> \ '
        + '<nolcoExempt>' + taxpayerConsolidatedComputation.nolcoExempt + '</nolcoExempt> \ '
        + '<nolcoTotal>' + taxpayerConsolidatedComputation.nolcoTotal + '</nolcoTotal> \ '
        + '<totalAllowItemDedRegular>' + taxpayerConsolidatedComputation.totalAllowItemDedRegular + '</totalAllowItemDedRegular> \ '
        + '<totalAllowItemDedSpecial>' + taxpayerConsolidatedComputation.totalAllowItemDedSpecial + '</totalAllowItemDedSpecial> \ '
        + '<totalAllowItemDedExempt>' + taxpayerConsolidatedComputation.totalAllowItemDedExempt + '</totalAllowItemDedExempt> \ '
        + '<totalAllowItemDedTotal>' + taxpayerConsolidatedComputation.totalAllowItemDedTotal + '</totalAllowItemDedTotal> \ '
        + '<osdRegular>' + taxpayerConsolidatedComputation.osdRegular + '</osdRegular> \ '
        + '<osdSpecial>' + taxpayerConsolidatedComputation.osdSpecial + '</osdSpecial> \ '
        + '<osdExempt>' + taxpayerConsolidatedComputation.osdExempt + '</osdExempt> \ '
        + '<osdTotal>' + taxpayerConsolidatedComputation.osdTotal + '</osdTotal> \ '
        + '<taxableIncomeFrmBsnsRegular>' + taxpayerConsolidatedComputation.taxableIncomeFrmBsnsRegular + '</taxableIncomeFrmBsnsRegular> \ '
        + '<taxableIncomeFrmBsnsSpecial>' + taxpayerConsolidatedComputation.taxableIncomeFrmBsnsSpecial + '</taxableIncomeFrmBsnsSpecial> \ '
        + '<taxableIncomeFrmBsnsExempt>' + taxpayerConsolidatedComputation.taxableIncomeFrmBsnsExempt + '</taxableIncomeFrmBsnsExempt> \ '
        + '<taxableIncomeFrmBsnsTotal>' + taxpayerConsolidatedComputation.taxableIncomeFrmBsnsTotal + '</taxableIncomeFrmBsnsTotal> \ '
        + '<netTaxableCompIncomeRegular>' + taxpayerConsolidatedComputation.netTaxableCompIncomeRegular + '</netTaxableCompIncomeRegular> \ '
        + '<netTaxableCompIncomeSpecial>' + taxpayerConsolidatedComputation.netTaxableCompIncomeSpecial + '</netTaxableCompIncomeSpecial> \ '
        + '<netTaxableCompIncomeExempt>' + taxpayerConsolidatedComputation.netTaxableCompIncomeExempt + '</netTaxableCompIncomeExempt> \ '
        + '<netTaxableCompIncomeTotal>' + taxpayerConsolidatedComputation.netTaxableCompIncomeTotal + '</netTaxableCompIncomeTotal> \ '
        + '<netTaxableIncomeRegular>' + taxpayerConsolidatedComputation.netTaxableIncomeRegular + '</netTaxableIncomeRegular> \ '
        + '<netTaxableIncomeSpecial>' + taxpayerConsolidatedComputation.netTaxableIncomeSpecial + '</netTaxableIncomeSpecial> \ '
        + '<netTaxableIncomeExempt>' + taxpayerConsolidatedComputation.netTaxableIncomeExempt + '</netTaxableIncomeExempt> \ '
        + '<netTaxableIncomeTotal>' + taxpayerConsolidatedComputation.netTaxableIncomeTotal + '</netTaxableIncomeTotal> \ '
        + '<excessDeductionsRegular>' + taxpayerConsolidatedComputation.excessDeductionsRegular + '</excessDeductionsRegular> \ '
        + '<excessDeductionsSpecial>' + taxpayerConsolidatedComputation.excessDeductionsSpecial + '</excessDeductionsSpecial> \ '
        + '<excessDeductionsExempt>' + taxpayerConsolidatedComputation.excessDeductionsExempt + '</excessDeductionsExempt> \ '
        + '<excessDeductionsTotal>' + taxpayerConsolidatedComputation.excessDeductionsTotal + '</excessDeductionsTotal> \ '
        + '<totalTaxableIncomeRegular>' + taxpayerConsolidatedComputation.totalTaxableIncomeRegular + '</totalTaxableIncomeRegular> \ '
        + '<totalTaxableIncomeSpecial>' + taxpayerConsolidatedComputation.totalTaxableIncomeSpecial + '</totalTaxableIncomeSpecial> \ '
        + '<totalTaxableIncomeExempt>' + taxpayerConsolidatedComputation.totalTaxableIncomeExempt + '</totalTaxableIncomeExempt> \ '
        + '<totalTaxableIncomeTotal>' + taxpayerConsolidatedComputation.totalTaxableIncomeTotal + '</totalTaxableIncomeTotal> \ '
        + '<totalIncomeTaxDueRegular>' + taxpayerConsolidatedComputation.totalIncomeTaxDueRegular + '</totalIncomeTaxDueRegular> \ '
        + '<totalIncomeTaxDueSpecial>' + taxpayerConsolidatedComputation.totalIncomeTaxDueSpecial + '</totalIncomeTaxDueSpecial> \ '
        + '<totalIncomeTaxDueExempt>' + taxpayerConsolidatedComputation.totalIncomeTaxDueExempt + '</totalIncomeTaxDueExempt> \ '
        + '<totalIncomeTaxDueTotal>' + taxpayerConsolidatedComputation.totalIncomeTaxDueTotal + '</totalIncomeTaxDueTotal> \ '
        + '<totalTaxCreditsPaymentsRegular>' + taxpayerConsolidatedComputation.totalTaxCreditsPaymentsRegular + '</totalTaxCreditsPaymentsRegular> \ '
        + '<totalTaxCreditsPaymentsSpecial>' + taxpayerConsolidatedComputation.totalTaxCreditsPaymentsSpecial + '</totalTaxCreditsPaymentsSpecial> \ '
        + '<totalTaxCreditsPaymentsExempt>' + taxpayerConsolidatedComputation.totalTaxCreditsPaymentsExempt + '</totalTaxCreditsPaymentsExempt> \ '
        + '<totalTaxCreditsPaymentsTotal>' + taxpayerConsolidatedComputation.totalTaxCreditsPaymentsTotal + '</totalTaxCreditsPaymentsTotal> \ '
        + '<netTaxPayableRegular>' + taxpayerConsolidatedComputation.netTaxPayableRegular + '</netTaxPayableRegular> \ '
        + '<netTaxPayableSpecial>' + taxpayerConsolidatedComputation.netTaxPayableSpecial + '</netTaxPayableSpecial> \ '
        + '<netTaxPayableExempt>' + taxpayerConsolidatedComputation.netTaxPayableExempt + '</netTaxPayableExempt> \ '
        + '<netTaxPayableTotal>' + taxpayerConsolidatedComputation.netTaxPayableTotal + '</netTaxPayableTotal> \ '
        + '<totalTaxReliefAvailmentRegular>' + taxpayerConsolidatedComputation.totalTaxReliefAvailmentRegular + '</totalTaxReliefAvailmentRegular> \ '
        + '<totalTaxReliefAvailmentSpecial>' + taxpayerConsolidatedComputation.totalTaxReliefAvailmentSpecial + '</totalTaxReliefAvailmentSpecial> \ '
        + '<totalTaxReliefAvailmentExempt>' + taxpayerConsolidatedComputation.totalTaxReliefAvailmentExempt + '</totalTaxReliefAvailmentExempt> \ '
        + '<totalTaxReliefAvailmentTotal>' + taxpayerConsolidatedComputation.totalTaxReliefAvailmentTotal + '</totalTaxReliefAvailmentTotal> \ '
        + '</taxpayerConsolidatedComputation> \ ';

    var taxpayerConsolidatedComputationSpouseWs = '<taxpayerSpuseConsolidatedComputation> \ '
        + '<referenceNo>' + taxpayerConsolidatedComputationSpouse.referenceNo + '</referenceNo> \ '
        + '<netSalesRegular>' + taxpayerConsolidatedComputationSpouse.netSalesRegular + '</netSalesRegular> \ '
        + '<netSalesSpecial>' + taxpayerConsolidatedComputationSpouse.netSalesSpecial + '</netSalesSpecial> \ '
        + '<netSalesExempt>' + taxpayerConsolidatedComputationSpouse.netSalesExempt + '</netSalesExempt> \ '
        + '<netSalesTotal>' + taxpayerConsolidatedComputationSpouse.netSalesTotal + '</netSalesTotal> \ '
        + '<otherIncomeRegular>' + taxpayerConsolidatedComputationSpouse.otherIncomeRegular + '</otherIncomeRegular> \ '
        + '<otherIncomeSpecial>' + taxpayerConsolidatedComputationSpouse.otherIncomeSpecial + '</otherIncomeSpecial> \ '
        + '<otherIncomeExempt>' + taxpayerConsolidatedComputationSpouse.otherIncomeExempt + '</otherIncomeExempt> \ '
        + '<otherIncomeTotal>' + taxpayerConsolidatedComputationSpouse.otherIncomeTotal + '</otherIncomeTotal> \ '
        + '<totalSalesRegular>' + taxpayerConsolidatedComputationSpouse.totalSalesRegular + '</totalSalesRegular> \ '
        + '<totalSalesSpecial>' + taxpayerConsolidatedComputationSpouse.totalSalesSpecial + '</totalSalesSpecial> \ '
        + '<totalSalesExempt>' + taxpayerConsolidatedComputationSpouse.totalSalesExempt + '</totalSalesExempt> \ '
        + '<totalSalesTotal>' + taxpayerConsolidatedComputationSpouse.totalSalesTotal + '</totalSalesTotal> \ '
        + '<costSalesRegular>' + taxpayerConsolidatedComputationSpouse.costSalesRegular + '</costSalesRegular> \ '
        + '<costSalesSpecial>' + taxpayerConsolidatedComputationSpouse.costSalesSpecial + '</costSalesSpecial> \ '
        + '<costSalesExempt>' + taxpayerConsolidatedComputationSpouse.costSalesExempt + '</costSalesExempt> \ '
        + '<costSalesTotal>' + taxpayerConsolidatedComputationSpouse.costSalesTotal + '</costSalesTotal> \ '
        + '<grossIncomeBusinessRegular>' + taxpayerConsolidatedComputationSpouse.grossIncomeBusinessRegular + '</grossIncomeBusinessRegular> \ '
        + '<grossIncomeBusinessSpecial>' + taxpayerConsolidatedComputationSpouse.grossIncomeBusinessSpecial + '</grossIncomeBusinessSpecial> \ '
        + '<grossIncomeBusinessExempt>' + taxpayerConsolidatedComputationSpouse.grossIncomeBusinessExempt + '</grossIncomeBusinessExempt> \ '
        + '<grossIncomeBusinessTotal>' + taxpayerConsolidatedComputationSpouse.grossIncomeBusinessTotal + '</grossIncomeBusinessTotal> \ '
        + '<nonOperatingIncomeRegular>' + taxpayerConsolidatedComputationSpouse.nonOperatingIncomeRegular + '</nonOperatingIncomeRegular> \ '
        + '<nonOperatingIncomeSpecial>' + taxpayerConsolidatedComputationSpouse.nonOperatingIncomeSpecial + '</nonOperatingIncomeSpecial> \ '
        + '<nonOperatingIncomeExempt>' + taxpayerConsolidatedComputationSpouse.nonOperatingIncomeExempt + '</nonOperatingIncomeExempt> \ '
        + '<nonOperatingIncomeTotal>' + taxpayerConsolidatedComputationSpouse.nonOperatingIncomeTotal + '</nonOperatingIncomeTotal> \ '
        + '<totalGrossIncomeRegular>' + taxpayerConsolidatedComputationSpouse.totalGrossIncomeRegular + '</totalGrossIncomeRegular> \ '
        + '<totalGrossIncomeSpecial>' + taxpayerConsolidatedComputationSpouse.totalGrossIncomeSpecial + '</totalGrossIncomeSpecial> \ '
        + '<totalGrossIncomeExempt>' + taxpayerConsolidatedComputationSpouse.totalGrossIncomeExempt + '</totalGrossIncomeExempt> \ '
        + '<totalGrossIncomeTotal>' + taxpayerConsolidatedComputationSpouse.totalGrossIncomeTotal + '</totalGrossIncomeTotal> \ '
        + '<ordinaryAllowItemDedRegular>' + taxpayerConsolidatedComputationSpouse.ordinaryAllowItemDedRegular + '</ordinaryAllowItemDedRegular> \ '
        + '<ordinaryAllowItemDedSpecial>' + taxpayerConsolidatedComputationSpouse.ordinaryAllowItemDedSpecial + '</ordinaryAllowItemDedSpecial> \ '
        + '<ordinaryAllowItemDedExempt>' + taxpayerConsolidatedComputationSpouse.ordinaryAllowItemDedExempt + '</ordinaryAllowItemDedExempt> \ '
        + '<ordinaryAllowItemDedTotal>' + taxpayerConsolidatedComputationSpouse.ordinaryAllowItemDedTotal + '</ordinaryAllowItemDedTotal> \ '
        + '<specialAllowItemDedRegular>' + taxpayerConsolidatedComputationSpouse.specialAllowItemDedRegular + '</specialAllowItemDedRegular> \ '
        + '<specialAllowItemDedSpecial>' + taxpayerConsolidatedComputationSpouse.specialAllowItemDedSpecial + '</specialAllowItemDedSpecial> \ '
        + '<specialAllowItemDedExempt>' + taxpayerConsolidatedComputationSpouse.specialAllowItemDedExempt + '</specialAllowItemDedExempt> \ '
        + '<specialAllowItemDedTotal>' + taxpayerConsolidatedComputationSpouse.specialAllowItemDedTotal + '</specialAllowItemDedTotal> \ '
        + '<nolcoRegular>' + taxpayerConsolidatedComputationSpouse.nolcoRegular + '</nolcoRegular> \ '
        + '<nolcoSpecial>' + taxpayerConsolidatedComputationSpouse.nolcoSpecial + '</nolcoSpecial> \ '
        + '<nolcoExempt>' + taxpayerConsolidatedComputationSpouse.nolcoExempt + '</nolcoExempt> \ '
        + '<nolcoTotal>' + taxpayerConsolidatedComputationSpouse.nolcoTotal + '</nolcoTotal> \ '
        + '<totalAllowItemDedRegular>' + taxpayerConsolidatedComputationSpouse.totalAllowItemDedRegular + '</totalAllowItemDedRegular> \ '
        + '<totalAllowItemDedSpecial>' + taxpayerConsolidatedComputationSpouse.totalAllowItemDedSpecial + '</totalAllowItemDedSpecial> \ '
        + '<totalAllowItemDedExempt>' + taxpayerConsolidatedComputationSpouse.totalAllowItemDedExempt + '</totalAllowItemDedExempt> \ '
        + '<totalAllowItemDedTotal>' + taxpayerConsolidatedComputationSpouse.totalAllowItemDedTotal + '</totalAllowItemDedTotal> \ '
        + '<osdRegular>' + taxpayerConsolidatedComputationSpouse.osdRegular + '</osdRegular> \ '
        + '<osdSpecial>' + taxpayerConsolidatedComputationSpouse.osdSpecial + '</osdSpecial> \ '
        + '<osdExempt>' + taxpayerConsolidatedComputationSpouse.osdExempt + '</osdExempt> \ '
        + '<osdTotal>' + taxpayerConsolidatedComputationSpouse.osdTotal + '</osdTotal> \ '
        + '<taxableIncomeFrmBsnsRegular>' + taxpayerConsolidatedComputationSpouse.taxableIncomeFrmBsnsRegular + '</taxableIncomeFrmBsnsRegular> \ '
        + '<taxableIncomeFrmBsnsSpecial>' + taxpayerConsolidatedComputationSpouse.taxableIncomeFrmBsnsSpecial + '</taxableIncomeFrmBsnsSpecial> \ '
        + '<taxableIncomeFrmBsnsExempt>' + taxpayerConsolidatedComputationSpouse.taxableIncomeFrmBsnsExempt + '</taxableIncomeFrmBsnsExempt> \ '
        + '<taxableIncomeFrmBsnsTotal>' + taxpayerConsolidatedComputationSpouse.taxableIncomeFrmBsnsTotal + '</taxableIncomeFrmBsnsTotal> \ '
        + '<netTaxableCompIncomeRegular>' + taxpayerConsolidatedComputationSpouse.netTaxableCompIncomeRegular + '</netTaxableCompIncomeRegular> \ '
        + '<netTaxableCompIncomeSpecial>' + taxpayerConsolidatedComputationSpouse.netTaxableCompIncomeSpecial + '</netTaxableCompIncomeSpecial> \ '
        + '<netTaxableCompIncomeExempt>' + taxpayerConsolidatedComputationSpouse.netTaxableCompIncomeExempt + '</netTaxableCompIncomeExempt> \ '
        + '<netTaxableCompIncomeTotal>' + taxpayerConsolidatedComputationSpouse.netTaxableCompIncomeTotal + '</netTaxableCompIncomeTotal> \ '
        + '<netTaxableIncomeRegular>' + taxpayerConsolidatedComputationSpouse.netTaxableIncomeRegular + '</netTaxableIncomeRegular> \ '
        + '<netTaxableIncomeSpecial>' + taxpayerConsolidatedComputationSpouse.netTaxableIncomeSpecial + '</netTaxableIncomeSpecial> \ '
        + '<netTaxableIncomeExempt>' + taxpayerConsolidatedComputationSpouse.netTaxableIncomeExempt + '</netTaxableIncomeExempt> \ '
        + '<netTaxableIncomeTotal>' + taxpayerConsolidatedComputationSpouse.netTaxableIncomeTotal + '</netTaxableIncomeTotal> \ '
        + '<excessDeductionsRegular>' + taxpayerConsolidatedComputationSpouse.excessDeductionsRegular + '</excessDeductionsRegular> \ '
        + '<excessDeductionsSpecial>' + taxpayerConsolidatedComputationSpouse.excessDeductionsSpecial + '</excessDeductionsSpecial> \ '
        + '<excessDeductionsExempt>' + taxpayerConsolidatedComputationSpouse.excessDeductionsExempt + '</excessDeductionsExempt> \ '
        + '<excessDeductionsTotal>' + taxpayerConsolidatedComputationSpouse.excessDeductionsTotal + '</excessDeductionsTotal> \ '
        + '<totalTaxableIncomeRegular>' + taxpayerConsolidatedComputationSpouse.totalTaxableIncomeRegular + '</totalTaxableIncomeRegular> \ '
        + '<totalTaxableIncomeSpecial>' + taxpayerConsolidatedComputationSpouse.totalTaxableIncomeSpecial + '</totalTaxableIncomeSpecial> \ '
        + '<totalTaxableIncomeExempt>' + taxpayerConsolidatedComputationSpouse.totalTaxableIncomeExempt + '</totalTaxableIncomeExempt> \ '
        + '<totalTaxableIncomeTotal>' + taxpayerConsolidatedComputationSpouse.totalTaxableIncomeTotal + '</totalTaxableIncomeTotal> \ '
        + '<totalIncomeTaxDueRegular>' + taxpayerConsolidatedComputationSpouse.totalIncomeTaxDueRegular + '</totalIncomeTaxDueRegular> \ '
        + '<totalIncomeTaxDueSpecial>' + taxpayerConsolidatedComputationSpouse.totalIncomeTaxDueSpecial + '</totalIncomeTaxDueSpecial> \ '
        + '<totalIncomeTaxDueExempt>' + taxpayerConsolidatedComputationSpouse.totalIncomeTaxDueExempt + '</totalIncomeTaxDueExempt> \ '
        + '<totalIncomeTaxDueTotal>' + taxpayerConsolidatedComputationSpouse.totalIncomeTaxDueTotal + '</totalIncomeTaxDueTotal> \ '
        + '<totalTaxCreditsPaymentsRegular>' + taxpayerConsolidatedComputationSpouse.totalTaxCreditsPaymentsRegular + '</totalTaxCreditsPaymentsRegular> \ '
        + '<totalTaxCreditsPaymentsSpecial>' + taxpayerConsolidatedComputationSpouse.totalTaxCreditsPaymentsSpecial + '</totalTaxCreditsPaymentsSpecial> \ '
        + '<totalTaxCreditsPaymentsExempt>' + taxpayerConsolidatedComputationSpouse.totalTaxCreditsPaymentsExempt + '</totalTaxCreditsPaymentsExempt> \ '
        + '<totalTaxCreditsPaymentsTotal>' + taxpayerConsolidatedComputationSpouse.totalTaxCreditsPaymentsTotal + '</totalTaxCreditsPaymentsTotal> \ '
        + '<netTaxPayableRegular>' + taxpayerConsolidatedComputationSpouse.netTaxPayableRegular + '</netTaxPayableRegular> \ '
        + '<netTaxPayableSpecial>' + taxpayerConsolidatedComputationSpouse.netTaxPayableSpecial + '</netTaxPayableSpecial> \ '
        + '<netTaxPayableExempt>' + taxpayerConsolidatedComputationSpouse.netTaxPayableExempt + '</netTaxPayableExempt> \ '
        + '<netTaxPayableTotal>' + taxpayerConsolidatedComputationSpouse.netTaxPayableTotal + '</netTaxPayableTotal> \ '
        + '<totalTaxReliefAvailmentRegular>' + taxpayerConsolidatedComputationSpouse.totalTaxReliefAvailmentRegular + '</totalTaxReliefAvailmentRegular> \ '
        + '<totalTaxReliefAvailmentSpecial>' + taxpayerConsolidatedComputationSpouse.totalTaxReliefAvailmentSpecial + '</totalTaxReliefAvailmentSpecial> \ '
        + '<totalTaxReliefAvailmentExempt>' + taxpayerConsolidatedComputationSpouse.totalTaxReliefAvailmentExempt + '</totalTaxReliefAvailmentExempt> \ '
        + '<totalTaxReliefAvailmentTotal>' + taxpayerConsolidatedComputationSpouse.totalTaxReliefAvailmentTotal + '</totalTaxReliefAvailmentTotal> \ '
        + '</taxpayerSpuseConsolidatedComputation> \ ';

    var attachmentsOpening = '<!--Zero or more repetitions:-->  \ '
        + '<attachments>  \ ';

    var taxRegimeWs =
        '<taxRegime>  \ '
           + '<taxRegime>' + taxRegime.taxRegimes + '</taxRegime>  \ '
        + '</taxRegime>  \ ';

    var taxPayersActivityProfileSchWs = '<taxPayersActivityProfileSch>                   \ '
        + '<investmentPromotionAgency>' + taxPayersActivityProfileSch.investmentPromotionAgency + '</investmentPromotionAgency>                   \ '
        + '<legalBasis>' + taxPayersActivityProfileSch.legalBasis + '</legalBasis>                   \ '
        + '<registrationNo>' + taxPayersActivityProfileSch.registrationNo + '</registrationNo>                   \ '
        + '<specialTaxRate>' + taxPayersActivityProfileSch.specialTaxRate + '</specialTaxRate>                   \ '
        + '<specialTaxRated>' + taxPayersActivityProfileSch.specialTaxRated + '</specialTaxRated>                   \ '
        + '<effectivityDateofTaxReliefExemptionFrom>' + taxPayersActivityProfileSch.effectivityDateofTaxReliefExemptionFrom + '</effectivityDateofTaxReliefExemptionFrom>                   \ '
        + '<effectivityDateofTaxReliefExemptionTo>' + taxPayersActivityProfileSch.effectivityDateofTaxReliefExemptionTo + '</effectivityDateofTaxReliefExemptionTo> \ '
     + '</taxPayersActivityProfileSch>\ ';


    var taxPayersActivityProfileSpsSchWs = '<taxPayersActivityProfileSpsSch>  \ '
        + '<investmentPromotionAgency>' + taxPayersActivityProfileSchSps.investmentPromotionAgency + '</investmentPromotionAgency>                   \ '
        + '<legalBasis>' + taxPayersActivityProfileSchSps.legalBasis + '</legalBasis>                   \ '
        + '<registrationNo>' + taxPayersActivityProfileSchSps.registrationNo + '</registrationNo>                   \ '
        + '<specialTaxRate>' + taxPayersActivityProfileSchSps.specialTaxRate + '</specialTaxRate>                   \ '
        + '<specialTaxRated>' + taxPayersActivityProfileSchSps.specialTaxRated + '</specialTaxRated>                   \ '
        + '<effectivityDateofTaxReliefExemptionFrom>' + taxPayersActivityProfileSchSps.effectivityDateofTaxReliefExemptionFrom + '</effectivityDateofTaxReliefExemptionFrom>                   \ '
        + '<effectivityDateofTaxReliefExemptionTo>' + taxPayersActivityProfileSchSps.effectivityDateofTaxReliefExemptionTo + '</effectivityDateofTaxReliefExemptionTo> \ '
        + '</taxPayersActivityProfileSpsSch> \ ';


    var computationOfIncomeTaxSchWs = '<computationOfIncomeTaxSch>\ '
        + '<grossCompensationIncome>' + computationOfIncomeTaxSch.grossCompensationIncome + '</grossCompensationIncome>\ '
        + '<nonTaxableExemptCompensation>' + computationOfIncomeTaxSch.nonTaxableExemptCompensation + '</nonTaxableExemptCompensation>\ '
        + '<grossTaxableCompensationIncome>' + computationOfIncomeTaxSch.grossTaxableCompensationIncome + '</grossTaxableCompensationIncome>\ '
        + '<premiumOnHealthHospitalizationInsurance>' + computationOfIncomeTaxSch.premiumOnHealthHospitalizationInsurance + '</premiumOnHealthHospitalizationInsurance>\ '
        + '<personalExemptionforEstateAndTrust>' + computationOfIncomeTaxSch.personalExemptionforEstateAndTrust + '</personalExemptionforEstateAndTrust>\ '
        + '<additionalExemption>' + computationOfIncomeTaxSch.additionalExemption + '</additionalExemption>\ '
        + '<totalDeductions>' + computationOfIncomeTaxSch.totalDeductions + '</totalDeductions>\ '
        + '<netTaxableCompensationIncome>' + computationOfIncomeTaxSch.netTaxableCompensationIncome + '</netTaxableCompensationIncome>\ '
        + '<excessOfDeductions>' + computationOfIncomeTaxSch.excessOfDeductions + '</excessOfDeductions>\ '
        + '<netSalesRevenuesReceiptFees>' + computationOfIncomeTaxSch.netSalesRevenuesReceiptFees + '</netSalesRevenuesReceiptFees>\ '
        + '<otherIncomeOperationsNotToSubjectToFinalTax>' + computationOfIncomeTaxSch.otherIncomeOperationsNotToSubjectToFinalTax + '</otherIncomeOperationsNotToSubjectToFinalTax>\ '
        + '<totalSalesRevenuesReceiptFees>' + computationOfIncomeTaxSch.totalSalesRevenuesReceiptFees + '</totalSalesRevenuesReceiptFees>\ '
        + '<totalCostOfSalesServices>' + computationOfIncomeTaxSch.totalCostOfSalesServices + '</totalCostOfSalesServices>\ '
        + '<grossIncomeFromBusinessProfession>' + computationOfIncomeTaxSch.grossIncomeFromBusinessProfession + '</grossIncomeFromBusinessProfession>\ '
        + '<nonOperatingIncome>' + computationOfIncomeTaxSch.nonOperatingIncome + '</nonOperatingIncome>\ '
        + '<totalGrossIncome>' + computationOfIncomeTaxSch.totalGrossIncome + '</totalGrossIncome>\ '
        + '<ordinaryAllowableItemizedDeductions>' + computationOfIncomeTaxSch.ordinaryAllowableItemizedDeductions + '</ordinaryAllowableItemizedDeductions>\ '
        + '<totalSpecialAllowableItemizedDeductions>' + computationOfIncomeTaxSch.totalSpecialAllowableItemizedDeductions + '</totalSpecialAllowableItemizedDeductions>\ '
        + '<totalNOLCO>' + computationOfIncomeTaxSch.totalNOLCO + '</totalNOLCO>\ '
        + '<totalAllowableItemizedDeductions>' + computationOfIncomeTaxSch.totalAllowableItemizedDeductions + '</totalAllowableItemizedDeductions>\ '
        + '<optionalStandardDeductions>' + computationOfIncomeTaxSch.optionalStandardDeductions + '</optionalStandardDeductions>\ '
        + '<taxableIncomeFromBusinessProfession>' + computationOfIncomeTaxSch.taxableIncomeFromBusinessProfession + '</taxableIncomeFromBusinessProfession>\ '
        + '<netTaxableIncomeCompensationIncome>' + computationOfIncomeTaxSch.netTaxableIncomeCompensationIncome + '</netTaxableIncomeCompensationIncome>\ '
        + '<netTaxableIncome>' + computationOfIncomeTaxSch.netTaxableIncome + '</netTaxableIncome>\ '
        + '<excessDeductionsIfNoCompensationIncome>' + computationOfIncomeTaxSch.excessDeductionsIfNoCompensationIncome + '</excessDeductionsIfNoCompensationIncome>\ '
        + '<totalTaxableIncome>' + computationOfIncomeTaxSch.totalTaxableIncome + '</totalTaxableIncome>\ '
        + '<taxDueRegular>' + computationOfIncomeTaxSch.taxDueRegular + '</taxDueRegular>\ '
        + '<specialRateIncomeTaxDue>' + computationOfIncomeTaxSch.specialRateIncomeTaxDue + '</specialRateIncomeTaxDue>\ '
        + '<shareOfOtherGovernmentAgency>' + computationOfIncomeTaxSch.shareOfOtherGovernmentAgency + '</shareOfOtherGovernmentAgency>\ '
        + '<netSpecialIncomeTaxDue>' + computationOfIncomeTaxSch.netSpecialIncomeTaxDue + '</netSpecialIncomeTaxDue>\ '
        + '<totalIncomeTaxDue>' + computationOfIncomeTaxSch.totalIncomeTaxDue + '</totalIncomeTaxDue>\ '
        + '<regular>' + computationOfIncomeTaxSch.regular + '</regular>\ '
        + '<special>' + computationOfIncomeTaxSch.special + '</special>\ '
        + '<exempt>' + computationOfIncomeTaxSch.exempt + '</exempt>\ '
        + '<totalTaxCreditPayments>' + computationOfIncomeTaxSch.totalTaxCreditPayments + '</totalTaxCreditPayments>\ '
        + '<netTaxPayable>' + computationOfIncomeTaxSch.netTaxPayable + '</netTaxPayable>\ '
        + '<netTaxPayableForTaxFilerAndSpouse>' + computationOfIncomeTaxSch.netTaxPayableForTaxFilerAndSpouse + '</netTaxPayableForTaxFilerAndSpouse>\ '
        + '<portionOfTaxPayableAllowed>' + computationOfIncomeTaxSch.portionOfTaxPayableAllowed + '</portionOfTaxPayableAllowed>\ '
        + '<netAmountOfTaxPayable>' + computationOfIncomeTaxSch.netAmountOfTaxPayable + '</netAmountOfTaxPayable>\ '
        + '<surcharge>' + computationOfIncomeTaxSch.surcharge + '</surcharge>\ '
        + '<interest>' + computationOfIncomeTaxSch.interest + '</interest>\ '
        + '<compromise>' + computationOfIncomeTaxSch.compromise + '</compromise>\ '
        + '<totalPenalties>' + computationOfIncomeTaxSch.totalPenalties + '</totalPenalties>\ '
        + '<totalAmountPayableUponFiling>' + computationOfIncomeTaxSch.totalAmountPayableUponFiling + '</totalAmountPayableUponFiling>\ '
        + '<regularIncomeTaxOtherwiseDue>' + computationOfIncomeTaxSch.regularIncomeTaxOtherwiseDue + '</regularIncomeTaxOtherwiseDue>\ '
        + '<netSalesRevRcptFees>' + computationOfIncomeTaxSch.netSalesRevRcptFees + '</netSalesRevRcptFees>\ '
        + '<otherIncomeNoFinalTax>' + computationOfIncomeTaxSch.otherIncomeNoFinalTax + '</otherIncomeNoFinalTax>\ '
        + '<totalSalesRevRcptFees>' + computationOfIncomeTaxSch.totalSalesRevRcptFees + '</totalSalesRevRcptFees>\ '
        + '<costOfSalesServices>' + computationOfIncomeTaxSch.costOfSalesServices + '</costOfSalesServices>\ '
        + '<grossIncomeFrmBusiness>' + computationOfIncomeTaxSch.grossIncomeFrmBusiness + '</grossIncomeFrmBusiness>\ '
        + '<nonOperatingIncomeSch>' + computationOfIncomeTaxSch.nonOperatingIncomeSch + '</nonOperatingIncomeSch>\ '
        + '<ordinaryAllowableItemizedDed>' + computationOfIncomeTaxSch.ordinaryAllowableItemizedDed + '</ordinaryAllowableItemizedDed>\ '
        + '<specialAllowableItemizedDed>' + computationOfIncomeTaxSch.specialAllowableItemizedDed + '</specialAllowableItemizedDed>\ '
        + '<totalAllowableItemizedDed>' + computationOfIncomeTaxSch.totalAllowableItemizedDed + '</totalAllowableItemizedDed>\ '
        + '<taxableIncomeFrmBsnsPrfsn>' + computationOfIncomeTaxSch.taxableIncomeFrmBsnsPrfsn + '</taxableIncomeFrmBsnsPrfsn>\ '
        + '</computationOfIncomeTaxSch>\ ';


    var computationOfIncomeTaxSpsSchWs = '<computationOfIncomeTaxSpsSch>\ '
        + '<grossCompensationIncome>' + computationOfIncomeTaxSchSps.grossCompensationIncome + '</grossCompensationIncome>\ '
        + '<nonTaxableExemptCompensation>' + computationOfIncomeTaxSchSps.nonTaxableExemptCompensation + '</nonTaxableExemptCompensation>\ '
        + '<grossTaxableCompensationIncome>' + computationOfIncomeTaxSchSps.grossTaxableCompensationIncome + '</grossTaxableCompensationIncome>\ '
        + '<premiumOnHealthHospitalizationInsurance>' + computationOfIncomeTaxSchSps.premiumOnHealthHospitalizationInsurance + '</premiumOnHealthHospitalizationInsurance>\ '
        + '<personalExemptionforEstateAndTrust>' + computationOfIncomeTaxSchSps.personalExemptionforEstateAndTrust + '</personalExemptionforEstateAndTrust>\ '
        + '<additionalExemption>' + computationOfIncomeTaxSchSps.additionalExemption + '</additionalExemption>\ '
        + '<totalDeductions>' + computationOfIncomeTaxSchSps.totalDeductions + '</totalDeductions>\ '
        + '<netTaxableCompensationIncome>' + computationOfIncomeTaxSchSps.netTaxableCompensationIncome + '</netTaxableCompensationIncome>\ '
        + '<excessOfDeductions>' + computationOfIncomeTaxSchSps.excessOfDeductions + '</excessOfDeductions>\ '
        + '<netSalesRevenuesReceiptFees>' + computationOfIncomeTaxSchSps.netSalesRevenuesReceiptFees + '</netSalesRevenuesReceiptFees>\ '
        + '<otherIncomeOperationsNotToSubjectToFinalTax>' + computationOfIncomeTaxSchSps.otherIncomeOperationsNotToSubjectToFinalTax + '</otherIncomeOperationsNotToSubjectToFinalTax>\ '
        + '<totalSalesRevenuesReceiptFees>' + computationOfIncomeTaxSchSps.totalSalesRevenuesReceiptFees + '</totalSalesRevenuesReceiptFees>\ '
        + '<totalCostOfSalesServices>' + computationOfIncomeTaxSchSps.totalCostOfSalesServices + '</totalCostOfSalesServices>\ '
        + '<grossIncomeFromBusinessProfession>' + computationOfIncomeTaxSchSps.grossIncomeFromBusinessProfession + '</grossIncomeFromBusinessProfession>\ '
        + '<nonOperatingIncome>' + computationOfIncomeTaxSchSps.nonOperatingIncome + '</nonOperatingIncome>\ '
        + '<totalGrossIncome>' + computationOfIncomeTaxSchSps.totalGrossIncome + '</totalGrossIncome>\ '
        + '<ordinaryAllowableItemizedDeductions>' + computationOfIncomeTaxSchSps.ordinaryAllowableItemizedDeductions + '</ordinaryAllowableItemizedDeductions>\ '
        + '<totalSpecialAllowableItemizedDeductions>' + computationOfIncomeTaxSchSps.totalSpecialAllowableItemizedDeductions + '</totalSpecialAllowableItemizedDeductions>\ '
        + '<totalNOLCO>' + computationOfIncomeTaxSchSps.totalNOLCO + '</totalNOLCO>\ '
        + '<totalAllowableItemizedDeductions>' + computationOfIncomeTaxSchSps.totalAllowableItemizedDeductions + '</totalAllowableItemizedDeductions>\ '
        + '<optionalStandardDeductions>' + computationOfIncomeTaxSchSps.optionalStandardDeductions + '</optionalStandardDeductions>\ '
        + '<taxableIncomeFromBusinessProfession>' + computationOfIncomeTaxSchSps.taxableIncomeFromBusinessProfession + '</taxableIncomeFromBusinessProfession>\ '
        + '<netTaxableIncomeCompensationIncome>' + computationOfIncomeTaxSchSps.netTaxableIncomeCompensationIncome + '</netTaxableIncomeCompensationIncome>\ '
        + '<netTaxableIncome>' + computationOfIncomeTaxSchSps.netTaxableIncome + '</netTaxableIncome>\ '
        + '<excessDeductionsIfNoCompensationIncome>' + computationOfIncomeTaxSchSps.excessDeductionsIfNoCompensationIncome + '</excessDeductionsIfNoCompensationIncome>\ '
        + '<totalTaxableIncome>' + computationOfIncomeTaxSchSps.totalTaxableIncome + '</totalTaxableIncome>\ '
        + '<taxDueRegular>' + computationOfIncomeTaxSchSps.taxDueRegular + '</taxDueRegular>\ '
        + '<specialRateIncomeTaxDue>' + computationOfIncomeTaxSchSps.specialRateIncomeTaxDue + '</specialRateIncomeTaxDue>\ '
        + '<shareOfOtherGovernmentAgency>' + computationOfIncomeTaxSchSps.shareOfOtherGovernmentAgency + '</shareOfOtherGovernmentAgency>\ '
        + '<netSpecialIncomeTaxDue>' + computationOfIncomeTaxSchSps.netSpecialIncomeTaxDue + '</netSpecialIncomeTaxDue>\ '
        + '<totalIncomeTaxDue>' + computationOfIncomeTaxSchSps.totalIncomeTaxDue + '</totalIncomeTaxDue>\ '
        + '<regular>' + computationOfIncomeTaxSchSps.regular + '</regular>\ '
        + '<special>' + computationOfIncomeTaxSchSps.special + '</special>\ '
        + '<exempt>' + computationOfIncomeTaxSchSps.exempt + '</exempt>\ '
        + '<totalTaxCreditPayments>' + computationOfIncomeTaxSchSps.totalTaxCreditPayments + '</totalTaxCreditPayments>\ '
        + '<netTaxPayable>' + computationOfIncomeTaxSchSps.netTaxPayable + '</netTaxPayable>\ '
        + '<netTaxPayableForTaxFilerAndSpouse>' + computationOfIncomeTaxSchSps.netTaxPayableForTaxFilerAndSpouse + '</netTaxPayableForTaxFilerAndSpouse>\ '
        + '<portionOfTaxPayableAllowed>' + computationOfIncomeTaxSchSps.portionOfTaxPayableAllowed + '</portionOfTaxPayableAllowed>\ '
        + '<netAmountOfTaxPayable>' + computationOfIncomeTaxSchSps.netAmountOfTaxPayable + '</netAmountOfTaxPayable>\ '
        + '<surcharge>' + computationOfIncomeTaxSchSps.surcharge + '</surcharge>\ '
        + '<interest>' + computationOfIncomeTaxSchSps.interest + '</interest>\ '
        + '<compromise>' + computationOfIncomeTaxSchSps.compromise + '</compromise>\ '
        + '<totalPenalties>' + computationOfIncomeTaxSchSps.totalPenalties + '</totalPenalties>\ '
        + '<totalAmountPayableUponFiling>' + computationOfIncomeTaxSchSps.totalAmountPayableUponFiling + '</totalAmountPayableUponFiling>\ '
        + '<regularIncomeTaxOtherwiseDue>' + computationOfIncomeTaxSchSps.regularIncomeTaxOtherwiseDue + '</regularIncomeTaxOtherwiseDue>\ '
        + '<netSalesRevRcptFees>' + computationOfIncomeTaxSchSps.netSalesRevRcptFees + '</netSalesRevRcptFees>\ '
        + '<otherIncomeNoFinalTax>' + computationOfIncomeTaxSchSps.otherIncomeNoFinalTax + '</otherIncomeNoFinalTax>\ '
        + '<totalSalesRevRcptFees>' + computationOfIncomeTaxSchSps.totalSalesRevRcptFees + '</totalSalesRevRcptFees>\ '
        + '<costOfSalesServices>' + computationOfIncomeTaxSchSps.costOfSalesServices + '</costOfSalesServices>\ '
        + '<grossIncomeFrmBusiness>' + computationOfIncomeTaxSchSps.grossIncomeFrmBusiness + '</grossIncomeFrmBusiness>\ '
        + '<nonOperatingIncomeSch>' + computationOfIncomeTaxSchSps.nonOperatingIncomeSch + '</nonOperatingIncomeSch>\ '
        + '<ordinaryAllowableItemizedDed>' + computationOfIncomeTaxSchSps.ordinaryAllowableItemizedDed + '</ordinaryAllowableItemizedDed>\ '
        + '<specialAllowableItemizedDed>' + computationOfIncomeTaxSchSps.specialAllowableItemizedDed + '</specialAllowableItemizedDed>\ '
        + '<totalAllowableItemizedDed>' + computationOfIncomeTaxSchSps.totalAllowableItemizedDed + '</totalAllowableItemizedDed>\ '
        + '<taxableIncomeFrmBsnsPrfsn>' + computationOfIncomeTaxSchSps.taxableIncomeFrmBsnsPrfsn + '</taxableIncomeFrmBsnsPrfsn>\ '
        + '</computationOfIncomeTaxSpsSch>\ ';


    var taxReliefAvailmentSchWs = '<taxReliefAvailmentSch>\ '
        + '<taxReliefAvailmentBeforeSpecialTaxCredits>' + taxReliefAvailmentSchedule.taxReliefAvailmentBeforeSpecialTaxCredits + '</taxReliefAvailmentBeforeSpecialTaxCredits>\ '
        + '<specialTaxCredits>' + taxReliefAvailmentSchedule.specialTaxCredits + '</specialTaxCredits>\ '
        + '<regularTaxReliefAvailment>' + taxReliefAvailmentSchedule.regularTaxReliefAvailment + '</regularTaxReliefAvailment>\ '
        + '<specialTaxReliefAvailment>' + taxReliefAvailmentSchedule.specialTaxReliefAvailment + '</specialTaxReliefAvailment>\ '
        + '<exemptTaxReliefAvailment>' + taxReliefAvailmentSchedule.exemptTaxReliefAvailment + '</exemptTaxReliefAvailment>\ '
        + '<totalTaxReliefAvailment>' + taxReliefAvailmentSchedule.totalTaxReliefAvailment + '</totalTaxReliefAvailment>\ '
        + '<totalTaxReliefAvailmentofTaxFilerAndSpouse>' + taxReliefAvailmentSchedule.totalTaxReliefAvailmentofTaxFilerAndSpouse + '</totalTaxReliefAvailmentofTaxFilerAndSpouse>\ '
        + '<taxableIncomeFrmBsns>' + taxReliefAvailmentSchedule.taxableIncomeFrmBsns + '</taxableIncomeFrmBsns>\ '
        + '<specialAllowableItemizedDed>' + taxReliefAvailmentSchedule.specialAllowableItemizedDed + '</specialAllowableItemizedDed>\ '
        + '<subTotal>' + taxReliefAvailmentSchedule.subTotal + '</subTotal>\ '
        + '<regIncomeTaxOtherwiseDue>' + taxReliefAvailmentSchedule.regIncomeTaxOtherwiseDue + '</regIncomeTaxOtherwiseDue>\ '
        + '<incomeTaxDueSpecialRate>' + taxReliefAvailmentSchedule.incomeTaxDueSpecialRate + '</incomeTaxDueSpecialRate>\ '
        + '<taxReliefAvailment>' + taxReliefAvailmentSchedule.taxReliefAvailment + '</taxReliefAvailment>\ '
        + '<totalTaxReliefAvailmentSpecial>' + taxReliefAvailmentSchedule.totalTaxReliefAvailmentSpecial + '</totalTaxReliefAvailmentSpecial>\ '
        + '<taxableIncomeFrmBsnsRegular>' + taxReliefAvailmentSchedule.taxableIncomeFrmBsnsRegular + '</taxableIncomeFrmBsnsRegular>\ '
        + '<applicableTaxRate>' + taxReliefAvailmentSchedule.applicableTaxRate + '</applicableTaxRate>\ '
        + '<taxReliefAvailmentExempt>' + taxReliefAvailmentSchedule.taxReliefAvailmentExempt + '</taxReliefAvailmentExempt>\ '
        + '</taxReliefAvailmentSch>\ ';

    var taxReliefAvailmentSpsSchWs = '<taxReliefAvailmentSpsSch>\ '
        + '<taxReliefAvailmentBeforeSpecialTaxCredits>' + taxReliefAvailmentScheduleSpouse.taxReliefAvailmentBeforeSpecialTaxCredits + '</taxReliefAvailmentBeforeSpecialTaxCredits>\ '
        + '<specialTaxCredits>' + taxReliefAvailmentScheduleSpouse.specialTaxCredits + '</specialTaxCredits>\ '
        + '<regularTaxReliefAvailment>' + taxReliefAvailmentScheduleSpouse.regularTaxReliefAvailment + '</regularTaxReliefAvailment>\ '
        + '<specialTaxReliefAvailment>' + taxReliefAvailmentScheduleSpouse.specialTaxReliefAvailment + '</specialTaxReliefAvailment>\ '
        + '<exemptTaxReliefAvailment>' + taxReliefAvailmentScheduleSpouse.exemptTaxReliefAvailment + '</exemptTaxReliefAvailment>\ '
        + '<totalTaxReliefAvailment>' + taxReliefAvailmentScheduleSpouse.totalTaxReliefAvailment + '</totalTaxReliefAvailment>\ '
        + '<totalTaxReliefAvailmentofTaxFilerAndSpouse>' + taxReliefAvailmentScheduleSpouse.totalTaxReliefAvailmentofTaxFilerAndSpouse + '</totalTaxReliefAvailmentofTaxFilerAndSpouse>\ '
        + '<taxableIncomeFrmBsns>' + taxReliefAvailmentScheduleSpouse.taxableIncomeFrmBsns + '</taxableIncomeFrmBsns>\ '
        + '<specialAllowableItemizedDed>' + taxReliefAvailmentScheduleSpouse.specialAllowableItemizedDed + '</specialAllowableItemizedDed>\ '
        + '<subTotal>' + taxReliefAvailmentScheduleSpouse.subTotal + '</subTotal>\ '
        + '<regIncomeTaxOtherwiseDue>' + taxReliefAvailmentScheduleSpouse.regIncomeTaxOtherwiseDue + '</regIncomeTaxOtherwiseDue>\ '
        + '<incomeTaxDueSpecialRate>' + taxReliefAvailmentScheduleSpouse.incomeTaxDueSpecialRate + '</incomeTaxDueSpecialRate>\ '
        + '<taxReliefAvailment>' + taxReliefAvailmentScheduleSpouse.taxReliefAvailment + '</taxReliefAvailment>\ '
        + '<totalTaxReliefAvailmentSpecial>' + taxReliefAvailmentScheduleSpouse.totalTaxReliefAvailmentSpecial + '</totalTaxReliefAvailmentSpecial>\ '
        + '<taxableIncomeFrmBsnsRegular>' + taxReliefAvailmentScheduleSpouse.taxableIncomeFrmBsnsRegular + '</taxableIncomeFrmBsnsRegular>\ '
        + '<applicableTaxRate>' + taxReliefAvailmentScheduleSpouse.applicableTaxRate + '</applicableTaxRate>\ '
        + '<taxReliefAvailmentExempt>' + taxReliefAvailmentScheduleSpouse.taxReliefAvailmentExempt + '</taxReliefAvailmentExempt>\ '
        + '</taxReliefAvailmentSpsSch>\ ';

    var salesRevenuesReceiptFeesSchWs = '<salesRevenuesReceiptFeesSch>\ '
        + '<totalSalesRevenuesReceiptsFees>' + salesRevenuesReceiptFeesSch.totalSalesRevenuesReceiptsFees + '</totalSalesRevenuesReceiptsFees>\ '
        + '<grossSalesRevenuesReceiptsFees>' + salesRevenuesReceiptFeesSch.grossSalesRevenuesReceiptsFees + '</grossSalesRevenuesReceiptsFees>\ '
        + '<totalRevenue>' + salesRevenuesReceiptFeesSch.totalRevenue + '</totalRevenue>\ '
        + '<salesReturnsAllowancesAndDiscounts>' + salesRevenuesReceiptFeesSch.salesReturnsAllowancesAndDiscounts + '</salesReturnsAllowancesAndDiscounts>\ '
        + '<NetSalesRevenueReceiptFees>' + salesRevenuesReceiptFeesSch.NetSalesRevenueReceiptFees + '</NetSalesRevenueReceiptFees>\ '
        + '</salesRevenuesReceiptFeesSch>\ ';

    var salesRevenuesReceiptFeesSpsSchWs = '<salesRevenuesReceiptFeesSpsSch>\ '
        + '<totalSalesRevenuesReceiptsFees>' + salesRevenuesReceiptFeesSchSpouse.totalSalesRevenuesReceiptsFees + '</totalSalesRevenuesReceiptsFees>\ '
        + '<grossSalesRevenuesReceiptsFees>' + salesRevenuesReceiptFeesSchSpouse.grossSalesRevenuesReceiptsFees + '</grossSalesRevenuesReceiptsFees>\ '
        + '<totalRevenue>' + salesRevenuesReceiptFeesSchSpouse.totalRevenue + '</totalRevenue>\ '
        + '<salesReturnsAllowancesAndDiscounts>' + salesRevenuesReceiptFeesSchSpouse.salesReturnsAllowancesAndDiscounts + '</salesReturnsAllowancesAndDiscounts>\ '
        + '<NetSalesRevenueReceiptFees>' + salesRevenuesReceiptFeesSchSpouse.NetSalesRevenueReceiptFees + '</NetSalesRevenueReceiptFees>\ '
        + '</salesRevenuesReceiptFeesSpsSch>\ ';

    var othertaxableIncomeWsSch =
         '<otherTaxableIncomeNotSubjectedSch>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxDescFirst>First Desc</otherTaxableIncomeNotSubjectToFinalTaxDescFirst>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxDescSecond>Sceond Desc</otherTaxableIncomeNotSubjectToFinalTaxDescSecond>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxDescThird>Third Desc</otherTaxableIncomeNotSubjectToFinalTaxDescThird>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxValueFirst>100</otherTaxableIncomeNotSubjectToFinalTaxValueFirst>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxValueSecond>100</otherTaxableIncomeNotSubjectToFinalTaxValueSecond>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxValueThird>100</otherTaxableIncomeNotSubjectToFinalTaxValueThird>  \ '
       + '<otherTaxableIncomeNotSubjectToFinalTaxValueTotal>100</otherTaxableIncomeNotSubjectToFinalTaxValueTotal>  \ '
       + '<!--Zero or more repetitions:--> \ ';

    var otherTaxableIncomeNotSubjectToFinalTaxValueListHolderSch = [];
    for (key in otherTaxableIncomeNotSubjectToFinalTaxListSch) {
        var obj = '<otherTaxableIncomeNotSubjectToFinalTaxValue> \  '
       + '<otherExpandableDesc>' + otherTaxableIncomeNotSubjectToFinalTaxListSch[key].description + '</otherExpandableDesc>  \ '
       + '<otherExpandableAmount>' + otherTaxableIncomeNotSubjectToFinalTaxListSch[key].amount + '</otherExpandableAmount>  \ '
       + '</otherTaxableIncomeNotSubjectToFinalTaxValue>  \ ';
        otherTaxableIncomeNotSubjectToFinalTaxValueListHolderSch.push(obj);
    }
    var otherTaxableIncomeNotSubjectToFinalTaxSchObjectHolder = "";
    for (key in otherTaxableIncomeNotSubjectToFinalTaxValueListHolderSch) {
        otherTaxableIncomeNotSubjectToFinalTaxSchObjectHolder += otherTaxableIncomeNotSubjectToFinalTaxValueListHolderSch[key];
    }

    var othertaxableIncomeWsClosingSch = '</otherTaxableIncomeNotSubjectedSch>  \ ';

    var othertaxableIncomeSpouseWsSps =
         '<otherTaxableIncomeNotSubjectedSchSps>\ '
            + '<otherTaxableIncomeNotSubjectToFinalTaxDescFirst> </otherTaxableIncomeNotSubjectToFinalTaxDescFirst> \    '
            + '<otherTaxableIncomeNotSubjectToFinalTaxDescSecond> </otherTaxableIncomeNotSubjectToFinalTaxDescSecond> \    '
            + '<otherTaxableIncomeNotSubjectToFinalTaxDescThird> </otherTaxableIncomeNotSubjectToFinalTaxDescThird>  \ '
            + '<otherTaxableIncomeNotSubjectToFinalTaxValueFirst> </otherTaxableIncomeNotSubjectToFinalTaxValueFirst>  \ '
            + '<otherTaxableIncomeNotSubjectToFinalTaxValueSecond> </otherTaxableIncomeNotSubjectToFinalTaxValueSecond>  \ '
            + '<otherTaxableIncomeNotSubjectToFinalTaxValueThird> </otherTaxableIncomeNotSubjectToFinalTaxValueThird>  \ '
            + '<otherTaxableIncomeNotSubjectToFinalTaxValueTotal> </otherTaxableIncomeNotSubjectToFinalTaxValueTotal>  \ '
            + '<!--Zero or more repetitions:-->\ ';

    var otherTaxableIncomeNotSubjectToFinalTaxValueListSpouseHolderSchSps = [];
    for (key in otherTaxableIncomeNotSubjectToFinalTaxListSchSps) {
        var obj = '<otherTaxableIncomeNotSubjectToFinalTaxValue> \  '
       + '<otherExpandableDesc>' + otherTaxableIncomeNotSubjectToFinalTaxListSchSps[key].description + '</otherExpandableDesc>  \ '
       + '<otherExpandableAmount>' + otherTaxableIncomeNotSubjectToFinalTaxListSchSps[key].amount + '</otherExpandableAmount>  \ '
       + '</otherTaxableIncomeNotSubjectToFinalTaxValue> \ ';
        otherTaxableIncomeNotSubjectToFinalTaxValueListSpouseHolderSchSps.push(obj);
    }
    var otherTaxableIncomeNotSubjectToFinalTaxObjectSpouseHolderSch = "";
    for (key in otherTaxableIncomeNotSubjectToFinalTaxValueListSpouseHolderSchSps) {
        otherTaxableIncomeNotSubjectToFinalTaxObjectSpouseHolderSch += otherTaxableIncomeNotSubjectToFinalTaxValueListSpouseHolderSchSps[key];
    }

    var othertaxableIncomeSpouseWsClosingSch = '</otherTaxableIncomeNotSubjectedSchSps> \ ';

    var costOfSalesServicesSchWs = '<costOfSalesServicesSch>\ '
            + '<goodsInvBeg>' + costOfSalesServicesSch.goodsInvBeg + '</goodsInvBeg>\ '
            + '<purGoods>' + costOfSalesServicesSch.purGoods + '</purGoods>\ '
            + '<goodsAvail>' + costOfSalesServicesSch.goodsAvail + '</goodsAvail>\ '
            + '<goodsInvEnd>' + costOfSalesServicesSch.goodsInvEnd + '</goodsInvEnd>\ '
            + '<costSales>' + costOfSalesServicesSch.costSales + '</costSales>\ '
            + '<directMatsBeg>' + costOfSalesServicesSch.directMatsBeg + '</directMatsBeg>\ '
            + '<purDirectMats>' + costOfSalesServicesSch.purDirectMats + '</purDirectMats>\ '
            + '<matsAvail>' + costOfSalesServicesSch.matsAvail + '</matsAvail>\ '
            + '<directMatsEnd>' + costOfSalesServicesSch.directMatsEnd + '</directMatsEnd>\ '
            + '<rawMats>' + costOfSalesServicesSch.rawMats + '</rawMats>\ '
            + '<directLabor>' + costOfSalesServicesSch.directLabor + '</directLabor>\ '
            + '<manufacturingOverhead>' + costOfSalesServicesSch.manufacturingOverhead + '</manufacturingOverhead>\ '
            + '<totalManufacturingCost>' + costOfSalesServicesSch.totalManufacturingCost + '</totalManufacturingCost>\ '
            + '<workInProgressBeg>' + costOfSalesServicesSch.workInProgressBeg + '</workInProgressBeg>\ '
            + '<winProgressEnd>' + costOfSalesServicesSch.winProgressEnd + '</winProgressEnd>\ '
            + '<costGoodsManufactured>' + costOfSalesServicesSch.costGoodsManufactured + '</costGoodsManufactured>\ '
            + '<finishedGoodsBeg>' + costOfSalesServicesSch.finishedGoodsBeg + '</finishedGoodsBeg>\ '
            + '<finishedGoodsEnd>' + costOfSalesServicesSch.finishedGoodsEnd + '</finishedGoodsEnd>\ '
            + '<totalCostGoodsManufacturedAndSold>' + costOfSalesServicesSch.totalCostGoodsManufacturedAndSold + '</totalCostGoodsManufacturedAndSold>\ '
            + '<salaries>' + costOfSalesServicesSch.salaries + '</salaries>\ '
            + '<materials>' + costOfSalesServicesSch.materials + '</materials>\ '
            + '<sched2CDepreciation>' + costOfSalesServicesSch.sched2CDepreciation + '</sched2CDepreciation>\ '
            + '<sched2CRental>' + costOfSalesServicesSch.sched2CRental + '</sched2CRental>\ '
            + '<outsideServ>' + costOfSalesServicesSch.outsideServ + '</outsideServ>\ '
            + '<others>' + costOfSalesServicesSch.others + '</others>\ '
            + '<costService>' + costOfSalesServicesSch.costService + '</costService>\ '
            + '<totalCostSalesAndServices>' + costOfSalesServicesSch.totalCostSalesAndServices + '</totalCostSalesAndServices>\ '
         + '</costOfSalesServicesSch>\ ';

    var costOfSalesServicesSchSpsWs = '<costOfSalesServicesSchSps>\ '
        + '<goodsInvBeg>' + costOfSalesServicesSchSps.goodsInvBeg + '</goodsInvBeg>\ '
        + '<purGoods>' + costOfSalesServicesSchSps.purGoods + '</purGoods>\ '
        + '<goodsAvail>' + costOfSalesServicesSchSps.goodsAvail + '</goodsAvail>\ '
        + '<goodsInvEnd>' + costOfSalesServicesSchSps.goodsInvEnd + '</goodsInvEnd>\ '
        + '<costSales>' + costOfSalesServicesSchSps.costSales + '</costSales>\ '
        + '<directMatsBeg>' + costOfSalesServicesSchSps.directMatsBeg + '</directMatsBeg>\ '
        + '<purDirectMats>' + costOfSalesServicesSchSps.purDirectMats + '</purDirectMats>\ '
        + '<matsAvail>' + costOfSalesServicesSchSps.matsAvail + '</matsAvail>\ '
        + '<directMatsEnd>' + costOfSalesServicesSchSps.directMatsEnd + '</directMatsEnd>\ '
        + '<rawMats>' + costOfSalesServicesSchSps.rawMats + '</rawMats>\ '
        + '<directLabor>' + costOfSalesServicesSchSps.directLabor + '</directLabor>\ '
        + '<manufacturingOverhead>' + costOfSalesServicesSchSps.manufacturingOverhead + '</manufacturingOverhead>\ '
        + '<totalManufacturingCost>' + costOfSalesServicesSchSps.totalManufacturingCost + '</totalManufacturingCost>\ '
        + '<workInProgressBeg>' + costOfSalesServicesSchSps.workInProgressBeg + '</workInProgressBeg>\ '
        + '<winProgressEnd>' + costOfSalesServicesSchSps.winProgressEnd + '</winProgressEnd>\ '
        + '<costGoodsManufactured>' + costOfSalesServicesSchSps.costGoodsManufactured + '</costGoodsManufactured>\ '
        + '<finishedGoodsBeg>' + costOfSalesServicesSchSps.finishedGoodsBeg + '</finishedGoodsBeg>\ '
        + '<finishedGoodsEnd>' + costOfSalesServicesSchSps.finishedGoodsEnd + '</finishedGoodsEnd>\ '
        + '<totalCostGoodsManufacturedAndSold>' + costOfSalesServicesSchSps.totalCostGoodsManufacturedAndSold + '</totalCostGoodsManufacturedAndSold>\ '
        + '<salaries>' + costOfSalesServicesSchSps.salaries + '</salaries>\ '
        + '<materials>' + costOfSalesServicesSchSps.materials + '</materials>\ '
        + '<sched2CDepreciation>' + costOfSalesServicesSchSps.sched2CDepreciation + '</sched2CDepreciation>\ '
        + '<sched2CRental>' + costOfSalesServicesSchSps.sched2CRental + '</sched2CRental>\ '
        + '<outsideServ>' + costOfSalesServicesSchSps.outsideServ + '</outsideServ>\ '
        + '<others>' + costOfSalesServicesSchSps.others + '</others>\ '
        + '<costService>' + costOfSalesServicesSchSps.costService + '</costService>\ '
        + '<totalCostSalesAndServices>' + costOfSalesServicesSchSps.totalCostSalesAndServices + '</totalCostSalesAndServices>\ '
     + '</costOfSalesServicesSchSps>\ ';

    var nonOperatingIncomeWsSch = '<nonOperatingIncomeSch>\ '
        + '<natureOfIncome></natureOfIncome>\ '
        + '<natureOfIncomeValue></natureOfIncomeValue>\ '
        + '<totalNonOperatingIncome>0</totalNonOperatingIncome>\ ';
    //iter start
    var nonOperatingIncomeListHolderSch = [];

    for (key in nonOperatingIncomeListSch) {
        var obj = '<nonOperatingIncome>\ '
		   + '<natureOfIncome>' + nonOperatingIncomeListSch[key].natureOfIncome + '</natureOfIncome>\ '
		   + '<natureOfIncomeValue>' + nonOperatingIncomeListSch[key].natureOfIncomeValue + '</natureOfIncomeValue>\ '
		+ '</nonOperatingIncome>\ ';
        nonOperatingIncomeListHolderSch.push(obj);
    };

    var nonOperatingIncomeobjHolderSch = "";

    for (key in nonOperatingIncomeListHolderSch) {
        nonOperatingIncomeobjHolderSch += nonOperatingIncomeListHolderSch[key];
    };

    //iter end
    var nonOperatingIncomeSchClosing = '</nonOperatingIncomeSch>\ ';


    var nonOperatingIncomeSpouseWSSch = '<nonOperatingIncomeSchSps>\ '
		+ '<natureOfIncome></natureOfIncome>\ '
		+ '<natureOfIncomeValue></natureOfIncomeValue>\ '
		+ '<totalNonOperatingIncome>0</totalNonOperatingIncome>\ ';
    //iter start
    var nonOperatingIncomeListSpouseHolderSch = [];

    for (key in nonOperatingIncomeSpouseListSch) {
        var obj = '<nonOperatingIncome>\ '
           + '<natureOfIncome>' + nonOperatingIncomeSpouseListSch[key].natureOfIncome + '</natureOfIncome>\ '
           + '<natureOfIncomeValue>' + nonOperatingIncomeSpouseListSch[key].natureOfIncomeValue + '</natureOfIncomeValue>\ '
        + '</nonOperatingIncome>\ ';
        nonOperatingIncomeListSpouseHolderSch.push(obj);
    };

    var nonOperatingIncomeSpouseobjHolderSch = "";

    for (key in nonOperatingIncomeListSpouseHolderSch) {
        nonOperatingIncomeSpouseobjHolderSch += nonOperatingIncomeListSpouseHolderSch[key];
    }

    //iter end
    var nonOperatingIncomeCloseSch = '</nonOperatingIncomeSchSps>\ ';



    var ordinaryAllowableItemizedDeductionWsSch = '<OrdinaryAllowableItemizedDeductionSch>\ '
        + '<adAndPromotionsVal>' + ordinaryAllowableItemizedDeductionSch.adAndPromotionsVal + '</adAndPromotionsVal>\ '
        + '<amortizatiosDescSecond></amortizatiosDescSecond>\ '
        + '<amortizatiosDescThird></amortizatiosDescThird>\ '
        + '<amortizatiosDescFourth></amortizatiosDescFourth>\ '
        + '<amortizatiosValSecond></amortizatiosValSecond>\ '
        + '<amortizatiosValThird></amortizatiosValThird>\ '
        + '<amortizatiosValFourth></amortizatiosValFourth>\ ';
    var listAmortizationsHolderSch = [];
    for (key in listAmortizationsSch) {
        var obj = '<listAmortizations>\ '
        + '<otherExpandableDesc>' + listAmortizationsSch[key].otherExpandableDesc + '</otherExpandableDesc>\ '
        + '<otherExpandableAmount>' + listAmortizationsSch[key].otherExpandableAmount + '</otherExpandableAmount>\ '
        + '<otherExpandableAmountSpecial></otherExpandableAmountSpecial>\ '
        + '<otherExpandableAmountRegular></otherExpandableAmountRegular>\ '
        + '<otherExpandableAmountTotal></otherExpandableAmountTotal>\ '
        + '</listAmortizations>';
        listAmortizationsHolderSch.push(obj);
    }
    var listAmortizationsObjectHolderSch = "";
    for (key in listAmortizationsHolderSch) {
        listAmortizationsObjectHolderSch += listAmortizationsHolderSch[key];
    }
    var badDebtsToTravelSch =
        '<badDebts>' + ordinaryAllowableItemizedDeductionSch.badDebts + '</badDebts>\ '
        + '<charitableContributions>' + ordinaryAllowableItemizedDeductionSch.charitableContributions + '</charitableContributions>\ '
        + '<commissions>' + ordinaryAllowableItemizedDeductionSch.commissions + '</commissions>\ '
        + '<communicationLightWater>' + ordinaryAllowableItemizedDeductionSch.communicationLightWater + '</communicationLightWater>\ '
        + '<utilities>' + ordinaryAllowableItemizedDeductionSch.utilities + '</utilities>\ '
        + '<depletion>' + ordinaryAllowableItemizedDeductionSch.depletion + '</depletion>\ '
        + '<depreciation>' + ordinaryAllowableItemizedDeductionSch.depreciation + '</depreciation>\ '
        + '<directorFee>' + ordinaryAllowableItemizedDeductionSch.directorFee + '</directorFee>\ '
        + '<fringeBenefits>' + ordinaryAllowableItemizedDeductionSch.fringeBenefits + '</fringeBenefits>\ '
        + '<fuelAndOil>' + ordinaryAllowableItemizedDeductionSch.fuelAndOil + '</fuelAndOil>\ '
        + '<insurance>' + ordinaryAllowableItemizedDeductionSch.insurance + '</insurance>\ '
        + '<iterest>' + ordinaryAllowableItemizedDeductionSch.iterest + '</iterest>\ '
        + '<janitorialAndMessengerial>' + ordinaryAllowableItemizedDeductionSch.janitorialAndMessengerial + '</janitorialAndMessengerial>\ '
        + '<losses>' + ordinaryAllowableItemizedDeductionSch.losses + '</losses>\ '
        + '<mgmtAndConsultancyFee>' + ordinaryAllowableItemizedDeductionSch.mgmtAndConsultancyFee + '</mgmtAndConsultancyFee>\ '
        + '<misc>' + ordinaryAllowableItemizedDeductionSch.misc + '</misc>\ '
        + '<officeSupplies>' + ordinaryAllowableItemizedDeductionSch.officeSupplies + '</officeSupplies>\ '
        + '<otherServices>' + ordinaryAllowableItemizedDeductionSch.otherServices + '</otherServices>\ '
        + '<professionalFees>' + ordinaryAllowableItemizedDeductionSch.professionalFees + '</professionalFees>\ '
        + '<schedGRental>' + ordinaryAllowableItemizedDeductionSch.schedGRental + '</schedGRental>\ '
        + '<repairLabor>' + ordinaryAllowableItemizedDeductionSch.repairLabor + '</repairLabor>\ '
        + '<repairMaterials>' + ordinaryAllowableItemizedDeductionSch.repairMaterials + '</repairMaterials>\ '
        + '<entertainment>' + ordinaryAllowableItemizedDeductionSch.entertainment + '</entertainment>\ '
        + '<researchAndDev>' + ordinaryAllowableItemizedDeductionSch.researchAndDev + '</researchAndDev>\ '
        + '<royalties>' + ordinaryAllowableItemizedDeductionSch.royalties + '</royalties>\ '
        + '<salariesAndAllownces>' + ordinaryAllowableItemizedDeductionSch.salariesAndAllownces + '</salariesAndAllownces>\ '
        + '<securityServices>' + ordinaryAllowableItemizedDeductionSch.securityServices + '</securityServices>\ '
        + '<otherContributions>' + ordinaryAllowableItemizedDeductionSch.otherContributions + '</otherContributions>\ '
        + '<taxesAndLiscenses>' + ordinaryAllowableItemizedDeductionSch.taxesAndLiscenses + '</taxesAndLiscenses>\ '
        + '<tollingFees>' + ordinaryAllowableItemizedDeductionSch.tollingFees + '</tollingFees>\ '
        + '<trainingsAndSeminars>' + ordinaryAllowableItemizedDeductionSch.trainingsAndSeminars + '</trainingsAndSeminars>\ '
        + '<travelTransportaion>' + ordinaryAllowableItemizedDeductionSch.travelTransportaion + '</travelTransportaion>\ ';

    var ordinaryOtherAlllowableItemizedDeductionSch =
        '<othersFirstDescFirst>' + '</othersFirstDescFirst>  \ '
        + '<othersFirstDescSecond>' + '</othersFirstDescSecond> \ '
        + '<othersFirstDescThird>' + '</othersFirstDescThird>  \ '
        + '<othersFirstDescfourth>' + '</othersFirstDescfourth>  \ '
        + '<otherFirstValue>' + '</otherFirstValue>  \ '
        + '<otherSecondValue>' + '</otherSecondValue>  \ '
        + '<otherThirdValue>' + '</otherThirdValue>  \ '
        + '<otherFourthValue>' + '</otherFourthValue>';

    var listOtherOrdinaryItemizedDeductionsHolderSch = [];
    for (key in listOtherOrdinaryItemizedDeductionsSch) {
        var obj =
            '<listOtherOrdinaryItemizedDeductions\>\ '
            + '<otherExpandableDesc>' + listOtherOrdinaryItemizedDeductionsSch[key].otherExpandableDesc + '</otherExpandableDesc> \ '
            + '<otherExpandableAmount>' + listOtherOrdinaryItemizedDeductionsSch[key].otherExpandableAmount + '</otherExpandableAmount> \ '
            + '<otherExpandableAmountSpecial>' + listOtherOrdinaryItemizedDeductionsSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial> \ '
            + '<otherExpandableAmountRegular>' + listOtherOrdinaryItemizedDeductionsSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular> \ '
            + '<otherExpandableAmountTotal>' + listOtherOrdinaryItemizedDeductionsSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal> \ '
            + '</listOtherOrdinaryItemizedDeductions>';

        listOtherOrdinaryItemizedDeductionsHolderSch.push(obj);
    }

    var listOtherOrdinaryItemizedDeductionsObjectHolderSch = "";
    for (key in listOtherOrdinaryItemizedDeductionsHolderSch) {
        listOtherOrdinaryItemizedDeductionsObjectHolderSch += listOtherOrdinaryItemizedDeductionsHolderSch[key];
    }

    var closingOrdinaryOtherAlllowableItemizedDeductionSch =
        '<totalOrdinaryAllowableItemizedDeductions>' + ordinaryAllowableItemizedDeductionSch.totalOrdinaryAllowableItemizedDeductions + '</totalOrdinaryAllowableItemizedDeductions>'
        + '</OrdinaryAllowableItemizedDeductionSch>';



    var ordinaryAllowableItemizedDeductionSpouseWsSch = '<OrdinaryAllowableItemizedDeductionSchSps>\ '
        + '<adAndPromotionsVal>' + ordinaryAllowableItemizedDeductionSpouseSch.adAndPromotionsVal + '</adAndPromotionsVal>\ '
        + '<amortizatiosDescSecond></amortizatiosDescSecond>\ '
        + '<amortizatiosDescThird></amortizatiosDescThird>\ '
        + '<amortizatiosDescFourth></amortizatiosDescFourth>\ '
        + '<amortizatiosValSecond></amortizatiosValSecond>\ '
        + '<amortizatiosValThird></amortizatiosValThird>\ '
        + '<amortizatiosValFourth></amortizatiosValFourth>';

    var listAmortizationsHolderSpouseSch = [];
    for (key in listAmortizationsSpouseSch) {
        var obj = '<listAmortizations>\ '
        + '<otherExpandableDesc>' + listAmortizationsSpouseSch[key].otherExpandableDesc + '</otherExpandableDesc>\ '
        + '<otherExpandableAmount>' + listAmortizationsSpouseSch[key].otherExpandableAmount + '</otherExpandableAmount>\ '
        + '<otherExpandableAmountSpecial></otherExpandableAmountSpecial>\ '
        + '<otherExpandableAmountRegular></otherExpandableAmountRegular>\ '
        + '<otherExpandableAmountTotal></otherExpandableAmountTotal>\ '
        + '</listAmortizations>';
        listAmortizationsHolderSpouseSch.push(obj);
    }

    var listAmortizationsObjectHolderSpouseSch = "";
    for (key in listAmortizationsHolderSpouseSch) {
        listAmortizationsObjectHolderSpouseSch += listAmortizationsHolderSpouseSch[key];
    }
    var badDebtsToTraveSpouselSch =
        '<badDebts>' + ordinaryAllowableItemizedDeductionSpouseSch.badDebts + '</badDebts>\ '
        + '<charitableContributions>' + ordinaryAllowableItemizedDeductionSpouseSch.charitableContributions + '</charitableContributions>\ '
        + '<commissions>' + ordinaryAllowableItemizedDeductionSpouseSch.commissions + '</commissions>\ '
        + '<communicationLightWater>' + ordinaryAllowableItemizedDeductionSpouseSch.communicationLightWater + '</communicationLightWater>\ '
        + '<utilities>' + ordinaryAllowableItemizedDeductionSpouseSch.utilities + '</utilities>\ '
        + '<depletion>' + ordinaryAllowableItemizedDeductionSpouseSch.depletion + '</depletion>\ '
        + '<depreciation>' + ordinaryAllowableItemizedDeductionSpouseSch.depreciation + '</depreciation>\ '
        + '<directorFee>' + ordinaryAllowableItemizedDeductionSpouseSch.directorFee + '</directorFee>\ '
        + '<fringeBenefits>' + ordinaryAllowableItemizedDeductionSpouseSch.fringeBenefits + '</fringeBenefits>\ '
        + '<fuelAndOil>' + ordinaryAllowableItemizedDeductionSpouseSch.fuelAndOil + '</fuelAndOil>\ '
        + '<insurance>' + ordinaryAllowableItemizedDeductionSpouseSch.insurance + '</insurance>\ '
        + '<iterest>' + ordinaryAllowableItemizedDeductionSpouseSch.iterest + '</iterest>\ '
        + '<janitorialAndMessengerial>' + ordinaryAllowableItemizedDeductionSpouseSch.janitorialAndMessengerial + '</janitorialAndMessengerial>\ '
        + '<losses>' + ordinaryAllowableItemizedDeductionSpouseSch.losses + '</losses>\ '
        + '<mgmtAndConsultancyFee>' + ordinaryAllowableItemizedDeductionSpouseSch.mgmtAndConsultancyFee + '</mgmtAndConsultancyFee>\ '
        + '<misc>' + ordinaryAllowableItemizedDeductionSpouseSch.misc + '</misc>\ '
        + '<officeSupplies>' + ordinaryAllowableItemizedDeductionSpouseSch.officeSupplies + '</officeSupplies>\ '
        + '<otherServices>' + ordinaryAllowableItemizedDeductionSpouseSch.otherServices + '</otherServices>\ '
        + '<professionalFees>' + ordinaryAllowableItemizedDeductionSpouseSch.professionalFees + '</professionalFees>\ '
        + '<schedGRental>' + ordinaryAllowableItemizedDeductionSpouseSch.schedGRental + '</schedGRental>\ '
        + '<repairLabor>' + ordinaryAllowableItemizedDeductionSpouseSch.repairLabor + '</repairLabor>\ '
        + '<repairMaterials>' + ordinaryAllowableItemizedDeductionSpouseSch.repairMaterials + '</repairMaterials>\ '
        + '<entertainment>' + ordinaryAllowableItemizedDeductionSpouseSch.entertainment + '</entertainment>\ '
        + '<researchAndDev>' + ordinaryAllowableItemizedDeductionSpouseSch.researchAndDev + '</researchAndDev>\ '
        + '<royalties>' + ordinaryAllowableItemizedDeductionSpouseSch.royalties + '</royalties>\ '
        + '<salariesAndAllownces>' + ordinaryAllowableItemizedDeductionSpouseSch.salariesAndAllownces + '</salariesAndAllownces>\ '
        + '<securityServices>' + ordinaryAllowableItemizedDeductionSpouseSch.securityServices + '</securityServices>\ '
        + '<otherContributions>' + ordinaryAllowableItemizedDeductionSpouseSch.otherContributions + '</otherContributions>\ '
        + '<taxesAndLiscenses>' + ordinaryAllowableItemizedDeductionSpouseSch.taxesAndLiscenses + '</taxesAndLiscenses>\ '
        + '<tollingFees>' + ordinaryAllowableItemizedDeductionSpouseSch.tollingFees + '</tollingFees>\ '
        + '<trainingsAndSeminars>' + ordinaryAllowableItemizedDeductionSpouseSch.trainingsAndSeminars + '</trainingsAndSeminars>\ '
        + '<travelTransportaion>' + ordinaryAllowableItemizedDeductionSpouseSch.travelTransportaion + '</travelTransportaion>';

    var ordinaryOtherAlllowableItemizedDeductionSpouseSch =
        '<othersFirstDescFirst></othersFirstDescFirst>\ '
        + '<othersFirstDescSecond></othersFirstDescSecond>\ '
        + '<othersFirstDescThird></othersFirstDescThird>\ '
        + '<othersFirstDescfourth></othersFirstDescfourth>\ '
        + '<otherFirstValue></otherFirstValue>\ '
        + '<otherSecondValue></otherSecondValue>\ '
        + '<otherThirdValue></otherThirdValue>\ '
        + '<otherFourthValue></otherFourthValue>\ ';

    var listOtherOrdinaryItemizedDeductionsHolderSpouseSch = [];
    for (key in listOtherOrdinaryItemizedDeductionsSpouseSch) {
        var obj =
            '<listOtherOrdinaryItemizedDeductions>\ '
            + '<otherExpandableDesc>' + listOtherOrdinaryItemizedDeductionsSpouseSch[key].otherExpandableDesc + '</otherExpandableDesc>\ '
            + '<otherExpandableAmount>' + listOtherOrdinaryItemizedDeductionsSpouseSch[key].otherExpandableAmount + '</otherExpandableAmount>\ '
            + '<otherExpandableAmountSpecial>' + listOtherOrdinaryItemizedDeductionsSpouseSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>\ '
            + '<otherExpandableAmountRegular>' + listOtherOrdinaryItemizedDeductionsSpouseSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>\ '
            + '<otherExpandableAmountTotal>' + listOtherOrdinaryItemizedDeductionsSpouseSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>\ '
            + '</listOtherOrdinaryItemizedDeductions>';

        listOtherOrdinaryItemizedDeductionsHolderSpouseSch.push(obj);
    }

    var listOtherOrdinaryItemizedDeductionsObjectHolderSpouseSch = "";
    for (key in listOtherOrdinaryItemizedDeductionsHolderSpouseSch) {
        listOtherOrdinaryItemizedDeductionsObjectHolderSpouseSch += listOtherOrdinaryItemizedDeductionsHolderSpouseSch[key];
    }

    var closingOrdinaryOtherAlllowableItemizedDeductionSpouseSch =
        '<totalOrdinaryAllowableItemizedDeductions>' + ordinaryAllowableItemizedDeductionSpouseSch.totalOrdinaryAllowableItemizedDeductions + '</totalOrdinaryAllowableItemizedDeductions>'
        + '</OrdinaryAllowableItemizedDeductionSchSps>';

    var specialAllowableItemizedDeductionWsSch =
        '<specialAllowableItemizedDeductionSch> \ '
        + '<specialAllowableItemizedDeductionsDescription1></specialAllowableItemizedDeductionsDescription1> \ '
        + '<specialAllowableItemizedDeductionsDescription2></specialAllowableItemizedDeductionsDescription2> \ '
        + '<specialAllowableItemizedDeductionsDescription3></specialAllowableItemizedDeductionsDescription3> \ '
        + '<specialAllowableItemizedDeductionsDescription4></specialAllowableItemizedDeductionsDescription4> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis1></specialAllowableItemizedDeductionsLegalBasis1> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis2></specialAllowableItemizedDeductionsLegalBasis2> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis3></specialAllowableItemizedDeductionsLegalBasis3> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis4></specialAllowableItemizedDeductionsLegalBasis4> \ '
        + '<specialAllowableItemizedDeductionsAmount1></specialAllowableItemizedDeductionsAmount1> \ '
        + '<specialAllowableItemizedDeductionsAmount2></specialAllowableItemizedDeductionsAmount2> \ '
        + '<specialAllowableItemizedDeductionsAmount3></specialAllowableItemizedDeductionsAmount3> \ '
        + '<specialAllowableItemizedDeductionsAmount4></specialAllowableItemizedDeductionsAmount4> \ '
        + '<totalSpecialAllowableItemizedDeductions></totalSpecialAllowableItemizedDeductions> \ '
        + '<!--Zero or more repetitions:-->\ ';

    var listSpecialAllowableItemizedDeductionHolderSch = [];
    for (key in listSpecialAllowableItemizedDeductionSch) {
        var obj = '<listSched5AdditionalAttachments>'
        + '<otherExpandableDesc>' + listSpecialAllowableItemizedDeductionSch[key].otherExpandableDesc + '</otherExpandableDesc> \ '
                + '<otherExpandableAmount>' + listSpecialAllowableItemizedDeductionSch[key].otherExpandableAmount + '</otherExpandableAmount> \ '
                + '<otherExpandableAmountSpecial></otherExpandableAmountSpecial> \ '
                + '<otherExpandableAmountRegular></otherExpandableAmountRegular> \ '
                + '<otherExpandableAmountTotal>' + listSpecialAllowableItemizedDeductionSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal> \ '
                + '<legalBasis>' + listSpecialAllowableItemizedDeductionSch[key].legalBasis + '</legalBasis> \ '
                + '<description></description> \ '
                + '<value></value> \ '
                + '</listSched5AdditionalAttachments> \ ';
        listSpecialAllowableItemizedDeductionHolderSch.push(obj);
    }

    var listSpecialAllowableItemizedDeductionObjectHolderSch = "";
    for (key in listSpecialAllowableItemizedDeductionHolderSch) {
        listSpecialAllowableItemizedDeductionObjectHolderSch += listSpecialAllowableItemizedDeductionHolderSch[key];
    }

    var closingSpecialAllowableItemizedDeductionWsSch =
        '</specialAllowableItemizedDeductionSch> \ ';


    var specialAllowableItemizedDeductionSpouseWsSch =
        '<specialAllowableItemizedDeductionSchSps> \ '
        + '<specialAllowableItemizedDeductionsDescription1></specialAllowableItemizedDeductionsDescription1> \ '
        + '<specialAllowableItemizedDeductionsDescription2></specialAllowableItemizedDeductionsDescription2> \ '
        + '<specialAllowableItemizedDeductionsDescription3></specialAllowableItemizedDeductionsDescription3> \ '
        + '<specialAllowableItemizedDeductionsDescription4></specialAllowableItemizedDeductionsDescription4> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis1></specialAllowableItemizedDeductionsLegalBasis1> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis2></specialAllowableItemizedDeductionsLegalBasis2> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis3></specialAllowableItemizedDeductionsLegalBasis3> \ '
        + '<specialAllowableItemizedDeductionsLegalBasis4></specialAllowableItemizedDeductionsLegalBasis4> \ '
        + '<specialAllowableItemizedDeductionsAmount1></specialAllowableItemizedDeductionsAmount1> \ '
        + '<specialAllowableItemizedDeductionsAmount2></specialAllowableItemizedDeductionsAmount2> \ '
        + '<specialAllowableItemizedDeductionsAmount3></specialAllowableItemizedDeductionsAmount3> \ '
        + '<specialAllowableItemizedDeductionsAmount4></specialAllowableItemizedDeductionsAmount4> \ '
        + '<totalSpecialAllowableItemizedDeductions></totalSpecialAllowableItemizedDeductions> \ '
        + '<!--Zero or more repetitions:-->\ ';

    var listSpecialAllowableItemizedDeductionSpouseHolderSch = [];
    for (key in listSpecialAllowableItemizedDeductionSpouseSch) {
        var obj = '<listSched5AdditionalAttachments>'
        + '<otherExpandableDesc>' + listSpecialAllowableItemizedDeductionSpouseSch[key].otherExpandableDesc + '</otherExpandableDesc> \ '
                + '<otherExpandableAmount>' + listSpecialAllowableItemizedDeductionSpouseSch[key].otherExpandableAmount + '</otherExpandableAmount> \ '
                + '<otherExpandableAmountSpecial></otherExpandableAmountSpecial> \ '
                + '<otherExpandableAmountRegular></otherExpandableAmountRegular> \ '
                + '<otherExpandableAmountTotal>' + listSpecialAllowableItemizedDeductionSpouseSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal> \ '
                + '<legalBasis>' + listSpecialAllowableItemizedDeductionSpouseSch[key].legalBasis + '</legalBasis> \ '
                + '<description></description> \ '
                + '<value></value> \ '
                + '</listSched5AdditionalAttachments> \ ';
        listSpecialAllowableItemizedDeductionSpouseHolderSch.push(obj);
    }

    var listSpecialAllowableItemizedDeductionObjectSpouseHolderSch = "";
    for (key in listSpecialAllowableItemizedDeductionSpouseHolderSch) {
        listSpecialAllowableItemizedDeductionObjectSpouseHolderSch += listSpecialAllowableItemizedDeductionSpouseHolderSch[key];
    }

    var closingSpecialAllowableItemizedDeductionSpouseSchWs =
        '</specialAllowableItemizedDeductionSchSps> \ ';

    var taxCreditsPaymentSchWs = '<taxCreditsPaymentSch>\ '
            + '<priorYearsExcessCredits>' + taxCreditsPaymentsSch.priorYearsExcessCredits + '</priorYearsExcessCredits>\ '
            + '<taxPaymentsfortheFirstQuarters>' + taxCreditsPaymentsSch.taxPaymentsfortheFirstQuarters + '</taxPaymentsfortheFirstQuarters>\ '
            + '<creditableTaxWithheldfortheFirstThreeQuarters>' + taxCreditsPaymentsSch.creditableTaxWithheldfortheFirstThreeQuarters + '</creditableTaxWithheldfortheFirstThreeQuarters>\ '
            + '<creditableTaxWithheldfortheFirst4thQuarters>' + taxCreditsPaymentsSch.creditableTaxWithheldfortheFirst4thQuarters + '</creditableTaxWithheldfortheFirst4thQuarters>\ '
            + '<taxPaidinReturnPreviouslyFiled>' + taxCreditsPaymentsSch.taxPaidinReturnPreviouslyFiled + '</taxPaidinReturnPreviouslyFiled>\ '
            + '<foreignTaxCredits>' + taxCreditsPaymentsSch.foreignTaxCredits + '</foreignTaxCredits>\ '
            + '<SpecialTaxCredits>' + taxCreditsPaymentsSch.SpecialTaxCredits + '</SpecialTaxCredits>\ '
            + '<otherPaymentsDescription>' + taxCreditsPaymentsSch.otherPaymentsDescription + '</otherPaymentsDescription>\ '
            + '<otherPaymentsCreditsSpecify>' + taxCreditsPaymentsSch.otherPaymentsCreditsSpecify + '</otherPaymentsCreditsSpecify>\ '
            + '<totalTaxCreditsPayments>' + taxCreditsPaymentsSch.totalTaxCreditsPayments + '</totalTaxCreditsPayments>\ '
            + '<creditableTaxWithheld2316>' + taxCreditsPaymentsSch.creditableTaxWithheld2316 + '</creditableTaxWithheld2316>\ '
            + '</taxCreditsPaymentSch>\ ';

    var taxCreditsPaymentSchSpsWs = '<taxCreditsPaymentSchSps>\ '
        + '<priorYearsExcessCredits>' + taxCreditsPaymentsSpouseSch.priorYearsExcessCredits + '</priorYearsExcessCredits>\ '
        + '<taxPaymentsfortheFirstQuarters>' + taxCreditsPaymentsSpouseSch.taxPaymentsfortheFirstQuarters + '</taxPaymentsfortheFirstQuarters>\ '
        + '<creditableTaxWithheldfortheFirstThreeQuarters>' + taxCreditsPaymentsSpouseSch.creditableTaxWithheldfortheFirstThreeQuarters + '</creditableTaxWithheldfortheFirstThreeQuarters>\ '
        + '<creditableTaxWithheldfortheFirst4thQuarters>' + taxCreditsPaymentsSpouseSch.creditableTaxWithheldfortheFirst4thQuarters + '</creditableTaxWithheldfortheFirst4thQuarters>\ '
        + '<taxPaidinReturnPreviouslyFiled>' + taxCreditsPaymentsSpouseSch.taxPaidinReturnPreviouslyFiled + '</taxPaidinReturnPreviouslyFiled>\ '
        + '<foreignTaxCredits>' + taxCreditsPaymentsSpouseSch.foreignTaxCredits + '</foreignTaxCredits>\ '
        + '<SpecialTaxCredits>' + taxCreditsPaymentsSpouseSch.SpecialTaxCredits + '</SpecialTaxCredits>\ '
        + '<otherPaymentsDescription>' + taxCreditsPaymentsSpouseSch.otherPaymentsDescription + '</otherPaymentsDescription>\ '
        + '<otherPaymentsCreditsSpecify>' + taxCreditsPaymentsSpouseSch.otherPaymentsCreditsSpecify + '</otherPaymentsCreditsSpecify>\ '
        + '<totalTaxCreditsPayments>' + taxCreditsPaymentsSpouseSch.totalTaxCreditsPayments + '</totalTaxCreditsPayments>\ '
        + '<creditableTaxWithheld2316>' + taxCreditsPaymentsSpouseSch.creditableTaxWithheld2316 + '</creditableTaxWithheld2316>\ '
        + '</taxCreditsPaymentSchSps>\ ';

    var reconciliationOfNetIncomeWsSch = '<reconciliationOfNetIncomeSch>'
        + '<netIncomePerBooks>' + reconciliationOfNetIncomeSch.netIncomePerBooks + '</netIncomePerBooks>'
        + '<nonDeductibleExpensesItem2Description>' + '</nonDeductibleExpensesItem2Description>'
        + '<nonDeductibleExpensesItem2Value>' + '</nonDeductibleExpensesItem2Value>'
        + '<nonDeductibleExpensesItem3Description>' + '</nonDeductibleExpensesItem3Description>'
        + '<nonDeductibleExpensesItem3Value>' + '</nonDeductibleExpensesItem3Value> \ ';
    //iter start
    var nonDeductibleExpenseListHolderSch = [];
    for (key in nonDeductibleExpenseListSch) {
        var obj = '<listOfNonDeductibleExpensesItem3>'
               + '<otherExpandableDesc>' + nonDeductibleExpenseListSch[key].otherExpandableDesc + '</otherExpandableDesc>'
               + '<otherExpandableAmount>' + nonDeductibleExpenseListSch[key].otherExpandableAmount + '</otherExpandableAmount>'
               + '<otherExpandableAmountSpecial>' + nonDeductibleExpenseListSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
               + '<otherExpandableAmountRegular>' + nonDeductibleExpenseListSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
               + '<otherExpandableAmountTotal>' + nonDeductibleExpenseListSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
            + '</listOfNonDeductibleExpensesItem3>';
        nonDeductibleExpenseListHolderSch.push(obj);
    }
    var nonDeductibleExpenseListObjectHolderSch = "";
    for (key in nonDeductibleExpenseListHolderSch) {
        nonDeductibleExpenseListObjectHolderSch += nonDeductibleExpenseListHolderSch[key];
    }
    var nonTaxableWsSch =
	'<totalNonDeductibleExpenses>' + reconciliationOfNetIncomeSch.totalNonDeductibleExpenses + '</totalNonDeductibleExpenses>'
	+ '<nonTaxableAndSpDeductionsItem5Description>' + '</nonTaxableAndSpDeductionsItem5Description>'
	+ '<nonTaxableAndSpDeductionsItem5Value>' + '</nonTaxableAndSpDeductionsItem5Value>'
	+ '<nonTaxableAndSpDeductionsItem6Description>' + '</nonTaxableAndSpDeductionsItem6Description>'
	+ '<nonTaxableAndSpDeductionsItem6Value>' + '</nonTaxableAndSpDeductionsItem6Value>'
    //iter start
    var listNonTaxableHolderSch = [];
    for (key in listNonTaxableSch) {
        var obj = '<listOfnonTaxableAndSpDeductionsItem6>\ '
               + '<otherExpandableDesc>' + listNonTaxableSch[key].otherExpandableDesc + '</otherExpandableDesc>'
               + '<otherExpandableAmount>' + listNonTaxableSch[key].otherExpandableAmount + '</otherExpandableAmount>'
               + '<otherExpandableAmountSpecial>' + listNonTaxableSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
               + '<otherExpandableAmountRegular>' + listNonTaxableSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
               + '<otherExpandableAmountTotal>' + listNonTaxableSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
            + '</listOfnonTaxableAndSpDeductionsItem6>';
        listNonTaxableHolderSch.push(obj);
    }
    var listNonTaxableObjectHolderSch = "";
    for (key in listNonTaxableHolderSch) {
        listNonTaxableObjectHolderSch += listNonTaxableHolderSch;
    }

    //iter end
    var specialDeductionWsSch =
	'<specialDeductionsItem7Description>' + '</specialDeductionsItem7Description>'
	+ '<specialDeductionsItem7Value>' + '</specialDeductionsItem7Value>'
	+ '<specialDeductionsItem8Description>' + '</specialDeductionsItem8Description>'
	+ '<specialDeductionsItem8Value>' + '</specialDeductionsItem8Value>';
    //iter start
    var listSpecialDeductionsHolderSch = [];
    for (key in listSpecialDeductionsSch) {
        var obj =
        '<listOfSpecialDeductionsItem8>'
        + '<otherExpandableDesc>' + listSpecialDeductionsSch[key].otherExpandableDesc + '</otherExpandableDesc>'
        + '<otherExpandableAmount>' + listSpecialDeductionsSch[key].otherExpandableAmount + '</otherExpandableAmount>'
        + '<otherExpandableAmountSpecial>' + listSpecialDeductionsSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
        + '<otherExpandableAmountRegular>' + listSpecialDeductionsSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
        + '<otherExpandableAmountTotal>' + listSpecialDeductionsSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
        + '</listOfSpecialDeductionsItem8>';
        listSpecialDeductionsHolderSch.push(obj);
    }
    var listSpecialDeductionObjectHolderSch = "";
    for (key in listSpecialDeductionsHolderSch) {
        listSpecialDeductionObjectHolderSch += listSpecialDeductionsHolderSch[key];
    }
    //iter end
    var closeReconciliationOfNetIncomeWsSch =
	'<totalNonTaxableAndSpDeductions>' + reconciliationOfNetIncomeSch.totalNonTaxableAndSpDeductions + '</totalNonTaxableAndSpDeductions>'
	+ '<netTaxableIncome>' + reconciliationOfNetIncomeSch.reconciliationOfNetIncome + '</netTaxableIncome>'
	+ '</reconciliationOfNetIncomeSch>';




    var reconciliationOfNetIncomeWsSchSpouse = '<reconciliationOfNetIncomeSchSps>'
		+ '<netIncomePerBooks>' + reconciliationOfNetIncomeSpouseSch.netIncomePerBooks + '</netIncomePerBooks>'
		+ '<nonDeductibleExpensesItem2Description>' + '</nonDeductibleExpensesItem2Description>'
		+ '<nonDeductibleExpensesItem2Value>' + '</nonDeductibleExpensesItem2Value>'
		+ '<nonDeductibleExpensesItem3Description>' + '</nonDeductibleExpensesItem3Description>'
		+ '<nonDeductibleExpensesItem3Value>' + '</nonDeductibleExpensesItem3Value>\ ';
    //iter start
    var nonDeductibleExpenseListSpouseHolderSch = [];
    for (key in nonDeductibleExpenseListSpouseSch) {
        var obj = '<listOfNonDeductibleExpensesItem3>'
               + '<otherExpandableDesc>' + nonDeductibleExpenseListSpouseSch[key].otherExpandableDesc + '</otherExpandableDesc>'
               + '<otherExpandableAmount>' + nonDeductibleExpenseListSpouseSch[key].otherExpandableAmount + '</otherExpandableAmount>'
               + '<otherExpandableAmountSpecial>' + nonDeductibleExpenseListSpouseSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
               + '<otherExpandableAmountRegular>' + nonDeductibleExpenseListSpouseSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
               + '<otherExpandableAmountTotal>' + nonDeductibleExpenseListSpouseSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
            + '</listOfNonDeductibleExpensesItem3>';
        nonDeductibleExpenseListSpouseHolderSch.push(obj);
    }
    var nonDeductibleExpenseListObjectSpouseHolderSch = "";
    for (key in nonDeductibleExpenseListSpouseHolderSch) {
        nonDeductibleExpenseListObjectSpouseHolderSch += nonDeductibleExpenseListSpouseHolderSch[key];
    }
    var nonTaxableWsSpouseSch =
    '<totalNonDeductibleExpenses>' + reconciliationOfNetIncomeSpouseSch.totalNonDeductibleExpenses + '</totalNonDeductibleExpenses>'
    + '<nonTaxableAndSpDeductionsItem5Description>' + '</nonTaxableAndSpDeductionsItem5Description>'
    + '<nonTaxableAndSpDeductionsItem5Value>' + '</nonTaxableAndSpDeductionsItem5Value>'
    + '<nonTaxableAndSpDeductionsItem6Description>' + '</nonTaxableAndSpDeductionsItem6Description>'
    + '<nonTaxableAndSpDeductionsItem6Value>' + '</nonTaxableAndSpDeductionsItem6Value>'
    //iter start
    var listNonTaxableSpouseHolderSch = [];
    for (key in listNonTaxableSpouseSch) {
        var obj = '<listOfnonTaxableAndSpDeductionsItem6>\ '
               + '<otherExpandableDesc>' + listNonTaxableSpouseSch[key].otherExpandableDesc + '</otherExpandableDesc>'
               + '<otherExpandableAmount>' + listNonTaxableSpouseSch[key].otherExpandableAmount + '</otherExpandableAmount>'
               + '<otherExpandableAmountSpecial>' + listNonTaxableSpouseSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
               + '<otherExpandableAmountRegular>' + listNonTaxableSpouseSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
               + '<otherExpandableAmountTotal>' + listNonTaxableSpouseSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
            + '</listOfnonTaxableAndSpDeductionsItem6>';
        listNonTaxableSpouseHolderSch.push(obj);
    }
    var listNonTaxableObjectSpouseHolderSch = "";
    for (key in listNonTaxableSpouseHolderSch) {
        listNonTaxableObjectSpouseHolderSch += listNonTaxableSpouseHolderSch[key];
    }

    //iter end
    var specialDeductionWsSpouse =
    '<specialDeductionsItem7Description>' + '</specialDeductionsItem7Description>'
    + '<specialDeductionsItem7Value>' + '</specialDeductionsItem7Value>'
    + '<specialDeductionsItem8Description>' + '</specialDeductionsItem8Description>'
    + '<specialDeductionsItem8Value>' + '</specialDeductionsItem8Value>';
    //iter start
    var listSpecialDeductionsSpouseHolderSch = [];
    for (key in listSpecialDeductionsSpouseSch) {
        var obj =
        '<listOfSpecialDeductionsItem8>'
        + '<otherExpandableDesc>' + listSpecialDeductionsSpouseSch[key].otherExpandableDesc + '</otherExpandableDesc>'
        + '<otherExpandableAmount>' + listSpecialDeductionsSpouseSch[key].otherExpandableAmount + '</otherExpandableAmount>'
        + '<otherExpandableAmountSpecial>' + listSpecialDeductionsSpouseSch[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>'
        + '<otherExpandableAmountRegular>' + listSpecialDeductionsSpouseSch[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>'
        + '<otherExpandableAmountTotal>' + listSpecialDeductionsSpouseSch[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>'
        + '</listOfSpecialDeductionsItem8>';
        listSpecialDeductionsSpouseHolderSch.push(obj);
    }
    var listSpecialDeductionObjectSpouseHolderSch = "";
    for (key in listSpecialDeductionsSpouseHolderSch) {
        listSpecialDeductionObjectSpouseHolderSch += listSpecialDeductionsSpouseHolderSch[key];
    }
    //iter end
    var closeReconciliationOfNetIncomeWsSpouseSch =
    '<totalNonTaxableAndSpDeductions>' + reconciliationOfNetIncomeSpouseSch.totalNonTaxableAndSpDeductions + '</totalNonTaxableAndSpDeductions>'
    + '<netTaxableIncome>' + reconciliationOfNetIncomeSpouseSch.reconciliationOfNetIncome + '</netTaxableIncome>'
    + '</reconciliationOfNetIncomeSchSps> \ ';


    var closeAttachments = '</attachments> \ ';

    var closeForm = '</formBean>  \ ';
    var soapRequestFooter =
    '</ws:submitForm1701> \
</soapenv:Body> \
</soapenv:Envelope>';


    /*
    attach = attachmentsOpening + taxRegimeWs + taxPayersActivityProfileSchWs + taxPayersActivityProfileSpsSchWs + computationOfIncomeTaxSchWs 
    + computationOfIncomeTaxSpsSchWs + taxReliefAvailmentSchWs + taxReliefAvailmentSpsSchWs + salesRevenuesReceiptFeesSchWs 
    + salesRevenuesReceiptFeesSpsSchWs + othertaxableIncomeWsSch + otherTaxableIncomeNotSubjectToFinalTaxSchObjectHolder 
    + othertaxableIncomeWsClosingSch + othertaxableIncomeSpouseWsSps + otherTaxableIncomeNotSubjectToFinalTaxObjectSpouseHolderSch 
    + othertaxableIncomeSpouseWsClosingSch + costOfSalesServicesSchWs + costOfSalesServicesSchSpsWs + nonOperatingIncomeWsSch 
    + nonOperatingIncomeobjHolderSch + nonOperatingIncomeSchClosing + nonOperatingIncomeSpouseWSSch + nonOperatingIncomeSpouseobjHolderSch 
    + nonOperatingIncomeCloseSch + ordinaryAllowableItemizedDeductionWsSch + listAmortizationsObjectHolderSch + badDebtsToTravelSch 
    + ordinaryOtherAlllowableItemizedDeductionSch + listOtherOrdinaryItemizedDeductionsObjectHolderSch + closingOrdinaryOtherAlllowableItemizedDeductionSch 
    + ordinaryAllowableItemizedDeductionSpouseWsSch + listAmortizationsObjectHolderSpouseSch + badDebtsToTraveSpouselSch + ordinaryOtherAlllowableItemizedDeductionSpouseSch 
    + listOtherOrdinaryItemizedDeductionsObjectHolderSpouseSch + closingOrdinaryOtherAlllowableItemizedDeductionSpouseSch + specialAllowableItemizedDeductionWsSch 
    + listSpecialAllowableItemizedDeductionObjectHolderSch + closingSpecialAllowableItemizedDeductionWsSch + specialAllowableItemizedDeductionSpouseWsSch
    + listSpecialAllowableItemizedDeductionObjectSpouseHolderSch + closingSpecialAllowableItemizedDeductionSpouseSchWs + taxCreditsPaymentSchWs 
    + taxCreditsPaymentSchSpsWs + reconciliationOfNetIncomeWsSch + nonDeductibleExpenseListObjectHolderSch + listNonTaxableObjectHolderSch 
    + specialDeductionWsSch + listSpecialDeductionObjectHolderSch + closeReconciliationOfNetIncomeWsSch + reconciliationOfNetIncomeWsSchSpouse
    + nonDeductibleExpenseListObjectSpouseHolderSch + nonTaxableWsSpouseSch + listNonTaxableObjectSpouseHolderSch + specialDeductionWsSpouse
    + listSpecialDeductionObjectSpouseHolderSch + closeReconciliationOfNetIncomeWsSpouseSch + closeAttachments ;
    */

    var listObjectAttachmentsHolder = "";
    for (key in listAttachmentsHolder) {
        listObjectAttachmentsHolder += listAttachmentsHolder[key];
    }

    return soapRequestHeader + openForm + taxpayerWs + taxPayerWsSpouse
    + totalTaxPayableWs + computationOfIncomeWs + computationOfIncomeTaxWsSpouse
    + taxReliefAvailmentWs + taxReliefAvailmentWsSpouse + dependentObjectHolder
    + currentAddressWs + externalAuditorWs + employerObjectHolder + employerSpouseObjectHolder
    + employerCompensationWs + salesRevenueWs + salesRevenueWsSpouse + othertaxableIncomeWs
    + otherTaxableIncomeNotSubjectToFinalTaxObjectHolder + othertaxableIncomeWsClosing
    + othertaxableIncomeSpouseWs + otherTaxableIncomeNotSubjectToFinalTaxObjectSpouseHolder
    + othertaxableIncomeSpouseWsClosing + costOfSalesWs + costOfSalesSpouseWs + nonOperatingIncomeWs
    + nonOperatingIncomeobjHolder + nonOperatingIncomeClosing + nonOperatingIncomeSpouseWS + nonOperatingIncomeSpouseobjHolder
    + nonOperatingIncomeClose + ordinaryAllowableItemizedDeductionWs + listAmortizationsObjectHolder
    + badDebtsToTravel + ordinaryOtherAlllowableItemizedDeduction + listOtherOrdinaryItemizedDeductionsObjectHolder
    + closingOrdinaryOtherAlllowableItemizedDeduction + ordinaryAllowableItemizedDeductionSpouseWs
    + listAmortizationsObjectHolderSpouse + badDebtsToTraveSpousel + ordinaryOtherAlllowableItemizedDeductionSpouse + listOtherOrdinaryItemizedDeductionsObjectHolderSpouse
    + closingOrdinaryOtherAlllowableItemizedDeductionSpouse + specialAllowableItemizedDeductionWs
    + listSpecialAllowableItemizedDeductionObjectHolder + closingSpecialAllowableItemizedDeductionWs
    + specialAllowableItemizedDeductionSpouseWs + listSpecialAllowableItemizedDeductionObjectSpouseHolder
    + closingSpecialAllowableItemizedDeductionSpouseWs + ComputationOfNetOperatingLossWs + listDetailedComputationOfGrossIncomeObjectHolder + continueComputationOfNetOperatingLossWs + ComputationOfNetOperatingLossSpouseWs + listDetailedComputationOfGrossIncomeObjectHolderSpouse + continueComputationOfNetOperatingLossWsSpouse
    + taxCreditPaymentsWs + taxCreditPaymentsWsSpouse + balanceSheetWs + balanceSheetWsSpouse + reconciliationOfNetIncomeWs
    + nonDeductibleExpenseListObjectHolder + nonTaxableWs + listNonTaxableObjectHolder + specialDeductionWs
    + listSpecialDeductionObjectHolder + closeReconciliationOfNetIncomeWs + reconciliationOfNetIncomeWsSpouse
    + nonDeductibleExpenseListObjectSpouseHolder + nonTaxableWsSpouse + listNonTaxableObjectSpouseHolder + specialDeductionWsSpouse
    + listSpecialDeductionObjectSpouseHolder + closeReconciliationOfNetIncomeWsSpouse + taxpayerGrossIncomeWs
    + taxpayerCompensationSubjectListObjectHolder + taxpayerRealPropertySalesListObjectHolder + taxpayerStockSharesListObjectHolder
    + taxpayerOtherIncomeListObjectHolder + taxpayerGrossIncomeExemptWs + taxpayerPersonalPropertyReceivedListObjectHolder
    + taxpayerOtherExemptIncomeListObjectHolder + taxpayerConsolidatedComputationWs + taxpayerConsolidatedComputationSpouseWs
    + listObjectAttachmentsHolder + closeForm + soapRequestFooter;


}
