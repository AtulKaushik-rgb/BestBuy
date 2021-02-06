import React,{useEffect,useState} from "react";
import styles from "./body.module.css";
import Sidebar from "../sidebar/sidebar"
import Content from "../content/content"
import Home from '../../components/home/home1'
import Product from '../../UI/products/product'
import Header from '../header/header'

const body = (props) => {

  const [showContent, setShowContent] = useState(false);
  let display = null;

  useEffect(() => {

    if(props.from)
    setShowContent(true);    

  }, []); 

if(!showContent)
  {
     display = (
      <>
      <Home/>
      <Product/>
      <Product/>
      </>
    ) 
  }
  else
  {
    //if(props.loadedFrom!='Home')
    console.log(props);
    console.log('data actually reached here'+props.searchText)
    // let query = props.location.search;
    // console.log(query.substring(1));

    display=(
      <>
      {/* <Header/> */}
      <div className={styles.body_containers}>
      <Sidebar loadedFrom={props.from} />
      <Content loadedFrom={props.from} searchQuery = {props.searchText}/>
    </div>
    </>
    )
  }

  return (
       <>
      {display}
      </>
  );
};

export default body;
