import React,{useEffect} from "react";
import styles from "./phones.module.css";
import Sidebar from "../sidebar/sidebar";
import Content from "../content/content";
import { useLocation } from "react-router-dom";
import {useDispatch} from 'react-redux'

const phones = (props) => {
 
  let display = null;
  // const location = useLocation();
  // let currentPath = null;
  // let itemClicked = props.location.search.substring(3);
  // currentPath = location.pathname.substring(1);
  //let data = [];
  

  // useEffect(()=>{

  //   const getData = async () => {

  //   const contentData = await axios.get('http://localhost:3000/items/search?q=all');
  //  data = [...contentData.data];

  //  let newdata = data.filter(item=>item.title ==props.location.search.substring(3) )
    
  //  if(props.location.search)
  //  return dispatch({ type: "ADD_ITEMS", payload: newdata });
  //  else
  //  return dispatch({ type: "ADD_ITEMS", payload: data });
  
  //   }
  //   getData();

  //  },[props])




  display = (
    <>
      <div>
        <Content/>
      </div>
    </>
  );

  return <>{display}</>;
};

export default phones;
