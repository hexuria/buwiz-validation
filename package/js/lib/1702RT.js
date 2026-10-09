var wsUrl = enviService.getWsUrl();
var wsSite = enviService.getWsSite();
//Page 1
var taxpayerBean = {};
var totalTaxpayerBean = {};

// Page 2
var computationOfTaxBean = {};
var taxReliefAvailmentBean = {};
var externalAuditorAccreditedTaxAgentBean = {};

// Page 3
var salesRevenueBean = {};
var costOfSaleBean = {};

// Page 4 Schedule 3
var schedule3 = {};
var otherTaxableIncomeNotSubjectToFinalTaxBean = {};
var otherTaxableIncomeNotSubjectToFinalTaxList = [];


// Page 4 Schedule 4
var schedule4 = {};
var amortization = {};
var amortizationList = [];
var others = {};
var otherList = [];

// Page 5 Schedule 5
var schedule5 = {};
var specialAllowableItemizedDeductionsBean = {};
var specialAllowableItemizedDeductionsList = [];

// Page 5 Schedule 6
//var schedule6 = {};
var computationOfNetOperatingLossCarryOverBean = {};

// Page 6 Schedule 7
var schedule7 = {};
var taxCreditsPaymentsBean = {};
var otherCreditsBean = {};
var otherCreditsBeanList = [];

// Page 6 Schedule 8 
//var schedule8 = {};
var computationOfMinimunCorporateIncomeBean = {};

// Page 6 Schedule 9
//var schedule9 = {};
var reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean = {};
var schedule9Iterating = {};
var nonDeductibleExpensesItemList = [];
var nonTaxableAndSpDeductionsItemList = [];
var specialDeductionsItemList = [];

// Page 7 Schedule 10
var schedule10 = {};

// Page 7 Schedule 11
var schedule11 = {};
var stockholders = {};
var stockholdersList = [];

// Page 8 Schedule 12I
var schedule12I = {};
var grossIncomeSubjectToFinalWithholdingBean = {};
var grossIncomeSubjectToFinalWithholdingList = [];

// Page 8 Schedule 12II
var realPropertySaleBean = {};
var realPropertySaleList = [];

// Page 8 Schedule 12III
var stockShareSaleBean = {};
var stockShareSaleList = [];

// Page 8 Schedule 12IV
var otherIncomeBean = {};
var otherIncomeList = [];

// Page 8 Schedule 13
var schedule13 = {};


// Page 8 Schedule 13I
var personalPropertyReceivedBean = {};
var personalPropertyReceivedList = [];

// Page 8 Schedule 13II
var otherExemptIncomeBean = {};
var otherExemptIncomeList = [];

// Page 1 Taxpayer
function populateTaxpayerBean(taxIdNumber, branchCode, industryTypeCode,
		description, barangayAddress, districtAddress, dateRegistered,
		startMonth, incorporationDate, birthDate, zipCode, sex, tinPart1,
		tinPart2, tinPart3, registeredAddress, dateFiled, dueDate,
		returnPeriod, emailAddress, formVersion, ammendedYN, batchNo,
		amdendedReturn, shortPeriodReturn, alphaNumericTaxCode,
		sheetFiledCount, contactNumber, mainLine, psic, methodOfDeduction,
		lineOfBusiness, calendarFiscal, yearEndedMonth, yearEnded, rdoCode,
		registeredActivity, lastName, firstName, registeredName, ctcSecType,
		amendedReturn, atcIC011, atcIC021, effectivityDateFrom,
		effectivityDateTo, legalBasisTaxExemption, investmentPromotionAgency,
		subStreet, street, city, offlineFormVersion) {

    taxpayerBean = {
        taxIdNumber: taxIdNumber,
        branchCode: branchCode,
        industryTypeCode: industryTypeCode,
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
        psic: psic,
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
        amendedReturn: amendedReturn,
        atcIC011: atcIC011,
        atcIC021: atcIC021,
        effectivityDateFrom: effectivityDateFrom,
        effectivityDateTo: effectivityDateTo,
        legalBasisTaxExemption: legalBasisTaxExemption,
        investmentPromotionAgency: investmentPromotionAgency,
        subStreet: subStreet,
        street: street,
        city: city,
        offlineFormVersion: offlineFormVersion
    };
}

// Page 1 Total Tax Payable
function populateTotalTaxpayerBean(totalIncomeTaxDue, totalTaxCredits,
		totalPenalties, netTaxPayable,
		taxFilerTaxDue, taxFilerSpouseTaxDue,
		taxFilerCredits, taxFilerSpouseCredits,
		portionOfTaxPayableAllowed, totalAmountPayableUponFilling,
		totalFinalTaxWithheld, totalTaxPayable,
		netAmountTaxPayable, communityTaxCertificate,
		dateOfIssue, placeOfIssue, amountIfCTC, overPayment, totalAmountPayable,
		totalIncomeReceiptsExemptFromIncomeTax) {

    totalTaxpayerBean = {
        totalIncomeTaxDue: totalIncomeTaxDue,
        totalTaxCredits: totalTaxCredits,
        totalPenalties: totalPenalties,
        netTaxPayable: netTaxPayable,
        taxFilerTaxDue: taxFilerTaxDue,
        taxFilerSpouseTaxDue: taxFilerSpouseTaxDue,
        taxFilerCredits: taxFilerCredits,
        taxFilerSpouseCredits: taxFilerSpouseCredits,
        portionOfTaxPayableAllowed: portionOfTaxPayableAllowed,
        totalAmountPayableUponFilling: totalAmountPayableUponFilling,
        totalFinalTaxWithheld: totalFinalTaxWithheld,
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
}

// Page 2 Computation of Tax
function populateComputationOfTaxBean(costSalesServices,
		grossIncomeFromOperation,
        incomeTaxDueOtherThanMCIT,
		incomeTaxRate,
        incomeTaxRateEX,
        minimumCorporateIncomeTax,
		netSalesRevenuesReceiptsFees,
        netTaxPayable46,
        netTaxableIncome,
		nolco,
        nolcoDisabled,
        optionalStandardDeductions,
		optionalStandardDeductionsDisabled,
        ordinaryAllowableItemizedDeductions,
		ordinaryAllowableItemizedDeductionsDisabled,
		otherTaxableIncomeNotSubjectedToFinalTax,
		surcharge,
		interest,
		compromise,
		totalPenalty,
		specialAllowableItemizedDeductions36,
		specialAllowableItemizedDeductions36Disabled,
        totalAmountPayable,
		totalGrossIncome,
        totalIncomeTaxDue44,
        totalItemizedDeductions,
		totalTaxCreditsPayments45) {

    computationOfTaxBean = {
        costSalesServices: costSalesServices,
        grossIncomeFromOperation: grossIncomeFromOperation,
        incomeTaxDueOtherThanMCIT: incomeTaxDueOtherThanMCIT,
        incomeTaxRate: incomeTaxRate,
        incomeTaxRateEX: incomeTaxRateEX,
        minimumCorporateIncomeTax: minimumCorporateIncomeTax,
        netSalesRevenuesReceiptsFees: netSalesRevenuesReceiptsFees,
        netTaxPayable46: netTaxPayable46,
        netTaxableIncome: netTaxableIncome,
        nolco: nolco,
        nolcoDisabled: nolcoDisabled,
        optionalStandardDeductions: optionalStandardDeductions,
        optionalStandardDeductionsDisabled: optionalStandardDeductionsDisabled,
        ordinaryAllowableItemizedDeductions: ordinaryAllowableItemizedDeductions,
        ordinaryAllowableItemizedDeductionsDisabled: ordinaryAllowableItemizedDeductionsDisabled,
        otherTaxableIncomeNotSubjectedToFinalTax: otherTaxableIncomeNotSubjectedToFinalTax,
        surcharge: surcharge,
        interest: interest,
        compromise: compromise,
        totalPenalty: totalPenalty,
        specialAllowableItemizedDeductions36: specialAllowableItemizedDeductions36,
        specialAllowableItemizedDeductions36Disabled: specialAllowableItemizedDeductions36Disabled,
        totalAmountPayable: totalAmountPayable,
        totalGrossIncome: totalGrossIncome,
        totalIncomeTaxDue44: totalIncomeTaxDue44,
        totalItemizedDeductions: totalItemizedDeductions,
        totalTaxCreditsPayments45: totalTaxCreditsPayments45

    };
}

// Page 2 Tax Relief Availment
function populateTaxReliefAvailmentBean(regularIncomeTaxOtherwiseDue,
		specialAllowableItemizedDeduction, specialTaxCredits, totalTaxReliefAvailment) {

    taxReliefAvailmentBean = {
        regularIncomeTaxOtherwiseDue: regularIncomeTaxOtherwiseDue,
        specialAllowableItemizedDeduction: specialAllowableItemizedDeduction,
        specialTaxCredits: specialTaxCredits,
        totalTaxReliefAvailment: totalTaxReliefAvailment

    };
}

// Page 2 External Auditor
function populateExternalAuditorAccreditedTaxAgentBean(nameOfExternalAuditor,
		externalAuditorTIN, nameOfSigningPartner, signingPartnerTIN,
		birAccreditationNumber, isssueDate, expiryDate,
		accreditedTaxAgentBranchCode, signingPartnerBranchCode) {

    externalAuditorAccreditedTaxAgentBean = {
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

// Page 3 Schedule 1 Sales Revenue
function populateSalesRevenueBean(taxWthldGoods,
		taxWthldServices,
		taxWthldLease,
		taxWthldTotal,
		salesReturns,
		netSalesSched1) {

    salesRevenueBean = {
        taxWthldGoods: taxWthldGoods,
        taxWthldServices: taxWthldServices,
        taxWthldLease: taxWthldLease,
        taxWthldTotal: taxWthldTotal,
        salesReturns: salesReturns,
        netSalesSched1: netSalesSched1
    };
}

// Page 3 Schedule 2 Cost of Sales
function populateCostOfSaleBean(goodsInvBeg,
		purGoods, goodsAvail,
		goodsInvEnd, costSales,
		directMatsBeg, purDirectMats,
		matsAvail, directMatsEnd,
		rawMats, directLabor,
		manufacturingOverhead,
		totalManufacturingCost,
		workInProgressBeg,
		winProgressEnd,
		costGoodsManufactured,
		finishedGoodsBeg,
		finishedGoodsEnd,
		totalCostGoodsManufacturedAndSold,
		salaries, materials, sched2CDepreciation,
		sched2CRental, outsideServ, others,
		costService, totalCostSalesAndServices) {

    costOfSaleBean = {
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

// Page 4 Schedule 3 Other Taxable Income Not Subjected to Final Tax
function populateSchedule3(otherTaxableIncomeNotSubjectToFinalTaxDescFirst, otherTaxableIncomeNotSubjectToFinalTaxValueFirst, otherTaxableIncomeNotSubjectToFinalTaxDescSecond, otherTaxableIncomeNotSubjectToFinalTaxValueSecond, otherTaxableIncomeNotSubjectToFinalTaxDescThird, otherTaxableIncomeNotSubjectToFinalTaxValueThird, otherTaxableIncomeNotSubjectToFinalTaxValueTotal, otherTaxableIncomeNotSubjectToFinalTaxList) {
    schedule3 = {
        otherTaxableIncomeNotSubjectToFinalTaxDescFirst: otherTaxableIncomeNotSubjectToFinalTaxDescFirst,
        otherTaxableIncomeNotSubjectToFinalTaxValueFirst: otherTaxableIncomeNotSubjectToFinalTaxValueFirst,
        otherTaxableIncomeNotSubjectToFinalTaxDescSecond: otherTaxableIncomeNotSubjectToFinalTaxDescSecond,
        otherTaxableIncomeNotSubjectToFinalTaxValueSecond: otherTaxableIncomeNotSubjectToFinalTaxValueSecond,
        otherTaxableIncomeNotSubjectToFinalTaxDescThird: otherTaxableIncomeNotSubjectToFinalTaxDescThird,
        otherTaxableIncomeNotSubjectToFinalTaxValueThird: otherTaxableIncomeNotSubjectToFinalTaxValueThird,
        otherTaxableIncomeNotSubjectToFinalTaxValueTotal: otherTaxableIncomeNotSubjectToFinalTaxValueTotal,
        otherTaxableIncomeNotSubjectToFinalTaxList: otherTaxableIncomeNotSubjectToFinalTaxList
    };
}

// Page 4 Schedule 3 List of Other Taxable Income Not Subjected to Final Tax
function populateListOfOtherTaxableIncomeNotSubjectToFinalTaxBean(description, amount) {
    otherTaxableIncomeNotSubjectToFinalTaxBean = {
        description: description,
        amount: amount
    };
    otherTaxableIncomeNotSubjectToFinalTaxList.push(otherTaxableIncomeNotSubjectToFinalTaxBean);
}

// Page 4 Schedule 4 Ordinary Allowable Itemized Deductions
function populateSchedule4(adAndPromotionsVal, amortizatiosDescSecond, amortizatiosDescThird, amortizatiosDescFourth, amortizatiosValSecond, amortizatiosValThird, amortizatiosValFourth, amortizationList, badDebts, charitableContributions, commissions, communicationLightWater, utilities, depletion, depreciation, directorFee, fringeBenefits, fuelAndOil, insurance, iterest, janitorialAndMessengerial, losses, mgmtAndConsultancyFee, misc, officeSupplies, otherServices, professionalFees, schedGRental, repairLabor, repairMaterials, entertainment, researchAndDev, royalties, salariesAndAllownces, securityServices, otherContributions, taxesAndLiscenses, tollingFees, trainingsAndSeminars, travelTransportaion, othersFirstDescFirst, othersFirstDescSecond, othersFirstDescThird, othersFirstDescfourth, otherFirstValue, otherSecondValue, otherThirdValue, otherFourthValue, otherList) {
    schedule4 = {
        adAndPromotionsVal: adAndPromotionsVal,
        amortizatiosDescSecond: amortizatiosDescSecond,
        amortizatiosDescThird: amortizatiosDescThird,
        amortizatiosDescFourth: amortizatiosDescFourth,
        amortizatiosValSecond: amortizatiosValSecond,
        amortizatiosValThird: amortizatiosValThird,
        amortizatiosValFourth: amortizatiosValFourth,
        amortizationList: amortizationList,
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
        otherList: otherList

    };
}

// Page 4 Schedule 4 List of Amortization
function populateListOfAmortization(description, amount) {
    amortization = {
        description: description,
        amount: amount
    };
    amortizationList.push(amortization);
}

// Page 5 Schedule 4 List of Others
function populateListOfOthers(description, amount) {
    others = {
        description: description,
        amount: amount
    };
    otherList.push(others);
}

// Page 5 Schedule 5 Special Allowable Itemized Deductions
function populateSchedule5(specialAllowableItemizedDeductionsDescription1,
                        specialAllowableItemizedDeductionsLegalBasis1,
                        specialAllowableItemizedDeductionsAmount1,
                        specialAllowableItemizedDeductionsDescription2,
                        specialAllowableItemizedDeductionsLegalBasis2,
                        specialAllowableItemizedDeductionsAmount2,
                        specialAllowableItemizedDeductionsDescription3,
                        specialAllowableItemizedDeductionsLegalBasis3,
                        specialAllowableItemizedDeductionsAmount3,
                        specialAllowableItemizedDeductionsDescription4,
                        specialAllowableItemizedDeductionsLegalBasis4,
                        specialAllowableItemizedDeductionsAmount4,
                        totalSpecialAllowableItemizedDeductions,
                        specialAllowableItemizedDeductionsList) {
    schedule5 = {
        specialAllowableItemizedDeductionsDescription1: specialAllowableItemizedDeductionsDescription1,
        specialAllowableItemizedDeductionsLegalBasis1: specialAllowableItemizedDeductionsLegalBasis1,
        specialAllowableItemizedDeductionsAmount1: specialAllowableItemizedDeductionsAmount1,
        specialAllowableItemizedDeductionsDescription2: specialAllowableItemizedDeductionsDescription2,
        specialAllowableItemizedDeductionsLegalBasis2: specialAllowableItemizedDeductionsLegalBasis2,
        specialAllowableItemizedDeductionsAmount2: specialAllowableItemizedDeductionsAmount2,
        specialAllowableItemizedDeductionsDescription3: specialAllowableItemizedDeductionsDescription3,
        specialAllowableItemizedDeductionsLegalBasis3: specialAllowableItemizedDeductionsLegalBasis3,
        specialAllowableItemizedDeductionsAmount3: specialAllowableItemizedDeductionsAmount3,
        specialAllowableItemizedDeductionsDescription4: specialAllowableItemizedDeductionsDescription4,
        specialAllowableItemizedDeductionsLegalBasis4: specialAllowableItemizedDeductionsLegalBasis4,
        specialAllowableItemizedDeductionsAmount4: specialAllowableItemizedDeductionsAmount4,
        totalSpecialAllowableItemizedDeductions: totalSpecialAllowableItemizedDeductions,
        specialAllowableItemizedDeductionsList: specialAllowableItemizedDeductionsList

    };
}

// Page 5 Schedule 5 List of Special Allowable Itemized Deductions
function populateListOfSpecialAllowableItemizedDeductionsBean(description, legalBasis, amount) {
    specialAllowableItemizedDeductionsBean = {
        description: description,
        legalBasis: legalBasis,
        amount: amount
    };
    specialAllowableItemizedDeductionsList.push(specialAllowableItemizedDeductionsBean);
}

// Page 5 Schedule 6 Computation of Net Operating Loss Carry Over
function populateComputationOfNetOperatingLossCarryOverBean(grossIncome,
		lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw,
		netOperatingLoss,
        netOperatingLossYearIncurred1,
		netOperatingLossYearIncurred2,
        netOperatingLossYearIncurred3,
		netOperatingLossYearIncurred4,
        netOperatingLossAmount1,
		netOperatingLossAmount2,
        netOperatingLossAmount3,
		netOperatingLossAmount4,
        NOLCOAppliedPreviousYear1,
		NOLCOAppliedPreviousYear2,
        NOLCOAppliedPreviousYear3,
		NOLCOAppliedPreviousYear4,
        NOLCOExpired1,
        NOLCOExpired2,
		NOLCOExpired3,
        NOLCOExpired4,
        NOLCOAppliedCurrentYear1,
		NOLCOAppliedCurrentYear2,
        NOLCOAppliedCurrentYear3,
		NOLCOAppliedCurrentYear4,
        netOperatingLossUnapplied1,
		netOperatingLossUnapplied2,
        netOperatingLossUnapplied3,
		netOperatingLossUnapplied4,
        totalNOLCO) {

    computationOfNetOperatingLossCarryOverBean = {
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
        netOperatingLossUnapplied4: netOperatingLossUnapplied4,
        totalNOLCO: totalNOLCO
    };
}

// Page 6 Schedule 7 Tax Credits/Payments
function populateSchedule7(priorYearsExcessCreditsOtherThanMCIT,
		incomeTaxPaymentUnderMCIT,
		incomeTaxPaymentUnderRegularRate,
		excessMCIT,
		creditableTaxWithheldFromPrevQuarters,
		creditableTaxWithheldFromTheFourthQuarter,
		foreignTaxCredits,
		taxPaidInReturn,
		sched7SpecialTaxCredits) {

    schedule7 = {
        priorYearsExcessCreditsOtherThanMCIT: priorYearsExcessCreditsOtherThanMCIT,
        incomeTaxPaymentUnderMCIT: incomeTaxPaymentUnderMCIT,
        incomeTaxPaymentUnderRegularRate: incomeTaxPaymentUnderRegularRate,
        excessMCIT: excessMCIT,
        creditableTaxWithheldFromPrevQuarters: creditableTaxWithheldFromPrevQuarters,
        creditableTaxWithheldFromTheFourthQuarter: creditableTaxWithheldFromTheFourthQuarter,
        foreignTaxCredits: foreignTaxCredits,
        taxPaidInReturn: taxPaidInReturn,
        sched7SpecialTaxCredits: sched7SpecialTaxCredits
    };
}

// Page 6 Schedule 7 Other Credits Payments
function populateTaxCreditsPaymentsBean(otherCreditsPaymentsDescription1,
		otherCreditsPaymentsAmount1,
		otherCreditsPaymentsDescription2,
		otherCreditsPaymentsAmount2) {

    taxCreditsPaymentsBean = {
        otherCreditsPaymentsDescription1: otherCreditsPaymentsDescription1,
        otherCreditsPaymentsAmount1: otherCreditsPaymentsAmount1,
        otherCreditsPaymentsDescription2: otherCreditsPaymentsDescription2,
        otherCreditsPaymentsAmount2: otherCreditsPaymentsAmount2
    };
}

// Page 6 Schedule 7 List of Other Credits Payments
function populateListOfOtherCreditsBean(description, amount) {

    otherCreditsBean = {
        description: description,
        amount: amount
    };
    otherCreditsBeanList.push(otherCreditsBean);
}


// Page 6 Schedule 8 Computation of Minimum Corporation Income Tax
function populateComputationOfMinimunCorporateIncomeBean(balanceOfExcessMCIT1,
		balanceOfExcessMCIT2,
        balanceOfExcessMCIT3,
        excessMCITAppliedCurrently1,
		excessMCITAppliedCurrently2,
        excessMCITAppliedCurrently3,
		excessMCITAppliedPreviously1,
        excessMCITAppliedPreviously2,
		excessMCITAppliedPreviously3,
        excessMCITOverNormalTax1,
		excessMCITOverNormalTax2,
        excessMCITOverNormalTax3,
		expiredPortionOfExcessMCIT1,
        expiredPortionOfExcessMCIT2,
		expiredPortionOfExcessMCIT3,
        mcit1,
        mcit2,
        mcit3,
        mcitYear1,
		mcitYear2,
        mcitYear3,
        normalIncomeTax1,
        normalIncomeTax2,
		normalIncomeTax3,
        totalExcessCreditsMCIT) {

    computationOfMinimunCorporateIncomeBean = {
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
        normalIncomeTax3: normalIncomeTax3,
        totalExcessCreditsMCIT: totalExcessCreditsMCIT
    };
}

// Page 6 Schedule 9 Reconciliation of Net Income Per Books Against Taxable Income
function populateReconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean(netIncomePerBooks,
                                                                            nonDeductibleExpensesItem2Description,
                                                                            nonDeductibleExpensesItem2Value,
                                                                            nonDeductibleExpensesItem3Description,
                                                                            nonDeductibleExpensesItem3Value,
                                                                            nonDeductibleExpensesItemList,
                                                                            totalNonDeductibleExpenses,
                                                                            nonTaxableAndSpDeductionsItem5Description,
                                                                            nonTaxableAndSpDeductionsItem5Value,
                                                                            nonTaxableAndSpDeductionsItem6Description,
                                                                            nonTaxableAndSpDeductionsItem6Value,
                                                                            nonTaxableAndSpDeductionsItemList,
                                                                            specialDeductionsItem7Description,
                                                                            specialDeductionsItem7Value,
                                                                            specialDeductionsItem8Description,
                                                                            specialDeductionsItem8Value,
                                                                            specialDeductionsItemList,
                                                                            totalNonTaxableAndSpDeductions,
                                                                            netTaxableIncome) {

    reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean = {
        netIncomePerBooks: netIncomePerBooks,
        nonDeductibleExpensesItem2Description: nonDeductibleExpensesItem2Description,
        nonDeductibleExpensesItem2Value: nonDeductibleExpensesItem2Value,
        nonDeductibleExpensesItem3Description: nonDeductibleExpensesItem3Description,
        nonDeductibleExpensesItem3Value: nonDeductibleExpensesItem3Value,
        nonDeductibleExpensesItemList: nonDeductibleExpensesItemList,
        totalNonDeductibleExpenses: totalNonDeductibleExpenses,
        nonTaxableAndSpDeductionsItem5Description: nonTaxableAndSpDeductionsItem5Description,
        nonTaxableAndSpDeductionsItem5Value: nonTaxableAndSpDeductionsItem5Value,
        nonTaxableAndSpDeductionsItem6Description: nonTaxableAndSpDeductionsItem6Description,
        nonTaxableAndSpDeductionsItem6Value: nonTaxableAndSpDeductionsItem6Value,
        nonTaxableAndSpDeductionsItemList: nonTaxableAndSpDeductionsItemList,
        specialDeductionsItem7Description: specialDeductionsItem7Description,
        specialDeductionsItem7Value: specialDeductionsItem7Value,
        specialDeductionsItem8Description: specialDeductionsItem8Description,
        specialDeductionsItem8Value: specialDeductionsItem8Value,
        specialDeductionsItemList: specialDeductionsItemList,
        totalNonTaxableAndSpDeductions: totalNonTaxableAndSpDeductions,
        netTaxableIncome: netTaxableIncome



    };
}

// Page 6 Schedule 9 List of Non-Deductible Expenses
function populateListOfNonDeductibleExpensesItemBean(description, amount) {
    schedule9Iterating = {
        description: description,
        amount: amount
    };
    nonDeductibleExpensesItemList.push(schedule9Iterating);
}

// Page 6 Schedule 9 List of Non-Taxable and Special Deductions
function populateListOfNonTaxableAndSpDeductionsItemBean(description, amount) {
    schedule9Iterating = {
        description: description,
        amount: amount
    };
    nonTaxableAndSpDeductionsItemList.push(schedule9Iterating);
}

// Page 6 Schedule 9 List of Special Deductions
function populateListOfSpecialDeductionsItemBean(description, amount) {
    schedule9Iterating = {
        description: description,
        amount: amount
    };
    specialDeductionsItemList.push(schedule9Iterating);
}

// Page 7 Schedule 10 Balance Sheet
function populateSchedule10(currentAssests,
                            longTermInvestment,
                            propertyPlantEquipmentNet,
                            longTermReceivables,
                            intangibleAssets,
                            otherAssets,
                            totalAssets,
                            currentLiabilities,
                            longTermLiabilities,
                            deferedCredits,
                            otherLiabilities,
                            totalLiabilities,
                            capitalStock,
                            additionalPaidInCapital,
                            retainedEarnings,
                            totalEquity,
                            totalLiabilitiesEquity) {
    schedule10 = {
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
        totalLiabilitiesEquity: totalLiabilitiesEquity


    };
}

// Page 7 Schedule 11 Stockholders Partners Members Information
function populateSchedule11(capitalContributorType, stockholdersList) {
    schedule11 = {
        capitalContributorType: capitalContributorType,
        stockholdersList: stockholdersList
    };
}

// Page 7 Schedule 11 List of Stockholders Partners Members Information
function populateListOfstockholders(registeredName,
                                    tin1,
                                    tin2,
                                    tin3,
                                    branchCode,
                                    capitalContribution,
                                    percentToTotal) {
    stockholders = {
        registeredName: registeredName,
        tin1: tin1,
        tin2: tin2,
        tin3: tin3,
        branchCode: branchCode,
        capitalContribution: capitalContribution,
        percentToTotal: percentToTotal
    };
    stockholdersList.push(stockholders);
}

// Page 8 Schedule 12I Gross Income/Receipts Subjected to Final Withholding
function populateSchedule12I(interestExempt,
                             interestsActualAmt,
                             interestsFinalTaxWthldPd,
                             royaltiesExempt,
                             royaltiesActualAmt,
                             royaltiesFinalTaxWthldPd,
                             dividendsExempt,
                             dividendsActualAmt,
                             dividendsFinalTaxWthldPd,
                             prizesWinningsExempt,
                             prizesWinningsActualAmt,
                             prizesWinningsFinalTaxWthldPd,
                             grossIncomeSubjectToFinalWithholdingList) {
    schedule12I = {
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
        grossIncomeSubjectToFinalWithholdingList: grossIncomeSubjectToFinalWithholdingList
    };
}

// Page 8 Schedule 12I List of Gross Income/Receipts Subjected to Final Withholding
function populateListOfGrossIncomeSubjectToFinalWithholdingBean(description,
                                                                exempt,
                                                                amount,
                                                                finalTax) {
    grossIncomeSubjectToFinalWithholdingBean = {
        description: description,
        exempt: exempt,
        amount: amount,
        finalTax: finalTax,
        type: '4'
    };
    grossIncomeSubjectToFinalWithholdingList.push(grossIncomeSubjectToFinalWithholdingBean);
}

// Page 8 Schedule 12II List of Real Properties Sale
function populateListOfRealPropertySaleBean(propDescription,
                                            taxDeclNo,
                                            carNo,
                                            actualAmount,
                                            propertyTaxWithheld) {
    realPropertySaleBean = {
        propDescription: propDescription,
        taxDeclNo: taxDeclNo,
        carNo: carNo,
        actualAmount: actualAmount,
        propertyTaxWithheld: propertyTaxWithheld

    };
    realPropertySaleList.push(realPropertySaleBean);
}

// Page 8 Schedule 12III List of Stock Share Sale
function populateListOfStockShareSaleBean(stockKind,
                                          stockSeries,
                                          stockCARNo,
                                          numShares,
                                          Issued,
                                          stockActualAmount,
                                          stockTaxWithheld) {
    stockShareSaleBean = {
        stockKind: stockKind,
        stockSeries: stockSeries,
        stockCARNo: stockCARNo,
        numShares: numShares,
        Issued: Issued,
        stockActualAmount: stockActualAmount,
        stockTaxWithheld: stockTaxWithheld


    };
    stockShareSaleList.push(stockShareSaleBean);
}

// Page 8 Schedule 12IV List of Other Income
function populateListOfOtherIncomeBean(otherIncome,
                                       actualAmount,
                                       otherIncomeTaxWithheld) {
    otherIncomeBean = {
        otherIncome: otherIncome,
        actualAmount: actualAmount,
        otherIncomeTaxWithheld: otherIncomeTaxWithheld
    };
    otherIncomeList.push(otherIncomeBean);
}

// Page 8 Schedule 13 List of Other Income
function populateListOfOtherIncome(returnOfPremium) {
    schedule13 = {
        returnOfPremium: returnOfPremium
    };

}

// Page 8 Schedule 13I List of Personal Property Received
function populateListOfPersonalPropertyReceivedBean(personalPropertyDesc,
                                                    personalPropertyTransferMode,
                                                    personalPropertyCARNo,
                                                    personalPropertyActualAmount) {
    personalPropertyReceivedBean = {
        personalPropertyDesc: personalPropertyDesc,
        personalPropertyTransferMode: personalPropertyTransferMode,
        personalPropertyCARNo: personalPropertyCARNo,
        personalPropertyActualAmount: personalPropertyActualAmount
    };
    personalPropertyReceivedList.push(personalPropertyReceivedBean);
}

// Page 8 Schedule 13II Lost of Other Exempt Income
function populateListOfOtherExemptIncomeBean(otherIncome, actualAmount) {
    otherExemptIncomeBean = {
        otherIncome: otherIncome,
        actualAmount: actualAmount
    };
    otherExemptIncomeList.push(otherExemptIncomeBean);
}


// Execute
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

    taxpayerBean = {};
    totalTaxpayerBean = {};
    computationOfTaxBean = {};
    taxReliefAvailmentBean = {};
    externalAuditorAccreditedTaxAgentBean = {};
    salesRevenueBean = {};
    costOfSaleBean = {};
    schedule3 = {};
    otherTaxableIncomeNotSubjectToFinalTaxBean = {};
    otherTaxableIncomeNotSubjectToFinalTaxList = [];
    schedule4 = {};
    amortization = {};
    amortizationList = [];
    others = {};
    otherList = [];
    schedule5 = {};
    specialAllowableItemizedDeductionsBean = {};
    specialAllowableItemizedDeductionsList = [];
    computationOfNetOperatingLossCarryOverBean = {};
    schedule7 = {};
    taxCreditsBean = {};
    otherCreditsBean = {};
    otherCreditsBeanList = [];
    computationOfMinimunCorporateIncomeBean = {};
    reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean = {};
    schedule9Iterating = {};
    nonDeductibleExpensesItemList = [];
    nonTaxableAndSpDeductionsItemList = [];
    specialDeductionsItemList = [];
    schedule10 = {};
    schedule11 = {};
    stockholders = {};
    stockholdersList = [];
    schedule12I = {};
    grossIncomeSubjectToFinalWithholdingBean = {};
    grossIncomeSubjectToFinalWithholdingList = [];
    realPropertySaleBean = {};
    realPropertySaleList = [];
    stockShareSaleBean = {};
    stockShareSaleList = [];
    otherIncomeBean = {};
    otherIncomeList = [];
    schedule13 = {};
    personalPropertyReceivedBean = {};
    personalPropertyReceivedList = [];
    otherExemptIncomeBean = {};
    otherExemptIncomeList = [];
}

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
};
// Generate Soap Request
function soapRequest() {

    // URL


    // Header
    var soapRequestHeader = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.client.ph.gov.bir.web">'
		+ '<soapenv:Header/>'
		+ '<soapenv:Body>'
		+ '<ws:submitForm1702RT>';

    // Open Form
    var openForm = '<formBean>';

    // Taxpayer Bean
    var taxpayerBeanws = '<taxpayerBean> \
		<taxIdNumber>' + taxpayerBean.taxIdNumber + '</taxIdNumber> \
		<branchCode>' + taxpayerBean.branchCode + '</branchCode> \
		<industryTypeCode>' + taxpayerBean.industryTypeCode + '</industryTypeCode> \
		<industryTypeMitCode>' + '' + '</industryTypeMitCode> \
		<description>' + taxpayerBean.description + '</description> \
		<barangayAddress>' + taxpayerBean.barangayAddress + '</barangayAddress> \
		<districtAddress>' + taxpayerBean.districtAddress + '</districtAddress> \
		<dateRegistered>' + taxpayerBean.dateRegistered + '</dateRegistered> \
		<exemptionTypeCode>' + '' + '</exemptionTypeCode> \
		<subCode>' + '' + '</subCode> \
		<cTypeCode>' + '' + '</cTypeCode> \
		<gTypeCode>' + '' + '</gTypeCode> \
		<spouseTaxPayer>' + '' + '</spouseTaxPayer> \
		<startMonth>' + taxpayerBean.startMonth + '</startMonth> \
		<incorporationDate>' + taxpayerBean.incorporationDate + '</incorporationDate> \
		<birthDate>' + taxpayerBean.birthDate + '</birthDate> \
		<zipCode>' + taxpayerBean.zipCode + '</zipCode> \
		<sex>' + taxpayerBean.sex + '</sex> \
		<tinPart1>' + taxpayerBean.tinPart1 + '</tinPart1> \
		<tinPart2>' + taxpayerBean.tinPart2 + '</tinPart2> \
		<tinPart3>' + taxpayerBean.tinPart3 + '</tinPart3> \
		<registeredAddress>' + taxpayerBean.registeredAddress + '</registeredAddress> \
		<dateFiled>' + taxpayerBean.dateFiled + '</dateFiled> \
		<psocCode>' + '' + '</psocCode> \
		<claimingAdditionalExemption>' + '' + '</claimingAdditionalExemption> \
		<numberOfDependents>' + '' + '</numberOfDependents> \
		<jointFilling>' + '' + '</jointFilling> \
		<dueDate>' + taxpayerBean.dueDate + '</dueDate> \
		<returnPeriod>' + taxpayerBean.returnPeriod + '</returnPeriod> \
		<actCode>' + '' + '</actCode> \
		<emailAddress>' + taxpayerBean.emailAddress + '</emailAddress> \
		<formVersion>' + taxpayerBean.formVersion + '</formVersion> \
		<sourceOfIncome>' + '' + '</sourceOfIncome> \
		<govtIssuedId>' + '' + '</govtIssuedId> \
		<govtIssuedIdPlace>' + '' + '</govtIssuedIdPlace> \
		<govtIssuedIdAmount>' + '' + '</govtIssuedIdAmount> \
		<govtIssuedIdDate>' + '' + '</govtIssuedIdDate> \
		<ammendedYN>' + taxpayerBean.ammendedYN + '</ammendedYN> \
		<batchNo>' + taxpayerBean.batchNo + '</batchNo> \
		<amdendedReturn>' + taxpayerBean.amdendedReturn + '</amdendedReturn> \
		<shortPeriodReturn>' + taxpayerBean.shortPeriodReturn + '</shortPeriodReturn> \
		<alphaNumericTaxCode>' + taxpayerBean.alphaNumericTaxCode + '</alphaNumericTaxCode> \
		<sheetFiledCount>' + taxpayerBean.sheetFiledCount + '</sheetFiledCount> \
		<taxFilerType>' + '' + '</taxFilerType> \
		<tradeName>' + '' + '</tradeName> \
		<contactNumber>' + taxpayerBean.contactNumber + '</contactNumber> \
		<civilStatus>' + '' + '</civilStatus> \
		<ifMarriedSpouseIncome>' + '' + '</ifMarriedSpouseIncome> \
		<filingStatus>' + '' + '</filingStatus> \
		<mainLine>' + taxpayerBean.mainLine + '</mainLine> \
		<psic>' + taxpayerBean.psic + '</psic> \
		<methodOfAccounting>' + '' + '</methodOfAccounting> \
		<methodOfAccountingOthers>' + '' + '</methodOfAccountingOthers> \
		<methodOfDeduction>' + taxpayerBean.methodOfDeduction + '</methodOfDeduction> \
		<incomeExemptFromIncomeTax>' + '' + '</incomeExemptFromIncomeTax> \
		<incomeSubjectToSpecialPreferentialRate>' + '' + '</incomeSubjectToSpecialPreferentialRate> \
		<internationalTreatyYn>' + '' + '</internationalTreatyYn> \
		<fiscalYear>' + '' + '</fiscalYear> \
		<filerName>' + '' + '</filerName> \
		<lineOfBusiness>' + taxpayerBean.lineOfBusiness + '</lineOfBusiness> \
		<calendarFiscal>' + taxpayerBean.calendarFiscal + '</calendarFiscal> \
		<yearEndedMonth>' + taxpayerBean.yearEndedMonth + '</yearEndedMonth> \
		<yearEnded>' + taxpayerBean.yearEnded + '</yearEnded> \
		<rdoCode>' + taxpayerBean.rdoCode + '</rdoCode> \
		<registeredActivity>' + taxpayerBean.registeredActivity + '</registeredActivity> \
		<lastName>' + taxpayerBean.lastName + '</lastName> \
		<midName>' + '' + '</midName> \
		<firstName>' + taxpayerBean.firstName + '</firstName> \
		<registeredName>' + taxpayerBean.registeredName + '</registeredName> \
		<ctcSecType>' + taxpayerBean.ctcSecType + '</ctcSecType> \
		<amendedReturn>' + taxpayerBean.amendedReturn + '</amendedReturn> \
		<atc1>' + '' + '</atc1> \
		<atc1Desc>' + '' + '</atc1Desc> \
		<atc2Desc>' + '' + '</atc2Desc> \
		<atc2>' + '' + '</atc2> \
		<atcIC011>' + taxpayerBean.atcIC011 + '</atcIC011> \
		<atcIC021>' + taxpayerBean.atcIC021 + '</atcIC021> \
		<effectivityDateFrom>' + taxpayerBean.effectivityDateFrom + '</effectivityDateFrom> \
		<effectivityDateTo>' + taxpayerBean.effectivityDateFrom + '</effectivityDateTo> \
		<legalBasisTaxExemption>' + taxpayerBean.legalBasisTaxExemption + '</legalBasisTaxExemption> \
		<investmentPromotionAgency>' + taxpayerBean.investmentPromotionAgency + '</investmentPromotionAgency> \
		<subStreet>' + taxpayerBean.subStreet + '</subStreet> \
		<street>' + taxpayerBean.street + '</street> \
		<city>' + taxpayerBean.city + '</city> \
		<offlineFormVersion>' + taxpayerBean.offlineFormVersion + '</offlineFormVersion> \
	</taxpayerBean>';


    // Total Taxpayer Bean
    var totalTaxpayerBeanws = '<totalTaxpayerBean> \
		<totalIncomeTaxDue>' + totalTaxpayerBean.totalIncomeTaxDue + '</totalIncomeTaxDue> \
		<totalTaxCredits>' + totalTaxpayerBean.totalTaxCredits + '</totalTaxCredits> \
		<totalPenalties>' + totalTaxpayerBean.totalPenalties + '</totalPenalties> \
		<netTaxPayable>' + '' + '</netTaxPayable> \
		<taxFilerTaxDue>' + '' + '</taxFilerTaxDue> \
		<taxFilerSpouseTaxDue>' + '' + '</taxFilerSpouseTaxDue> \
		<taxFilerCredits>' + '' + '</taxFilerCredits> \
		<taxFilerSpouseCredits>' + '' + '</taxFilerSpouseCredits> \
		<portionOfTaxPayableAllowed>' + '' + '</portionOfTaxPayableAllowed> \
		<totalAmountPayableUponFilling>' + '' + '</totalAmountPayableUponFilling> \
		<totalFinalTaxWithheld>' + totalTaxpayerBean.totalFinalTaxWithheld + '</totalFinalTaxWithheld> \
		<totalTaxPayable>' + '' + '</totalTaxPayable> \
		<netAmountTaxPayable>' + '' + '</netAmountTaxPayable> \
		<communityTaxCertificate>' + totalTaxpayerBean.communityTaxCertificate + '</communityTaxCertificate> \
		<dateOfIssue>' + totalTaxpayerBean.dateOfIssue + '</dateOfIssue> \
		<placeOfIssue>' + totalTaxpayerBean.placeOfIssue + '</placeOfIssue> \
		<amountIfCTC>' + totalTaxpayerBean.amountIfCTC + '</amountIfCTC> \
		<overPayment>' + totalTaxpayerBean.overPayment + '</overPayment> \
		<totalAmountPayable>' + totalTaxpayerBean.totalAmountPayable + '</totalAmountPayable> \
		<totalIncomeReceiptsExemptFromIncomeTax>' + totalTaxpayerBean.totalIncomeReceiptsExemptFromIncomeTax + '</totalIncomeReceiptsExemptFromIncomeTax> \
	</totalTaxpayerBean>';


    // Computation of Tax Bean
    var computationOfTaxBeanws = '<computationOfTaxBean> \
		<costSalesServices>' + computationOfTaxBean.costSalesServices + '</costSalesServices> \
		<grossIncomeFromOperation>' + computationOfTaxBean.grossIncomeFromOperation + '</grossIncomeFromOperation> \
		<incomeTaxDueOtherThanMCIT>' + computationOfTaxBean.incomeTaxDueOtherThanMCIT + '</incomeTaxDueOtherThanMCIT> \
		<incomeTaxRate>' + computationOfTaxBean.incomeTaxRate + '</incomeTaxRate> \
		<incomeTaxRateEX>' + computationOfTaxBean.incomeTaxRateEX + '</incomeTaxRateEX> \
		<minimumCorporateIncomeTax>' + computationOfTaxBean.minimumCorporateIncomeTax + '</minimumCorporateIncomeTax> \
		<netSalesRevenuesReceiptsFees>' + computationOfTaxBean.netSalesRevenuesReceiptsFees + '</netSalesRevenuesReceiptsFees> \
		<netTaxPayable46>' + computationOfTaxBean.netTaxPayable46 + '</netTaxPayable46> \
		<netTaxableIncome>' + computationOfTaxBean.netTaxableIncome + '</netTaxableIncome> \
		<nolco>' + computationOfTaxBean.nolco + '</nolco> \
		<nolcoDisabled>' + computationOfTaxBean.nolcoDisabled + '</nolcoDisabled> \
		<optionalStandardDeductions>' + computationOfTaxBean.optionalStandardDeductions + '</optionalStandardDeductions> \
		<optionalStandardDeductionsDisabled>' + computationOfTaxBean.optionalStandardDeductionsDisabled + '</optionalStandardDeductionsDisabled> \
		<ordinaryAllowableItemizedDeductions>' + computationOfTaxBean.ordinaryAllowableItemizedDeductions + '</ordinaryAllowableItemizedDeductions> \
		<ordinaryAllowableItemizedDeductionsDisabled>' + computationOfTaxBean.ordinaryAllowableItemizedDeductionsDisabled + '</ordinaryAllowableItemizedDeductionsDisabled> \
		<otherTaxableIncomeNotSubjectedToFinalTax>' + computationOfTaxBean.otherTaxableIncomeNotSubjectedToFinalTax + '</otherTaxableIncomeNotSubjectedToFinalTax> \
		<penaltyBean> \
		   <surcharge>' + computationOfTaxBean.surcharge + '</surcharge> \
		   <interest>' + computationOfTaxBean.interest + '</interest> \
		   <compromise>' + computationOfTaxBean.compromise + '</compromise> \
		   <totalPenalty>' + computationOfTaxBean.totalPenalty + '</totalPenalty> \
		</penaltyBean> \
		<specialAllowableItemizedDeductions36>' + computationOfTaxBean.specialAllowableItemizedDeductions36 + '</specialAllowableItemizedDeductions36> \
		<specialAllowableItemizedDeductions36Disabled>' + computationOfTaxBean.specialAllowableItemizedDeductions36Disabled + '</specialAllowableItemizedDeductions36Disabled> \
		<totalAmountPayable>' + computationOfTaxBean.totalAmountPayable + '</totalAmountPayable> \
		<totalGrossIncome>' + computationOfTaxBean.totalGrossIncome + '</totalGrossIncome> \
		<totalIncomeTaxDue44>' + computationOfTaxBean.totalIncomeTaxDue44 + '</totalIncomeTaxDue44> \
		<totalItemizedDeductions>' + computationOfTaxBean.totalItemizedDeductions + '</totalItemizedDeductions> \
		<totalTaxCreditsPayments45>' + computationOfTaxBean.totalTaxCreditsPayments45 + '</totalTaxCreditsPayments45> \
	</computationOfTaxBean>';


    // Tax Relief Availment Bean
    var taxReliefAvailmentBeanws = '<taxReliefAvailmentBean> \
		<regularIncomeTaxOtherwiseDue>' + '' + '</regularIncomeTaxOtherwiseDue> \
		<specialAllowableItemizedDeduction>' + taxReliefAvailmentBean.specialAllowableItemizedDeduction + '</specialAllowableItemizedDeduction> \
		<specialTaxCredits>' + taxReliefAvailmentBean.specialTaxCredits + '</specialTaxCredits> \
		<totalTaxReliefAvailment>' + taxReliefAvailmentBean.totalTaxReliefAvailment + '</totalTaxReliefAvailment> \
	</taxReliefAvailmentBean>';


    // External Auditor Accredited Tax Agent Bean
    var externalAuditorAccreditedTaxAgentBeanws = '<externalAuditorAccreditedTaxAgentBean> \
    	<nameOfExternalAuditor>' + externalAuditorAccreditedTaxAgentBean.nameOfExternalAuditor + '</nameOfExternalAuditor> \
    	<externalAuditorTIN>' + externalAuditorAccreditedTaxAgentBean.externalAuditorTIN + '</externalAuditorTIN> \
    	<nameOfSigningPartner>' + externalAuditorAccreditedTaxAgentBean.nameOfSigningPartner + '</nameOfSigningPartner> \
    	<signingPartnerTIN>' + externalAuditorAccreditedTaxAgentBean.signingPartnerTIN + '</signingPartnerTIN> \
    	<birAccreditationNumber>' + externalAuditorAccreditedTaxAgentBean.birAccreditationNumber + '</birAccreditationNumber> \
    	<isssueDate>' + externalAuditorAccreditedTaxAgentBean.isssueDate + '</isssueDate> \
    	<expiryDate>' + externalAuditorAccreditedTaxAgentBean.expiryDate + '</expiryDate> \
    	<accreditedTaxAgentBranchCode>' + externalAuditorAccreditedTaxAgentBean.accreditedTaxAgentBranchCode + '</accreditedTaxAgentBranchCode> \
    	<signingPartnerBranchCode>' + externalAuditorAccreditedTaxAgentBean.signingPartnerBranchCode + '</signingPartnerBranchCode> \
    </externalAuditorAccreditedTaxAgentBean>';


    // Sales Revenue Bean
    var salesRevenueBeanws = '<salesRevenueBean> \
    	<taxWthldGoods>' + salesRevenueBean.taxWthldGoods + '</taxWthldGoods> \
    	<taxWthldServices>' + salesRevenueBean.taxWthldServices + '</taxWthldServices> \
    	<taxWthldLease>' + salesRevenueBean.taxWthldLease + '</taxWthldLease> \
    	<taxWthldTotal>' + salesRevenueBean.taxWthldTotal + '</taxWthldTotal> \
    	<salesReturns>' + salesRevenueBean.salesReturns + '</salesReturns> \
    	<netSalesSched1>' + salesRevenueBean.netSalesSched1 + '</netSalesSched1> \
    </salesRevenueBean>';


    // Cost of Sales Bean
    var costOfSaleBeanws = '<costOfSaleBean> \
    	<goodsInvBeg>' + costOfSaleBean.goodsInvBeg + '</goodsInvBeg> \
    	<purGoods>' + costOfSaleBean.purGoods + '</purGoods> \
    	<goodsAvail>' + costOfSaleBean.goodsAvail + '</goodsAvail> \
    	<goodsInvEnd>' + costOfSaleBean.goodsInvEnd + '</goodsInvEnd> \
    	<costSales>' + costOfSaleBean.costSales + '</costSales> \
    	<directMatsBeg>' + costOfSaleBean.directMatsBeg + '</directMatsBeg> \
    	<purDirectMats>' + costOfSaleBean.purDirectMats + '</purDirectMats> \
    	<matsAvail>' + costOfSaleBean.matsAvail + '</matsAvail> \
    	<directMatsEnd>' + costOfSaleBean.directMatsEnd + '</directMatsEnd> \
    	<rawMats>' + costOfSaleBean.rawMats + '</rawMats> \
    	<directLabor>' + costOfSaleBean.directLabor + '</directLabor> \
    	<manufacturingOverhead>' + costOfSaleBean.manufacturingOverhead + '</manufacturingOverhead> \
    	<totalManufacturingCost>' + costOfSaleBean.totalManufacturingCost + '</totalManufacturingCost> \
    	<workInProgressBeg>' + costOfSaleBean.workInProgressBeg + '</workInProgressBeg> \
    	<winProgressEnd>' + costOfSaleBean.winProgressEnd + '</winProgressEnd> \
    	<costGoodsManufactured>' + costOfSaleBean.costGoodsManufactured + '</costGoodsManufactured> \
    	<finishedGoodsBeg>' + costOfSaleBean.finishedGoodsBeg + '</finishedGoodsBeg> \
    	<finishedGoodsEnd>' + costOfSaleBean.finishedGoodsEnd + '</finishedGoodsEnd> \
    	<totalCostGoodsManufacturedAndSold>' + costOfSaleBean.totalCostGoodsManufacturedAndSold + '</totalCostGoodsManufacturedAndSold> \
    	<salaries>' + costOfSaleBean.salaries + '</salaries> \
    	<materials>' + costOfSaleBean.materials + '</materials> \
    	<sched2CDepreciation>' + costOfSaleBean.sched2CDepreciation + '</sched2CDepreciation> \
    	<sched2CRental>' + costOfSaleBean.sched2CRental + '</sched2CRental> \
    	<outsideServ>' + costOfSaleBean.outsideServ + '</outsideServ> \
    	<others>' + costOfSaleBean.others + '</others> \
    	<costService>' + costOfSaleBean.costService + '</costService> \
    	<totalCostSalesAndServices>' + costOfSaleBean.totalCostSalesAndServices + '</totalCostSalesAndServices> \
    </costOfSaleBean>';



    // Other Taxable Income Not Subjected to Final Tax Bean Part 1
    var otherTaxableIncomeNotSubjectedToFinalTaxBean1 = '<otherTaxableIncomeNotSubjectedToFinalTaxBean> \
    	<otherTaxableIncomeNotSubjectToFinalTaxDescFirst>' + schedule3.otherTaxableIncomeNotSubjectToFinalTaxDescFirst + '</otherTaxableIncomeNotSubjectToFinalTaxDescFirst> \
    	<otherTaxableIncomeNotSubjectToFinalTaxDescSecond>' + schedule3.otherTaxableIncomeNotSubjectToFinalTaxDescSecond + '</otherTaxableIncomeNotSubjectToFinalTaxDescSecond> \
    	<otherTaxableIncomeNotSubjectToFinalTaxDescThird>' + schedule3.otherTaxableIncomeNotSubjectToFinalTaxDescThird + '</otherTaxableIncomeNotSubjectToFinalTaxDescThird> \
    	<otherTaxableIncomeNotSubjectToFinalTaxValueFirst>' + schedule3.otherTaxableIncomeNotSubjectToFinalTaxValueFirst + '</otherTaxableIncomeNotSubjectToFinalTaxValueFirst> \
    	<otherTaxableIncomeNotSubjectToFinalTaxValueSecond>' + schedule3.otherTaxableIncomeNotSubjectToFinalTaxValueSecond + '</otherTaxableIncomeNotSubjectToFinalTaxValueSecond> \
    	<otherTaxableIncomeNotSubjectToFinalTaxValueThird>' + schedule3.otherTaxableIncomeNotSubjectToFinalTaxValueThird + '</otherTaxableIncomeNotSubjectToFinalTaxValueThird> \
    	<otherTaxableIncomeNotSubjectToFinalTaxValueTotal>' + schedule3.otherTaxableIncomeNotSubjectToFinalTaxValueTotal + '</otherTaxableIncomeNotSubjectToFinalTaxValueTotal>';

    // Other Taxable Income Not Subjected to Final Tax Value Bean List
    var otherTaxableIncomeNotSubjectToFinalTaxValueBeanListHolder = [];

    for (key in otherTaxableIncomeNotSubjectToFinalTaxList) {

        var otherTaxableIncomeNotSubjectToFinalTaxValueBeansws = '<otherTaxableIncomeNotSubjectToFinalTaxValue> \
	    		<otherExpandableDesc>' + otherTaxableIncomeNotSubjectToFinalTaxList[key].description + '</otherExpandableDesc> \
	    		<otherExpandableAmount>' + otherTaxableIncomeNotSubjectToFinalTaxList[key].amount + '</otherExpandableAmount> \
	    		<otherExpandableAmountSpecial>' + '' + '</otherExpandableAmountSpecial> \
	    		<otherExpandableAmountRegular>' + '' + '</otherExpandableAmountRegular> \
	    		<otherExpandableAmountTotal>' + '' + '</otherExpandableAmountTotal> \
    		</otherTaxableIncomeNotSubjectToFinalTaxValue>';
        otherTaxableIncomeNotSubjectToFinalTaxValueBeanListHolder.push(otherTaxableIncomeNotSubjectToFinalTaxValueBeansws);
    };

    var otherTaxableIncomeNotSubjectToFinalTaxValueBeanswsHolder = '';

    for (key in otherTaxableIncomeNotSubjectToFinalTaxValueBeanListHolder) {
        otherTaxableIncomeNotSubjectToFinalTaxValueBeanswsHolder += otherTaxableIncomeNotSubjectToFinalTaxValueBeanListHolder[key];
    };

    // Other Taxable Income Not Subjected to Final Tax Bean Part 1
    var otherTaxableIncomeNotSubjectedToFinalTaxBean2 = '</otherTaxableIncomeNotSubjectedToFinalTaxBean>';


    // Ordinary Allowable Itemized Deductions Bean Part 1
    var ordinaryAllowableItemizedDeductionBean1 = '<ordinaryAllowableItemizedDeductionBean> \
	    <adAndPromotionsVal>' + schedule4.adAndPromotionsVal + '</adAndPromotionsVal> \
	    <amortizatiosDescSecond>' + schedule4.amortizatiosDescSecond + '</amortizatiosDescSecond> \
	    <amortizatiosDescThird>' + schedule4.amortizatiosDescThird + '</amortizatiosDescThird> \
	    <amortizatiosDescFourth>' + schedule4.amortizatiosDescFourth + '</amortizatiosDescFourth> \
	    <amortizatiosValSecond>' + schedule4.amortizatiosValSecond + '</amortizatiosValSecond> \
	    <amortizatiosValThird>' + schedule4.amortizatiosValThird + '</amortizatiosValThird> \
	    <amortizatiosValFourth>' + schedule4.amortizatiosValFourth + '</amortizatiosValFourth>';

    // Amortizations List
    var listAmortizationsBeanListHolder = [];

    for (key in amortizationList) {

        var listAmortizationsBeansws = '<listAmortizations> \		       <otherExpandableDesc>' + amortizationList[key].description + '</otherExpandableDesc> \		       <otherExpandableAmount>' + amortizationList[key].amount + '</otherExpandableAmount> \		       <otherExpandableAmountSpecial>' + '' + '</otherExpandableAmountSpecial> \		       <otherExpandableAmountRegular>' + '' + '</otherExpandableAmountRegular> \		       <otherExpandableAmountTotal>' + '' + '</otherExpandableAmountTotal> \
			</listAmortizations>';
        listAmortizationsBeanListHolder.push(listAmortizationsBeansws);
    };

    var listAmortizationsBeanswsHolder = '';

    for (key in listAmortizationsBeanListHolder) {
        listAmortizationsBeanswsHolder += listAmortizationsBeanListHolder[key];
    };

    // Ordinary Allowable Itemized Deductions Bean Part 2
    var ordinaryAllowableItemizedDeductionBean2 = '<badDebts>' + schedule4.badDebts + '</badDebts> \
	    <charitableContributions>' + schedule4.charitableContributions + '</charitableContributions> \
	    <commissions>' + schedule4.commissions + '</commissions> \
	    <communicationLightWater>' + schedule4.communicationLightWater + '</communicationLightWater> \
	    <utilities>' + schedule4.utilities + '</utilities> \
	    <depletion>' + schedule4.depletion + '</depletion> \
	    <depreciation>' + schedule4.depreciation + '</depreciation> \
	    <directorFee>' + schedule4.directorFee + '</directorFee> \
	    <fringeBenefits>' + schedule4.fringeBenefits + '</fringeBenefits> \
	    <fuelAndOil>' + schedule4.fuelAndOil + '</fuelAndOil> \
	    <insurance>' + schedule4.insurance + '</insurance> \
	    <iterest>' + schedule4.iterest + '</iterest> \
	    <janitorialAndMessengerial>' + schedule4.janitorialAndMessengerial + '</janitorialAndMessengerial> \
	    <losses>' + schedule4.losses + '</losses> \
	    <mgmtAndConsultancyFee>' + schedule4.mgmtAndConsultancyFee + '</mgmtAndConsultancyFee> \
	    <misc>' + schedule4.misc + '</misc> \
	    <officeSupplies>' + schedule4.officeSupplies + '</officeSupplies> \
	    <otherServices>' + schedule4.otherServices + '</otherServices> \
	    <professionalFees>' + schedule4.professionalFees + '</professionalFees> \
	    <schedGRental>' + schedule4.schedGRental + '</schedGRental> \
	    <repairLabor>' + schedule4.repairLabor + '</repairLabor> \
	    <repairMaterials>' + schedule4.repairMaterials + '</repairMaterials> \
	    <entertainment>' + schedule4.entertainment + '</entertainment> \
	    <researchAndDev>' + schedule4.researchAndDev + '</researchAndDev> \
	    <royalties>' + schedule4.royalties + '</royalties> \
	    <salariesAndAllownces>' + schedule4.salariesAndAllownces + '</salariesAndAllownces> \
	    <securityServices>' + schedule4.securityServices + '</securityServices> \
	    <otherContributions>' + schedule4.otherContributions + '</otherContributions> \
	    <taxesAndLiscenses>' + schedule4.taxesAndLiscenses + '</taxesAndLiscenses> \
	    <tollingFees>' + schedule4.tollingFees + '</tollingFees> \
	    <trainingsAndSeminars>' + schedule4.trainingsAndSeminars + '</trainingsAndSeminars> \
	    <travelTransportaion>' + schedule4.travelTransportaion + '</travelTransportaion> \
	    <othersFirstDescFirst>' + schedule4.othersFirstDescFirst + '</othersFirstDescFirst> \
	    <othersFirstDescSecond>' + schedule4.othersFirstDescSecond + '</othersFirstDescSecond> \
	    <othersFirstDescThird>' + schedule4.othersFirstDescThird + '</othersFirstDescThird> \
	    <othersFirstDescfourth>' + schedule4.othersFirstDescfourth + '</othersFirstDescfourth> \
	    <otherFirstValue>' + schedule4.otherFirstValue + '</otherFirstValue> \
	    <otherSecondValue>' + schedule4.otherSecondValue + '</otherSecondValue> \
	    <otherThirdValue>' + schedule4.otherThirdValue + '</otherThirdValue> \
	    <otherFourthValue>' + schedule4.otherFourthValue + '</otherFourthValue>';

    // Other Ordinary Allowable Itemized Deductions List

    var listOtherOrdinaryItemizedDeductionsBeanListHolder = [];

    for (key in otherList) {

        var listOtherOrdinaryItemizedDeductionsBeansws = '<listOtherOrdinaryItemizedDeductions> \
			       <otherExpandableDesc>' + otherList[key].description + '</otherExpandableDesc> \
			       <otherExpandableAmount>' + otherList[key].amount + '</otherExpandableAmount> \
			       <otherExpandableAmountSpecial>' + '' + '</otherExpandableAmountSpecial> \
				   <otherExpandableAmountRegular>' + '' + '</otherExpandableAmountRegular> \
				   <otherExpandableAmountTotal>' + '' + '</otherExpandableAmountTotal> \
			</listOtherOrdinaryItemizedDeductions>';
        listOtherOrdinaryItemizedDeductionsBeanListHolder.push(listOtherOrdinaryItemizedDeductionsBeansws);
    };

    var listOtherOrdinaryItemizedDeductionsBeanswsHolder = '';

    for (key in listOtherOrdinaryItemizedDeductionsBeanListHolder) {
        listOtherOrdinaryItemizedDeductionsBeanswsHolder += listOtherOrdinaryItemizedDeductionsBeanListHolder[key];
    };


    // Ordinary Allowable Itemized Deductions Bean Part 3
    var ordinaryAllowableItemizedDeductionBean3 = '<totalOrdinaryAllowableItemizedDeductions>' + schedule4.totalOrdinaryAllowableItemizedDeductions + '</totalOrdinaryAllowableItemizedDeductions> \
    	</ordinaryAllowableItemizedDeductionBean>';

    // Special Allowable Itemized Deductions Bean Part 1
    var specialAllowableItemizedDeductionBean1 = '<specialAllowableItemizedDeductionBean> \
    	<specialAllowableItemizedDeductionsDescription1>' + schedule5.specialAllowableItemizedDeductionsDescription1 + '</specialAllowableItemizedDeductionsDescription1> \
		<specialAllowableItemizedDeductionsDescription2>' + schedule5.specialAllowableItemizedDeductionsDescription2 + '</specialAllowableItemizedDeductionsDescription2> \
		<specialAllowableItemizedDeductionsDescription3>' + schedule5.specialAllowableItemizedDeductionsDescription3 + '</specialAllowableItemizedDeductionsDescription3> \
		<specialAllowableItemizedDeductionsDescription4>' + schedule5.specialAllowableItemizedDeductionsDescription4 + '</specialAllowableItemizedDeductionsDescription4> \
		<specialAllowableItemizedDeductionsLegalBasis1>' + schedule5.specialAllowableItemizedDeductionsLegalBasis1 + '</specialAllowableItemizedDeductionsLegalBasis1> \
		<specialAllowableItemizedDeductionsLegalBasis2>' + schedule5.specialAllowableItemizedDeductionsLegalBasis2 + '</specialAllowableItemizedDeductionsLegalBasis2> \
		<specialAllowableItemizedDeductionsLegalBasis3>' + schedule5.specialAllowableItemizedDeductionsLegalBasis3 + '</specialAllowableItemizedDeductionsLegalBasis3> \
		<specialAllowableItemizedDeductionsLegalBasis4>' + schedule5.specialAllowableItemizedDeductionsLegalBasis4 + '</specialAllowableItemizedDeductionsLegalBasis4> \
		<specialAllowableItemizedDeductionsAmount1>' + schedule5.specialAllowableItemizedDeductionsAmount1 + '</specialAllowableItemizedDeductionsAmount1> \
		<specialAllowableItemizedDeductionsAmount2>' + schedule5.specialAllowableItemizedDeductionsAmount2 + '</specialAllowableItemizedDeductionsAmount2> \
		<specialAllowableItemizedDeductionsAmount3>' + schedule5.specialAllowableItemizedDeductionsAmount3 + '</specialAllowableItemizedDeductionsAmount3> \
		<specialAllowableItemizedDeductionsAmount4>' + schedule5.specialAllowableItemizedDeductionsAmount4 + '</specialAllowableItemizedDeductionsAmount4> \
		<totalSpecialAllowableItemizedDeductions>' + schedule5.totalSpecialAllowableItemizedDeductions + '</totalSpecialAllowableItemizedDeductions>';


    // Special Allowable Itemized Deductions List
    var listSched5AdditionalAttachmentsBeanListHolder = [];

    for (key in specialAllowableItemizedDeductionsList) {

        var listSched5AdditionalAttachmentsBeansws = '<listSched5AdditionalAttachments> \
			       <otherExpandableDesc>' + specialAllowableItemizedDeductionsList[key].description + '</otherExpandableDesc> \
			       <otherExpandableAmount>' + specialAllowableItemizedDeductionsList[key].amount + '</otherExpandableAmount> \
			       <otherExpandableAmountSpecial>' + '' + '</otherExpandableAmountSpecial> \
			       <otherExpandableAmountRegular>' + '' + '</otherExpandableAmountRegular> \
			       <otherExpandableAmountTotal>' + '' + '</otherExpandableAmountTotal> \
			       <description>' + '' + '</description> \
			       <legalBasis>' + specialAllowableItemizedDeductionsList[key].legalBasis + '</legalBasis> \
			       <value>' + '' + '</value> \
			    </listSched5AdditionalAttachments>';
        listSched5AdditionalAttachmentsBeanListHolder.push(listSched5AdditionalAttachmentsBeansws);
    };

    var listSched5AdditionalAttachmentsBeanswsHolder = '';

    for (key in listSched5AdditionalAttachmentsBeanListHolder) {
        listSched5AdditionalAttachmentsBeanswsHolder += listSched5AdditionalAttachmentsBeanListHolder[key];
    };


    // Special Allowable Itemized Deductions Bean Part 2
    var specialAllowableItemizedDeductionBean2 = '</specialAllowableItemizedDeductionBean>';


    // Computation of Net Operating Loss Carry Over Bean
    var computationOfNetOperatingLossCarryOverBeanws = '<computationOfNetOperatingLossCarryOverBean> \
    	<grossIncome>' + computationOfNetOperatingLossCarryOverBean.grossIncome + '</grossIncome> \
    	<lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw>' + computationOfNetOperatingLossCarryOverBean.lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw + '</lessTotalDeductinsExclusiveOfNOLCOAndDeductionsUnderSpecialLaw> \
    	<netOperatingLoss>' + computationOfNetOperatingLossCarryOverBean.netOperatingLoss + '</netOperatingLoss> \
	    <listSched6OperatingLoss> \
    		<sequenceNumber>' + '' + '</sequenceNumber> \
    		<year>' + '' + '</year> \
	    </listSched6OperatingLoss> \
	    <netOperatingLossYearIncurred1>' + computationOfNetOperatingLossCarryOverBean.netOperatingLossYearIncurred1 + '</netOperatingLossYearIncurred1> \
	    <netOperatingLossYearIncurred2>' + computationOfNetOperatingLossCarryOverBean.netOperatingLossYearIncurred2 + '</netOperatingLossYearIncurred2> \
	    <netOperatingLossYearIncurred3>' + computationOfNetOperatingLossCarryOverBean.netOperatingLossYearIncurred3 + '</netOperatingLossYearIncurred3> \
		<netOperatingLossYearIncurred4>' + computationOfNetOperatingLossCarryOverBean.netOperatingLossYearIncurred4 + '</netOperatingLossYearIncurred4> \
		<netOperatingLossAmount1>' + computationOfNetOperatingLossCarryOverBean.netOperatingLossAmount1 + '</netOperatingLossAmount1> \
		<netOperatingLossAmount2>' + computationOfNetOperatingLossCarryOverBean.netOperatingLossAmount2 + '</netOperatingLossAmount2> \
		<netOperatingLossAmount3>' + computationOfNetOperatingLossCarryOverBean.netOperatingLossAmount3 + '</netOperatingLossAmount3> \
		<netOperatingLossAmount4>' + computationOfNetOperatingLossCarryOverBean.netOperatingLossAmount4 + '</netOperatingLossAmount4> \
		<NOLCOAppliedPreviousYear1>' + computationOfNetOperatingLossCarryOverBean.NOLCOAppliedPreviousYear1 + '</NOLCOAppliedPreviousYear1> \
		<NOLCOAppliedPreviousYear2>' + computationOfNetOperatingLossCarryOverBean.NOLCOAppliedPreviousYear2 + '</NOLCOAppliedPreviousYear2> \
		<NOLCOAppliedPreviousYear3>' + computationOfNetOperatingLossCarryOverBean.NOLCOAppliedPreviousYear3 + '</NOLCOAppliedPreviousYear3> \
		<NOLCOAppliedPreviousYear4>' + computationOfNetOperatingLossCarryOverBean.NOLCOAppliedPreviousYear4 + '</NOLCOAppliedPreviousYear4> \
		<NOLCOExpired1>' + computationOfNetOperatingLossCarryOverBean.NOLCOExpired1 + '</NOLCOExpired1> \
		<NOLCOExpired2>' + computationOfNetOperatingLossCarryOverBean.NOLCOExpired2 + '</NOLCOExpired2> \
		<NOLCOExpired3>' + computationOfNetOperatingLossCarryOverBean.NOLCOExpired3 + '</NOLCOExpired3> \
		<NOLCOExpired4>' + computationOfNetOperatingLossCarryOverBean.NOLCOExpired4 + '</NOLCOExpired4> \
		<NOLCOAppliedCurrentYear1>' + computationOfNetOperatingLossCarryOverBean.NOLCOAppliedCurrentYear1 + '</NOLCOAppliedCurrentYear1> \
		<NOLCOAppliedCurrentYear2>' + computationOfNetOperatingLossCarryOverBean.NOLCOAppliedCurrentYear2 + '</NOLCOAppliedCurrentYear2> \
		<NOLCOAppliedCurrentYear3>' + computationOfNetOperatingLossCarryOverBean.NOLCOAppliedCurrentYear3 + '</NOLCOAppliedCurrentYear3> \
		<NOLCOAppliedCurrentYear4>' + computationOfNetOperatingLossCarryOverBean.NOLCOAppliedCurrentYear4 + '</NOLCOAppliedCurrentYear4> \
		<netOperatingLossUnapplied1>' + computationOfNetOperatingLossCarryOverBean.netOperatingLossUnapplied1 + '</netOperatingLossUnapplied1> \
		<netOperatingLossUnapplied2>' + computationOfNetOperatingLossCarryOverBean.netOperatingLossUnapplied2 + '</netOperatingLossUnapplied2> \
		<netOperatingLossUnapplied3>' + computationOfNetOperatingLossCarryOverBean.netOperatingLossUnapplied3 + '</netOperatingLossUnapplied3> \
		<netOperatingLossUnapplied4>' + computationOfNetOperatingLossCarryOverBean.netOperatingLossUnapplied4 + '</netOperatingLossUnapplied4> \
		<totalNOLCO>' + '' + '</totalNOLCO> \
	</computationOfNetOperatingLossCarryOverBean>';

    // Tax Credits Payments Bean Part 1
    var taxCreditsPaymentsBean1 = '<taxCreditsPaymentsBean> \
		<referenceId>' + schedule7.referenceId + '</referenceId> \
		<priorYearsExcessCreditsOtherThanMCIT>' + schedule7.priorYearsExcessCreditsOtherThanMCIT + '</priorYearsExcessCreditsOtherThanMCIT> \
		<incomeTaxPaymentUnderMCIT>' + schedule7.incomeTaxPaymentUnderMCIT + '</incomeTaxPaymentUnderMCIT> \
		<incomeTaxPaymentUnderRegularRate>' + schedule7.incomeTaxPaymentUnderRegularRate + '</incomeTaxPaymentUnderRegularRate> \
		<excessMCIT>' + schedule7.excessMCIT + '</excessMCIT> \
		<creditableTaxWithheldFromPrevQuarters>' + schedule7.creditableTaxWithheldFromPrevQuarters + '</creditableTaxWithheldFromPrevQuarters> \
		<creditableTaxWithheldFromTheFourthQuarter>' + schedule7.creditableTaxWithheldFromTheFourthQuarter + '</creditableTaxWithheldFromTheFourthQuarter> \
		<foreignTaxCredits>' + schedule7.foreignTaxCredits + '</foreignTaxCredits> \
		<taxPaidInReturn>' + schedule7.taxPaidInReturn + '</taxPaidInReturn> \
		<sched7SpecialTaxCredits>' + schedule7.sched7SpecialTaxCredits + '</sched7SpecialTaxCredits> \
		<otherCreditsPaymentsDescription1>' + taxCreditsPaymentsBean.otherCreditsPaymentsDescription1 + '</otherCreditsPaymentsDescription1> \
		<otherCreditsPaymentsAmount1>' + taxCreditsPaymentsBean.otherCreditsPaymentsAmount1 + '</otherCreditsPaymentsAmount1> \
		<otherCreditsPaymentsDescription2>' + taxCreditsPaymentsBean.otherCreditsPaymentsDescription2 + '</otherCreditsPaymentsDescription2> \
		<otherCreditsPaymentsAmount2>' + taxCreditsPaymentsBean.otherCreditsPaymentsAmount2 + '</otherCreditsPaymentsAmount2>';

    // Other Credits
    var otherCreditsBeanListHolder = [];

    for (key in otherCreditsBeanList) {

        var otherCreditsBeansws = '<otherCreditsBean> \
				<creditDesc>' + otherCreditsBeanList[key].description + '</creditDesc> \
				<creditExempt>' + otherCreditsBeanList[key].amount + '</creditExempt> \
				<creditRegular>' + '' + '</creditRegular> \
				<creditSpecial>' + '' + '</creditSpecial> \
				<creditTotal>' + '' + '</creditTotal> \
			    <sequenceNumber>' + '' + '</sequenceNumber> \
			</otherCreditsBean>';
        otherCreditsBeanListHolder.push(otherCreditsBeansws);
    };

    var otherCreditsBeanswsHolder = '';

    for (key in otherCreditsBeanListHolder) {
        otherCreditsBeanswsHolder += otherCreditsBeanListHolder[key];
    };

    // Tax Credits Payments Bean Part 2
    var taxCreditsPaymentsBean2 = '<totalTaxCreditsPayments>' + '' + '</totalTaxCreditsPayments> \
	 </taxCreditsPaymentsBean>';


    // Computation of Minimum Corporate Income Tax Bean Part 1
    var computationOfMinimumCorporateIncomeTaxBeanws = '<computationOfMinimumCorporateIncomeTaxBean> \
		<balanceOfExcessMCIT1>' + computationOfMinimunCorporateIncomeBean.balanceOfExcessMCIT1 + '</balanceOfExcessMCIT1> \
		<balanceOfExcessMCIT2>' + computationOfMinimunCorporateIncomeBean.balanceOfExcessMCIT2 + '</balanceOfExcessMCIT2> \
		<balanceOfExcessMCIT3>' + computationOfMinimunCorporateIncomeBean.balanceOfExcessMCIT3 + '</balanceOfExcessMCIT3> \
		<excessMCITAppliedCurrently1>' + computationOfMinimunCorporateIncomeBean.excessMCITAppliedCurrently1 + '</excessMCITAppliedCurrently1> \
		<excessMCITAppliedCurrently2>' + computationOfMinimunCorporateIncomeBean.excessMCITAppliedCurrently2 + '</excessMCITAppliedCurrently2> \
		<excessMCITAppliedCurrently3>' + computationOfMinimunCorporateIncomeBean.excessMCITAppliedCurrently3 + '</excessMCITAppliedCurrently3> \
		<excessMCITAppliedPreviously1>' + computationOfMinimunCorporateIncomeBean.excessMCITAppliedPreviously1 + '</excessMCITAppliedPreviously1> \
		<excessMCITAppliedPreviously2>' + computationOfMinimunCorporateIncomeBean.excessMCITAppliedPreviously2 + '</excessMCITAppliedPreviously2> \
		<excessMCITAppliedPreviously3>' + computationOfMinimunCorporateIncomeBean.excessMCITAppliedPreviously3 + '</excessMCITAppliedPreviously3> \
		<excessMCITOverNormalTax1>' + computationOfMinimunCorporateIncomeBean.excessMCITOverNormalTax1 + '</excessMCITOverNormalTax1> \
		<excessMCITOverNormalTax2>' + computationOfMinimunCorporateIncomeBean.excessMCITOverNormalTax2 + '</excessMCITOverNormalTax2> \
		<excessMCITOverNormalTax3>' + computationOfMinimunCorporateIncomeBean.excessMCITOverNormalTax3 + '</excessMCITOverNormalTax3> \
		<expiredPortionOfExcessMCIT1>' + computationOfMinimunCorporateIncomeBean.expiredPortionOfExcessMCIT1 + '</expiredPortionOfExcessMCIT1> \
		<expiredPortionOfExcessMCIT2>' + computationOfMinimunCorporateIncomeBean.expiredPortionOfExcessMCIT2 + '</expiredPortionOfExcessMCIT2> \
		<expiredPortionOfExcessMCIT3>' + computationOfMinimunCorporateIncomeBean.expiredPortionOfExcessMCIT3 + '</expiredPortionOfExcessMCIT3> \
		<listSched8AdditionalAttachments> \
		   <balanceOfExcessMCIT>' + computationOfMinimunCorporateIncomeBean.balanceOfExcessMCIT1 + '</balanceOfExcessMCIT> \
		   <excessMCITAppliedCurrently>' + computationOfMinimunCorporateIncomeBean.excessMCITAppliedCurrently1 + '</excessMCITAppliedCurrently> \
		   <excessMCITAppliedPreviously>' + computationOfMinimunCorporateIncomeBean.excessMCITAppliedPreviously1 + '</excessMCITAppliedPreviously> \
		   <excessMCITOverNormalTax>' + computationOfMinimunCorporateIncomeBean.excessMCITOverNormalTax1 + '</excessMCITOverNormalTax> \
		   <expiredPortionOfExcessMCIT>' + computationOfMinimunCorporateIncomeBean.expiredPortionOfExcessMCIT1 + '</expiredPortionOfExcessMCIT> \
		   <mcit>' + computationOfMinimunCorporateIncomeBean.mcit1 + '</mcit> \
		   <mcitYear>' + computationOfMinimunCorporateIncomeBean.mcitYear1 + '</mcitYear> \
		   <normalIncomeTax>' + computationOfMinimunCorporateIncomeBean.normalIncomeTax1 + '</normalIncomeTax> \
		   <balanceOfExcessMCIT>' + computationOfMinimunCorporateIncomeBean.balanceOfExcessMCIT2 + '</balanceOfExcessMCIT> \
		   <excessMCITAppliedCurrently>' + computationOfMinimunCorporateIncomeBean.excessMCITAppliedCurrently2 + '</excessMCITAppliedCurrently> \
		   <excessMCITAppliedPreviously>' + computationOfMinimunCorporateIncomeBean.excessMCITAppliedPreviously2 + '</excessMCITAppliedPreviously> \
		   <excessMCITOverNormalTax>' + computationOfMinimunCorporateIncomeBean.excessMCITOverNormalTax2 + '</excessMCITOverNormalTax> \
		   <expiredPortionOfExcessMCIT>' + computationOfMinimunCorporateIncomeBean.expiredPortionOfExcessMCIT2 + '</expiredPortionOfExcessMCIT> \
		   <mcit>' + computationOfMinimunCorporateIncomeBean.mcit2 + '</mcit> \
		   <mcitYear>' + computationOfMinimunCorporateIncomeBean.mcitYear2 + '</mcitYear> \
		   <normalIncomeTax>' + computationOfMinimunCorporateIncomeBean.normalIncomeTax2 + '</normalIncomeTax> \
		   <balanceOfExcessMCIT>' + computationOfMinimunCorporateIncomeBean.balanceOfExcessMCIT3 + '</balanceOfExcessMCIT> \
		   <excessMCITAppliedCurrently>' + computationOfMinimunCorporateIncomeBean.excessMCITAppliedCurrently3 + '</excessMCITAppliedCurrently> \
		   <excessMCITAppliedPreviously>' + computationOfMinimunCorporateIncomeBean.excessMCITAppliedPreviously3 + '</excessMCITAppliedPreviously> \
		   <excessMCITOverNormalTax>' + computationOfMinimunCorporateIncomeBean.excessMCITOverNormalTax3 + '</excessMCITOverNormalTax> \
		   <expiredPortionOfExcessMCIT>' + computationOfMinimunCorporateIncomeBean.expiredPortionOfExcessMCIT3 + '</expiredPortionOfExcessMCIT> \
		   <mcit>' + computationOfMinimunCorporateIncomeBean.mcit3 + '</mcit> \
		   <mcitYear>' + computationOfMinimunCorporateIncomeBean.mcitYear3 + '</mcitYear> \
		   <normalIncomeTax>' + computationOfMinimunCorporateIncomeBean.normalIncomeTax3 + '</normalIncomeTax> \
		</listSched8AdditionalAttachments> \
		<mcit1>' + computationOfMinimunCorporateIncomeBean.mcit1 + '</mcit1> \
		<mcit2>' + computationOfMinimunCorporateIncomeBean.mcit2 + '</mcit2> \
		<mcit3>' + computationOfMinimunCorporateIncomeBean.mcit3 + '</mcit3> \
		<mcitYear1>' + computationOfMinimunCorporateIncomeBean.mcitYear1 + '</mcitYear1> \
		<mcitYear2>' + computationOfMinimunCorporateIncomeBean.mcitYear2 + '</mcitYear2> \
		<mcitYear3>' + computationOfMinimunCorporateIncomeBean.mcitYear3 + '</mcitYear3> \
		<normalIncomeTax1>' + computationOfMinimunCorporateIncomeBean.normalIncomeTax1 + '</normalIncomeTax1> \
		<normalIncomeTax2>' + computationOfMinimunCorporateIncomeBean.normalIncomeTax2 + '</normalIncomeTax2> \
		<normalIncomeTax3>' + computationOfMinimunCorporateIncomeBean.normalIncomeTax3 + '</normalIncomeTax3> \
		<totalExcessCreditsMCIT>' + computationOfMinimunCorporateIncomeBean.totalExcessCreditsMCIT + '</totalExcessCreditsMCIT> \
	</computationOfMinimumCorporateIncomeTaxBean>';


    // Reconciliation of Net Income Bean Part 1
    var reconciliationOfNetIncomeBean1 = '<reconciliationOfNetIncomeBean> \
		<netIncomePerBooks>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.netIncomePerBooks + '</netIncomePerBooks> \
		<nonDeductibleExpensesItem2Description>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.nonDeductibleExpensesItem2Description + '</nonDeductibleExpensesItem2Description> \
		<nonDeductibleExpensesItem2Value>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.nonDeductibleExpensesItem2Value + '</nonDeductibleExpensesItem2Value> \
		<nonDeductibleExpensesItem3Description>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.nonDeductibleExpensesItem3Description + '</nonDeductibleExpensesItem3Description> \
		<nonDeductibleExpensesItem3Value>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.nonDeductibleExpensesItem3Value + '</nonDeductibleExpensesItem3Value>';

    // List of Non Deductible Expenses Item 3
    var listOfNonDeductibleExpensesItem3BeanListHolder = [];

    for (key in nonDeductibleExpensesItemList) {

        var listOfNonDeductibleExpensesItem3Beansws = '<listOfNonDeductibleExpensesItem3> \
			   <otherExpandableDesc>' + nonDeductibleExpensesItemList[key].description + '</otherExpandableDesc> \
			   <otherExpandableAmount>' + nonDeductibleExpensesItemList[key].amount + '</otherExpandableAmount> \
			   <otherExpandableAmountSpecial>' + '' + '</otherExpandableAmountSpecial> \
			   <otherExpandableAmountRegular>' + '' + '</otherExpandableAmountRegular> \
			   <otherExpandableAmountTotal>' + '' + '</otherExpandableAmountTotal> \
			</listOfNonDeductibleExpensesItem3>';
        listOfNonDeductibleExpensesItem3BeanListHolder.push(listOfNonDeductibleExpensesItem3Beansws);
    };

    var listOfNonDeductibleExpensesItem3BeanswsHolder = '';

    for (key in listOfNonDeductibleExpensesItem3BeanListHolder) {
        listOfNonDeductibleExpensesItem3BeanswsHolder += listOfNonDeductibleExpensesItem3BeanListHolder[key];
    };

    // Reconciliation of Net Income Bean Part 2 
    var reconciliationOfNetIncomeBean2 = '<totalNonDeductibleExpenses>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.totalNonDeductibleExpenses + '</totalNonDeductibleExpenses> \
		<nonTaxableAndSpDeductionsItem5Description>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.nonTaxableAndSpDeductionsItem5Description + '</nonTaxableAndSpDeductionsItem5Description> \
		<nonTaxableAndSpDeductionsItem5Value>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.nonTaxableAndSpDeductionsItem5Value + '</nonTaxableAndSpDeductionsItem5Value> \
		<nonTaxableAndSpDeductionsItem6Description>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.nonTaxableAndSpDeductionsItem6Description + '</nonTaxableAndSpDeductionsItem6Description> \
		<nonTaxableAndSpDeductionsItem6Value>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.nonTaxableAndSpDeductionsItem6Value + '</nonTaxableAndSpDeductionsItem6Value>';

    // List of Non Taxable And Special Deductions Item 6
    var listOfnonTaxableAndSpDeductionsItem6BeanListHolder = [];

    for (key in nonTaxableAndSpDeductionsItemList) {

        var listOfnonTaxableAndSpDeductionsItem6Beansws = '<listOfnonTaxableAndSpDeductionsItem6> \
			   <otherExpandableDesc>' + nonTaxableAndSpDeductionsItemList[key].description + '</otherExpandableDesc> \
			   <otherExpandableAmount>' + nonTaxableAndSpDeductionsItemList[key].amount + '</otherExpandableAmount> \
			   <otherExpandableAmountSpecial>' + '' + '</otherExpandableAmountSpecial> \
			   <otherExpandableAmountRegular>' + '' + '</otherExpandableAmountRegular> \
			   <otherExpandableAmountTotal>' + '' + '</otherExpandableAmountTotal> \
			</listOfnonTaxableAndSpDeductionsItem6>';
        listOfnonTaxableAndSpDeductionsItem6BeanListHolder.push(listOfnonTaxableAndSpDeductionsItem6Beansws);
    };

    var listOfnonTaxableAndSpDeductionsItem6BeanswsHolder = '';

    for (key in listOfnonTaxableAndSpDeductionsItem6BeanListHolder) {
        listOfnonTaxableAndSpDeductionsItem6BeanswsHolder += listOfnonTaxableAndSpDeductionsItem6BeanListHolder[key];
    };

    // Reconciliation of Net Income Bean Part 3	
    var reconciliationOfNetIncomeBean3 = '<specialDeductionsItem7Description>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.specialDeductionsItem7Description + '</specialDeductionsItem7Description> \
		<specialDeductionsItem7Value>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.specialDeductionsItem7Value + '</specialDeductionsItem7Value> \
		<specialDeductionsItem8Description>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.specialDeductionsItem8Description + '</specialDeductionsItem8Description> \
		<specialDeductionsItem8Value>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.specialDeductionsItem8Value + '</specialDeductionsItem8Value>';

    // List of Special Deductions Item 8
    var listOfSpecialDeductionsItem8BeanListHolder = [];

    for (key in specialDeductionsItemList) {

        var listOfSpecialDeductionsItem8Beansws = '<listOfSpecialDeductionsItem8> \
			   <otherExpandableDesc>' + specialDeductionsItemList[key].description + '</otherExpandableDesc> \
			   <otherExpandableAmount>' + specialDeductionsItemList[key].amount + '</otherExpandableAmount> \
			   <otherExpandableAmountSpecial>' + '' + '</otherExpandableAmountSpecial> \
			   <otherExpandableAmountRegular>' + '' + '</otherExpandableAmountRegular> \
			   <otherExpandableAmountTotal>' + '' + '</otherExpandableAmountTotal> \
			</listOfSpecialDeductionsItem8>';
        listOfSpecialDeductionsItem8BeanListHolder.push(listOfSpecialDeductionsItem8Beansws);
    };

    var listOfSpecialDeductionsItem8BeanswsHolder = '';

    for (key in listOfSpecialDeductionsItem8BeanListHolder) {
        listOfSpecialDeductionsItem8BeanswsHolder += listOfSpecialDeductionsItem8BeanListHolder[key];
    };

    // Reconciliation of Net Income Bean Part 4
    var reconciliationOfNetIncomeBean4 = '<totalNonTaxableAndSpDeductions>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.totalNonTaxableAndSpDeductions + '</totalNonTaxableAndSpDeductions> \
		<netTaxableIncome>' + reconciliationOfNetIncomePerBooksAgainstTaxableIncomeBean.netTaxableIncome + '</netTaxableIncome> \
	</reconciliationOfNetIncomeBean>';


    // Balance Sheet Bean
    var balanceSheetBean = '<balanceSheetBean> \
		<currentAssests>' + schedule10.currentAssests + '</currentAssests> \
		<longTermInvestment>' + schedule10.longTermInvestment + '</longTermInvestment> \
		<propertyPlantEquipmentNet>' + schedule10.propertyPlantEquipmentNet + '</propertyPlantEquipmentNet> \
		<longTermReceivables>' + schedule10.longTermReceivables + '</longTermReceivables> \
		<intangibleAssets>' + schedule10.intangibleAssets + '</intangibleAssets> \
		<otherAssets>' + schedule10.otherAssets + '</otherAssets> \
		<totalAssets>' + schedule10.totalAssets + '</totalAssets> \
		<currentLiabilities>' + schedule10.currentLiabilities + '</currentLiabilities> \
		<longTermLiabilities>' + schedule10.longTermLiabilities + '</longTermLiabilities> \
		<deferedCredits>' + schedule10.deferedCredits + '</deferedCredits> \
		<otherLiabilities>' + schedule10.otherLiabilities + '</otherLiabilities> \
		<totalLiabilities>' + schedule10.totalLiabilities + '</totalLiabilities> \
		<capitalStock>' + schedule10.capitalStock + '</capitalStock> \
		<additionalPaidInCapital>' + schedule10.additionalPaidInCapital + '</additionalPaidInCapital> \
		<retainedEarnings>' + schedule10.retainedEarnings + '</retainedEarnings> \
		<totalEquity>' + schedule10.totalEquity + '</totalEquity> \
		<totalLiabilitiesEquity>' + schedule10.totalLiabilitiesEquity + '</totalLiabilitiesEquity> \
		<beginningCapital>' + '' + '</beginningCapital> \
		<netIncomeForTheYear>' + '' + '</netIncomeForTheYear> \
		<drawings>' + '' + '</drawings> \
		<endingCapital>' + '' + '</endingCapital> \
		<totalLiabilitiesAndCapital>' + '' + '</totalLiabilitiesAndCapital> \
	</balanceSheetBean>';


    // Stockholders Partners Members Information Bean Part 1
    var stockholdersPartnersMembersInformationBean1 = '<stockholdersPartnersMembersInformationBean> \
		<capitalContributorType>' + schedule11.capitalContributorType + '</capitalContributorType>';

    // List Schedule 11 Additional Attachments	
    var listSched11AdditionalAttachmentsBeanListHolder = [];

    for (key in stockholdersList) {

        var listSched11AdditionalAttachmentsBeansws = '<listSched11AdditionalAttachments> \
			   <registeredName>' + stockholdersList[key].registeredName + '</registeredName> \
			   <tin1>' + stockholdersList[key].tin1 + '</tin1> \
			   <tin2>' + stockholdersList[key].tin2 + '</tin2> \
			   <tin3>' + stockholdersList[key].tin3 + '</tin3> \
			   <branchCode>' + stockholdersList[key].branchCode + '</branchCode> \
			   <capitalContribution>' + stockholdersList[key].capitalContribution + '</capitalContribution> \
			   <percentToTotal>' + stockholdersList[key].percentToTotal + '</percentToTotal> \
			</listSched11AdditionalAttachments>';
        listSched11AdditionalAttachmentsBeanListHolder.push(listSched11AdditionalAttachmentsBeansws);
    };

    var listSched11AdditionalAttachmentsBeanswsHolder = '';

    for (key in listSched11AdditionalAttachmentsBeanListHolder) {
        listSched11AdditionalAttachmentsBeanswsHolder += listSched11AdditionalAttachmentsBeanListHolder[key];
    };


    // Stockholders Partners Members Information Bean Part 2	
    var stockholdersPartnersMembersInformationBean2 = '</stockholdersPartnersMembersInformationBean>';

    // Taxpayer Gross Income Part 1
    var taxpayerGrossIncome1 = '<taxpayerGrossIncome> \
		<interestExempt>' + schedule12I.interestExempt + '</interestExempt> \
		<interestsActualAmt>' + schedule12I.interestsActualAmt + '</interestsActualAmt> \
		<interestsFinalTaxWthldPd>' + schedule12I.interestsFinalTaxWthldPd + '</interestsFinalTaxWthldPd> \
		<royaltiesExempt>' + schedule12I.royaltiesExempt + '</royaltiesExempt> \
		<royaltiesActualAmt>' + schedule12I.royaltiesActualAmt + '</royaltiesActualAmt> \
		<royaltiesFinalTaxWthldPd>' + schedule12I.royaltiesFinalTaxWthldPd + '</royaltiesFinalTaxWthldPd> \
		<dividendsExempt>' + schedule12I.dividendsExempt + '</dividendsExempt> \
		<dividendsActualAmt>' + schedule12I.dividendsActualAmt + '</dividendsActualAmt> \
		<dividendsFinalTaxWthldPd>' + schedule12I.dividendsFinalTaxWthldPd + '</dividendsFinalTaxWthldPd> \
		<prizesWinningsExempt>' + schedule12I.prizesWinningsExempt + '</prizesWinningsExempt> \
		<prizesWinningsActualAmt>' + schedule12I.prizesWinningsActualAmt + '</prizesWinningsActualAmt> \
		<prizesWinningsFinalTaxWthldPd>' + schedule12I.prizesWinningsFinalTaxWthldPd + '</prizesWinningsFinalTaxWthldPd>';

    // Other Gross Income
    var otherGrossIncomeBeanListHolder = [];

    for (key in grossIncomeSubjectToFinalWithholdingList) {

        var otherGrossIncomeBeansws = '<otherGrossIncome> \
				   <otherGrossIncomeDesc>' + grossIncomeSubjectToFinalWithholdingList[key].description + '</otherGrossIncomeDesc> \
				   <otherGrossIncomeType>' + grossIncomeSubjectToFinalWithholdingList[key].type + '</otherGrossIncomeType> \
				   <otherGrossIncomeExempt>' + grossIncomeSubjectToFinalWithholdingList[key].exempt + '</otherGrossIncomeExempt> \
				   <otherGrossIncomeActualAmt>' + grossIncomeSubjectToFinalWithholdingList[key].amount + '</otherGrossIncomeActualAmt> \
				   <otherGrossIncomeFinalTaxWthldPd>' + grossIncomeSubjectToFinalWithholdingList[key].finalTax + '</otherGrossIncomeFinalTaxWthldPd> \
				</otherGrossIncome>';
        otherGrossIncomeBeanListHolder.push(otherGrossIncomeBeansws);
    };

    var otherGrossIncomeBeanswsHolder = '';

    for (key in otherGrossIncomeBeanListHolder) {
        otherGrossIncomeBeanswsHolder += otherGrossIncomeBeanListHolder[key];
    };

    // Taxpayer Gross Income Part 2	
    var taxpayerGrossIncome2 = '</taxpayerGrossIncome>';


    // Taxpayer Real Property Sales
    var taxpayerRealPropertySalesBeanListHolder = [];

    for (key in realPropertySaleList) {

        var taxpayerRealPropertySalesBeansws = '<taxpayerRealPropertySales> \
		   <propDescription>' + realPropertySaleList[key].propDescription + '</propDescription> \
		   <taxDeclNo>' + realPropertySaleList[key].taxDeclNo + '</taxDeclNo> \
		   <carNo>' + realPropertySaleList[key].carNo + '</carNo> \
		   <actualAmount>' + realPropertySaleList[key].actualAmount + '</actualAmount> \
		   <propertyTaxWithheld>' + realPropertySaleList[key].propertyTaxWithheld + '</propertyTaxWithheld> \
		</taxpayerRealPropertySales>';
        taxpayerRealPropertySalesBeanListHolder.push(taxpayerRealPropertySalesBeansws);
    };

    var taxpayerRealPropertySalesBeanswsHolder = '';

    for (key in taxpayerRealPropertySalesBeanListHolder) {
        taxpayerRealPropertySalesBeanswsHolder += taxpayerRealPropertySalesBeanListHolder[key];
    };


    // Taxpayer Stock Shares
    var taxpayerStockSharesBeanListHolder = [];

    for (key in stockShareSaleList) {

        var taxpayerStockSharesBeansws = '<taxpayerStockShares> \
		   <stockKind>' + stockShareSaleList[key].stockKind + '</stockKind> \
		   <stockSeries>' + stockShareSaleList[key].stockSeries + '</stockSeries> \
		   <stockCARNo>' + stockShareSaleList[key].stockCARNo + '</stockCARNo> \
		   <numShares>' + stockShareSaleList[key].numShares + '</numShares> \
		   <dateIssued>' + stockShareSaleList[key].Issued + '</dateIssued> \
		   <stockActualAmount>' + stockShareSaleList[key].stockActualAmount + '</stockActualAmount> \
		   <stockTaxWithheld>' + stockShareSaleList[key].stockTaxWithheld + '</stockTaxWithheld> \
		</taxpayerStockShares>';
        taxpayerStockSharesBeanListHolder.push(taxpayerStockSharesBeansws);
    };

    var taxpayerStockSharesBeanswsHolder = '';

    for (key in taxpayerStockSharesBeanListHolder) {
        taxpayerStockSharesBeanswsHolder += taxpayerStockSharesBeanListHolder[key];
    };


    // Taxpayer Other Income
    var taxpayerOtherIncomeBeanListHolder = [];

    for (key in otherIncomeList) {

        var taxpayerOtherIncomeBeansws = '<taxpayerOtherIncome> \
		   <otherIncome>' + otherIncomeList[key].otherIncome + '</otherIncome> \
		   <actualAmount>' + otherIncomeList[key].actualAmount + '</actualAmount> \
		   <otherIncomeTaxWithheld>' + otherIncomeList[key].otherIncomeTaxWithheld + '</otherIncomeTaxWithheld> \
		</taxpayerOtherIncome>';
        taxpayerOtherIncomeBeanListHolder.push(taxpayerOtherIncomeBeansws);
    };

    var taxpayerOtherIncomeBeanswsHolder = '';

    for (key in taxpayerOtherIncomeBeanListHolder) {
        taxpayerOtherIncomeBeanswsHolder += taxpayerOtherIncomeBeanListHolder[key];
    };


    // Taxpayer Personal Property Received
    var taxpayerPersonalPropertyReceivedBeanListHolder = [];

    for (key in personalPropertyReceivedList) {

        var taxpayerPersonalPropertyReceivedBeansws = '<taxpayerPersonalPropertyReceived> \
		   <personalPropertyDesc>' + personalPropertyReceivedList[key].personalPropertyDesc + '</personalPropertyDesc> \
		   <personalPropertyTransferMode>' + personalPropertyReceivedList[key].personalPropertyTransferMode + '</personalPropertyTransferMode> \
		   <personalPropertyCARNo>' + personalPropertyReceivedList[key].personalPropertyCARNo + '</personalPropertyCARNo> \
		   <personalPropertyActualAmount>' + personalPropertyReceivedList[key].personalPropertyActualAmount + '</personalPropertyActualAmount> \
		</taxpayerPersonalPropertyReceived>';
        taxpayerPersonalPropertyReceivedBeanListHolder.push(taxpayerPersonalPropertyReceivedBeansws);
    };

    var taxpayerPersonalPropertyReceivedBeanswsHolder = '';

    for (key in taxpayerPersonalPropertyReceivedBeanListHolder) {
        taxpayerPersonalPropertyReceivedBeanswsHolder += taxpayerPersonalPropertyReceivedBeanListHolder[key];
    };


    // Taxpayer Other Exempt Income
    var taxpayerOtherExemptIncomeBeanListHolder = [];

    for (key in otherExemptIncomeList) {

        var taxpayerOtherExemptIncomeBeansws = '<taxpayerOtherExemptIncome> \
		   <otherIncome>' + otherExemptIncomeList[key].otherIncome + '</otherIncome> \
		   <actualAmount>' + otherExemptIncomeList[key].actualAmount + '</actualAmount> \
		</taxpayerOtherExemptIncome>';
        taxpayerOtherExemptIncomeBeanListHolder.push(taxpayerOtherExemptIncomeBeansws);
    };

    var taxpayerOtherExemptIncomeBeanswsHolder = '';

    for (key in taxpayerOtherExemptIncomeBeanListHolder) {
        taxpayerOtherExemptIncomeBeanswsHolder += taxpayerOtherExemptIncomeBeanListHolder[key];
    };

    // Taxpayer Gross Income Exempt
    var taxpayerGrossIncomeExempt = '<taxpayerGrossIncomeExempt> \
		<proceedsOfInsurance>' + '0' + '</proceedsOfInsurance> \
		<returnOfPremium>' + schedule13.returnOfPremium + '</returnOfPremium> \
		<retirementBenefitsEtc>' + '0' + '</retirementBenefitsEtc> \
		<totalFinalTaxWithheldOrPaid>' + totalTaxpayerBean.totalFinalTaxWithheld + '</totalFinalTaxWithheldOrPaid> \
	</taxpayerGrossIncomeExempt>';

    var closeForm = '</formBean> ';
    var soapRequestFooter = '</ws:submitForm1702RT> \
			   		</soapenv:Body> \
					</soapenv:Envelope>';

    return soapRequestHeader
		+ openForm
		+ taxpayerBeanws
		+ totalTaxpayerBeanws
		+ computationOfTaxBeanws
		+ taxReliefAvailmentBeanws
		+ externalAuditorAccreditedTaxAgentBeanws
		+ salesRevenueBeanws
		+ costOfSaleBeanws
		+ otherTaxableIncomeNotSubjectedToFinalTaxBean1
		+ otherTaxableIncomeNotSubjectToFinalTaxValueBeanswsHolder
		+ otherTaxableIncomeNotSubjectedToFinalTaxBean2
		+ ordinaryAllowableItemizedDeductionBean1
		+ listAmortizationsBeanswsHolder
		+ ordinaryAllowableItemizedDeductionBean2
		+ listOtherOrdinaryItemizedDeductionsBeanswsHolder
		+ ordinaryAllowableItemizedDeductionBean3
		+ specialAllowableItemizedDeductionBean1
		+ listSched5AdditionalAttachmentsBeanswsHolder
		+ specialAllowableItemizedDeductionBean2
		+ computationOfNetOperatingLossCarryOverBeanws
		+ taxCreditsPaymentsBean1
		+ otherCreditsBeanswsHolder
		+ taxCreditsPaymentsBean2
		+ computationOfMinimumCorporateIncomeTaxBeanws
		+ reconciliationOfNetIncomeBean1
		+ listOfNonDeductibleExpensesItem3BeanswsHolder
		+ reconciliationOfNetIncomeBean2
		+ listOfnonTaxableAndSpDeductionsItem6BeanswsHolder
		+ reconciliationOfNetIncomeBean3
		+ listOfSpecialDeductionsItem8BeanswsHolder
		+ reconciliationOfNetIncomeBean4
		+ balanceSheetBean
		+ stockholdersPartnersMembersInformationBean1
		+ listSched11AdditionalAttachmentsBeanswsHolder
		+ stockholdersPartnersMembersInformationBean2
		+ taxpayerGrossIncome1
		+ otherGrossIncomeBeanswsHolder
		+ taxpayerGrossIncome2
		+ taxpayerRealPropertySalesBeanswsHolder
		+ taxpayerStockSharesBeanswsHolder
		+ taxpayerOtherIncomeBeanswsHolder
		+ taxpayerPersonalPropertyReceivedBeanswsHolder
		+ taxpayerOtherExemptIncomeBeanswsHolder
		+ taxpayerGrossIncomeExempt
		+ closeForm
		+ soapRequestFooter;

};