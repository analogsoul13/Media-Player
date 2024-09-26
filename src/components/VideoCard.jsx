import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoApi } from '../services/allApi';
import { toast } from 'react-toastify';

function VideoCard({video}) {
    const [show, setShow] = useState(false);

    const handleDelete=async()=>{
        const result = await deleteVideoApi(video.id)
        if(result.status==200){
            toast.success("Video Removed !")
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '18rem' }} className='shadow rounded'>
                <Card.Img onClick={handleShow} style={{cursor:'pointer'}} variant="top" src={video.imageUrl} />
                <Card.Body className='d-flex'>
                    <Card.Title>{video.title}</Card.Title>
                    <Button onClick={handleDelete} className='bg-light' style={{border:'none'}}><i className="fa-solid fa-trash-can fa-xl" style={{ color: "#ff0000", }} /></Button>
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{video.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe width="100%" height="315" src={video?.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VideoCard