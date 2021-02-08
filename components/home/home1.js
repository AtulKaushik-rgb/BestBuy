import React,{useState,useEffect} from "react";
import "react-bootstrap";
import { Carousel } from "react-bootstrap";
import styles from "./home.module.css";
import Card from '../card/card'
import Product from '../../UI/products/product'
import Items from '../../UI/products/items'

const home1 = () => {
  let deal1 = `Today's offer`;
  let deal2 = `Deals you can't ignore`;
  const [deal,setDeal] = useState({deal1:"", deal2:""})

  useEffect(()=>{
    setDeal({deal1:"Today's offer",deal2:"Deals you can't ignore"})
  },[])
  return (
    <>
      <div class={styles.homeStyle}>
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
      <Product deal={deal.deal1}/>
      <Items deal={deal.deal2}/>
    </>
  );
};

export default home1;
