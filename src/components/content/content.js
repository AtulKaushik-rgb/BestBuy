import React, { useState, useEffect } from "react";
import styles from "./content.module.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Cardlists from "../cardlists/cardlists";
import axios from "axios";
import {useHistory} from 'react-router'
import Pagination from "../../components/pagination/pagination"


const content = (props) => {

  let data = [];
  const [cardData, setCardData] = useState([]);
  let history = useHistory();

  const [currentPage,setCurrentPage] = useState(1);
  const [cardsPerPage,setCardsPerPage] = useState(12);

  let searchParam = null;

  if (history.location.search)
    searchParam = history.location.search.substring(3);


  useEffect(() => {

  //   let url = null;
  //   if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  //     url = process.env.REACT_APP_hostUrl;
  //     console.log('current url is',url)
  // } else {
  //     url = process.env.REACT_APP_prodUrl;
  //     console.log('current url is',url)
  // }
   const getData = async () => {
     console.log('url is',url);
      let url = `https://backend-poc.netlify.app/.netlify/functions/api/items/search?q=all`;

      if (searchParam)
        url = "https://bestbuy-shopping.netlify.app/items/search?q=" + searchParam;

    

      const contentData = await axios.get(url);
      data = [...contentData.data];
      setCardData(data);

    };

    getData();
  }, [props]);

  const indexOfLastCard = currentPage*cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard,indexOfLastCard);

  const paginate = (number) =>{
    setCurrentPage(number)
  };
  

  
  let display = <Pagination cardsPerPage={cardsPerPage} totalCards={cardData.length} paginate = {paginate} currentPage={currentPage}></Pagination>;
    
  if(cardData.length <= cardsPerPage && currentPage == 1)
  display = null;

  return (
    <div className={styles.content_containers}>
      <div className={styles.cardlist_containers}>
        <Cardlists data={currentCards} />
      </div>
      <div className={styles.pagination_container}>
           {display}
      </div>
      
    </div>
  );
};

export default content;
