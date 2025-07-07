// Feature.js
import React from 'react';

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex items-start mt-[50px] p-5 ">
      <div className="p-4 bg-gray-200 rounded-lg">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
