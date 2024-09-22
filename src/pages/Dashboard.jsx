import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Add from '../components/Add'
import Videos from '../components/Videos'
import Category from '../components/Category'

function Dashboard() {
  return (
    <>
    <div className='container-fluid'>
        <h2>Videos</h2>
        <Row>
            <Col md={1}>
                <Add />
            </Col>
            <Col md={8}>
                <Videos />
            </Col>
            <Col md={3}>
                <Category />
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Dashboard