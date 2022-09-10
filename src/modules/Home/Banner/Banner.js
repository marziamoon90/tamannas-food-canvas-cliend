import React from 'react'
import { Container } from 'react-bootstrap'
import banner from '../../../images/background/banner1.jpg'


const bannerBg = {
  background: `url(${`https://images.pexels.com/photos/3049426/pexels-photo-3049426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})`,
  // backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  height: '400px',
  width: "100%",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: 'rgba(220, 40, 40, 0.5)',
  backgroundBlendMode: 'darken, luminosity'
}
const Banner = () => {
  return (
    <div style={bannerBg} >
      <div className='me-3' >
        <h1 style={{ color: "#F3EEBB", }} className='text-end text-white'>welcome To </h1>
        <h1 className='text-end text-white'>Tamannas Food Canvas</h1>
      </div>
    </div>
  )
}

export default Banner