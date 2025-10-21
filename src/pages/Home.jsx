import ProductCard from "../components/ProductCard";
import { api } from "../api/api";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const { productsState, dispatch } = useContext(ProductContext);
  const [sortByPrice, setSortByPrice] = useState("cheapest");

  let displayProducts = [...productsState.productData];

  console.log(sortByPrice);
  if (sortByPrice === "cheapest") {
    displayProducts.sort((a, b) => a.price - b.price);
  } else if (sortByPrice === "expensive") {
    displayProducts.sort((a, b) => b.price - a.price);
  }

  const product = productsState.currentProduct;

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
        <div className="flex justify-between">
          <h1 className="text-3xl mb-8">Product Listing</h1>

          <select
            value={sortByPrice}
            onChange={(e) => setSortByPrice(e.target.value)}
          >
            <option value="cheapest">Cheapest</option>
            <option value="expensive">expensive</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard products={displayProducts} singleProduct={product} />
        </div>
      </div>
    </div>
  );
};

export default Home;
