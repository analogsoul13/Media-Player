import React from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='container-fluid'>
        <Row className='align-items-center bg-primary text-light p-5'>
          <Col>
            <h3 className='text-light'>Media Player</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga temporibus obcaecati labore. Labore facere amet fuga, vero provident, ex laboriosam veniam perspiciatis repellat nulla tempore earum in molestiae cumque.</p>
          </Col>
          <Col className='text-light'>
            <h2 className='text-light'>Links</h2>
            <div className='d-flex flex-column'>
              <Link to={'/'} style={{color:'white'}} className='text-decoration-none'>Landing</Link>
              <Link to={'/dash'} style={{color:'white'} } className='text-decoration-none'>Dashboard</Link>
              <Link to={'/his'} style={{color:'white'}} className='text-decoration-none'>Watch History</Link>
            </div>
          </Col>
          <Col>
            <Form>
              <h3 className='text-light'>Contact Us</h3>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Write your message</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <button className='btn btn-danger mt-4'>Send</button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>

    </>
  )
}

export default Footer