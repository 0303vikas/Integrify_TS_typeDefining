interface BisCompany { 
    type: any,
    version: any,
    totalResults: any,
    resultsFrom: any,
    previousResultsUri: any,
    nextResultsUri: any,
    exceptionNoticeUri: any,
    results: BisCompanyResults[]         
}

interface BisCompanyResults {
    businessId: string
    registrationDate: string
    companyForm?: string
    detailsUri?: string
    name: string
}

export default BisCompany