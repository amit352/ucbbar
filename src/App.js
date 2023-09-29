import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import Chefs from './components/Chefs';
import Specials from './components/Specials';
import Events from './components/Events';
import BookTable from './components/BookTable';
import Testimonials from './components/Testimonials';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  React.useEffect(()=> {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);
  return (
    <div className="App">
      <Topbar/>
      <Navbar/>
      <Hero/>
      <main id="main">
        <About/>
        <WhyUs/>
        <Menu/>
        <Specials/>
        <Events/>
        <BookTable/>
        <Testimonials/>
        <Gallery/>
        <Chefs/>
        <ContactUs/>
        {/* <div id="preloader"></div> */}
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
