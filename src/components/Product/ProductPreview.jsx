import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductPreviewCard from './ProductPriviewCard';
import "./ProductPreview.css"

const ProductPreview = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 3 
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
            slidesToSlide: 1 
        }
    };

    useEffect(() => {
        fetch('http://localhost:8000/api/khuyen_mai/khuyen_mais')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="app__header " >
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="carousel">
                    <Carousel
                        responsive={responsive}
                        cellAlign={"left"}
                        disableEdgeSwiping={true}
                        wrapAround={true}
                        autoplay={true}
                    >
                        {products.map((product, index) => (
                            <div className="" key={index}>
                                <ProductPreviewCard product={product} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}
        </div>
    );
};

export default ProductPreview;