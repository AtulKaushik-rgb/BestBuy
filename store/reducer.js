import React from 'react'

const initialState = {
  items:[],
  books: [],
  phones: [],
  clothes: [],
  cart:[],
  search:[],
  filter:[],
  searchText:''
};

// const addData = (state, action) => {
//     return {...state, items: action.payload}
//   };

// const updateObject = (oldObject,newObject)=>{
//   return{
//     ...oldObject,
//     ...newObject
//   }
// }


const reducer = (state={initialState},action) => {
    switch (action.type) {
        case 'ADD_TEXT' :
          {
              console.log('text added is '+action.payload);
              return {...state,searchText:action.payload}
          }
          
        case 'ADD_ITEMS':
          {
            //console.log(state.items);
            console.log(action.payload)
            return {...state,items: action.payload}
          }
        // case 'ADD_SEARCH_ITEMS':
        //   return {...state, search:[action.payload]}

        case 'ADD_FILTERS':
          return {...state,filter:[action.payload]}

        case 'ADD_TO_CART':
          {
            if(state.cart)
            {
              return {...state, cart: [...state.cart, action.payload ]}
            }
            else
            {
              return {...state, cart: [action.payload]}
            }
          }

        default:
          {
            return state;
          }
          
    }
}

export default reducer;
