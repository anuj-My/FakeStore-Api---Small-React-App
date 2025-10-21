import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import cart from "../assets/cart.png";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex gap-2 justify-center">
          <img src={cart} alt="logo" className="w-10" />
          <h1 className="text-xl font-bold">Product App</h1>
        </div>

        <nav className="space-x-6 flex gap-3.5">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link
            to="/cart"
            className="hover:text-gray-200 flex gap-1 items-center justify-center"
          >
            Cart <FaCartPlus />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
