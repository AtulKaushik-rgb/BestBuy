import React, { useState} from "react";
import styles from "../header/header.module.css";
import "./header.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../modal/modal";
import {useDispatch} from 'react-redux'
//import TranstionsModal from "../modal/TransitionsModal";
import {useHistory} from 'react-router';


const header = (props) => {
  const history = useHistory();
  const cartItem = useSelector((state) => state.cart);
  const [inputText, setInputText] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  let cartItemCount = 0;
  if (cartItem) cartItemCount = cartItem.length;

  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleRemove = (obj) =>{

    // let removedObj = {
    //   cardData:obj,
    // }

    return dispatch({type:'REMOVE_FROM_CART',payload:obj});
  }

  const addText = (e) => {
    e.preventDefault();
    
    if(inputText)
    setInputText('');


    // if(!props.status)
    props.setHomeStatus(true);

    if(history.pathname !== '/')
    history.push(inputText?'/search?q='+inputText:'/');

  };

  return (
    <>
      <div className={styles.nav_header}>
        <div className={styles.container}>
          <div className={styles.nav_container}>
            <div className={styles.logo_container}>
              <h1 className={styles.logo} onClick={()=>props.setHomeStatus()}>BestBuy</h1>
            </div>

            <div className={styles.search_div}>
              <form onSubmit = {addText}>
              <input
                className={styles.search_input}
                type="text"
                name="input"
                autoComplete='off'
                value={inputText}
                onChange={inputChangeHandler}
                placeholder='Search for products, brands and more..'
              ></input>
              </form>

              <p className={styles.icon}
              onClick={addText}>
                <i
                  className="fas fa-search"
                
                ></i>
              </p>
            </div>

            <div className={styles.nav_ul}>
              <ul className={styles.nav_lists}>
                <li className={styles.nav_li}>
                  <NavLink to="/">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.badge}>
              <button
                onClick={() => {
                  setShow(true);
                }}
                type="button"
                style={{color:'#fff',fontSize:'1.5rem',border:'none'}}
                className="btn"
              >
                <i className="fa fa-cart-arrow-down" style={{color:'#fff'}} aria-hidden="true"></i>{" "}
                <span
                style={{fontSize:'1rem',padding:'5px'}}
                  className={` ${cartItemCount ? `badge badge-light` : ``}`}
                >
                  {cartItemCount ? cartItemCount : ""}
                </span>
              </button>
            </div>
          </div>
        </div>

        <Modal
          display={show}
          handleClose={handleClose}
          handleRemove = {handleRemove}
          cartItem={cartItem}
        ></Modal>
      </div>
    </>
  );
};

export default header;
