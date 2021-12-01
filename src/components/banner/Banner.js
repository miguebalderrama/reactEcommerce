import React from 'react'
import {  Carousel} from 'react-bootstrap'


function Banner() {
    return (          
        
        <Carousel style={{marginBottom:"30px"}}>
            <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.tiendamia.com/d6432f78e5db3d20ebf61547a51e5cdd.png"
            alt="Second slide"
          />     
          
        </Carousel.Item>
             <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.tiendamia.com/48b44c89441ed8e23b668ecf48f9502a.png"
            alt="Second slide"
          />     
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.tiendamia.com/57f268e88946a83f48e6e37cefbc55fe.png"
            alt="First slide"
          />
          
        </Carousel.Item>
        
       
       
      </Carousel>
    )
}

export default Banner
