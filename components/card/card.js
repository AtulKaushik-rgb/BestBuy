import React,{useState} from "react";
import styles from "./card.module.css";
import { Card, Button } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import { Toast } from "bootstrap";

const card = (props) => {

    const title = props.cardData.title;
    const url = props.cardData.imageUrl;
    const prices = props.cardData.prices;
    const stars = props.cardData.customer_rating;

    const [disabledButton,setDisabledButton] = useState(false);
    const dispatch = useDispatch()
    const addToCardClickHandler = () =>{
      setDisabledButton(true);
      return dispatch({type:'ADD_TO_CART',payload:props.cardData});
    }

    // const toastMessage = (
    //   <Toast >
    //       <Toast.Header>
    //         <strong className="mr-auto">BestBuy</strong>
    //         <small>11 mins ago</small>
    //       </Toast.Header>
    //       <Toast.Body>1 Item added to cart!</Toast.Body>
    //     </Toast>
    // )
    //"https://rukminim1.flixcart.com/image/495/594/kk5rgy80/t-shirt/r/3/4/xxl-tblhdful-d32-tripr-original-imafzkbskeagqyzf.jpeg"

  return (
    <>
    {/* {toastMessage} */}
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img
          className={styles.image}
          src={url}
        />
      </div>
      <div className={styles.body}>
        <h5>{title}</h5>
        <p className={styles.stars}>{stars}★</p>
        <h6>{prices}</h6>
        <button id='cart_button' disabled={disabledButton} onClick={addToCardClickHandler}>Add to cart</button>
      </div>
    </div>
    </>
  );
};

export default card;
