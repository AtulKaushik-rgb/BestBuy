import React,{useState,useRef,useEffect} from "react";
import styles from "../header/header.module.css";
import "./header.module.css";
import {NavLink,Redirect,withRouter} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import Modal from '../modal/modal'
const header = (props) => {

  const cartItem = useSelector(state => state.cart);
  const [inputText,setInputText] = useState('');
  const [show,setShow] = useState(false);

  const dispatch = useDispatch();

  let cartItemCount = 0;

  if(cartItem)cartItemCount = cartItem.length;

  const inputChangeHandler = (e)=>{
    setInputText(e.target.value)
  }

  const handleClose = () =>{
    setShow(false)
  }
  const openDialog = () =>{
    setShow(true)
  }


  const addText = ()=>{
    
    // console.log(props);
    
    // setRedirect(true);
    
    return dispatch({type:'ADD_TEXT',payload:inputText});

  }

// const mounted = useRef();
// useEffect(() => {
//   if (!mounted.current) {
    
//     console.log('component mounted')
//     mounted.current = true;
//   } else {
//     console.log('component ')
//     return <Redirect
//                to={{
//                  pathname: "/search",
//                  state: { search:inputText }
//                  }}
//              />
//   }
// });
 
  // if(redirect)
  // return (<Redirect
  //           to={{
  //             pathname: "/search",
  //             state: { search:inputText }
  //             }}
  //         />) 




  // if(redirect)
  // return  (<Redirect
  //           to="/search"
  //         />);

  // const newMethod =()=>{
  //   console.log(props.methodCalled)
  //   console.log(props)
  // }
  

  return (
    <>
<div className={styles.nav_header}>
        <div className={styles.container}>
          <div className={styles.nav_container}>
            <div className={styles.logo_container}>
              <h1 className={styles.logo}>BestBuy</h1>
            </div>
  
            <div className={styles.search_div}>
              <input
                className={styles.search_input}
                type="text"
                name="input"
                value={inputText}
                onChange={inputChangeHandler}
              ></input>

              <p className={styles.icon}><i className="fas fa-search " onClick={()=>props.searchData(inputText)}></i></p>

            </div>
  
            <div className={styles.nav_ul}>
              <ul className={styles.nav_lists}>
                <li className={styles.nav_li}>
                  <NavLink activeClassName={styles.nav_active} to='/phones'>Phones</NavLink>
                </li>
                <li className={styles.nav_li}>
                  <NavLink activeClassName={styles.nav_active} to='/clothes'>Clothes</NavLink>
                </li>
                <li className={styles.nav_li}>
                  <NavLink activeClassName={styles.nav_active} to='/books'>Books</NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.badge}>
              <button onClick={()=>{setShow(true)}} type="button" className="btn btn-primary">
                Cart <span className={` ${cartItemCount?`badge badge-light`:``}`}>{cartItemCount?cartItemCount:''}</span>
              </button>
            </div>
          </div>
        </div>

        <Modal display={show} handleClose = {handleClose} cartItem = {cartItem}>

        </Modal>

      </div>
    </>
  );
};

export default header;
