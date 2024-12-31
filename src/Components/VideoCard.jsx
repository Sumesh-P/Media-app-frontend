import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from 'react-bootstrap/Modal';
import { addWatchHistoryAPI, DeleteVideoAPI } from '../../Services/allAPI';
import Swal from 'sweetalert2';
function VideoCard({ allVideos }) {
  console.log(allVideos);

  // State to control the modal visibility and selected video
  const [show, setShow] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = async(video) => {
    setSelectedVideo(video);  // Set the selected video
    const {caption,link}=video
    let today=new Date()
    console.log(today)
    console.log(caption)
    console.log(link)
    let timestamp = Intl.DateTimeFormat('en-US', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(today);
    console.log(timestamp)
    const reqBody={
      caption,
      link,
      timestamp
    }
    const result=await addWatchHistoryAPI(reqBody)
    console.log(result)
    setShow(true);  // Show the modal
  };

  const handleDelete = async (id) => {
    try {
      const result = await DeleteVideoAPI(id);
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
    }
  };
  const videoDragStart = async (e, vId) => {
    console.log("Video Drag Started");
    console.log(e);
    console.log(vId);
    
    // Set the videoId in the drag event dataTransfer
    e.dataTransfer.setData("videoId", vId);
};

  return (
    <div>
      <div className="row">
        {
          allVideos.map(item => (
            <div className='col' key={item.id}>
              <Card draggable={true} onDragStart={e=>videoDragStart(e,item.id)} style={{ width: '16rem' }}>
                <Card.Img
                  variant="top"
                  src={item.imgUrl}
                  onClick={() => handleShow(item)}  // Pass the clicked video to handleShow
                />
                <Card.Body className='bg-dark'>
                  <div className='d-flex justify-content-between'>
                    <Card.Title>{item.caption}</Card.Title>
                    <RiDeleteBin6Line className='fs-1 text-danger' onClick={() => handleDelete(item.id)} />
                  </div>
                </Card.Body>
              </Card>

              {/* Modal for displaying the selected video */}
              <Modal
                show={show && selectedVideo === item}  // Only show if this video is selected
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title><h2>{item.caption}</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <iframe
                    width="100%"
                    height="315"
                    src={item.link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </Modal.Body>
              </Modal>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default VideoCard;
