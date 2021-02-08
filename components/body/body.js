import React,{useEffect,useState} from "react";
import styles from "./body.module.css";
import Sidebar from "../sidebar/sidebar"
import Content from "../content/content"
import Home from '../../components/home/home1'
import Product from '../../UI/products/product'
import Header from '../header/header'
import {useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'

const body = (props) => {

  const [showContent, setShowContent] = useState(false);
  const dispatch = useDispatch();
  let display = null;
  let prodData1 = `Today's deal`;
  let prodData2 = `New Offers`;

  const location = useLocation();
  console.log(location.pathname);
  let currentPath = null;

  currentPath = location.pathname.substring(1);

  if(!currentPath)
  {
    console.log('pathname is null');
    console.log('query is'+props.searchText)
  }


  // useEffect(() => {
  //   console.log('inside body '+props.from);

 
  //   //console.log('FILTER'+'_'+currentPath.toUpperCase()) 

  //   // if(currentPath)
  //   // dispatch({type:'FILTER'+'_'+currentPath.toUpperCase(),payload:currentPath})
    
    
    

  // },[]); 

  //console.log('FILTER'+'_'+currentPath.toUpperCase()); 

  // if(currentPath)
  // dispatch({type:'FILTER'+'_'+currentPath.toUpperCase(),payload:currentPath})
  
if(props.status)
{
  display=
  <>
  <div className={styles.body_containers}>
  <Sidebar loadedFrom={currentPath} searchQuery = {props.searchText}/>
  <Content loadedFrom={currentPath} searchQuery = {props.searchText}/>
</div>
</>
}
else
{
  display = 
  <>
  <Home/>
  </>

}


// if(!currentPath || !props.status)
//   {
//     console.log('inside condition with '+props.status+'and path ='+currentPath)
//      display = 
//       <>
//       <Home/>
//       <Product/>
//       <Product/>
//       </>
//   }
//   else
//   {
//     display=
//       <>
//       <div className={styles.body_containers}>
//       <Sidebar loadedFrom={currentPath} searchQuery = {props.searchText}/>
//       <Content loadedFrom={currentPath} searchQuery = {props.searchText}/>
//     </div>
//     </>
    


//   }


//   else
//   {
    //if(props.loadedFrom!='Home')
    // console.log('should  render')
    // console.log(props);
    // console.log('data actually reached here'+props.searchText)
    // let query = props.location.search;
    // console.log(query.substring(1));

    
  //}
  return (
    <>
      {display}
</>



  );



};

export default body;
