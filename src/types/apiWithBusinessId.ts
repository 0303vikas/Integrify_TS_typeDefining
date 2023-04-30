interface BisCompanyDetails {
    names: BisCompanyName[]
    auxiliaryNames?: BisCompanyName[]
    addresses?: BisAddress[]
    companyForms?: BisCompanyForm[]
    liquidations?: BisCompanyLiquidation[]
    businessLines?: BisCompanyBusinessLine[]
    languages?: BisCompanyLanguage[]
    registeredOffices?: BisCompanyRegisteredOffice[]
    contactDetails?: BisCompanyContactDetail[]
    registeredEntries?: BisCompanyRegisteredEntry[]
    businessIdChanges?: BisCompanyBusinessIdChange[]
    businessId: string
    registrationDate: string
    companyForm?: string
    detailsUri?: string
    name: string
}

interface BisCompanyName {
    source?: CommonInterface['source']
    order: CommonInterface['order']
    version: CommonInterface['version']
    registration: CommonInterface['registrationDate']
    endDate?: CommonInterface['endDate'] 
    name: CommonInterface['name'] 
    language?: CommonInterface['language']    
}

interface BisAddress  {
    source?: CommonInterface['source']
    version: CommonInterface['version']
    registrationDate: CommonInterface['registrationDate']
    endDate?: CommonInterface['endDate'] 
    language?: CommonInterface['language']
    careOf?: string
    street?: string
    postCode?: string
    city?: string
    type: number
    country?: string 
}

interface  BisCompanyForm  {
    source?: CommonInterface['source']
    version: CommonInterface['version']
    registrationDate: CommonInterface['registrationDate']
    endDate?: CommonInterface['endDate'] 
    name: CommonInterface['name']
    language?: CommonInterface['language'] 
    type: string
}

interface BisCompanyLiquidation {
    source?: CommonInterface['source']
    registrationDate: CommonInterface['registrationDate']
    endDate?: CommonInterface['endDate'] 
    name: CommonInterface['name'] 
    language?: CommonInterface['language']
    version: CommonInterface['version']
    type: string
}

interface BisCompanyBusinessLine {
    source?: CommonInterface['source']
    version: CommonInterface['version']
    order: CommonInterface['order']
    registrationDate: CommonInterface['registrationDate']
    endDate?: CommonInterface['endDate'] 
    name: CommonInterface['name'] 
    language?: CommonInterface['language']
}

interface BisCompanyLanguage {
    source?: CommonInterface['source']
    version: CommonInterface['version']
    registrationDate: CommonInterface['registrationDate']
    endDate?: CommonInterface['endDate'] 
    name: CommonInterface['name'] 
    language?: CommonInterface['language']
}

interface BisCompanyRegisteredOffice {
    source?: CommonInterface['source']
    version: CommonInterface['version']
    order: CommonInterface['order']
    registrationDate: CommonInterface['registrationDate']
    endDate?: CommonInterface['endDate'] 
    name: CommonInterface['name'] 
    language?: CommonInterface['language']
}

interface BisCompanyContactDetail {
    source?: CommonInterface['source']
    registrationDate: CommonInterface['registrationDate']
    endDate?: CommonInterface['endDate'] 
    language?: CommonInterface['language']
    value: string
    type: string
}

interface BisCompanyRegisteredEntry {
    registrationDate: CommonInterface['registrationDate']
    endDate?: CommonInterface['endDate'] 
    language?: CommonInterface['language']
    description: CommonInterface['description']
    status: 0|1|2
    register: 1|2|3|4|5|6|7|8
    authority: 1|2|3
}

interface BisCompanyBusinessIdChange {
    source?: CommonInterface['source']
    language?: CommonInterface['language']
    description: CommonInterface['description']
    reason: string
    changeDate?: string
    change: 2|3|5|44|45|46|47|48|49|57|'DIF'|'FUU'
    oldBusinessId: string
    newBusinessId: string
}

interface CommonInterface {
    source: 0|1|2|3
    version: number
    order: number
    registrationDate: string
    endDate: string
    name: string
    language: string
    description: string
}

export default BisCompanyDetails