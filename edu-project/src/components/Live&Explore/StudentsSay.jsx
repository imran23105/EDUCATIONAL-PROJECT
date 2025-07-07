// import React from 'react';

// const StudentsSay = ({name,image,review}) => {
//   return (
//     <div className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
//       <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 text-center">
//         <div className="flex justify-center">
//           <img
//             src={image}
//             alt="Student"
//             className="w-24 h-24 object-cover shadow-md"
//           />
//         </div>
//         <h3 className="mt-4 text-lg font-semibold text-gray-800">{name}</h3>
//         <p className="mt-2 text-sm text-gray-600">
//           {review}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default StudentsSay;


import React, { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StudentsSay = ({ name, image, review }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const truncatedText = review.slice(0, 200);

  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 text-center" data-aos="fade-up">
        <div className="flex justify-center">
          <img
            src={image}
            className="w-24 h-24 object-cover rounded-full shadow-md border-2 border-white"
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-800">{name}</h3>
        <p className="mt-2 text-sm text-gray-600">
          {expanded ? review : `${truncatedText}...`}
        </p>
        {review.length > 200 && (
          <button
            onClick={toggleExpanded}
            className="mt-2 text-orange-500 font-medium hover:underline focus:outline-none"
          >
            {expanded ? 'See less' : 'See more'}
          </button>
        )}
      </div>
    </div>
  );
};

export default StudentsSay;
