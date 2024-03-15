
const ProductDetailCard = ({ product }) => {
    return (
        <div className="app__menuitem-sub">
            <div className="d-flex flex-column justify-content-between align-items-center">
                <h2 className="text-3xl">{product.name}</h2>
                <p className="text-2xl text-gray-500">
                    {product.description}
                </p>
                <div className="d-flex justify-content-between">
                    <div className="text-3xl text-black">{product.price}</div>
                </div>
            </div>
            <div className="w-100 d-flex justify-content-center">
                <img src={product.imageUrl} className="w-40 h-40 rounded-xl object-cover" alt={product.name} />
            </div>
        </div>
    )
}

export default ProductDetailCard;