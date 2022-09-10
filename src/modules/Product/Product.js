import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Product = ({ cake }) => {
  return (
    <Col md={4} className="p-0">
      <div className='d-flex align-items-center justify-content-center'>
        <Card style={{ width: '90%' }}>
          <Card.Img variant="top" height={"300px"} width={"300px"} src={cake?.img} />
          <Card.Body>
            <Card.Title>{cake?.name}</Card.Title>
            <Card.Text>
              {cake?.description?.slice(0, 100)}.....
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center justify-content-center'>
                <FontAwesomeIcon icon={faDollarSign} />
                <p className='m-0 fw-bold ms-1'>{cake?.price}</p>
              </div>
              <div className='bg-warning px-2 py-2 rounded-circle ' style={{ width: "35px ", height: "35px" }} >
                <FontAwesomeIcon className='fs-5' icon={faShoppingBag} />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Col>
  )
}

export default Product