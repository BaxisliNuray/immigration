import { URL } from "./base_url";
import axios from 'axios'

//get all
export const getAll = async () => {
    let globalData
    await axios.get(`${URL}/immigrants`).then((res) =>{
        globalData=res.data
    })
    return globalData
}

//delete