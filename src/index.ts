import axios, {AxiosError} from 'axios'
import BisCompanyDetails from "./types/typeFetchOne"
import BisCompany from "./types/typeFetchAll"

const getData = async<T>(apiEndpoint: string) => {
    try{
        const fetchData = await axios.get<T>(apiEndpoint)    
        const companies: T= fetchData.data        
        return companies
    } catch(error) {
        const axiosError = error as AxiosError
        return axiosError.message
    }    
}

const getCompanies = async(maxResults: number,resultFrom: number, streetAddressPostCode: string) => {
    const companiesDetails: string|BisCompany = await getData<BisCompany>(`http://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${maxResults}&resultsFrom=${resultFrom}&companyRegistrationFrom=${streetAddressPostCode}`)
    if(typeof companiesDetails === 'string' ) return companiesDetails
    let companieDataList = []
    for (const item of companiesDetails.results){
        const companieData: string|BisCompanyDetails = await getData(`http://avoindata.prh.fi/bis/v1/${item.businessId}`)
        if(typeof companieData === 'string' ) return companieData
        companieDataList.push(companieData.results[0])
    }   
    return companieDataList
}

const dataty =  getCompanies().then(result => console.log(result))

