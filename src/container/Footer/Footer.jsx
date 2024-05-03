import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Thông tin liên hệ</h1>
        <p className="p__opensans">Yakimono Linh Đàm, Ô 5, dãy A, lô TT3 dự án Tây Nam hồ Linh Đàm, Hà Nội</p>
        <p className="p__opensans">0833086685</p>
        <p className="p__opensans">0964698674</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="p__opensans">&quot;Cách tốt nhất để tìm lại chính mình là quên mình để phục vụ người khác.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Giờ mở cửa</h1>
        <p className="p__opensans">Thứ 2 - Thứ 6:</p>
        <p className="p__opensans">10:30 am - 14:00 pm and 17:30pm - 22:00 pm</p>
        <p className="p__opensans">Thứ 7 - Chủ nhật:</p>
        <p className="p__opensans">10:30 am - 14:00 pm and 17:30pm - 22:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Yakimono Linh Đàm - IRASSHAIMASE (いらっしゃいませ).</p>
    </div>

  </div>
);

export default Footer;
