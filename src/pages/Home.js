
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

const Courses = [
    { title: "English Grammar ", img: c1, desc: "We teach you how to properly use English grammar and make it easier to learn English. Improve your English grammar now!" },
    { title: "English Vocabulary ", img: c2, desc: "This course teaches the most common words, which include nouns and adjectives. " },
    { title: "English Pronunciation ", img: c3, desc: "The course concentrates on the basic sounds, developing the student's ability to hear and produce those sounds in conversation." },
    { title: "English Speaking", img: c4, desc: "The course provides practice exercises to help you build the skill of listening and speaking English naturally." },
    { title: "English Writing", img: c5, desc: "In this course, you will master the practical and professional basics of becoming a good English writer." },
    { title: "English Listening", img: c6, desc: "All of the English Listening course lessons are presented in a natural conversational tone to help you understand English speakers in real situations." }
]

const Home = () => {
    return (<article>
        <section className='header_wrapper h-[77vh] flex items-end'>
            <section className='bg-transparent hero py-10 w-[50%] ml-[35%] '>
                <h2 className='text-6xl text-white font-bold font-mono text-center mb-8'>Welocome !</h2>
                <p className="text-gray-300  font-serif w-3/5 ml-[20%] text-r">Learn English and Chinese languages with <span className='text-orange-500 font-bold'>ClassABCD</span>, the perfect way to get fluent in multiple languages.</p>
                <div className=' w-[50%] ml-[25%] flex items-end justify-end mt-4'>
                    <button className='bg-white hover:bg-transparent border hover:border-white hover:text-white  py-1 px-4 font-bold text-black rounded-full'>Read more</button>
                </div>
            </section>
        </section>

        <section className='mt-[25vh] flex justify-between items-center w-4/5 ml-[10%]'>
            <div className="w-[49%] flex flex-col">
                <h2 className='w-[85%] text-4xl italic font-light '>Interface Friendly Learning At</h2>
                <h2 className="w-[85%] text-4xl font-bold text-blue-500 hero-name text-right">ClassABCD</h2>
                <p className="mt-4 leading-8">The classABCD is an online language education website teaching English and Chinese.
                    It is the best platform to learn English, Chinese and many other languages. We provide various kinds of language
                    courses..</p>
            </div>
            <div className="w-[49%]">
                <img src={Img1} alt="" />
            </div>
        </section>

        <section className='mt-[25vh] flex justify-between items-center w-4/5 ml-[10%] '>
            <div className="w-[49%] relative">
                <img src={Img2} alt="" />
                <div className='absolute top-0 w-full h-full flex justify-center items-center gap-10'>
                    <div className="text-center">
                        <p className='text-orange-600 text-3xl'>2000+</p>
                        <p className='font-bold text-xl'>Students</p>
                    </div>
                    <div className="text-center">
                        <p className='text-orange-600 text-3xl'>80+</p>
                        <p className='font-bold text-xl'>Courses</p>
                    </div>
                    <div className="text-center">
                        <p className='text-orange-600 text-3xl'>2</p>
                        <p className='font-bold text-xl'>Languages</p>
                    </div>
                </div>
            </div>
            <div className="w-[49%] pl-12">
                <h2 className='font-bold text-3xl mb-4'>Why US ?</h2>
                <ul className='text-gray-400 leading-8 font-mono '>
                    <li className="list-[square]">We provide students with an engaging and helpful learning experience</li>
                    <li className="list-[square]">Help you get a level of fluency within a short time.</li>
                    <li className="list-[square]">Our classes are available to anyone with an internet connection, regardless of age or location.</li>
                    <li className="list-[square]">We believe in an effective, low-cost education and so we've created a simple, powerful system that uses a new approach to language learning.</li>
                    <li className="list-[square]"> Classes are small and the curriculum is innovative and engaging</li>
                </ul>
            </div>

        </section>


        <section className='mt-[25vh]'>
            <h2 className='text-center text-4xl mb-8'>Choose Your
                <span className="font-bold"> English Language Course</span></h2>

            <section className='grid grid-cols-3 gap-6 justify-items-center h-[100vh]  items-center w-full border courses_list-wrapper'>
                {Courses.map(course => (<CoursesList course={course} />))}
            </section>

        </section>

        <section className='w-[70%] ml-[15%] mt-[40vh] flex justify-around text-center text-5xl pb-8'>
            <h2 className='w-[70%]'>Our <span className='font-bold'>Video</span></h2>
            <h2 className='w-[30%]'>Our <span className='font-bold'>Courses</span></h2>
        </section>

        <section className='w-[70%] ml-[15%] border flex justify-around'>
            <div className='w-[70%]'>
                <ReactPlayer
                    className='react-player'
                    url={vid}
                    width='100%'
                    height='100%'
                    playing="true"
                    controls="true"
                />
            </div>
            <div className='w-[30%] flex justify-center items-center gap-4 video_sec'>
                <div className='ml-8'>
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





