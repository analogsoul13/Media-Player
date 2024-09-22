import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
    return (
        <>
            <div className="container-fluid p-5">
                <Row>
                    <Col className='d-flex flex-column justify-content-center'>
                        <h1 className='fs-1'>Media Player</h1>
                        <p style={{ textAlign: 'justify' }}>This is a basic media player with minimal capabilities like adding videos from youtube or any other link here and play here. Also can create different categories according to the videos genre. You can also delete or add videos. The watch history is saved so you can see the list in the dashboard blah blah blah.. </p>
                        <div>
                            <Link to={'/dash'} className='btn btn-dark shadow'>Let's Go</Link>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <img className='img-fluid' src="https://png.pngtree.com/png-vector/20220221/ourmid/pngtree-flatstyle-black-vector-illustration-of-a-mobile-stereo-music-icon-with-cassette-recorder-design-vector-png-image_29792814.png" alt="" />
                    </Col>
                </Row>
            </div>
            <div className="container-fluid p-5 mt-3">
                <h4 className='text-center mb-4'>Features</h4>
                {/* cards */}
                <div className='row justify-content-around'>
                    <Card style={{ width: '18rem' }} className='bg-dark p-2 text-light shadow'>
                        <Card.Img variant="top" src="https://cdn-images-1.medium.com/max/1200/1*CgjvOHqRTMXw2i8m7Mdo0w.gif" />
                        <Card.Body>
                            <Card.Title>Simple</Card.Title>
                            <Card.Text>
                                Easily add videos from any link here with ease. Minimal ans user-friendly UI.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className='bg-dark p-2 text-light shadow'>
                        <Card.Img variant="top" src="https://cdn.dribbble.com/users/4689135/screenshots/12127102/4bbec7ec-9113-4555-bf3f-e42441a3698d.gif" />
                        <Card.Body>
                            <Card.Title>Watch Videos</Card.Title>
                            <Card.Text>
                                Watch your favorite music, tech and many other videos here to enjoy yourself.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className='bg-dark p-2 text-light shadow'>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/2e/52/9d/2e529de2dd02a8cfb7957e6d2b3adb23.gif" />
                        <Card.Body>
                            <Card.Title>Categorize Videos</Card.Title>
                            <Card.Text>
                                Create a playlist here and save videos in whatever category that you created.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className='p-5 container-fluid'>
                <Row className='align-items-center'>
                    <Col md={8}>
                        <h3>Simple and faster</h3>
                        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, obcaecati? Dicta exercitationem rem quidem quasi fugit ad deserunt, expedita nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium commodi ab, in exercitationem harum ipsa corrupti obcaecati at consequuntur ipsum.</p>
                        <h3 className='mt-4'>User Friendly</h3>
                        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, obcaecati? Dicta exercitationem rem quidem quasi fugit ad deserunt, expedita nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>

                    <Col md={4}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/b9eMGE7QtTk?si=eDk_l5xkVaQIeL6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Landing