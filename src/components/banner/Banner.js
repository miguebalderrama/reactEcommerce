import React from 'react'
import {  Carousel} from 'react-bootstrap'


function Banner() {
    return (          
        
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.fravega.com/f300/004f1aaa0069f554d93a8dda37e38f53.jpg.webp"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.fravega.com/f300/e3ccceb858bdce612ba6602053a62d38.png.webp"
            alt="Second slide"
          />     
          
        </Carousel.Item>
       
      </Carousel>
    )
}

export default Banner
