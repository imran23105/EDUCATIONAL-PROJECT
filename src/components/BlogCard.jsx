// BlogCard.js
import React from 'react';
import { FaUser, FaCalendarAlt, FaCommentDots } from 'react-icons/fa';

const BlogCard = ({ image, author, date, comments, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt="blog" className="w-full h-64 object-cover" />
      
      <div className="p-4 space-y-2">
        <div className="flex items-center text-sm text-gray-500 gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <FaUser className="text-orange-500" /> {author}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-orange-500" /> {date}
          </span>
          <span className="flex items-center gap-1 text-orange-600 font-medium">
            <FaCommentDots /> {comments} Comments
          </span>
        </div>

        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
