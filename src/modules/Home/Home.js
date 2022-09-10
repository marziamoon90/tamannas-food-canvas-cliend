/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import chef1 from '../../images/icon/chef1.png'
import divider from '../../images/icon/divider-01.png'
import threeImages from '../../images/product/3-images.jpg'
import Banner from './Banner/Banner'
import pic1 from '../../images/background/section2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const section2Cover = {
  background: `url(${pic1})`,
  backgroundSize: 'cover',
  height: '100%',
  width: "100%",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: '#a3a3a3',
  backgroundBlendMode: 'darken, luminosity'
}
const background = {
  background: `url(${`http://www.nicdarkthemes.com/themes/bakery/wp/demo/easter/wp-content/uploads/sites/11/2021/01/price-2.jpg`})`,
  backgroundSize: 'cover',
  height: '200px',
  width: "100%",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}
const background2 = {
  background: `url(${`http://www.nicdarkthemes.com/themes/bakery/wp/demo/easter/wp-content/uploads/sites/11/2021/01/price-1.jpg`})`,
  backgroundSize: 'cover',
  height: '200px',
  width: "100%",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}


const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <Container className='mt-5'>
        <Row>
          <Col md={6}>
            <div className='d-flex align-items-center justify-content-center flex-column'>
              <div>
                <img src={divider} width="300px" height={"60px"} />
              </div>
              <h1 style={{ fontSize: "60px" }} className="text-center my-4">Christmas Sweets Homemade</h1>
              <p className='text-center'>Treat someone special this Christmas with these melt-in-the-mouth chocolate truffles with a boozy kick. Make our decadent dark chocolate truffles, or a white chocolate and almond version.Treat loved ones with our easy yet impressive Baileys tiffin an ideal gift for your foodie friends. </p>
              <div className='d-flex align-items-center mt-4'>
                <img height={"60px"} width={"60px"} src={chef1} alt="" />
                <div className='ms-4'>
                  <h5>Hanna Smith</h5>
                  <p>Pastry Chef</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className='d-felx align-items-center justify-conten-center'>
              <img width={"87%"} height={"87%"} src={threeImages} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className='mt-5 mx-0' style={section2Cover}>
        <Row className='g-0'>
          <Col md={8} >

            <div className='d-flex align-items-center' >

              {/* card 1  */}

              <Container className='p-0 my-5' style={{ borderRadius: "30px", height: "500px", width: "340px", backgroundColor: "white", overflow: "hidden", }}>
                <div style={background} className="text-white">
                  <div className="text-white text-center d-flex align-items-center  justify-content-center flex-column">
                    <p className='mt-4'>Dark Chocolate</p>
                    <h1 style={{ fontSize: "60px" }}>$ 79.99</h1>
                    <p>CUSTOM EGG</p>
                  </div>
                </div>
                <div style={{ width: "350px", backgroundColor: "white", lineHeight: "38px" }} className="p-4 text-center">
                  <div className='d-flex align-items-center text-secondary' >
                    <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faCheck} />
                    <p className='m-0 ms-3' style={{ fontSize: "14px" }}>Donec eu volutpat mi, non turpis</p>
                  </div>
                  <div className='d-flex align-items-center text-secondary' >
                    <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faCheck} />
                    <p className='m-0 ms-3' style={{ fontSize: "14px" }}>Donec a ligula lacinia, consect</p>
                  </div>
                  <div className='d-flex align-items-center text-secondary' >
                    <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faCheck} />
                    <p className='m-0 ms-3' style={{ fontSize: "14px" }}>Sed vitae tristique nisl ultrices</p>
                  </div>
                  <div className='d-flex align-items-center text-secondary' >
                    <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faCheck} />
                    <p className='m-0 ms-3' style={{ fontSize: "14px" }}>Praesent ultrices urna purus</p>
                  </div>
                  <div className='d-flex align-items-center text-secondary' >
                    <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faCheck} />
                    <p className='m-0 ms-3' style={{ fontSize: "14px" }}>Nunc scelerisque velit a pulvinar.</p>
                  </div>
                  <Button style={{ backgroundColor: "#E7B4BD", paddingTop: "6px", paddingBottom: "6px" }} className='rounded-pill px-5 fw-bold border-0 mt-4'>More</Button>
                </div>
              </Container>

              {/* card 2 */}

              <Container className='p-0 my-5' style={{
                borderRadius: "30px", height: "460px", width: "340px", backgroundColor: "white", overflow: "hidden",
                position: "relative",
                right: "120px",
              }}>
                <div style={background2} className="text-white">
                  <div className="text-white text-center d-flex align-items-center  justify-content-center flex-column">
                    <p className='mt-4'>Milk Chocolate</p>
                    <h1 style={{ fontSize: "60px" }}>$ 19.99</h1>
                    <p>NORMAL EGG</p>
                  </div>
                </div>
                <div style={{ width: "350px", backgroundColor: "white", lineHeight: "38px" }} className="p-4 text-center">
                  <div className='d-flex align-items-center text-secondary' >
                    <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faCheck} />
                    <p className='m-0 ms-3' style={{ fontSize: "14px" }}>   Praesent ultrices urna purus</p>
                  </div>
                  <div className='d-flex align-items-center text-secondary' >
                    <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faCheck} />
                    <p className='m-0 ms-3' style={{ fontSize: "14px" }}>Sed vitae tristique nisl ultrices</p>
                  </div>
                  <div className='d-flex align-items-center text-secondary' >
                    <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faCheck} />
                    <p className='m-0 ms-3' style={{ fontSize: "14px" }}> Donec a ligula lacinia, consect</p>
                  </div>
                  <div className='d-flex align-items-center text-secondary' >
                    <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faCheck} />
                    <p className='m-0 ms-3' style={{ fontSize: "14px" }}>Nunc scelerisque velit a pulvinar.</p>
                  </div>
                  <Button style={{ backgroundColor: "#9EDBB5", paddingTop: "6px", paddingBottom: "6px" }} className='rounded-pill px-5 fw-bold border-0 mt-4'>More</Button>
                </div>
              </Container>
            </div>
          </Col>

          <Col md={4}>
            <Container className='d-flex align-items-center justify-content-center ' style={{ position: "relative", top: "100px" }}>
              <div className="text-white">
                <p className='mt-4'>You decide the surprise to insert</p>
                <h1 style={{ fontSize: "60px" }}>Personalize Easter Eggs !</h1>
                <p>This sweet little egg would be a perfect gift for a baby's first Easter! Or you can get one for each child in the family and add them to a nest or Easter basket. You can include the name or monogram (as shown in the last image) and birth year on the egg.</p>
                <Button style={{ backgroundColor: "#639DA3", paddingTop: "6px", paddingBottom: "6px" }} className='rounded-pill px-5 fw-bold border-0 mt-4'>Details</Button>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </div >
  )
}

export default Home