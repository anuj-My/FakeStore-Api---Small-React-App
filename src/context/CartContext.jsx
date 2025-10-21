import { createContext, useEffect, useReducer } from "react";

const initialState = {
  cart: localStorage.getItem("Cart Product")
    ? JSON.parse(localStorage.getItem("Cart Product"))
    : [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existsInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existsInCart) {
        return {
          ...state,
          cart: state.cart.map((product) => {
            return product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product;
          }),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) => {
          return product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product;
        }),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart
          .map((product) => {
            return product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product;
          })
          .filter((product) => product.quantity > 0),
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter((product) => {
          return product.id !== action.payload;
        }),
      };
  }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("Cart Product", JSON.stringify(cartState.cart));
  }, [cartState.cart]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
