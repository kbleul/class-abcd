import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />

        </Routes>

        <Footer />

      </BrowserRouter>
    </>

  );
}

export default App;
