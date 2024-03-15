import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Yakimono Linh Đàm, Ô 5, Dãy A, Lô TT3 Dự Án Tây Nam Hồ Linh Đàm, Hà Nội</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Monday-Friday: 10:30 Am - 14:00 Pm And 17:30pm - 22:00 Pm </p>
        <p className="p__opensans">Saturday-Sunday: 10:30 Am - 14:00 Pm And 17:30pm - 22:00 Pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
