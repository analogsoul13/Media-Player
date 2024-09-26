import React,{useEffect,useState} from 'react'
import VideoCard from './VideoCard'
import { getVideosApi } from '../services/allApi'

function Videos({result}) {

  const [data,setData] = useState([])

  useEffect(()=>{
    getData()
  },[result])

  const getData=async()=>{
    const result = await getVideosApi()
    console.log(result);
    if (result.status==200){
      setData(result.data)
    }

    
  }

  return (
    <>
    <div className="container-fluid border border-3 border-dark shadow p-2 mb-4">
      {
        data.length>0?
        <div className='row p-4 align-items-start gap-4'>
          {data.map(item=>(
            <VideoCard video={item} />  
          ))}       
        </div>

        :
        <h4 className='text-center text-danger'>No Videos Found !!</h4>
      }
  
    </div>
    </>
  )
}

export default Videos