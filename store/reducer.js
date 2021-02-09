import React from "react";

const initialState = {
  items: [],
  books: [],
  phones: [],
  clothes: [],
  cart: [],
  search: [],
  filters: [],
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

    case "ADD_TO_CART": {
      if (state.cart) {
        return { ...state, cart: [...state.cart, action.payload] };
      } else {
        return { ...state, cart: [action.payload] };
      }
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
