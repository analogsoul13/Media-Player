import React,{useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import Add from '../components/Add'
import Videos from '../components/Videos'
import Category from '../components/Category'
import { Link } from 'react-router-dom'

function Dashboard() {
    const [result,setResult] = useState({})
  return (
    <>
    <div className='container-fluid'>
        <div className='mx-4 my-3 d-flex justify-content-between align-items-center'>
            <h2>Videos</h2>
            <Link to={'/his'} style={{textDecoration:'none', color:'red'}}><h6>Watch History</h6></Link>       
        </div>

        <Row>
            <Col md={1}>
                <Add setresult={setResult} />
            </Col>
            <Col md={8}>
                <Videos result={result} />
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