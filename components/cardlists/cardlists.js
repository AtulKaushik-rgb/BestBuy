import React from 'react'
import Card from '../card/card'
import styles from './cardlists.module.css'
import {useSelector} from 'react-redux'

const cardlists = (props) => {

    let cardItems = null;
    let items = [];
    cardItems = props.cardData;
    items = useSelector(state => state.items);

    // console.log(items.map(dt=>dt.name));
    // console.log(Array.isArray(items));

    let itemsToRender;
    if (items) {
      itemsToRender = cardItems.map(item => {
        return <Card key={item.id} cardData = {item}/>;
      });
    }
    return (
        <div className={styles.lists}>
           {itemsToRender} 
        </div>
    )
}

export default cardlists
