import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { Link } from 'react-router-dom';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Liên hệ" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Tìm đến chúng tôi</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Yakimono Linh Đàm, Ô 5, Dãy A, Lô TT3 Dự Án Tây Nam Hồ Linh Đàm, Hà Nội</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Giờ mở của</p>
        <p className="p__opensans">Thứ 2 - Thứ 6: 10:30 Am - 14:00 Pm và 17:30pm - 22:00 Pm </p>
        <p className="p__opensans">Thú 7 - Chủ nhật: 10:30 Am - 14:00 Pm và 17:30pm - 22:00 Pm</p>
      </div>
      <Link to="/booking"><button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Đặt bàn ngay </button></Link>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
