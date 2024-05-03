import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">trang về chúng tôi</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Sôi nổi, phóng khoáng, vui nhộn chính là tinh thần mà Yakimono – Quán thịt nướng Nhật Bản muốn mang đến cho bạn.

          Trái ngược với khung cảnh yên bình bên ngoài, chỉ cần đẩy cánh cửa nhà hàng bước vào, một không gian ẩm thực đường phố đậm chất Nhật như mở ra trước mắt. Không khí nhộn nhịp, tiếng nói chuyện huyên náo, âm thanh xì xèo của thịt trên vỉ nướng, cùng mùi hương tỏa ra thơm nức, chắc chắn sẽ khiến bạn hoàn toàn bị mê hoặc.

          Hãy gác lại âu lo, thoải mái tận hưởng không khí sôi nổi và thưởng thức trọn vẹn hương vị lẩu nướng ngon tuyệt tại Yakimono bạn nhé!</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
        {/* width={109} height={1406} */}
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant"> Lịch sử</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Yakimono là một thuật ngữ tiếng Nhật để chỉ một loạt các món ăn có thịt được nấu bằng cách tiếp xúc trực tiếp với lửa hoặc nhiệt, chẳng hạn như nướng hoặc nướng, hoặc chiên trên chảo. Món Yakimono thường được nấu thành những miếng nhỏ xiên thịt vào xiên tre. Yakitori là một trong những món Yakimono nổi tiếng nhất ở phương Tây; đó là gà nướng xiên. Các món Yakimono khác sẽ sử dụng thịt bò, cá, các loại hạt, nấm hoặc rau củ.
          Thịt thường được ướp muối hoặc ướp trước.
          Các món Yakimono được phục vụ nóng ngay lập tức, thường là món khai vị hoặc là một phần của món khai vị.
        </p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
