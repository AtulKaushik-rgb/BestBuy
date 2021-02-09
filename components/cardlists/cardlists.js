import React,{useEffect,useState} from 'react'
import Card from '../card/card'
import styles from './cardlists.module.css'
import {useSelector} from 'react-redux'

const cardlists = React.memo((props) => {

    const [item,setItem] = useState([]); 
    let cardItems = null;
    let items = [];
    cardItems = props.data;

    let itemsToRender;
    
      itemsToRender = cardItems.map(item => {
        return <Card key={item.id} cardData = {item}/>;
      });
    
    return (
        <div className={styles.lists}>
           {itemsToRender} 
        </div>
    )
})

export default cardlists
