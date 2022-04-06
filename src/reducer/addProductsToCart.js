import React from "react";
const initialState = [
  {
    id: "",
    url: "",
    price: "",
    count: 0,
    inf: { name: "", brand: "", size: "" },
  },
];
export const addProductsToCart = (state = initialState, action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];

    case "increase":
      return [...action.payload];
      case "decrease":
        return [...action.payload];
        case "delete":
        return [...action.payload];
    default:
      return state;
      
  }
};
