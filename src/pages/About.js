

import React from 'react'
import heroImg1 from "../assets/images/ap-1.jpg"
import heroImg2 from "../assets/images/ap-2.jpg"
import heroImg3 from "../assets/images/ap-3.jpg"
import Footer from '../components/Footer'


const About = () => {
    return (
        <article>

            <main>
                <h2 className="mt-32 text-center text-5xl font-mono mb-8">About <span className="font-bold">Us</span></h2>

                <section>
                    <div className='flex justify-center items-center w-4/5 ml-[10%]'>
                        <img className="w-1/2" src={heroImg1} alt="" />
                        <div className='w-1/2 border'>
                            <h2 className='text-6xl text-teal-700 font-bold py-12 text-center'>Our History</h2>
                            <p className="font-serif leading-8 pl-8 ">ClassABCD is a language-learning platform that lets you learn a target language at your own pace. We give you access to a full range of interactive lessons, as well as personalized learning plans and feedback from qualified teachers. Choose from our wide selection of packages to suit all needs.</p>
                            <p className="font-serif leading-8 pl-8 ">ClassABCD offers an online learning platform which allows you to learn a foreign language at your own pace. We have a team of qualified teachers available to answer your questions and provide feedback. We also offer a variety of packages so you can find the one that's right for you.</p>
                            <p className="font-serif leading-8 pl-8 ">Learning a new language can be painless with the right program. ClassABCD takes the hassle out of learning a language. We provide a step-by-step teaching process that's enjoyable and pain free. You'll be speaking the language of your choice in no time with our innovative methods.</p>
                        </div>
                    </div>
                </section>

                <section className="mt-[25vh]">
                    <div className='flex justify-center items-center w-4/5 ml-[10%]'>
                        <div className="w-1/2">
                            <img className="w-4/5 mb-4" src={heroImg2} alt="" />
                            <img className="w-4/5" src={heroImg3} alt="" />
                        </div>
                        <div className='w-1/2 border'>
                            <h2 className='text-6xl text-teal-700 font-bold py-12 text-center'>Our Mission</h2>
                            <p className="font-serif leading-8 pl-8 ">ClassABCD makes learning a language easy and affordable. We use a variety of proven techniques to help you learn quickly and effectively. You'll be speaking the language of your choice in no time.</p>
                            <br /> <p className="font-serif leading-8 pl-8 ">Don't spend hundreds of dollars on expensive learning aids. ClassABCD provides a free and easy way to learn a language. Just follow our step-by-step process and you'll have the language skills you need in no time.</p>
                            <br /> <p className="font-serif leading-8 pl-8 ">ClassABCD was designed from the ground up to help students learn a language faster and easier than ever. Our passionate team is committed to bringing you the absolute best educational experience.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </article>
    )
}

export default About