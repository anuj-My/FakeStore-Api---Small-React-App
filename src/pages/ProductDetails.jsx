import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/api";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  const { productsState, dispatch } = useContext(ProductContext);

  const product = productsState.currentProduct;

  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const getSingleProduct = async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await api.get(`/${id}`);
      console.log(res);
      dispatch({ type: "GET_SINGLE_PRODUCT", payload: res.data });
      if (res.status === 200) {
      } else {
        throw new Error(`Failed to fetch product, error: ${res.status}`);
      }
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div className="py-14 px-10 bg-amber-400 rounded">
      <button
        onClick={() => navigate("/")}
        className="mb-12 cursor-pointer bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        back to home
      </button>

      <div className="">
        <img src={product?.image} alt={product?.title} className="w-52 mb-8 " />

        <div className="text-white ">
          <h3 className="text-4xl font-bold mb-4">{product?.title}</h3>
          <p className="text-2xl">{product.description}</p>

          <div className="flex flex-col mt-8 text-2xl">
            <p>
              Price: <span className="font-bold">{product?.price}$</span>
            </p>
            <p>
              Category: <span className="font-bold">{product?.category}</span>
            </p>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button className="cursor-pointer bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            checkout
          </button>

          <button className="cursor-pointer border-2 border-blue-600 text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
