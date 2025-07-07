import React from 'react';

const ClassCard = ({ image, course, teacher }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-[280px] hover:shadow-xl transition-all duration-300">
      <div className="h-[160px] overflow-hidden">
        <img
          src={image}
          alt="Course"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <p className="text-lg font-semibold text-gray-800">{course}</p>
        <p className="text-sm text-gray-500">{teacher}</p>
        <div className="pt-3">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
