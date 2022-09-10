import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import useCakes from '../../Hooks/useCakes'
import Product from '../Product/Product'

const Products = () => {

  const [cakes, isLoading] = useCakes();
  const [displayProducts, setDisplayProducts] = useState([]);

  const handleSearch = event => {
    const searchText = event.target.value;
    const matchedProducts = cakes.filter(cake => cake.name.toLowerCase().includes(searchText.toLowerCase()));
    console.log({ matchedProducts })
    setDisplayProducts(matchedProducts);
  }
  return (
    <div>
      <div>
        <p className='text-center text-lighter'>
          {isLoading && <Spinner animation="border" variant="secondary" />}
        </p>
        <div>
          <h1 className='text-center my-5 text-success'>Here All of your Favourite Cakes</h1>
          <div className='d-flex align-items-center justify-content-center'>
            <Form.Group className='mb-5' as={Col} md="6" controlId="validationCustom03">
              <Form.Control
                type="text"
                onChange={handleSearch}
                placeholder="Search your favourite cake" required />
              <button style={{ position: "relative", left: "535px", bottom: "37px", border: "0px", backgroundColor: "#E56F15", paddingTop: "6px", paddingBottom: "6px" }} className="px-4 rounded-end" type="submit">Search</button>
            </Form.Group>
          </div>
          {displayProducts?.length ? <Container>
            <Row className='g-5'>
              {
                displayProducts.map(cake => <Product
                  key={cake.id}
                  cake={cake}
                ></Product>)
              }
            </Row>
          </Container> :
            <Container>
              <Row className='g-5'>
                {
                  cakes.map(cake => <Product
                    key={cake.id}
                    cake={cake}
                  ></Product>)
                }
              </Row>
            </Container>}
        </div>
      </div>
    </div>
  )
}

export default Products