import React,{useEffect,useState} from 'react'
import Card from '../card/card'
import styles from './cardlists.module.css'
import {useSelector} from 'react-redux'

const cardlists = (props) => {

    const [item,setItem] = useState([]); 
    let cardItems = null;
    let items = [];
    cardItems = props.cardData;
    //console.log(cardItems);

    //setItem(cardItems);

     items = useSelector(state => state.items);
    // console.log(items)

    // console.log(items.map(dt=>dt.name));
    // console.log(Array.isArray(items));
    // useEffect(()=>{
    //   cardItems = props.cardData;
      
    // },['',cardItems])


    let itemsToRender;
    
    if(items)
    {
      itemsToRender = items.data.map(item => {
        return <Card key={item.id} cardData = {item}/>;
      });
    }


      console.log(itemsToRender);
   // }
    return (
        <div className={styles.lists}>
           {itemsToRender} 
        </div>
    )
}

export default cardlists
