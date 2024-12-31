import React from 'react'
import { MdCloudUpload } from "react-icons/md";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BiSolidVideos } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import { AddVideoAPI } from '../../Services/allAPI';
import Swal from 'sweetalert2'
function AddVideo({setAddVideoResponse}) {
  const[videoDetails,setVideoDetails]=useState({
    caption:"",
    imgUrl:"",
    link:""
  })
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  console.log(videoDetails);
  const getEmbedLink=(e)=>{
    let value=e.target.value;
    let yCode=value.slice(-31);
    let yLink=`https://www.youtube.com/embed/${yCode}`
    setVideoDetails({...videoDetails,link:yLink})
  }
  const handleAdd=async()=>{
    if(!videoDetails.caption || !videoDetails.imgUrl || !videoDetails.link){
      Swal.fire({
        title: 'Error!',
        text: 'Please Fill the form',
        icon: 'error',
        confirmButtonText: 'Back'
      })
    }
    else{
      const result=await AddVideoAPI(videoDetails);
      if(result.status>=200 && result.status<=300){
        Swal.fire({
          title: 'Success!',
          text: 'Video added successfully',
          icon: 'success',
          confirmButtonText: 'ok'
        })
      handleClose();
      setAddVideoResponse(result.data)
      setVideoDetails({
        caption:"",
        imgUrl:"",
        link:""
      })
      // setTimeout(() => {
      //   window.location.reload()
      //  }, 1000);
      
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: result.message,
        icon: 'error',
        confirmButtonText: 'Back'
      })
    }
      
    }
  }
  

  return (
    <div><MdCloudUpload className='fs-1' onClick={handleShow}/>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h2>Upload Videos <BiSolidVideos className='fs-3'/></h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <h3>Please fill the form details</h3>
         <div style={{border:"1px solid grey"}} className='p-2'>
         <Form.Control type="text" placeholder="video caption" onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})}/>
         <br /><Form.Control type="text" placeholder="video image" onChange={(e)=>setVideoDetails({...videoDetails,imgUrl:e.target.value})}/>
         <br /><Form.Control type="text" placeholder="video URL" onChange={getEmbedLink}/>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary"onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddVideo