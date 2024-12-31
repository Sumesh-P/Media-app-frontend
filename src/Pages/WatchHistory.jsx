import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import {Link} from "react-router-dom"
import Swal from 'sweetalert2';

import { deleteWatchHistoryAPI, getWatchHistoryAPI } from '../../Services/allAPI';
function WatchHistory() {
  const [WatchHistoryDetails,setWatchHistoryDetails]=useState([])
    const handleDelete = async (id) => {
        try {
          const result = await deleteWatchHistoryAPI(id);
          console.log(result);
          Swal.fire({
            title: 'Deleted',
            text: 'Video Deleted Successfully',
            icon: 'success',
            confirmButtonText: 'ok'
          });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } catch (error) {
          console.log(error);
      };
  }
  const handleGet=async()=>{
    const response=await getWatchHistoryAPI()
    console.log(response);
    setWatchHistoryDetails(response.data)
  }
  useEffect(()=>{
    handleGet()
  },[])
  return (
    <div>
  <div className="row" style={{ width: "100%" }}>
    <div className="col m-3"><h2><u>Watch History</u></h2></div>
    <div className="col m-3">
          <h2 style={{ textAlign: "right" }}><Link to='/home' style={{textDecoration:"none"}}>← Back to Home Page</Link>
          </h2>
        </div>
        </div>

  <div className=''>
  <Table striped className="me-3">
    <thead>
      <tr>
        <th>SlNo.</th>
        <th>Caption</th>
        <th>URL</th>
        <th>Timestamp</th>
        <th>Action</th>
      </tr>
    </thead>
    {
      WatchHistoryDetails.map((item,index)=>(
        <tbody>
      <tr>
        <td>{index+1}</td>
        <td>{item.caption}</td>
        <td><a href={item.link} >{item.link}</a></td>
        <td>{item.timestamp}</td>
        <td><MdDelete className="text-danger fs-2" onClick={()=>handleDelete(item.id)}/></td>
      </tr>
    </tbody>
))}
  </Table>
  </div>
</div>

  )
}

export default WatchHistory