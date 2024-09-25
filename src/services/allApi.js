import axios from "axios";

const base_url="http://localhost:3000"

export const addVideoApi=async(data)=>{
    return await axios.post(`${base_url}/videos`,data)
}