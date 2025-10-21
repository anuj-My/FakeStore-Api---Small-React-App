import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartState, cartDispatch } = useContext(CartContext);
  console.log(cartState);

  const totalCartValue = cartState.cart.reduce(
    (acc, currentValue) => acc + currentValue.quantity * currentValue.price,
    0
  );

  const cartProductList = cartState.cart.map((product) => {
    return (
      <div key={product.id} className="py-14 px-10 bg-amber-100 rounded">
        <img src={product?.image} alt={product?.title} className="w-52 mb-8 " />

        <div className="text-black ">
          <h3 className="text-4xl font-bold mb-4">{product?.title}</h3>
          <p className="text-2xl">{product.description}</p>

          <div className="flex flex-col mt-8 text-2xl">
            <p>
              Price: <span className="font-bold">{product?.price}$</span>
            </p>
            <p>
              Category: <span className="font-bold">{product?.category}</span>
            </p>
            <p>
              Quantity: <span className="font-bold">{product?.quantity}</span>
            </p>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() =>
              cartDispatch({ type: "INCREASE_QUANTITY", payload: product.id })
            }
            className="cursor-pointer border-2 border-blue-600 text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Increase Quantity
          </button>
          <button
            onClick={() =>
              cartDispatch({ type: "DECREASE_QUANTITY", payload: product.id })
            }
            className="cursor-pointer bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Decrease Quantity
          </button>

          <button
            onClick={() =>
              cartDispatch({ type: "REMOVE_PRODUCT", payload: product.id })
            }
            className="cursor-pointer bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Remove
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      {cartState.cart.length > 0 && (
        <h2 className="text-right p-5 text-4xl">
          Total Cart Value: <span>{totalCartValue.toFixed(2)}$</span>
        </h2>
      )}
      {cartState.cart.length > 0 ? (
        cartProductList
      ) : (
        <h1 className="text-4xl text-center p-5">
          {" "}
          Cart is empty, add product to the cart
        </h1>
      )}
    </>
  );
};

export default Cart;
