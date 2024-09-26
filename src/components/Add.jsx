import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoApi } from '../services/allApi';
import { toast } from 'react-toastify';

function Add({setresult}) {
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState({
    title:"", imageUrl:"", videoUrl:""
  })

  const handleAdd=async()=>{
    console.log(video);
    const {title,imageUrl,videoUrl}=video //object destructuring
    if(!title || !imageUrl || !videoUrl){
    toast.warning('Enter Valid Input')
    }
    else{

      const watchUrl=video.videoUrl
      const urls=watchUrl.split("v=")[1]
      const embedUrl=`https://www.youtube.com/embed/${urls}?si=sLUzbIifGJbgZUSq&autoplay=1`
      video.videoUrl=embedUrl


      const result = await addVideoApi(video)
      if(result.status=201){
      toast.success("Video Uploaded Succesfully")
        setVideo({
          title:"", imageUrl:"", videoUrl:""
        })
        handleClose()
        setresult(result)
      }
      else{
      toast.error("Uploading Failed")
        console.log(result);
      }
    }
    
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button onClick={handleShow} className='btn'>
        <i className="fa-solid fa-circle-plus fa-2xl" />
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form */}
          <div>
            <FloatingLabel controlId="floatingTitle" label="Add Video Title" className="mb-3">
              <Form.Control onChange={(e)=>{setVideo({...video,title:e.target.value})}} type="text" placeholder="Add Video Title" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingImg" label="Video Thumbnail URL">
              <Form.Control onChange={(e)=>{setVideo({...video,imageUrl:e.target.value})}} type="text" placeholder="Video Thumbnail URL" className='mb-3'/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Youtube Video URL">
              <Form.Control onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}} type="text" placeholder="Youtube Video URL" />
            </FloatingLabel>
          </div>
        </Modal.Body>
          {/* Button */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add