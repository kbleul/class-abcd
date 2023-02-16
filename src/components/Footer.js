import { useState } from "react"
import { useNavigate } from "react-router-dom"



const Footer = () => {

    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    return (
        <article className="fotter_wrapper min-h-[100vh] overflow-hidden mt-[25vh] ">
            <section className="flex justify-center items-center">
                <section className="w-4/5 ml-[10%]  relative">
                    <h2 className="text-white text-4xl font-mono mb-8">Our <span className="font-bold">Directions</span></h2>
                    <div className="h-[80vh]">
                        <iframe title="map" className="h-full w-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.495758873587!2d-74.0005340845242!3d40.72911557933012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25991b7473067%3A0x59fbd02f7b519ce8!2s550+LaGuardia+Pl%2C+New+York%2C+NY+10012%2C+USA!5e0!3m2!1sen!2sin!4v1516166447283"
                        ></iframe>
                    </div>

                    <div className="absolute top-[50%] right-[-18%] bg-teal-500 text-white p-2">
                        <h4 className="font-bold ml-[15%] text-3xl">Address</h4>
                        <p className=" ml-[15%]">21 street, Bole, AddisAbaba, Ethiopia</p>
                    </div>
                </section>
                <section className="w-4/5 ml-[10%] ">
                    <div className="text-white mt-[40vh]">
                        <h2 className="mr-[10%] text-white text-4xl font-mono mb-8 text-right">Get In <span className="font-bold"> Touch</span></h2>
                        <p className="mr-[10%]  leading-7 text-gray-200 pr-8 border-r-2 border-teal-500  text-right">If you have any questions about the services we provide simply use the form below.
                            We try and respond to all queries and comments within 24 hours.</p>
                    </div>

                    <div className="h-[70vh] text-white text-2xl mt-[20vh]">
                        <h4 className="w-4/5 ml-[10%] underline pb-2 text-right">Subscribe Our Newsletter</h4>
                        <input className="mt-6 px-2 py-2 bg-inherit w-3/5 ml-[30%] border text-base"
                            onChange={e => setEmail(e.target.value)} type="email" value={email} placeholder="Enter your email" />
                        <div className="w-4/5 ml-[10%] flex items-end justify-end mt-4">
                            <button className="px-4 py-2 font-bold block text-sm cursor-pointer rounded-md bg-white hover:bg-slate-300 text-black">Submit</button>
                        </div>
                    </div>
                </section>
            </section>

            <section className="footer_nav-wrapper text-white flex justify-center items-center">
                <div className="w-1/2 border-r-2 ">
                    <h2 className='text-6xl italic text-white font-bold text-center'>class<span className='text-orange-500'>ABCD</span></h2>
                </div>
                <div className="w-1/2 flex text-gray-400 ">
                    <div className="py-8 ml-[30%]">
                        <h4 className="text-lg font-bold">Compony</h4>
                        <ul className="mt-2 ">
                            <li onClick={() => navigate("/")} className="py-2 cursor-pointer hover:text-white">Home</li>
                            <li onClick={() => navigate("/about-us")} className="py-2 cursor-pointer hover:text-white">About</li>
                            <li onClick={() => navigate("/faqs")} className="py-2 cursor-pointer hover:text-white">FAQs</li>
                            <li onClick={() => navigate("/contact-us")} className="py-2 cursor-pointer hover:text-white">Contact</li>
                        </ul>
                    </div>
                    <div className="py-8 ml-[20%]">
                        <h4 className="text-lg font-bold">Courses</h4>
                        <ul className="mt-2 ">
                            <li className="py-2 cursor-pointer hover:text-white">English</li>
                            <li className="py-2 cursor-pointer hover:text-white">Chinise</li>
                        </ul>
                    </div>
                </div>
            </section>

            <p className=" text-white text-xs text-center py-2">© 2022 ClassABCD. All Rights Reserved</p>
        </article>
    )
}

export default Footer