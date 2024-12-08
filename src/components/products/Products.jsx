import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useStateValue } from "../../context";

const Products = ({ data, title }) => {
  const { wishList, setWishList } = useStateValue();

  const handleLike = (product) => {
    const isLiked = wishList.some((item) => item.id === product.id);
    if (isLiked) {
      setWishList((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setWishList((prev) => [...prev, product]);
    }
  };

  const productItems = data?.map((product) => (
    <div
      key={product.id}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative">
        <img
          className="w-full h-64 object-contain"
          src={product.images[1] ? product.images[1] : product.images[0]}
          alt={product.title}
        />
        <button
          onClick={() => handleLike(product)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          {wishList.some((item) => item.id === product.id) ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-500" />
          )}
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="text-xl font-bold text-green-500 mt-2">
          ${product.price}
        </p>
      </div>
    </div>
  ));

  return (
    <section className="products py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">
            Order it for yourself or your loved ones
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productItems}
        </div>
      </div>
    </section>
  );
};

export default Products;
