

export const ProductPreviewCard = ({ product, }) => {


    return (
        <div className="w-100 p-4 m-2 rounded text-white bg-gradient-primary bg-transparent text-center">
            <img src={product.imageUrl} alt={product.name} className="img-fluid" />
            <h2 className="pb-2 text-lg">{product.name}</h2>
            <p className="mb-2" style={{ maxHeight: '80px', overflow: 'hidden' }}>{product.description}</p>
        </div>


    )
}