import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import cart from "../assets/cart.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";

const Header = () => {
  const { cartState } = useContext(CartContext);
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const CartCount = cartState.cart.reduce(
    (acc, currentValue) => acc + currentValue.quantity,
    0
  );
  console.log(cartState);

  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex gap-2 justify-center">
          <img src={cart} alt="logo" className="w-10" />
          <h1 className="text-xl font-bold">Product App</h1>
        </div>

        <div className="">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search by title"
            className="bg-yellow-50 py-1.5 px-2.5 text-2xl text-black rounded"
          />
        </div>

        <nav className="space-x-6 flex gap-3.5">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link
            to="/cart"
            className="hover:text-gray-200 flex items-center gap-2 relative"
          >
            <span>Cart</span>
            <FaCartPlus className="text-xl" />
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
              {CartCount}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
