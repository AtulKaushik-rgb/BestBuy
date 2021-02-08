import React,{useEffect,useState} from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/header";
import Body from "../components/body/body";
import Books from "../components/books/books";
import Clothes from "../components/clothes/clothes";
import Phones from "../components/phones/phones";
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
  const [status,setStatus] = useState(false);


  // const handlerLogo = ()=>{
  //   //setStatus(true);
  // }
  const handleCallback = (childData) =>{
    setSearchText(childData);
    setStatus(true);
    //dispatch({ type: "ADD_TEXT", payload: childData})



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

    //getData();



   //return dispatch({ type: "ADD_ITEMS", payload: data})
   
}

// useEffect(()=>{
// console.log(props)
// },[searchText])

    console.log(searchText+' is passed');
    console.log(' status is '+status);

    // const { name } = this.props;
    return (
      <>
      <Header searchData = {handleCallback}/>
      <Switch>
      <Route key='phones' exact  path='/' //status={status}
      render={(props) => <Body status={status}  searchText={searchText} {...props} />}
      ></Route>
      {/* <Route key='phones'  path='/search' 
      render={(props) => <Body status={status} from="home" searchText={searchText} {...props} />}
      ></Route> */}
      {/* <Route key='phones'  path='/phones'
      render={(props) => <Body  from="phones" {...props} />}></Route> */}
      {/* <Route key='books'  path='/books'
      render={(props) => <Body from="books" {...props} />}></Route> */}
      {/* <Route key='clothes' path='/clothes'
      render={(props) => <Body from="clothes" {...props} />}></Route> */}

      <Route  path='/books'component={Books}></Route>
      <Route  path='/clothes'component={Clothes}></Route>
      <Route  path='/phones'component={Phones}></Route>
      </Switch>
      <Footer/>
      </>
    );
  
}

export default App;
