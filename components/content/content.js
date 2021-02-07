import React,{useState,useEffect} from 'react'
import styles from "./content.module.css";
import { useDispatch,useSelector,shallowEqual} from 'react-redux';
import Cardlists from "../cardlists/cardlists"
import axios from 'axios'

const content = (props) => {

    //const [searchQueryText,setSearchQueryText] = useEffect('') searchQuery
    const dispatch = useDispatch();
    //let searchText = useSelector(state=>state.searchText);
   // let itemData = useSelector(state => state.items,shallowEqual);
    //let filterData = useSelector(state => state.filters,shallowEqual);
   // const cartItem = useSelector(state => state.cart);
    let searched = useSelector(state => state.searchText);
    const [currentData,setCurrentData] = useState([]);
    const [newData,setNewData] = useState([]);
    let value = 0;

    
    //console.log(datat.items);
    //props.searchQuery
    if(searched)
    console.log('search exists');
    else
    console.log('search not exists');

    // if(itemData)
    // console.log('item exists');
    // else
    // console.log('item not exists');
    // // itemData?'item exists':'item doesnt exists'

    

    //let data = null;
    let query = props.searchQuery?props.searchQuery:'all';

    

    // console.log(itemData);
    // console.log(searched);


    console.log(query);

    // searched)
    // query
    let data = [];
    useEffect(()=>{

      console.log('useEffect called');
      const getData = async () => {

        let url = null;
        if(props.loadedFrom)
        {
          url = `http://localhost:3000/items/${props.loadedFrom}`;
        }
        else if(props.searchQuery)
        {
          url =`http://localhost:3000/items/search?q=${query}`;
        }
        else
        {
          url =`http://localhost:3000/items/search?q=all`;
        }
             const contentData = await axios.get(
              url
             );
             if (contentData)
              data = contentData;
            console.log('data value is');
              console.log(contentData.data);
            console.log('after adding is');
             data = [...contentData.data];
             setCurrentData(data);
             //setNewData(data);
             //console.log('dispatching...')
             //dispatch({ type: "ADD_ITEMS", payload: data.data})
            //  if(query=='refresh')
            //  dispatch({ type: "ADD_SEARCH_ITEMS", payload: data.data})
           };
           getData();


    },[])

    // if(!itemData)
    // {
    //   const getData = async () => {

    //     let url = null;
    //     if(props.loadedFrom)
    //     {
    //       url = `http://localhost:3000/items/${props.loadedFrom}`;
    //     }
    //     else if(props.searchQuery)
    //     {
    //       url =`http://localhost:3000/items/search?q=${query}`;
    //     }
    //     else
    //     {
    //       url =`http://localhost:3000/items/search?q=all`;
    //     }
    //          const contentData = await axios.get(
    //           url
    //          );
    //          if (contentData)
    //           data = contentData;
    //         console.log('data value is');
    //           console.log(contentData.data);
    //         console.log('after adding is');
    //          data = [...contentData.data];
    //          //setCurrentData(data)
    //          //console.log('dispatching...')
    //          //dispatch({ type: "ADD_ITEMS", payload: data.data})
    //         //  if(query=='refresh')
    //         //  dispatch({ type: "ADD_SEARCH_ITEMS", payload: data.data})
    //        };
    //        getData();

    // }

    

    // useEffect(()=>{
      // if(props.loadedFrom)
      // {
      //   const getData = async () => {
      //          const contentData = await axios.get(
      //           `http://localhost:3000/items/${props.loadedFrom}`
      //          );
      //          if (contentData) data = contentData;
      //          console.log(contentData.data);
      //          data = [...contentData.data];
      //          console.log(data);
      //          value=1;
  
      //          //setCurrentData(contentData.data);
      //          //console.log('dispatching...')
      //          //dispatch({ type: "ADD_ITEMS", payload: data.data})
      //         //  if(query=='refresh')
      //         //  dispatch({ type: "ADD_SEARCH_ITEMS", payload: data.data})
      //        };
      //        getData();
      // }
    // },[])



    // if(props.loadedFrom)
    // {
    //   const getData = async () => {
    //          const contentData = await axios.get(
    //           `http://localhost:3000/items/${props.loadedFrom}`
    //          );
    //          if (contentData) data = contentData;
    //          console.log(contentData.data);
    //          data = [...contentData.data];
    //          console.log(data);

    //          //setCurrentData(contentData.data);
    //          //console.log('dispatching...')
    //          //dispatch({ type: "ADD_ITEMS", payload: data.data})
    //         //  if(query=='refresh')
    //         //  dispatch({ type: "ADD_SEARCH_ITEMS", payload: data.data})
    //        };
    //        getData();

    // }

    // if(!itemData)
    // {


    // }
    //let searchData = useSelector(state=>state.search);

    // console.log('inside content');
    // console.log(props);
    //  let target = props.loadedFrom;
    //  let query = props.searchQuery;

    //  if(target=='home')
    //  target='clothes'
    // console.log('loaded from '+target);
    // console.log('props are');
    // console.log(props)
    // console.log('searchText should be'+query);
    
    // if(!query)
    //   query='refresh'


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


    // let qt = `http://localhost:3000/items/${target}`;

    
    // if(!props.loadedFrom)
    // {
    //   console.log('Here it is loaded from search so it should get shirt');
    //   p = `http://localhost:3000/items/search?q=tshirt`
    // }
    //  if(query!='refresh')
    //  {
    //   qt = `http://localhost:3000/items/search?q=${query}`
    //  }
    //  else
    //  {
    //   qt = `http://localhost:3000/items/search?q=all`
    //  }
     

    //  console.log('it should go for here'+qt)

    //const [itemData,setItemData] = useState([]);
    // let data = null;

    //  useEffect(() => {

    //   console.log('inside use effect')
    //    const getData = async () => {
    //      const contentData = await axios.get(
    //       qt
    //      );
    //      if (contentData) data = contentData;

    //     //  if(query)
    //     //  console.log(data.data)

    //      console.log('setting data in set item data');
    //      console.log(data.data)
    //      setItemData(data.data);
    //      //console.log('dispatching...')
    //      dispatch({ type: "ADD_ITEMS", payload: data.data})
    //     //  if(query=='refresh')
    //     //  dispatch({ type: "ADD_SEARCH_ITEMS", payload: data.data})
    //    };

    //    if (props.loadedFrom ){
    //     getData();
    //     // console.log('will dispatch from here')
    //     // console.log(itemData)
    //     // dispatch({ type: "ADD_ITEMS", payload: itemData})
    //    } 
    //  }, [query]);

    //  let display = null;
    //  if(searchData)
    //  display = (
    //   <Cardlists cardData = {searchData?searchData:prevData} query={query}/>
    //  )
    let display = null;
    //console.log(itemData);

    // if(filterData)
    // {
    //   console.log('yayyy through filter data')
    //   display = (
    //     <Cardlists cardData = {itemData} />
    //   )
    // }
  //  else if(itemData)
  //   {
  //     console.log('yayyy through item data')
  //     display = (
  //       <Cardlists cardData = {itemData} />
  //     )
  //   }
    //else{
      
      console.log('inisde last option');
      console.log(currentData);
      display = (<Cardlists key={currentData} data = {currentData}/>)
      
   // }
    
    return (
        <div className={styles.content_containers}>
            <div className={styles.cardlist_containers}>
            {display}
            </div>
        </div>
    )
}

export default content
