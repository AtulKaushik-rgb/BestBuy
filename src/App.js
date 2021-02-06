import React,{useEffect,useState} from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/header";
import Body from "../components/body/body";
import {Route,Switch} from 'react-router-dom'
import Modal from '../components/modal/modal'
import Home from '../components/home/home1'
import Product from '../UI/products/product'
import axios from 'axios';
import {useDispatch} from 'react-redux';


const App = (props)=> {

  let dispatch = useDispatch();
  const [searchText,setSearchText] = useState('');
  //let data = null;
  //let queryText = `http://localhost:3000/items/search?q=${searchText}`;

  // useEffect(()=>{
  // console.log('called every time searchText is updated');
  
  // const getData = async () => {

  //   console.log('inside get data with searchtext'+searchText)

  //   const contentData = await axios.get(
  //    queryText
  //   );
  //   if (contentData) data = contentData;
  //   }
    
  //   if(searchText)
  //   getData();


  //   console.log(data);
  // },[searchText])

  const handleCallback = (childData) =>{
    setSearchText(childData);
    dispatch({ type: "ADD_TEXT", payload: childData})


   let data = null;
    // const getData = async () => {

    // //console.log('inside get data with searchtext'+childData);
    // let queryText = `http://localhost:3000/items/search?q=${childData}`;

    // console.log(queryText)
    // const contentData = await axios.get(
    //  queryText
    // );

    //       const getData = async () => {
    //          const contentData = await axios.get(
    //           `http://localhost:3000/items/search?q=all`
    //          );
    //          if (contentData) data = contentData;
    //          //console.log('dispatching...')
    //          dispatch({ type: "ADD_ITEMS", payload: data})
    //         //  if(query=='refresh')
    //         //  dispatch({ type: "ADD_SEARCH_ITEMS", payload: data.data})
    //        };
    
    //        getData();


    // console.log(contentData)

    // if(contentData)
    // data = contentData;

    // console.log(data)

    // }
    // if(childData)
    // getData();
    const getData = async () => {
      const contentData = await axios.get(
       `http://localhost:3000/items/search?q=${childData}`
      );
      if (contentData) data = contentData;
      //console.log('dispatching...')
      dispatch({ type: "ADD_ITEMS", payload: data})
     //  if(query=='refresh')
     //  dispatch({ type: "ADD_SEARCH_ITEMS", payload: data.data})
    };

    getData();



   return dispatch({ type: "ADD_ITEMS", payload: data})
   
}

// useEffect(()=>{
// console.log(props)
// },[searchText])


    // const { name } = this.props;
    return (
      <>
      {/* <Modal>Hello</Modal> */}
      {/* <Modal/> */}
      
      {/* <Modal show={true}>Hello</Modal> */}
      {/* <Home/>
      <Product/>
      <Product/> */}
      {/* <Modal  handleClose={false} show={true}>Hello<Modal/> */}
      <Header searchData ={handleCallback}/>
      <Switch>
      {/*  */}
      
      {/* <Route exact path='/' component={Body}></Route> */}
      <Route key='phones'  path='/' 
      render={(props) => <Body from="home" searchText={searchText} {...props} />}
      ></Route>
      {/* <Route key='phones'  path='/search' 
      render={(props) => <Body from="search" {...props} />}
      ></Route> */}
      <Route key='phones'  path='/phones'
      render={(props) => <Body from="phones" {...props} />}></Route>
      <Route key='books'  path='/books'
      render={(props) => <Body from="books" {...props} />}></Route>
      <Route key='clothes' path='/clothes'
      render={(props) => <Body from="clothes" {...props} />}></Route>
      </Switch>
      </>
    );
  
}

export default App;
