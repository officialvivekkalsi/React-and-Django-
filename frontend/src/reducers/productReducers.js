import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,

  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

export const productListReducer = (state = { Products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state,loading: true, Products: [] };  
    case PRODUCT_LIST_SUCCESS:
      // console.log('payload',action.payload)
      return { ...state,loading: false, Products: action.payload };
      // action.payload because we have loaded our data
    case PRODUCT_LIST_FAIL:
      return { ...state,Products:[],loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { Product: {reviews:[]} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true,...state };  
    case PRODUCT_DETAILS_SUCCESS:
      console.log('reducer id data',action.payload)
      return { loading: false, Product: action.payload };
      // action.payload because we have loaded our data
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};



// Reducer is simply a function that takes our current state and its is going to take an action what we want to do to this state like loading  data and depending on what that action type is,this page can have multiple actions