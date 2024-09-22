import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function VideoCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '18rem' }} className='shadow'>
                <Card.Img onClick={handleShow} style={{cursor:'pointer'}} variant="top" src="https://i.ytimg.com/vi/mk48xRzuNvA/maxresdefault.jpg" />
                <Card.Body className='d-flex'>
                    <Card.Title>The Script - Hall of Fame</Card.Title>
                    <Button className='bg-light' style={{border:'none'}}><i className="fa-solid fa-trash-can fa-xl" style={{ color: "#ff0000", }} /></Button>
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Vide Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/mk48xRzuNvA?si=sLUzbIifGJbgZUSq&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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