import React, { useContext,useState,useEffect } from 'react'
import { UserContext } from '../../Context/UseContext'
import Footer from '../Footer';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify';

const Contact = () => {

  const{firstName,  setFirstName,email,setEmail,message,setMessage,phoneNum,setPhoneNum,subject,setSubject}=useContext(UserContext);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);


    const submitHandler = (e) => {
        e.preventDefault(); 
        toast.info('Submitted Successfully');
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
        <section className='realtive'>
            <div
          className="w-[100%] h-[60vh] bg-cover bg-fixed bg-center md:w-full md:h-[90vh] lg:w-full"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/previews/000/696/089/non_2x/chalkboard-template-and-students-vector.jpg')",
          }}
        ></div>
            <div className='absolute top-[95PX] left-0 w-full h-[60vh] flex flex-col items-center justify-center text-white text-center px-4 bg-black/40 md:h-[90vh]'>
                <h1 className='text-7xl font-bold'>Get In Touch</h1>
                <p className='text-2xl'>The ultiMate aim to Guide you towards the future </p>
            </div>
        </section>

        {/* Form */}
        <section className='grid   place-items-center h-screen w-full mt-[-180px]'>
          <div className='p-7  '>
          <form
              action=""
              className='border ] border-black p-4 md:p-10 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-md '>
            <div className='w-full grid md:grid-cols-2 p-6 gap-3'>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter First Name"
                className='border t border-red-500 hover:border-green-500  p-1 rounded-md'
              />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className='border border-red-500 hover:border-green-500  p-1 rounded-md'
          />
            </div>
            <div className='grid md:grid-cols-2 p-6 gap-3'>
              <input type="text"
                     value={phoneNum}
                     onChange={(e)=>setPhoneNum(e.target.value)}
                     placeholder='Enter Your Number'
                     className='border border-red-500 hover:border-green-500  p-1 rounded-md'
              />
              <input type="text"
                     value={subject}
                     onChange={(e)=>setSubject(e.target.value)}
                     placeholder='What is Your SUbject?'
                     className='border border-red-500 hover:border-green-500  p-1 rounded-md'
              />
            </div>
            <div className='grid grid-cols-1'>
              <input type="message"
                     value={message}
                     onChange={(e)=>setMessage(e.target.value)}
                     placeholder='message Towards Us'
                     className='border border-red-500 hover:border-green-500 mx-7 p-1 rounded-md '
              />
            </div>
            
            <div className='flex align-middle justify-center'>
              <button className='p-2 border border-black flex justify-center align-middle mt-5 mx-7 hover:bg-white hover:text-black rounded-md' onClick={submitHandler}>Submit</button>
            </div>
          </form>
          <div className='p-7 '>
           <h1 className='text-xl text-center text-gray-700'>
            Your message is important to us. We’ll respond as soon as possible.
              </h1>
            </div>
          </div>
        </section>
        <Footer/>

        <ToastContainer/>
    </div>
  )
}

export default Contact