import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import useCakes from '../../Hooks/useCakes'
import Product from '../Product/Product'

const Products = () => {

  const [cakes, isLoading] = useCakes()

  console.log({ cakes })
  return (
    <div>
      <div>
        <p className='text-center text-lighter'>
          {isLoading && <Spinner animation="border" variant="secondary" />}
        </p>
        <div>
          <h1 className='text-center my-5 text-success'>Here All of your Favourite Cakes</h1>
          <Container>
            <Row className='g-5'>
              {
                cakes.map(cake => <Product
                  key={cake.id}
                  cake={cake}
                ></Product>)
              }
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Products