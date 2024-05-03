import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Thực đơn phù hợp với khẩu vị của bạn" />
      <h1 className="headtext__cormorant"> Quyển Menu&apos;s </h1>
    </div>
    <div className="app__specialMenu-menu">
        <MenuItem/>
    </div>  
  </div>
);

export default SpecialMenu;