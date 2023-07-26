import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';


function HeavyBanner(){


    return(
      <Row>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/vector-gratis/banner-amarillo-venta-viernes-negro-espacio-texto_1017-28046.jpg?w=1800&t=st=1689529497~exp=1689530097~hmac=3a47c426a538427fc969aa2b9ce576098619ea3d380c17f39aeb7442596e59d1"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/vector-gratis/banner-amarillo-venta-viernes-negro-espacio-texto_1017-28046.jpg?w=1800&t=st=1689529497~exp=1689530097~hmac=3a47c426a538427fc969aa2b9ce576098619ea3d380c17f39aeb7442596e59d1"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/vector-gratis/banner-amarillo-venta-viernes-negro-espacio-texto_1017-28046.jpg?w=1800&t=st=1689529497~exp=1689530097~hmac=3a47c426a538427fc969aa2b9ce576098619ea3d380c17f39aeb7442596e59d1"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Row>
    )
}


export default HeavyBanner;