import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { FaUsers, FaHeart, FaLink } from 'react-icons/fa';
import ClassCard from './ClassCard';
import PlacementPartners from './PlacementPartners';
import StudentsSay from './StudentsSay';
import Footer from '../Footer'

const Live = () => {

 const classCards = [
  {
    id: 1,
    image: 'https://img.freepik.com/free-vector/data-scientist-concept-illustration_114360-729.jpg',
    course: 'Data Science Essentials',
    teacher: 'Dr. Aakash Verma',
  },
  {
    id: 2,
    image: 'https://img.freepik.com/free-vector/algorithm-concept-illustration_114360-5523.jpg',
    course: 'DSA Masterclass',
    teacher: 'Mr. Kunal Rawat',
  },
  {
    id: 3,
    image: 'https://img.freepik.com/free-vector/artificial-intelligence-concept_23-2149233744.jpg',
    course: 'Machine Learning with Python',
    teacher: 'Dr. Priya Malhotra',
  },
  {
    id: 4,
    image: 'https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-1250.jpg',
    course: 'Full Stack Web Dev',
    teacher: 'Ms. Tanya Kapoor',
  },
  {
    id: 5,
    image: 'https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg',
    course: 'Cybersecurity Basics',
    teacher: 'Mr. Arjun Singh',
  },
  {
    id: 6,
    image: 'https://img.freepik.com/free-vector/blockchain-technology-concept_23-2148518866.jpg',
    course: 'Blockchain & Crypto',
    teacher: 'Dr. Sneha Jain',
  },
  {
    id: 7,
    image: 'https://img.freepik.com/free-vector/database-management-system-concept_23-2148828308.jpg',
    course: 'SQL & Database Management',
    teacher: 'Mr. Deep Mehta',
  },
  {
    id: 8,
    image: 'https://img.freepik.com/free-vector/devops-team-concept-illustration_114360-2207.jpg',
    course: 'DevOps & CI/CD',
    teacher: 'Ms. Ritu Chauhan',
  },
  {
    id: 9,
    image: 'https://img.freepik.com/free-vector/cloud-computing-concept-illustration_114360-484.jpg',
    course: 'AWS Cloud Fundamentals',
    teacher: 'Mr. Manish Nair',
  },
  {
    id: 10,
    image: 'https://img.freepik.com/free-vector/computer-programming-concept_114360-1351.jpg',
    course: 'C++ Programming for Beginners',
    teacher: 'Ms. Isha Rao',
  }
];

 const students = [
  {
    name: 'Aarav Mehta',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    review: `The course exceeded all my expectations. As someone who always wanted to explore technology but didn't know where to start, this platform gave me the exact push I needed. The instructors explained every topic in such a simple and engaging way that even the complex concepts became easy to understand. What I loved most was the practical approach—every theory was backed with real-world projects. The support team was also very responsive whenever I had doubts. Thanks to this course, I was able to build my first project, and that boosted my confidence tremendously. I'm now preparing for internships and job interviews, and I feel much more prepared than I did before. This is a must-join for any student who wants quality learning at a pocket-friendly price.`
  },
  {
    name: 'Priya Sharma',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    review: `Honestly, I never thought an online course could offer such a comprehensive learning experience. The content was very well-structured, and every module built perfectly on the previous one. The hands-on projects helped me solidify my understanding, and the peer-to-peer interactions made it feel like I was part of a real classroom. I especially want to mention the weekly doubt-clearing sessions—they were a game-changer. The instructors genuinely care about the progress of each student, and that reflects in the way they teach. I have taken other courses before, but nothing came close to this. It's not just a course, it's a complete learning journey. Highly recommended for any serious learner.`
  },
  {
    name: 'Rohit Singh',
    image: 'https://randomuser.me/api/portraits/men/51.jpg',
    review: `I joined the course with the intention of brushing up on my programming skills, but I ended up gaining so much more. Each topic was covered with depth and clarity, making even the most challenging concepts easy to grasp. The blend of theory and practical implementation was just right. The instructors made sure no one felt left behind. I also appreciated the regular assessments—they helped track my progress effectively. Apart from the content, the community was very helpful too. I connected with students from different backgrounds and that gave me new perspectives. This course played a significant role in shaping my learning routine and boosting my confidence.`
  },
  {
    name: 'Simran Kaur',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    review: `As someone from a non-technical background, I was skeptical about joining an online tech course. But this course changed my perspective completely. The curriculum is thoughtfully designed to cater to beginners like me. The instructors used relatable examples and encouraged us to think beyond theory. What impressed me most was their continuous support—they responded to every query within a few hours. The projects were challenging but very rewarding. I also liked the way they integrated soft skills sessions, which helped me improve my communication and interview prep. I now feel confident applying for roles in tech, something I never thought I could do. Thank you for creating such an empowering learning space.`
  },
  {
    name: 'Karan Patel',
    image: 'https://randomuser.me/api/portraits/men/28.jpg',
    review: `I've taken multiple online courses before, but none of them were as student-friendly as this one. The user interface was clean, and the course flow was logical and engaging. Each module came with downloadable resources, quizzes, and hands-on assignments. The mentors didn't just teach—they guided us like friends. Their real-world experience added immense value. I particularly liked the live coding sessions, where we could see the thought process behind every line of code. I also loved the end-of-course capstone project. It helped me showcase everything I learned in one go. I’ve added it to my resume and already started getting interview calls. 100% worth it!`
  },
  {
    name: 'Ishita Joshi',
    image: 'https://randomuser.me/api/portraits/women/30.jpg',
    review: `The course gave me clarity and direction in my career. I was feeling lost, unsure about which domain to choose in tech. But the course covered multiple areas—from web development to data structures—and I got to explore each one hands-on. The instructors made sure we understood why we were doing what we were doing. It wasn’t just about writing code, it was about solving problems. I also want to highlight the feedback system—it was personal and very detailed. This helped me fix my mistakes and improve continuously. I can confidently say this course made me a better learner and a better problem solver.`
  },
  {
    name: 'Aditya Verma',
    image: 'https://randomuser.me/api/portraits/men/40.jpg',
    review: `This course transformed the way I think about learning. Instead of rote memorization, we focused on logic-building and creativity. Every session made me more curious. I began applying the skills not just in class but in my side projects too. The instructors brought in real-world examples from the industry, which was very helpful. Even after the course ended, we had access to recordings and community support. That meant I could revise at my own pace. Today, I’m working on freelance projects and it’s all thanks to the foundation I built here. If you want a solid, practical tech education, look no further.`
  },
  {
    name: 'Ananya Reddy',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
    review: `One word—amazing! The curriculum was rich, up-to-date, and covered everything from basic to advanced topics. What I liked most was the mentorship aspect. We were not just learning, we were constantly being guided by industry professionals. They conducted mock interviews, gave resume feedback, and shared job-hunting tips. I never expected an online course to be so career-oriented. I feel more prepared for the tech world now than I did after my college degree. Also, the community is full of motivated learners. The motivation I got from my batchmates kept me going even when I was stuck. Thank you for creating something so impactful!`
  }
];


  return (
    <div>
        <div className="bg-gradient-to-r from-white to-[#f4f6ff] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Learn & become the
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-3">
          Top 1% software developer
        </h2>
       <p className="text-gray-700 mb-6">
            <Typewriter
                words={['EduCare - Web Development', 'Learn from the Best', 'Achieve Your Goals']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
            />
        </p>
        <button className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-red-700 transition">
          <span className="text-green-300 font-bold">Ultimate</span> Placement Solution →
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="overflow-hidden rounded-b-[100px] rounded-t-[100%] shadow-lg border-2 border-orange-500">
          <img
            src="https://i.pinimg.com/736x/17/fa/44/17fa44e8d7f0d4a341f078b6c94a31ef.jpg" 
            alt="Mentor"
            className="w-[320px] h-[400px] object-cover"
          />
        </div>
      </div>
        </div>

        {/* Section-2 */}
    <div className="bg-gradient-to-r from-orange-700 to-orange-500 py-8 px-6 text-white relative overflow-hidden">
      
      {/* Headline */}
      <h2 className="text-center text-xl md:text-2xl font-bold mb-10">
        INDIA'S MOST LOVED PLATFORM <span className="text-black">❤️</span>
      </h2>

      {/* Stats Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        
        {/* Happy Learners */}
        <div className="flex flex-col items-center">
          <FaUsers className="text-3xl mb-2" />
          <p className="text-lg font-bold">6,000,000+</p>
          <span className="text-sm text-gray-200">HAPPY LEARNERS</span>
        </div>

        {/* Monthly Views */}
        <div className="flex flex-col items-center">
          <FaHeart className="text-3xl mb-2" />
          <p className="text-lg font-bold">2 CRORE+</p>
          <span className="text-sm text-gray-200">MONTHLY VIEWS</span>
        </div>

        {/* New Subscribers */}
        <div className="flex flex-col items-center">
          <FaLink className="text-3xl mb-2" />
          <p className="text-lg font-bold">100,000+</p>
          <span className="text-sm text-gray-200">NEW MONTHLY SUBSCRIBERS</span>
        </div>

      </div>

    </div>

    {/* Live Classes */}
    <div>

        <h1 className='text-2xl font-bold text-center p-8 md:text-3xl'>Join Our Classes</h1>
    <div className='flex flex-wrap justify-center gap-6 px-4 pb-10'>
        {classCards.map((classCard,index)=>
                <ClassCard key={index} {...classCard}/>
        )}
    </div>
    </div>
    <div>
        <PlacementPartners/>
    </div>
    <div>
      <h1 className='text-2xl font-bold text-center p-8 md:text-3xl'>See what our Students Say</h1>
      <div className='flex flex-wrap justify-center gap-6 px-4 pb-10 '>
        {students.map((students,index)=>
            <StudentsSay key={index} {...students}/>
        )}
      </div>
    </div>
        <Footer/>


    </div>
  )
}

export default Live