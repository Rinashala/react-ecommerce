import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product({ handleAddToCart, activeButtons = {} }) {
    let { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        if (!id) return;

        fetch(`/react-ecommerce/products-api/api/products/${id}.json`)
            .then(res => res.json())
            .then(res => setProduct(res))
            .catch(err => console.error("Error fetching product:", err));
    }, [id]);
    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Product not found.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] h-full items-center justify-center p-4 m-4 border border-gray-300 rounded-lg shadow-lg transition-transform duration-300">
            <figure className="w-full md:w-2/3 object-cover rounded-md">
                <img
                    src={`/react-ecommerce/products-api/images/${product.imageUrl}`}
                    alt={product.name}
                    className="w-full max-w-xs md:max-w-none h-auto object-cover rounded-md"
                />
            </figure>
            <div className="grid gap-8 w-full">
                <h5 className="text-xl font-semibold">{product.name}</h5>
                <p className="text-gray-400">{product.description}</p>
                <button
                    onClick={() => handleAddToCart(product)} disabled={activeButtons[product.id]}
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
