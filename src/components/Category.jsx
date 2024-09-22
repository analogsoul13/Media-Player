import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-grid p-2'>
        <h1>Categories</h1>
        <button onClick={handleShow} className='btn btn-dark'><i className="fa-regular fa-square-plus px-2" style={{ color: "#ffffff", }} />Add</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form */}
          <div>
            <FloatingLabel controlId="floatingTitle" label="Category Name" className="mb-3">
              <Form.Control type="text" placeholder="Category Name" />
            </FloatingLabel>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal> 

    </>
  )
}

export default Category