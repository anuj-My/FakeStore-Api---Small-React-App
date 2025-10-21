import { useNavigate } from "react-router-dom";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  const productCardList =
    products &&
    products.map((product) => {
      return (
        <div key={product?.id} className="p-4 bg-amber-400 rounded">
          <div className="">
            <img src={product?.image} alt={product?.title} className="w-52" />

            <div className="text-white ">
              <h3 className="text-2xl font-bold">{product?.title}</h3>

              <div className="flex flex-col mt-8">
                <p>
                  Price: <span className="font-bold">{product?.price}$</span>
                </p>
                <p>
                  Category:{" "}
                  <span className="font-bold">{product?.category}</span>
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => navigate(`/product/${product?.id}`)}
                className="cursor-pointer bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                View Product
              </button>

              <button className="cursor-pointer border-2 border-blue-600 text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      );
    });
  return <>{productCardList}</>;
};

export default ProductCard;
