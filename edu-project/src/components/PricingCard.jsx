import React from 'react';

const PricingCard = ({ plan, price, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-all">
      <h3 className="text-sm font-semibold text-gray-700 uppercase">{plan}</h3>
      <h2 className="text-3xl font-bold text-orange-600 my-4">${price}</h2>
      <p className="text-gray-500 mb-6">{description}</p>
      <button className="border-2 border-orange-500 text-orange-600 font-semibold px-6 py-2 rounded hover:bg-orange-500 hover:text-white transition">
        Buy Now
      </button>
    </div>
  );
};

export default PricingCard;
