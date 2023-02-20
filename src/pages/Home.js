
import React, { useState } from 'react'
import Img1 from "../assets/images/ab.jpg"
import Img2 from "../assets/images/bg2.jpg"
import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"
import c5 from "../assets/images/c5.jpg"
import c6 from "../assets/images/c6.jpg"



import vid from "../assets/video/p.mp4"
import ReactPlayer from 'react-player'
import { motion } from "framer-motion"
import Footer from '../components/Footer'
import Login from './Login'
import { useNavigate } from 'react-router-dom'

const Courses = [
    { title: "English Grammar ", img: c1, desc: "We teach you how to properly use English grammar and make it easier to learn English. Improve your English grammar now!" },
    { title: "English Vocabulary ", img: c2, desc: "This course teaches the most common words, which include nouns and adjectives. " },
    { title: "English Pronunciation ", img: c3, desc: "The course concentrates on the basic sounds, developing the student's ability to hear and produce those sounds in conversation." },
    { title: "English Speaking", img: c4, desc: "The course provides practice exercises to help you build the skill of listening and speaking English naturally." },
    { title: "English Writing", img: c5, desc: "In this course, you will master the practical and professional basics of becoming a good English writer." },
    { title: "English Listening", img: c6, desc: "All of the English Listening course lessons are presented in a natural conversational tone to help you understand English speakers in real situations." }
]

const Home = ({ isloggedIn, setisloggedIn }) => {

    const navigate = useNavigate()

    return (<article>
        <section className={isloggedIn ? "header_wrapper-logged-in md:h-[77vh] flex flex-col md:flex-row items-center justify-center pb-2 font-myMain py-4  " : 'header_wrapper md:h-[77vh] flex flex-col md:flex-row items-center justify-center pb-2 font-myMain py-4  '}>

            {isloggedIn &&
                <section className='text-white courses_li'>
                    <h2 className="text-2xl md:text-5xl underline">Available Courses</h2>
                    <ul className="flex flex-col items-center">
                        <li onClick={() => navigate("/english-course")} className="text-xl md:text-3xl cursor-pointer hover:text-white">-> English</li>
                        <li onClick={() => navigate("/chinese-course")} className="text-xl md:text-3xl cursor-pointer hover:text-white">-> Chinese</li>
                    </ul>
                </section>
            }

            <section className={isloggedIn ? 'md:border-l bg-transparent text-white py-2 w-[90%]  md:w-[50%] md:ml-[5%] mt-[4vh] md:mt-[10vh] ' : "md:border-l bg-transparent text-black py-2 w-[90%]  md:w-[50%] md:ml-[5%] mt-[4vh] md:mt-[10vh]"}>
                <h2 className='text-2xl md:text-4xl md:ml-[10%] font-bold  mb-8'>Learn English, and Chinese with classABCD</h2>
                <p className=" md:w-4/5 md:ml-[10%] text-primary leading-8 md:leading-10">The classABCD is an online language education website teaching English and Chinese. It is the best platform to learn English, Chinese and many other languages.</p>
                <div className=' md:w-4/5 md:ml-[10%] flex items-center justify-center md:items-end md:justify-end mt-4'>
                    <button onClick={() => navigate("/about-us")} className='bg-black hover:bg-gray-900 rounded-md border hover:border-white py-2 px-8 font-bold text-white '>Read more</button>
                </div>
            </section>


            {!isloggedIn && <Login setisloggedIn={setisloggedIn} />}
        </section>

        <section className='mt-[15vh] md:mt-[25vh] flex flex-col md:flex-row  justify-between items-center w-[94%] ml-[3%] md:w-4/5 md:ml-[10%]'>
            <div className="md:w-[49%] flex flex-col ">
                <h2 className='hidden md:block w-[85%] text-3xl md:text-4xl italic font-light '>Interface Friendly Learning At</h2>
                <h2 className="hidden md:block w-[85%] text-3xl md:text-4xl font-bold text-blue-500 hero-name text-center">ClassABCD</h2>
                <h2 className='block md:hidden text-3xl md:text-4xl italic font-light '>Interface Friendly Learning At<span className='text-blue-500 hero-name font-bold '> ClassABCD</span></h2>

                <p className="mt-4 leading-8">The classABCD is an online language education website teaching English and Chinese.
                    It is the best platform to learn English, Chinese and many other languages. We provide various kinds of language
                    courses..</p>

                <div className=" w-4/5 ml-[10%] md:hidden">
                    <img src={Img1} alt="" />
                </div>

                {!isloggedIn &&
                    <div className=' w-4/5 ml-[10%] mt-8 justify-center flex md:items-end md:justify-end'>
                        <button className='bg-black hover:bg-gray-900 rounded-md border hover:border-white text-white  py-2 px-8 font-bold text-black '><a href="#login-form">Start Now</a></button>
                    </div>}
            </div>
            <div className="w-[49%] hidden md:block">
                <img src={Img1} alt="" />
            </div>
        </section>

        <section className='mt-[15vh] md:mt-[25vh] flex flex-col md:flex-row justify-between items-center w-[94%] ml-[3%] md:w-4/5 md:ml-[10%] '>
            <div className="md:w-[49%] relative">
                <img src={Img2} alt="" />
                <div className='absolute top-0 w-4/5 ml-[10%] md:ml-0 md:w-full h-full flex justify-center items-center gap-10'>
                    <div className="text-center">
                        <p className='text-black text-sm md:text-3xl'>2000+</p>
                        <p className='font-bold md:text-xl'>Students</p>
                    </div>
                    <div className="text-center">
                        <p className='text-black text-sm md:text-3xl'>80+</p>
                        <p className='font-bold md:text-xl'>Courses</p>
                    </div>
                    <div className="text-center">
                        <p className='text-black text-sm md:text-3xl'>2</p>
                        <p className='font-bold md:text-xl'>Languages</p>
                    </div>
                </div>
            </div>
            <div className="md:w-[49%]  md:pl-12">
                <h2 className='font-bold text-center md:text-left text-3xl mb-4 mt-4 md:mt-0'>Why US ?</h2>
                <ul className='text-gray-400 leading-8 pl-6 md:pl-0 whyus_ul'>
                    <li className="list-[square]">We provide students with an engaging and helpful learning experience</li>
                    <li className="list-[square]">Help you get a level of fluency within a short time.</li>
                    <li className="list-[square]">Our classes are available to anyone with an internet connection, regardless of age or location.</li>
                    <li className="list-[square]">We believe in an effective, low-cost education and so we've created a simple, powerful system that uses a new approach to language learning.</li>
                    <li className="list-[square]"> Classes are small and the curriculum is innovative and engaging</li>
                </ul>

                {!isloggedIn &&
                    <div className=' md:w-4/5 md:ml-[10%] mt-8 flex items-end justify-center md:justify-end'>
                        <button className='bg-black hover:bg-gray-900 rounded-md border hover:border-white text-white  py-2 px-8 font-bold text-black '><a href="#login-form">Start Now</a></button>
                    </div>
                }
            </div>

        </section>


        <section className='mt-[15vh] md:mt-[25vh]'>
            <h2 className='text-center text-2xl md:text-4xl mb-8'>Choose Your
                <span className="font-bold"> English Language Course</span></h2>

            <section className='py-2 grid md:grid-cols-3 gap-6 justify-items-center h-[100vh] overflow-y-scroll  items-center w-full border courses_list-wrapper'>
                {Courses.map(course => (<CoursesList course={course} />))}
            </section>

        </section>

        <section className='w-[70%] ml-[15%] mt-[15vh] md:mt-[25vh] flex justify-around text-center text-2xl md:text-5xl pb-8'>
            <h2 className='w-[70%]'>Our <span className='font-bold'>Video</span></h2>
            <h2 className='w-[30%] hidden md:block'>Our <span className='font-bold'>Courses</span></h2>
        </section>

        <section className='w-full md:w-[70%] md:ml-[15%] border flex flex-col md:flex-row justify-around'>
            <div className='w-full md:w-[70%]'>
                <ReactPlayer
                    className='react-player'
                    url={vid}
                    width='100%'
                    height='100%'
                    playing="true"
                    controls="true"
                />
            </div>
            <div className='w-full md:w-[30%] flex justify-center items-center gap-4 video_sec '>
                <div className='ml-4 md:ml-8'>
                    <p className=' text-xl font-mono text-black'>English ...</p>
                    <p className="leading-7 text-xs">5.00 pm - 7.30 pm</p>
                    <p className="leading-7 text-xs">25 AddisAbaba.</p>
                </div>
                <div>
                    <p className=' text-xl font-mono text-black'>Chinese ...</p>
                    <p className="leading-7 text-xs">5.00 pm - 7.30 pm</p>
                    <p className="leading-7 text-xs">25 AddisAbaba.</p>
                </div>
            </div>
        </section>

        {!isloggedIn &&
            <div className=' w-4/5 ml-[10%] flex items-center justify-center mt-4  mb-[35vh]'>
                <button className='bg-black hover:bg-gray-900 rounded-md border hover:border-white text-white  py-4 px-24 font-bold text-black '><a href="#login-form">Start Now</a></button>
            </div>
        }

        <Footer />
    </article>
    )
}

const CoursesList = ({ course }) => {

    const [animate, setAnimate] = useState(false)
    return (<section className='w-64 h-64  relative border border-gray-800 rounded-full'>
        <div
            onClick={() => setAnimate(prev => !prev)}
            className="bg-gray-800  w-full h-full  border border-gray-800 rounded-full">
            <p className="text-sm leading-7 pt-2 border-t border-gray-500 text-white w-[84%] ml-[8%] mt-[18%] px-4">{course.desc}</p>
        </div>
        <motion.img animate={{ x: animate ? 220 : 0 }} className=' border rounded-full absolute top-0 w-full h-full bg-red-600' src={course.img} alt="" />

        <motion.div
            onClick={() => setAnimate(prev => !prev)}
            animate={{ x: animate ? 220 : 0 }}
            className='absolute top-0 w-full h-full border-4 rounded-full bg-transparent '>
            <p className="font-serif text-lg text-center text-white font-bold mt-[85%] shadow-2xl bg-gradient-to-r from-gray-600 to-transparent">{course.title}</p>
        </motion.div>
    </section>

    )
}

export default Home





