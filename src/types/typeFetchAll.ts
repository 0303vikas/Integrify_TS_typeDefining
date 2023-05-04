interface BisCompany { 
    type?: string,
    version?: string,
    totalResults?: number,
    resultsFrom?: number,
    previousResultsUri?: null,
    nextResultsUri?: null,
    exceptionNoticeUri?: null,
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