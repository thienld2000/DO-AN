import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Đầu bếp" />
      <h1 className="headtext__cormorant">Điều chúng tôi tin tưởng</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Chất lượng là trên hết, sự hài lòng của khách hàng là ưu tiên hàng đầu</p>
        </div>
        <p className="p__opensans"> Vui lòng khách đến, vừa lòng khách đi. Phục vụ nhanh nhẹn, tận tâm. Không để khách hàng chờ đợi lâu. Đồ ăn đảm bảo chất lượng và an toàn thực phẩm </p>
      </div>

      <div className="app__chef-sign">
        <p>Takayoshi Yamaguchi </p>
        <p className="p__opensans">Đầu bếp kỳ cựu </p>
        
      </div>
    </div>
  </div>
);

export default Chef;
