import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  // xử lý cuộn thanh navbar 
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;
    const stickyNavbar = () => {

      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener('scroll', stickyNavbar);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', stickyNavbar);
    };
  }, []);


  const handleBooking = () => {

  }
  return (
    <nav className="app__navbar" id="navbar">
      <div className="app__navbar-logo">
        <Link to ="/"><img src={images.logo_yakimono} alt="app__logo" /></Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to ="/">Home</Link></li>
        <li className="p__opensans"><a href="#about">About Us</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Khuyến Mãi</a></li>
        <li className="p__opensans"><a href="#contact">Liên hệ</a></li>
       
      </ul>
      <div className="app__navbar-login">
      <Link to="/blog" ><button className="p__opensans btn-login">Pos t </button></Link>
        <Link to="/login" ><button className="p__opensans btn-login">Log In </button></Link>
        <div />
        <Link to="/booking"><button className="p__opensans btn_booking">Đặt Bàn</button></Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li ><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
