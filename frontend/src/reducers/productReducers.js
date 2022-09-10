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
      return { ...state,loading: false, Products: action.payload };
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
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
