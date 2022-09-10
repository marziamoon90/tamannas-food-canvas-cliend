import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import banner from '../../images/background/banner.png'


const bannerBg = {
  background: `url(${banner})`,
  // backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  height: '400px',
  width: "100%",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: 'rgba(20, 10, 20, 0.8)',
  backgroundBlendMode: 'darken, luminosity'
}

const Footer = () => {
  return (
    <>
      <div style={bannerBg} className='py-5 mt-5 text-white'>
        <Container className='mt-5'>
          <Row>
            <Col md={3}>
              <div>
                <h4 className='fw-bold'>ABOUT US</h4>
                <p>Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam efficitur dui vitae sem rutrum, id pretium nunc varius. Vestibulum hendrerit malesuada .</p>
                <div className='fs-3'>
                  <FontAwesomeIcon className='me-2' icon={faFacebook} />
                  <FontAwesomeIcon className='me-2' icon={faTwitter} />
                  <FontAwesomeIcon className='me-2' icon={faYoutube} />
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <h4 className='fw-bold'>ALL CONTACTS</h4>
                <div className='d-flex align-items-center'>
                  <FontAwesomeIcon icon={faCheck} />
                  <p className='m-0 ms-3'>111 8th Ave, New York U.S.A.</p>
                </div>
                <div className='d-flex align-items-center'>
                  <FontAwesomeIcon icon={faCheck} />
                  <p className='m-0 ms-3'>Office +1-202-555-0153</p>
                </div>
                <div className='d-flex align-items-center'>
                  <FontAwesomeIcon icon={faCheck} />
                  <p className='m-0 ms-3'>info@bakery.com</p>
                </div>
                <div className='d-flex align-items-center'>
                  <FontAwesomeIcon icon={faCheck} />
                  <p className='m-0 ms-3'>08 am - 06 pm Sunday closed</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <h4 className='fw-bold'>SUBSCRIBE</h4>
                <p>Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam efficitur dui vitae sem</p>
                <Form.Control className='rounded-0' type="text" placeholder="Insert your mail" />
                <Button className='px-4 mt-3 border-0 rounded-0' variant="success">Send</Button>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <h4 className='fw-bold'>GALLERY</h4>
                <Row className="g-5">
                  <Col md={3}> <img width={"50px"} height={"50px"} src="https://i.ibb.co/S5ZVLK1/gallery3.jpg" alt="" /></Col>
                  <Col md={3}><img width={"50px"} height={"50px"} src="https://i.ibb.co/mtTTMQD/gallery4.jpg" alt="" /> </Col>
                  <Col md={3}><img width={"50px"} height={"50px"} src=" https://i.ibb.co/XLcq707/gallery7.jpg" alt="" /></Col>
                  <Col md={3}><img width={"50px"} height={"50px"} src="https://i.ibb.co/dBYhhmg/gallery8.jpg" alt="" /></Col>
                </Row>
                <Row className="g-5 mt-1">
                  <Col md={3}><img width={"50px"} height={"50px"} src="https://i.ibb.co/37k5thR/gallery1.jpg" alt="" /></Col>
                  <Col md={3}> <img width={"50px"} height={"50px"} src="https://i.ibb.co/Y0TsVpL/gallery2.jpg" alt="" /></Col>
                  <Col md={3}> <img width={"50px"} height={"50px"} src="https://i.ibb.co/kybQGpn/gettyimages-1182683214-612x612.jpg" alt="" /></Col>
                  <Col md={3}>
                    <img width={"50px"} height={"50px"} src="https://i.ibb.co/MfP1hR1/gallery6.jpg" alt="" /></Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer