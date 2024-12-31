import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { BiSolidVideos } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BiSolidCategoryAlt } from "react-icons/bi";
import { AddCategoryAPI, DeleteCategoryAPI, getAVideoAPI, GetCategoryAPI, updateCategoryAPI } from '../../Services/allAPI';
import Swal from 'sweetalert2'
import { RiDeleteBin6Fill } from "react-icons/ri";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
function AddCategory() {
  const[categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddCategory=async()=>{
    console.log(categoryName);
    if(categoryName){
       try{
        const body={
          categoryName,
          allVideos:[]
        }
          const result=await AddCategoryAPI(body);
          console.log(result);
          if(result.status>=200 && result.status<=300){
            Swal.fire({
              title: 'Success!',
              text: 'Category Added Successfully',
              icon: 'success',
              confirmButtonText: 'OK'
            })
            handleClose();
            setCategoryName("");
            handleCategory();
          }
          else{
            Swal.fire({
              title: 'Error!',
              text: result.message,
              icon: 'error',
              confirmButtonText: 'back'
            })
          }
       }
       catch(error){
        Swal.fire({
          title: 'Error!',
          text: error,
          icon: 'error',
          confirmButtonText: 'back'
        })
       }
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'Please fill the form',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }
  const[storeCategory,setStoreCategory]=useState([])
  const handleCategory=async()=>{
    try{
      const result=await GetCategoryAPI();
      console.log(result);
      if(result.status>=200 && result.status<=300){
        setStoreCategory(result.data)
      }
      else{
        console.log(result.message)
      }
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    handleCategory()
  },[])
  const handleDeleteCategory=async(id)=>{
    try{
      const result=await DeleteCategoryAPI(id);
      console.log(result);
      if(result.status>=200 && result.status<=300){
        Swal.fire({
          title: 'Success!',
          text: 'Category Deleted Successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        handleCategory()
      }
      else{
        Swal.fire({
          title: 'Error!',
          text: result.message,
          icon: 'error',
          confirmButtonText: 'back'
        })
      }
    }
    catch(error){
      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'back'
      })
    }
  }
  const VideoOver = (e) => {
    console.log(e);
    console.log("Video Over");
    e.preventDefault();
  };
  
  const videoDrop = async(e, cId) => {
    console.log(e);
    console.log("Video dropped at categoryId" + cId);
    let vId=e.dataTransfer.getData("videoId")
    console.log(`VideoId ${vId}`)
    try {
      // Now properly await the result of the async API call
      console.log("inside try");
      
      const result = await getAVideoAPI(vId); // Await the promise returned by getAVideoAPI
      
      // If successful, log the data from the result
      console.log(result.data);
      const selectedCategory=storeCategory.find(item=>(item.id==cId))
      console.log(selectedCategory);
      selectedCategory.allVideos.push(result.data)
      const response=await updateCategoryAPI(cId,selectedCategory)
      console.log(response)
      handleCategory()
  } catch (error) {
      // If an error occurs during the API call, log the error
      console.log("Error fetching video data:", error);
  }
  };
  return (
    <div><Button className='btn btn-warning'onClick={handleShow}>Add Category</Button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h2>Add Category<BiSolidCategoryAlt fs-3/></h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div style={{border:"1px solid grey"}} className='p-2'>
         <Form.Control type="text" placeholder="Add category" onChange={(e)=>setCategoryName(e.target.value)}/>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      {
        storeCategory.map(item=>
        (
          <MDBCard className='m-2' onDragOver={(e) => VideoOver(e)} onDrop={(e) => videoDrop(e, item.id)}>
      <div className="row d-flex ">
      <MDBCardBody>
        <MDBCardText>
         <h2>{item.categoryName}</h2>
          
          <div className='col text-success'>
          {
            item.allVideos.map(i=>(
              <p>{i.caption}</p>
            ))
          }
          </div>
        </MDBCardText>
        <MDBBtn onClick={()=>handleDeleteCategory(item.id)}><RiDeleteBin6Fill className='fs-3'/></MDBBtn>
      </MDBCardBody>
      </div>
    </MDBCard>
        )
        )
      }
    </div>
  )
}

export default AddCategory