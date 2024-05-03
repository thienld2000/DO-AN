import HTMLFlipBook from "react-pageflip";
import "./ProductDetailCard.css"
import React from "react";

const ProductDetailCard = ({ product }) => {
    return (
        <div className="app__menuitem-sub mx-auto">
            <HTMLFlipBook
                width={600}
                height={550}
                minWidth={600}
                maxWidth={1000}
                minHeight={420}
                maxHeight={1350}
                showCover={true}
                flippingTime={1000}
                style={{ margin: "0 auto" }}
                maxShadowOpacity={0.5}
                className="album-web"
            >
                {product.imageUrl.map((image, index) => (
                    <article key={index} className="flip-page">
                        <img src={image} alt={`Product ${index}`} />
                        <b className="w-100 fs-4 d-flex justify-content-center text-warning">Trang thứ: {index + 1}</b>
                    </article>
                ))}
            </HTMLFlipBook>
        </div>
    );
}


export default ProductDetailCard;