import React,{useState} from "react";
import styles from "./card.module.css";
import { Card, Button } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux'
import { Toast } from "bootstrap";

const card = (props) => {

  let itemData = useSelector((state) => state.cartIds);

    const title = props.cardData.title;
    const url = props.cardData.imageUrl;
    const prices = props.cardData.prices;
    const stars = props.cardData.customer_rating;

    const [disabledButton,setDisabledButton] = useState(false);
    const dispatch = useDispatch();
    // if(itemData.includes(props.cardData.id))
    // {
    //   setDisabledButton(true);
    // }
    if(itemData && itemData.includes(props.cardData.id) && !disabledButton)
    {
      setDisabledButton(true);
    }

    const addToCardClickHandler = () =>{

      //setDisabledButton(true);

      let addedObject = {
        cardData:props.cardData,
        id:props.cardData.id
      }

      return dispatch({type:'ADD_TO_CART',payload:addedObject});
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
        <button id='cart_button' disabled = {disabledButton} onClick={addToCardClickHandler}>{disabledButton?'Added ✓':'Add to cart'}</button>
      </div>
    </div>
    </>
  );
};

export default card;
