import React, { useState, useEffect } from "react";
import styles from "./content.module.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Cardlists from "../cardlists/cardlists";
import axios from "axios";

const content = (props) => {
  const dispatch = useDispatch();
  let itemData = useSelector((state) => state.items, shallowEqual);
  let booksData = useSelector((state) => state.books, shallowEqual);
  let clothesData = useSelector((state) => state.clothes, shallowEqual);
  let phonesData = useSelector((state) => state.phones, shallowEqual);
  let filterData = useSelector((state) => state.filters, shallowEqual);
  const [currentData, setCurrentData] = useState([]);
  let query = props.searchQuery ? props.searchQuery : "all";
  let data = [];

  useEffect(() => {
    if (
      !itemData ||
      !phonesData ||
      !booksData ||
      !clothesData ||
      props.searchQuery
    ) {
      if (filterData) {
        console.log("Filter data exists and setting it");
        setCurrentData(filterData);
      } else {
        console.log("not available anything");
        const getData = async () => {
          let url = null;
          if (props.loadedFrom) {
            url = `http://localhost:3000/items/${props.loadedFrom}`;
          } else if (props.searchQuery) {
            url = `http://localhost:3000/items/search?q=${query}`;
          } else {
            url = `http://localhost:3000/items/search?q=all`;
          }

          const contentData = await axios.get(url);

          console.log("query is " + props.loadedFrom);

          data = [...contentData.data];

          setCurrentData(data);

          if (props.loadedFrom == "books") {
            console.log("dispatching data in books");
            return dispatch({ type: "ADD_BOOKS", payload: data });
          }

          if (props.loadedFrom == "phones") {
            console.log("dispatching data in phones");
            return dispatch({ type: "ADD_PHONES", payload: data });
          }

          if (props.loadedFrom == "clothes") {
            console.log("dispatching data in clothes");
            return dispatch({ type: "ADD_CLOTHES", payload: data });
          }

          if (!props.loadedFrom) {
            console.log("none of 3 items existing ...dispatching in items");
            return dispatch({ type: "ADD_ITEMS", payload: data });
          }
        };
        getData();
      }
    } else {
      console.log("Some data is available from store");

      // if (filterData) {
      //   console.log("Filter data exists and setting it");
      //   setCurrentData(filterData);
      // }
      if (phonesData || booksData || clothesData) {
        console.log("individual data exists");

        if (phonesData) {
          console.log("phone is avil");
          setCurrentData(phonesData);
        } else if (!phonesData && clothesData) {
          console.log("clothes is avil");
          setCurrentData(clothesData);
        } else if (!phonesData && !clothesData && booksData) {
          console.log("books is avil");
          setCurrentData(booksData);
        }
      } else if (itemData) {
        console.log("item exists and setting it");
        setCurrentData(itemData);
      }
    }
  }, [props.searchQuery, filterData]);

  return (
    <div className={styles.content_containers}>
      <div className={styles.cardlist_containers}>
        <Cardlists key={currentData} data={currentData} />
      </div>
    </div>
  );
};

export default content;
