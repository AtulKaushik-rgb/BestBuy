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
import Footer from '../components/footer/footer'
import {useDispatch} from 'react-redux';


const App = (props)=> {

  let dispatch = useDispatch();
  const [searchText,setSearchText] = useState('');


  const handleCallback = (childData) =>{
    setSearchText(childData);
    dispatch({ type: "ADD_TEXT", payload: childData})


   let data = null;

    const getData = async () => {
      const contentData = await axios.get(
       `http://localhost:3000/items/search?q=${childData}`
      );
      if (contentData) data = contentData;
      //console.log('dispatching...')
      //dispatch({ type: "ADD_ITEMS", payload: data})
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
      <Header searchData ={handleCallback}/>
      <Switch>
      <Route key='phones'  path='/' 
      render={(props) => <Body from="home" searchText={searchText} {...props} />}
      ></Route>
      <Route key='phones'  path='/phones'
      render={(props) => <Body from="phones" {...props} />}></Route>
      <Route key='books'  path='/books'
      render={(props) => <Body from="books" {...props} />}></Route>
      <Route key='clothes' path='/clothes'
      render={(props) => <Body from="clothes" {...props} />}></Route>
      </Switch>
      <Footer/>
      </>
    );
  
}

export default App;
