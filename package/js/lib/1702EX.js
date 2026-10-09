var wsUrl = enviService.getWsUrl();
var wsSite = enviService.getWsSite();
//Page 1
var taxpayer = {};
var totalTaxPayable = {};
// Page 2
var ComputationOfTaxBean = {};
var taxReliefAvailment = {};
var externalAuditorAccreditedTaxAgentBean = {};
// Page 3
var salesRevenueBean = {};
var costOfSaleBean = {};
// Page 4 Schedule 3
var schedule3 = {};
var OtherTaxableIncomeNotSubjectToFinalTax = {};
var OtherTaxableIncomeNotSubjectToFinalTaxList = [];
// Page 4 Schedule 4
var schedule4 = {};
var amortization = {};
var amortizationList = [];
var others = {};
var otherList = [];
// Page 5 Schedule 5
var schedule5 = {};
var specialAllowableItemizedDeductions = {};
var specialAllowableItemizedDeductionsList = [];
// Page 5 Schedule 6
var schedule6 = {};
var schedule6Iterating = {};
var nonDeductibleExpensesItemList = [];
var nonTaxableAndSpDeductionsItemList = [];
var specialDeductionsItemList = [];
// Page 6 Schedule 7
var balanceSheetBean = {};
// Page 6 Schedule 8
var schedule8 = {};
var stockholders = {};
var stockholdersList = [];
// Page 7 Schedule 9I
var schedule9I = {};
var grossIncomeSubjectToFinalWithholding = {};
var grossIncomeSubjectToFinalWithholdingList = [];
// Page 7 Schedule 9II
var realPropertySale = {};
var realPropertySaleList = [];
// Page 7 Schedule 9III
var stockShareSale = {};
var stockShareSaleList = [];
// Page 7 Schedule 9IV
var otherIncome = {};
var otherIncomeList = [];
// Page 7 Schedule 10
var premium = {};
// Page 7 Schedule 10I
var personalPropertyReceived = {};
var personalPropertyReceivedList = [];
// Page 7 Schedule 10II
var otherExemptIncome = {};
var otherExemptIncomeList = [];

function populateTaxpayer(branchCode, industryTypeCode,
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
    taxpayer = {
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

function populateTotalTaxPayable(totalIncomeTaxDue, totalPenalties, totalFinalTaxWithheld, communityTaxCertificate, dateOfIssue, placeOfIssue, amountIfCTC, totalAmountPayable, totalIncomeReceiptsExemptFromIncomeTax) {
    totalTaxPayable = {
        totalIncomeTaxDue: totalIncomeTaxDue,
        totalPenalties: totalPenalties,
        totalFinalTaxWithheld: totalFinalTaxWithheld,
        communityTaxCertificate: communityTaxCertificate,
        dateOfIssue: dateOfIssue,
        placeOfIssue: placeOfIssue,
        amountIfCTC: amountIfCTC,
        totalAmountPayable: totalAmountPayable,
        totalIncomeReceiptsExemptFromIncomeTax: totalIncomeReceiptsExemptFromIncomeTax

    };
}

function populateComputationOfTaxBean(costSalesServices, grossIncomeFromOperation, incomeTaxDueOtherThanMCIT, incomeTaxRate, incomeTaxRateEX, minimumCorporateIncomeTax, netSalesRevenuesReceiptsFees, netTaxPayable46, netTaxableIncome, nolco, nolcoDisabled, optionalStandardDeductions, optionalStandardDeductionsDisabled, ordinaryAllowableItemizedDeductions, ordinaryAllowableItemizedDeductionsDisabled, otherTaxableIncomeNotSubjectedToFinalTax, specialAllowableItemizedDeductions36, specialAllowableItemizedDeductions36Disabled, totalAmountPayable, totalGrossIncome, totalIncomeTaxDue44, totalItemizedDeductions, totalTaxCreditsPayments45) {
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
        specialAllowableItemizedDeductions36: specialAllowableItemizedDeductions36,
        specialAllowableItemizedDeductions36Disabled: specialAllowableItemizedDeductions36Disabled,
        totalAmountPayable: totalAmountPayable,
        totalGrossIncome: totalGrossIncome,
        totalIncomeTaxDue44: totalIncomeTaxDue44,
        totalItemizedDeductions: totalItemizedDeductions,
        totalTaxCreditsPayments45: totalTaxCreditsPayments45

    };
}
function populateTaxReliefAvailment(regularIncomeTaxOtherwiseDue, specialAllowableItemizedDeduction, totalTaxReliefAvailment) {
    taxReliefAvailment = {
        regularIncomeTaxOtherwiseDue: regularIncomeTaxOtherwiseDue,
        specialAllowableItemizedDeduction: specialAllowableItemizedDeduction,
        totalTaxReliefAvailment: totalTaxReliefAvailment

    };
}
function populateExternalAuditorAccreditedTaxAgentBean(nameOfExternalAuditor, externalAuditorTIN, nameOfSigningPartner, signingPartnerTIN, birAccreditationNumber, isssueDate, expiryDate, accreditedTaxAgentBranchCode, signingPartnerBranchCode
) {
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
function populateSalesRevenueBean(taxWthldGoods, taxWthldServices, taxWthldLease, taxWthldTotal, salesReturns, netSalesSched1) {
    salesRevenueBean = {
        taxWthldGoods: taxWthldGoods,
        taxWthldServices: taxWthldServices,
        taxWthldLease: taxWthldLease,
        taxWthldTotal: taxWthldTotal,
        salesReturns: salesReturns,
        netSalesSched1: netSalesSched1
    };
}

function populateCostOfSaleBean(goodsInvBeg, purGoods, goodsAvail, goodsInvEnd, costSales, directMatsBeg, purDirectMats, matsAvail, directMatsEnd, rawMats, directLabor, manufacturingOverhead, totalManufacturingCost, workInProgressBeg, winProgressEnd, costGoodsManufactured, finishedGoodsBeg, finishedGoodsEnd, totalCostGoodsManufacturedAndSold, salaries, materials, sched2CDepreciation, sched2CRental, outsideServ, others, costService, totalCostSalesAndServices) {
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

function populateSchedule3(otherTaxableIncomeNotSubjectToFinalTaxDescFirst, otherTaxableIncomeNotSubjectToFinalTaxValueFirst, otherTaxableIncomeNotSubjectToFinalTaxDescSecond, otherTaxableIncomeNotSubjectToFinalTaxValueSecond, otherTaxableIncomeNotSubjectToFinalTaxDescThird, otherTaxableIncomeNotSubjectToFinalTaxValueThird, otherTaxableIncomeNotSubjectToFinalTaxValueTotal, OtherTaxableIncomeNotSubjectToFinalTaxList) {
    schedule3 = {
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

function populateSchedule4(adAndPromotionsVal, amortizatiosDescSecond, amortizatiosDescThird, amortizatiosDescFourth, amortizatiosValSecond, amortizatiosValThird, amortizatiosValFourth, amortizationList, badDebts, charitableContributions, commissions, utilities, depletion, depreciation, directorFee, fringeBenefits, fuelAndOil, insurance, iterest, janitorialAndMessengerial, losses, mgmtAndConsultancyFee, misc, officeSupplies, otherServices, professionalFees, schedGRental, repairLabor, repairMaterials, entertainment, researchAndDev, royalties, salariesAndAllownces, securityServices, otherContributions, taxesAndLiscenses, tollingFees, trainingsAndSeminars, travelTransportaion, othersFirstDescFirst, othersFirstDescSecond, othersFirstDescThird, othersFirstDescfourth, otherFirstValue, otherSecondValue, otherThirdValue, otherFourthValue, otherList) {
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

function populateListOfAmortization(description, amount) {
    amortization = {
        description: description,
        amount: amount
    };
    amortizationList.push(amortization);
}
function populateListOfOthers(description, amount) {
    others = {
        description: description,
        amount: amount
    };
    otherList.push(others);
}
function populateSchedule5(specialAllowableItemizedDeductionsDescription1, specialAllowableItemizedDeductionsLegalBasis1, specialAllowableItemizedDeductionsAmount1, specialAllowableItemizedDeductionsDescription2, specialAllowableItemizedDeductionsLegalBasis2, specialAllowableItemizedDeductionsAmount2, specialAllowableItemizedDeductionsDescription3, specialAllowableItemizedDeductionsLegalBasis3, specialAllowableItemizedDeductionsAmount3, specialAllowableItemizedDeductionsDescription4, specialAllowableItemizedDeductionsLegalBasis4, specialAllowableItemizedDeductionsAmount4, totalSpecialAllowableItemizedDeductions, specialAllowableItemizedDeductionsList) {
    schedule5 = {
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
        specialAllowableItemizedDeductionsList: specialAllowableItemizedDeductionsList

    };
}

function populateListOfSpecialAllowableItemizedDeductions(description, legalBasis, amount) {
    specialAllowableItemizedDeductions = {
        description: description,
        legalBasis: legalBasis,
        amount: amount
    };
    specialAllowableItemizedDeductionsList.push(specialAllowableItemizedDeductions);
}
function populateSchedule6(netIncomePerBooks, nonDeductibleExpensesItem2Description, nonDeductibleExpensesItem2Value, nonDeductibleExpensesItem3Description, nonDeductibleExpensesItem3Value, nonDeductibleExpensesItemList, totalNonDeductibleExpenses, nonTaxableAndSpDeductionsItem5Description, nonTaxableAndSpDeductionsItem5Value, nonTaxableAndSpDeductionsItem6Description, nonTaxableAndSpDeductionsItem6Value, nonTaxableAndSpDeductionsItemList, specialDeductionsItem7Description, specialDeductionsItem7Value, specialDeductionsItem8Description, specialDeductionsItem8Value, specialDeductionsItemList, totalNonTaxableAndSpDeductions, netTaxableIncome) {
    schedule6 = {
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

function populateListOfNonDeductibleExpensesItem(description, amount) {
    schedule6Iterating = {
        description: description,
        amount: amount
    };
    nonDeductibleExpensesItemList.push(schedule6Iterating);
}

function populateListOfNonTaxableAndSpDeductionsItem(description, amount) {
    schedule6Iterating = {
        description: description,
        amount: amount
    };
    nonTaxableAndSpDeductionsItemList.push(schedule6Iterating);
}

function populateListOfSpecialDeductionsItem(description, amount) {
    schedule6Iterating = {
        description: description,
        amount: amount
    };
    specialDeductionsItemList.push(schedule6Iterating);
}
function populateBalanceSheetBean(currentAssests, longTermInvestment, propertyPlantEquipmentNet, longTermReceivables, intangibleAssets, otherAssets, totalAssets, currentLiabilities, longTermLiabilities, deferedCredits, otherLiabilities, totalLiabilities, capitalStock, additionalPaidInCapital, retainedEarnings, totalEquity, totalLiabilitiesEquity) {
    balanceSheetBean = {
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
function populateSchedule8(capitalContributorType, stockholdersList) {
    schedule8 = {
        capitalContributorType: capitalContributorType,
        stockholdersList: stockholdersList
    };
}

function populateListOfStockholders(registeredName, tin1, tin2, tin3, branchCode, capitalContribution, percentToTotal) {
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
function populateSchedule9I(interestExempt, interestsActualAmt, interestsFinalTaxWthldPd, royaltiesExempt, royaltiesActualAmt, royaltiesFinalTaxWthldPd, dividendsExempt, dividendsActualAmt, dividendsFinalTaxWthldPd, prizesWinningsExempt, prizesWinningsActualAmt, prizesWinningsFinalTaxWthldPd, grossIncomeSubjectToFinalWithholdingList) {
    schedule9 = {
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

function populateListOfGrossIncomeSubjectToFinalWithholding(description, exempt, amount, finalTax) {
    grossIncomeSubjectToFinalWithholding = {
        description: description,
        exempt: exempt,
        amount: amount,
        finalTax: finalTax,
        type: '4'
    };
    grossIncomeSubjectToFinalWithholdingList.push(grossIncomeSubjectToFinalWithholding);
}
function populateListOfRealPropertySale(propDescription, taxDeclNo, carNo, actualAmount, propertyTaxWithheld) {
    realPropertySale = {
        propDescription: propDescription,
        taxDeclNo: taxDeclNo,
        carNo: carNo,
        actualAmount: actualAmount,
        propertyTaxWithheld: propertyTaxWithheld

    };
    realPropertySaleList.push(realPropertySale);
}
function populateListOfStockShareSale(stockKind, stockSeries, stockCARNo, numShares, Issued, stockActualAmount, stockTaxWithheld) {
    stockShareSale = {
        stockKind: stockKind,
        stockSeries: stockSeries,
        stockCARNo: stockCARNo,
        numShares: numShares,
        Issued: Issued,
        stockActualAmount: stockActualAmount,
        stockTaxWithheld: stockTaxWithheld


    };
    stockShareSaleList.push(stockShareSale);
}
function populateListOfOtherIncome(otherIncome, actualAmount, otherIncomeTaxWithheld) {
    otherIncome = {
        otherIncome: otherIncome,
        actualAmount: actualAmount,
        otherIncomeTaxWithheld: otherIncomeTaxWithheld
    };
    otherIncomeList.push(otherIncome);
}
function populateReturnOfPremium(returnOfPremium) {
    premium = {
        returnOfPremium: returnOfPremium
    };

}
function populateListOfPersonalPropertyReceived(personalPropertyDesc, personalPropertyTransferMode, personalPropertyCARNo, personalPropertyActualAmount) {
    personalPropertyReceived = {
        personalPropertyDesc: personalPropertyDesc,
        personalPropertyTransferMode: personalPropertyTransferMode,
        personalPropertyCARNo: personalPropertyCARNo,
        personalPropertyActualAmount: personalPropertyActualAmount
    };
    personalPropertyReceivedList.push(personalPropertyReceived);
}
function populateListOfOtherExemptIncome(otherIncome, actualAmount) {
    otherExemptIncome = {
        otherIncome: otherIncome,
        actualAmount: actualAmount
    };
    otherExemptIncomeList.push(otherExemptIncome);
}

function execute() {
    var _soapRequest = soapRequest();
    //console.log("Soap Request: "+_soapRequest);
    //alert("Soap Request: "+_soapRequest);
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
    //console.log("Success Data: "+data);
    //console.log("Success Status: "+status);
    //console.log("Success Req: "+req);
    //alert(data.text);
    // alert("Success Status: "+status);
    // alert("Success Req: "+req);
    // if (status == "success") {
    //     $("#response").text(req.responseXML).find("submitForm1702EXResponse").text();
    // }
    var shell = new ActiveXObject("WScript.Shell");
    alert(data.text);
    if (status == "success" && data.text.indexOf("now be redirected") > -1) {
        setTimeout(function () { shell.run(wsSite) }, 1000);
    }
}

function processError(data, status, req) {
    //console.log("Error Data: "+data);
    //console.log("Error Status: "+status);
    //console.log("Error Req: "+req);

    alert(typeof data.text == "undefined" ? "Failed to connect to efps online." : data.text);
    // alert("Error Status: "+status);
    // alert("Error Req: "+req);

    $("#response").text(data.responseText + ' ' + status);
}

function soapRequest() {
    var header = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.client.ph.gov.bir.web"> \
		  <soapenv:Header/> \
		   <soapenv:Body> \
		      <ws:submitForm1702EX> \ ';
    var openForm = '<formBean> ';

    //Page 1

    var payer = '<taxpayer> \
        <branchCode>'+ taxpayer.branchCode + '</branchCode> \
        <industryTypeCode>'+ taxpayer.industryTypeCode + '</industryTypeCode> \
        <industryTypeMitCode></industryTypeMitCode> \
        <description>'+ taxpayer.description + '</description> \
        <barangayAddress>'+ taxpayer.barangayAddress + '</barangayAddress> \
        <districtAddress>'+ taxpayer.districtAddress + '</districtAddress> \
        <dateRegistered>'+ taxpayer.dateRegistered + '</dateRegistered> \
        <exemptionTypeCode></exemptionTypeCode>\
        <subCode></subCode>\
        <cTypeCode></cTypeCode>\
        <gTypeCode></gTypeCode>\
        <spouseTaxPayer></spouseTaxPayer>\
        <startMonth>'+ taxpayer.startMonth + '</startMonth> \
        <incorporationDate>'+ taxpayer.incorporationDate + '</incorporationDate> \
        <birthDate>'+ taxpayer.birthDate + '</birthDate> \
        <zipCode>'+ taxpayer.zipCode + '</zipCode> \
        <sex>'+ taxpayer.sex + '</sex> \
        <tinPart1>'+ taxpayer.tinPart1 + '</tinPart1> \
        <tinPart2>'+ taxpayer.tinPart2 + '</tinPart2> \
        <tinPart3>'+ taxpayer.tinPart3 + '</tinPart3> \
        <registeredAddress>'+ taxpayer.registeredAddress + '</registeredAddress> \
        <dateFiled>'+ taxpayer.dateFiled + '</dateFiled> \
        <psocCode></psocCode>\
        <claimingAdditionalExemption></claimingAdditionalExemption>\
        <numberOfDependents></numberOfDependents>\
        <jointFilling></jointFilling>\
        <dueDate>'+ taxpayer.dueDate + '</dueDate> \
        <returnPeriod>'+ taxpayer.returnPeriod + '</returnPeriod> \
        <actCode></actCode>\
        <emailAddress>'+ taxpayer.emailAddress + '</emailAddress> \
        <formVersion>'+ taxpayer.formVersion + '</formVersion> \
        <sourceOfIncome></sourceOfIncome>\
        <govtIssuedId></govtIssuedId>\
        <govtIssuedIdPlace></govtIssuedIdPlace>\
        <govtIssuedIdAmount></govtIssuedIdAmount>\
        <govtIssuedIdDate></govtIssuedIdDate>\
        <ammendedYN>'+ taxpayer.ammendedYN + '</ammendedYN> \
		<batchNo>'+ taxpayer.batchNo + '</batchNo> \
        <amdendedReturn>'+ taxpayer.amdendedReturn + '</amdendedReturn> \
        <shortPeriodReturn>'+ taxpayer.shortPeriodReturn + '</shortPeriodReturn> \
        <alphaNumericTaxCode>'+ taxpayer.alphaNumericTaxCode + '</alphaNumericTaxCode> \
        <sheetFiledCount>'+ taxpayer.sheetFiledCount + '</sheetFiledCount> \
        <taxFilerType></taxFilerType>\
        <tradeName></tradeName>\
        <contactNumber>'+ taxpayer.contactNumber + '</contactNumber> \
        <civilStatus></civilStatus>\
        <ifMarriedSpouseIncome></ifMarriedSpouseIncome>\
        <filingStatus></filingStatus>\
        <mainLine>'+ taxpayer.mainLine + '</mainLine> \
        <psic>'+ taxpayer.psic + '</psic> \
        <methodOfAccounting></methodOfAccounting>\
        <methodOfAccountingOthers></methodOfAccountingOthers>\
        <methodOfDeduction>'+ taxpayer.methodOfDeduction + '</methodOfDeduction> \
        <incomeExemptFromIncomeTax></incomeExemptFromIncomeTax>\
        <incomeSubjectToSpecialPreferentialRate></incomeSubjectToSpecialPreferentialRate>\
        <internationalTreatyYn></internationalTreatyYn>\
        <fiscalYear></fiscalYear>\
        <filerName></filerName>\
        <lineOfBusiness>'+ taxpayer.lineOfBusiness + '</lineOfBusiness> \
        <calendarFiscal>'+ taxpayer.calendarFiscal + '</calendarFiscal> \
        <yearEndedMonth>'+ taxpayer.yearEndedMonth + '</yearEndedMonth> \
        <yearEnded>'+ taxpayer.yearEnded + '</yearEnded> \
        <rdoCode>'+ taxpayer.rdoCode + '</rdoCode> \
        <registeredActivity>'+ taxpayer.registeredActivity + '</registeredActivity> \
        <lastName>'+ taxpayer.lastName + '</lastName> \
        <midName></midName>\
        <firstName>'+ taxpayer.firstName + '</firstName> \
        <registeredName>'+ taxpayer.registeredName + '</registeredName> \
        <ctcSecType>'+ taxpayer.ctcSecType + '</ctcSecType> \
        <amendedReturn>'+ taxpayer.amendedReturn + '</amendedReturn> \
        <atc1></atc1>\
        <atc1Desc></atc1Desc>\
        <atc2Desc></atc2Desc>\
        <atc2></atc2>\
        <atcIC011>'+ taxpayer.atcIC011 + '</atcIC011> \
        <atcIC021>'+ taxpayer.atcIC021 + '</atcIC021> \
        <effectivityDateFrom>'+ taxpayer.effectivityDateFrom + '</effectivityDateFrom> \
        <effectivityDateTo>'+ taxpayer.effectivityDateTo + '</effectivityDateTo> \
        <legalBasisTaxExemption>'+ taxpayer.legalBasisTaxExemption + '</legalBasisTaxExemption> \
        <investmentPromotionAgency>'+ taxpayer.investmentPromotionAgency + '</investmentPromotionAgency> \
        <subStreet>'+ taxpayer.subStreet + '</subStreet> \
        <street>'+ taxpayer.street + '</street> \
        <city>'+ taxpayer.city + '</city> \
		<offlineFormVersion>'+ taxpayer.offlineFormVersion + '</offlineFormVersion> \
</taxpayer> \ ';

    var taxPayable = '<taxpayable> \
        <totalIncomeTaxDue>'+ totalTaxPayable.totalIncomeTaxDue + '</totalIncomeTaxDue> \
        <totalPenalties>'+ totalTaxPayable.totalPenalties + '</totalPenalties> \
        <netTaxPayable></netTaxPayable> \
        <taxFilerTaxDue></taxFilerTaxDue> \
        <taxFilerSpouseTaxDue></taxFilerSpouseTaxDue> \
        <taxFilerCredits></taxFilerCredits> \
        <taxFilerSpouseCredits></taxFilerSpouseCredits> \
        <portionOfTaxPayableAllowed></portionOfTaxPayableAllowed> \
        <totalAmountPayableUponFilling></totalAmountPayableUponFilling> \
        <totalFinalTaxWithheld>'+ totalTaxPayable.totalFinalTaxWithheld + '</totalFinalTaxWithheld> \
        <totalTaxCredits></totalTaxCredits> \
        <totalTaxPayable></totalTaxPayable> \
        <netAmountTaxPayable>0</netAmountTaxPayable> \
        <communityTaxCertificate>'+ totalTaxPayable.communityTaxCertificate + '</communityTaxCertificate> \
        <dateOfIssue>'+ totalTaxPayable.dateOfIssue + '</dateOfIssue> \
        <placeOfIssue>'+ totalTaxPayable.placeOfIssue + '</placeOfIssue> \
        <amountIfCTC>'+ totalTaxPayable.amountIfCTC + '</amountIfCTC> \
        <overPayment></overPayment> \
        <totalAmountPayable>'+ totalTaxPayable.totalAmountPayable + '</totalAmountPayable> \
        <totalIncomeReceiptsExemptFromIncomeTax>'+ totalTaxPayable.totalIncomeReceiptsExemptFromIncomeTax + '</totalIncomeReceiptsExemptFromIncomeTax> \
		</taxpayable> \ ';

    // Page 2
    var ComputationOfTax = '<computationOfTax> \
        <costSalesServices>'+ computationOfTaxBean.costSalesServices + '</costSalesServices> \
        <grossIncomeFromOperation>'+ computationOfTaxBean.grossIncomeFromOperation + '</grossIncomeFromOperation> \
        <incomeTaxDueOtherThanMCIT>'+ computationOfTaxBean.incomeTaxDueOtherThanMCIT + '</incomeTaxDueOtherThanMCIT> \
        <incomeTaxRate>'+ computationOfTaxBean.incomeTaxRate + '</incomeTaxRate> \
        <incomeTaxRateEX>'+ computationOfTaxBean.incomeTaxRateEX + '</incomeTaxRateEX> \
        <minimumCorporateIncomeTax>'+ computationOfTaxBean.minimumCorporateIncomeTax + '</minimumCorporateIncomeTax> \
        <netSalesRevenuesReceiptsFees>'+ computationOfTaxBean.netSalesRevenuesReceiptsFees + '</netSalesRevenuesReceiptsFees> \
        <netTaxPayable46>'+ computationOfTaxBean.netTaxPayable46 + '</netTaxPayable46> \
        <netTaxableIncome>'+ computationOfTaxBean.netTaxableIncome + '</netTaxableIncome> \
        <nolco>'+ computationOfTaxBean.nolco + '</nolco> \
        <nolcoDisabled>'+ computationOfTaxBean.nolcoDisabled + '</nolcoDisabled> \
        <optionalStandardDeductions>'+ computationOfTaxBean.optionalStandardDeductions + '</optionalStandardDeductions> \
        <optionalStandardDeductionsDisabled>'+ computationOfTaxBean.optionalStandardDeductionsDisabled + '</optionalStandardDeductionsDisabled> \
        <ordinaryAllowableItemizedDeductions>'+ computationOfTaxBean.ordinaryAllowableItemizedDeductions + '</ordinaryAllowableItemizedDeductions> \
        <ordinaryAllowableItemizedDeductionsDisabled>'+ computationOfTaxBean.ordinaryAllowableItemizedDeductionsDisabled + '</ordinaryAllowableItemizedDeductionsDisabled> \
        <otherTaxableIncomeNotSubjectedToFinalTax>'+ computationOfTaxBean.otherTaxableIncomeNotSubjectedToFinalTax + '</otherTaxableIncomeNotSubjectedToFinalTax> \
        <penaltyBean> \
           <surcharge></surcharge> \
           <interest></interest> \
           <compromise></compromise> \
           <totalPenalty></totalPenalty> \
		   </penaltyBean> \
        <specialAllowableItemizedDeductions36>'+ computationOfTaxBean.specialAllowableItemizedDeductions36 + '</specialAllowableItemizedDeductions36> \
        <specialAllowableItemizedDeductions36Disabled>'+ computationOfTaxBean.specialAllowableItemizedDeductions36Disabled + '</specialAllowableItemizedDeductions36Disabled> \
        <totalAmountPayable>'+ computationOfTaxBean.totalAmountPayable + '</totalAmountPayable> \
        <totalGrossIncome>'+ computationOfTaxBean.totalGrossIncome + '</totalGrossIncome> \
        <totalIncomeTaxDue44>'+ computationOfTaxBean.totalIncomeTaxDue44 + '</totalIncomeTaxDue44> \
        <totalItemizedDeductions>'+ computationOfTaxBean.totalItemizedDeductions + '</totalItemizedDeductions> \
        <totalTaxCreditsPayments45>'+ computationOfTaxBean.totalTaxCreditsPayments45 + '</totalTaxCreditsPayments45> \
		   </computationOfTax> \ ';

    var taxRelief = '<taxReliefAvailement> \
        <regularIncomeTaxOtherwiseDue>'+ taxReliefAvailment.regularIncomeTaxOtherwiseDue + '</regularIncomeTaxOtherwiseDue> \
        <specialAllowableItemizedDeduction>'+ taxReliefAvailment.specialAllowableItemizedDeduction + '</specialAllowableItemizedDeduction> \
        <totalTaxReliefAvailment>'+ taxReliefAvailment.totalTaxReliefAvailment + '</totalTaxReliefAvailment> \
			</taxReliefAvailement> ';

    var externalAuditorAccreditedTaxAgent = '<externalAuditor> \
        <nameOfExternalAuditor>'+ externalAuditorAccreditedTaxAgentBean.nameOfExternalAuditor + '</nameOfExternalAuditor> \
        <externalAuditorTIN>'+ externalAuditorAccreditedTaxAgentBean.externalAuditorTIN + '</externalAuditorTIN> \
        <nameOfSigningPartner>'+ externalAuditorAccreditedTaxAgentBean.nameOfSigningPartner + '</nameOfSigningPartner> \
        <signingPartnerTIN>'+ externalAuditorAccreditedTaxAgentBean.signingPartnerTIN + '</signingPartnerTIN> \
        <birAccreditationNumber>'+ externalAuditorAccreditedTaxAgentBean.birAccreditationNumber + '</birAccreditationNumber> \
        <isssueDate>'+ externalAuditorAccreditedTaxAgentBean.isssueDate + '</isssueDate> \
        <expiryDate>'+ externalAuditorAccreditedTaxAgentBean.expiryDate + '</expiryDate> \
        <accreditedTaxAgentBranchCode>'+ externalAuditorAccreditedTaxAgentBean.accreditedTaxAgentBranchCode + '</accreditedTaxAgentBranchCode> \
        <signingPartnerBranchCode>'+ externalAuditorAccreditedTaxAgentBean.signingPartnerBranchCode + '</signingPartnerBranchCode> \
			</externalAuditor> \ ';

    // Page 3
    var salesRevenue = '<taxpayerSales> \
        <taxWthldGoods>'+ salesRevenueBean.taxWthldGoods + '</taxWthldGoods> \
        <taxWthldServices>'+ salesRevenueBean.taxWthldServices + '</taxWthldServices> \
        <taxWthldLease>'+ salesRevenueBean.taxWthldLease + '</taxWthldLease> \
        <taxWthldTotal>'+ salesRevenueBean.taxWthldTotal + '</taxWthldTotal> \
        <salesReturns>'+ salesRevenueBean.salesReturns + '</salesReturns> \
        <netSalesSched1>'+ salesRevenueBean.netSalesSched1 + '</netSalesSched1> \
			</taxpayerSales> ';

    var costOfSale = '<taxpayerCostOfSale> \
        <goodsInvBeg>'+ costOfSaleBean.goodsInvBeg + '</goodsInvBeg> \
        <purGoods>'+ costOfSaleBean.purGoods + '</purGoods> \
        <goodsAvail>'+ costOfSaleBean.goodsAvail + '</goodsAvail> \
        <goodsInvEnd>'+ costOfSaleBean.goodsInvEnd + '</goodsInvEnd> \
        <costSales>'+ costOfSaleBean.costSales + '</costSales> \
        <directMatsBeg>'+ costOfSaleBean.directMatsBeg + '</directMatsBeg> \
        <purDirectMats>'+ costOfSaleBean.purDirectMats + '</purDirectMats> \
        <matsAvail>'+ costOfSaleBean.matsAvail + '</matsAvail> \
        <directMatsEnd>'+ costOfSaleBean.directMatsEnd + '</directMatsEnd> \
        <rawMats>'+ costOfSaleBean.rawMats + '</rawMats> \
        <directLabor>'+ costOfSaleBean.directLabor + '</directLabor> \
        <manufacturingOverhead>'+ costOfSaleBean.manufacturingOverhead + '</manufacturingOverhead> \
        <totalManufacturingCost>'+ costOfSaleBean.totalManufacturingCost + '</totalManufacturingCost> \
        <workInProgressBeg>'+ costOfSaleBean.workInProgressBeg + '</workInProgressBeg> \
        <winProgressEnd>'+ costOfSaleBean.winProgressEnd + '</winProgressEnd> \
        <costGoodsManufactured>'+ costOfSaleBean.costGoodsManufactured + '</costGoodsManufactured> \
        <finishedGoodsBeg>'+ costOfSaleBean.finishedGoodsBeg + '</finishedGoodsBeg> \
        <finishedGoodsEnd>'+ costOfSaleBean.finishedGoodsEnd + '</finishedGoodsEnd> \
        <totalCostGoodsManufacturedAndSold>'+ costOfSaleBean.totalCostGoodsManufacturedAndSold + '</totalCostGoodsManufacturedAndSold> \
        <salaries>'+ costOfSaleBean.salaries + '</salaries> \
        <materials>'+ costOfSaleBean.materials + '</materials> \
        <sched2CDepreciation>'+ costOfSaleBean.sched2CDepreciation + '</sched2CDepreciation> \
        <sched2CRental>'+ costOfSaleBean.sched2CRental + '</sched2CRental> \
        <outsideServ>'+ costOfSaleBean.outsideServ + '</outsideServ> \
        <others>'+ costOfSaleBean.others + '</others> \
        <costService>'+ costOfSaleBean.costService + '</costService> \
        <totalCostSalesAndServices>'+ costOfSaleBean.totalCostSalesAndServices + '</totalCostSalesAndServices> \
			</taxpayerCostOfSale>  ';

    // Page 4 Schedule 3
    var OtherTaxableIncomeNotSubjectToFinalTaxListHolder = [];
    for (key in OtherTaxableIncomeNotSubjectToFinalTaxList) {
        var obj1 = '<otherTaxableIncomeNotSubjectToFinalTaxValue> \
            <otherExpandableDesc>'+ OtherTaxableIncomeNotSubjectToFinalTaxList[key].description + '</otherExpandableDesc> \
            <otherExpandableAmount>'+ OtherTaxableIncomeNotSubjectToFinalTaxList[key].amount + '</otherExpandableAmount> \
         </otherTaxableIncomeNotSubjectToFinalTaxValue> \ ';
        OtherTaxableIncomeNotSubjectToFinalTaxListHolder.push(obj1);
    }
    var sched3IterHolder;
    for (key in OtherTaxableIncomeNotSubjectToFinalTaxListHolder) {
        sched3IterHolder += OtherTaxableIncomeNotSubjectToFinalTaxListHolder[key];
    }
    var sched3 = '<taxpayerOtherTaxableIncomeNoTax> \
        <otherTaxableIncomeNotSubjectToFinalTaxDescFirst>'+ schedule3.otherTaxableIncomeNotSubjectToFinalTaxDescFirst + '</otherTaxableIncomeNotSubjectToFinalTaxDescFirst> \
        <otherTaxableIncomeNotSubjectToFinalTaxDescSecond>'+ schedule3.otherTaxableIncomeNotSubjectToFinalTaxDescSecond + '</otherTaxableIncomeNotSubjectToFinalTaxDescSecond> \
        <otherTaxableIncomeNotSubjectToFinalTaxDescThird>'+ schedule3.otherTaxableIncomeNotSubjectToFinalTaxDescThird + '</otherTaxableIncomeNotSubjectToFinalTaxDescThird> \
        <otherTaxableIncomeNotSubjectToFinalTaxValueFirst>'+ schedule3.otherTaxableIncomeNotSubjectToFinalTaxValueFirst + '</otherTaxableIncomeNotSubjectToFinalTaxValueFirst> \
        <otherTaxableIncomeNotSubjectToFinalTaxValueSecond>'+ schedule3.otherTaxableIncomeNotSubjectToFinalTaxValueSecond + '</otherTaxableIncomeNotSubjectToFinalTaxValueSecond> \
        <otherTaxableIncomeNotSubjectToFinalTaxValueThird>'+ schedule3.otherTaxableIncomeNotSubjectToFinalTaxValueThird + '</otherTaxableIncomeNotSubjectToFinalTaxValueThird> \
        <otherTaxableIncomeNotSubjectToFinalTaxValueTotal>'+ schedule3.otherTaxableIncomeNotSubjectToFinalTaxValueTotal + '</otherTaxableIncomeNotSubjectToFinalTaxValueTotal> \
        '+ sched3IterHolder + '\
		</taxpayerOtherTaxableIncomeNoTax> \	';
    // Page 4 Schedule 4

    var amortizationListHolder = [];
    for (key in amortizationList) {
        var obj2 = '<listAmortizations> \
            <otherExpandableDesc>'+ amortizationList[key].description + '</otherExpandableDesc> \
            <otherExpandableAmount>'+ amortizationList[key].amount + '</otherExpandableAmount> \
         </listAmortizations> \ ';
        amortizationListHolder.push(obj2);
    }
    var sched4AmortIterHolder;
    for (key in amortizationListHolder) {
        sched4AmortIterHolder += amortizationListHolder[key];
    }

    var otherListHolder = [];
    for (key in otherList) {
        var obj3 = '<listOtherOrdinaryItemizedDeductions> \
            <otherExpandableDesc>'+ otherList[key].description + '</otherExpandableDesc> \
            <otherExpandableAmount>'+ otherList[key].amount + '</otherExpandableAmount> \
         </listOtherOrdinaryItemizedDeductions> \ ';
        otherListHolder.push(obj3);
    }
    var sched4OtherIterHolder;
    for (key in otherListHolder) {
        sched4OtherIterHolder += otherListHolder[key];
    }
    var sched4 = '<taxpayerOrdinaryItemizedDeduction> \
        <adAndPromotionsVal>'+ schedule4.adAndPromotionsVal + '</adAndPromotionsVal> \
        <amortizatiosDescSecond>'+ schedule4.amortizatiosDescSecond + '</amortizatiosDescSecond> \
        <amortizatiosDescThird>'+ schedule4.amortizatiosDescThird + '</amortizatiosDescThird> \
        <amortizatiosDescFourth>'+ schedule4.amortizatiosDescFourth + '</amortizatiosDescFourth> \
        <amortizatiosValSecond>'+ schedule4.amortizatiosValSecond + '</amortizatiosValSecond> \
        <amortizatiosValThird>'+ schedule4.amortizatiosValThird + '</amortizatiosValThird> \
        <amortizatiosValFourth>'+ schedule4.amortizatiosValFourth + '</amortizatiosValFourth> \
        '+ sched4AmortIterHolder + ' \
        <badDebts>'+ schedule4.badDebts + '</badDebts> \
        <charitableContributions>'+ schedule4.charitableContributions + '</charitableContributions> \
        <commissions>'+ schedule4.commissions + '</commissions> \
        <communicationLightWater>'+ schedule4.communicationLightWater + '</communicationLightWater> \
        <utilities>'+ schedule4.utilities + '</utilities> \
        <depletion>'+ schedule4.depletion + '</depletion> \
        <depreciation>'+ schedule4.depreciation + '</depreciation> \
        <directorFee>'+ schedule4.directorFee + '</directorFee> \
        <fringeBenefits>'+ schedule4.fringeBenefits + '</fringeBenefits> \
        <fuelAndOil>'+ schedule4.fuelAndOil + '</fuelAndOil> \
        <insurance>'+ schedule4.insurance + '</insurance> \
        <iterest>'+ schedule4.iterest + '</iterest> \
        <janitorialAndMessengerial>'+ schedule4.janitorialAndMessengerial + '</janitorialAndMessengerial> \
        <losses>'+ schedule4.losses + '</losses> \
        <mgmtAndConsultancyFee>'+ schedule4.mgmtAndConsultancyFee + '</mgmtAndConsultancyFee> \
        <misc>'+ schedule4.misc + '</misc> \
        <officeSupplies>'+ schedule4.officeSupplies + '</officeSupplies> \
        <otherServices>'+ schedule4.otherServices + '</otherServices> \
        <professionalFees>'+ schedule4.professionalFees + '</professionalFees> \
        <schedGRental>'+ schedule4.schedGRental + '</schedGRental> \
        <repairLabor>'+ schedule4.repairLabor + '</repairLabor> \
        <repairMaterials>'+ schedule4.repairMaterials + '</repairMaterials> \
        <entertainment>'+ schedule4.entertainment + '</entertainment> \
        <researchAndDev>'+ schedule4.researchAndDev + '</researchAndDev> \
        <royalties>'+ schedule4.royalties + '</royalties> \
        <salariesAndAllownces>'+ schedule4.salariesAndAllownces + '</salariesAndAllownces> \
        <securityServices>'+ schedule4.securityServices + '</securityServices> \
        <otherContributions>'+ schedule4.otherContributions + '</otherContributions> \
        <taxesAndLiscenses>'+ schedule4.taxesAndLiscenses + '</taxesAndLiscenses> \
        <tollingFees>'+ schedule4.tollingFees + '</tollingFees> \
        <trainingsAndSeminars>'+ schedule4.trainingsAndSeminars + '</trainingsAndSeminars> \
        <travelTransportaion>'+ schedule4.travelTransportaion + '</travelTransportaion> \
        <othersFirstDescFirst>'+ schedule4.othersFirstDescFirst + '</othersFirstDescFirst> \
        <othersFirstDescSecond>'+ schedule4.othersFirstDescSecond + '</othersFirstDescSecond> \
        <othersFirstDescThird>'+ schedule4.othersFirstDescThird + '</othersFirstDescThird> \
        <othersFirstDescfourth>'+ schedule4.othersFirstDescfourth + '</othersFirstDescfourth> \
        <otherFirstValue>'+ schedule4.otherFirstValue + '</otherFirstValue> \
        <otherSecondValue>'+ schedule4.otherSecondValue + '</otherSecondValue> \
        <otherThirdValue>'+ schedule4.otherThirdValue + '</otherThirdValue> \
        <otherFourthValue>'+ schedule4.otherFourthValue + '</otherFourthValue> \
        '+ sched4OtherIterHolder + ' \
		</taxpayerOrdinaryItemizedDeduction> \ ';
    // Page 5 Schedule 5
    var specialAllowableItemizedDeductionsListHolder = [];
    for (key in specialAllowableItemizedDeductionsList) {
        var obj4 = '<listSched5AdditionalAttachments> \
            <otherExpandableDesc>'+ specialAllowableItemizedDeductionsList[key].description + '</otherExpandableDesc> \
            <otherExpandableAmount>'+ specialAllowableItemizedDeductionsList[key].amount + '</otherExpandableAmount> \
            <legalBasis>'+ specialAllowableItemizedDeductionsList[key].legalBasis + '</legalBasis> \
         </listSched5AdditionalAttachments> \ ';
        specialAllowableItemizedDeductionsListHolder.push(obj4);
    }
    var sched5IterHolder;
    for (key in specialAllowableItemizedDeductionsListHolder) {
        sched5IterHolder += specialAllowableItemizedDeductionsListHolder[key];
    }
    var sched5 = '<taxpayerSpecialItemizedDeduction> \
        <specialAllowableItemizedDeductionsDescription1>'+ schedule5.specialAllowableItemizedDeductionsDescription1 + '</specialAllowableItemizedDeductionsDescription1> \
        <specialAllowableItemizedDeductionsDescription2>'+ schedule5.specialAllowableItemizedDeductionsDescription2 + '</specialAllowableItemizedDeductionsDescription2> \
        <specialAllowableItemizedDeductionsDescription3>'+ schedule5.specialAllowableItemizedDeductionsDescription3 + '</specialAllowableItemizedDeductionsDescription3> \
        <specialAllowableItemizedDeductionsDescription4>'+ schedule5.specialAllowableItemizedDeductionsDescription4 + '</specialAllowableItemizedDeductionsDescription4> \
        <specialAllowableItemizedDeductionsLegalBasis1>'+ schedule5.specialAllowableItemizedDeductionsLegalBasis1 + '</specialAllowableItemizedDeductionsLegalBasis1> \
        <specialAllowableItemizedDeductionsLegalBasis2>'+ schedule5.specialAllowableItemizedDeductionsLegalBasis2 + '</specialAllowableItemizedDeductionsLegalBasis2> \
        <specialAllowableItemizedDeductionsLegalBasis3>'+ schedule5.specialAllowableItemizedDeductionsLegalBasis3 + '</specialAllowableItemizedDeductionsLegalBasis3> \
        <specialAllowableItemizedDeductionsLegalBasis4>'+ schedule5.specialAllowableItemizedDeductionsLegalBasis4 + '</specialAllowableItemizedDeductionsLegalBasis4> \
        <specialAllowableItemizedDeductionsAmount1>'+ schedule5.specialAllowableItemizedDeductionsAmount1 + '</specialAllowableItemizedDeductionsAmount1> \
        <specialAllowableItemizedDeductionsAmount2>'+ schedule5.specialAllowableItemizedDeductionsAmount2 + '</specialAllowableItemizedDeductionsAmount2> \
        <specialAllowableItemizedDeductionsAmount3>'+ schedule5.specialAllowableItemizedDeductionsAmount3 + '</specialAllowableItemizedDeductionsAmount3> \
        <specialAllowableItemizedDeductionsAmount4>'+ schedule5.specialAllowableItemizedDeductionsAmount4 + '</specialAllowableItemizedDeductionsAmount4> \
        <totalSpecialAllowableItemizedDeductions>'+ schedule5.totalSpecialAllowableItemizedDeductions + '</totalSpecialAllowableItemizedDeductions> \
        '+ sched5IterHolder + ' \
        </taxpayerSpecialItemizedDeduction> \ ';
    // Page 5 Schedule 6
    var nonDeductibleExpensesItemListHolder = [];
    for (key in nonDeductibleExpensesItemList) {
        var obj5 = '<listOfNonDeductibleExpensesItem3> \
            <otherExpandableDesc>'+ nonDeductibleExpensesItemList[key].description + '</otherExpandableDesc> \
            <otherExpandableAmount>'+ nonDeductibleExpensesItemList[key].amount + '</otherExpandableAmount> \
         </listOfNonDeductibleExpensesItem3> \ ';
        nonDeductibleExpensesItemListHolder.push(obj5);
    }
    var sched6NonDeductibleIterHolder;
    for (key in nonDeductibleExpensesItemListHolder) {
        sched6NonDeductibleIterHolder += nonDeductibleExpensesItemListHolder[key];
    }

    var nonTaxableAndSpDeductionsItemListHolder = [];
    for (key in nonTaxableAndSpDeductionsItemList) {
        var obj6 = '<listOfnonTaxableAndSpDeductionsItem6> \
            <otherExpandableDesc>'+ nonTaxableAndSpDeductionsItemList[key].description + '</otherExpandableDesc> \
            <otherExpandableAmount>'+ nonTaxableAndSpDeductionsItemList[key].amount + '</otherExpandableAmount> \
         </listOfnonTaxableAndSpDeductionsItem6> \ ';
        nonTaxableAndSpDeductionsItemListHolder.push(obj6);
    }
    var sched6NonTaxableIterHolder;
    for (key in nonTaxableAndSpDeductionsItemListHolder) {
        sched6NonTaxableIterHolder += nonTaxableAndSpDeductionsItemListHolder[key];
    }

    var specialDeductionsItemListHolder = [];
    for (key in specialDeductionsItemList) {
        var obj7 = '<listOfSpecialDeductionsItem8> \
            <otherExpandableDesc>'+ specialDeductionsItemList[key].description + '</otherExpandableDesc> \
            <otherExpandableAmount>'+ specialDeductionsItemList[key].amount + '</otherExpandableAmount> \
         </listOfSpecialDeductionsItem8> \ ';
        specialDeductionsItemListHolder.push(obj7);
    }
    var sched6SpecialDeductionIterHolder;
    for (key in specialDeductionsItemListHolder) {
        sched6SpecialDeductionIterHolder += specialDeductionsItemListHolder[key];
    }

    var sched6 = '<taxpayerReconciliationOfNetIncome> \
        <netIncomePerBooks>'+ schedule6.netIncomePerBooks + '</netIncomePerBooks> \
        <nonDeductibleExpensesItem2Description>'+ schedule6.nonDeductibleExpensesItem2Description + '</nonDeductibleExpensesItem2Description> \
        <nonDeductibleExpensesItem2Value>'+ schedule6.nonDeductibleExpensesItem2Value + '</nonDeductibleExpensesItem2Value> \
        <nonDeductibleExpensesItem3Description>'+ schedule6.nonDeductibleExpensesItem3Description + '</nonDeductibleExpensesItem3Description> \
        <nonDeductibleExpensesItem3Value>'+ schedule6.nonDeductibleExpensesItem3Value + '</nonDeductibleExpensesItem3Value> \
        '+ sched6NonDeductibleIterHolder + ' \
        <totalNonDeductibleExpenses>'+ schedule6.totalNonDeductibleExpenses + '</totalNonDeductibleExpenses> \
        <nonTaxableAndSpDeductionsItem5Description>'+ schedule6.nonTaxableAndSpDeductionsItem5Description + '</nonTaxableAndSpDeductionsItem5Description> \
        <nonTaxableAndSpDeductionsItem5Value>'+ schedule6.nonTaxableAndSpDeductionsItem5Value + '</nonTaxableAndSpDeductionsItem5Value> \
        <nonTaxableAndSpDeductionsItem6Description>'+ schedule6.nonTaxableAndSpDeductionsItem6Description + '</nonTaxableAndSpDeductionsItem6Description> \
        <nonTaxableAndSpDeductionsItem6Value>'+ schedule6.nonTaxableAndSpDeductionsItem6Value + '</nonTaxableAndSpDeductionsItem6Value> \
        '+ sched6NonTaxableIterHolder + ' \
        <specialDeductionsItem7Description>'+ schedule6.specialDeductionsItem7Description + '</specialDeductionsItem7Description> \
        <specialDeductionsItem7Value>'+ schedule6.specialDeductionsItem7Value + '</specialDeductionsItem7Value> \
        <specialDeductionsItem8Description>'+ schedule6.specialDeductionsItem8Description + '</specialDeductionsItem8Description> \
        <specialDeductionsItem8Value>'+ schedule6.specialDeductionsItem8Value + '</specialDeductionsItem8Value> \
        '+ sched6SpecialDeductionIterHolder + ' \
        <totalNonTaxableAndSpDeductions>'+ schedule6.totalNonTaxableAndSpDeductions + '</totalNonTaxableAndSpDeductions> \
        <netTaxableIncome>'+ schedule6.netTaxableIncome + '</netTaxableIncome> \
        </taxpayerReconciliationOfNetIncome>';

    // Page 6 Schedule 7
    var balanceSheet = '<taxpayerBalanceSheet> \
        <currentAssests>'+ balanceSheetBean.currentAssests + '</currentAssests> \
        <longTermInvestment>'+ balanceSheetBean.longTermInvestment + '</longTermInvestment> \
        <propertyPlantEquipmentNet>'+ balanceSheetBean.propertyPlantEquipmentNet + '</propertyPlantEquipmentNet> \
        <longTermReceivables>'+ balanceSheetBean.longTermReceivables + '</longTermReceivables> \
        <intangibleAssets>'+ balanceSheetBean.intangibleAssets + '</intangibleAssets> \
        <otherAssets>'+ balanceSheetBean.otherAssets + '</otherAssets> \
        <totalAssets>'+ balanceSheetBean.totalAssets + '</totalAssets> \
        <currentLiabilities>'+ balanceSheetBean.currentLiabilities + '</currentLiabilities> \
        <longTermLiabilities>'+ balanceSheetBean.longTermLiabilities + '</longTermLiabilities> \
        <deferedCredits>'+ balanceSheetBean.deferedCredits + '</deferedCredits> \
        <otherLiabilities>'+ balanceSheetBean.otherLiabilities + '</otherLiabilities> \
        <totalLiabilities>'+ balanceSheetBean.totalLiabilities + '</totalLiabilities> \
        <capitalStock>'+ balanceSheetBean.capitalStock + '</capitalStock> \
        <additionalPaidInCapital>'+ balanceSheetBean.additionalPaidInCapital + '</additionalPaidInCapital> \
        <retainedEarnings>'+ balanceSheetBean.retainedEarnings + '</retainedEarnings> \
        <totalEquity>'+ balanceSheetBean.totalEquity + '</totalEquity> \
        <totalLiabilitiesEquity>'+ balanceSheetBean.totalLiabilitiesEquity + '</totalLiabilitiesEquity> \
        <beginningCapital></beginningCapital> \
        <netIncomeForTheYear></netIncomeForTheYear> \
        <drawings></drawings> \
        <endingCapital></endingCapital> \
        <totalLiabilitiesAndCapital></totalLiabilitiesAndCapital> \
			</taxpayerBalanceSheet>  ';

    // Page 6 Schedule 8
    var stockholdersListHolder = [];
    for (key in stockholdersList) {
        var obj8 = '<listSched11AdditionalAttachments> \
            <registeredName>'+ stockholdersList[key].registeredName + '</registeredName> \
            <tin1>'+ stockholdersList[key].tin1 + '</tin1> \
            <tin2>'+ stockholdersList[key].tin2 + '</tin2> \
            <tin3>'+ stockholdersList[key].tin3 + '</tin3> \
            <branchCode>'+ stockholdersList[key].branchCode + '</branchCode> \
            <capitalContribution>'+ stockholdersList[key].capitalContribution + '</capitalContribution> \
            <percentToTotal>'+ stockholdersList[key].percentToTotal + '</percentToTotal> \
			  </listSched11AdditionalAttachments> \ ';
        stockholdersListHolder.push(obj8);
    }
    var sched8IterHolder;
    for (key in stockholdersListHolder) {
        sched8IterHolder += stockholdersListHolder[key];
    }
    var sched8 = '<listOfStockholders> \
        <capitalContributorType>'+ schedule8.capitalContributorType + '</capitalContributorType> \
        '+ sched8IterHolder + ' \
     </listOfStockholders> \ ';
    // Page 7 Schedule 9I
    var grossIncomeSubjectToFinalWithholdingListHolder = [];
    for (key in grossIncomeSubjectToFinalWithholdingList) {
        var obj9 = '<otherGrossIncome> \
            <otherGrossIncomeDesc>'+ grossIncomeSubjectToFinalWithholdingList[key].description + '</otherGrossIncomeDesc> \
            <otherGrossIncomeType>4</otherGrossIncomeType> \
            <otherGrossIncomeExempt>'+ grossIncomeSubjectToFinalWithholdingList[key].exempt + '</otherGrossIncomeExempt> \
            <otherGrossIncomeActualAmt>'+ grossIncomeSubjectToFinalWithholdingList[key].amount + '</otherGrossIncomeActualAmt> \
            <otherGrossIncomeFinalTaxWthldPd>'+ grossIncomeSubjectToFinalWithholdingList[key].finalTax + '</otherGrossIncomeFinalTaxWthldPd> \
			 </otherGrossIncome> \ ';
        grossIncomeSubjectToFinalWithholdingListHolder.push(obj9);
    }
    var sched9IIterHolder;
    for (key in grossIncomeSubjectToFinalWithholdingListHolder) {
        sched9IIterHolder += grossIncomeSubjectToFinalWithholdingListHolder[key];
    }
    var sched9I = '<taxpayerGrossIncome> \
        <interestExempt>'+ schedule9.interestExempt + '</interestExempt> \
        <interestsActualAmt>'+ schedule9.interestsActualAmt + '</interestsActualAmt> \
        <interestsFinalTaxWthldPd>'+ schedule9.interestsFinalTaxWthldPd + '</interestsFinalTaxWthldPd> \
        <royaltiesExempt>'+ schedule9.royaltiesExempt + '</royaltiesExempt> \
        <royaltiesActualAmt>'+ schedule9.royaltiesActualAmt + '</royaltiesActualAmt> \
        <royaltiesFinalTaxWthldPd>'+ schedule9.royaltiesFinalTaxWthldPd + '</royaltiesFinalTaxWthldPd> \
        <dividendsExempt>'+ schedule9.dividendsExempt + '</dividendsExempt> \
        <dividendsActualAmt>'+ schedule9.dividendsActualAmt + '</dividendsActualAmt> \
        <dividendsFinalTaxWthldPd>'+ schedule9.dividendsFinalTaxWthldPd + '</dividendsFinalTaxWthldPd> \
        <prizesWinningsExempt>'+ schedule9.prizesWinningsExempt + '</prizesWinningsExempt> \
        <prizesWinningsActualAmt>'+ schedule9.prizesWinningsActualAmt + '</prizesWinningsActualAmt> \
        <prizesWinningsFinalTaxWthldPd>'+ schedule9.prizesWinningsFinalTaxWthldPd + '</prizesWinningsFinalTaxWthldPd> \
        '+ sched9IIterHolder + ' \
		</taxpayerGrossIncome> \ ';
    // Page 7 Schedule 9II
    var realPropertySaleListHolder = [];
    for (key in realPropertySaleList) {
        var obj10 = '<taxpayerRealPropertySales> \
            <propDescription>'+ realPropertySaleList[key].propDescription + '</propDescription> \
            <taxDeclNo>'+ realPropertySaleList[key].taxDeclNo + '</taxDeclNo> \
            <carNo>'+ realPropertySaleList[key].carNo + '</carNo> \
            <actualAmount>'+ realPropertySaleList[key].actualAmount + '</actualAmount> \
            <propertyTaxWithheld>'+ realPropertySaleList[key].propertyTaxWithheld + '</propertyTaxWithheld> \
			</taxpayerRealPropertySales> \ ';
        realPropertySaleListHolder.push(obj10);
    }
    var sched9IIIterHolder;
    for (key in realPropertySaleListHolder) {
        sched9IIIterHolder += realPropertySaleListHolder[key];
    }
    // Page 7 Schedule 9III
    var stockShareSaleListHolder = [];
    for (key in stockShareSaleList) {
        var obj11 = '<taxpayerStockShares> \
            <stockKind>'+ stockShareSaleList[key].stockKind + '</stockKind> \
            <stockSeries>'+ stockShareSaleList[key].stockSeries + '</stockSeries> \
            <stockCARNo>'+ stockShareSaleList[key].stockCARNo + '</stockCARNo> \
            <numShares>'+ stockShareSaleList[key].numShares + '</numShares> \
            <dateIssued>'+ stockShareSaleList[key].Issued + '</dateIssued> \
            <stockActualAmount>'+ stockShareSaleList[key].stockActualAmount + '</stockActualAmount> \
            <stockTaxWithheld>'+ stockShareSaleList[key].stockTaxWithheld + '</stockTaxWithheld> \
			</taxpayerStockShares> \ ';
        stockShareSaleListHolder.push(obj11);
    }
    var sched9IIIIterHolder;
    for (key in stockShareSaleListHolder) {
        sched9IIIIterHolder += stockShareSaleListHolder[key];
    }
    // Page 7 Schedule 9IV
    var otherIncomeListHolder = [];
    for (key in otherIncomeList) {
        var obj12 = '<taxpayerOtherIncome> \
            <otherIncome>'+ otherIncomeList[key].otherIncome + '</otherIncome> \
            <actualAmount>'+ otherIncomeList[key].actualAmount + '</actualAmount> \
            <otherIncomeTaxWithheld>'+ otherIncomeList[key].otherIncomeTaxWithheld + '</otherIncomeTaxWithheld> \
			</taxpayerOtherIncome> \ ';
        otherIncomeListHolder.push(obj12);
        //alert(obj12);
    }
    var sched9IVIterHolder;
    for (key in otherIncomeListHolder) {
        sched9IVIterHolder += otherIncomeListHolder[key];
    }
    // Page 7 Schedule 10
    var returnOfPremium = '<taxpayerGrossIncomeExempt> \
        <proceedsOfInsurance></proceedsOfInsurance> \
        <returnOfPremium>'+ premium.returnOfPremium + '</returnOfPremium> \
        <retirementBenefitsEtc></retirementBenefitsEtc> \
        <totalFinalTaxWithheldOrPaid></totalFinalTaxWithheldOrPaid> \
     </taxpayerGrossIncomeExempt> \ ';
    // Page 7 Schedule 10I
    var personalPropertyReceivedListHolder = [];
    for (key in personalPropertyReceivedList) {
        var obj13 = '<taxpayerPersonalPropertyReceived> \
            <personalPropertyDesc>'+ personalPropertyReceivedList[key].personalPropertyDesc + '</personalPropertyDesc> \
            <personalPropertyTransferMode>'+ personalPropertyReceivedList[key].personalPropertyTransferMode + '</personalPropertyTransferMode> \
            <personalPropertyCARNo>'+ personalPropertyReceivedList[key].personalPropertyCARNo + '</personalPropertyCARNo> \
            <personalPropertyActualAmount>'+ personalPropertyReceivedList[key].personalPropertyActualAmount + '</personalPropertyActualAmount> \
			</taxpayerPersonalPropertyReceived> \ ';
        personalPropertyReceivedListHolder.push(obj13);
    }
    var sched10IIterHolder;
    for (key in personalPropertyReceivedListHolder) {
        sched10IIterHolder += personalPropertyReceivedListHolder[key];
    }
    // Page 7 Schedule 10II
    var otherExemptIncomeListHolder = [];
    for (key in otherExemptIncomeList) {
        var obj14 = '<taxpayerOtherExemptIncome> \
            <otherIncome>'+ otherExemptIncomeList[key].otherIncome + '</otherIncome> \
            <actualAmount>'+ otherExemptIncomeList[key].actualAmount + '</actualAmount> \
				</taxpayerOtherExemptIncome> \ ';
        otherExemptIncomeListHolder.push(obj14);
    }
    var sched10IIIterHolder;
    for (key in otherExemptIncomeListHolder) {
        sched10IIIterHolder += otherExemptIncomeListHolder[key];
    }
    var closeForm = '</formBean> ';
    var footer = '</ws:submitForm1702EX> \
				   </soapenv:Body> \
				</soapenv:Envelope>';

    return header + openForm + payer + taxPayable + ComputationOfTax + taxRelief + externalAuditorAccreditedTaxAgent + salesRevenue + costOfSale + sched3 + sched4 + sched5 + sched6 + balanceSheet + sched8 + sched9I + sched9IIIterHolder + sched9IIIIterHolder + sched9IVIterHolder + returnOfPremium + sched10IIterHolder + sched10IIIterHolder + closeForm + footer;
}


