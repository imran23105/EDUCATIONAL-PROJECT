// CourseCategoriesSection.js
import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CourseCategoryCard from './CourseCategoryCard';
import {
  FaPaintBrush,
  FaHistory,
  FaLaptopCode,
  FaBrain,
  FaNetworkWired,
  FaObjectGroup,
} from 'react-icons/fa';

const categories = [
  { icon: <FaObjectGroup />, title: "UI/UX Design Courses", courseCount: 25 },
  { icon: <FaPaintBrush />, title: "Art & Design", courseCount: 25 },
  { icon: <FaBrain />, title: "Computer Science", courseCount: 10 },
  { icon: <FaHistory />, title: "History & Archeologic", courseCount: 15 },
  { icon: <FaLaptopCode />, title: "Software Engineering", courseCount: 30 },
  { icon: <FaNetworkWired />, title: "Information Software", courseCount: 60 },
];

const CourseCategoriesSection = () => {
  useEffect(() => {
    Aos.init({ duration: 4000, once: true });},[]);
  return (
    <section className="py-16 bg-gray-50" data-aos="fade-right" data-aos-duration="5000">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-orange-500 font-semibold">COURSES</p>
        <h2 className="text-3xl font-bold mb-10">Browse Our Online Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <CourseCategoryCard
              key={idx}
              icon={cat.icon}
              title={cat.title}
              courseCount={cat.courseCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategoriesSection;
