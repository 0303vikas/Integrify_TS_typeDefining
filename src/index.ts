import axios, {AxiosError} from 'axios'

import BisCompanyDetails from "./types/apiWithBusinessId"
import BisCompany from "./types/apiFetchAll"


const APIWITHOUTBUSINESSID = "http://avoindata.prh.fi/bis/v1/"



const getData = async <T>(apiEndpoint: string) => {
    try{
        const fetchData = await axios.get<T>(apiEndpoint)    
        const companies: T= fetchData.data
        return companies 
    } catch(error) {
        const axiosError = error as AxiosError
        return axiosError.message

    }  
  
}

const getCompanies = async() => {
    const data = await getData<BisCompany[]>('https://dog.ceo/api/breeds/image/random')
    return data
}



const dataty =  getCompanies()

console.log(dataty)