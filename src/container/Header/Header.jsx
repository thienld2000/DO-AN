import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Nơi thưởng thức món nướng phong cách nhật</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Chìa khóa tìm đến nơi thưởng thức món nướng trong không gian và phong cách nhật bản ngay giữa lòng thủ đô hà nội !! </p>
      <button type="button" className="custom__button">
        <a href="#menu" style={{ textDecoration: 'none', color: 'inherit' }}>Trải nghiệm menu</a>
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.gioithieu_yakimono} alt="header_img" />
    </div>
  </div>
);

export default Header;
