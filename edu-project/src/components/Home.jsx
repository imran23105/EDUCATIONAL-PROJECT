import React,{useState,useEffect} from 'react';
import Feature from './Feature';
import { FaBook, FaCertificate,FaUserGraduate } from 'react-icons/fa';
import CoursesSection from './CoursesSection';
import CourseCategoriesSection from './CourseCategoriesSection';
import BlogSection from './BlogSection';
import PricingSection from './PricingSection';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  
    useEffect(() => {
      const updatePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', updatePosition);
      return () => window.removeEventListener('mousemove', updatePosition);
    }, []);

      const goToCourses = () => {
          navigate('/courses');
         };

const handleEnroll = (e) => {
  e.preventDefault();

  toast.success("Successfully Enrolled!", {
    position: "top-right",
    autoClose: 1000, 
    theme: "colored",
  });

  setTimeout(() => {
    navigate('/courses');
  }, 2000);
};

  return (
    <div>

      {/* Cursor Effect */}
      <div
        className="fixed w-5 h-5 bg-teal-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
          transition: 'transform 0.05s ease-out',
        }}
      ></div>

      <section className="relative">
        {/* Background Image */}
        <div
          className="w-[100%] h-[60vh] bg-cover bg-fixed bg-center md:w-full md:h-[90vh] lg:w-full"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/previews/000/696/089/non_2x/chalkboard-template-and-students-vector.jpg')",
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-[60vh] flex flex-col items-center justify-center text-white text-center px-4 bg-black/40 md:h-[90vh]  ">
          <h1 className="text-2xl md:mt-[-200px] md:text-5xl font-bold">Welcome to EduCare</h1>
          <p className="mt-2 md:mt-4 text-sm md:text-lg">
            Your one-stop solution for online education and learning.
          </p>
          <br />
          <p className='text-sm md:text-[24px] mt-2'>
            Far Far away from the countries <br />
            <br /> Vokalia and Consonantia, there live the blind texts.
          </p>
              <br />
            <div className='flex flex-col md:flex-row gap-5 mt-4'>
              <button className="mt-4 px-6 py-2 bg-orange-600 text-white rounded hover:bg-black">
                  Get Started
              </button>
            <button  onClick={handleEnroll} className="mt-4 px-6 py-2 bg-orange-600 text-white rounded hover:bg-black">
            Explore Courses
          </button>
            </div>
          
        </div>
      </section>
      <div className="flex flex-col md:flex-row items-center justify-between p-8">
      {/* Left Image */}
      <div className="md:w-1/2">
        <img 
          src="https://img.freepik.com/premium-vector/back-school-concept-little-boy-with-backpack-cartoon-vector-illustration_849186-140.jpg?semt=ais_hybrid&w=740" 
          alt="Student" 
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <h2 className="text-4xl font-bold mb-6">Benefits About Online Learning Expertise</h2>

        <div className='mt-[80px] bg-slate-200'>
        <Feature 
          icon={<FaBook size={40} className="hover:text-white hover:bg-black" />}
          title="Online Courses"
          description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          
        />
        <Feature 
          icon={<FaCertificate size={40} className="hover:text-white hover:bg-black" />}
          title="Earn A Certificate"
          description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
        <Feature 
          icon={<FaUserGraduate size={40} className="hover:text-white hover:bg-black" />}
          title="Learn with Expert"
          description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
        </div>
      </div>
    </div>
      <div>
        <CoursesSection />
      </div>
      <div>
      <CourseCategoriesSection />
    </div>
    <div>
      <BlogSection />
    </div>
    <div>
      <PricingSection />
    </div>
    <div>
      <Newsletter/>
    </div>
    <div>
      <Footer/>
    </div>

    <ToastContainer/>
    </div>
  );
};

export default Home;

