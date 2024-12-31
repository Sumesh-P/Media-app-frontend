import React, { useEffect, useState } from 'react'
import VideoCard from '../Components/VideoCard'
import { GetVideoAPI } from '../../Services/allAPI'
function ViewVideo({addVideoResp}) {
  const[allVideos,setAllVideos]=useState([])
  const handleGetVideo=async()=>{
   const result= await GetVideoAPI();
   console.log(result)
   setAllVideos(result.data)
   console.log(allVideos);
  }
  useEffect(()=>{
    handleGetVideo()
  },[addVideoResp])
  
  return (
    <div>
      <div className="row p-2">
        <div className="col">
          <VideoCard allVideos={allVideos}/>
        </div>
      </div>
    </div>
  )
}

export default ViewVideo