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

  return (
    <>
  
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img
          className={styles.image}
          src={url}
        />
      </div>
      <div className={styles.body}>
        <h5 style={{marginTop:'10px'}}>{title}</h5>
        <p styles={{marginLeft:'10px'}}className={styles.stars}>{stars}★</p>
        <h5>₹ {prices}</h5>
        <button id='cart_button' disabled={disabledButton} onClick={addToCardClickHandler}>{disabledButton?'Added ✓':'Add to cart'}</button>
      </div>
    </div>
    </>
  );
};

export default card;
