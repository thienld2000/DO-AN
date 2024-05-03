import { SubHeading } from '../../components';
import './Khuyenmai.css';
import React from 'react'
import ProductPreview from '../../components/Product/ProductPreview.jsx';


const Khuyenmai = () => {

  return (
    <>
      <div className="app__bg section__padding" id="khuyenmai">
        <div className="app__wrapper_info">
          <SubHeading title="Chương trình khuyến mãi và ưu đãi" />
          <h1 className="headtext__cormorant">Khuyến mãi và ưu đãi</h1>
        </div>

        <div className='mt-5'>
          <ProductPreview />
        </div>
      </div>

    </>
  )
}
export default Khuyenmai;
