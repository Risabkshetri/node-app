import React from "react";
import profile from "../assets/profile.png";
const Product = ({
  _id,
  title,
  thumbnail,
  price,
  discountPercentage,
  rating,
  handleClick,
}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative">
        <img 
          className="w-full h-64 object-cover" 
          src={profile}
          alt="product image" />
        
        
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discountPercentage}% OFF
          </div>
          <button
            onClick={() => handleClick(_id)}
            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <h5 className="text-lg font-semibold mb-2 truncate">{title}</h5>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl font-bold text-gray-900">
              ${Math.round(price - (discountPercentage * price) / 100)}
            </span>
            <span className="text-sm text-gray-500 line-through">${price}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-sm text-gray-600">{rating}</span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
