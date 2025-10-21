import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm">All rights reserved.</p>

        <div className="flex space-x-6 mt-2 md:mt-0">
          <Link to="/" className="hover:text-gray-200 text-sm">
            Home
          </Link>
          <Link to="/cart" className="hover:text-gray-200 text-sm">
            Go To Cart
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
