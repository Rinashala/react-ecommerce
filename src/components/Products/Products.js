import React, { useEffect, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cart, setCart] = useState([]);
    const [activeButtons, setActiveButtons] = useState(false);
    const pageSize = 6;

    useEffect(() => {
        fetch("/react-ecommerce/products-api/api/products.json")
            .then((res) => res.json())
            .then((res) => setProducts(res));
    }, []);

    const handleAddToCart = (product) => {
        setCart((prevState) => [...prevState, product]);
        setActiveButtons((prevState) => ({
            ...prevState,
            [product.id]: !prevState[product.id],
        }));
    };

    const searchedProducts = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredProducts = products.filter((product) => {
            return product.name.toLowerCase().includes(searchValue);
        });
        setProducts(filteredProducts);
    };
    useEffect(() => {
        console.log("Updated Cart:", cart);
    }, [cart]);

    const filteredProducts = useMemo(() => {
        return products.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    }, [currentPage, products, pageSize]);

    const numberOfPages = useMemo(() => {
        return Math.ceil(products.length / pageSize);
    }, [products, pageSize]);

    return (
        <div className="p-12 w-full">
            <span className="text-2xl font-semibold">Products</span> <br />
            <input type="text" onChange={searchedProducts} placeholder="Search products" className="w-1/4 p-2 border border-gray-300 rounded-lg m-2" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <li
                        key={product.id}
                        className="flex flex-col items-center p-6 border border-gray-300 rounded-lg shadow-md hover:scale-105 transition-transform"
                    >
                        <figure className="flex flex-col items-center">
                            <img
                                src={`/react-ecommerce/products-api/images/${product.imageUrl}`}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <div className="flex justify-between w-full mt-4 font-semibold text-lg">
                                <figcaption>{product.name}</figcaption>
                                <p>${product.price}</p>
                            </div>
                            <div className="flex justify-between w-full mt-4">
                                <NavLink
                                    to={`/products/${product.id}`}
                                    className="text-pink-400 hover:underline"
                                >
                                    Details
                                </NavLink>
                                <button
                                    onClick={() => handleAddToCart(product)} disabled={activeButtons[product.id]}
                                    className={`px-4 py-2 rounded-md font-semibold transition ${activeButtons[product.id]
                                        ? "bg-pink-600 text-white"
                                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                        }`}
                                >
                                    {activeButtons[product.id] ? "Added" : "Add to Cart"}
                                </button>
                            </div>
                        </figure>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center gap-4 mt-8">
                {Array.from({ length: numberOfPages }).map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className="bg-pink-400 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-pink-600 transition"
                    >
                        {i + 1}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Products;
