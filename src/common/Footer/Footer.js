import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <>
      <div className='mt-5'>
        <Container>
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
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer