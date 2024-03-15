import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductPreviewCard } from './ProductPriviewCard';

const ProductPriview = () => {
    const [products,setProducts]= useState([]);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      useEffect(()=>{
        fetch('http://localhost:8000/api/products-by-categories')
        .then(response => response.json())
        .then(data =>setProducts(data?.data))
        .catch(e=>console.log(e))

      },[])
    return (
      <div className="container mx-auto pb-4" style={{ maxWidth: '66.66%',color: 'white', backgroundColor: 'black' }}>
            <Carousel responsive={responsive}>
                {products.map((category, index) => (
                    category.products.map((product, productIndex) => (
                        product.category.name === "buffet" && (
                            <div className="w-100 p-3" key={productIndex}>
                                <ProductPreviewCard product={product} />
                            </div>
                        )
                    )
                    )
                ))}
            </Carousel>
        </div>
    )
}

export default ProductPriview