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

        // case 'FILTER_BOOKS':
        //   {
        //     console.log('inside books')
        //     return {...state,items:items.filter(item=>item.type == 401)}
        //   }

        //   case 'FILTER_BOOKS':
        //     {
        //       console.log('inside clothes')
        //       return {...state,items:items.filter(item=>item.type == 400)}
        //     }
          
            case 'FILTER_PHONES':
          {
                console.log('inside phones')
                console.log(state.items)
                let abc = state.items.filter(item=>item.type == 402);
                console.log(abc);
                return {...state,items:abc}// state.items.filter(item=>item.type == '402')}
          }
          case 'FILTER_CLOTHES': 
          {
            console.log('inside clothes')
            console.log(state.items)
            let abc = state.items.filter(item=>item.type == 400);
            console.log(abc);
            return {...state,items:abc}// state.items.filter(item=>item.type == '402')}
          }
           // return {...state, items: state.items.data.filter(item=>item.type == '400')}

          case 'FILTER_BOOKS':
            {
              console.log('inside books')
              console.log(state.items)
              let abc = state.items.filter(item=>item.type == 401);
              console.log(abc);
              return {...state,items:abc}// state.items.filter(item=>item.type == '402')}
            }
             // return {...state,items:state.items.data.filter(item=>item.type == '401')}
    


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
