import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddVideo from '../Components/AddVideo'
import { ImHistory } from "react-icons/im";
import Card from 'react-bootstrap/Card';
import ViewVideo from '../Components/ViewVideo'
import VideoCard from '../Components/VideoCard'
import AddCategory from '../Components/AddCategory'
function HomePage() {
  const[addVideoResp,setAddVideoResponse]=useState({})
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
  <div className='d-flex m-2'>
    <h1>Upload Video</h1><span> <AddVideo setAddVideoResponse={setAddVideoResponse}/></span>
  </div>
  <div>
    <Link to="/watchHistory" style={{textDecoration:"none"}}>
      <h3 className='m-2'>Watch History<ImHistory className='fs-3' /></h3>
    </Link>
  </div>
</div>
{/* --------------- */}
<div>
  <div className="row">
    <div className="col-9">
      <h1 style={{textAlign:"center"}} >All Videos</h1>
      <ViewVideo addVideoResp={addVideoResp}/>
    </div>
    <div className="col-3">
      <h2>Category</h2>
      <AddCategory/>
    </div>
  </div>
      </div>
      </div>
  )
}

export default HomePage