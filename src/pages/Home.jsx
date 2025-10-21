import ProductCard from "../components/ProductCard";
import { api } from "../api/api";
import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  const { productsState, dispatch } = useContext(ProductContext);

  const getProducts = async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await api.get("/");
      if (res.status === 200) {
        console.log(res);
        dispatch({ type: "GET_PRODUCT_DATA", payload: res.data });
      } else {
        throw new Error(`Failed to fetch products ${res.status}`);
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(productsState);
  return (
    <div className="py-10 ">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-3xl mb-8">Product Listing</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard products={productsState.productData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
