import React from 'react';
import CoursesSectionMain from './CoursesSectionMain';
import OnlineCategory from './OnlineCategory';
import Newslatter from '../Newsletter'
import Footer from '../Footer';

const Courses = () => {
  return (
    <div>
      <section className="relative">
        {/* Background Image */}
        <div
          className="w-[100%] h-[60vh] bg-cover bg-fixed bg-center md:w-full md:h-[90vh] lg:w-full"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/frame-with-happy-kids-blackboard_1308-32501.jpg?ga=GA1.1.226366015.1723617612&semt=ais_hybrid&w=740')",
          }}
        ></div>

        {/* Overlay Text */}
        <div className="absolute top-0 left-0 w-full h-[60vh] flex flex-col items-center justify-center text-white text-center px-4 bg-black/40 md:h-[90vh]  ">
          <h1 className="text-2xl md:mt-[-200px] md:text-7xl font-bold">Explore Courses</h1>
          <p className="mt-2 md:mt-4 text-sm md:text-lg">
            Unlock Your Potential, One Course at a Time.
          </p>
          <br />
              <br />
        </div>
      </section>

      <div>
        <CoursesSectionMain/>
      </div>
      <div>
        <OnlineCategory/>
      </div>
      <div>
        <Newslatter/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  );
};

export default Courses;
