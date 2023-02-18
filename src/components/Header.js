
import React from 'react'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {
    bindTrigger,
    bindMenu,
} from 'material-ui-popup-state/hooks'
import PopupState from 'material-ui-popup-state'
import { useNavigate } from "react-router-dom"

const Header = ({ isloggedIn, setisloggedIn }) => {

    const navigate = useNavigate()

    return (
        <article>
            <section className='flex flex-col lg:flex-row justify-center items-center border-b border-gray-400 py-2 '>
                <div className="w-full lg:w-2/5">
                    <p className='text-5xl italic text-black font-bold text-center'>class<span className='text-orange-500'>ABCD</span></p>
                </div>
                <nav className="w-full lg:w-3/5 flex justify-center items-center font-bold gap-6 ">
                    <button onClick={() => navigate("/")} className='text-black hover:text-orange-600'>Home</button>
                    <button onClick={() => navigate("/about-us")} className='text-black hover:text-orange-600'>About Us</button>
                    <button onClick={() => navigate("/faqs")} className='text-black hover:text-orange-600'>FAQs</button>
                    <button onClick={() => navigate("/contact-us")} className='text-black hover:text-orange-600'>Contact Us</button>


                    {isloggedIn && <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <Button sx={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",
                                    color: "black",
                                    fontWeight: "bold",
                                    borderBottom: "2px solid gray",
                                    '&:hover, &.Mui-focusVisible': {
                                        backgroundColor: `transparent`,
                                        borderBottom: "2px solid red"
                                    },
                                }} variant="contained" {...bindTrigger(popupState)}>
                                    languages
                                </Button>
                                <Menu {...bindMenu(popupState)} >
                                    <MenuItem onClick={() => {
                                        popupState.close()
                                        navigate("/english-course");
                                    }}>English</MenuItem>
                                    <MenuItem onClick={() => {
                                        popupState.close()
                                        navigate("chinese-course")
                                    }}>Chinise</MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>}


                    {isloggedIn && <button onClick={() => {
                        localStorage.removeItem("isSignedIn")
                        setisloggedIn(false)
                        navigate("/")
                    }} className='text-gray-400 hover:text-orange-600 ml-[10%]'>Logout</button>}


                </nav>
            </section>
        </article >
    )
}

export default Header

// <section className='flex  bg-stone-600 text-gray-400 text-sm items-center py-2'>
// <div className='w-full flex justify-evenly items-center'>
//     <div className='w-4/5 flex items-center'>
//         <div className="w-1/5 flex ml-[10%]">
//             <p>Email : </p>
//             <p className='ml-2'> info@classabcd.com</p>
//         </div>
//         <div className="w-2/5 flex">
//             <p>Phone : </p>
//             <p className='ml-2'>+2519-567-890</p>
//         </div>
//     </div>
//     <div className='w-1/5 flex items-center text-base'>
//         {!localStorage.getItem("isSignedIn") && <button onClick={() => {
//             navigate("/login")
//         }} className='text-white font-bold  '>Login</button>}
//         {localStorage.getItem("isSignedIn") && <button onClick={() => {
//             localStorage.removeItem("isSignedIn");
//             navigate("/login")
//         }} className='text-white font-bold  '>Logout</button>}
//         {/* {  <button onClick={() => {
//             localStorage.removeItem("isSignedIn");
//             navigate("/login")
//         }} className=' font-bold ml-8 text-orange-600'>Log out</button>} */}

//     </div>
// </div>

// </section>