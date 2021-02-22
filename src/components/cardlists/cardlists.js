import React,{useEffect,useState} from 'react'
import Card from '../card/card'
import styles from './cardlists.module.css'
import axios from 'axios';
import {useSelector} from 'react-redux'

const cardlists = (props) => {

  const [cardItems,setCardItems] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [perPage,setPerPage] = useState(16);

  // useEffect(()=>{

  //   const fetchCards = async()=>{

  //  // setLoading(true);
  //     const res= await axios.get('http://localhost:3000/items/search?q=all');
  //     setCardItems(res.data);
  //   //  setL
  //   } 

  //   fetchCards();

  // },[]);

  //let itemData = useSelector((state) => state.items);

    // const [item,setItem] = useState([]); 
    // let cardItems = null;
    // let items = [];
    // cardItems = props.data;

    let itemsToRender;
    
    // if(itemData)
    // {
      itemsToRender = props.data.map(item => {
        return <Card key={item.id} cardData = {item}/>;
      });

   // }
    // else
    // itemsToRender = <h1>Sorry no data found against your request</h1>

    
    return (
        <div className={styles.lists}>
           {itemsToRender} 
        </div>
    )
}

export default cardlists
