import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Add() {
  const [show, setShow] = useState(false);

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
              <Form.Control type="text" placeholder="Add Video Title" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingImg" label="Vide Thumbnail URL">
              <Form.Control type="text" placeholder="Video Thumbnail URL" className='mb-3'/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Youtube Video URL">
              <Form.Control type="text" placeholder="Youtube Video URL" />
            </FloatingLabel>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add