var wsUrl = enviService.getWsUrl();
var wsSite = enviService.getWsSite();
//Page 1
var Taxpayer = {};
var TotalTaxPayable = {};

// PAGE 2
var TaxpayerActivityForTaxReliefExempt = {};
var TaxpayerActivityForTaxReliefSpecial = {};
var TaxpayerActivityForTaxReliefSpecialTaxRelief = {};
var ComputationOfAmountPayablePerTaxRegime = {};
var ExternalAudtiorAccreditedTaxAgent = {};

// PAGE 3
var ComputationOfTaxPerTaxRegime = {};
var TaxReliefAvailment = {};

// PAGE 4
var SalesRevenueExempt = {};
var SalesRevenueSpecial = {};
var SalesRevenueRegular = {};
var SalesRevenueTotal = {};

var CostOfSalesExempt = {};
var CostOfSalesSpecial = {};
var CostOfSalesRegular = {};
var CostOfSalesTotal = {};

// PAGE 5
var OtherTaxableIncomeNotSubjectedToFinalTaxExempt = {};
var OtherTaxableIncomeNotSubjectedToFinalTaxSpecial = {};
var OtherTaxableIncomeNotSubjectedToFinalTaxRegular = {};
var OtherTaxableIncomeNotSubjectedToFinalTaxTotal = {};

var OtherTaxableIncomeNotSubjectedToFinalTaxSched4 = {};
var OtherTaxableIncomeNotSubjectToFinalTaxValue = [];

// schedule 5
var ExemptOrdinaryAllowableItemizedDeductions = {};
var SpecialOrdinaryAllowableItemizedDeductions = {};
var RegularOrdinaryAllowableItemizedDeductions = {};
var TotalOrdinaryAllowableItemizedDeductions = {};

var OtherAmortizationsSched5 = {};
var OtherAmortizationsList = [];

var OtherItemizedDeductionsSched5 = {};
var OtherItemizedDeductionsList = [];

// PAGE 6 Schedule 6
var SpecialAllowableItemizedDeduction = {};
var OtherSpecialDeduction = {};
var OtherSpecialDeductionList = [];

// Schedule 7
var ComputationOfNetOperatingLossCarryOver = {};

// Schedule 8
var TaxCreditPaymentExempt = {};
var TaxCreditPaymentSpecial = {};
var TaxCreditPaymentRegular = {};
var TaxCreditPaymentTotal = {};

var OtherCreditsSched8 = {};
var OtherCredits = [];

// PAGE 7 Schedule 9
var ComputationOfMinimumCorporateIncomeTax = {};

// Schedule 10
var ReconcilationOfNetIncomeExempt = {};
var ReconcilationOfNetIncomeSpecial = {};
var ReconcilationOfNetIncomeRegular = {};
var ReconcilationOfNetIncomeTotal = {};

var NonDeductibleExpenseSched10 = {};
var NonDeductibleExpense = [];

var NonTaxableAndSpDeductionsSched10 = {};
var NonTaxableAndSpDeductionsItem6 = [];

var NonTaxableAndSpDeductionsItem8Sched10 = {};
var NonTaxableAndSpDeductionsItem8 = [];

// PAGE 8 Schedule 11
var BalanceSheet = {};
// Schedule 12
var Schedule12 = {};
var Stockholders = {};
var StockholdersList = [];

// PAGE 9 Schedule 13I
var Schedule13 = {};
var GrossIncomeSubjectToFinalWithholding = {};
var GrossIncomeSubjectToFinalWithholdingList = [];

// Schedule 13II
var RealPropertySale = {};
var RealPropertySaleList = [];

// Schedule 13III
var StockShareSale = {};
var StockShareSaleList = [];

// Schedule 13IV
var OtherIncome = {};
var OtherIncomeList = [];

// Schedule 14
var ReturnOfPremium = {};

// Schedule 14I
var PersonalPropertyReceived = {};
var PersonalPropertyReceivedList = [];

// Schedule 14II
var OtherExemptIncome = {};
var OtherExemptIncomeList = [];

// Attachments
var TaxRegime = {};
var ScheduleA = {};
var ScheduleB = {};
var ScheduleC = {};
var ScheduleD = {};
var ScheduleE1 = {};

var ScheduleF = {};
var OtherTaxableIncomeNotSubjectToFinalTax = {};
var OtherTaxableIncomeNotSubjectToFinalTaxList = [];

var ScheduleG = {};
var Amortization = {};
var AmortizationList = [];
var Others = {};
var OtherList = [];

var ScheduleH = {};
var SpecialAllowableItemizedDeductions = {};
var SpecialAllowableItemizedDeductionsList = [];

var ScheduleI = {};

var listAttachmentsHolder = [];
var attach = "";


function populateTaxpayer(taxIdNumber, branchCode, industryTypeCode, industryTypeMitCode, description,
						barangayAddress, districtAddress, dateRegistered, startMonth, incorporationDate,
						birthDate, zipCode, sex, tinPart1, tinPart2, tinPart3, registeredAddress,
						dateFiled, dueDate, returnPeriod, emailAddress, formVersion, ammendedYN, batchNo,
						amdendedReturn, shortPeriodReturn, alphaNumericTaxCode, sheetFiledCount, contactNumber,
						mainLine, methodOfDeduction, lineOfBusiness, calendarFiscal, yearEndedMonth,
						yearEnded, rdoCode, registeredActivity, lastName, firstName, registeredName,
						ctcSecType, atc1, atc1Desc, atc2Desc, atc2, atcIC011, atcIC021, effectivityDateFrom,
						effectivityDateTo, subStreet, street, city, offlineFormVersion) {
    Taxpayer = {
        taxIdNumber: taxIdNumber,
        branchCode: branchCode,
        industryTypeCode: industryTypeCode,
        industryTypeMitCode: industryTypeMitCode,
        description: description,
        barangayAddress: barangayAddress,
        districtAddress: districtAddress,
        dateRegistered: dateRegistered,
        startMonth: startMonth,
        incorporationDate: incorporationDate,
        birthDate: birthDate,
        zipCode: zipCode,
        sex: sex,
        tinPart1: tinPart1,
        tinPart2: tinPart2,
        tinPart3: tinPart3,
        registeredAddress: registeredAddress,
        dateFiled: dateFiled,
        dueDate: dueDate,
        returnPeriod: returnPeriod,
        emailAddress: emailAddress,
        formVersion: formVersion,
        ammendedYN: ammendedYN,
        batchNo: batchNo,
        amdendedReturn: amdendedReturn,
        shortPeriodReturn: shortPeriodReturn,
        alphaNumericTaxCode: alphaNumericTaxCode,
        sheetFiledCount: sheetFiledCount,
        contactNumber: contactNumber,
        mainLine: mainLine,
        // psic : psic,
        methodOfDeduction: methodOfDeduction,
        lineOfBusiness: lineOfBusiness,
        calendarFiscal: calendarFiscal,
        yearEndedMonth: yearEndedMonth,
        yearEnded: yearEnded,
        rdoCode: rdoCode,
        registeredActivity: registeredActivity,
        lastName: lastName,
        firstName: firstName,
        registeredName: registeredName,
        ctcSecType: ctcSecType,
        atc1: atc1,
        atc1Desc: atc1Desc,
        atc2Desc: atc2Desc,
        atc2: atc2,
        atcIC011: atcIC011,
        atcIC021: atcIC021,
        effectivityDateFrom: effectivityDateFrom,
        effectivityDateTo: effectivityDateTo,
        subStreet: subStreet,
        street: street,
        city: city,
        offlineFormVersion: offlineFormVersion
    };
}

function populateTotalTaxPayable(totalIncomeTaxDue, totalPenalties, netTaxPayable, totalTaxCredits,
								communityTaxCertificate, dateOfIssue, placeOfIssue, amountIfCTC,
								overPayment, totalAmountPayable, ctcSecType) {
    TotalTaxPayable = {
        totalIncomeTaxDue: totalIncomeTaxDue,
        totalPenalties: totalPenalties,
        netTaxPayable: netTaxPayable,
        totalTaxCredits: totalTaxCredits,
        communityTaxCertificate: communityTaxCertificate,
        dateOfIssue: dateOfIssue,
        placeOfIssue: placeOfIssue,
        amountIfCTC: amountIfCTC,
        overPayment: overPayment,
        totalAmountPayable: totalAmountPayable,
        ctcSecType: ctcSecType
    };
}

function populateTaxPayerActivityForTaxReliefsExempt(investmentPromotionAgency, legalBasis,
													registeredActivityProgram, specialTaxRateSpecialRateDec,
													specialTaxRateSpecialRateDisplay,
													effectivityDateFrom, effectivityDateTo) {
    TaxpayerActivityForTaxReliefExempt = {
        investmentPromotionAgency: investmentPromotionAgency,
        legalBasis: legalBasis,
        registeredActivityProgram: registeredActivityProgram,
        specialTaxRateSpecialRateDec: specialTaxRateSpecialRateDec,
        specialTaxRateSpecialRateDisplay: specialTaxRateSpecialRateDisplay,
        effectivityDateFrom: effectivityDateFrom,
        effectivityDateTo: effectivityDateTo
    };
}

function populateTaxPayerActivityForTaxReliefsSpecial(investmentPromotionAgency, legalBasis,
													registeredActivityProgram, specialTaxRate,
													effectivityDateFrom, effectivityDateTo) {
    TaxpayerActivityForTaxReliefSpecial = {
        investmentPromotionAgency: investmentPromotionAgency,
        legalBasis: legalBasis,
        registeredActivityProgram: registeredActivityProgram,
        specialTaxRate: specialTaxRate,
        effectivityDateFrom: effectivityDateFrom,
        effectivityDateTo: effectivityDateTo
    };
}

function populateTaxPayerActivityForTaxReliefsSpecialTaxRelief(investmentPromotionAgency, legalBasis,
															registeredActivityProgram,
															effectivityDateFrom, effectivityDateTo) {
    TaxpayerActivityForTaxReliefSpecialTaxRelief = {
        investmentPromotionAgency: investmentPromotionAgency,
        legalBasis: legalBasis,
        registeredActivityProgram: registeredActivityProgram,
        effectivityDateFrom: effectivityDateFrom,
        effectivityDateTo: effectivityDateTo
    };
}

function populateComputationOfAmountPayablePerTaxRegime(totalIncomeTaxDueExempt, totalIncomeTaxDueSpecial,
													totalIncomeTaxDueRegular, totalIncomeTaxDueAllColumns,
													lessCreditsPaymentsExempt, lessCreditsPaymentsSpecial,
													lessCreditsPaymentsRegular, lessCreditsPaymentsAllColumns,
													netTaxPayableOverpaymentExempt, netTaxPayableOverpaymentSpecial,
													netTaxPayableOverpaymentRegular, netTaxPayableOverpaymentAllColumns,
													penaltiesSurcharge, penaltiesInterest, penaltiesCompromise,
													penaltiesTotalPenalties, totalAmountPayableOverpayment) {
    ComputationOfAmountPayablePerTaxRegime = {
        totalIncomeTaxDueExempt: totalIncomeTaxDueExempt,
        totalIncomeTaxDueSpecial: totalIncomeTaxDueSpecial,
        totalIncomeTaxDueRegular: totalIncomeTaxDueRegular,
        totalIncomeTaxDueAllColumns: totalIncomeTaxDueAllColumns,
        lessCreditsPaymentsExempt: lessCreditsPaymentsExempt,
        lessCreditsPaymentsSpecial: lessCreditsPaymentsSpecial,
        lessCreditsPaymentsRegular: lessCreditsPaymentsRegular,
        lessCreditsPaymentsAllColumns: lessCreditsPaymentsAllColumns,
        netTaxPayableOverpaymentExempt: netTaxPayableOverpaymentExempt,
        netTaxPayableOverpaymentSpecial: netTaxPayableOverpaymentSpecial,
        netTaxPayableOverpaymentRegular: netTaxPayableOverpaymentRegular,
        netTaxPayableOverpaymentAllColumns: netTaxPayableOverpaymentAllColumns,
        penaltiesSurcharge: penaltiesSurcharge,
        penaltiesInterest: penaltiesInterest,
        penaltiesCompromise: penaltiesCompromise,
        penaltiesTotalPenalties: penaltiesTotalPenalties,
        totalAmountPayableOverpayment: totalAmountPayableOverpayment
    };
}

function populateExternalAuditorAccreditedTaxAgent(nameOfExternalAuditor, externalAuditorTIN,
                                                   nameOfSigningPartner, signingPartnerTIN,
                                                   birAccreditationNumber, isssueDate, expiryDate,
                                                   accreditedTaxAgentBranchCode, signingPartnerBranchCode) {
    ExternalAudtiorAccreditedTaxAgent = {
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
}

function populateComputationOfTaxPerTaxRegime(netSalesRevenuesReceiptsFeesExempt, netSalesRevenuesReceiptsFeesSpecial, netSalesRevenuesReceiptsFeesRegular, netSalesRevenuesReceiptsFeesAllColumns,
												costOfSalesServiceslExempt, costOfSalesServiceslSpecial, costOfSalesServiceslRegular, costOfSalesServiceslAllColumns,
												grossIncomeFromOperationExempt, grossIncomeFromOperationSpecial, grossIncomeFromOperationRegular, grossIncomeFromOperationAllColumns,
												otherTaxableIncomeNotSubjectedExempt, otherTaxableIncomeNotSubjectedSpecial, otherTaxableIncomeNotSubjectedRegular, otherTaxableIncomeNotSubjectedAllColumns,
												totalGrossIncomeGrossTaxableIncomeExempt, totalGrossIncomeGrossTaxableIncomeSpecial, totalGrossIncomeGrossTaxableIncomeRegular, totalGrossIncomeGrossTaxableIncomeAllColumns,
												ordinaryAllowableIemizedDeducExempt, ordinaryAllowableIemizedDeducSpecial, ordinaryAllowableIemizedDeducRegular, ordinaryAllowableIemizedDeducAllColumns,
												specialAllowableItemizedDeducExempt, specialAllowableItemizedDeducSpecial, specialAllowableItemizedDeducRegular, specialAllowableItemizedDeducAllColumns,
												nolcoSpecial, nolcoRegular, nolcoAllColumns,
												totalItemizedDeductionExempt, totalItemizedDeductionSpecial, totalItemizedDeductionRegular, totalItemizedDeductionAllColumns,
												netTaxableIncomeNetIncomeExempt, netTaxableIncomeNetIncomeSpecial, netTaxableIncomeNetIncomeRegular, netTaxableIncomeNetIncomeAllColumns,
												applicableIncomeTaxRateExempt, applicableIncomeTaxRateSpecial, applicableIncomeTaxRateRegular,
												incomeTaxDueMCITExempt, incomeTaxDueMCITSpecial, incomeTaxDueMCITRegular, incomeTaxDueMCITAllColumns,
												shareOtherGovtAgenciesSpecial, shareOtherGovtAgenciesRegular, shareOtherGovtAgenciesAllColumns,
												netIncomeTaxDueToNationalSpecial, netIncomeTaxDueToNationalRegular, netIncomeTaxDueToNationalAllColumns,
												mcitGrossIncomeRegular, mcitGrossIncomeAllColumns,
												totalIncomeTaxDueSched1Special, totalIncomeTaxDueSched1Regular, totalIncomeTaxDueSched1AllColumns) {
    ComputationOfTaxPerTaxRegime = {
        netSalesRevenuesReceiptsFeesExempt: netSalesRevenuesReceiptsFeesExempt,
        netSalesRevenuesReceiptsFeesSpecial: netSalesRevenuesReceiptsFeesSpecial,
        netSalesRevenuesReceiptsFeesRegular: netSalesRevenuesReceiptsFeesRegular,
        netSalesRevenuesReceiptsFeesAllColumns: netSalesRevenuesReceiptsFeesAllColumns,
        costOfSalesServiceslExempt: costOfSalesServiceslExempt,
        costOfSalesServiceslSpecial: costOfSalesServiceslSpecial,
        costOfSalesServiceslRegular: costOfSalesServiceslRegular,
        costOfSalesServiceslAllColumns: costOfSalesServiceslAllColumns,
        grossIncomeFromOperationExempt: grossIncomeFromOperationExempt,
        grossIncomeFromOperationSpecial: grossIncomeFromOperationSpecial,
        grossIncomeFromOperationRegular: grossIncomeFromOperationRegular,
        grossIncomeFromOperationAllColumns: grossIncomeFromOperationAllColumns,
        otherTaxableIncomeNotSubjectedExempt: otherTaxableIncomeNotSubjectedExempt,
        otherTaxableIncomeNotSubjectedSpecial: otherTaxableIncomeNotSubjectedSpecial,
        otherTaxableIncomeNotSubjectedRegular: otherTaxableIncomeNotSubjectedRegular,
        otherTaxableIncomeNotSubjectedAllColumns: otherTaxableIncomeNotSubjectedAllColumns,
        totalGrossIncomeGrossTaxableIncomeExempt: totalGrossIncomeGrossTaxableIncomeExempt,
        totalGrossIncomeGrossTaxableIncomeSpecial: totalGrossIncomeGrossTaxableIncomeSpecial,
        totalGrossIncomeGrossTaxableIncomeRegular: totalGrossIncomeGrossTaxableIncomeRegular,
        totalGrossIncomeGrossTaxableIncomeAllColumns: totalGrossIncomeGrossTaxableIncomeAllColumns,
        ordinaryAllowableIemizedDeducExempt: ordinaryAllowableIemizedDeducExempt,
        ordinaryAllowableIemizedDeducSpecial: ordinaryAllowableIemizedDeducSpecial,
        ordinaryAllowableIemizedDeducRegular: ordinaryAllowableIemizedDeducRegular,
        ordinaryAllowableIemizedDeducAllColumns: ordinaryAllowableIemizedDeducAllColumns,
        specialAllowableItemizedDeducExempt: specialAllowableItemizedDeducExempt,
        specialAllowableItemizedDeducSpecial: specialAllowableItemizedDeducSpecial,
        specialAllowableItemizedDeducRegular: specialAllowableItemizedDeducRegular,
        specialAllowableItemizedDeducAllColumns: specialAllowableItemizedDeducAllColumns,
        nolcoSpecial: nolcoSpecial,
        nolcoRegular: nolcoRegular,
        nolcoAllColumns: nolcoAllColumns,
        totalItemizedDeductionExempt: totalItemizedDeductionExempt,
        totalItemizedDeductionSpecial: totalItemizedDeductionSpecial,
        totalItemizedDeductionRegular: totalItemizedDeductionRegular,
        totalItemizedDeductionAllColumns: totalItemizedDeductionAllColumns,
        netTaxableIncomeNetIncomeExempt: netTaxableIncomeNetIncomeExempt,
        netTaxableIncomeNetIncomeSpecial: netTaxableIncomeNetIncomeSpecial,
        netTaxableIncomeNetIncomeRegular: netTaxableIncomeNetIncomeRegular,
        netTaxableIncomeNetIncomeAllColumns: netTaxableIncomeNetIncomeAllColumns,
        applicableIncomeTaxRateExempt: applicableIncomeTaxRateExempt,
        applicableIncomeTaxRateSpecial: applicableIncomeTaxRateSpecial,
        applicableIncomeTaxRateRegular: applicableIncomeTaxRateRegular,
        incomeTaxDueMCITExempt: incomeTaxDueMCITExempt,
        incomeTaxDueMCITSpecial: incomeTaxDueMCITSpecial,
        incomeTaxDueMCITRegular: incomeTaxDueMCITRegular,
        incomeTaxDueMCITAllColumns: incomeTaxDueMCITAllColumns,
        shareOtherGovtAgenciesSpecial: shareOtherGovtAgenciesSpecial,
        shareOtherGovtAgenciesRegular: shareOtherGovtAgenciesRegular,
        shareOtherGovtAgenciesAllColumns: shareOtherGovtAgenciesAllColumns,
        netIncomeTaxDueToNationalSpecial: netIncomeTaxDueToNationalSpecial,
        netIncomeTaxDueToNationalRegular: netIncomeTaxDueToNationalRegular,
        netIncomeTaxDueToNationalAllColumns: netIncomeTaxDueToNationalAllColumns,
        mcitGrossIncomeRegular: mcitGrossIncomeRegular,
        mcitGrossIncomeAllColumns: mcitGrossIncomeAllColumns,
        totalIncomeTaxDueSched1Special: totalIncomeTaxDueSched1Special,
        totalIncomeTaxDueSched1Regular: totalIncomeTaxDueSched1Regular,
        totalIncomeTaxDueSched1AllColumns: totalIncomeTaxDueSched1AllColumns
    };
}

function populateTaxReliefAvailment(regularIncomeTaxOtherwiseDueEx, regularIncomeTaxOtherwiseDueSp, regularIncomeTaxOtherwiseDueRe, regularIncomeTaxOtherwiseDueAll,
									specialAllowableItemizedDeducSched2Ex, specialAllowableItemizedDeducSched2Sp, specialAllowableItemizedDeducSched2Re, specialAllowableItemizedDeducSched2All,
									subTotalEx, subTotalSp, subTotalRe, subTotalAll,
									incomeTaxDueShed2Ex, incomeTaxDueShed2Sp, incomeTaxDueShed2Re, incomeTaxDueShed2All,
									taxReliefAvailmentEx, taxReliefAvailmentSp, taxReliefAvailmentRe, taxReliefAvailmentAll,
									specialTaxCreditsEx, specialTaxCreditsSp, specialTaxCreditsRe, specialTaxCreditsAll,
									totalTaxReliefAvailmentEx, totalTaxReliefAvailmentSp, totalTaxReliefAvailmentRe, totalTaxReliefAvailmentAll) {
    TaxReliefAvailment = {
        regularIncomeTaxOtherwiseDueEx: regularIncomeTaxOtherwiseDueEx,
        regularIncomeTaxOtherwiseDueSp: regularIncomeTaxOtherwiseDueSp,
        regularIncomeTaxOtherwiseDueRe: regularIncomeTaxOtherwiseDueRe,
        regularIncomeTaxOtherwiseDueAll: regularIncomeTaxOtherwiseDueAll,
        specialAllowableItemizedDeducSched2Ex: specialAllowableItemizedDeducSched2Ex,
        specialAllowableItemizedDeducSched2Sp: specialAllowableItemizedDeducSched2Sp,
        specialAllowableItemizedDeducSched2Re: specialAllowableItemizedDeducSched2Re,
        specialAllowableItemizedDeducSched2All: specialAllowableItemizedDeducSched2All,
        subTotalEx: subTotalEx,
        subTotalSp: subTotalSp,
        subTotalRe: subTotalRe,
        subTotalAll: subTotalAll,
        incomeTaxDueShed2Ex: incomeTaxDueShed2Ex,
        incomeTaxDueShed2Sp: incomeTaxDueShed2Sp,
        incomeTaxDueShed2Re: incomeTaxDueShed2Re,
        incomeTaxDueShed2All: incomeTaxDueShed2All,
        taxReliefAvailmentEx: taxReliefAvailmentEx,
        taxReliefAvailmentSp: taxReliefAvailmentSp,
        taxReliefAvailmentRe: taxReliefAvailmentRe,
        taxReliefAvailmentAll: taxReliefAvailmentAll,
        specialTaxCreditsEx: specialTaxCreditsEx,
        specialTaxCreditsSp: specialTaxCreditsSp,
        specialTaxCreditsRe: specialTaxCreditsRe,
        specialTaxCreditsAll: specialTaxCreditsAll,
        totalTaxReliefAvailmentEx: totalTaxReliefAvailmentEx,
        totalTaxReliefAvailmentSp: totalTaxReliefAvailmentSp,
        totalTaxReliefAvailmentRe: totalTaxReliefAvailmentRe,
        totalTaxReliefAvailmentAll: totalTaxReliefAvailmentAll
    };
}

function populateSalesRevenueExempt(taxWthldGoods, taxWthldServices, taxWthldLease,
								taxWthldTotal, salesReturns, netSalesSched1) {
    SalesRevenueExempt = {
        taxWthldGoods: taxWthldGoods,
        taxWthldServices: taxWthldServices,
        taxWthldLease: taxWthldLease,
        taxWthldTotal: taxWthldTotal,
        salesReturns: salesReturns,
        netSalesSched1: netSalesSched1
    };
}

function populateSalesRevenueSpecial(taxWthldGoods, taxWthldServices, taxWthldLease,
									taxWthldTotal, salesReturns, netSalesSched1) {
    SalesRevenueSpecial = {
        taxWthldGoods: taxWthldGoods,
        taxWthldServices: taxWthldServices,
        taxWthldLease: taxWthldLease,
        taxWthldTotal: taxWthldTotal,
        salesReturns: salesReturns,
        netSalesSched1: netSalesSched1
    };
}

function populateSalesRevenueRegular(taxWthldGoods, taxWthldServices, taxWthldLease,
								taxWthldTotal, salesReturns, netSalesSched1) {
    SalesRevenueRegular = {
        taxWthldGoods: taxWthldGoods,
        taxWthldServices: taxWthldServices,
        taxWthldLease: taxWthldLease,
        taxWthldTotal: taxWthldTotal,
        salesReturns: salesReturns,
        netSalesSched1: netSalesSched1
    };
}

function populateSalesRevenueTotal(taxWthldGoods, taxWthldServices, taxWthldLease,
								taxWthldTotal, salesReturns, netSalesSched1) {
    SalesRevenueTotal = {
        taxWthldGoods: taxWthldGoods,
        taxWthldServices: taxWthldServices,
        taxWthldLease: taxWthldLease,
        taxWthldTotal: taxWthldTotal,
        salesReturns: salesReturns,
        netSalesSched1: netSalesSched1
    };
}

function populateCostOfSalesExempt(goodsInvBeg, purGoods, goodsAvail, goodsInvEnd,
									costSales, directMatsBeg, purDirectMats, matsAvail,
									directMatsEnd, rawMats, directLabor, manufacturingOverhead,
									totalManufacturingCost, workInProgressBeg, winProgressEnd,
									costGoodsManufactured, finishedGoodsBeg, finishedGoodsEnd,
									totalCostGoodsManufacturedAndSold, salaries, materials,
									sched2CDepreciation, sched2CRental, outsideServ, others,
									costService, totalCostSalesAndServices) {
    CostOfSalesExempt = {
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
}

function populateCostOfSalesSpecial(goodsInvBeg, purGoods, goodsAvail, goodsInvEnd,
									costSales, directMatsBeg, purDirectMats, matsAvail,
									directMatsEnd, rawMats, directLabor, manufacturingOverhead,
									totalManufacturingCost, workInProgressBeg, winProgressEnd,
									costGoodsManufactured, finishedGoodsBeg, finishedGoodsEnd,
									totalCostGoodsManufacturedAndSold, salaries, materials,
									sched2CDepreciation, sched2CRental, outsideServ, others,
									costService, totalCostSalesAndServices) {
    CostOfSalesSpecial = {
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
}

function populateCostOfSalesRegular(goodsInvBeg, purGoods, goodsAvail, goodsInvEnd,
									costSales, directMatsBeg, purDirectMats, matsAvail,
									directMatsEnd, rawMats, directLabor, manufacturingOverhead,
									totalManufacturingCost, workInProgressBeg, winProgressEnd,
									costGoodsManufactured, finishedGoodsBeg, finishedGoodsEnd,
									totalCostGoodsManufacturedAndSold, salaries, materials,
									sched2CDepreciation, sched2CRental, outsideServ, others,
									costService, totalCostSalesAndServices) {
    CostOfSalesRegular = {
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
}

function populateCostOfSalesTotal(goodsInvBeg, purGoods, goodsAvail, goodsInvEnd,
								costSales, directMatsBeg, purDirectMats, matsAvail,
								directMatsEnd, rawMats, directLabor, manufacturingOverhead,
								totalManufacturingCost, workInProgressBeg, winProgressEnd,
								costGoodsManufactured, finishedGoodsBeg, finishedGoodsEnd,
								totalCostGoodsManufacturedAndSold, salaries, materials,
								sched2CDepreciation, sched2CRental, outsideServ, others,
								costService, totalCostSalesAndServices) {
    CostOfSalesTotal = {
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
}

function populateOtherTaxableIncomeNotSubjectedToFinalTaxExempt(otherTaxableIncomeNotSubjectToFinalTaxDescFirst, otherTaxableIncomeNotSubjectToFinalTaxDescSecond, otherTaxableIncomeNotSubjectToFinalTaxDescThird,
																otherTaxableIncomeNotSubjectToFinalTaxValueFirst, otherTaxableIncomeNotSubjectToFinalTaxValueSecond,
																otherTaxableIncomeNotSubjectToFinalTaxValueThird, otherTaxableIncomeNotSubjectToFinalTaxValueTotal) {
    OtherTaxableIncomeNotSubjectedToFinalTaxExempt = {
        otherTaxableIncomeNotSubjectToFinalTaxDescFirst: otherTaxableIncomeNotSubjectToFinalTaxDescFirst,
        otherTaxableIncomeNotSubjectToFinalTaxDescSecond: otherTaxableIncomeNotSubjectToFinalTaxDescSecond,
        otherTaxableIncomeNotSubjectToFinalTaxDescThird: otherTaxableIncomeNotSubjectToFinalTaxDescThird,
        otherTaxableIncomeNotSubjectToFinalTaxValueFirst: otherTaxableIncomeNotSubjectToFinalTaxValueFirst,
        otherTaxableIncomeNotSubjectToFinalTaxValueSecond: otherTaxableIncomeNotSubjectToFinalTaxValueSecond,
        otherTaxableIncomeNotSubjectToFinalTaxValueThird: otherTaxableIncomeNotSubjectToFinalTaxValueThird,
        otherTaxableIncomeNotSubjectToFinalTaxValueTotal: otherTaxableIncomeNotSubjectToFinalTaxValueTotal
    };
}

function populateOtherTaxableIncomeNotSubjectedToFinalTaxSpecial(otherTaxableIncomeNotSubjectToFinalTaxValueFirst, otherTaxableIncomeNotSubjectToFinalTaxValueSecond,
																 otherTaxableIncomeNotSubjectToFinalTaxValueThird, otherTaxableIncomeNotSubjectToFinalTaxValueTotal) {
    OtherTaxableIncomeNotSubjectedToFinalTaxSpecial = {
        otherTaxableIncomeNotSubjectToFinalTaxValueFirst: otherTaxableIncomeNotSubjectToFinalTaxValueFirst,
        otherTaxableIncomeNotSubjectToFinalTaxValueSecond: otherTaxableIncomeNotSubjectToFinalTaxValueSecond,
        otherTaxableIncomeNotSubjectToFinalTaxValueThird: otherTaxableIncomeNotSubjectToFinalTaxValueThird,
        otherTaxableIncomeNotSubjectToFinalTaxValueTotal: otherTaxableIncomeNotSubjectToFinalTaxValueTotal
    };
}

function populateOtherTaxableIncomeNotSubjectedToFinalTaxRegular(otherTaxableIncomeNotSubjectToFinalTaxValueFirst, otherTaxableIncomeNotSubjectToFinalTaxValueSecond,
																 otherTaxableIncomeNotSubjectToFinalTaxValueThird, otherTaxableIncomeNotSubjectToFinalTaxValueTotal) {
    OtherTaxableIncomeNotSubjectedToFinalTaxRegular = {
        otherTaxableIncomeNotSubjectToFinalTaxValueFirst: otherTaxableIncomeNotSubjectToFinalTaxValueFirst,
        otherTaxableIncomeNotSubjectToFinalTaxValueSecond: otherTaxableIncomeNotSubjectToFinalTaxValueSecond,
        otherTaxableIncomeNotSubjectToFinalTaxValueThird: otherTaxableIncomeNotSubjectToFinalTaxValueThird,
        otherTaxableIncomeNotSubjectToFinalTaxValueTotal: otherTaxableIncomeNotSubjectToFinalTaxValueTotal
    };
}

function populateOtherTaxableIncomeNotSubjectedToFinalTaxTotal(otherTaxableIncomeNotSubjectToFinalTaxValueFirst, otherTaxableIncomeNotSubjectToFinalTaxValueSecond,
															   otherTaxableIncomeNotSubjectToFinalTaxValueThird, otherTaxableIncomeNotSubjectToFinalTaxValueTotal) {
    OtherTaxableIncomeNotSubjectedToFinalTaxTotal = {
        otherTaxableIncomeNotSubjectToFinalTaxValueFirst: otherTaxableIncomeNotSubjectToFinalTaxValueFirst,
        otherTaxableIncomeNotSubjectToFinalTaxValueSecond: otherTaxableIncomeNotSubjectToFinalTaxValueSecond,
        otherTaxableIncomeNotSubjectToFinalTaxValueThird: otherTaxableIncomeNotSubjectToFinalTaxValueThird,
        otherTaxableIncomeNotSubjectToFinalTaxValueTotal: otherTaxableIncomeNotSubjectToFinalTaxValueTotal
    };
}


function populateOtherTaxableIncomeNotSubjectToFinalTaxValue(otherExpandableDesc,
															 otherExpandableAmount,
															 otherExpandableAmountSpecial,
															 otherExpandableAmountRegular,
															 otherExpandableAmountTotal) {
    OtherTaxableIncomeNotSubjectedToFinalTaxSched4 = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount,
        otherExpandableAmountSpecial: otherExpandableAmountSpecial,
        otherExpandableAmountRegular: otherExpandableAmountRegular,
        otherExpandableAmountTotal: otherExpandableAmountTotal
    };

    OtherTaxableIncomeNotSubjectToFinalTaxValue.push(OtherTaxableIncomeNotSubjectedToFinalTaxSched4);
}

function populateExemptOrdinaryAllowableItemizedDeductions(adAndPromotionsVal, amortizatiosDescSecond,
															amortizatiosDescThird, amortizatiosDescFourth,
															amortizatiosValSecond, amortizatiosValThird,
															amortizatiosValFourth, badDebts,
															charitableContributions, commissions,
															communicationLightWater, utilities,
															depletion, depreciation, directorFee,
															fringeBenefits, fuelAndOil, insurance,
															iterest, janitorialAndMessengerial, losses,
															mgmtAndConsultancyFee, misc, officeSupplies,
															otherServices, professionalFees, schedGRental,
															repairLabor, repairMaterials, entertainment,
															researchAndDev, royalties, salariesAndAllownces,
															securityServices, otherContributions,
															taxesAndLiscenses, tollingFees, trainingsAndSeminars,
															travelTransportaion, othersFirstDescFirst,
															othersFirstDescSecond, othersFirstDescThird,
															othersFirstDescfourth, otherFirstValue,
															otherSecondValue, otherThirdValue, otherFourthValue) {
    ExemptOrdinaryAllowableItemizedDeductions = {
        adAndPromotionsVal: adAndPromotionsVal,
        amortizatiosDescSecond: amortizatiosDescSecond,
        amortizatiosDescThird: amortizatiosDescThird,
        amortizatiosDescFourth: amortizatiosDescFourth,
        amortizatiosValSecond: amortizatiosValSecond,
        amortizatiosValThird: amortizatiosValThird,
        amortizatiosValFourth: amortizatiosValFourth,
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
        othersFirstDescFirst: othersFirstDescFirst,
        othersFirstDescSecond: othersFirstDescSecond,
        othersFirstDescThird: othersFirstDescThird,
        othersFirstDescfourth: othersFirstDescfourth,
        otherFirstValue: otherFirstValue,
        otherSecondValue: otherSecondValue,
        otherThirdValue: otherThirdValue,
        otherFourthValue: otherFourthValue
    };
}

function populateSpecialOrdinaryAllowableItemizedDeductions(adAndPromotionsVal,
															amortizatiosValSecond, amortizatiosValThird,
															amortizatiosValFourth, badDebts, charitableContributions,
															commissions, communicationLightWater, utilities,
															depletion, depreciation, directorFee, fringeBenefits,
															fuelAndOil, insurance, iterest, janitorialAndMessengerial,
															losses, mgmtAndConsultancyFee, misc, officeSupplies,
															otherServices, professionalFees, schedGRental,
															repairLabor, repairMaterials, entertainment,
															researchAndDev, royalties, salariesAndAllownces,
															securityServices, otherContributions, taxesAndLiscenses,
															tollingFees, trainingsAndSeminars, travelTransportaion,
															otherFirstValue, otherSecondValue, otherThirdValue,
															otherFourthValue) {
    SpecialOrdinaryAllowableItemizedDeductions = {
        adAndPromotionsVal: adAndPromotionsVal,
        amortizatiosValSecond: amortizatiosValSecond,
        amortizatiosValThird: amortizatiosValThird,
        amortizatiosValFourth: amortizatiosValFourth,
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
        otherFirstValue: otherFirstValue,
        otherSecondValue: otherSecondValue,
        otherThirdValue: otherThirdValue,
        otherFourthValue: otherFourthValue
    };
}

function populateRegularOrdinaryAllowableItemizedDeductions(adAndPromotionsVal,
															amortizatiosValSecond, amortizatiosValThird,
															amortizatiosValFourth, badDebts, charitableContributions,
															commissions, communicationLightWater, utilities,
															depletion, depreciation, directorFee, fringeBenefits,
															fuelAndOil, insurance, iterest, janitorialAndMessengerial,
															losses, mgmtAndConsultancyFee, misc, officeSupplies,
															otherServices, professionalFees, schedGRental,
															repairLabor, repairMaterials, entertainment,
															researchAndDev, royalties, salariesAndAllownces,
															securityServices, otherContributions,
															taxesAndLiscenses, tollingFees, trainingsAndSeminars,
															travelTransportaion, otherFirstValue, otherSecondValue,
															otherThirdValue, otherFourthValue) {
    RegularOrdinaryAllowableItemizedDeductions = {
        adAndPromotionsVal: adAndPromotionsVal,
        amortizatiosValSecond: amortizatiosValSecond,
        amortizatiosValThird: amortizatiosValThird,
        amortizatiosValFourth: amortizatiosValFourth,
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
        otherFirstValue: otherFirstValue,
        otherSecondValue: otherSecondValue,
        otherThirdValue: otherThirdValue,
        otherFourthValue: otherFourthValue
    };
}

function populateTotalOrdinaryAllowableItemizedDeductions(adAndPromotionsVal,
														amortizatiosValSecond, amortizatiosValThird,
														amortizatiosValFourth, badDebts, charitableContributions,
														commissions, communicationLightWater, utilities,
														depletion, depreciation, directorFee, fringeBenefits,
														fuelAndOil, insurance, iterest, janitorialAndMessengerial,
														losses, mgmtAndConsultancyFee, misc, officeSupplies,
														otherServices, professionalFees, schedGRental,
														repairLabor, repairMaterials, entertainment,
														researchAndDev, royalties, salariesAndAllownces,
														securityServices, otherContributions, taxesAndLiscenses,
														tollingFees, trainingsAndSeminars, travelTransportaion,
														otherFirstValue, otherSecondValue, otherThirdValue,
														otherFourthValue) {
    TotalOrdinaryAllowableItemizedDeductions = {
        adAndPromotionsVal: adAndPromotionsVal,
        amortizatiosValSecond: amortizatiosValSecond,
        amortizatiosValThird: amortizatiosValThird,
        amortizatiosValFourth: amortizatiosValFourth,
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
        otherFirstValue: otherFirstValue,
        otherSecondValue: otherSecondValue,
        otherThirdValue: otherThirdValue,
        otherFourthValue: otherFourthValue
    };
}

function populateListAmortizations(otherExpandableDesc, otherExpandableAmount,
									otherExpandableAmountSpecial,
									otherExpandableAmountRegular,
									otherExpandableAmountTotal) {
    OtherAmortizationsSched5 = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount,
        otherExpandableAmountSpecial: otherExpandableAmountSpecial,
        otherExpandableAmountRegular: otherExpandableAmountRegular,
        otherExpandableAmountTotal: otherExpandableAmountTotal
    };

    OtherAmortizationsList.push(OtherAmortizationsSched5);
}



function populateListOtherOrdinaryItemizedDeductions(otherExpandableDesc, otherExpandableAmount,
													otherExpandableAmountSpecial,
													otherExpandableAmountRegular, otherExpandableAmountTotal) {
    OtherItemizedDeductionsSched5 = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount,
        otherExpandableAmountSpecial: otherExpandableAmountSpecial,
        otherExpandableAmountRegular: otherExpandableAmountRegular,
        otherExpandableAmountTotal: otherExpandableAmountTotal
    };

    OtherItemizedDeductionsList.push(OtherItemizedDeductionsSched5);
}

function populateSpecialAllowableItemizedDeduction(specialAllowableDesc, specialAllowableLegalBasis,
												specialAllowableEx, specialAllowableSp,
												specialAllowableRe, specialAllowableTotal,
												specialAllowabaaleDesc2nd,
												specialAllowableLegalBasis2nd, specialAllowableEx2nd,
												specialAllowableSp2nd, specialAllowableRe2nd,
												specialAllowableTotal2nd, specialAllowableDesc3rd,
												specialAllowableLegalBasis3rd, specialAllowableEx3rd,
												specialAllowableSp3rd, specialAllowableRe3rd,
												specialAllowableTotal3rd, specialAllowableDescFourth,
										    	specialAllowableLegalBasisFourth,
										    	specialAllowableExFourth,
										    	specialAllowableSpFourth,
										    	specialAllowableReFourth) {
    SpecialAllowableItemizedDeduction = {
        specialAllowableDesc: specialAllowableDesc,
        specialAllowableLegalBasis: specialAllowableLegalBasis,
        specialAllowableEx: specialAllowableEx,
        specialAllowableSp: specialAllowableSp,
        specialAllowableRe: specialAllowableRe,
        specialAllowableTotal: specialAllowableTotal,
        specialAllowabaaleDesc2nd: specialAllowabaaleDesc2nd,
        specialAllowableLegalBasis2nd: specialAllowableLegalBasis2nd,
        specialAllowableEx2nd: specialAllowableEx2nd,
        specialAllowableSp2nd: specialAllowableSp2nd,
        specialAllowableRe2nd: specialAllowableRe2nd,
        specialAllowableTotal2nd: specialAllowableTotal2nd,
        specialAllowableDesc3rd: specialAllowableDesc3rd,
        specialAllowableLegalBasis3rd: specialAllowableLegalBasis3rd,
        specialAllowableEx3rd: specialAllowableEx3rd,
        specialAllowableSp3rd: specialAllowableSp3rd,
        specialAllowableRe3rd: specialAllowableRe3rd,
        specialAllowableTotal3rd: specialAllowableTotal3rd,
        specialAllowableDescFourth: specialAllowableDescFourth,
        specialAllowableLegalBasisFourth: specialAllowableLegalBasisFourth,
        specialAllowableExFourth: specialAllowableExFourth,
        specialAllowableSpFourth: specialAllowableSpFourth,
        specialAllowableReFourth: specialAllowableReFourth
    };
}

function populateOtherSpecialDeduction(description, legalBasis, valueEx, valueSp,
										valueRe, valueTotal) {
    OtherSpecialDeduction = {
        valueEx: valueEx,
        valueSp: valueSp,
        valueRe: valueRe,
        valueTotal: valueTotal,
        description: description,
        legalBasis: legalBasis
    };

    OtherSpecialDeductionList.push(OtherSpecialDeduction);
}

function populateComputationOfNetOperatingLossCarryOver(grossIncome, lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw, netOperatingLoss,
										netOperatingLossYearIncurred1, netOperatingLossYearIncurred2, netOperatingLossYearIncurred3, netOperatingLossYearIncurred4,
										netOperatingLossAmount1, netOperatingLossAmount2, netOperatingLossAmount3, netOperatingLossAmount4,
										NOLCOAppliedPreviousYear1, NOLCOAppliedPreviousYear2, NOLCOAppliedPreviousYear3, NOLCOAppliedPreviousYear4,
										NOLCOExpired1, NOLCOExpired2, NOLCOExpired3, NOLCOExpired4,
										NOLCOAppliedCurrentYear1, NOLCOAppliedCurrentYear2, NOLCOAppliedCurrentYear3, NOLCOAppliedCurrentYear4,
										netOperatingLossUnapplied1, netOperatingLossUnapplied2, netOperatingLossUnapplied3, netOperatingLossUnapplied4) {
    ComputationOfNetOperatingLossCarryOver = {
        grossIncome: grossIncome,
        lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw: lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw,
        netOperatingLoss: netOperatingLoss,
        netOperatingLossYearIncurred1: netOperatingLossYearIncurred1,
        netOperatingLossYearIncurred2: netOperatingLossYearIncurred2,
        netOperatingLossYearIncurred3: netOperatingLossYearIncurred3,
        netOperatingLossYearIncurred4: netOperatingLossYearIncurred4,
        netOperatingLossAmount1: netOperatingLossAmount1,
        netOperatingLossAmount2: netOperatingLossAmount2,
        netOperatingLossAmount3: netOperatingLossAmount3,
        netOperatingLossAmount4: netOperatingLossAmount4,
        NOLCOAppliedPreviousYear1: NOLCOAppliedPreviousYear1,
        NOLCOAppliedPreviousYear2: NOLCOAppliedPreviousYear2,
        NOLCOAppliedPreviousYear3: NOLCOAppliedPreviousYear3,
        NOLCOAppliedPreviousYear4: NOLCOAppliedPreviousYear4,
        NOLCOExpired1: NOLCOExpired1,
        NOLCOExpired2: NOLCOExpired2,
        NOLCOExpired3: NOLCOExpired3,
        NOLCOExpired4: NOLCOExpired4,
        NOLCOAppliedCurrentYear1: NOLCOAppliedCurrentYear1,
        NOLCOAppliedCurrentYear2: NOLCOAppliedCurrentYear2,
        NOLCOAppliedCurrentYear3: NOLCOAppliedCurrentYear3,
        NOLCOAppliedCurrentYear4: NOLCOAppliedCurrentYear4,
        netOperatingLossUnapplied1: netOperatingLossUnapplied1,
        netOperatingLossUnapplied2: netOperatingLossUnapplied2,
        netOperatingLossUnapplied3: netOperatingLossUnapplied3,
        netOperatingLossUnapplied4: netOperatingLossUnapplied4
    };
}

function populateTaxCreditPaymentExempt(priorYearsExcessCreditsOtherThanMCIT,
										incomeTaxPaymentUnderMCIT,
										incomeTaxPaymentUnderRegularRate, excessMCIT,
										creditableTaxWithheldFromPrevQuarters,
										creditableTaxWithheldFromTheFourthQuarter,
										foreignTaxCredits, taxPaidInReturn, incomeTaxPaymentUnderSpecialRate,
										sched7SpecialTaxCredits,
										otherCreditsPaymentsDescription1,
										otherCreditsPaymentsAmount1,
										otherCreditsPaymentsDescription2,
										otherCreditsPaymentsAmount2) {
    TaxCreditPaymentExempt = {
        priorYearsExcessCreditsOtherThanMCIT: priorYearsExcessCreditsOtherThanMCIT,
        incomeTaxPaymentUnderMCIT: incomeTaxPaymentUnderMCIT,
        incomeTaxPaymentUnderRegularRate: incomeTaxPaymentUnderRegularRate,
        excessMCIT: excessMCIT,
        creditableTaxWithheldFromPrevQuarters: creditableTaxWithheldFromPrevQuarters,
        creditableTaxWithheldFromTheFourthQuarter: creditableTaxWithheldFromTheFourthQuarter,
        foreignTaxCredits: foreignTaxCredits,
        taxPaidInReturn: taxPaidInReturn,
        incomeTaxPaymentUnderSpecialRate: incomeTaxPaymentUnderSpecialRate,
        sched7SpecialTaxCredits: sched7SpecialTaxCredits,
        otherCreditsPaymentsDescription1: otherCreditsPaymentsDescription1,
        otherCreditsPaymentsAmount1: otherCreditsPaymentsAmount1,
        otherCreditsPaymentsDescription2: otherCreditsPaymentsDescription2,
        otherCreditsPaymentsAmount2: otherCreditsPaymentsAmount2
    };
}

function populateTaxCreditPaymentSpecial(priorYearsExcessCreditsOtherThanMCIT,
										incomeTaxPaymentUnderMCIT,
										incomeTaxPaymentUnderRegularRate, excessMCIT,
										creditableTaxWithheldFromPrevQuarters,
										creditableTaxWithheldFromTheFourthQuarter,
										foreignTaxCredits, taxPaidInReturn, incomeTaxPaymentUnderSpecialRate,
										sched7SpecialTaxCredits,
										otherCreditsPaymentsAmount1,
										otherCreditsPaymentsAmount2) {
    TaxCreditPaymentSpecial = {
        priorYearsExcessCreditsOtherThanMCIT: priorYearsExcessCreditsOtherThanMCIT,
        incomeTaxPaymentUnderMCIT: incomeTaxPaymentUnderMCIT,
        incomeTaxPaymentUnderRegularRate: incomeTaxPaymentUnderRegularRate,
        excessMCIT: excessMCIT,
        creditableTaxWithheldFromPrevQuarters: creditableTaxWithheldFromPrevQuarters,
        creditableTaxWithheldFromTheFourthQuarter: creditableTaxWithheldFromTheFourthQuarter,
        foreignTaxCredits: foreignTaxCredits,
        taxPaidInReturn: taxPaidInReturn,
        incomeTaxPaymentUnderSpecialRate: incomeTaxPaymentUnderSpecialRate,
        sched7SpecialTaxCredits: sched7SpecialTaxCredits,
        otherCreditsPaymentsAmount1: otherCreditsPaymentsAmount1,
        otherCreditsPaymentsAmount2: otherCreditsPaymentsAmount2
    };
}

function populateTaxCreditPaymentRegular(priorYearsExcessCreditsOtherThanMCIT,
									incomeTaxPaymentUnderMCIT,
									incomeTaxPaymentUnderRegularRate, excessMCIT,
									creditableTaxWithheldFromPrevQuarters,
									creditableTaxWithheldFromTheFourthQuarter,
									foreignTaxCredits, taxPaidInReturn, incomeTaxPaymentUnderSpecialRate,
									sched7SpecialTaxCredits,
									otherCreditsPaymentsAmount1,
									otherCreditsPaymentsAmount2) {
    TaxCreditPaymentRegular = {
        priorYearsExcessCreditsOtherThanMCIT: priorYearsExcessCreditsOtherThanMCIT,
        incomeTaxPaymentUnderMCIT: incomeTaxPaymentUnderMCIT,
        incomeTaxPaymentUnderRegularRate: incomeTaxPaymentUnderRegularRate,
        excessMCIT: excessMCIT,
        creditableTaxWithheldFromPrevQuarters: creditableTaxWithheldFromPrevQuarters,
        creditableTaxWithheldFromTheFourthQuarter: creditableTaxWithheldFromTheFourthQuarter,
        foreignTaxCredits: foreignTaxCredits,
        taxPaidInReturn: taxPaidInReturn,
        incomeTaxPaymentUnderSpecialRate: incomeTaxPaymentUnderSpecialRate,
        sched7SpecialTaxCredits: sched7SpecialTaxCredits,
        otherCreditsPaymentsAmount1: otherCreditsPaymentsAmount1,
        otherCreditsPaymentsAmount2: otherCreditsPaymentsAmount2
    };
}

function populateTaxCreditPaymentTotal(priorYearsExcessCreditsOtherThanMCIT,
									incomeTaxPaymentUnderMCIT,
									incomeTaxPaymentUnderRegularRate, excessMCIT,
									creditableTaxWithheldFromPrevQuarters,
									creditableTaxWithheldFromTheFourthQuarter,
									foreignTaxCredits, taxPaidInReturn, incomeTaxPaymentUnderSpecialRate,
									sched7SpecialTaxCredits,
									otherCreditsPaymentsAmount1,
									otherCreditsPaymentsAmount2) {
    TaxCreditPaymentTotal = {
        priorYearsExcessCreditsOtherThanMCIT: priorYearsExcessCreditsOtherThanMCIT,
        incomeTaxPaymentUnderMCIT: incomeTaxPaymentUnderMCIT,
        incomeTaxPaymentUnderRegularRate: incomeTaxPaymentUnderRegularRate,
        excessMCIT: excessMCIT,
        creditableTaxWithheldFromPrevQuarters: creditableTaxWithheldFromPrevQuarters,
        creditableTaxWithheldFromTheFourthQuarter: creditableTaxWithheldFromTheFourthQuarter,
        foreignTaxCredits: foreignTaxCredits,
        taxPaidInReturn: taxPaidInReturn,
        incomeTaxPaymentUnderSpecialRate: incomeTaxPaymentUnderSpecialRate,
        sched7SpecialTaxCredits: sched7SpecialTaxCredits,
        otherCreditsPaymentsAmount1: otherCreditsPaymentsAmount1,
        otherCreditsPaymentsAmount2: otherCreditsPaymentsAmount2
    };
}

function populateOtherCreditsList(otherExpandableDesc, otherExpandableAmount, otherExpandableAmountSpecial,
									otherExpandableAmountRegular, otherExpandableAmountTotal) {
    OtherCreditsSched8 = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount,
        otherExpandableAmountRegular: otherExpandableAmountRegular,
        otherExpandableAmountSpecial: otherExpandableAmountSpecial,
        otherExpandableAmountTotal: otherExpandableAmountTotal
    };

    OtherCredits.push(OtherCreditsSched8);
}

function populateComputationOfMinimumCorporateIncomeTax(balanceOfExcessMCIT1, balanceOfExcessMCIT2, balanceOfExcessMCIT3,
														excessMCITAppliedCurrently1, excessMCITAppliedCurrently2, excessMCITAppliedCurrently3,
														excessMCITAppliedPreviously1, excessMCITAppliedPreviously2, excessMCITAppliedPreviously3,
														excessMCITOverNormalTax1, excessMCITOverNormalTax2, excessMCITOverNormalTax3,
														expiredPortionOfExcessMCIT1, expiredPortionOfExcessMCIT2, expiredPortionOfExcessMCIT3,
														mcit1, mcit2, mcit3,
														mcitYear1, mcitYear2, mcitYear3,
														normalIncomeTax1, normalIncomeTax2, normalIncomeTax3) {
    ComputationOfMinimumCorporateIncomeTax = {
        balanceOfExcessMCIT1: balanceOfExcessMCIT1,
        balanceOfExcessMCIT2: balanceOfExcessMCIT2,
        balanceOfExcessMCIT3: balanceOfExcessMCIT3,
        excessMCITAppliedCurrently1: excessMCITAppliedCurrently1,
        excessMCITAppliedCurrently2: excessMCITAppliedCurrently2,
        excessMCITAppliedCurrently3: excessMCITAppliedCurrently3,
        excessMCITAppliedPreviously1: excessMCITAppliedPreviously1,
        excessMCITAppliedPreviously2: excessMCITAppliedPreviously2,
        excessMCITAppliedPreviously3: excessMCITAppliedPreviously3,
        excessMCITOverNormalTax1: excessMCITOverNormalTax1,
        excessMCITOverNormalTax2: excessMCITOverNormalTax2,
        excessMCITOverNormalTax3: excessMCITOverNormalTax3,
        expiredPortionOfExcessMCIT1: expiredPortionOfExcessMCIT1,
        expiredPortionOfExcessMCIT2: expiredPortionOfExcessMCIT2,
        expiredPortionOfExcessMCIT3: expiredPortionOfExcessMCIT3,
        mcit1: mcit1,
        mcit2: mcit2,
        mcit3: mcit3,
        mcitYear1: mcitYear1,
        mcitYear2: mcitYear2,
        mcitYear3: mcitYear3,
        normalIncomeTax1: normalIncomeTax1,
        normalIncomeTax2: normalIncomeTax2,
        normalIncomeTax3: normalIncomeTax3
    };
}

function populateReconciliationOfNetIncomeExempt(netIncomePerBooks, nonDeductibleExpensesItem2Description,
												nonDeductibleExpensesItem2Value, nonDeductibleExpensesItem3Description,
												nonDeductibleExpensesItem3Value, totalNonDeductibleExpenses,
												nonTaxableAndSpDeductionsItem5Description, nonTaxableAndSpDeductionsItem5Value,
												nonTaxableAndSpDeductionsItem6Description, nonTaxableAndSpDeductionsItem6Value,
												specialDeductionsItem7Description, specialDeductionsItem7Value,
												specialDeductionsItem8Description, specialDeductionsItem8Value,
												totalNonTaxableAndSpDeductions, netTaxableIncome) {
    ReconcilationOfNetIncomeExempt = {
        netIncomePerBooks: netIncomePerBooks,
        nonDeductibleExpensesItem2Description: nonDeductibleExpensesItem2Description,
        nonDeductibleExpensesItem2Value: nonDeductibleExpensesItem2Value,
        nonDeductibleExpensesItem3Description: nonDeductibleExpensesItem3Description,
        nonDeductibleExpensesItem3Value: nonDeductibleExpensesItem3Value,
        totalNonDeductibleExpenses: totalNonDeductibleExpenses,
        nonTaxableAndSpDeductionsItem5Description: nonTaxableAndSpDeductionsItem5Description,
        nonTaxableAndSpDeductionsItem5Value: nonTaxableAndSpDeductionsItem5Value,
        nonTaxableAndSpDeductionsItem6Description: nonTaxableAndSpDeductionsItem6Description,
        nonTaxableAndSpDeductionsItem6Value: nonTaxableAndSpDeductionsItem6Value,
        specialDeductionsItem7Description: specialDeductionsItem7Description,
        specialDeductionsItem7Value: specialDeductionsItem7Value,
        specialDeductionsItem8Description: specialDeductionsItem8Description,
        specialDeductionsItem8Value: specialDeductionsItem8Value,
        totalNonTaxableAndSpDeductions: totalNonTaxableAndSpDeductions,
        netTaxableIncome: netTaxableIncome
    };
}

function populateReconciliationOfNetIncomeSpecial(netIncomePerBooks, nonDeductibleExpensesItem2Value,
												nonDeductibleExpensesItem3Value, totalNonDeductibleExpenses,
												 nonTaxableAndSpDeductionsItem5Value,
												 nonTaxableAndSpDeductionsItem6Value,
												specialDeductionsItem7Value,
												specialDeductionsItem8Value, totalNonTaxableAndSpDeductions, netTaxableIncome) {
    ReconcilationOfNetIncomeSpecial = {
        netIncomePerBooks: netIncomePerBooks,
        nonDeductibleExpensesItem2Value: nonDeductibleExpensesItem2Value,
        nonDeductibleExpensesItem3Value: nonDeductibleExpensesItem3Value,
        totalNonDeductibleExpenses: totalNonDeductibleExpenses,
        nonTaxableAndSpDeductionsItem5Value: nonTaxableAndSpDeductionsItem5Value,
        nonTaxableAndSpDeductionsItem6Value: nonTaxableAndSpDeductionsItem6Value,
        specialDeductionsItem7Value: specialDeductionsItem7Value,
        specialDeductionsItem8Value: specialDeductionsItem8Value,
        totalNonTaxableAndSpDeductions: totalNonTaxableAndSpDeductions,
        netTaxableIncome: netTaxableIncome
    };
}

function populateReconciliationOfNetIncomeRegular(netIncomePerBooks, nonDeductibleExpensesItem2Value,
													nonDeductibleExpensesItem3Value, totalNonDeductibleExpenses,
													 nonTaxableAndSpDeductionsItem5Value,
													 nonTaxableAndSpDeductionsItem6Value,
													specialDeductionsItem7Value,
													specialDeductionsItem8Value, totalNonTaxableAndSpDeductions, netTaxableIncome) {
    ReconcilationOfNetIncomeRegular = {
        netIncomePerBooks: netIncomePerBooks,
        nonDeductibleExpensesItem2Value: nonDeductibleExpensesItem2Value,
        nonDeductibleExpensesItem3Value: nonDeductibleExpensesItem3Value,
        totalNonDeductibleExpenses: totalNonDeductibleExpenses,
        nonTaxableAndSpDeductionsItem5Value: nonTaxableAndSpDeductionsItem5Value,
        nonTaxableAndSpDeductionsItem6Value: nonTaxableAndSpDeductionsItem6Value,
        specialDeductionsItem7Value: specialDeductionsItem7Value,
        specialDeductionsItem8Value: specialDeductionsItem8Value,
        totalNonTaxableAndSpDeductions: totalNonTaxableAndSpDeductions,
        netTaxableIncome: netTaxableIncome
    };
}

function populateReconciliationOfNetIncomeTotal(netIncomePerBooks, nonDeductibleExpensesItem2Value,
												nonDeductibleExpensesItem3Value, totalNonDeductibleExpenses,
												 nonTaxableAndSpDeductionsItem5Value,
												 nonTaxableAndSpDeductionsItem6Value,
												specialDeductionsItem7Value,
												specialDeductionsItem8Value, totalNonTaxableAndSpDeductions,
												netTaxableIncome) {
    ReconcilationOfNetIncomeTotal = {
        netIncomePerBooks: netIncomePerBooks,
        nonDeductibleExpensesItem2Value: nonDeductibleExpensesItem2Value,
        nonDeductibleExpensesItem3Value: nonDeductibleExpensesItem3Value,
        totalNonDeductibleExpenses: totalNonDeductibleExpenses,
        nonTaxableAndSpDeductionsItem5Value: nonTaxableAndSpDeductionsItem5Value,
        nonTaxableAndSpDeductionsItem6Value: nonTaxableAndSpDeductionsItem6Value,
        specialDeductionsItem7Value: specialDeductionsItem7Value,
        specialDeductionsItem8Value: specialDeductionsItem8Value,
        totalNonTaxableAndSpDeductions: totalNonTaxableAndSpDeductions,
        netTaxableIncome: netTaxableIncome
    };
}



function populateNonDeductibleExpenseItem3(otherExpandableDesc,
									otherExpandableAmount,
									otherExpandableAmountSpecial,
									otherExpandableAmountRegular, otherExpandableAmountTotal) {
    NonDeductibleExpenseSched10 = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount,
        otherExpandableAmountSpecial: otherExpandableAmountSpecial,
        otherExpandableAmountRegular: otherExpandableAmountRegular,
        otherExpandableAmountTotal: otherExpandableAmountTotal
    };

    NonDeductibleExpense.push(NonDeductibleExpenseSched10);
}



function populateNonTaxableAndSpDeductionsItem6(otherExpandableDesc, otherExpandableAmount, otherExpandableAmountSpecial, otherExpandableAmountRegular, otherExpandableAmountTotal) {

    NonTaxableAndSpDeductionsSched10 = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount,
        otherExpandableAmountSpecial: otherExpandableAmountSpecial,
        otherExpandableAmountRegular: otherExpandableAmountRegular,
        otherExpandableAmountTotal: otherExpandableAmountTotal
    };

    NonTaxableAndSpDeductionsItem6.push(NonTaxableAndSpDeductionsSched10);
}

function populateSpecialDeductionsItem8(otherExpandableDesc, otherExpandableAmount, otherExpandableAmountSpecial,
										otherExpandableAmountRegular, otherExpandableAmountTotal) {

    NonTaxableAndSpDeductionsItem8Sched10 = {
        otherExpandableDesc: otherExpandableDesc,
        otherExpandableAmount: otherExpandableAmount,
        otherExpandableAmountSpecial: otherExpandableAmountSpecial,
        otherExpandableAmountRegular: otherExpandableAmountRegular,
        otherExpandableAmountTotal: otherExpandableAmountTotal
    };

    NonTaxableAndSpDeductionsItem8.push(NonTaxableAndSpDeductionsItem8Sched10);
}

function populateBalanceSheet(currentAssests, longTermInvestment,
							  propertyPlantEquipmentNet, longTermReceivables,
							  intangibleAssets, otherAssets, totalAssets,
							  currentLiabilities, longTermLiabilities, deferedCredits,
							  otherLiabilities, totalLiabilities, capitalStock,
							  additionalPaidInCapital, retainedEarnings, totalEquity,
							  totalLiabilitiesEquity, beginningCapital, netIncomeForTheYear,
							  drawings, endingCapital, totalLiabilitiesAndCapital) {
    BalanceSheet = {
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
}

function populateSchedule12(capitalContributorType, StockholdersList) {

    Schedule12 = {
        capitalContributorType: capitalContributorType,
        StockholdersList: StockholdersList
    };
}

function populateListOfStockholders(registeredName, tin1, tin2, tin3, branchCode, capitalContribution, percentToTotal) {

    Stockholders = {
        registeredName: registeredName,
        tin1: tin1,
        tin2: tin2,
        tin3: tin3,
        branchCode: branchCode,
        capitalContribution: capitalContribution,
        percentToTotal: percentToTotal
    };

    StockholdersList.push(Stockholders);
}

function populateSchedule13I(interestExempt, interestsActualAmt,
							 interestsFinalTaxWthldPd, royaltiesExempt,
							 royaltiesActualAmt, royaltiesFinalTaxWthldPd,
							 dividendsExempt, dividendsActualAmt, dividendsFinalTaxWthldPd,
							 prizesWinningsExempt, prizesWinningsActualAmt,
							 prizesWinningsFinalTaxWthldPd, GrossIncomeSubjectToFinalWithholdingList) {
    Schedule13 = {
        interestExempt: interestExempt,
        interestsActualAmt: interestsActualAmt,
        interestsFinalTaxWthldPd: interestsFinalTaxWthldPd,
        royaltiesExempt: royaltiesExempt,
        royaltiesActualAmt: royaltiesActualAmt,
        royaltiesFinalTaxWthldPd: royaltiesFinalTaxWthldPd,
        dividendsExempt: dividendsExempt,
        dividendsActualAmt: dividendsActualAmt,
        dividendsFinalTaxWthldPd: dividendsFinalTaxWthldPd,
        prizesWinningsExempt: prizesWinningsExempt,
        prizesWinningsActualAmt: prizesWinningsActualAmt,
        prizesWinningsFinalTaxWthldPd: prizesWinningsFinalTaxWthldPd,
        GrossIncomeSubjectToFinalWithholdingList: GrossIncomeSubjectToFinalWithholdingList
    };
}

function populateListOfGrossIncomeSubjectToFinalWithholding(description, exempt, amount, finalTax) {

    GrossIncomeSubjectToFinalWithholding = {
        description: description,
        exempt: exempt,
        amount: amount,
        finalTax: finalTax,
        type: '4'
    };

    GrossIncomeSubjectToFinalWithholdingList.push(GrossIncomeSubjectToFinalWithholding);
}

function populateListOfRealPropertySale(propDescription, taxDeclNo, carNo, actualAmount, propertyTaxWithheld) {

    RealPropertySale = {
        propDescription: propDescription,
        taxDeclNo: taxDeclNo,
        carNo: carNo,
        actualAmount: actualAmount,
        propertyTaxWithheld: propertyTaxWithheld
    };

    RealPropertySaleList.push(RealPropertySale);
}

function populateListOfStockShareSale(stockKind, stockSeries, stockCARNo, numShares, Issued, stockActualAmount, stockTaxWithheld) {

    StockShareSale = {
        stockKind: stockKind,
        stockSeries: stockSeries,
        stockCARNo: stockCARNo,
        numShares: numShares,
        Issued: Issued,
        stockActualAmount: stockActualAmount,
        stockTaxWithheld: stockTaxWithheld
    };

    StockShareSaleList.push(StockShareSale);
}

function populateListOfOtherIncome(otherIncome, actualAmount, otherIncomeTaxWithheld) {

    OtherIncome = {
        otherIncome: otherIncome,
        actualAmount: actualAmount,
        otherIncomeTaxWithheld: otherIncomeTaxWithheld
    };

    OtherIncomeList.push(OtherIncome);
}

function populateTaxPayerGrossIncomeExempt(totalFinalTaxWithheldOrPaid, returnOfPremium) {
    ReturnOfPremium = {
        totalFinalTaxWithheldOrPaid: totalFinalTaxWithheldOrPaid,
        returnOfPremium: returnOfPremium
    };
}

function populateListOfPersonalPropertyReceived(personalPropertyDesc, personalPropertyTransferMode, personalPropertyCARNo, personalPropertyActualAmount) {

    PersonalPropertyReceived = {
        personalPropertyDesc: personalPropertyDesc,
        personalPropertyTransferMode: personalPropertyTransferMode,
        personalPropertyCARNo: personalPropertyCARNo,
        personalPropertyActualAmount: personalPropertyActualAmount
    };

    PersonalPropertyReceivedList.push(PersonalPropertyReceived);
}

function populateListOfOtherExemptIncome(otherIncome, actualAmount) {

    OtherExemptIncome = {
        otherIncome: otherIncome,
        actualAmount: actualAmount
    };
    OtherExemptIncomeList.push(OtherExemptIncome);
}

function populateTaxRegimeAttachments(taxRegime) {

    TaxRegime = {
        taxRegime: taxRegime
    };
}

function populateScheduleA(investmentPromotionAgency, legalBasis, registeredActivityProgram, specialTaxRate, effectivityDateFrom, effectivityDateTo) {

    ScheduleA = {
        investmentPromotionAgency: investmentPromotionAgency,
        legalBasis: legalBasis,
        registeredActivityProgram: registeredActivityProgram,
        specialTaxRate: specialTaxRate,
        effectivityDateFrom: effectivityDateFrom,
        effectivityDateTo: effectivityDateTo
    };
}

function populateScheduleB(netSalesRevenuesReceiptsFeesExempt, costOfSalesServiceslExempt,
					grossIncomeFromOperationExempt, otherTaxableIncomeNotSubjectedExempt,
					totalGrossIncomeGrossTaxableIncomeExempt, ordinaryAllowableIemizedDeducExempt,
					specialAllowableItemizedDeducExempt, nolcoExempt, totalItemizedDeductionExempt,
					netTaxableIncomeNetIncomeExempt, applicableIncomeTaxRateExempt, totalIncomeTaxDueSched1Special) {

    ScheduleB = {
        netSalesRevenuesReceiptsFeesExempt: netSalesRevenuesReceiptsFeesExempt,
        costOfSalesServiceslExempt: costOfSalesServiceslExempt,
        grossIncomeFromOperationExempt: grossIncomeFromOperationExempt,
        otherTaxableIncomeNotSubjectedExempt: otherTaxableIncomeNotSubjectedExempt,
        totalGrossIncomeGrossTaxableIncomeExempt: totalGrossIncomeGrossTaxableIncomeExempt,
        ordinaryAllowableIemizedDeducExempt: ordinaryAllowableIemizedDeducExempt,
        specialAllowableItemizedDeducExempt: specialAllowableItemizedDeducExempt,
        nolcoExempt: nolcoExempt,
        totalItemizedDeductionExempt: totalItemizedDeductionExempt,
        netTaxableIncomeNetIncomeExempt: netTaxableIncomeNetIncomeExempt,
        applicableIncomeTaxRateExempt: applicableIncomeTaxRateExempt,
        totalIncomeTaxDueSched1Special: totalIncomeTaxDueSched1Special
    };
}

function populateScheduleC(netIncome, specialAllowableItemizedDeductions,
										subTotal, incomeTaxDue, beforeSpecialTaxCredits,
										specialTaxCredits, totalTaxReliefAvailments) {
    ScheduleC = {
        netIncome: netIncome,
        specialAllowableItemizedDeductions: specialAllowableItemizedDeductions,
        subTotal: subTotal,
        incomeTaxDue: incomeTaxDue,
        beforeSpecialTaxCredits: beforeSpecialTaxCredits,
        specialTaxCredits: specialTaxCredits,
        totalTaxReliefAvailments: totalTaxReliefAvailments
    };
}

function populateScheduleD(taxWthldGoods, taxWthldServices, taxWthldLease,
					taxWthldTotal, salesReturns, netSalesSched1) {
    ScheduleD = {
        taxWthldGoods: taxWthldGoods,
        taxWthldServices: taxWthldServices,
        taxWthldLease: taxWthldLease,
        taxWthldTotal: taxWthldTotal,
        salesReturns: salesReturns,
        netSalesSched1: netSalesSched1
    };
}

function populateScheduleE1(goodsInvBeg, purGoods, goodsAvail,
							goodsInvEnd, costSales, directMatsBeg,
							purDirectMats, matsAvail, directMatsEnd,
							rawMats, directLabor, manufacturingOverhead,
							totalManufacturingCost, workInProgressBeg,
							winProgressEnd, costGoodsManufactured,
							finishedGoodsBeg, finishedGoodsEnd,
							totalCostGoodsManufacturedAndSold, salaries,
							materials, sched2CDepreciation, sched2CRental,
							outsideServ, others, costService,
							totalCostSalesAndServices) {
    ScheduleE1 = {
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
}

function populateScheduleF(otherTaxableIncomeNotSubjectToFinalTaxDescFirst, otherTaxableIncomeNotSubjectToFinalTaxValueFirst,
							otherTaxableIncomeNotSubjectToFinalTaxDescSecond, otherTaxableIncomeNotSubjectToFinalTaxValueSecond,
							otherTaxableIncomeNotSubjectToFinalTaxDescThird, otherTaxableIncomeNotSubjectToFinalTaxValueThird,
							otherTaxableIncomeNotSubjectToFinalTaxValueTotal,
							OtherTaxableIncomeNotSubjectToFinalTaxList) {
    ScheduleF = {
        otherTaxableIncomeNotSubjectToFinalTaxDescFirst: otherTaxableIncomeNotSubjectToFinalTaxDescFirst,
        otherTaxableIncomeNotSubjectToFinalTaxValueFirst: otherTaxableIncomeNotSubjectToFinalTaxValueFirst,
        otherTaxableIncomeNotSubjectToFinalTaxDescSecond: otherTaxableIncomeNotSubjectToFinalTaxDescSecond,
        otherTaxableIncomeNotSubjectToFinalTaxValueSecond: otherTaxableIncomeNotSubjectToFinalTaxValueSecond,
        otherTaxableIncomeNotSubjectToFinalTaxDescThird: otherTaxableIncomeNotSubjectToFinalTaxDescThird,
        otherTaxableIncomeNotSubjectToFinalTaxValueThird: otherTaxableIncomeNotSubjectToFinalTaxValueThird,
        otherTaxableIncomeNotSubjectToFinalTaxValueTotal: otherTaxableIncomeNotSubjectToFinalTaxValueTotal,
        OtherTaxableIncomeNotSubjectToFinalTaxList: OtherTaxableIncomeNotSubjectToFinalTaxList
    };
}

function populateListOfOtherTaxableIncomeNotSubjectToFinalTax(description, amount) {

    OtherTaxableIncomeNotSubjectToFinalTax = {
        description: description,
        amount: amount
    };

    OtherTaxableIncomeNotSubjectToFinalTaxList.push(OtherTaxableIncomeNotSubjectToFinalTax);
}

function populateScheduleG(adAndPromotionsVal,
						amortizatiosDescSecond, amortizatiosDescThird, amortizatiosDescFourth,
						amortizatiosValSecond, amortizatiosValThird, amortizatiosValFourth,
						AmortizationList,
						badDebts, charitableContributions, commissions,
						communicationLightWater, utilities, depletion,
						depreciation, directorFee, fringeBenefits, fuelAndOil,
						insurance, iterest, janitorialAndMessengerial,
						losses, mgmtAndConsultancyFee, misc, officeSupplies,
						otherServices, professionalFees, schedGRental,
						repairLabor, repairMaterials, entertainment,
						researchAndDev, royalties, salariesAndAllownces,
						securityServices, otherContributions, taxesAndLiscenses,
						tollingFees, trainingsAndSeminars, travelTransportaion,
						othersFirstDescFirst, othersFirstDescSecond,
						othersFirstDescThird, othersFirstDescfourth,
						otherFirstValue, otherSecondValue, otherThirdValue, otherFourthValue,
						OtherList) {
    ScheduleG = {
        adAndPromotionsVal: adAndPromotionsVal,
        amortizatiosDescSecond: amortizatiosDescSecond,
        amortizatiosDescThird: amortizatiosDescThird,
        amortizatiosDescFourth: amortizatiosDescFourth,
        amortizatiosValSecond: amortizatiosValSecond,
        amortizatiosValThird: amortizatiosValThird,
        amortizatiosValFourth: amortizatiosValFourth,
        AmortizationList: AmortizationList,
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
        othersFirstDescFirst: othersFirstDescFirst,
        othersFirstDescSecond: othersFirstDescSecond,
        othersFirstDescThird: othersFirstDescThird,
        othersFirstDescfourth: othersFirstDescfourth,
        otherFirstValue: otherFirstValue,
        otherSecondValue: otherSecondValue,
        otherThirdValue: otherThirdValue,
        otherFourthValue: otherFourthValue,
        OtherList: OtherList
    };
}

function populateListOfAmortization(description, amount) {

    Amortization = {
        description: description,
        amount: amount
    };

    AmortizationList.push(Amortization);
}
function populateListOfOthers(description, amount) {

    Others = {
        description: description,
        amount: amount
    };

    OtherList.push(Others);
}

function populateScheduleH(specialAllowableItemizedDeductionsDescription1, specialAllowableItemizedDeductionsLegalBasis1, specialAllowableItemizedDeductionsAmount1,
							specialAllowableItemizedDeductionsDescription2, specialAllowableItemizedDeductionsLegalBasis2, specialAllowableItemizedDeductionsAmount2,
							specialAllowableItemizedDeductionsDescription3, specialAllowableItemizedDeductionsLegalBasis3, specialAllowableItemizedDeductionsAmount3,
							specialAllowableItemizedDeductionsDescription4, specialAllowableItemizedDeductionsLegalBasis4, specialAllowableItemizedDeductionsAmount4,
							totalSpecialAllowableItemizedDeductions, SpecialAllowableItemizedDeductionsList) {
    ScheduleH = {
        specialAllowableItemizedDeductionsDescription1: specialAllowableItemizedDeductionsDescription1,
        specialAllowableItemizedDeductionsDescription2: specialAllowableItemizedDeductionsDescription2,
        specialAllowableItemizedDeductionsDescription3: specialAllowableItemizedDeductionsDescription3,
        specialAllowableItemizedDeductionsDescription4: specialAllowableItemizedDeductionsDescription4,
        specialAllowableItemizedDeductionsLegalBasis1: specialAllowableItemizedDeductionsLegalBasis1,
        specialAllowableItemizedDeductionsLegalBasis2: specialAllowableItemizedDeductionsLegalBasis2,
        specialAllowableItemizedDeductionsLegalBasis3: specialAllowableItemizedDeductionsLegalBasis3,
        specialAllowableItemizedDeductionsLegalBasis4: specialAllowableItemizedDeductionsLegalBasis4,
        specialAllowableItemizedDeductionsAmount1: specialAllowableItemizedDeductionsAmount1,
        specialAllowableItemizedDeductionsAmount2: specialAllowableItemizedDeductionsAmount2,
        specialAllowableItemizedDeductionsAmount3: specialAllowableItemizedDeductionsAmount3,
        specialAllowableItemizedDeductionsAmount4: specialAllowableItemizedDeductionsAmount4,
        totalSpecialAllowableItemizedDeductions: totalSpecialAllowableItemizedDeductions,
        SpecialAllowableItemizedDeductionsList: SpecialAllowableItemizedDeductionsList
    };
}

function populateListOfSpecialAllowableItemizedDeductions(description, legalBasis, amount) {

    SpecialAllowableItemizedDeductions = {
        description: description,
        legalBasis: legalBasis,
        amount: amount
    };

    SpecialAllowableItemizedDeductionsList.push(SpecialAllowableItemizedDeductions);
}

function populateScheduleI(grossIncome, lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw,
				netOperatingLoss, netOperatingLossYearIncurred1, netOperatingLossYearIncurred2,
				netOperatingLossYearIncurred3, netOperatingLossYearIncurred4, netOperatingLossAmount1,
				netOperatingLossAmount2, netOperatingLossAmount3, netOperatingLossAmount4, NOLCOAppliedPreviousYear1,
				NOLCOAppliedPreviousYear2, NOLCOAppliedPreviousYear3, NOLCOAppliedPreviousYear4, NOLCOExpired1,
				NOLCOExpired2, NOLCOExpired3, NOLCOExpired4, NOLCOAppliedCurrentYear1, NOLCOAppliedCurrentYear2,
				NOLCOAppliedCurrentYear3, NOLCOAppliedCurrentYear4, netOperatingLossUnapplied1,
				netOperatingLossUnapplied2, netOperatingLossUnapplied3, netOperatingLossUnapplied4) {
    ScheduleI = {
        grossIncome: grossIncome,
        lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw:
        lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw,
        netOperatingLoss: netOperatingLoss,
        netOperatingLossYearIncurred1: netOperatingLossYearIncurred1,
        netOperatingLossYearIncurred2: netOperatingLossYearIncurred2,
        netOperatingLossYearIncurred3: netOperatingLossYearIncurred3,
        netOperatingLossYearIncurred4: netOperatingLossYearIncurred4,
        netOperatingLossAmount1: netOperatingLossAmount1,
        netOperatingLossAmount2: netOperatingLossAmount2,
        netOperatingLossAmount3: netOperatingLossAmount3,
        netOperatingLossAmount4: netOperatingLossAmount4,
        NOLCOAppliedPreviousYear1: NOLCOAppliedPreviousYear1,
        NOLCOAppliedPreviousYear2: NOLCOAppliedPreviousYear2,
        NOLCOAppliedPreviousYear3: NOLCOAppliedPreviousYear3,
        NOLCOAppliedPreviousYear4: NOLCOAppliedPreviousYear4,
        NOLCOExpired1: NOLCOExpired1,
        NOLCOExpired2: NOLCOExpired2,
        NOLCOExpired3: NOLCOExpired3,
        NOLCOExpired4: NOLCOExpired4,
        NOLCOAppliedCurrentYear1: NOLCOAppliedCurrentYear1,
        NOLCOAppliedCurrentYear2: NOLCOAppliedCurrentYear2,
        NOLCOAppliedCurrentYear3: NOLCOAppliedCurrentYear3,
        NOLCOAppliedCurrentYear4: NOLCOAppliedCurrentYear4,
        netOperatingLossUnapplied1: netOperatingLossUnapplied1,
        netOperatingLossUnapplied2: netOperatingLossUnapplied2,
        netOperatingLossUnapplied3: netOperatingLossUnapplied3,
        netOperatingLossUnapplied4: netOperatingLossUnapplied4
    };
}

function soapRequest() {
    var header = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.client.ph.gov.bir.web"> \
		<soapenv:Header/> \
		<soapenv:Body> \
		 <ws:submitForm1702MX> \ ' ;
    var openForm = '<formBean>';
    var taxpayer = '<taxpayer>\
				    	<taxIdNumber>'+ Taxpayer.taxIdNumber + '</taxIdNumber>\
				    	<branchCode>'+ Taxpayer.branchCode + '</branchCode>\
				    	<industryTypeCode>'+ Taxpayer.industryTypeCode + '</industryTypeCode> \
				    	<industryTypeMitCode>'+ Taxpayer.industryTypeMitCode + '</industryTypeMitCode> \
				    	<description>'+ Taxpayer.description + '</description> \
				    	<barangayAddress>'+ Taxpayer.barangayAddress + '</barangayAddress> \
				    	<districtAddress>'+ Taxpayer.districtAddress + '</districtAddress> \
				    	<dateRegistered>'+ Taxpayer.dateRegistered + '</dateRegistered> \
				    	<startMonth>'+ Taxpayer.startMonth + '</startMonth> \
				    	<incorporationDate>'+ Taxpayer.incorporationDate + '</incorporationDate> \
				    	<birthDate>'+ Taxpayer.birthDate + '</birthDate> \
				    	<zipCode>'+ Taxpayer.zipCode + '</zipCode> \
				    	<sex>'+ Taxpayer.sex + '</sex> \
				    	<tinPart1>'+ Taxpayer.tinPart1 + '</tinPart1> \
				    	<tinPart2>'+ Taxpayer.tinPart2 + '</tinPart2> \
				    	<tinPart3>'+ Taxpayer.tinPart3 + '</tinPart3> \
				    	<registeredAddress>'+ Taxpayer.registeredAddress + '</registeredAddress> \
				    	<dateFiled>'+ Taxpayer.dateFiled + '</dateFiled> \
				    	<dueDate>'+ Taxpayer.dueDate + '</dueDate> \
				    	<returnPeriod>'+ Taxpayer.returnPeriod + '</returnPeriod> \
				    	<emailAddress>'+ Taxpayer.emailAddress + '</emailAddress> \
				    	<formVersion>'+ Taxpayer.formVersion + '</formVersion> \
				    	<ammendedYN>'+ Taxpayer.ammendedYN + '</ammendedYN> \
				    	<batchNo>'+ Taxpayer.batchNo + '</batchNo> \
				    	<amdendedReturn>'+ Taxpayer.amdendedReturn + '</amdendedReturn> \
				    	<shortPeriodReturn>'+ Taxpayer.shortPeriodReturn + '</shortPeriodReturn> \
				    	<alphaNumericTaxCode>'+ Taxpayer.alphaNumericTaxCode + '</alphaNumericTaxCode> \
				    	<sheetFiledCount>'+ Taxpayer.sheetFiledCount + '</sheetFiledCount> \
				    	<contactNumber>'+ Taxpayer.contactNumber + '</contactNumber> \
				    	<mainLine>'+ Taxpayer.mainLine + '</mainLine> \
				    	<methodOfDeduction>'+ Taxpayer.methodOfDeduction + '</methodOfDeduction> \
				    	<lineOfBusiness>'+ Taxpayer.lineOfBusiness + '</lineOfBusiness> \
				    	<calendarFiscal>'+ Taxpayer.calendarFiscal + '</calendarFiscal> \
				    	<yearEndedMonth>'+ Taxpayer.yearEndedMonth + '</yearEndedMonth> \
				    	<yearEnded>'+ Taxpayer.yearEnded + '</yearEnded> \
				    	<rdoCode>'+ Taxpayer.rdoCode + '</rdoCode> \
				    	<registeredActivity>'+ Taxpayer.registeredActivity + '</registeredActivity> \
				    	<lastName>'+ Taxpayer.lastName + '</lastName> \
				    	<firstName>'+ Taxpayer.firstName + '</firstName> \
				    	<registeredName>'+ Taxpayer.registeredName + '</registeredName> \
				    	<ctcSecType>'+ Taxpayer.ctcSecType + '</ctcSecType> \
				    	<atc1>'+ Taxpayer.atc1 + '</atc1> \
				    	<atc1Desc>'+ Taxpayer.atc1Desc + '</atc1Desc> \
				    	<atc2Desc>'+ Taxpayer.atc2Desc + '</atc2Desc> \
				    	<atc2>'+ Taxpayer.atc2 + '</atc2> \
				    	<atcIC011>'+ Taxpayer.atcIC011 + '</atcIC011> \
			            <atcIC021>'+ Taxpayer.atcIC021 + '</atcIC021> \
				    	<effectivityDateFrom>'+ Taxpayer.effectivityDateFrom + '</effectivityDateFrom> \
				    	<effectivityDateTo>'+ Taxpayer.effectivityDateTo + '</effectivityDateTo> \
				    	<subStreet>'+ Taxpayer.subStreet + '</subStreet> \
				    	<street>'+ Taxpayer.street + '</street> \
				    	<city>'+ Taxpayer.city + '</city> \
				    	<offlineFormVersion>'+ Taxpayer.offlineFormVersion + '</offlineFormVersion> \
				    </taxpayer>';

    var totalTaxPayable = '<totalTaxPayable> \
						    	<totalIncomeTaxDue>'+ TotalTaxPayable.totalIncomeTaxDue + '</totalIncomeTaxDue> \
						    	<totalPenalties>'+ TotalTaxPayable.totalPenalties + '</totalPenalties> \
						    	<netTaxPayable>'+ TotalTaxPayable.netTaxPayable + '</netTaxPayable> \
						    	<totalTaxCredits>'+ TotalTaxPayable.totalTaxCredits + '</totalTaxCredits> \
						    	<communityTaxCertificate>'+ TotalTaxPayable.communityTaxCertificate + '</communityTaxCertificate> \
						    	<dateOfIssue>'+ TotalTaxPayable.dateOfIssue + '</dateOfIssue> \
						    	<placeOfIssue>'+ TotalTaxPayable.placeOfIssue + '</placeOfIssue> \
						    	<amountIfCTC>'+ TotalTaxPayable.amountIfCTC + '</amountIfCTC> \
						    	<overPayment>'+ TotalTaxPayable.overPayment + '</overPayment> \
						    	<totalAmountPayable>'+ TotalTaxPayable.totalAmountPayable + '</totalAmountPayable> \
						    	<ctcSecType>'+ TotalTaxPayable.ctcSecType + '</ctcSecType> \
					    	</totalTaxPayable>';

    var basisOfTaxRelief = '<basisOfTaxRelief> \
						    	<taxPayerActivityForTaxReliefsExempt> \
						    	<investmentPromotionAgency>'+ TaxpayerActivityForTaxReliefExempt.investmentPromotionAgency + '</investmentPromotionAgency> \
						    	<legalBasis>'+ TaxpayerActivityForTaxReliefExempt.legalBasis + '</legalBasis> \
						    	<registeredActivityProgram>'+ TaxpayerActivityForTaxReliefExempt.registeredActivityProgram + '</registeredActivityProgram> \
						    	<specialTaxRateSpecialRateDec>'+ TaxpayerActivityForTaxReliefExempt.specialTaxRateSpecialRateDec + '</specialTaxRateSpecialRateDec> \
				                <specialTaxRateSpecialRateDisplay>'+ TaxpayerActivityForTaxReliefExempt.specialTaxRateSpecialRateDisplay + '</specialTaxRateSpecialRateDisplay> \
						    	<effectivityDateFrom>'+ TaxpayerActivityForTaxReliefExempt.effectivityDateFrom + '</effectivityDateFrom> \
						    	<effectivityDateTo>'+ TaxpayerActivityForTaxReliefExempt.effectivityDateTo + '</effectivityDateTo> \
						    	</taxPayerActivityForTaxReliefsExempt> \
						    	<taxPayerActivityForTaxReliefsSpecial> \
						    	<investmentPromotionAgency>'+ TaxpayerActivityForTaxReliefSpecial.investmentPromotionAgency + '</investmentPromotionAgency> \
						    	<legalBasis>'+ TaxpayerActivityForTaxReliefSpecial.legalBasis + '</legalBasis> \
						    	<registeredActivityProgram>'+ TaxpayerActivityForTaxReliefSpecial.registeredActivityProgram + '</registeredActivityProgram> \
						    	<specialTaxRate>'+ TaxpayerActivityForTaxReliefSpecial.specialTaxRate + '</specialTaxRate> \
						    	<effectivityDateFrom>'+ TaxpayerActivityForTaxReliefSpecial.effectivityDateFrom + '</effectivityDateFrom> \
						    	<effectivityDateTo>'+ TaxpayerActivityForTaxReliefSpecial.effectivityDateTo + '</effectivityDateTo> \
						    	</taxPayerActivityForTaxReliefsSpecial> \
						    	<taxPayerActivityForTaxReliefsSpecialTaxRelief> \
						    	<investmentPromotionAgency>'+ TaxpayerActivityForTaxReliefSpecialTaxRelief.investmentPromotionAgency + '</investmentPromotionAgency> \
						    	<legalBasis>'+ TaxpayerActivityForTaxReliefSpecialTaxRelief.legalBasis + '</legalBasis> \
						    	<registeredActivityProgram>'+ TaxpayerActivityForTaxReliefSpecialTaxRelief.registeredActivityProgram + '</registeredActivityProgram> \
						    	<effectivityDateFrom>'+ TaxpayerActivityForTaxReliefSpecialTaxRelief.effectivityDateFrom + '</effectivityDateFrom> \
						    	<effectivityDateTo>'+ TaxpayerActivityForTaxReliefSpecialTaxRelief.effectivityDateTo + '</effectivityDateTo> \
						    	</taxPayerActivityForTaxReliefsSpecialTaxRelief> \
					    	</basisOfTaxRelief>';

    var computationOfAmountPayablePerTaxRegime = '<computationOfAmountPayablePerTaxRegime> \
												    	<totalIncomeTaxDueExempt>'+ ComputationOfAmountPayablePerTaxRegime.totalIncomeTaxDueExempt + '</totalIncomeTaxDueExempt> \
												    	<totalIncomeTaxDueSpecial>'+ ComputationOfAmountPayablePerTaxRegime.totalIncomeTaxDueSpecial + '</totalIncomeTaxDueSpecial> \
												    	<totalIncomeTaxDueRegular>'+ ComputationOfAmountPayablePerTaxRegime.totalIncomeTaxDueRegular + '</totalIncomeTaxDueRegular> \
												    	<totalIncomeTaxDueAllColumns>'+ ComputationOfAmountPayablePerTaxRegime.totalIncomeTaxDueAllColumns + '</totalIncomeTaxDueAllColumns> \
												    	<lessCreditsPaymentsExempt>'+ ComputationOfAmountPayablePerTaxRegime.lessCreditsPaymentsExempt + '</lessCreditsPaymentsExempt> \
												    	<lessCreditsPaymentsSpecial>'+ ComputationOfAmountPayablePerTaxRegime.lessCreditsPaymentsSpecial + '</lessCreditsPaymentsSpecial> \
												    	<lessCreditsPaymentsRegular>'+ ComputationOfAmountPayablePerTaxRegime.lessCreditsPaymentsRegular + '</lessCreditsPaymentsRegular> \
												    	<lessCreditsPaymentsAllColumns>'+ ComputationOfAmountPayablePerTaxRegime.lessCreditsPaymentsAllColumns + '</lessCreditsPaymentsAllColumns> \
												    	<netTaxPayableOverpaymentExempt>'+ ComputationOfAmountPayablePerTaxRegime.netTaxPayableOverpaymentExempt + '</netTaxPayableOverpaymentExempt> \
												    	<netTaxPayableOverpaymentSpecial>'+ ComputationOfAmountPayablePerTaxRegime.netTaxPayableOverpaymentSpecial + '</netTaxPayableOverpaymentSpecial> \
												    	<netTaxPayableOverpaymentRegular>'+ ComputationOfAmountPayablePerTaxRegime.netTaxPayableOverpaymentRegular + '</netTaxPayableOverpaymentRegular> \
												    	<netTaxPayableOverpaymentAllColumns>'+ ComputationOfAmountPayablePerTaxRegime.netTaxPayableOverpaymentAllColumns + '</netTaxPayableOverpaymentAllColumns> \
												    	<penaltiesSurcharge>'+ ComputationOfAmountPayablePerTaxRegime.penaltiesSurcharge + '</penaltiesSurcharge> \
												    	<penaltiesInterest>'+ ComputationOfAmountPayablePerTaxRegime.penaltiesInterest + '</penaltiesInterest> \
												    	<penaltiesCompromise>'+ ComputationOfAmountPayablePerTaxRegime.penaltiesCompromise + '</penaltiesCompromise> \
												    	<penaltiesTotalPenalties>'+ ComputationOfAmountPayablePerTaxRegime.penaltiesTotalPenalties + '</penaltiesTotalPenalties> \
												    	<totalAmountPayableOverpayment>'+ ComputationOfAmountPayablePerTaxRegime.totalAmountPayableOverpayment + '</totalAmountPayableOverpayment> \
											    	</computationOfAmountPayablePerTaxRegime>';


    var externalAuditorAccreditedTaxAgent = '<externalAuditorAccreditedTaxAgent> \
										    	<nameOfExternalAuditor>'+ ExternalAudtiorAccreditedTaxAgent.nameOfExternalAuditor + '</nameOfExternalAuditor> \
										    	<externalAuditorTIN>'+ ExternalAudtiorAccreditedTaxAgent.externalAuditorTIN + '</externalAuditorTIN> \
										    	<nameOfSigningPartner>'+ ExternalAudtiorAccreditedTaxAgent.nameOfSigningPartner + '</nameOfSigningPartner> \
										    	<signingPartnerTIN>'+ ExternalAudtiorAccreditedTaxAgent.signingPartnerTIN + '</signingPartnerTIN> \
										    	<birAccreditationNumber>'+ ExternalAudtiorAccreditedTaxAgent.birAccreditationNumber + '</birAccreditationNumber> \
										    	<isssueDate>'+ ExternalAudtiorAccreditedTaxAgent.isssueDate + '</isssueDate> \
										    	<expiryDate>'+ ExternalAudtiorAccreditedTaxAgent.expiryDate + '</expiryDate> \
										    	<accreditedTaxAgentBranchCode>'+ ExternalAudtiorAccreditedTaxAgent.accreditedTaxAgentBranchCode + '</accreditedTaxAgentBranchCode> \
										    	<signingPartnerBranchCode>'+ ExternalAudtiorAccreditedTaxAgent.signingPartnerBranchCode + '</signingPartnerBranchCode> \
										    </externalAuditorAccreditedTaxAgent>';

    var computationOfTaxPerTaxRegime = '<computationOfTaxPerTaxRegime> \
									    	<netSalesRevenuesReceiptsFeesExempt>'+ ComputationOfTaxPerTaxRegime.netSalesRevenuesReceiptsFeesExempt + '</netSalesRevenuesReceiptsFeesExempt> \
									    	<netSalesRevenuesReceiptsFeesSpecial>'+ ComputationOfTaxPerTaxRegime.netSalesRevenuesReceiptsFeesSpecial + '</netSalesRevenuesReceiptsFeesSpecial> \
									    	<netSalesRevenuesReceiptsFeesRegular>'+ ComputationOfTaxPerTaxRegime.netSalesRevenuesReceiptsFeesRegular + '</netSalesRevenuesReceiptsFeesRegular> \
									    	<netSalesRevenuesReceiptsFeesAllColumns>'+ ComputationOfTaxPerTaxRegime.netSalesRevenuesReceiptsFeesAllColumns + '</netSalesRevenuesReceiptsFeesAllColumns> \
									    	<costOfSalesServiceslExempt>'+ ComputationOfTaxPerTaxRegime.costOfSalesServiceslExempt + '</costOfSalesServiceslExempt> \
									    	<costOfSalesServiceslSpecial>'+ ComputationOfTaxPerTaxRegime.costOfSalesServiceslSpecial + '</costOfSalesServiceslSpecial> \
									    	<costOfSalesServiceslRegular>'+ ComputationOfTaxPerTaxRegime.costOfSalesServiceslRegular + '</costOfSalesServiceslRegular> \
									    	<costOfSalesServiceslAllColumns>'+ ComputationOfTaxPerTaxRegime.costOfSalesServiceslAllColumns + '</costOfSalesServiceslAllColumns> \
									    	<grossIncomeFromOperationExempt>'+ ComputationOfTaxPerTaxRegime.grossIncomeFromOperationExempt + '</grossIncomeFromOperationExempt> \
									    	<grossIncomeFromOperationSpecial>'+ ComputationOfTaxPerTaxRegime.grossIncomeFromOperationSpecial + '</grossIncomeFromOperationSpecial> \
									    	<grossIncomeFromOperationRegular>'+ ComputationOfTaxPerTaxRegime.grossIncomeFromOperationRegular + '</grossIncomeFromOperationRegular> \
									    	<grossIncomeFromOperationAllColumns>'+ ComputationOfTaxPerTaxRegime.grossIncomeFromOperationAllColumns + '</grossIncomeFromOperationAllColumns> \
									    	<otherTaxableIncomeNotSubjectedExempt>'+ ComputationOfTaxPerTaxRegime.otherTaxableIncomeNotSubjectedExempt + '</otherTaxableIncomeNotSubjectedExempt> \
									    	<otherTaxableIncomeNotSubjectedSpecial>'+ ComputationOfTaxPerTaxRegime.otherTaxableIncomeNotSubjectedSpecial + '</otherTaxableIncomeNotSubjectedSpecial> \
									    	<otherTaxableIncomeNotSubjectedRegular>'+ ComputationOfTaxPerTaxRegime.otherTaxableIncomeNotSubjectedRegular + '</otherTaxableIncomeNotSubjectedRegular> \
									    	<otherTaxableIncomeNotSubjectedAllColumns>'+ ComputationOfTaxPerTaxRegime.otherTaxableIncomeNotSubjectedAllColumns + '</otherTaxableIncomeNotSubjectedAllColumns> \
									    	<totalGrossIncomeGrossTaxableIncomeExempt>'+ ComputationOfTaxPerTaxRegime.totalGrossIncomeGrossTaxableIncomeExempt + '</totalGrossIncomeGrossTaxableIncomeExempt> \
									    	<totalGrossIncomeGrossTaxableIncomeSpecial>'+ ComputationOfTaxPerTaxRegime.totalGrossIncomeGrossTaxableIncomeSpecial + '</totalGrossIncomeGrossTaxableIncomeSpecial> \
									    	<totalGrossIncomeGrossTaxableIncomeRegular>'+ ComputationOfTaxPerTaxRegime.totalGrossIncomeGrossTaxableIncomeRegular + '</totalGrossIncomeGrossTaxableIncomeRegular> \
									    	<totalGrossIncomeGrossTaxableIncomeAllColumns>'+ ComputationOfTaxPerTaxRegime.totalGrossIncomeGrossTaxableIncomeAllColumns + '</totalGrossIncomeGrossTaxableIncomeAllColumns> \
									    	<ordinaryAllowableIemizedDeducExempt>'+ ComputationOfTaxPerTaxRegime.ordinaryAllowableIemizedDeducExempt + '</ordinaryAllowableIemizedDeducExempt> \
									    	<ordinaryAllowableIemizedDeducSpecial>'+ ComputationOfTaxPerTaxRegime.ordinaryAllowableIemizedDeducSpecial + '</ordinaryAllowableIemizedDeducSpecial> \
									    	<ordinaryAllowableIemizedDeducRegular>'+ ComputationOfTaxPerTaxRegime.ordinaryAllowableIemizedDeducRegular + '</ordinaryAllowableIemizedDeducRegular> \
									    	<ordinaryAllowableIemizedDeducAllColumns>'+ ComputationOfTaxPerTaxRegime.ordinaryAllowableIemizedDeducAllColumns + '</ordinaryAllowableIemizedDeducAllColumns> \
									    	<specialAllowableItemizedDeducExempt>'+ ComputationOfTaxPerTaxRegime.specialAllowableItemizedDeducExempt + '</specialAllowableItemizedDeducExempt> \
									    	<specialAllowableItemizedDeducSpecial>'+ ComputationOfTaxPerTaxRegime.specialAllowableItemizedDeducSpecial + '</specialAllowableItemizedDeducSpecial> \
									    	<specialAllowableItemizedDeducRegular>'+ ComputationOfTaxPerTaxRegime.specialAllowableItemizedDeducRegular + '</specialAllowableItemizedDeducRegular> \
									    	<specialAllowableItemizedDeducAllColumns>'+ ComputationOfTaxPerTaxRegime.specialAllowableItemizedDeducAllColumns + '</specialAllowableItemizedDeducAllColumns> \
									    	<nolcoSpecial>'+ ComputationOfTaxPerTaxRegime.nolcoSpecial + '</nolcoSpecial> \
									    	<nolcoRegular>'+ ComputationOfTaxPerTaxRegime.nolcoRegular + '</nolcoRegular> \
									    	<nolcoAllColumns>'+ ComputationOfTaxPerTaxRegime.nolcoAllColumns + '</nolcoAllColumns> \
									    	<totalItemizedDeductionExempt>'+ ComputationOfTaxPerTaxRegime.totalItemizedDeductionExempt + '</totalItemizedDeductionExempt> \
									    	<totalItemizedDeductionSpecial>'+ ComputationOfTaxPerTaxRegime.totalItemizedDeductionSpecial + '</totalItemizedDeductionSpecial> \
									    	<totalItemizedDeductionRegular>'+ ComputationOfTaxPerTaxRegime.totalItemizedDeductionRegular + '</totalItemizedDeductionRegular> \
									    	<totalItemizedDeductionAllColumns>'+ ComputationOfTaxPerTaxRegime.totalItemizedDeductionAllColumns + '</totalItemizedDeductionAllColumns> \
									    	<netTaxableIncomeNetIncomeExempt>'+ ComputationOfTaxPerTaxRegime.netTaxableIncomeNetIncomeExempt + '</netTaxableIncomeNetIncomeExempt> \
									    	<netTaxableIncomeNetIncomeSpecial>'+ ComputationOfTaxPerTaxRegime.netTaxableIncomeNetIncomeSpecial + '</netTaxableIncomeNetIncomeSpecial> \
									    	<netTaxableIncomeNetIncomeRegular>'+ ComputationOfTaxPerTaxRegime.netTaxableIncomeNetIncomeRegular + '</netTaxableIncomeNetIncomeRegular> \
									    	<netTaxableIncomeNetIncomeAllColumns>'+ ComputationOfTaxPerTaxRegime.netTaxableIncomeNetIncomeAllColumns + '</netTaxableIncomeNetIncomeAllColumns> \
									    	<applicableIncomeTaxRateExempt>'+ ComputationOfTaxPerTaxRegime.applicableIncomeTaxRateExempt + '</applicableIncomeTaxRateExempt> \
									    	<applicableIncomeTaxRateSpecial>'+ ComputationOfTaxPerTaxRegime.applicableIncomeTaxRateSpecial + '</applicableIncomeTaxRateSpecial> \
									    	<applicableIncomeTaxRateRegular>'+ ComputationOfTaxPerTaxRegime.applicableIncomeTaxRateRegular + '</applicableIncomeTaxRateRegular> \
									    	<incomeTaxDueMCITExempt>'+ ComputationOfTaxPerTaxRegime.incomeTaxDueMCITExempt + '</incomeTaxDueMCITExempt> \
									    	<incomeTaxDueMCITSpecial>'+ ComputationOfTaxPerTaxRegime.incomeTaxDueMCITSpecial + '</incomeTaxDueMCITSpecial> \
									    	<incomeTaxDueMCITRegular>'+ ComputationOfTaxPerTaxRegime.incomeTaxDueMCITRegular + '</incomeTaxDueMCITRegular> \
									    	<incomeTaxDueMCITAllColumns>'+ ComputationOfTaxPerTaxRegime.incomeTaxDueMCITAllColumns + '</incomeTaxDueMCITAllColumns> \
									    	<shareOtherGovtAgenciesSpecial>'+ ComputationOfTaxPerTaxRegime.shareOtherGovtAgenciesSpecial + '</shareOtherGovtAgenciesSpecial> \
									    	<shareOtherGovtAgenciesRegular>'+ ComputationOfTaxPerTaxRegime.shareOtherGovtAgenciesRegular + '</shareOtherGovtAgenciesRegular> \
									    	<shareOtherGovtAgenciesAllColumns>'+ ComputationOfTaxPerTaxRegime.shareOtherGovtAgenciesAllColumns + '</shareOtherGovtAgenciesAllColumns> \
									    	<netIncomeTaxDueToNationalSpecial>'+ ComputationOfTaxPerTaxRegime.netIncomeTaxDueToNationalSpecial + '</netIncomeTaxDueToNationalSpecial> \
									    	<netIncomeTaxDueToNationalRegular>'+ ComputationOfTaxPerTaxRegime.netIncomeTaxDueToNationalRegular + '</netIncomeTaxDueToNationalRegular> \
									    	<netIncomeTaxDueToNationalAllColumns>'+ ComputationOfTaxPerTaxRegime.netIncomeTaxDueToNationalAllColumns + '</netIncomeTaxDueToNationalAllColumns> \
									    	<mcitGrossIncomeRegular>'+ ComputationOfTaxPerTaxRegime.mcitGrossIncomeRegular + '</mcitGrossIncomeRegular> \
									    	<mcitGrossIncomeAllColumns>'+ ComputationOfTaxPerTaxRegime.mcitGrossIncomeAllColumns + '</mcitGrossIncomeAllColumns> \
									    	<totalIncomeTaxDueSched1Special>'+ ComputationOfTaxPerTaxRegime.totalIncomeTaxDueSched1Special + '</totalIncomeTaxDueSched1Special> \
									    	<totalIncomeTaxDueSched1Regular>'+ ComputationOfTaxPerTaxRegime.totalIncomeTaxDueSched1Regular + '</totalIncomeTaxDueSched1Regular> \
									    	<totalIncomeTaxDueSched1AllColumns>'+ ComputationOfTaxPerTaxRegime.totalIncomeTaxDueSched1AllColumns + '</totalIncomeTaxDueSched1AllColumns> \
									    </computationOfTaxPerTaxRegime>';

    var taxReliefAvailment = '<taxReliefAvailment> \
							    	<regularIncomeTaxOtherwiseDueEx>'+ TaxReliefAvailment.regularIncomeTaxOtherwiseDueEx + '</regularIncomeTaxOtherwiseDueEx> \
							    	<regularIncomeTaxOtherwiseDueSp>'+ TaxReliefAvailment.regularIncomeTaxOtherwiseDueSp + '</regularIncomeTaxOtherwiseDueSp> \
							    	<regularIncomeTaxOtherwiseDueRe>'+ TaxReliefAvailment.regularIncomeTaxOtherwiseDueRe + '</regularIncomeTaxOtherwiseDueRe> \
							    	<regularIncomeTaxOtherwiseDueAll>'+ TaxReliefAvailment.regularIncomeTaxOtherwiseDueAll + '</regularIncomeTaxOtherwiseDueAll> \
							    	<specialAllowableItemizedDeducSched2Ex>'+ TaxReliefAvailment.specialAllowableItemizedDeducSched2Ex + '</specialAllowableItemizedDeducSched2Ex> \
							    	<specialAllowableItemizedDeducSched2Sp>'+ TaxReliefAvailment.specialAllowableItemizedDeducSched2Sp + '</specialAllowableItemizedDeducSched2Sp> \
							    	<specialAllowableItemizedDeducSched2Re>'+ TaxReliefAvailment.specialAllowableItemizedDeducSched2Re + '</specialAllowableItemizedDeducSched2Re> \
							    	<specialAllowableItemizedDeducSched2All>'+ TaxReliefAvailment.specialAllowableItemizedDeducSched2All + '</specialAllowableItemizedDeducSched2All> \
							    	<subTotalEx>'+ TaxReliefAvailment.subTotalEx + '</subTotalEx> \
							    	<subTotalSp>'+ TaxReliefAvailment.subTotalSp + '</subTotalSp> \
							    	<subTotalRe>'+ TaxReliefAvailment.subTotalRe + '</subTotalRe> \
							    	<subTotalAll>'+ TaxReliefAvailment.subTotalAll + '</subTotalAll> \
							    	<incomeTaxDueShed2Ex>'+ TaxReliefAvailment.incomeTaxDueShed2Ex + '</incomeTaxDueShed2Ex> \
							    	<incomeTaxDueShed2Sp>'+ TaxReliefAvailment.incomeTaxDueShed2Sp + '</incomeTaxDueShed2Sp> \
							    	<incomeTaxDueShed2Re>'+ TaxReliefAvailment.incomeTaxDueShed2Re + '</incomeTaxDueShed2Re> \
							    	<incomeTaxDueShed2All>'+ TaxReliefAvailment.incomeTaxDueShed2All + '</incomeTaxDueShed2All> \
							    	<TaxReliefAvailmentEx>'+ TaxReliefAvailment.taxReliefAvailmentEx + '</TaxReliefAvailmentEx> \
							    	<TaxReliefAvailmentSp>'+ TaxReliefAvailment.taxReliefAvailmentSp + '</TaxReliefAvailmentSp> \
							    	<TaxReliefAvailmentRe>'+ TaxReliefAvailment.taxReliefAvailmentRe + '</TaxReliefAvailmentRe> \
							    	<TaxReliefAvailmentAll>'+ TaxReliefAvailment.taxReliefAvailmentAll + '</TaxReliefAvailmentAll> \
							    	<specialTaxCreditsEx>'+ TaxReliefAvailment.specialTaxCreditsEx + '</specialTaxCreditsEx> \
							    	<specialTaxCreditsSp>'+ TaxReliefAvailment.specialTaxCreditsSp + '</specialTaxCreditsSp> \
							    	<specialTaxCreditsRe>'+ TaxReliefAvailment.specialTaxCreditsRe + '</specialTaxCreditsRe> \
							    	<specialTaxCreditsAll>'+ TaxReliefAvailment.specialTaxCreditsAll + '</specialTaxCreditsAll> \
							    	<totalTaxReliefAvailmentEx>'+ TaxReliefAvailment.totalTaxReliefAvailmentEx + '</totalTaxReliefAvailmentEx> \
							    	<totalTaxReliefAvailmentSp>'+ TaxReliefAvailment.totalTaxReliefAvailmentSp + '</totalTaxReliefAvailmentSp> \
							    	<totalTaxReliefAvailmentRe>'+ TaxReliefAvailment.totalTaxReliefAvailmentRe + '</totalTaxReliefAvailmentRe> \
							    	<totalTaxReliefAvailmentAll>'+ TaxReliefAvailment.totalTaxReliefAvailmentAll + '</totalTaxReliefAvailmentAll> \
							    </taxReliefAvailment>';

    var salesRevenueReceipts = '<salesRevenueReceipts> \
							    	<salesRevenueExempt> \
								    	<taxWthldGoods>'+ SalesRevenueExempt.taxWthldGoods + '</taxWthldGoods> \
								    	<taxWthldServices>'+ SalesRevenueExempt.taxWthldServices + '</taxWthldServices> \
								    	<taxWthldLease>'+ SalesRevenueExempt.taxWthldLease + '</taxWthldLease> \
								    	<taxWthldTotal>'+ SalesRevenueExempt.taxWthldTotal + '</taxWthldTotal> \
								    	<salesReturns>'+ SalesRevenueExempt.salesReturns + '</salesReturns> \
								    	<netSalesSched1>'+ SalesRevenueExempt.netSalesSched1 + '</netSalesSched1> \
							    	</salesRevenueExempt> \
							    	<salesRevenueSpecial> \
								    	<taxWthldGoods>'+ SalesRevenueSpecial.taxWthldGoods + '</taxWthldGoods> \
								    	<taxWthldServices>'+ SalesRevenueSpecial.taxWthldServices + '</taxWthldServices> \
								    	<taxWthldLease>'+ SalesRevenueSpecial.taxWthldLease + '</taxWthldLease> \
								    	<taxWthldTotal>'+ SalesRevenueSpecial.taxWthldTotal + '</taxWthldTotal> \
								    	<salesReturns>'+ SalesRevenueSpecial.salesReturns + '</salesReturns> \
								    	<netSalesSched1>'+ SalesRevenueSpecial.netSalesSched1 + '</netSalesSched1> \
							    	</salesRevenueSpecial> \
							    	<salesRevenueRegular> \
								    	<taxWthldGoods>'+ SalesRevenueRegular.taxWthldGoods + '</taxWthldGoods> \
								    	<taxWthldServices>'+ SalesRevenueRegular.taxWthldServices + '</taxWthldServices> \
								    	<taxWthldLease>'+ SalesRevenueRegular.taxWthldLease + '</taxWthldLease> \
								    	<taxWthldTotal>'+ SalesRevenueRegular.taxWthldTotal + '</taxWthldTotal> \
								    	<salesReturns>'+ SalesRevenueRegular.salesReturns + '</salesReturns> \
								    	<netSalesSched1>'+ SalesRevenueRegular.netSalesSched1 + '</netSalesSched1> \
							    	</salesRevenueRegular> \
							    	<salesRevenueTotal> \
								    	<taxWthldGoods>'+ SalesRevenueTotal.taxWthldGoods + '</taxWthldGoods> \
								    	<taxWthldServices>'+ SalesRevenueTotal.taxWthldServices + '</taxWthldServices> \
								    	<taxWthldLease>'+ SalesRevenueTotal.taxWthldLease + '</taxWthldLease> \
								    	<taxWthldTotal>'+ SalesRevenueTotal.taxWthldTotal + '</taxWthldTotal> \
								    	<salesReturns>'+ SalesRevenueTotal.salesReturns + '</salesReturns> \
								    	<netSalesSched1>'+ SalesRevenueTotal.netSalesSched1 + '</netSalesSched1> \
							    	</salesRevenueTotal> \
							    	</salesRevenueReceipts>';

    var costOfSales = '<costOfSales> \
					    	<costOfSalesExempt> \
						    	<goodsInvBeg>'+ CostOfSalesExempt.goodsInvBeg + '</goodsInvBeg> \
						    	<purGoods>'+ CostOfSalesExempt.purGoods + '</purGoods> \
						    	<goodsAvail>'+ CostOfSalesExempt.goodsAvail + '</goodsAvail> \
						    	<goodsInvEnd>'+ CostOfSalesExempt.goodsInvEnd + '</goodsInvEnd> \
						    	<costSales>'+ CostOfSalesExempt.costSales + '</costSales> \
						    	<directMatsBeg>'+ CostOfSalesExempt.directMatsBeg + '</directMatsBeg> \
						    	<purDirectMats>'+ CostOfSalesExempt.purDirectMats + '</purDirectMats> \
						    	<matsAvail>'+ CostOfSalesExempt.matsAvail + '</matsAvail> \
						    	<directMatsEnd>'+ CostOfSalesExempt.directMatsEnd + '</directMatsEnd> \
						    	<rawMats>'+ CostOfSalesExempt.rawMats + '</rawMats> \
						    	<directLabor>'+ CostOfSalesExempt.directLabor + '</directLabor> \
						    	<manufacturingOverhead>'+ CostOfSalesExempt.manufacturingOverhead + '</manufacturingOverhead> \
						    	<totalManufacturingCost>'+ CostOfSalesExempt.totalManufacturingCost + '</totalManufacturingCost> \
						    	<workInProgressBeg>'+ CostOfSalesExempt.workInProgressBeg + '</workInProgressBeg> \
						    	<winProgressEnd>'+ CostOfSalesExempt.winProgressEnd + '</winProgressEnd> \
						    	<costGoodsManufactured>'+ CostOfSalesExempt.costGoodsManufactured + '</costGoodsManufactured> \
						    	<finishedGoodsBeg>'+ CostOfSalesExempt.finishedGoodsBeg + '</finishedGoodsBeg> \
						    	<finishedGoodsEnd>'+ CostOfSalesExempt.finishedGoodsEnd + '</finishedGoodsEnd> \
						    	<totalCostGoodsManufacturedAndSold>'+ CostOfSalesExempt.totalCostGoodsManufacturedAndSold + '</totalCostGoodsManufacturedAndSold> \
						    	<salaries>'+ CostOfSalesExempt.salaries + '</salaries> \
						    	<materials>'+ CostOfSalesExempt.materials + '</materials> \
						    	<sched2CDepreciation>'+ CostOfSalesExempt.sched2CDepreciation + '</sched2CDepreciation> \
						    	<sched2CRental>'+ CostOfSalesExempt.sched2CRental + '</sched2CRental> \
						    	<outsideServ>'+ CostOfSalesExempt.outsideServ + '</outsideServ> \
						    	<others>'+ CostOfSalesExempt.others + '</others> \
						    	<costService>'+ CostOfSalesExempt.costService + '</costService> \
						    	<totalCostSalesAndServices>'+ CostOfSalesExempt.totalCostSalesAndServices + '</totalCostSalesAndServices> \
					    	</costOfSalesExempt> \
					    	<costOfSalesSpecial> \
						    	<goodsInvBeg>'+ CostOfSalesSpecial.goodsInvBeg + '</goodsInvBeg> \
						    	<purGoods>'+ CostOfSalesSpecial.purGoods + '</purGoods> \
						    	<goodsAvail>'+ CostOfSalesSpecial.goodsAvail + '</goodsAvail> \
						    	<goodsInvEnd>'+ CostOfSalesSpecial.goodsInvEnd + '</goodsInvEnd> \
						    	<costSales>'+ CostOfSalesSpecial.costSales + '</costSales> \
						    	<directMatsBeg>'+ CostOfSalesSpecial.directMatsBeg + '</directMatsBeg> \
						    	<purDirectMats>'+ CostOfSalesSpecial.purDirectMats + '</purDirectMats> \
						    	<matsAvail>'+ CostOfSalesSpecial.matsAvail + '</matsAvail> \
						    	<directMatsEnd>'+ CostOfSalesSpecial.directMatsEnd + '</directMatsEnd> \
						    	<rawMats>'+ CostOfSalesSpecial.rawMats + '</rawMats> \
						    	<directLabor>'+ CostOfSalesSpecial.directLabor + '</directLabor> \
						    	<manufacturingOverhead>'+ CostOfSalesSpecial.manufacturingOverhead + '</manufacturingOverhead> \
						    	<totalManufacturingCost>'+ CostOfSalesSpecial.totalManufacturingCost + '</totalManufacturingCost> \
						    	<workInProgressBeg>'+ CostOfSalesSpecial.workInProgressBeg + '</workInProgressBeg> \
						    	<winProgressEnd>'+ CostOfSalesSpecial.winProgressEnd + '</winProgressEnd> \
						    	<costGoodsManufactured>'+ CostOfSalesSpecial.costGoodsManufactured + '</costGoodsManufactured> \
						    	<finishedGoodsBeg>'+ CostOfSalesSpecial.finishedGoodsBeg + '</finishedGoodsBeg> \
						    	<finishedGoodsEnd>'+ CostOfSalesSpecial.finishedGoodsEnd + '</finishedGoodsEnd> \
						    	<totalCostGoodsManufacturedAndSold>'+ CostOfSalesSpecial.totalCostGoodsManufacturedAndSold + '</totalCostGoodsManufacturedAndSold> \
						    	<salaries>'+ CostOfSalesSpecial.salaries + '</salaries> \
						    	<materials>'+ CostOfSalesSpecial.materials + '</materials> \
						    	<sched2CDepreciation>'+ CostOfSalesSpecial.sched2CDepreciation + '</sched2CDepreciation> \
						    	<sched2CRental>'+ CostOfSalesSpecial.sched2CRental + '</sched2CRental> \
						    	<outsideServ>'+ CostOfSalesSpecial.outsideServ + '</outsideServ> \
						    	<others>'+ CostOfSalesSpecial.others + '</others> \
						    	<costService>'+ CostOfSalesSpecial.costService + '</costService> \
						    	<totalCostSalesAndServices>'+ CostOfSalesSpecial.totalCostSalesAndServices + '</totalCostSalesAndServices> \
					    	</costOfSalesSpecial> \
					    	<costOfSalesRegular> \
						    	<goodsInvBeg>'+ CostOfSalesRegular.goodsInvBeg + '</goodsInvBeg> \
						    	<purGoods>'+ CostOfSalesRegular.purGoods + '</purGoods> \
						    	<goodsAvail>'+ CostOfSalesRegular.goodsAvail + '</goodsAvail> \
						    	<goodsInvEnd>'+ CostOfSalesRegular.goodsInvEnd + '</goodsInvEnd> \
						    	<costSales>'+ CostOfSalesRegular.costSales + '</costSales> \
						    	<directMatsBeg>'+ CostOfSalesRegular.directMatsBeg + '</directMatsBeg> \
						    	<purDirectMats>'+ CostOfSalesRegular.purDirectMats + '</purDirectMats> \
						    	<matsAvail>'+ CostOfSalesRegular.matsAvail + '</matsAvail> \
						    	<directMatsEnd>'+ CostOfSalesRegular.directMatsEnd + '</directMatsEnd> \
						    	<rawMats>'+ CostOfSalesRegular.rawMats + '</rawMats> \
						    	<directLabor>'+ CostOfSalesRegular.directLabor + '</directLabor> \
						    	<manufacturingOverhead>'+ CostOfSalesRegular.manufacturingOverhead + '</manufacturingOverhead> \
						    	<totalManufacturingCost>'+ CostOfSalesRegular.totalManufacturingCost + '</totalManufacturingCost> \
						    	<workInProgressBeg>'+ CostOfSalesRegular.workInProgressBeg + '</workInProgressBeg> \
						    	<winProgressEnd>'+ CostOfSalesRegular.winProgressEnd + '</winProgressEnd> \
						    	<costGoodsManufactured>'+ CostOfSalesRegular.costGoodsManufactured + '</costGoodsManufactured> \
						    	<finishedGoodsBeg>'+ CostOfSalesRegular.finishedGoodsBeg + '</finishedGoodsBeg> \
						    	<finishedGoodsEnd>'+ CostOfSalesRegular.finishedGoodsEnd + '</finishedGoodsEnd> \
						    	<totalCostGoodsManufacturedAndSold>'+ CostOfSalesRegular.totalCostGoodsManufacturedAndSold + '</totalCostGoodsManufacturedAndSold> \
						    	<salaries>'+ CostOfSalesRegular.salaries + '</salaries> \
						    	<materials>'+ CostOfSalesRegular.materials + '</materials> \
						    	<sched2CDepreciation>'+ CostOfSalesRegular.sched2CDepreciation + '</sched2CDepreciation> \
						    	<sched2CRental>'+ CostOfSalesRegular.sched2CRental + '</sched2CRental> \
						    	<outsideServ>'+ CostOfSalesRegular.outsideServ + '</outsideServ> \
						    	<others>'+ CostOfSalesRegular.others + '</others> \
						    	<costService>'+ CostOfSalesRegular.costService + '</costService> \
						    	<totalCostSalesAndServices>'+ CostOfSalesRegular.totalCostSalesAndServices + '</totalCostSalesAndServices> \
					    	</costOfSalesRegular> \
					    	<costOfSalesTotal> \
						    	<goodsInvBeg>'+ CostOfSalesTotal.goodsInvBeg + '</goodsInvBeg> \
						    	<purGoods>'+ CostOfSalesTotal.purGoods + '</purGoods> \
						    	<goodsAvail>'+ CostOfSalesTotal.goodsAvail + '</goodsAvail> \
						    	<goodsInvEnd>'+ CostOfSalesTotal.goodsInvEnd + '</goodsInvEnd> \
						    	<costSales>'+ CostOfSalesTotal.costSales + '</costSales> \
						    	<directMatsBeg>'+ CostOfSalesTotal.directMatsBeg + '</directMatsBeg> \
						    	<purDirectMats>'+ CostOfSalesTotal.purDirectMats + '</purDirectMats> \
						    	<matsAvail>'+ CostOfSalesTotal.matsAvail + '</matsAvail> \
						    	<directMatsEnd>'+ CostOfSalesTotal.directMatsEnd + '</directMatsEnd> \
						    	<rawMats>'+ CostOfSalesTotal.rawMats + '</rawMats> \
						    	<directLabor>'+ CostOfSalesTotal.directLabor + '</directLabor> \
						    	<manufacturingOverhead>'+ CostOfSalesTotal.manufacturingOverhead + '</manufacturingOverhead> \
						    	<totalManufacturingCost>'+ CostOfSalesTotal.totalManufacturingCost + '</totalManufacturingCost> \
						    	<workInProgressBeg>'+ CostOfSalesTotal.workInProgressBeg + '</workInProgressBeg> \
						    	<winProgressEnd>'+ CostOfSalesTotal.winProgressEnd + '</winProgressEnd> \
						    	<costGoodsManufactured>'+ CostOfSalesTotal.costGoodsManufactured + '</costGoodsManufactured> \
						    	<finishedGoodsBeg>'+ CostOfSalesTotal.finishedGoodsBeg + '</finishedGoodsBeg> \
						    	<finishedGoodsEnd>'+ CostOfSalesTotal.finishedGoodsEnd + '</finishedGoodsEnd> \
						    	<totalCostGoodsManufacturedAndSold>'+ CostOfSalesTotal.totalCostGoodsManufacturedAndSold + '</totalCostGoodsManufacturedAndSold> \
						    	<salaries>'+ CostOfSalesTotal.salaries + '</salaries> \
						    	<materials>'+ CostOfSalesTotal.materials + '</materials> \
						    	<sched2CDepreciation>'+ CostOfSalesTotal.sched2CDepreciation + '</sched2CDepreciation> \
						    	<sched2CRental>'+ CostOfSalesTotal.sched2CRental + '</sched2CRental> \
						    	<outsideServ>'+ CostOfSalesTotal.outsideServ + '</outsideServ> \
						    	<others>'+ CostOfSalesTotal.others + '</others> \
						    	<costService>'+ CostOfSalesTotal.costService + '</costService> \
						    	<totalCostSalesAndServices>'+ CostOfSalesTotal.totalCostSalesAndServices + '</totalCostSalesAndServices> \
					    	</costOfSalesTotal> \
					    	</costOfSales>';

    var otherTaxableIncomeNotSubjectedToFinalTax = '<otherTaxableIncomeNotSubjectedToFinalTax> \
												    	<otherTaxableIncomeNotSubjectedToFinalTaxExempt> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxDescFirst>'+ OtherTaxableIncomeNotSubjectedToFinalTaxExempt.otherTaxableIncomeNotSubjectToFinalTaxDescFirst + '</otherTaxableIncomeNotSubjectToFinalTaxDescFirst> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxDescSecond>'+ OtherTaxableIncomeNotSubjectedToFinalTaxExempt.otherTaxableIncomeNotSubjectToFinalTaxDescSecond + '</otherTaxableIncomeNotSubjectToFinalTaxDescSecond> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxDescThird>'+ OtherTaxableIncomeNotSubjectedToFinalTaxExempt.otherTaxableIncomeNotSubjectToFinalTaxDescThird + '</otherTaxableIncomeNotSubjectToFinalTaxDescThird> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueFirst>'+ OtherTaxableIncomeNotSubjectedToFinalTaxExempt.otherTaxableIncomeNotSubjectToFinalTaxValueFirst + '</otherTaxableIncomeNotSubjectToFinalTaxValueFirst> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueSecond>'+ OtherTaxableIncomeNotSubjectedToFinalTaxExempt.otherTaxableIncomeNotSubjectToFinalTaxValueSecond + '</otherTaxableIncomeNotSubjectToFinalTaxValueSecond> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueThird>'+ OtherTaxableIncomeNotSubjectedToFinalTaxExempt.otherTaxableIncomeNotSubjectToFinalTaxValueThird + '</otherTaxableIncomeNotSubjectToFinalTaxValueThird> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueTotal>'+ OtherTaxableIncomeNotSubjectedToFinalTaxExempt.otherTaxableIncomeNotSubjectToFinalTaxValueTotal + '</otherTaxableIncomeNotSubjectToFinalTaxValueTotal> \
												    	</otherTaxableIncomeNotSubjectedToFinalTaxExempt> \
												    	<otherTaxableIncomeNotSubjectedToFinalTaxSpecial> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueFirst>'+ OtherTaxableIncomeNotSubjectedToFinalTaxSpecial.otherTaxableIncomeNotSubjectToFinalTaxValueFirst + '</otherTaxableIncomeNotSubjectToFinalTaxValueFirst> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueSecond>'+ OtherTaxableIncomeNotSubjectedToFinalTaxSpecial.otherTaxableIncomeNotSubjectToFinalTaxValueSecond + '</otherTaxableIncomeNotSubjectToFinalTaxValueSecond> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueThird>'+ OtherTaxableIncomeNotSubjectedToFinalTaxSpecial.otherTaxableIncomeNotSubjectToFinalTaxValueThird + '</otherTaxableIncomeNotSubjectToFinalTaxValueThird> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueTotal>'+ OtherTaxableIncomeNotSubjectedToFinalTaxSpecial.otherTaxableIncomeNotSubjectToFinalTaxValueTotal + '</otherTaxableIncomeNotSubjectToFinalTaxValueTotal> \
												    	</otherTaxableIncomeNotSubjectedToFinalTaxSpecial> \
												    	<otherTaxableIncomeNotSubjectedToFinalTaxRegular> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueFirst>'+ OtherTaxableIncomeNotSubjectedToFinalTaxRegular.otherTaxableIncomeNotSubjectToFinalTaxValueFirst + '</otherTaxableIncomeNotSubjectToFinalTaxValueFirst> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueSecond>'+ OtherTaxableIncomeNotSubjectedToFinalTaxRegular.otherTaxableIncomeNotSubjectToFinalTaxValueSecond + '</otherTaxableIncomeNotSubjectToFinalTaxValueSecond> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueThird>'+ OtherTaxableIncomeNotSubjectedToFinalTaxRegular.otherTaxableIncomeNotSubjectToFinalTaxValueThird + '</otherTaxableIncomeNotSubjectToFinalTaxValueThird> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueTotal>'+ OtherTaxableIncomeNotSubjectedToFinalTaxRegular.otherTaxableIncomeNotSubjectToFinalTaxValueTotal + '</otherTaxableIncomeNotSubjectToFinalTaxValueTotal> \
												    	</otherTaxableIncomeNotSubjectedToFinalTaxRegular> \
												    	<otherTaxableIncomeNotSubjectedToFinalTaxTotal> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueFirst>'+ OtherTaxableIncomeNotSubjectedToFinalTaxTotal.otherTaxableIncomeNotSubjectToFinalTaxValueFirst + '</otherTaxableIncomeNotSubjectToFinalTaxValueFirst> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueSecond>'+ OtherTaxableIncomeNotSubjectedToFinalTaxTotal.otherTaxableIncomeNotSubjectToFinalTaxValueSecond + '</otherTaxableIncomeNotSubjectToFinalTaxValueSecond> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueThird>'+ OtherTaxableIncomeNotSubjectedToFinalTaxTotal.otherTaxableIncomeNotSubjectToFinalTaxValueThird + '</otherTaxableIncomeNotSubjectToFinalTaxValueThird> \
													    	<otherTaxableIncomeNotSubjectToFinalTaxValueTotal>'+ OtherTaxableIncomeNotSubjectedToFinalTaxTotal.otherTaxableIncomeNotSubjectToFinalTaxValueTotal + '</otherTaxableIncomeNotSubjectToFinalTaxValueTotal> \
												    	</otherTaxableIncomeNotSubjectedToFinalTaxTotal> \
											    	</otherTaxableIncomeNotSubjectedToFinalTax>';


    var otherTaxableIncomeNotSubjectToFinalTaxListHolder = [];
    for (var key in OtherTaxableIncomeNotSubjectToFinalTaxValue) {
        var obj = '<otherTaxableIncomeNotSubjectToFinalTaxValue>' +
                     '<otherExpandableDesc>' + OtherTaxableIncomeNotSubjectToFinalTaxValue[key].otherExpandableDesc + '</otherExpandableDesc>' +
                      '<otherExpandableAmount>' + OtherTaxableIncomeNotSubjectToFinalTaxValue[key].otherExpandableAmount + '</otherExpandableAmount>' +
                      '<otherExpandableAmountSpecial>' + OtherTaxableIncomeNotSubjectToFinalTaxValue[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>' +
                      '<otherExpandableAmountRegular>' + OtherTaxableIncomeNotSubjectToFinalTaxValue[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>' +
                      '<otherExpandableAmountTotal>' + OtherTaxableIncomeNotSubjectToFinalTaxValue[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>' +
                     '</otherTaxableIncomeNotSubjectToFinalTaxValue>';
        otherTaxableIncomeNotSubjectToFinalTaxListHolder.push(obj);
    }
    var otherTaxableIncomeNotSubjectToFinalTaxList = '';
    for (var key in otherTaxableIncomeNotSubjectToFinalTaxListHolder) {
        otherTaxableIncomeNotSubjectToFinalTaxList += otherTaxableIncomeNotSubjectToFinalTaxListHolder[key];
    }



    var ordinaryAllowableItemizedDeductions = '<exemptOrdinaryAllowableItemizedDeductions> \
											    	<adAndPromotionsVal>'+ ExemptOrdinaryAllowableItemizedDeductions.adAndPromotionsVal + '</adAndPromotionsVal> \
											    	<amortizatiosDescSecond>'+ ExemptOrdinaryAllowableItemizedDeductions.amortizatiosDescSecond + '</amortizatiosDescSecond> \
											    	<amortizatiosDescThird>'+ ExemptOrdinaryAllowableItemizedDeductions.amortizatiosDescThird + '</amortizatiosDescThird> \
											    	<amortizatiosDescFourth>'+ ExemptOrdinaryAllowableItemizedDeductions.amortizatiosDescFourth + '</amortizatiosDescFourth> \
											    	<amortizatiosValSecond>'+ ExemptOrdinaryAllowableItemizedDeductions.amortizatiosValSecond + '</amortizatiosValSecond> \
											    	<amortizatiosValThird>'+ ExemptOrdinaryAllowableItemizedDeductions.amortizatiosValThird + '</amortizatiosValThird> \
											    	<amortizatiosValFourth>'+ ExemptOrdinaryAllowableItemizedDeductions.amortizatiosValFourth + '</amortizatiosValFourth> \
											    	<badDebts>'+ ExemptOrdinaryAllowableItemizedDeductions.badDebts + '</badDebts> \
											    	<charitableContributions>'+ ExemptOrdinaryAllowableItemizedDeductions.charitableContributions + '</charitableContributions> \
											    	<commissions>'+ ExemptOrdinaryAllowableItemizedDeductions.commissions + '</commissions> \
											    	<communicationLightWater>'+ ExemptOrdinaryAllowableItemizedDeductions.communicationLightWater + '</communicationLightWater> \
											    	<utilities>'+ ExemptOrdinaryAllowableItemizedDeductions.utilities + '</utilities> \
											    	<depletion>'+ ExemptOrdinaryAllowableItemizedDeductions.depletion + '</depletion> \
											    	<depreciation>'+ ExemptOrdinaryAllowableItemizedDeductions.depreciation + '</depreciation> \
											    	<directorFee>'+ ExemptOrdinaryAllowableItemizedDeductions.directorFee + '</directorFee> \
											    	<fringeBenefits>'+ ExemptOrdinaryAllowableItemizedDeductions.fringeBenefits + '</fringeBenefits> \
											    	<fuelAndOil>'+ ExemptOrdinaryAllowableItemizedDeductions.fuelAndOil + '</fuelAndOil> \
											    	<insurance>'+ ExemptOrdinaryAllowableItemizedDeductions.insurance + '</insurance> \
											    	<iterest>'+ ExemptOrdinaryAllowableItemizedDeductions.iterest + '</iterest> \
											    	<janitorialAndMessengerial>'+ ExemptOrdinaryAllowableItemizedDeductions.janitorialAndMessengerial + '</janitorialAndMessengerial> \
											    	<losses>'+ ExemptOrdinaryAllowableItemizedDeductions.losses + '</losses> \
											    	<mgmtAndConsultancyFee>'+ ExemptOrdinaryAllowableItemizedDeductions.mgmtAndConsultancyFee + '</mgmtAndConsultancyFee> \
											    	<misc>'+ ExemptOrdinaryAllowableItemizedDeductions.misc + '</misc> \
											    	<officeSupplies>'+ ExemptOrdinaryAllowableItemizedDeductions.officeSupplies + '</officeSupplies> \
											    	<otherServices>'+ ExemptOrdinaryAllowableItemizedDeductions.otherServices + '</otherServices> \
											    	<professionalFees>'+ ExemptOrdinaryAllowableItemizedDeductions.professionalFees + '</professionalFees> \
											    	<schedGRental>'+ ExemptOrdinaryAllowableItemizedDeductions.schedGRental + '</schedGRental> \
											    	<repairLabor>'+ ExemptOrdinaryAllowableItemizedDeductions.repairLabor + '</repairLabor> \
											    	<repairMaterials>'+ ExemptOrdinaryAllowableItemizedDeductions.repairMaterials + '</repairMaterials> \
											    	<entertainment>'+ ExemptOrdinaryAllowableItemizedDeductions.entertainment + '</entertainment> \
											    	<researchAndDev>'+ ExemptOrdinaryAllowableItemizedDeductions.researchAndDev + '</researchAndDev> \
											    	<royalties>'+ ExemptOrdinaryAllowableItemizedDeductions.royalties + '</royalties> \
											    	<salariesAndAllownces>'+ ExemptOrdinaryAllowableItemizedDeductions.salariesAndAllownces + '</salariesAndAllownces> \
											    	<securityServices>'+ ExemptOrdinaryAllowableItemizedDeductions.securityServices + '</securityServices> \
											    	<otherContributions>'+ ExemptOrdinaryAllowableItemizedDeductions.otherContributions + '</otherContributions> \
											    	<taxesAndLiscenses>'+ ExemptOrdinaryAllowableItemizedDeductions.taxesAndLiscenses + '</taxesAndLiscenses> \
											    	<tollingFees>'+ ExemptOrdinaryAllowableItemizedDeductions.tollingFees + '</tollingFees> \
											    	<trainingsAndSeminars>'+ ExemptOrdinaryAllowableItemizedDeductions.trainingsAndSeminars + '</trainingsAndSeminars> \
											    	<travelTransportaion>'+ ExemptOrdinaryAllowableItemizedDeductions.travelTransportaion + '</travelTransportaion> \
											    	<othersFirstDescFirst>'+ ExemptOrdinaryAllowableItemizedDeductions.othersFirstDescFirst + '</othersFirstDescFirst> \
											    	<othersFirstDescSecond>'+ ExemptOrdinaryAllowableItemizedDeductions.othersFirstDescSecond + '</othersFirstDescSecond> \
											    	<othersFirstDescThird>'+ ExemptOrdinaryAllowableItemizedDeductions.othersFirstDescThird + '</othersFirstDescThird> \
											    	<othersFirstDescfourth>'+ ExemptOrdinaryAllowableItemizedDeductions.othersFirstDescfourth + '</othersFirstDescfourth> \
											    	<otherFirstValue>'+ ExemptOrdinaryAllowableItemizedDeductions.otherFirstValue + '</otherFirstValue> \
											    	<otherSecondValue>'+ ExemptOrdinaryAllowableItemizedDeductions.otherSecondValue + '</otherSecondValue> \
											    	<otherThirdValue>'+ ExemptOrdinaryAllowableItemizedDeductions.otherThirdValue + '</otherThirdValue> \
											    	<otherFourthValue>'+ ExemptOrdinaryAllowableItemizedDeductions.otherFourthValue + '</otherFourthValue> \
											    	<totalOrdinaryAllowableItemizedDeductions>'+ ExemptOrdinaryAllowableItemizedDeductions.totalOrdinaryAllowableItemizedDeductions + '</totalOrdinaryAllowableItemizedDeductions> \
										    	</exemptOrdinaryAllowableItemizedDeductions> \
										    	<specialOrdinaryAllowableItemizedDeductions> \
											    	<adAndPromotionsVal>'+ SpecialOrdinaryAllowableItemizedDeductions.adAndPromotionsVal + '</adAndPromotionsVal> \
											    	<amortizatiosValSecond>'+ SpecialOrdinaryAllowableItemizedDeductions.amortizatiosValSecond + '</amortizatiosValSecond> \
											    	<amortizatiosValThird>'+ SpecialOrdinaryAllowableItemizedDeductions.amortizatiosValThird + '</amortizatiosValThird> \
											    	<amortizatiosValFourth>'+ SpecialOrdinaryAllowableItemizedDeductions.amortizatiosValFourth + '</amortizatiosValFourth> \
											    	<badDebts>'+ SpecialOrdinaryAllowableItemizedDeductions.badDebts + '</badDebts> \
											    	<charitableContributions>'+ SpecialOrdinaryAllowableItemizedDeductions.charitableContributions + '</charitableContributions> \
											    	<commissions>'+ SpecialOrdinaryAllowableItemizedDeductions.commissions + '</commissions> \
											    	<communicationLightWater>'+ SpecialOrdinaryAllowableItemizedDeductions.communicationLightWater + '</communicationLightWater> \
											    	<utilities>'+ SpecialOrdinaryAllowableItemizedDeductions.utilities + '</utilities> \
											    	<depletion>'+ SpecialOrdinaryAllowableItemizedDeductions.depletion + '</depletion> \
											    	<depreciation>'+ SpecialOrdinaryAllowableItemizedDeductions.depreciation + '</depreciation> \
											    	<directorFee>'+ SpecialOrdinaryAllowableItemizedDeductions.directorFee + '</directorFee> \
											    	<fringeBenefits>'+ SpecialOrdinaryAllowableItemizedDeductions.fringeBenefits + '</fringeBenefits> \
											    	<fuelAndOil>'+ SpecialOrdinaryAllowableItemizedDeductions.fuelAndOil + '</fuelAndOil> \
											    	<insurance>'+ SpecialOrdinaryAllowableItemizedDeductions.insurance + '</insurance> \
											    	<iterest>'+ SpecialOrdinaryAllowableItemizedDeductions.iterest + '</iterest> \
											    	<janitorialAndMessengerial>'+ SpecialOrdinaryAllowableItemizedDeductions.janitorialAndMessengerial + '</janitorialAndMessengerial> \
											    	<losses>'+ SpecialOrdinaryAllowableItemizedDeductions.losses + '</losses> \
											    	<mgmtAndConsultancyFee>'+ SpecialOrdinaryAllowableItemizedDeductions.mgmtAndConsultancyFee + '</mgmtAndConsultancyFee> \
											    	<misc>'+ SpecialOrdinaryAllowableItemizedDeductions.misc + '</misc> \
											    	<officeSupplies>'+ SpecialOrdinaryAllowableItemizedDeductions.officeSupplies + '</officeSupplies> \
											    	<otherServices>'+ SpecialOrdinaryAllowableItemizedDeductions.otherServices + '</otherServices> \
											    	<professionalFees>'+ SpecialOrdinaryAllowableItemizedDeductions.professionalFees + '</professionalFees> \
											    	<schedGRental>'+ SpecialOrdinaryAllowableItemizedDeductions.schedGRental + '</schedGRental> \
											    	<repairLabor>'+ SpecialOrdinaryAllowableItemizedDeductions.repairLabor + '</repairLabor> \
											    	<repairMaterials>'+ SpecialOrdinaryAllowableItemizedDeductions.repairMaterials + '</repairMaterials> \
											    	<entertainment>'+ SpecialOrdinaryAllowableItemizedDeductions.entertainment + '</entertainment> \
											    	<researchAndDev>'+ SpecialOrdinaryAllowableItemizedDeductions.researchAndDev + '</researchAndDev> \
											    	<royalties>'+ SpecialOrdinaryAllowableItemizedDeductions.royalties + '</royalties> \
											    	<salariesAndAllownces>'+ SpecialOrdinaryAllowableItemizedDeductions.salariesAndAllownces + '</salariesAndAllownces> \
											    	<securityServices>'+ SpecialOrdinaryAllowableItemizedDeductions.securityServices + '</securityServices> \
											    	<otherContributions>'+ SpecialOrdinaryAllowableItemizedDeductions.otherContributions + '</otherContributions> \
											    	<taxesAndLiscenses>'+ SpecialOrdinaryAllowableItemizedDeductions.taxesAndLiscenses + '</taxesAndLiscenses> \
											    	<tollingFees>'+ SpecialOrdinaryAllowableItemizedDeductions.tollingFees + '</tollingFees> \
											    	<trainingsAndSeminars>'+ SpecialOrdinaryAllowableItemizedDeductions.trainingsAndSeminars + '</trainingsAndSeminars> \
											    	<travelTransportaion>'+ SpecialOrdinaryAllowableItemizedDeductions.travelTransportaion + '</travelTransportaion> \
											    	<otherFirstValue>'+ SpecialOrdinaryAllowableItemizedDeductions.otherFirstValue + '</otherFirstValue> \
											    	<otherSecondValue>'+ SpecialOrdinaryAllowableItemizedDeductions.otherSecondValue + '</otherSecondValue> \
											    	<otherThirdValue>'+ SpecialOrdinaryAllowableItemizedDeductions.otherThirdValue + '</otherThirdValue> \
											    	<otherFourthValue>'+ SpecialOrdinaryAllowableItemizedDeductions.otherFourthValue + '</otherFourthValue> \
											    	<totalOrdinaryAllowableItemizedDeductions>'+ SpecialOrdinaryAllowableItemizedDeductions.totalOrdinaryAllowableItemizedDeductions + '</totalOrdinaryAllowableItemizedDeductions> \
										    	</specialOrdinaryAllowableItemizedDeductions> \
										    	<regularOrdinaryAllowableItemizedDeductions> \
											    	<adAndPromotionsVal>'+ RegularOrdinaryAllowableItemizedDeductions.adAndPromotionsVal + '</adAndPromotionsVal> \
											    	<amortizatiosValSecond>'+ RegularOrdinaryAllowableItemizedDeductions.amortizatiosValSecond + '</amortizatiosValSecond> \
											    	<amortizatiosValThird>'+ RegularOrdinaryAllowableItemizedDeductions.amortizatiosValThird + '</amortizatiosValThird> \
											    	<amortizatiosValFourth>'+ RegularOrdinaryAllowableItemizedDeductions.amortizatiosValFourth + '</amortizatiosValFourth> \
											    	<badDebts>'+ RegularOrdinaryAllowableItemizedDeductions.badDebts + '</badDebts> \
											    	<charitableContributions>'+ RegularOrdinaryAllowableItemizedDeductions.charitableContributions + '</charitableContributions> \
											    	<commissions>'+ RegularOrdinaryAllowableItemizedDeductions.commissions + '</commissions> \
											    	<communicationLightWater>'+ RegularOrdinaryAllowableItemizedDeductions.communicationLightWater + '</communicationLightWater> \
											    	<utilities>'+ RegularOrdinaryAllowableItemizedDeductions.utilities + '</utilities> \
											    	<depletion>'+ RegularOrdinaryAllowableItemizedDeductions.depletion + '</depletion> \
											    	<depreciation>'+ RegularOrdinaryAllowableItemizedDeductions.depreciation + '</depreciation> \
											    	<directorFee>'+ RegularOrdinaryAllowableItemizedDeductions.directorFee + '</directorFee> \
											    	<fringeBenefits>'+ RegularOrdinaryAllowableItemizedDeductions.fringeBenefits + '</fringeBenefits> \
											    	<fuelAndOil>'+ RegularOrdinaryAllowableItemizedDeductions.fuelAndOil + '</fuelAndOil> \
											    	<insurance>'+ RegularOrdinaryAllowableItemizedDeductions.insurance + '</insurance> \
											    	<iterest>'+ RegularOrdinaryAllowableItemizedDeductions.iterest + '</iterest> \
											    	<janitorialAndMessengerial>'+ RegularOrdinaryAllowableItemizedDeductions.janitorialAndMessengerial + '</janitorialAndMessengerial> \
											    	<losses>'+ RegularOrdinaryAllowableItemizedDeductions.losses + '</losses> \
											    	<mgmtAndConsultancyFee>'+ RegularOrdinaryAllowableItemizedDeductions.mgmtAndConsultancyFee + '</mgmtAndConsultancyFee> \
											    	<misc>'+ RegularOrdinaryAllowableItemizedDeductions.misc + '</misc> \
											    	<officeSupplies>'+ RegularOrdinaryAllowableItemizedDeductions.officeSupplies + '</officeSupplies> \
											    	<otherServices>'+ RegularOrdinaryAllowableItemizedDeductions.otherServices + '</otherServices> \
											    	<professionalFees>'+ RegularOrdinaryAllowableItemizedDeductions.professionalFees + '</professionalFees> \
											    	<schedGRental>'+ RegularOrdinaryAllowableItemizedDeductions.schedGRental + '</schedGRental> \
											    	<repairLabor>'+ RegularOrdinaryAllowableItemizedDeductions.repairLabor + '</repairLabor> \
											    	<repairMaterials>'+ RegularOrdinaryAllowableItemizedDeductions.repairMaterials + '</repairMaterials> \
											    	<entertainment>'+ RegularOrdinaryAllowableItemizedDeductions.entertainment + '</entertainment> \
											    	<researchAndDev>'+ RegularOrdinaryAllowableItemizedDeductions.researchAndDev + '</researchAndDev> \
											    	<royalties>'+ RegularOrdinaryAllowableItemizedDeductions.royalties + '</royalties> \
											    	<salariesAndAllownces>'+ RegularOrdinaryAllowableItemizedDeductions.salariesAndAllownces + '</salariesAndAllownces> \
											    	<securityServices>'+ RegularOrdinaryAllowableItemizedDeductions.securityServices + '</securityServices> \
											    	<otherContributions>'+ RegularOrdinaryAllowableItemizedDeductions.otherContributions + '</otherContributions> \
											    	<taxesAndLiscenses>'+ RegularOrdinaryAllowableItemizedDeductions.taxesAndLiscenses + '</taxesAndLiscenses> \
											    	<tollingFees>'+ RegularOrdinaryAllowableItemizedDeductions.tollingFees + '</tollingFees> \
											    	<trainingsAndSeminars>'+ RegularOrdinaryAllowableItemizedDeductions.trainingsAndSeminars + '</trainingsAndSeminars> \
											    	<travelTransportaion>'+ RegularOrdinaryAllowableItemizedDeductions.travelTransportaion + '</travelTransportaion> \
											    	<otherFirstValue>'+ RegularOrdinaryAllowableItemizedDeductions.otherFirstValue + '</otherFirstValue> \
											    	<otherSecondValue>'+ RegularOrdinaryAllowableItemizedDeductions.otherSecondValue + '</otherSecondValue> \
											    	<otherThirdValue>'+ RegularOrdinaryAllowableItemizedDeductions.otherThirdValue + '</otherThirdValue> \
											    	<otherFourthValue>'+ RegularOrdinaryAllowableItemizedDeductions.otherFourthValue + '</otherFourthValue> \
											    	<totalOrdinaryAllowableItemizedDeductions>'+ RegularOrdinaryAllowableItemizedDeductions.totalOrdinaryAllowableItemizedDeductions + '</totalOrdinaryAllowableItemizedDeductions> \
										    	</regularOrdinaryAllowableItemizedDeductions> \
										    	<totalOrdinaryAllowableItemizedDeductions> \
											    	<adAndPromotionsVal>'+ TotalOrdinaryAllowableItemizedDeductions.adAndPromotionsVal + '</adAndPromotionsVal> \
											    	<amortizatiosValSecond>'+ TotalOrdinaryAllowableItemizedDeductions.amortizatiosValSecond + '</amortizatiosValSecond> \
											    	<amortizatiosValThird>'+ TotalOrdinaryAllowableItemizedDeductions.amortizatiosValThird + '</amortizatiosValThird> \
											    	<amortizatiosValFourth>'+ TotalOrdinaryAllowableItemizedDeductions.amortizatiosValFourth + '</amortizatiosValFourth> \
											    	<badDebts>'+ TotalOrdinaryAllowableItemizedDeductions.badDebts + '</badDebts> \
											    	<charitableContributions>'+ TotalOrdinaryAllowableItemizedDeductions.charitableContributions + '</charitableContributions> \
											    	<commissions>'+ TotalOrdinaryAllowableItemizedDeductions.commissions + '</commissions> \
											    	<communicationLightWater>'+ TotalOrdinaryAllowableItemizedDeductions.communicationLightWater + '</communicationLightWater> \
											    	<utilities>'+ TotalOrdinaryAllowableItemizedDeductions.utilities + '</utilities> \
											    	<depletion>'+ TotalOrdinaryAllowableItemizedDeductions.depletion + '</depletion> \
											    	<depreciation>'+ TotalOrdinaryAllowableItemizedDeductions.depreciation + '</depreciation> \
											    	<directorFee>'+ TotalOrdinaryAllowableItemizedDeductions.directorFee + '</directorFee> \
											    	<fringeBenefits>'+ TotalOrdinaryAllowableItemizedDeductions.fringeBenefits + '</fringeBenefits> \
											    	<fuelAndOil>'+ TotalOrdinaryAllowableItemizedDeductions.fuelAndOil + '</fuelAndOil> \
											    	<insurance>'+ TotalOrdinaryAllowableItemizedDeductions.insurance + '</insurance> \
											    	<iterest>'+ TotalOrdinaryAllowableItemizedDeductions.iterest + '</iterest> \
											    	<janitorialAndMessengerial>'+ TotalOrdinaryAllowableItemizedDeductions.janitorialAndMessengerial + '</janitorialAndMessengerial> \
											    	<losses>'+ TotalOrdinaryAllowableItemizedDeductions.losses + '</losses> \
											    	<mgmtAndConsultancyFee>'+ TotalOrdinaryAllowableItemizedDeductions.mgmtAndConsultancyFee + '</mgmtAndConsultancyFee> \
											    	<misc>'+ TotalOrdinaryAllowableItemizedDeductions.misc + '</misc> \
											    	<officeSupplies>'+ TotalOrdinaryAllowableItemizedDeductions.officeSupplies + '</officeSupplies> \
											    	<otherServices>'+ TotalOrdinaryAllowableItemizedDeductions.otherServices + '</otherServices> \
											    	<professionalFees>'+ TotalOrdinaryAllowableItemizedDeductions.professionalFees + '</professionalFees> \
											    	<schedGRental>'+ TotalOrdinaryAllowableItemizedDeductions.schedGRental + '</schedGRental> \
											    	<repairLabor>'+ TotalOrdinaryAllowableItemizedDeductions.repairLabor + '</repairLabor> \
											    	<repairMaterials>'+ TotalOrdinaryAllowableItemizedDeductions.repairMaterials + '</repairMaterials> \
											    	<entertainment>'+ TotalOrdinaryAllowableItemizedDeductions.entertainment + '</entertainment> \
											    	<researchAndDev>'+ TotalOrdinaryAllowableItemizedDeductions.researchAndDev + '</researchAndDev> \
											    	<royalties>'+ TotalOrdinaryAllowableItemizedDeductions.royalties + '</royalties> \
											    	<salariesAndAllownces>'+ TotalOrdinaryAllowableItemizedDeductions.salariesAndAllownces + '</salariesAndAllownces> \
											    	<securityServices>'+ TotalOrdinaryAllowableItemizedDeductions.securityServices + '</securityServices> \
											    	<otherContributions>'+ TotalOrdinaryAllowableItemizedDeductions.otherContributions + '</otherContributions> \
											    	<taxesAndLiscenses>'+ TotalOrdinaryAllowableItemizedDeductions.taxesAndLiscenses + '</taxesAndLiscenses> \
											    	<tollingFees>'+ TotalOrdinaryAllowableItemizedDeductions.tollingFees + '</tollingFees> \
											    	<trainingsAndSeminars>'+ TotalOrdinaryAllowableItemizedDeductions.trainingsAndSeminars + '</trainingsAndSeminars> \
											    	<travelTransportaion>'+ TotalOrdinaryAllowableItemizedDeductions.travelTransportaion + '</travelTransportaion> \
											    	<otherFirstValue>'+ TotalOrdinaryAllowableItemizedDeductions.otherFirstValue + '</otherFirstValue> \
											    	<otherSecondValue>'+ TotalOrdinaryAllowableItemizedDeductions.otherSecondValue + '</otherSecondValue> \
											    	<otherThirdValue>'+ TotalOrdinaryAllowableItemizedDeductions.otherThirdValue + '</otherThirdValue> \
											    	<otherFourthValue>'+ TotalOrdinaryAllowableItemizedDeductions.otherFourthValue + '</otherFourthValue> \
											    	<totalOrdinaryAllowableItemizedDeductions>'+ TotalOrdinaryAllowableItemizedDeductions.totalOrdinaryAllowableItemizedDeductions + '</totalOrdinaryAllowableItemizedDeductions> \
										    	</totalOrdinaryAllowableItemizedDeductions>';


    var OtherAmortizationsListHolder = [];
    for (var key in OtherAmortizationsList) {
        var obj = '<listAmortizations>' +
                      '<otherExpandableDesc>' + OtherAmortizationsList[key].otherExpandableDesc + '</otherExpandableDesc>' +
                      '<otherExpandableAmount>' + OtherAmortizationsList[key].otherExpandableAmount + '</otherExpandableAmount>' +
                      '<otherExpandableAmountSpecial>' + OtherAmortizationsList[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>' +
                      '<otherExpandableAmountRegular>' + OtherAmortizationsList[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>' +
                      '<otherExpandableAmountTotal>' + OtherAmortizationsList[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>' +
                   '</listAmortizations>';
        OtherAmortizationsListHolder.push(obj);
    }
    var otherAmortizationsList = '';
    for (var key in OtherAmortizationsListHolder) {
        otherAmortizationsList += OtherAmortizationsListHolder[key];
    }



    var OtherItemizedDeductionsListHolder = [];
    for (var key in OtherItemizedDeductionsList) {
        var obj = '<listOtherOrdinaryItemizedDeductions>' +
                  '<otherExpandableDesc>' + OtherItemizedDeductionsList[key].otherExpandableDesc + '</otherExpandableDesc>' +
                  '<otherExpandableAmount>' + OtherItemizedDeductionsList[key].otherExpandableAmount + '</otherExpandableAmount>' +
                  '<otherExpandableAmountSpecial>' + OtherItemizedDeductionsList[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>' +
                  '<otherExpandableAmountRegular>' + OtherItemizedDeductionsList[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>' +
                  '<otherExpandableAmountTotal>' + OtherItemizedDeductionsList[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>' +
                '</listOtherOrdinaryItemizedDeductions>';
        OtherItemizedDeductionsListHolder.push(obj);
    }
    var othersOrdinaryAllowableItemizedDeductionsList = '';
    for (var key in OtherItemizedDeductionsListHolder) {
        othersOrdinaryAllowableItemizedDeductionsList += OtherItemizedDeductionsListHolder[key];
    }


    var specialAllowableItemizedDeductions = '<specialAllowableItemizedDeduction> \
											    	<specialAllowableDesc>'+ SpecialAllowableItemizedDeduction.specialAllowableDesc + '</specialAllowableDesc> \
											    	<specialAllowableLegalBasis>'+ SpecialAllowableItemizedDeduction.specialAllowableLegalBasis + '</specialAllowableLegalBasis> \
											    	<specialAllowableEx>'+ SpecialAllowableItemizedDeduction.specialAllowableEx + '</specialAllowableEx> \
											    	<specialAllowableSp>'+ SpecialAllowableItemizedDeduction.specialAllowableSp + '</specialAllowableSp> \
											    	<specialAllowableRe>'+ SpecialAllowableItemizedDeduction.specialAllowableRe + '</specialAllowableRe> \
											    	<specialAllowableTotal></specialAllowableTotal> \
											    	<specialAllowabaaleDesc2nd>'+ SpecialAllowableItemizedDeduction.specialAllowabaaleDesc2nd + '</specialAllowabaaleDesc2nd> \
											    	<specialAllowableLegalBasis2nd>'+ SpecialAllowableItemizedDeduction.specialAllowableLegalBasis2nd + '</specialAllowableLegalBasis2nd> \
											    	<specialAllowableEx2nd>'+ SpecialAllowableItemizedDeduction.specialAllowableEx2nd + '</specialAllowableEx2nd> \
											    	<specialAllowableSp2nd>'+ SpecialAllowableItemizedDeduction.specialAllowableSp2nd + '</specialAllowableSp2nd> \
											    	<specialAllowableRe2nd>'+ SpecialAllowableItemizedDeduction.specialAllowableRe2nd + '</specialAllowableRe2nd> \
											    	<specialAllowableTotal2nd></specialAllowableTotal2nd> \
											    	<specialAllowableDesc3rd>'+ SpecialAllowableItemizedDeduction.specialAllowableDesc3rd + '</specialAllowableDesc3rd> \
											    	<specialAllowableLegalBasis3rd>'+ SpecialAllowableItemizedDeduction.specialAllowableLegalBasis3rd + '</specialAllowableLegalBasis3rd> \
											    	<specialAllowableEx3rd>'+ SpecialAllowableItemizedDeduction.specialAllowableEx3rd + '</specialAllowableEx3rd> \
											    	<specialAllowableSp3rd>'+ SpecialAllowableItemizedDeduction.specialAllowableSp3rd + '</specialAllowableSp3rd> \
											    	<specialAllowableRe3rd>'+ SpecialAllowableItemizedDeduction.specialAllowableRe3rd + '</specialAllowableRe3rd> \
											    	<specialAllowableTotal3rd></specialAllowableTotal3rd> \
											    	<specialAllowableDescFourth>'+ SpecialAllowableItemizedDeduction.specialAllowableDescFourth + '</specialAllowableDescFourth> \
											    	<specialAllowableLegalBasisFourth>'+ SpecialAllowableItemizedDeduction.specialAllowableLegalBasisFourth + '</specialAllowableLegalBasisFourth> \
											    	<specialAllowableExFourth>'+ SpecialAllowableItemizedDeduction.specialAllowableExFourth + '</specialAllowableExFourth> \
											    	<specialAllowableSpFourth>'+ SpecialAllowableItemizedDeduction.specialAllowableSpFourth + '</specialAllowableSpFourth> \
											    	<specialAllowableReFourth>'+ SpecialAllowableItemizedDeduction.specialAllowableReFourth + '</specialAllowableReFourth> \
											    	<specialAllowableTotalFourth></specialAllowableTotalFourth> \
											   </specialAllowableItemizedDeduction>';

    var OtherSpecialDeductionHolder = [];
    for (var key in OtherSpecialDeductionList) {
        var obj = '<otherSpecialDeduction>' +
                      '<valueEx>' + OtherSpecialDeductionList[key].valueEx + '</valueEx>' +
                      '<valueRe>' + OtherSpecialDeductionList[key].valueRe + '</valueRe>' +
                      '<valueSp>' + OtherSpecialDeductionList[key].valueSp + '</valueSp>' +
                      '<valueTotal>' + OtherSpecialDeductionList[key].valueTotal + '</valueTotal>' +
                      '<description>' + OtherSpecialDeductionList[key].description + '</description>' +
                      '<legalBasis>' + OtherSpecialDeductionList[key].legalBasis + '</legalBasis>' +
                    '</otherSpecialDeduction>';
        OtherSpecialDeductionHolder.push(obj);
    }
    var otherSpecialAllowableItemizedDeductionList = '';
    for (var key in OtherSpecialDeductionHolder) {
        otherSpecialAllowableItemizedDeductionList += OtherSpecialDeductionHolder[key];
    }


    var computationOfNOLCO = '<computationOfNetOperatingLossCarryOver> \
							    	<grossIncome>'+ ComputationOfNetOperatingLossCarryOver.grossIncome + '</grossIncome> \
							    	<lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw>'+ ComputationOfNetOperatingLossCarryOver.lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw + '</lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw> \
							    	<netOperatingLoss>'+ ComputationOfNetOperatingLossCarryOver.netOperatingLoss + '</netOperatingLoss> \
							    	<netOperatingLossYearIncurred1>'+ ComputationOfNetOperatingLossCarryOver.netOperatingLossYearIncurred1 + '</netOperatingLossYearIncurred1> \
							    	<netOperatingLossYearIncurred2>'+ ComputationOfNetOperatingLossCarryOver.netOperatingLossYearIncurred2 + '</netOperatingLossYearIncurred2> \
							    	<netOperatingLossYearIncurred3>'+ ComputationOfNetOperatingLossCarryOver.netOperatingLossYearIncurred3 + '</netOperatingLossYearIncurred3> \
							    	<netOperatingLossYearIncurred4>'+ ComputationOfNetOperatingLossCarryOver.netOperatingLossYearIncurred4 + '</netOperatingLossYearIncurred4> \
							    	<netOperatingLossAmount1>'+ ComputationOfNetOperatingLossCarryOver.netOperatingLossAmount1 + '</netOperatingLossAmount1> \
							    	<netOperatingLossAmount2>'+ ComputationOfNetOperatingLossCarryOver.netOperatingLossAmount2 + '</netOperatingLossAmount2> \
							    	<netOperatingLossAmount3>'+ ComputationOfNetOperatingLossCarryOver.netOperatingLossAmount3 + '</netOperatingLossAmount3> \
							    	<netOperatingLossAmount4>'+ ComputationOfNetOperatingLossCarryOver.netOperatingLossAmount4 + '</netOperatingLossAmount4> \
							    	<NOLCOAppliedPreviousYear1>'+ ComputationOfNetOperatingLossCarryOver.NOLCOAppliedPreviousYear1 + '</NOLCOAppliedPreviousYear1> \
							    	<NOLCOAppliedPreviousYear2>'+ ComputationOfNetOperatingLossCarryOver.NOLCOAppliedPreviousYear2 + '</NOLCOAppliedPreviousYear2> \
							    	<NOLCOAppliedPreviousYear3>'+ ComputationOfNetOperatingLossCarryOver.NOLCOAppliedPreviousYear3 + '</NOLCOAppliedPreviousYear3> \
							    	<NOLCOAppliedPreviousYear4>'+ ComputationOfNetOperatingLossCarryOver.NOLCOAppliedPreviousYear4 + '</NOLCOAppliedPreviousYear4> \
							    	<NOLCOExpired1>'+ ComputationOfNetOperatingLossCarryOver.NOLCOExpired1 + '</NOLCOExpired1> \
							    	<NOLCOExpired2>'+ ComputationOfNetOperatingLossCarryOver.NOLCOExpired2 + '</NOLCOExpired2> \
							    	<NOLCOExpired3>'+ ComputationOfNetOperatingLossCarryOver.NOLCOExpired3 + '</NOLCOExpired3> \
							    	<NOLCOExpired4>'+ ComputationOfNetOperatingLossCarryOver.NOLCOExpired4 + '</NOLCOExpired4> \
							    	<NOLCOAppliedCurrentYear1>'+ ComputationOfNetOperatingLossCarryOver.NOLCOAppliedCurrentYear1 + '</NOLCOAppliedCurrentYear1> \
							    	<NOLCOAppliedCurrentYear2>'+ ComputationOfNetOperatingLossCarryOver.NOLCOAppliedCurrentYear2 + '</NOLCOAppliedCurrentYear2> \
							    	<NOLCOAppliedCurrentYear3>'+ ComputationOfNetOperatingLossCarryOver.NOLCOAppliedCurrentYear3 + '</NOLCOAppliedCurrentYear3> \
							    	<NOLCOAppliedCurrentYear4>'+ ComputationOfNetOperatingLossCarryOver.NOLCOAppliedCurrentYear4 + '</NOLCOAppliedCurrentYear4> \
							    	<netOperatingLossUnapplied1>'+ ComputationOfNetOperatingLossCarryOver.netOperatingLossUnapplied1 + '</netOperatingLossUnapplied1> \
							    	<netOperatingLossUnapplied2>'+ ComputationOfNetOperatingLossCarryOver.netOperatingLossUnapplied2 + '</netOperatingLossUnapplied2> \
							    	<netOperatingLossUnapplied3>'+ ComputationOfNetOperatingLossCarryOver.netOperatingLossUnapplied3 + '</netOperatingLossUnapplied3> \
							    	<netOperatingLossUnapplied4>'+ ComputationOfNetOperatingLossCarryOver.netOperatingLossUnapplied4 + '</netOperatingLossUnapplied4> \
							    	<totalNOLCO>'+ ComputationOfNetOperatingLossCarryOver.totalNOLCO + '</totalNOLCO> \
							    </computationOfNetOperatingLossCarryOver>';

    var taxCreditsPayments = '<taxCreditsPayments> \
							    	<taxCreditPaymentExempt> \
								    	<priorYearsExcessCreditsOtherThanMCIT>'+ TaxCreditPaymentExempt.priorYearsExcessCreditsOtherThanMCIT + '</priorYearsExcessCreditsOtherThanMCIT> \
								    	<incomeTaxPaymentUnderMCIT>'+ TaxCreditPaymentExempt.incomeTaxPaymentUnderMCIT + '</incomeTaxPaymentUnderMCIT> \
								    	<incomeTaxPaymentUnderRegularRate>'+ TaxCreditPaymentExempt.incomeTaxPaymentUnderRegularRate + '</incomeTaxPaymentUnderRegularRate> \
								    	<excessMCIT>'+ TaxCreditPaymentExempt.excessMCIT + '</excessMCIT> \
								    	<creditableTaxWithheldFromPrevQuarters>'+ TaxCreditPaymentExempt.creditableTaxWithheldFromPrevQuarters + '</creditableTaxWithheldFromPrevQuarters> \
								    	<creditableTaxWithheldFromTheFourthQuarter>'+ TaxCreditPaymentExempt.creditableTaxWithheldFromTheFourthQuarter + '</creditableTaxWithheldFromTheFourthQuarter> \
								    	<foreignTaxCredits>'+ TaxCreditPaymentExempt.foreignTaxCredits + '</foreignTaxCredits> \
								    	<taxPaidInReturn>'+ TaxCreditPaymentExempt.taxPaidInReturn + '</taxPaidInReturn> \
								    	<incomeTaxPaymentUnderSpecialRate>'+ TaxCreditPaymentExempt.incomeTaxPaymentUnderSpecialRate + '</incomeTaxPaymentUnderSpecialRate> \
								    	<sched7SpecialTaxCredits>'+ TaxCreditPaymentExempt.sched7SpecialTaxCredits + '</sched7SpecialTaxCredits> \
								    	<otherCreditsPaymentsDescription1>'+ TaxCreditPaymentExempt.otherCreditsPaymentsDescription1 + '</otherCreditsPaymentsDescription1> \
								    	<otherCreditsPaymentsAmount1>'+ TaxCreditPaymentExempt.otherCreditsPaymentsAmount1 + '</otherCreditsPaymentsAmount1> \
								    	<otherCreditsPaymentsDescription2>'+ TaxCreditPaymentExempt.otherCreditsPaymentsDescription2 + '</otherCreditsPaymentsDescription2> \
								    	<otherCreditsPaymentsAmount2>'+ TaxCreditPaymentExempt.otherCreditsPaymentsAmount2 + '</otherCreditsPaymentsAmount2>\ \
								    	<totalTaxCreditsPayments>'+ TaxCreditPaymentExempt.totalTaxCreditsPayments + '</totalTaxCreditsPayments> \
							    	</taxCreditPaymentExempt> \
							    	<taxCreditPaymentSpecial> \
								    	<referenceId>'+ TaxCreditPaymentSpecial.referenceId + '</referenceId> \
								    	<priorYearsExcessCreditsOtherThanMCIT>'+ TaxCreditPaymentSpecial.priorYearsExcessCreditsOtherThanMCIT + '</priorYearsExcessCreditsOtherThanMCIT> \
								    	<incomeTaxPaymentUnderMCIT>'+ TaxCreditPaymentSpecial.incomeTaxPaymentUnderMCIT + '</incomeTaxPaymentUnderMCIT> \
								    	<incomeTaxPaymentUnderRegularRate>'+ TaxCreditPaymentSpecial.incomeTaxPaymentUnderRegularRate + '</incomeTaxPaymentUnderRegularRate> \
								    	<excessMCIT>'+ TaxCreditPaymentSpecial.excessMCIT + '</excessMCIT> \
								    	<creditableTaxWithheldFromPrevQuarters>'+ TaxCreditPaymentSpecial.creditableTaxWithheldFromPrevQuarters + '</creditableTaxWithheldFromPrevQuarters> \
								    	<creditableTaxWithheldFromTheFourthQuarter>'+ TaxCreditPaymentSpecial.creditableTaxWithheldFromTheFourthQuarter + '</creditableTaxWithheldFromTheFourthQuarter> \
								    	<foreignTaxCredits>'+ TaxCreditPaymentSpecial.foreignTaxCredits + '</foreignTaxCredits> \
								    	<taxPaidInReturn>'+ TaxCreditPaymentSpecial.taxPaidInReturn + '</taxPaidInReturn> \
								    	<incomeTaxPaymentUnderSpecialRate>'+ TaxCreditPaymentSpecial.incomeTaxPaymentUnderSpecialRate + '</incomeTaxPaymentUnderSpecialRate> \
										<sched7SpecialTaxCredits>'+ TaxCreditPaymentSpecial.sched7SpecialTaxCredits + '</sched7SpecialTaxCredits> \
								    	<otherCreditsPaymentsDescription1>'+ TaxCreditPaymentSpecial.otherCreditsPaymentsDescription1 + '</otherCreditsPaymentsDescription1> \
								    	<otherCreditsPaymentsAmount1>'+ TaxCreditPaymentSpecial.otherCreditsPaymentsAmount1 + '</otherCreditsPaymentsAmount1> \
								    	<otherCreditsPaymentsDescription2>'+ TaxCreditPaymentSpecial.otherCreditsPaymentsDescription2 + '</otherCreditsPaymentsDescription2> \
								    	<otherCreditsPaymentsAmount2>'+ TaxCreditPaymentSpecial.otherCreditsPaymentsAmount2 + '</otherCreditsPaymentsAmount2> \
								    	<totalTaxCreditsPayments>'+ TaxCreditPaymentSpecial.totalTaxCreditsPayments + '</totalTaxCreditsPayments> \
							    	</taxCreditPaymentSpecial> \
							    	<taxCreditPaymentRegular> \
								    	<referenceId>'+ TaxCreditPaymentRegular.referenceId + '</referenceId> \
								    	<priorYearsExcessCreditsOtherThanMCIT>'+ TaxCreditPaymentRegular.priorYearsExcessCreditsOtherThanMCIT + '</priorYearsExcessCreditsOtherThanMCIT> \
								    	<incomeTaxPaymentUnderMCIT>'+ TaxCreditPaymentRegular.incomeTaxPaymentUnderMCIT + '</incomeTaxPaymentUnderMCIT> \
								    	<incomeTaxPaymentUnderRegularRate>'+ TaxCreditPaymentRegular.incomeTaxPaymentUnderRegularRate + '</incomeTaxPaymentUnderRegularRate> \
								    	<excessMCIT>'+ TaxCreditPaymentRegular.excessMCIT + '</excessMCIT> \
								    	<creditableTaxWithheldFromPrevQuarters>'+ TaxCreditPaymentRegular.creditableTaxWithheldFromPrevQuarters + '</creditableTaxWithheldFromPrevQuarters> \
								    	<creditableTaxWithheldFromTheFourthQuarter>'+ TaxCreditPaymentRegular.creditableTaxWithheldFromTheFourthQuarter + '</creditableTaxWithheldFromTheFourthQuarter> \
								    	<foreignTaxCredits>'+ TaxCreditPaymentRegular.foreignTaxCredits + '</foreignTaxCredits> \
								    	<taxPaidInReturn>'+ TaxCreditPaymentRegular.taxPaidInReturn + '</taxPaidInReturn> \
								    	<incomeTaxPaymentUnderSpecialRate>'+ TaxCreditPaymentRegular.incomeTaxPaymentUnderSpecialRate + '</incomeTaxPaymentUnderSpecialRate> \
										<sched7SpecialTaxCredits>'+ TaxCreditPaymentRegular.sched7SpecialTaxCredits + '</sched7SpecialTaxCredits> \
								    	<otherCreditsPaymentsDescription1>'+ TaxCreditPaymentRegular.otherCreditsPaymentsDescription1 + '</otherCreditsPaymentsDescription1> \
								    	<otherCreditsPaymentsAmount1>'+ TaxCreditPaymentRegular.otherCreditsPaymentsAmount1 + '</otherCreditsPaymentsAmount1> \
								    	<otherCreditsPaymentsDescription2>'+ TaxCreditPaymentRegular.otherCreditsPaymentsDescription2 + '</otherCreditsPaymentsDescription2> \
								    	<otherCreditsPaymentsAmount2>'+ TaxCreditPaymentRegular.otherCreditsPaymentsAmount2 + '</otherCreditsPaymentsAmount2> \
								    	<totalTaxCreditsPayments>'+ TaxCreditPaymentRegular.totalTaxCreditsPayments + '</totalTaxCreditsPayments> \
							    	</taxCreditPaymentRegular> \
							    	<taxCreditPaymentTotal> \
								    	<referenceId>'+ TaxCreditPaymentTotal.referenceId + '</referenceId> \
								    	<priorYearsExcessCreditsOtherThanMCIT>'+ TaxCreditPaymentTotal.priorYearsExcessCreditsOtherThanMCIT + '</priorYearsExcessCreditsOtherThanMCIT> \
								    	<incomeTaxPaymentUnderMCIT>'+ TaxCreditPaymentTotal.incomeTaxPaymentUnderMCIT + '</incomeTaxPaymentUnderMCIT> \
								    	<incomeTaxPaymentUnderRegularRate>'+ TaxCreditPaymentTotal.incomeTaxPaymentUnderRegularRate + '</incomeTaxPaymentUnderRegularRate> \
								    	<excessMCIT>'+ TaxCreditPaymentTotal.excessMCIT + '</excessMCIT> \
								    	<creditableTaxWithheldFromPrevQuarters>'+ TaxCreditPaymentTotal.creditableTaxWithheldFromPrevQuarters + '</creditableTaxWithheldFromPrevQuarters> \
								    	<creditableTaxWithheldFromTheFourthQuarter>'+ TaxCreditPaymentTotal.creditableTaxWithheldFromTheFourthQuarter + '</creditableTaxWithheldFromTheFourthQuarter> \
								    	<foreignTaxCredits>'+ TaxCreditPaymentTotal.foreignTaxCredits + '</foreignTaxCredits> \
								    	<taxPaidInReturn>'+ TaxCreditPaymentTotal.taxPaidInReturn + '</taxPaidInReturn> \
										<incomeTaxPaymentUnderSpecialRate>'+ TaxCreditPaymentExempt.incomeTaxPaymentUnderSpecialRate + '</incomeTaxPaymentUnderSpecialRate> \
										<sched7SpecialTaxCredits>'+ TaxCreditPaymentTotal.sched7SpecialTaxCredits + '</sched7SpecialTaxCredits> \
								    	<otherCreditsPaymentsDescription1>'+ TaxCreditPaymentTotal.otherCreditsPaymentsDescription1 + '</otherCreditsPaymentsDescription1> \
								    	<otherCreditsPaymentsAmount1>'+ TaxCreditPaymentTotal.otherCreditsPaymentsAmount1 + '</otherCreditsPaymentsAmount1> \
								    	<otherCreditsPaymentsDescription2>'+ TaxCreditPaymentTotal.otherCreditsPaymentsDescription2 + '</otherCreditsPaymentsDescription2> \
								    	<otherCreditsPaymentsAmount2>'+ TaxCreditPaymentTotal.otherCreditsPaymentsAmount2 + '</otherCreditsPaymentsAmount2> \
								    	<totalTaxCreditsPayments>'+ TaxCreditPaymentTotal.totalTaxCreditsPayments + '</totalTaxCreditsPayments> \
							    	</taxCreditPaymentTotal> \
							    </taxCreditsPayments>';


    var OtherCreditsHolder = [];
    for (var key in OtherCredits) {
        var obj = '<otherCredits>' +
                      '<otherExpandableDesc>' + OtherCredits[key].otherExpandableDesc + '</otherExpandableDesc>' +
                      '<otherExpandableAmount>' + OtherCredits[key].otherExpandableAmount + '</otherExpandableAmount>' +
                      '<otherExpandableAmountRegular>' + OtherCredits[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>' +
                      '<otherExpandableAmountSpecial>' + OtherCredits[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>' +
                      '<otherExpandableAmountTotal>' + OtherCredits[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>' +
                  '</otherCredits>';
        OtherCreditsHolder.push(obj);
    }
    var otherTaxCreditPaymentsList = '';
    for (var key in OtherCreditsHolder) {
        otherTaxCreditPaymentsList += OtherCreditsHolder[key];
    }


    var computationOfMCIT = '<computationOfMinimumCorporateIncomeTax> \
						    	<balanceOfExcessMCIT1>'+ ComputationOfMinimumCorporateIncomeTax.balanceOfExcessMCIT1 + '</balanceOfExcessMCIT1> \
						    	<balanceOfExcessMCIT2>'+ ComputationOfMinimumCorporateIncomeTax.balanceOfExcessMCIT2 + '</balanceOfExcessMCIT2> \
						    	<balanceOfExcessMCIT3>'+ ComputationOfMinimumCorporateIncomeTax.balanceOfExcessMCIT3 + '</balanceOfExcessMCIT3> \
						    	<excessMCITAppliedCurrently1>'+ ComputationOfMinimumCorporateIncomeTax.excessMCITAppliedCurrently1 + '</excessMCITAppliedCurrently1> \
						    	<excessMCITAppliedCurrently2>'+ ComputationOfMinimumCorporateIncomeTax.excessMCITAppliedCurrently2 + '</excessMCITAppliedCurrently2> \
						    	<excessMCITAppliedCurrently3>'+ ComputationOfMinimumCorporateIncomeTax.excessMCITAppliedCurrently3 + '</excessMCITAppliedCurrently3> \
						    	<excessMCITAppliedPreviously1>'+ ComputationOfMinimumCorporateIncomeTax.excessMCITAppliedPreviously1 + '</excessMCITAppliedPreviously1> \
						    	<excessMCITAppliedPreviously2>'+ ComputationOfMinimumCorporateIncomeTax.excessMCITAppliedPreviously2 + '</excessMCITAppliedPreviously2> \
						    	<excessMCITAppliedPreviously3>'+ ComputationOfMinimumCorporateIncomeTax.excessMCITAppliedPreviously3 + '</excessMCITAppliedPreviously3> \
						    	<excessMCITOverNormalTax1>'+ ComputationOfMinimumCorporateIncomeTax.excessMCITOverNormalTax1 + '</excessMCITOverNormalTax1> \
						    	<excessMCITOverNormalTax2>'+ ComputationOfMinimumCorporateIncomeTax.excessMCITOverNormalTax2 + '</excessMCITOverNormalTax2> \
						    	<excessMCITOverNormalTax3>'+ ComputationOfMinimumCorporateIncomeTax.excessMCITOverNormalTax3 + '</excessMCITOverNormalTax3> \
						    	<expiredPortionOfExcessMCIT1>'+ ComputationOfMinimumCorporateIncomeTax.expiredPortionOfExcessMCIT1 + '</expiredPortionOfExcessMCIT1> \
						    	<expiredPortionOfExcessMCIT2>'+ ComputationOfMinimumCorporateIncomeTax.expiredPortionOfExcessMCIT2 + '</expiredPortionOfExcessMCIT2> \
						    	<expiredPortionOfExcessMCIT3>'+ ComputationOfMinimumCorporateIncomeTax.expiredPortionOfExcessMCIT3 + '</expiredPortionOfExcessMCIT3> \
						    	<mcit1>'+ ComputationOfMinimumCorporateIncomeTax.mcit1 + '</mcit1> \
						    	<mcit2>'+ ComputationOfMinimumCorporateIncomeTax.mcit2 + '</mcit2> \
						    	<mcit3>'+ ComputationOfMinimumCorporateIncomeTax.mcit3 + '</mcit3> \
						    	<mcitYear1>'+ ComputationOfMinimumCorporateIncomeTax.mcitYear1 + '</mcitYear1> \
						    	<mcitYear2>'+ ComputationOfMinimumCorporateIncomeTax.mcitYear2 + '</mcitYear2> \
						    	<mcitYear3>'+ ComputationOfMinimumCorporateIncomeTax.mcitYear3 + '</mcitYear3> \
						    	<normalIncomeTax1>'+ ComputationOfMinimumCorporateIncomeTax.normalIncomeTax1 + '</normalIncomeTax1> \
						    	<normalIncomeTax2>'+ ComputationOfMinimumCorporateIncomeTax.normalIncomeTax2 + '</normalIncomeTax2> \
						    	<normalIncomeTax3>'+ ComputationOfMinimumCorporateIncomeTax.normalIncomeTax3 + '</normalIncomeTax3> \
						    </computationOfMinimumCorporateIncomeTax>';

    var reconcilationOfNetIncomeTax = '<reconciliationOfNetIncome> \
									    	<reconciliationOfNetIncomeExempt> \
										    	<netIncomePerBooks>'+ ReconcilationOfNetIncomeExempt.netIncomePerBooks + '</netIncomePerBooks> \
										    	<nonDeductibleExpensesItem2Description>'+ ReconcilationOfNetIncomeExempt.nonDeductibleExpensesItem2Description + '</nonDeductibleExpensesItem2Description> \
										    	<nonDeductibleExpensesItem2Value>'+ ReconcilationOfNetIncomeExempt.nonDeductibleExpensesItem2Value + '</nonDeductibleExpensesItem2Value> \
										    	<nonDeductibleExpensesItem3Description>'+ ReconcilationOfNetIncomeExempt.nonDeductibleExpensesItem3Description + '</nonDeductibleExpensesItem3Description> \
										    	<nonDeductibleExpensesItem3Value>'+ ReconcilationOfNetIncomeExempt.nonDeductibleExpensesItem3Value + '</nonDeductibleExpensesItem3Value> \
										    	<totalNonDeductibleExpenses>'+ ReconcilationOfNetIncomeExempt.totalNonDeductibleExpenses + '</totalNonDeductibleExpenses> \
										    	<nonTaxableAndSpDeductionsItem5Description>'+ ReconcilationOfNetIncomeExempt.nonTaxableAndSpDeductionsItem5Description + '</nonTaxableAndSpDeductionsItem5Description> \
										    	<nonTaxableAndSpDeductionsItem5Value>'+ ReconcilationOfNetIncomeExempt.nonTaxableAndSpDeductionsItem5Value + '</nonTaxableAndSpDeductionsItem5Value> \
										    	<nonTaxableAndSpDeductionsItem6Description>'+ ReconcilationOfNetIncomeExempt.nonTaxableAndSpDeductionsItem6Description + '</nonTaxableAndSpDeductionsItem6Description> \
										    	<nonTaxableAndSpDeductionsItem6Value>'+ ReconcilationOfNetIncomeExempt.nonTaxableAndSpDeductionsItem6Value + '</nonTaxableAndSpDeductionsItem6Value> \
										    	<specialDeductionsItem7Description>'+ ReconcilationOfNetIncomeExempt.specialDeductionsItem7Description + '</specialDeductionsItem7Description> \
										    	<specialDeductionsItem7Value>'+ ReconcilationOfNetIncomeExempt.specialDeductionsItem7Value + '</specialDeductionsItem7Value> \
										    	<specialDeductionsItem8Description>'+ ReconcilationOfNetIncomeExempt.specialDeductionsItem8Description + '</specialDeductionsItem8Description> \
										    	<specialDeductionsItem8Value>'+ ReconcilationOfNetIncomeExempt.specialDeductionsItem8Value + '</specialDeductionsItem8Value> \
										    	<totalNonTaxableAndSpDeductions>'+ ReconcilationOfNetIncomeExempt.totalNonTaxableAndSpDeductions + '</totalNonTaxableAndSpDeductions> \
										    	<netTaxableIncome>'+ ReconcilationOfNetIncomeExempt.netTaxableIncome + '</netTaxableIncome> \
									    	</reconciliationOfNetIncomeExempt> \
									    	<reconciliationOfNetIncomeSpecial>  \
										    	<netIncomePerBooks>'+ ReconcilationOfNetIncomeSpecial.netIncomePerBooks + '</netIncomePerBooks> \
										    	<nonDeductibleExpensesItem2Value>'+ ReconcilationOfNetIncomeSpecial.nonDeductibleExpensesItem2Value + '</nonDeductibleExpensesItem2Value> \
										    	<nonDeductibleExpensesItem3Value>'+ ReconcilationOfNetIncomeSpecial.nonDeductibleExpensesItem3Value + '</nonDeductibleExpensesItem3Value> \
										    	<totalNonDeductibleExpenses>'+ ReconcilationOfNetIncomeSpecial.totalNonDeductibleExpenses + '</totalNonDeductibleExpenses> \
										    	<nonTaxableAndSpDeductionsItem5Value>'+ ReconcilationOfNetIncomeSpecial.nonTaxableAndSpDeductionsItem5Value + '</nonTaxableAndSpDeductionsItem5Value> \
										    	<nonTaxableAndSpDeductionsItem6Value>'+ ReconcilationOfNetIncomeSpecial.nonTaxableAndSpDeductionsItem6Value + '</nonTaxableAndSpDeductionsItem6Value> \
										    	<specialDeductionsItem7Value>'+ ReconcilationOfNetIncomeSpecial.specialDeductionsItem7Value + '</specialDeductionsItem7Value> \
										    	<specialDeductionsItem8Value>'+ ReconcilationOfNetIncomeSpecial.specialDeductionsItem8Value + '</specialDeductionsItem8Value> \
										    	<totalNonTaxableAndSpDeductions>'+ ReconcilationOfNetIncomeSpecial.totalNonTaxableAndSpDeductions + '</totalNonTaxableAndSpDeductions> \
										    	<netTaxableIncome>'+ ReconcilationOfNetIncomeSpecial.netTaxableIncome + '</netTaxableIncome> \
									    	</reconciliationOfNetIncomeSpecial> \
									    	<reconciliationOfNetIncomeRegular> \
										    	<netIncomePerBooks>'+ ReconcilationOfNetIncomeRegular.netIncomePerBooks + '</netIncomePerBooks> \
										    	<nonDeductibleExpensesItem2Value>'+ ReconcilationOfNetIncomeRegular.nonDeductibleExpensesItem2Value + '</nonDeductibleExpensesItem2Value> \
										    	<nonDeductibleExpensesItem3Value>'+ ReconcilationOfNetIncomeRegular.nonDeductibleExpensesItem3Value + '</nonDeductibleExpensesItem3Value> \
										    	<totalNonDeductibleExpenses>'+ ReconcilationOfNetIncomeRegular.totalNonDeductibleExpenses + '</totalNonDeductibleExpenses> \
										    	<nonTaxableAndSpDeductionsItem5Value>'+ ReconcilationOfNetIncomeRegular.nonTaxableAndSpDeductionsItem5Value + '</nonTaxableAndSpDeductionsItem5Value> \
										    	<nonTaxableAndSpDeductionsItem6Value>'+ ReconcilationOfNetIncomeRegular.nonTaxableAndSpDeductionsItem6Value + '</nonTaxableAndSpDeductionsItem6Value> \
										    	<specialDeductionsItem7Value>'+ ReconcilationOfNetIncomeRegular.specialDeductionsItem7Value + '</specialDeductionsItem7Value> \
										    	<specialDeductionsItem8Value>'+ ReconcilationOfNetIncomeRegular.specialDeductionsItem8Value + '</specialDeductionsItem8Value> \
										    	<totalNonTaxableAndSpDeductions>'+ ReconcilationOfNetIncomeRegular.totalNonTaxableAndSpDeductions + '</totalNonTaxableAndSpDeductions> \
										    	<netTaxableIncome>'+ ReconcilationOfNetIncomeRegular.netTaxableIncome + '</netTaxableIncome> \
									    	</reconciliationOfNetIncomeRegular> \
									    	<reconciliationOfNetIncomeTotal> \
										    	<netIncomePerBooks>'+ ReconcilationOfNetIncomeTotal.netIncomePerBooks + '</netIncomePerBooks> \
										    	<nonDeductibleExpensesItem2Value>'+ ReconcilationOfNetIncomeTotal.nonDeductibleExpensesItem2Value + '</nonDeductibleExpensesItem2Value> \
										    	<nonDeductibleExpensesItem3Value>'+ ReconcilationOfNetIncomeTotal.nonDeductibleExpensesItem3Value + '</nonDeductibleExpensesItem3Value> \
										    	<totalNonDeductibleExpenses>'+ ReconcilationOfNetIncomeTotal.totalNonDeductibleExpenses + '</totalNonDeductibleExpenses> \
										    	<nonTaxableAndSpDeductionsItem5Value>'+ ReconcilationOfNetIncomeTotal.nonTaxableAndSpDeductionsItem5Value + '</nonTaxableAndSpDeductionsItem5Value> \
										    	<nonTaxableAndSpDeductionsItem6Value>'+ ReconcilationOfNetIncomeTotal.nonTaxableAndSpDeductionsItem6Value + '</nonTaxableAndSpDeductionsItem6Value> \
										    	<specialDeductionsItem7Value>'+ ReconcilationOfNetIncomeTotal.specialDeductionsItem7Value + '</specialDeductionsItem7Value> \
										    	<specialDeductionsItem8Value>'+ ReconcilationOfNetIncomeTotal.specialDeductionsItem8Value + '</specialDeductionsItem8Value> \
										    	<totalNonTaxableAndSpDeductions>'+ ReconcilationOfNetIncomeTotal.totalNonTaxableAndSpDeductions + '</totalNonTaxableAndSpDeductions> \
										    	<netTaxableIncome>'+ ReconcilationOfNetIncomeTotal.netTaxableIncome + '</netTaxableIncome> \
									    	</reconciliationOfNetIncomeTotal> \
									   </reconciliationOfNetIncome>';


    var NonDeductibleExpenseHolder = [];
    for (var key in NonDeductibleExpense) {
        var obj = '<listOfNonDeductibleExpenseItem3>' +
                      '<otherExpandableDesc>' + NonDeductibleExpense[key].otherExpandableDesc + '</otherExpandableDesc>' +
                      '<otherExpandableAmount>' + NonDeductibleExpense[key].otherExpandableAmount + '</otherExpandableAmount>' +
                      '<otherExpandableAmountSpecial>' + NonDeductibleExpense[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>' +
                      '<otherExpandableAmountRegular>' + NonDeductibleExpense[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>' +
                      '<otherExpandableAmountTotal>' + NonDeductibleExpense[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>' +
                  '</listOfNonDeductibleExpenseItem3>';
        NonDeductibleExpenseHolder.push(obj);
    }
    var reconcilationOfNetIncomeNonDeductibleExpenseList = '';
    for (var key in NonDeductibleExpenseHolder) {
        reconcilationOfNetIncomeNonDeductibleExpenseList += NonDeductibleExpenseHolder[key];
    }



    var NonTaxableAndSpDeductionsItem6Holder = [];
    for (var key in NonTaxableAndSpDeductionsItem6) {
        var obj = '<listOfnonTaxableAndSpDeductionsItem6>' +
                      '<otherExpandableDesc>' + NonTaxableAndSpDeductionsItem6[key].otherExpandableDesc + '</otherExpandableDesc>' +
                      '<otherExpandableAmount>' + NonTaxableAndSpDeductionsItem6[key].otherExpandableAmount + '</otherExpandableAmount>' +
                      '<otherExpandableAmountSpecial>' + NonTaxableAndSpDeductionsItem6[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>' +
                      '<otherExpandableAmountRegular>' + NonTaxableAndSpDeductionsItem6[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>' +
                      '<otherExpandableAmountTotal>' + NonTaxableAndSpDeductionsItem6[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>' +
                  '</listOfnonTaxableAndSpDeductionsItem6>';
        NonTaxableAndSpDeductionsItem6Holder.push(obj);
    }
    var reconcilationOfNetIncomeNonTaxableIncomeList = '';
    for (var key in NonTaxableAndSpDeductionsItem6Holder) {
        reconcilationOfNetIncomeNonTaxableIncomeList += NonTaxableAndSpDeductionsItem6Holder[key];
    }



    var NonTaxableAndSpDeductionsItem8Holder = [];
    for (var key in NonTaxableAndSpDeductionsItem8) {
        var obj = '<listOfSpecialDeductionsItem8>' +
                      '<otherExpandableDesc>' + NonTaxableAndSpDeductionsItem8[key].otherExpandableDesc + '</otherExpandableDesc>' +
                      '<otherExpandableAmount>' + NonTaxableAndSpDeductionsItem8[key].otherExpandableAmount + '</otherExpandableAmount>' +
                      '<otherExpandableAmountSpecial>' + NonTaxableAndSpDeductionsItem8[key].otherExpandableAmountSpecial + '</otherExpandableAmountSpecial>' +
                      '<otherExpandableAmountRegular>' + NonTaxableAndSpDeductionsItem8[key].otherExpandableAmountRegular + '</otherExpandableAmountRegular>' +
                      '<otherExpandableAmountTotal>' + NonTaxableAndSpDeductionsItem8[key].otherExpandableAmountTotal + '</otherExpandableAmountTotal>' +
                  '</listOfSpecialDeductionsItem8>';
        NonTaxableAndSpDeductionsItem8Holder.push(obj);
    }
    var reconcilationOfNetIncomeSpecialDeductionsList = '';
    for (var key in NonTaxableAndSpDeductionsItem8Holder) {
        reconcilationOfNetIncomeSpecialDeductionsList += NonTaxableAndSpDeductionsItem8Holder[key];
    }

    var balanceSheet = '<balanceSheet> \
					    	<currentAssests>'+ BalanceSheet.currentAssests + '</currentAssests> \
					    	<longTermInvestment>'+ BalanceSheet.longTermInvestment + '</longTermInvestment> \
					    	<propertyPlantEquipmentNet>'+ BalanceSheet.propertyPlantEquipmentNet + '</propertyPlantEquipmentNet> \
					    	<longTermReceivables>'+ BalanceSheet.longTermReceivables + '</longTermReceivables> \
					    	<intangibleAssets>'+ BalanceSheet.intangibleAssets + '</intangibleAssets> \
					    	<otherAssets>'+ BalanceSheet.otherAssets + '</otherAssets> \
					    	<totalAssets>'+ BalanceSheet.totalAssets + '</totalAssets> \
					    	<currentLiabilities>'+ BalanceSheet.currentLiabilities + '</currentLiabilities> \
					    	<longTermLiabilities>'+ BalanceSheet.longTermLiabilities + '</longTermLiabilities> \
					    	<deferedCredits>'+ BalanceSheet.deferedCredits + '</deferedCredits> \
					    	<otherLiabilities>'+ BalanceSheet.otherLiabilities + '</otherLiabilities> \
					    	<totalLiabilities>'+ BalanceSheet.totalLiabilities + '</totalLiabilities> \
					    	<capitalStock>'+ BalanceSheet.capitalStock + '</capitalStock> \
					    	<additionalPaidInCapital>'+ BalanceSheet.additionalPaidInCapital + '</additionalPaidInCapital> \
					    	<retainedEarnings>'+ BalanceSheet.retainedEarnings + '</retainedEarnings> \
					    	<totalEquity>'+ BalanceSheet.totalEquity + '</totalEquity> \
					    	<totalLiabilitiesEquity>'+ BalanceSheet.totalLiabilitiesEquity + '</totalLiabilitiesEquity> \
					    	<beginningCapital>'+ BalanceSheet.beginningCapital + '</beginningCapital> \
					    	<netIncomeForTheYear>'+ BalanceSheet.netIncomeForTheYear + '</netIncomeForTheYear> \
					    	<drawings>'+ BalanceSheet.drawings + '</drawings> \
					    	<endingCapital>'+ BalanceSheet.endingCapital + '</endingCapital> \
					    	<totalLiabilitiesAndCapital>'+ BalanceSheet.totalLiabilitiesAndCapital + '</totalLiabilitiesAndCapital> \
					    </balanceSheet>';


    var StockholdersListHolder = [];
    for (var key in StockholdersList) {
        var obj = '<listSched11AdditionalAttachments>' +
                      '<registeredName>' + StockholdersList[key].registeredName + '</registeredName>' +
                      '<tin1>' + StockholdersList[key].tin1 + '</tin1>' +
                      '<tin2>' + StockholdersList[key].tin2 + '</tin2>' +
                      '<tin3>' + StockholdersList[key].tin3 + '</tin3>' +
                      '<branchCode>' + StockholdersList[key].branchCode + '</branchCode>' +
                      '<capitalContribution>' + StockholdersList[key].capitalContribution + '</capitalContribution>' +
                      '<percentToTotal>' + StockholdersList[key].percentToTotal + '</percentToTotal>' +
                  '</listSched11AdditionalAttachments>';
        StockholdersListHolder.push(obj);
    }
    var stockHoldersList = '';
    for (var key in StockholdersListHolder) {
        stockHoldersList += StockholdersListHolder[key];
    }



    var stockholders = '<stockholdersPartners> \
					    	<capitalContributorType>'+ Schedule12.capitalContributorType + '</capitalContributorType>'
					    	+ stockHoldersList
				    	+ '</stockholdersPartners>';


    var GrossIncomeSubjectToFinalWithholdingListHolder = [];
    for (var key in GrossIncomeSubjectToFinalWithholdingList) {
        var obj = '<otherGrossIncome>' +
                      '<otherGrossIncomeDesc>' + GrossIncomeSubjectToFinalWithholdingList[key].description + '</otherGrossIncomeDesc>' +
                      '<otherGrossIncomeType>' + GrossIncomeSubjectToFinalWithholdingList[key].type + '</otherGrossIncomeType>' +
                      '<otherGrossIncomeExempt>' + GrossIncomeSubjectToFinalWithholdingList[key].exempt + '</otherGrossIncomeExempt>' +
                      '<otherGrossIncomeActualAmt>' + GrossIncomeSubjectToFinalWithholdingList[key].amount + '</otherGrossIncomeActualAmt>' +
                      '<otherGrossIncomeFinalTaxWthldPd>' + GrossIncomeSubjectToFinalWithholdingList[key].finalTax + '</otherGrossIncomeFinalTaxWthldPd>' +
                  '</otherGrossIncome>';
        GrossIncomeSubjectToFinalWithholdingListHolder.push(obj);
    }
    var grossIncomeReceiptsSubjectToFinalWithholdingList;
    for (var key in GrossIncomeSubjectToFinalWithholdingListHolder) {
        grossIncomeReceiptsSubjectToFinalWithholdingList += GrossIncomeSubjectToFinalWithholdingListHolder[key];
    }



    var grossIncomeReceiptsSubjectToFinalWithholding = '<grossIncomeORReceiptsSubjectedToFinalWithholding> \
													    	<interestExempt>'+ Schedule13.interestExempt + '</interestExempt> \
													    	<interestsActualAmt>'+ Schedule13.interestsActualAmt + '</interestsActualAmt> \
													    	<interestsFinalTaxWthldPd>'+ Schedule13.interestsFinalTaxWthldPd + '</interestsFinalTaxWthldPd> \
													    	<royaltiesExempt>'+ Schedule13.royaltiesExempt + '</royaltiesExempt> \
													    	<royaltiesActualAmt>'+ Schedule13.royaltiesActualAmt + '</royaltiesActualAmt> \
													    	<royaltiesFinalTaxWthldPd>'+ Schedule13.royaltiesFinalTaxWthldPd + '</royaltiesFinalTaxWthldPd> \
													    	<dividendsExempt>'+ Schedule13.dividendsExempt + '</dividendsExempt> \
													    	<dividendsActualAmt>'+ Schedule13.dividendsActualAmt + '</dividendsActualAmt> \
													    	<dividendsFinalTaxWthldPd>'+ Schedule13.dividendsFinalTaxWthldPd + '</dividendsFinalTaxWthldPd> \
													    	<prizesWinningsExempt>'+ Schedule13.prizesWinningsExempt + '</prizesWinningsExempt> \
													    	<prizesWinningsActualAmt>'+ Schedule13.prizesWinningsActualAmt + '</prizesWinningsActualAmt> \
													    	<prizesWinningsFinalTaxWthldPd>'+ Schedule13.prizesWinningsFinalTaxWthldPd + '</prizesWinningsFinalTaxWthldPd>'
													    	+ grossIncomeReceiptsSubjectToFinalWithholdingList +
												    	'</grossIncomeORReceiptsSubjectedToFinalWithholding>';


    var RealPropertySaleListHolder = [];
    for (var key in RealPropertySaleList) {
        var obj = '<salesOrExchangeOfRealProperties>' +
                      '<propDescription>' + RealPropertySaleList[key].propDescription + '</propDescription>' +
                      '<taxDeclNo>' + RealPropertySaleList[key].taxDeclNo + '</taxDeclNo>' +
                      '<carNo>' + RealPropertySaleList[key].carNo + '</carNo>' +
                      '<actualAmount>' + RealPropertySaleList[key].actualAmount + '</actualAmount>' +
                      '<propertyTaxWithheld>' + RealPropertySaleList[key].propertyTaxWithheld + '</propertyTaxWithheld>' +
                  '</salesOrExchangeOfRealProperties>';
        RealPropertySaleListHolder.push(obj);
    }
    var salesExchangeOfRealPropertiesList = '';
    for (var key in RealPropertySaleListHolder) {
        salesExchangeOfRealPropertiesList += RealPropertySaleListHolder[key];
    }




    var StockShareSaleListHolder = [];
    for (var key in StockShareSaleList) {
        var obj = '<saleOrExchangeOfSharesOfStock>' +
                      '<stockKind>' + StockShareSaleList[key].stockKind + '</stockKind>' +
                      '<stockSeries>' + StockShareSaleList[key].stockKind + StockShareSaleList[key].stockSeries + '</stockSeries>' +
                      '<stockCARNo>' + StockShareSaleList[key].stockCARNo + '</stockCARNo>' +
                      '<numShares>' + StockShareSaleList[key].numShares + '</numShares>' +
                      '<dateIssued>' + StockShareSaleList[key].Issued + '</dateIssued>' +
                      '<stockActualAmount>' + StockShareSaleList[key].stockActualAmount + '</stockActualAmount>' +
                      '<stockTaxWithheld>' + StockShareSaleList[key].stockTaxWithheld + '</stockTaxWithheld>' +
                    '</saleOrExchangeOfSharesOfStock>';
        StockShareSaleListHolder.push(obj);
    }
    var salesExchangeOfSharesStockList;
    for (var key in StockShareSaleListHolder) {
        salesExchangeOfSharesStockList += StockShareSaleListHolder[key];
    }





    var OtherIncomeListHolder = [];
    for (var key in OtherIncomeList) {
        var obj = '<otherIncome>' +
                      '<otherIncome>' + OtherIncomeList[key].otherIncome + '</otherIncome>' +
                      '<actualAmount>' + OtherIncomeList[key].actualAmount + '</actualAmount>' +
                      '<otherIncomeTaxWithheld>' + OtherIncomeList[key].otherIncomeTaxWithheld + '</otherIncomeTaxWithheld>' +
                  '</otherIncome>';
        OtherIncomeListHolder.push(obj);
    }
    var otherIncomeList = '';
    for (var key in OtherIncomeListHolder) {
        otherIncomeList += OtherIncomeListHolder[key];
    }




    var grossIncomeReceiptsReturnOfPremium = '<taxpayerGrossIncomeExempt> \
										    	<returnOfPremium>'+ ReturnOfPremium.returnOfPremium + '</returnOfPremium> \
										    	<totalFinalTaxWithheldOrPaid>'+ ReturnOfPremium.totalFinalTaxWithheldOrPaid + '</totalFinalTaxWithheldOrPaid> \
										    </taxpayerGrossIncomeExempt>';


    var PersonalPropertyReceivedListHolder = [];
    for (var key in PersonalPropertyReceivedList) {
        var obj = '<personalPropertyReceived>' +
                      '<personalPropertyDesc>' + PersonalPropertyReceivedList[key].personalPropertyDesc + '</personalPropertyDesc>' +
                      '<personalPropertyTransferMode>' + PersonalPropertyReceivedList[key].personalPropertyTransferMode + '</personalPropertyTransferMode>' +
                      '<personalPropertyCARNo>' + PersonalPropertyReceivedList[key].personalPropertyCARNo + '</personalPropertyCARNo>' +
                      '<personalPropertyActualAmount>' + PersonalPropertyReceivedList[key].personalPropertyActualAmount + '</personalPropertyActualAmount>' +
                  '</personalPropertyReceived>';
        PersonalPropertyReceivedListHolder.push(obj);
    }
    var personalPropertyReceivedList = '';
    for (var key in PersonalPropertyReceivedListHolder) {
        personalPropertyReceivedList += PersonalPropertyReceivedListHolder[key];
    }




    var OtherExemptIncomeListHolder = [];
    for (var key in OtherExemptIncomeList) {
        var obj = '<otherExemptIncome>' +
                      '<otherIncome>' + OtherExemptIncomeList[key].otherIncome + '</otherIncome>' +
                      '<actualAmount>' + OtherExemptIncomeList[key].actualAmount + '</actualAmount>' +
                  '</otherExemptIncome>';
        OtherExemptIncomeListHolder.push(obj);
    }
    var otherExemptIncomeList = '';
    for (var key in OtherExemptIncomeListHolder) {
        otherExemptIncomeList += OtherExemptIncomeListHolder[key];
    }

    //alert(totalTaxPayable);
    //alert(basisOfTaxRelief);
    //alert(computationOfAmountPayablePerTaxRegime);
    //alert(externalAuditorAccreditedTaxAgent);
    //alert(computationOfTaxPerTaxRegime.substring(2300));
    //alert(taxReliefAvailment);
    //alert(salesRevenueReceipts);
    //alert(costOfSales);
    //alert(otherTaxableIncomeNotSubjectedToFinalTax);
    //alert(otherTaxableIncomeNotSubjectToFinalTaxList);
    //alert(ordinaryAllowableItemizedDeductions);
    //alert(otherAmortizationsList);
    //alert(othersOrdinaryAllowableItemizedDeductionsList);
    //alert(specialAllowableItemizedDeductions);
    //alert(otherSpecialAllowableItemizedDeductionList);
    //alert(otherSpecialAllowableItemizedDeductionList);
    //alert(computationOfNOLCO);
    //alert(taxCreditsPayments);
    //alert(otherTaxCreditPaymentsList);
    //alert(computationOfMCIT);
    //alert(reconcilationOfNetIncomeTax);
    //alert(reconcilationOfNetIncomeNonDeductibleExpenseList);
    //alert(reconcilationOfNetIncomeNonTaxableIncomeList);
    //alert(reconcilationOfNetIncomeSpecialDeductionsList);
    //alert(balanceSheet);
    //alert(stockholders);
    //alert(grossIncomeReceiptsSubjectToFinalWithholding);
    //alert(salesExchangeOfRealPropertiesList);
    //alert(salesExchangeOfSharesStockList);
    //alert(otherIncomeList);
    //alert(grossIncomeReceiptsReturnOfPremium);
    //alert(personalPropertyReceivedList);
    //alert(otherExemptIncomeList);
    //alert(taxRegime);
    //alert(taxPayerActivityForTaxReliefScheduleA);
    //alert(computationOfIncomeTaxScheduleB);
    //alert(taxReliefAvailmentScheduleC);
    //alert(salesRevenueScheduleD);
    //alert(costOfSaleScheduleE1);
    //alert(otherTaxableIncomeNotSubjectedToFinalTaxScheduleF);
    //alert(ordinaryAllowableItemizedDeductionScheduleG);
    //alert(specialAllowableItemizedDeductionsAttachmentScheduleH);
    //alert(computationOfNetOperatingLossCarryOverScheduleI);

    var footer = '</formBean> \
				</ws:submitForm1702MX> \
				   </soapenv:Body> \
				</soapenv:Envelope>';

    var listObjectAttachmentsHolder = "";
    for (var key in listAttachmentsHolder) {
        listObjectAttachmentsHolder += listAttachmentsHolder[key];
    }

    //console.log(SpecialAllowableItemizedDeduction.specialAllowableDesc);
    //console.log(otherTaxableIncomeNotSubjectedToFinalTax + otherTaxableIncomeNotSubjectToFinalTaxList);
    return header + openForm + taxpayer + totalTaxPayable + basisOfTaxRelief + computationOfAmountPayablePerTaxRegime +
    		externalAuditorAccreditedTaxAgent + computationOfTaxPerTaxRegime + taxReliefAvailment + salesRevenueReceipts +
    		costOfSales + otherTaxableIncomeNotSubjectedToFinalTax + otherTaxableIncomeNotSubjectToFinalTaxList +
    		ordinaryAllowableItemizedDeductions + otherAmortizationsList + othersOrdinaryAllowableItemizedDeductionsList +
    		specialAllowableItemizedDeductions + otherSpecialAllowableItemizedDeductionList + computationOfNOLCO +
    		taxCreditsPayments + otherTaxCreditPaymentsList + computationOfMCIT + reconcilationOfNetIncomeTax +
    		reconcilationOfNetIncomeNonDeductibleExpenseList + reconcilationOfNetIncomeNonTaxableIncomeList +
    		reconcilationOfNetIncomeSpecialDeductionsList + balanceSheet + stockholders + grossIncomeReceiptsSubjectToFinalWithholding +
    		salesExchangeOfRealPropertiesList + salesExchangeOfSharesStockList + otherIncomeList + grossIncomeReceiptsReturnOfPremium +
    		personalPropertyReceivedList + otherExemptIncomeList + listObjectAttachmentsHolder + footer;
}

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

    //Page 1
    Taxpayer = {};
    TotalTaxPayable = {};

    // PAGE 2
    TaxpayerActivityForTaxReliefExempt = {};
    TaxpayerActivityForTaxReliefSpecial = {};
    TaxpayerActivityForTaxReliefSpecialTaxRelief = {};
    ComputationOfAmountPayablePerTaxRegime = {};
    ExternalAudtiorAccreditedTaxAgent = {};

    // PAGE 3
    ComputationOfTaxPerTaxRegime = {};
    TaxReliefAvailment = {};

    // PAGE 4
    SalesRevenueExempt = {};
    SalesRevenueSpecial = {};
    SalesRevenueRegular = {};
    SalesRevenueTotal = {};

    CostOfSalesExempt = {};
    CostOfSalesSpecial = {};
    CostOfSalesRegular = {};
    CostOfSalesTotal = {};

    // PAGE 5
    OtherTaxableIncomeNotSubjectedToFinalTaxExempt = {};
    OtherTaxableIncomeNotSubjectedToFinalTaxSpecial = {};
    OtherTaxableIncomeNotSubjectedToFinalTaxRegular = {};
    OtherTaxableIncomeNotSubjectedToFinalTaxTotal = {};

    OtherTaxableIncomeNotSubjectedToFinalTaxSched4 = {};
    OtherTaxableIncomeNotSubjectToFinalTaxValue = [];

    // schedule 5
    ExemptOrdinaryAllowableItemizedDeductions = {};
    SpecialOrdinaryAllowableItemizedDeductions = {};
    RegularOrdinaryAllowableItemizedDeductions = {};
    TotalOrdinaryAllowableItemizedDeductions = {};

    OtherAmortizationsSched5 = {};
    OtherAmortizationsList = [];

    OtherItemizedDeductionsSched5 = {};
    OtherItemizedDeductionsList = [];

    // PAGE 6 Schedule 6
    SpecialAllowableItemizedDeduction = {};
    OtherSpecialDeduction = {};
    OtherSpecialDeductionList = [];

    // Schedule 7
    ComputationOfNetOperatingLossCarryOver = {};

    // Schedule 8
    TaxCreditPaymentExempt = {};
    TaxCreditPaymentSpecial = {};
    TaxCreditPaymentRegular = {};
    TaxCreditPaymentTotal = {};

    OtherCreditsSched8 = {};
    OtherCredits = [];

    // PAGE 7 Schedule 9
    ComputationOfMinimumCorporateIncomeTax = {};

    // Schedule 10
    ReconcilationOfNetIncomeExempt = {};
    ReconcilationOfNetIncomeSpecial = {};
    ReconcilationOfNetIncomeRegular = {};
    ReconcilationOfNetIncomeTotal = {};

    NonDeductibleExpenseSched10 = {};
    NonDeductibleExpense = [];

    NonTaxableAndSpDeductionsSched10 = {};
    NonTaxableAndSpDeductionsItem6 = [];

    NonTaxableAndSpDeductionsItem8Sched10 = {};
    NonTaxableAndSpDeductionsItem8 = [];

    // PAGE 8 Schedule 11
    BalanceSheet = {};
    // Schedule 12
    Schedule12 = {};
    Stockholders = {};
    StockholdersList = [];

    // PAGE 9 Schedule 13I
    Schedule13 = {};
    GrossIncomeSubjectToFinalWithholding = {};
    GrossIncomeSubjectToFinalWithholdingList = [];

    // Schedule 13II
    RealPropertySale = {};
    RealPropertySaleList = [];

    // Schedule 13III
    StockShareSale = {};
    StockShareSaleList = [];

    // Schedule 13IV
    OtherIncome = {};
    OtherIncomeList = [];

    // Schedule 14
    ReturnOfPremium = {};

    // Schedule 14I
    PersonalPropertyReceived = {};
    PersonalPropertyReceivedList = [];

    // Schedule 14II
    OtherExemptIncome = {};
    OtherExemptIncomeList = [];

    // Attachments
    TaxRegime = {};
    ScheduleA = {};
    ScheduleB = {};
    ScheduleC = {};
    ScheduleD = {};
    ScheduleE1 = {};

    ScheduleF = {};
    OtherTaxableIncomeNotSubjectToFinalTax = {};
    OtherTaxableIncomeNotSubjectToFinalTaxList = [];

    ScheduleG = {};
    Amortization = {};
    AmortizationList = [];
    Others = {};
    OtherList = [];

    ScheduleH = {};
    SpecialAllowableItemizedDeductions = {};
    SpecialAllowableItemizedDeductionsList = [];

    ScheduleI = {};

    listAttachmentsHolder = [];
    attach = "";
}


function generateAttachmentXML() {
    var taxRegime = '<attachments> \
					    <taxRegime>'+ TaxRegime.taxRegime + '</taxRegime>';

    var taxPayerActivityForTaxReliefScheduleA = '<taxPayerActivityForTaxRelief> \
											    	<investmentPromotionAgency>'+ ScheduleA.investmentPromotionAgency + '</investmentPromotionAgency> \
											    	<legalBasis>'+ ScheduleA.legalBasis + '</legalBasis> \
											    	<registeredActivityProgram>'+ ScheduleA.registeredActivityProgram + '</registeredActivityProgram> \
											    	<specialTaxRate>'+ ScheduleA.specialTaxRate + '</specialTaxRate> \
											    	<effectivityDateFrom>'+ ScheduleA.effectivityDateFrom + '</effectivityDateFrom> \
											    	<effectivityDateTo>'+ ScheduleA.effectivityDateTo + '</effectivityDateTo> \
											    </taxPayerActivityForTaxRelief>';

    var computationOfIncomeTaxScheduleB = '<computationOfIncomeTaxMX> \
										    	<netSalesRevenuesReceiptsFeesExempt>'+ ScheduleB.netSalesRevenuesReceiptsFeesExempt + '</netSalesRevenuesReceiptsFeesExempt> \
										    	<costOfSalesServiceslExempt>'+ ScheduleB.costOfSalesServiceslExempt + '</costOfSalesServiceslExempt> \
										    	<grossIncomeFromOperationExempt>'+ ScheduleB.grossIncomeFromOperationExempt + '</grossIncomeFromOperationExempt> \
										    	<otherTaxableIncomeNotSubjectedExempt>'+ ScheduleB.otherTaxableIncomeNotSubjectedExempt + '</otherTaxableIncomeNotSubjectedExempt> \
										    	<totalGrossIncomeGrossTaxableIncomeExempt>'+ ScheduleB.totalGrossIncomeGrossTaxableIncomeExempt + '</totalGrossIncomeGrossTaxableIncomeExempt> \
										    	<ordinaryAllowableIemizedDeducExempt>'+ ScheduleB.ordinaryAllowableIemizedDeducExempt + '</ordinaryAllowableIemizedDeducExempt> \
										    	<specialAllowableItemizedDeducExempt>'+ ScheduleB.specialAllowableItemizedDeducExempt + '</specialAllowableItemizedDeducExempt> \
										    	<nolcoExempt>'+ ScheduleB.nolcoExempt + '</nolcoExempt> \
										    	<totalItemizedDeductionExempt>'+ ScheduleB.totalItemizedDeductionExempt + '</totalItemizedDeductionExempt> \
										    	<netTaxableIncomeNetIncomeExempt>'+ ScheduleB.netTaxableIncomeNetIncomeExempt + '</netTaxableIncomeNetIncomeExempt> \
										    	<applicableIncomeTaxRateExempt>'+ ScheduleB.applicableIncomeTaxRateExempt + '</applicableIncomeTaxRateExempt> \
										    	<totalIncomeTaxDueSched1Special>'+ ScheduleB.totalIncomeTaxDueSched1Special + '</totalIncomeTaxDueSched1Special> \
										    </computationOfIncomeTaxMX>';

    var taxReliefAvailmentScheduleC = '<taxReliefAvailment> \
									    	<netIncome>'+ ScheduleC.netIncome + '</netIncome> \
									    	<specialAllowableItemizedDeductions>'+ ScheduleC.specialAllowableItemizedDeductions + '</specialAllowableItemizedDeductions> \
									    	<subTotal>'+ ScheduleC.subTotal + '</subTotal> \
									    	<incomeTaxDue>'+ ScheduleC.incomeTaxDue + '</incomeTaxDue> \
									    	<beforeSpecialTaxCredits>'+ ScheduleC.beforeSpecialTaxCredits + '</beforeSpecialTaxCredits> \
									    	<specialTaxCredits>'+ ScheduleC.specialTaxCredits + '</specialTaxCredits> \
									    	<totalTaxReliefAvailments>'+ ScheduleC.totalTaxReliefAvailments + '</totalTaxReliefAvailments> \
									   </taxReliefAvailment>';

    var salesRevenueScheduleD = '<salesRevenue> \
							    	<taxWthldGoods>'+ ScheduleD.taxWthldGoods + '</taxWthldGoods> \
							    	<taxWthldServices>'+ ScheduleD.taxWthldServices + '</taxWthldServices> \
							    	<taxWthldLease>'+ ScheduleD.taxWthldLease + '</taxWthldLease> \
							    	<taxWthldTotal>'+ ScheduleD.taxWthldTotal + '</taxWthldTotal> \
							    	<salesReturns>'+ ScheduleD.salesReturns + '</salesReturns> \
							    	<netSalesSched1>'+ ScheduleD.netSalesSched1 + '</netSalesSched1> \
							    </salesRevenue>';

    var costOfSaleScheduleE1 = '<costOfSale> \
							    	<goodsInvBeg>'+ ScheduleE1.goodsInvBeg + '</goodsInvBeg> \
							    	<purGoods>'+ ScheduleE1.purGoods + '</purGoods> \
							    	<goodsAvail>'+ ScheduleE1.goodsAvail + '</goodsAvail> \
							    	<goodsInvEnd>'+ ScheduleE1.goodsInvEnd + '</goodsInvEnd> \
							    	<costSales>'+ ScheduleE1.costSales + '</costSales> \
							    	<directMatsBeg>'+ ScheduleE1.directMatsBeg + '</directMatsBeg> \
							    	<purDirectMats>'+ ScheduleE1.purDirectMats + '</purDirectMats> \
							    	<matsAvail>'+ ScheduleE1.matsAvail + '</matsAvail> \
							    	<directMatsEnd>'+ ScheduleE1.directMatsEnd + '</directMatsEnd> \
							    	<rawMats>'+ ScheduleE1.rawMats + '</rawMats> \
							    	<directLabor>'+ ScheduleE1.directLabor + '</directLabor> \
							    	<manufacturingOverhead>'+ ScheduleE1.manufacturingOverhead + '</manufacturingOverhead> \
							    	<totalManufacturingCost>'+ ScheduleE1.totalManufacturingCost + '</totalManufacturingCost> \
							    	<workInProgressBeg>'+ ScheduleE1.workInProgressBeg + '</workInProgressBeg> \
							    	<winProgressEnd>'+ ScheduleE1.winProgressEnd + '</winProgressEnd> \
							    	<costGoodsManufactured>'+ ScheduleE1.costGoodsManufactured + '</costGoodsManufactured> \
							    	<finishedGoodsBeg>'+ ScheduleE1.finishedGoodsBeg + '</finishedGoodsBeg> \
							    	<finishedGoodsEnd>'+ ScheduleE1.finishedGoodsEnd + '</finishedGoodsEnd> \
							    	<totalCostGoodsManufacturedAndSold>'+ ScheduleE1.totalCostGoodsManufacturedAndSold + '</totalCostGoodsManufacturedAndSold> \
							    	<salaries>'+ ScheduleE1.salaries + '</salaries> \
							    	<materials>'+ ScheduleE1.materials + '</materials> \
							    	<sched2CDepreciation>'+ ScheduleE1.sched2CDepreciation + '</sched2CDepreciation> \
							    	<sched2CRental>'+ ScheduleE1.sched2CRental + '</sched2CRental> \
							    	<outsideServ>'+ ScheduleE1.outsideServ + '</outsideServ> \
							    	<others>'+ ScheduleE1.others + '</others> \
							    	<costService>'+ ScheduleE1.costService + '</costService> \
							    	<totalCostSalesAndServices>'+ ScheduleE1.totalCostSalesAndServices + '</totalCostSalesAndServices> \
							    </costOfSale>';

    var OtherTaxableIncomeNotSubjectToFinalTaxListHolder = [];
    for (var key in OtherTaxableIncomeNotSubjectToFinalTaxList) {
        var obj = '<otherTaxableIncomeNotSubjectToFinalTaxValue>' +
			      	'<otherExpandableDesc>' + OtherTaxableIncomeNotSubjectToFinalTaxList[key].description + '</otherExpandableDesc>' +
			      	'<otherExpandableAmount>' + OtherTaxableIncomeNotSubjectToFinalTaxList[key].amount + '</otherExpandableAmount>' +
			      '</otherTaxableIncomeNotSubjectToFinalTaxValue>';
        OtherTaxableIncomeNotSubjectToFinalTaxListHolder.push(obj);
    }

    var otherTaxableIncomeNotSubjectedToFinalTaxScheduleFList = '';
    for (var key in OtherTaxableIncomeNotSubjectToFinalTaxListHolder) {
        otherTaxableIncomeNotSubjectedToFinalTaxScheduleFList += OtherTaxableIncomeNotSubjectToFinalTaxListHolder[key];
    }

    var otherTaxableIncomeNotSubjectedToFinalTaxScheduleF = '<otherTaxableIncomeNotSubjectedToFinalTax> \
														    	<otherTaxableIncomeNotSubjectToFinalTaxDescFirst>'+ ScheduleF.otherTaxableIncomeNotSubjectToFinalTaxDescFirst + '</otherTaxableIncomeNotSubjectToFinalTaxDescFirst> \
														    	<otherTaxableIncomeNotSubjectToFinalTaxDescSecond>'+ ScheduleF.otherTaxableIncomeNotSubjectToFinalTaxDescSecond + '</otherTaxableIncomeNotSubjectToFinalTaxDescSecond> \
														    	<otherTaxableIncomeNotSubjectToFinalTaxDescThird>'+ ScheduleF.otherTaxableIncomeNotSubjectToFinalTaxDescThird + '</otherTaxableIncomeNotSubjectToFinalTaxDescThird> \
														    	<otherTaxableIncomeNotSubjectToFinalTaxValueFirst>'+ ScheduleF.otherTaxableIncomeNotSubjectToFinalTaxValueFirst + '</otherTaxableIncomeNotSubjectToFinalTaxValueFirst> \
														    	<otherTaxableIncomeNotSubjectToFinalTaxValueSecond>'+ ScheduleF.otherTaxableIncomeNotSubjectToFinalTaxValueSecond + '</otherTaxableIncomeNotSubjectToFinalTaxValueSecond> \
														    	<otherTaxableIncomeNotSubjectToFinalTaxValueThird>'+ ScheduleF.otherTaxableIncomeNotSubjectToFinalTaxValueThird + '</otherTaxableIncomeNotSubjectToFinalTaxValueThird> \
														    	<otherTaxableIncomeNotSubjectToFinalTaxValueTotal>'+ ScheduleF.otherTaxableIncomeNotSubjectToFinalTaxValueTotal + '</otherTaxableIncomeNotSubjectToFinalTaxValueTotal>';

    var AmortizationListHolder = [];
    for (var key in AmortizationList) {
        var obj = '<listAmortizations>' +
			      	'<otherExpandableDesc>' + AmortizationList[key].description + '</otherExpandableDesc>' +
			      	'<otherExpandableAmount>' + AmortizationList[key].amount + '</otherExpandableAmount>' +
			      '</listAmortizations>';
        AmortizationListHolder.push(obj);
    }

    var otherAmortizationScheduleGList = '';
    for (var key in AmortizationListHolder) {
        otherAmortizationScheduleGList += AmortizationListHolder[key];
    }

    var OtherListHolder = [];
    for (var key in OtherList) {
        var obj = '<listOtherOrdinaryItemizedDeductions>' +
			      	'<otherExpandableDesc>' + OtherList[key].description + '</otherExpandableDesc>' +
			      	'<otherExpandableAmount>' + OtherList[key].amount + '</otherExpandableAmount>' +
			      '</listOtherOrdinaryItemizedDeductions>';
        OtherListHolder.push(obj);
    }

    var otherOrdinaryAllowableItemizedDeductionScheduleGList = '';
    for (var key in OtherListHolder) {
        otherOrdinaryAllowableItemizedDeductionScheduleGList += OtherListHolder[key];
    }

    var ordinaryAllowableItemizedDeductionScheduleG = '</otherTaxableIncomeNotSubjectedToFinalTax> \
    													<ordinaryAllowableItemizedDeduction> \
													    	<adAndPromotionsVal>'+ ScheduleG.adAndPromotionsVal + '</adAndPromotionsVal> \
													    	<amortizatiosDescSecond>'+ ScheduleG.amortizatiosDescSecond + '</amortizatiosDescSecond> \
													    	<amortizatiosDescThird>'+ ScheduleG.amortizatiosDescThird + '</amortizatiosDescThird> \
													    	<amortizatiosDescFourth>'+ ScheduleG.amortizatiosDescFourth + '</amortizatiosDescFourth> \
													    	<amortizatiosValSecond>'+ ScheduleG.amortizatiosValSecond + '</amortizatiosValSecond> \
													    	<amortizatiosValThird>'+ ScheduleG.amortizatiosValThird + '</amortizatiosValThird> \
													    	<amortizatiosValFourth>'+ ScheduleG.amortizatiosValFourth + '</amortizatiosValFourth>';

    var ordinaryAllowableItemizedDeductionScheduleGPart2 = '<badDebts>' + ScheduleG.badDebts + '</badDebts> \
													    	<charitableContributions>'+ ScheduleG.charitableContributions + '</charitableContributions> \
													    	<commissions>'+ ScheduleG.commissions + '</commissions> \
													    	<communicationLightWater>'+ ScheduleG.communicationLightWater + '</communicationLightWater> \
													    	<utilities>'+ ScheduleG.utilities + '</utilities> \
													    	<depletion>'+ ScheduleG.depletion + '</depletion> \
													    	<depreciation>'+ ScheduleG.depreciation + '</depreciation> \
													    	<directorFee>'+ ScheduleG.directorFee + '</directorFee> \
													    	<fringeBenefits>'+ ScheduleG.fringeBenefits + '</fringeBenefits> \
													    	<fuelAndOil>'+ ScheduleG.fuelAndOil + '</fuelAndOil> \
													    	<insurance>'+ ScheduleG.insurance + '</insurance> \
													    	<iterest>'+ ScheduleG.iterest + '</iterest> \
													    	<janitorialAndMessengerial>'+ ScheduleG.janitorialAndMessengerial + '</janitorialAndMessengerial> \
													    	<losses>'+ ScheduleG.losses + '</losses> \
													    	<mgmtAndConsultancyFee>'+ ScheduleG.mgmtAndConsultancyFee + '</mgmtAndConsultancyFee> \
													    	<misc>'+ ScheduleG.misc + '</misc> \
													    	<officeSupplies>'+ ScheduleG.officeSupplies + '</officeSupplies> \
													    	<otherServices>'+ ScheduleG.otherServices + '</otherServices> \
													    	<professionalFees>'+ ScheduleG.professionalFees + '</professionalFees> \
													    	<schedGRental>'+ ScheduleG.schedGRental + '</schedGRental> \
													    	<repairLabor>'+ ScheduleG.repairLabor + '</repairLabor> \
													    	<repairMaterials>'+ ScheduleG.repairMaterials + '</repairMaterials> \
													    	<entertainment>'+ ScheduleG.entertainment + '</entertainment> \
													    	<researchAndDev>'+ ScheduleG.researchAndDev + '</researchAndDev> \
													    	<royalties>'+ ScheduleG.royalties + '</royalties> \
													    	<salariesAndAllownces>'+ ScheduleG.salariesAndAllownces + '</salariesAndAllownces> \
													    	<securityServices>'+ ScheduleG.securityServices + '</securityServices> \
													    	<otherContributions>'+ ScheduleG.otherContributions + '</otherContributions> \
													    	<taxesAndLiscenses>'+ ScheduleG.taxesAndLiscenses + '</taxesAndLiscenses> \
													    	<tollingFees>'+ ScheduleG.tollingFees + '</tollingFees> \
													    	<trainingsAndSeminars>'+ ScheduleG.trainingsAndSeminars + '</trainingsAndSeminars> \
													    	<travelTransportaion>'+ ScheduleG.travelTransportaion + '</travelTransportaion> \
													    	<othersFirstDescFirst>'+ ScheduleG.othersFirstDescFirst + '</othersFirstDescFirst> \
													    	<othersFirstDescSecond>'+ ScheduleG.othersFirstDescSecond + '</othersFirstDescSecond> \
													    	<othersFirstDescThird>'+ ScheduleG.othersFirstDescThird + '</othersFirstDescThird> \
													    	<othersFirstDescfourth>'+ ScheduleG.othersFirstDescfourth + '</othersFirstDescfourth> \
													    	<otherFirstValue>'+ ScheduleG.otherFirstValue + '</otherFirstValue> \
													    	<otherSecondValue>'+ ScheduleG.otherSecondValue + '</otherSecondValue> \
													    	<otherThirdValue>'+ ScheduleG.otherThirdValue + '</otherThirdValue> \
													    	<otherFourthValue>'+ ScheduleG.otherFourthValue + '</otherFourthValue>';

    var SpecialAllowableItemizedDeductionsListHolder = [];
    for (var key in SpecialAllowableItemizedDeductionsList) {
        var obj = '<otherSpecialAllowableItemizedDeductionAttachment>' +
			      	'<legalBasis>' + SpecialAllowableItemizedDeductionsList[key].description + '</legalBasis>' +
			      	'<description>' + SpecialAllowableItemizedDeductionsList[key].legalBasis + '</description>' +
			      	'<value>' + SpecialAllowableItemizedDeductionsList[key].amount + '</value>' +
			      '</otherSpecialAllowableItemizedDeductionAttachment>';
        SpecialAllowableItemizedDeductionsListHolder.push(obj);
    }

    var specialAllowableItemizedDeductionsAttachmentScheduleHList = '';
    for (var key in SpecialAllowableItemizedDeductionsListHolder) {
        specialAllowableItemizedDeductionsAttachmentScheduleHList += SpecialAllowableItemizedDeductionsListHolder[key];
    }

    var specialAllowableItemizedDeductionsAttachmentScheduleH = '<totalOrdinaryAllowableItemizedDeductions>' + ScheduleG.totalOrdinaryAllowableItemizedDeductions + '</totalOrdinaryAllowableItemizedDeductions> \
																</ordinaryAllowableItemizedDeduction> \
    															<specialAllowableItemizedDeductionsAttachment> \
															    	<specialAllowableDesc>'+ ScheduleH.specialAllowableItemizedDeductionsDescription1 + '</specialAllowableDesc> \
															    	<specialAllowableLegalBasis>'+ ScheduleH.specialAllowableItemizedDeductionsLegalBasis1 + '</specialAllowableLegalBasis> \
															    	<specialAllowable>'+ ScheduleH.specialAllowableItemizedDeductionsAmount1 + '</specialAllowable> \
															    	<specialAllowabaaleDesc2nd>'+ ScheduleH.specialAllowableItemizedDeductionsDescription2 + '</specialAllowabaaleDesc2nd> \
															    	<specialAllowableLegalBasis2nd>'+ ScheduleH.specialAllowableItemizedDeductionsLegalBasis2 + '</specialAllowableLegalBasis2nd> \
															    	<specialAllowable2nd>'+ ScheduleH.specialAllowableItemizedDeductionsAmount2 + '</specialAllowable2nd> \
															    	<specialAllowableDesc3rd>'+ ScheduleH.specialAllowableItemizedDeductionsDescription3 + '</specialAllowableDesc3rd> \
															    	<specialAllowableLegalBasis3rd>'+ ScheduleH.specialAllowableItemizedDeductionsLegalBasis3 + '</specialAllowableLegalBasis3rd> \
															    	<specialAllowable3rd>'+ ScheduleH.specialAllowableItemizedDeductionsAmount3 + '</specialAllowable3rd> \
															    	<specialAllowableDescFourth>'+ ScheduleH.specialAllowableItemizedDeductionsDescription4 + '</specialAllowableDescFourth> \
															    	<specialAllowableLegalBasisFourth>'+ ScheduleH.specialAllowableItemizedDeductionsLegalBasis4 + '</specialAllowableLegalBasisFourth> \
															    	<specialAllowableFourth>'+ ScheduleH.specialAllowableItemizedDeductionsAmount4 + '</specialAllowableFourth>'
															    	+ specialAllowableItemizedDeductionsAttachmentScheduleHList +
															    '</specialAllowableItemizedDeductionsAttachment>';

    var computationOfNetOperatingLossCarryOverScheduleI = '<computationOfNetOperatingLossCarryOver> \
														    	<grossIncome>'+ ScheduleI.grossIncome + '</grossIncome> \
														    	<lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw>'+ ScheduleI.lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw + '</lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw> \
														    	<netOperatingLoss>'+ ScheduleI.netOperatingLoss + '</netOperatingLoss> \
														    	<netOperatingLossYearIncurred1>'+ ScheduleI.netOperatingLossYearIncurred1 + '</netOperatingLossYearIncurred1> \
														    	<netOperatingLossYearIncurred2>'+ ScheduleI.netOperatingLossYearIncurred2 + '</netOperatingLossYearIncurred2> \
														    	<netOperatingLossYearIncurred3>'+ ScheduleI.netOperatingLossYearIncurred3 + '</netOperatingLossYearIncurred3> \
														    	<netOperatingLossYearIncurred4>'+ ScheduleI.netOperatingLossYearIncurred4 + '</netOperatingLossYearIncurred4> \
														    	<netOperatingLossAmount1>'+ ScheduleI.netOperatingLossAmount1 + '</netOperatingLossAmount1> \
														    	<netOperatingLossAmount2>'+ ScheduleI.netOperatingLossAmount2 + '</netOperatingLossAmount2> \
														    	<netOperatingLossAmount3>'+ ScheduleI.netOperatingLossAmount3 + '</netOperatingLossAmount3> \
														    	<netOperatingLossAmount4>'+ ScheduleI.netOperatingLossAmount4 + '</netOperatingLossAmount4> \
														    	<NOLCOAppliedPreviousYear1>'+ ScheduleI.NOLCOAppliedPreviousYear1 + '</NOLCOAppliedPreviousYear1> \
														    	<NOLCOAppliedPreviousYear2>'+ ScheduleI.NOLCOAppliedPreviousYear2 + '</NOLCOAppliedPreviousYear2> \
														    	<NOLCOAppliedPreviousYear3>'+ ScheduleI.NOLCOAppliedPreviousYear3 + '</NOLCOAppliedPreviousYear3> \
														    	<NOLCOAppliedPreviousYear4>'+ ScheduleI.NOLCOAppliedPreviousYear4 + '</NOLCOAppliedPreviousYear4> \
														    	<NOLCOExpired1>'+ ScheduleI.NOLCOExpired1 + '</NOLCOExpired1> \
														    	<NOLCOExpired2>'+ ScheduleI.NOLCOExpired2 + '</NOLCOExpired2> \
														    	<NOLCOExpired3>'+ ScheduleI.NOLCOExpired3 + '</NOLCOExpired3> \
														    	<NOLCOExpired4>'+ ScheduleI.NOLCOExpired4 + '</NOLCOExpired4> \
														    	<NOLCOAppliedCurrentYear1>'+ ScheduleI.NOLCOAppliedCurrentYear1 + '</NOLCOAppliedCurrentYear1> \
														    	<NOLCOAppliedCurrentYear2>'+ ScheduleI.NOLCOAppliedCurrentYear2 + '</NOLCOAppliedCurrentYear2> \
														    	<NOLCOAppliedCurrentYear3>'+ ScheduleI.NOLCOAppliedCurrentYear3 + '</NOLCOAppliedCurrentYear3> \
														    	<NOLCOAppliedCurrentYear4>'+ ScheduleI.NOLCOAppliedCurrentYear4 + '</NOLCOAppliedCurrentYear4> \
														    	<netOperatingLossUnapplied1>'+ ScheduleI.netOperatingLossUnapplied1 + '</netOperatingLossUnapplied1> \
														    	<netOperatingLossUnapplied2>'+ ScheduleI.netOperatingLossUnapplied2 + '</netOperatingLossUnapplied2> \
														    	<netOperatingLossUnapplied3>'+ ScheduleI.netOperatingLossUnapplied3 + '</netOperatingLossUnapplied3> \
														    	<netOperatingLossUnapplied4>'+ ScheduleI.netOperatingLossUnapplied4 + '</netOperatingLossUnapplied4> \
														    	<totalNOLCO>'+ ScheduleI.totalNOLCO + '</totalNOLCO> \
														    </computationOfNetOperatingLossCarryOver>';
    var closeForm = '</attachments>';

    // alert(taxRegime);
    // alert(taxPayerActivityForTaxReliefScheduleA);
    // alert(computationOfIncomeTaxScheduleB);
    // alert(taxReliefAvailmentScheduleC);
    // alert(salesRevenueScheduleD);
    // alert(costOfSaleScheduleE1);
    // alert(otherTaxableIncomeNotSubjectedToFinalTaxScheduleF);
    // alert(ordinaryAllowableItemizedDeductionScheduleG);
    // alert(specialAllowableItemizedDeductionsAttachmentScheduleH);
    // alert(computationOfNetOperatingLossCarryOverScheduleI);

    attach = "";
    attach = taxRegime + taxPayerActivityForTaxReliefScheduleA +
    		computationOfIncomeTaxScheduleB + taxReliefAvailmentScheduleC + salesRevenueScheduleD +
    		costOfSaleScheduleE1 + otherTaxableIncomeNotSubjectedToFinalTaxScheduleF + otherTaxableIncomeNotSubjectedToFinalTaxScheduleFList + ordinaryAllowableItemizedDeductionScheduleG +
    		otherAmortizationScheduleGList + ordinaryAllowableItemizedDeductionScheduleGPart2 + otherOrdinaryAllowableItemizedDeductionScheduleGList +
    		specialAllowableItemizedDeductionsAttachmentScheduleH + computationOfNetOperatingLossCarryOverScheduleI + closeForm;

    return attach;

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

