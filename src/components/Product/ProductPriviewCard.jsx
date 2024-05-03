import React from 'react';

const ProductPreviewCard = ({ product }) => {
    const formatDateTime = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        const formattedDateTime = `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()} ${dateTime.getHours()}:${dateTime.getMinutes()}`;
        return formattedDateTime;
    };
    return (
        <div className="p-4 mx-2 d-flex flex-column text-center text-white-50">
            <img src={product.imageUrl} className="align-item-center"  style={{ width: "100%", height: 400,cursor: 'pointer' }} />
            <h4 className=" mt-2 pb-2 ">{product.name}</h4>
            <h5 className="pb-2 ">Ngày bắt đầu: {formatDateTime(product.startDate)} </h5>
            <h5 className="pb-2 ">Ngày kết thúc: {formatDateTime(product.endDate)} </h5>
        </div>
    );
};
export default ProductPreviewCard;