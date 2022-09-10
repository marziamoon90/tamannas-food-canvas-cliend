import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import aboutAvatar from '../../images/icon/about-avatar.png'
import signature from '../../images/icon/signature.png'
import rabbit from '../../images/icon/rabbit-icon.png'
import aboutLeft from '../../images/background/gallery-10.jpg'
import rabbitBackground from '../../images/background/contact.jpg'

const bannerBg = {
  background: `url(${rabbitBackground})`,
  // backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  height: '240px',
  width: "240px",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: "absolute",
  left: "310px",
  top: "350px"
}

const About = () => {
  return (
    <Container className='mt-5'>
      <div style={bannerBg} className="text-white text-center d-flex align-items-center  justify-content-center flex-column">
        <div>
          <img height={"70px"} width={"70px"} src={rabbit} alt="" />
        </div>
        <h1 className='mt-3' style={{ fontSize: "60px" }}>+76</h1>
        <p className='text-uppercase'>Types of Cake</p>
      </div>
      <Row>
        <Col md={5}>
          <img width={"100%"} height={"100%"} src={aboutLeft} alt="" />
        </Col>
        <Col md={7} className="ps-5">
          <div className='text-secondary' style={{ lineHeight: "28px" }}>
            <p className='text-lighter text-secondary'>Healthy or organic sweets</p>
            <h1 className='text-dark mb-4' style={{ fontSize: "60px", fontFamily: "Chelsea Market" }}>Order your custom Easter-themed sweets</h1>
            <Row>
              <Col md={6}>
                <p>Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus lacinia.</p>
                <p>Suspendisse a cursus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non metus ipsum. Integer elementum enim urna.</p>
                <div className='d-flex align-items-center mt-5'>
                  <img width={"60px"} height={"60px"} src={aboutAvatar} alt="" />
                  <div className='ms-3'>
                    <h5 className='text-dark'>Hanna Smith</h5>
                    <p>Professional Pastry Chef</p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <p>Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis.</p>
                <p>Vulputate orci, et ultrices tellus rutrum mollis. Fusce a eros tellus. Ut vitae risus sit amet nisl blandit rutrum quis ac enim. Etiam congue at.</p>
                <img className='mt-5' width={"160px"} height={"40px"} src={signature} alt="" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container >
  )
}

export default About