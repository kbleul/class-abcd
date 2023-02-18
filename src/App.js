import React, { useState, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import English from "./pages/English";
import Chinese from "./pages/Chinese";

function App() {
  const [isloggedIn, setisloggedIn] = useState(false)

  useEffect(() => {
    localStorage.getItem("isSignedIn") && setisloggedIn(true)
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header isloggedIn={isloggedIn} setisloggedIn={setisloggedIn} />
        <Routes>

          <Route path="/" element={<Home isloggedIn={isloggedIn} setisloggedIn={setisloggedIn} />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/english-course" element={<English />} />
          <Route path="/chinese-course" element={<Chinese />} />

        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
