import React,{useEffect,useState} from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/header";
import Body from "../components/body/body";
import Books from "../components/books/books";
import Clothes from "../components/clothes/clothes";
import {Route,Switch} from 'react-router-dom'
import axios from 'axios';
import Footer from '../components/footer/footer'
import {useDispatch} from 'react-redux';


const App = (props)=> {

  let dispatch = useDispatch();
  const [searchText,setSearchText] = useState('');
  const [status,setStatus] = useState(false);

  const handleHomeClick = () =>{
    setStatus(!status);
  }

  const handleCallback = (childData) =>{
    setSearchText(childData);
    setStatus(true);
   let data = null;

    const getData = async () => {
      const contentData = await axios.get(
       `http://localhost:3000/items/search?q=${childData}`
      );
      if (contentData) data = contentData;
    };
   }
   return (
      <>
      <Header searchData = {handleCallback} setHomeStatus = {handleHomeClick}/>
      <Switch>
      <Route key='phones' exact  path='/' //status={status}
      render={(props) => <Body status={status}  searchText={searchText} {...props} />}
      ></Route>
    

      <Route exact path='/books'component={Books}></Route>
      <Route exact path='/clothes'component={Clothes}></Route>
      <Route exact path='/phones'render={(props) => <Books status={status}  searchText={searchText} {...props} />}></Route>
      </Switch>
      <Footer/>
      </>
    );
  
}

export default App;
