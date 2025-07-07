import React,{useState,useEffect} from 'react'
import MemberDetails from './MemberDetails';
import Footer from '../Footer';

const Team = () => {

      const teamMembers = [
          {
            id: 1,
            name: "Aman Verma",
            designation: "Project Manager",
            img: "https://randomuser.me/api/portraits/men/75.jpg",
          },
          {
            id: 2,
            name: "Pooja Sharma",
            designation: "UI/UX Designer",
            img: "https://randomuser.me/api/portraits/women/65.jpg",
          },
          {
            id: 3,
            name: "Rohit Saini",
            designation: "Frontend Developer",
            img: "https://randomuser.me/api/portraits/men/64.jpg",
          },
          {
            id: 4,
            name: "Neha Joshi",
            designation: "Backend Developer",
            img: "https://randomuser.me/api/portraits/women/70.jpg",
          },
          {
            id: 5,
            name: "Vikas Patel",
            designation: "DevOps Engineer",
            img: "https://randomuser.me/api/portraits/men/72.jpg",
          },
          {
            id: 6,
            name: "Sneha Gupta",
            designation: "QA Tester",
            img: "https://randomuser.me/api/portraits/women/63.jpg",
          },
          {
            id: 7,
            name: "Deepak Rawat",
            designation: "Full Stack Developer",
            img: "https://randomuser.me/api/portraits/men/62.jpg",
          },
          {
            id: 8,
            name: "Anjali Mehra",
            designation: "Content Strategist",
            img: "https://randomuser.me/api/portraits/women/66.jpg",
          },
          {
            id: 9,
            name: "Ramesh Yadav",
            designation: "Marketing Head",
            img: "https://randomuser.me/api/portraits/men/60.jpg",
          },
          {
            id: 10,
            name: "Kiran Desai",
            designation: "HR Manager",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
          }
        ];


     const [position, setPosition] = useState({ x: 0, y: 0 });
  
  
    useEffect(() => {
      const updatePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', updatePosition);
      return () => window.removeEventListener('mousemove', updatePosition);
    }, []);


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

        {/* Overlay Text */}
        <div className="absolute top-0 left-0 w-full h-[60vh] flex flex-col items-center justify-center text-white text-center px-4 bg-black/40 md:h-[90vh]  ">
          <h1 className="text-2xl md:mt-[-100px] md:text-5xl font-bold">Welcome to EduCare</h1>
          <p className="mt-2 md:mt-4 text-sm md:text-lg">
            Meet The Team
          </p>
          <br />
          <p className='text-sm md:text-[24px] mt-2'>
            Your Mentors  And Supporters
          </p>
        </div>
      </section>



          <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 bg-gray-50">
  {/* Left Section - Image */}
  <div className="w-full md:w-1/2">
    <img
      src="https://img.freepik.com/free-photo/teacher-teaching-group-students-classroom-education-learning-concept_53876-144233.jpg"
      alt="Hardworking Teachers"
      className="rounded-xl shadow-lg w-full object-cover"
    />
  </div>

  {/* Right Section - Goals & Aims */}
  <div className="w-full md:w-1/2 text-gray-800">
    <h2 className="text-2xl font-bold mb-4 text-orange-700">Our Team Goals & Vision</h2>
    <p className="text-sm leading-7">
      At EduCare, our primary goal is to bridge the gap between quality education and accessibility. Our dedicated team of educators, mentors, developers, and support staff works tirelessly to ensure that students from all backgrounds receive the guidance and resources they need to thrive. We believe education is not a one-size-fits-all solution; it should be tailored, interactive, and inspiring.
      Our teachers play a pivotal role in shaping the minds of future leaders. Through personalized mentoring, real-world problem-solving, and continuous feedback, we ensure that every learner is seen, heard, and supported. Collaboration and innovation are the heartbeats of our mission. We strive to bring modern technology into traditional teaching methods, combining human empathy with digital efficiency.
      One of our key aims is to create a safe, inclusive learning environment where curiosity is encouraged and mistakes are embraced as a part of learning. We also prioritize mental well-being and emotional support by training our mentors to guide students holistically—not just academically. 
      As a team, we are constantly evolving, learning from each interaction and improving our methods. Whether it’s through upgrading our content, integrating new tools, or conducting team feedback sessions, we stay committed to delivering the best.
      In the years to come, we envision EduCare becoming a symbol of transformative education across the country. A place where students aren't just prepared for exams, but for life.
    </p>
  </div>
</div>

      {/* Team Section */}

      <section>
        <div className="mt-6 bg-white p-4 border-l-4 border-orange-500 shadow-sm rounded-md">
          <p className="italic text-gray-700 text-sm md:text-base">
            "A good teacher is like a candle — it consumes itself to light the way for others."  
            <span className="block mt-2 text-right font-semibold text-orange-600">– Mustafa Kemal Atatürk</span>
          </p>
        </div>
        <div className='p-7'>
            <h1 className='text-2xl font-bold text-center'>Meet The Team</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6 px-4 pb-10">
          {teamMembers.map((teamMember,index)=>
                <MemberDetails key={index} {...teamMember}/>
          )}
        </div>
      </section>

          <Footer/>
          
    </div>
  )
}

export default Team