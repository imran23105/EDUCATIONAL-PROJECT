import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CourseCard = ({
  icon,
  title,
  rating,
  author,
  lectures,
  duration,
  price,
  monthly,
}) => {


  useEffect(() => {
    Aos.init({ once: true });
  }, [4000]);


  const buyHandler=()=>{
    toast.info("Enrolled succesfully",{
      position:"top-right", autoClose:1000, theme:"colored"
    })
  }
  return (
    <div
      className="bg-white shadow-md rounded-lg p-6 w-full md:w-[300px] flex flex-col items-center gap-4 text-center border"
      data-aos="fade-up"
    >
      <div className="text-5xl text-orange-600">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-orange-600 text-sm font-semibold">
        ★★★★★ ({rating})
      </p>
      <div className="flex items-center gap-2 mt-2">
        <img
          src="https://i.pravatar.cc/40"
          alt={`Avatar of ${author}`}
          className="rounded-full w-8 h-8"
        />
        <p className="text-sm text-gray-600 font-medium">by {author}</p>
      </div>
      <p className="text-sm text-orange-500">
        {lectures} lectures ({duration})
      </p>
      <div className="bg-gray-100 py-2 px-4 rounded text-sm font-semibold">
        ${price} All Course / ${monthly} per month
      </div>
      <button onClick={buyHandler} className="mt-2 border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition">
        ENROLL NOW !
      </button>
      
    </div>
  );
};

export default CourseCard;
