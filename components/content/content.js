import React,{useState,useEffect} from 'react'
import styles from "./content.module.css";
import { useDispatch,useSelector} from 'react-redux';

import Cardlists from "../cardlists/cardlists"
import axios from 'axios'

const content = (props) => {

    const [searchQueryText,setSearchQueryText] = useEffect('');
    const dispatch = useDispatch();
    let searchText = useSelector(state=>state.searchText);


    
    // console.log('inside content');
    console.log(props);
     let target = props.loadedFrom;
     let query = props.searchQuery;

    //  if(target=='home')
    //  target='clothes'
    // console.log('loaded from '+target);
    // console.log('props are');
    console.log(props)
    console.log('searchText should be'+query);
    
    if(!query)
      query='refresh'


    //console.log(props.location.queryParams)

 
    

    //console.log('target is '+target+'type is'+typeof(target))

    //  if(target !=='search' && searchText)
    //     searchText='';

    //   console.log(searchText);

      // if(target =='search' && !searchText)
      // return;
    // if(props.loadedFrom === 'search')
    // target = 'books';
    //let queryParams = `?text=${searchText}`
    // let queryParams = `?text=tshirt`;
    // let searchQuery = `http://localhost:3000/items/${target}${queryParams}`


    let qt = `http://localhost:3000/items/${target}`;

    
    // if(!props.loadedFrom)
    // {
    //   console.log('Here it is loaded from search so it should get shirt');
    //   p = `http://localhost:3000/items/search?q=tshirt`
    // }
     if(query!='refresh')
     {
      qt = `http://localhost:3000/items/search?q=${query}`
     }
     else
     {
      qt = `http://localhost:3000/items/search?q=all`
     }
     
     setSearchQueryText(query);

     console.log('it should go for here'+qt)

    const [itemData,setItemData] = useState([]);
     let data = null;

     useEffect(() => {

      console.log('inside use effect')
       const getData = async () => {
         const contentData = await axios.get(
          qt
         );
         if (contentData) data = contentData;

        //  if(query)
        //  console.log(data.data)

         console.log('setting data in set item data');
         console.log(data.data)
         setItemData(data.data);
         //console.log('dispatching...')
         dispatch({ type: "ADD_ITEMS", payload: data.data})
       };

       if (props.loadedFrom ){
        getData();
        // console.log('will dispatch from here')
        // console.log(itemData)
        // dispatch({ type: "ADD_ITEMS", payload: itemData})
       } 
     }, [searchQueryText]);

    return (
        <div className={styles.content_containers}>
            <div className={styles.cardlist_containers}>
            <Cardlists cardData = {itemData}/>
            </div>
        </div>
    )
}

export default content
