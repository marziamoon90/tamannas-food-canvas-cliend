/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Banner from './Banner/Banner'
import Header from '../../common/Header/Header'
import { Card, Col, Container, Row } from 'react-bootstrap'
import divider from '../../images/icon/divider-01.png'
import chef1 from '../../images/icon/chef1.png'
import threeImages from '../../images/product/3-images.jpg'

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
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
              <img width={"90%"} height={"90%"} src={threeImages} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home