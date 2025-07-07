// CourseCategoryCard.js
import React from 'react';

const CourseCategoryCard = ({ icon, title, courseCount }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition">
      <div className="text-5xl text-orange-500 mb-4">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <span className="mt-2 bg-gray-100 text-orange-600 text-sm font-medium py-1 px-3 rounded-full">
        {courseCount} Courses
      </span>
    </div>
  );
};

export default CourseCategoryCard;
