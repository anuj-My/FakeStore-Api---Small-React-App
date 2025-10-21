const Cart = () => {
  return (
    <div className="py-14 px-10 bg-amber-100 rounded">
      <div className="">
        {/* <img src={product?.image} alt={product?.title} className="w-52 mb-8 " />

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
        </div> */}

        <div className="flex gap-2 mt-4">
          <button className="cursor-pointer bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Decrease Quantity
          </button>

          <button className="cursor-pointer border-2 border-blue-600 text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
            Increase Quantity
          </button>

          <button className="cursor-pointer bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
