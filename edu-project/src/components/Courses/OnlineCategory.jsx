import React from 'react'
import {
  FaPaintBrush,
  FaCode,
  FaHistory,
  FaLaptopCode,
  FaBrain,
  FaHeartbeat,
  FaBullhorn,
  FaPenNib,
  FaMusic,
  FaBriefcase,
  FaNetworkWired,
  FaObjectGroup,
} from 'react-icons/fa';
import OnlineCourses from './OnlineCourses';


const categories = [
  { icon: <FaObjectGroup />, title: "UI/UX Design Courses", courseCount: 25 },
  { icon: <FaPaintBrush />, title: "Art & Design", courseCount: 25 },
  { icon: <FaBrain />, title: "Computer Science", courseCount: 10 },
  { icon: <FaHistory />, title: "History & Archeologic", courseCount: 15 },
  { icon: <FaLaptopCode />, title: "Software Engineering", courseCount: 30 },
  { icon: <FaNetworkWired />, title: "Information Software", courseCount: 60 },
  { icon: <FaHeartbeat />, title: "Health & Fitness", courseCount: 10 },
  { icon: <FaBullhorn />, title: "Marketing", courseCount: 30 },
  { icon: <FaPenNib />, title: "Graphic Design", courseCount: 80 },
  { icon: <FaMusic />, title: "Music", courseCount: 120 },
  { icon: <FaBriefcase />, title: "Business Administration", courseCount: 17 },
  { icon: <FaCode />, title: "Web Management", courseCount: 17 },
];

const OnlineCategory = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-orange-500 font-semibold">COURSES</p>
        <h2 className="text-3xl font-bold mb-10">Browse Our Online Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <OnlineCourses
            {...cat}
            key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OnlineCategory