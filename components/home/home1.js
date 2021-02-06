import React from "react";
import "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "./home.module.css";
import Card from '../card/card'

const home1 = () => {
  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://rukminim1.flixcart.com/flap/1688/280/image/019f863893204a20.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://rukminim1.flixcart.com/flap/1688/280/image/5a74839f3d246d12.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel_item" interval={1000}>
            <img
              className="d-block w-100"
              src="https://rukminim1.flixcart.com/flap/1688/280/image/7defc11b2496ca52.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default home1;
