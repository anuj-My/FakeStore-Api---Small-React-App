import { createContext, useReducer } from "react";

const initialState = {
  productData: [],
  currentProduct: {},
  errorMessage: "",
  loading: false,
};
const productReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DATA":
      return {
        ...state,
        productData: action.payload,
        errorMessage: "",
        loading: false,
      };

    case "GET_SINGLE_PRODUCT":
      return {
        ...state,
        currentProduct: action.payload,
        errorMessage: "",
        loading: false,
      };

    case "LOADING":
      return {
        ...state,
        errorMessage: "",
        loading: true,
      };

    case "SET_ERROR":
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsState, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ productsState, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
