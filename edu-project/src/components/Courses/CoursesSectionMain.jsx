import React from 'react';
import { FaCode, FaPhotoVideo, FaLaptopCode } from 'react-icons/fa';
import CourseCard from './CourseCard';

const CoursesSectionMain = () => {
  const courses = [
    {
      icon: <FaLaptopCode />,
      title: 'Introducing to Software Engineering',
      rating: 5.0,
      author: 'John Smith',
      lectures: 50,
      duration: '190 hrs',
      price: 100,
      monthly: 15,
    },
    {
      icon: <FaLaptopCode />,
      title: 'Introducing to Software Engineering',
      rating: 5.0,
      author: 'John Smith',
      lectures: 50,
      duration: '190 hrs',
      price: 100,
      monthly: 15,
    },
    {
      icon: <FaLaptopCode />,
      title: 'Introducing to Software Engineering',
      rating: 5.0,
      author: 'John Smith',
      lectures: 50,
      duration: '190 hrs',
      price: 100,
      monthly: 15,
    },
    {
      icon: <FaPhotoVideo />,
      title: 'Enhancing Adobe Photoshop CC 2020 Skills',
      rating: 5.0,
      author: 'kim Rench',
      lectures: 30,
      duration: '125 hrs',
      price: 200,
      monthly: 25,
    },
    {
      icon: <FaCode />,
      title: 'HTML, CSS, and Javascript for Web Developers',
      rating: 5.0,
      author: 'Johny Doe',
      lectures: 50,
      duration: '50 hrs',
      price: 50,
      monthly: 5,
    },
    {
      icon: <FaCode />,
      title: 'HTML, CSS, and Javascript for Web Developers',
      rating: 5.0,
      author: 'Johny Doe',
      lectures: 50,
      duration: '50 hrs',
      price: 50,
      monthly: 5,
    },
    {
      icon: <FaCode />,
      title: 'HTML, CSS, and Javascript for Web Developers',
      rating: 5.0,
      author: 'Johny Doe',
      lectures: 50,
      duration: '50 hrs',
      price: 50,
      monthly: 5,
    },
    {
      icon: <FaCode />,
      title: 'HTML, CSS, and Javascript for Web Developers',
      rating: 5.0,
      author: 'Johny Doe',
      lectures: 50,
      duration: '50 hrs',
      price: 50,
      monthly: 5,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-600 font-semibold">OUR COURSES</p>
          <h2 className="text-3xl font-bold mt-2">Explore Our Popular Online Courses</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap" data-aos="fade-down">
          {courses.map((course,ind) => (
            <CourseCard key={ind}  {...course} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-4">
        <button className="mt-2 border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition ">
        Explore More Courses
      </button>
      </div>
      </div>
    </section>
  );
};

export default CoursesSectionMain;
