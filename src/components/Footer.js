
import { useNavigate } from "react-router-dom"

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {

    const navigate = useNavigate()

    return (<>


        <section className="mt-[15vh] md:mt-[30vh] footer_nav-wrapper text-white flex flex-col md:flex-row justify-center items-center bg-black">
            <div className="md:w-[30%] border-r-2 mt-4 md:mt-4">
                <h2 className='text-4xl md:text-6xl italic text-white font-bold text-center'>class<span className='text-orange-500'>ABCD</span></h2>
                <p className="text-sm text-gray-300 mt-8 leading-8 w-[90%] md:w-3/5 ml-[8%]  md:ml-[20%] ">Our mission is to prove that learning a language is fun and rewarding !</p>
            </div>
            <div className="md:w-[70%] flex flex-col md:flex-row items-center justify-evenly text-gray-400 ">
                <div className="py-8 md:mt-[5vh] border-b md:border-none">
                    <h4 className="text-lg font-bold">Compony</h4>
                    <ul className="mt-2 text-center">
                        <li onClick={() => navigate("/")} className="py-2  cursor-pointer hover:text-white">Home</li>
                        <li onClick={() => navigate("/about-us")} className="py-2 cursor-pointer hover:text-white">About</li>
                        <li onClick={() => navigate("/faqs")} className="py-2 cursor-pointer hover:text-white">FAQs</li>
                        <li onClick={() => navigate("/contact-us")} className="py-2 cursor-pointer hover:text-white">Contact</li>
                    </ul>
                </div>
                <div className="py-8 md:mt-[5vh] border-b md:border-none">
                    <h4 className="text-lg font-bold">Courses</h4>
                    <ul className="mt-2 ">
                        <li onClick={() => navigate("/english-course")} className="py-2 cursor-pointer hover:text-white">English</li>
                        <li onClick={() => navigate("/chinese-course")} className="py-2 cursor-pointer hover:text-white">Chinise</li>
                    </ul>
                </div>
                <div className="py-8">
                    <h2 className="font-bold text-2xl text-center py-4">Contact Us</h2>
                    <div className="h-[20vh]">
                        <iframe title="map" className="h-full w-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.495758873587!2d-74.0005340845242!3d40.72911557933012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25991b7473067%3A0x59fbd02f7b519ce8!2s550+LaGuardia+Pl%2C+New+York%2C+NY+10012%2C+USA!5e0!3m2!1sen!2sin!4v1516166447283"
                        ></iframe>
                    </div>
                    <div className="bg-gray-900 text-white p-2">
                        <h4 className="font-bold ml-[15%] text-sm">Address</h4>
                        <div className="flex mt-4 pl-4 text-sm text-gray-300 items-center">
                            <LocationOnIcon />
                            <p className=" ml-[15%]">21 street, Bole, AddisAbaba, Ethiopia</p>
                        </div>
                        <div className="flex mt-4 pl-4 text-sm text-gray-300 items-center">
                            <MailIcon />
                            <p className=" ml-[15%]"> info@classabcd.com</p>
                        </div>
                        <div className="flex mt-4 pl-4 text-sm text-gray-300 items-center">
                            <LocalPhoneIcon />
                            <p className=" ml-[15%]">+2519-567-890</p>
                        </div>
                    </div>

                </div>
            </div>
        </section >

        <p className="text-white bg-black text-xs text-center">© 2022 ClassABCD. All Rights Reserved </p>

    </>
    )
}

export default Footer