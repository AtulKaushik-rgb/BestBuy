import React from "react";

const initialState = {
  items: [],
  books: [],
  phones: [],
  clothes: [],
  cart: [],
  search: [],
  filters: [],
  cartIds:[],
  searchText: "",
};

const reducer = (state = { initialState }, action) => {
  switch (action.type) {
    case "ADD_TEXT": {
      return { ...state, searchText: action.payload };
    }

    case "ADD_ITEMS": {
      return { ...state, items: action.payload };
    }
    case "ADD_FILTERS": {
      return { ...state, filters: action.payload };
    }

    case "ADD_PHONES": {
      return { ...state, phones: action.payload }; // state.items.filter(item=>item.type == '402')}
    }
    case "ADD_CLOTHES": {
      return { ...state, clothes: action.payload }; // state.items.filter(item=>item.type == '402')}
    }

    case "ADD_BOOKS": {
      return { ...state, books: action.payload }; // state.items.filter(item=>item.type == '402')}
    }
    

    case "FILTER_ITEMS": {
      return { ...state, items: state.items.filter(item=>item.title == action.payload) }; // state.items.filter(item=>item.type == '402')}
    }
   
    case "FILTER_ITEMS": {
      return { ...state, items: state.items.filter(item=>item.title == action.payload) }; // state.items.filter(item=>item.type == '402')}
    }

    case "REMOVE_FROM_CART":{

      let removedItem = action.payload;
      let newCartIds = state.cartIds.filter(id => id!=removedItem.id);
      let newCart = state.cart.filter(item => item.id != removedItem.id);

      return {...state,
        cart:newCart,
        cartIds:newCartIds}

    }

    case "ADD_TO_CART": {


      if(state.cart)
      {
        return {...state,
          cart:[...state.cart, action.payload.cardData],
          cartIds:[...state.cartIds,action.payload.id]}
      }
      else
      {
        return { ...state, cart: [action.payload.cardData],cartIds:[action.payload.id] };
      }


      

      // if (state.cart) {
      //   return { ...state, cart: [...state.cart, action.payload] };
      // } else {
      //   return { ...state, cart: [action.payload] };
      // }
    }
    case "ADD_QUERY": {
      return { ...state, search: [action.payload] };
    }

    default: {
      return state;
    }
  }
};
export default reducer;
