import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Product({ handleAddToCart, activeButtons = {} }) {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`/react-ecommerce/products-api/api/products/${id}.json`)
            .then(res => res.json())
            .then(res => {
                setProduct(res);
                setLoading(false);
            })
            .catch(err => {
                setError('Error fetching product data');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="border-t-4 border-blue-500 w-16 h-16 border-solid rounded-full animate-spin"></div>
                <p className="mt-4">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>{error}</p>
            </div>
        );
    }

    if (!product || !product.imageUrl) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>No product found or image data is missing.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-[1fr_1fr] items-center justify-center p-4 m-4 border border-gray-300 rounded-lg shadow-lg transition-transform duration-300">
            <figure className="w-2/3 object-cover rounded-md">
                <img
                    src={`/react-ecommerce/products-api/images/${product.imageUrl}`}
                    alt={product.name}
                    className="object-cover rounded-md"
                />
            </figure>
            <div className='grid gap-8'>
                <h5 className="text-xl font-semibold">{product.name}</h5>
                <p className="text-gray-600">{product.description}</p>
                <button
                    onClick={() => handleAddToCart(product)}
                    className={`px-4 py-2 rounded-md font-semibold transition ${activeButtons[product.id]
                        ? "bg-pink-600 text-white"
                        : "bg-pink-600 text-white hover:bg-pink-500"
                        }`}
                >
                    {activeButtons[product.id] ? "Added" : "Add to Cart"}
                </button>
            </div>
        </div>
    );
}

export default Product;
