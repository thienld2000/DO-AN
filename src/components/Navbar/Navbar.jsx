import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../stores/user/authSlice';

const Navbar = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(false);

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
    return () => {
      window.removeEventListener('scroll', stickyNavbar);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="app__navbar " id="navbar">
      <div className="app__navbar-logo">
        <Link to="/"><img src={images.logo_yakimono} alt="app__logo" /></Link>
      </div>
      <ul className="app__navbar-links ">
        <li className="p__opensans"><a href="#home"><i className="bi bi-house-door"></i><b> Trang chủ</b></a></li>
        <li className="p__opensans"><a href="#about"><i className="bi bi-people"></i><b> Giới thiệu</b></a></li>
        <li className="p__opensans"><a href="#menu"><i className="bi bi-menu-app"></i><b> Menu</b></a></li>
        <li className="p__opensans"><a href="#khuyenmai"><i className="bi bi-gift"></i><b> Khuyến Mãi</b></a></li>
        <li className="p__opensans"><a href="https://www.facebook.com/Yakimono.com.vn"><i className="bi bi-file-post"></i><b>Page</b></a></li>
        <li className="p__opensans"><a href="#contact"><i className="bi bi-telephone-outbound"></i><b> Liên hệ</b></a></li>
      </ul>
      <div className="app__navbar-login">
        {
          isAuthenticated ? <button onClick={handleLogout} className="p__opensans btn-login"><i className="bi bi-box-arrow-left"></i><b>Đăng xuất</b> </button> :
            (
              <>
                <Link to="/login" ><button className="p__opensans btn-login"><i className="bi bi-box-arrow-in-right"></i><b> Đăng nhập</b> </button></Link>                  
                <div />
                <Link to="/register" ><button className="p__opensans btn-login"><i className="bi bi-person-plus"></i><b>  Đăng ký </b></button></Link>
              </>
            )
        }
         <div />
        <Link to="/booking"><button className="p__opensans btn_booking"><i className="bi bi-cart"></i><b> Đặt Bàn</b></button></Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li ><a href="#home" onClick={() => setToggleMenu(false)}>Trang chủ</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Giới thiệu</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#khuyenmai" onClick={() => setToggleMenu(false)}>Khuyenmai</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Liên hệ</a></li>
              <li>
              {
                  isAuthenticated ? <button onClick={handleLogout} className="p__opensans btn-login"><i className="bi bi-box-arrow-left"></i>
                   Đăng xuất </button> :
                    (
                      <>
                        <Link to="/login" ><button className="p__opensans btn-login"><i className="bi bi-box-arrow-in-right"></i>Đăng nhập </button></Link>                  
                        <div />
                        <Link to="/register" ><button className="p__opensans btn-login mt-5"><i className="bi bi-person-plus"></i>  Đăng ký </button></Link>
                      </>
                    )
                }
              </li>
              <li><Link to="/booking"><button className="p__opensans btn_booking"><i className="bi bi-cart"></i> Đặt Bàn</button></Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
