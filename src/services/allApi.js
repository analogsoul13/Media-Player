import axios from "axios";

const base_url="http://localhost:3000"

export const addVideoApi=async(data)=>{
    return await axios.post(`${base_url}/videos`,data)
}

export const getVideosApi=async()=>{
    return await axios.get(`${base_url}/videos`)
}

export const deleteVideoApi=async(id)=>{
    return await axios.delete(`${base_url}/videos/${id}`)
}