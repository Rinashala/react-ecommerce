import React, { useEffect, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";

function Products({ products, cart }) {
    const [searchedFilteredProducts, setSearchedFilteredProducts] = useState(products);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    useEffect(() => {
        console.log("Updated Cart:", cart);
    }, [cart]);

    const filteredProducts = useMemo(() => {
        return searchedFilteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    }, [currentPage, searchedFilteredProducts, pageSize]);

    const numberOfPages = useMemo(() => {
        return Math.ceil(searchedFilteredProducts.length / pageSize);
    }, [searchedFilteredProducts, pageSize]);

    function SearchedProducts(e) {
        const searchValue = e.target.value.toLowerCase();
        if (searchValue) {
            const searchedProducts = products.filter((product) => {
                return product.name.toLowerCase().includes(searchValue);
            });
            setSearchedFilteredProducts(searchedProducts);
        } else {
            setSearchedFilteredProducts(products);
        }
    }

    return (
        <div className="p-12 w-full">
            <div className="flex items-center mb-8 justify-between">
                <label htmlFor="search" className="text-lg font-semibold hidden sm:block">Search products</label>
                <span className="text-lg font-semibold hidden sm:block">{searchedFilteredProducts.length} products</span>
                <input
                    onChange={SearchedProducts}
                    type="text"
                    placeholder="Search products"
                    className="w-full sm:w-auto p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <NavLink
                        key={product.id}
                        to={`/products/${product.id}`}
                    >
                        <li className="flex flex-col items-center p-6 border border-gray-300 rounded-lg shadow-md hover:scale-105 transition-transform h-full">
                            <figure className="flex flex-col items-center">
                                <img
                                    src={`/react-ecommerce/products-api/images/${product.imageUrl}`}
                                    alt={product.name}
                                    className="w-full h-48 object-contain rounded-md mb-4"
                                />
                                <div className="flex justify-between w-full font-semibold mt-2 gap-8">
                                    <figcaption>{product.name}</figcaption>
                                    <p>${product.price}</p>
                                </div>
                            </figure>
                        </li>
                    </NavLink>
                ))}
            </ul>
            <div className="flex justify-center gap-4 mt-8">
                {Array.from({ length: numberOfPages }).map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`text-white px-4 py-2 rounded-lg cursor-pointer ${currentPage === i + 1 ? "bg-pink-600" : "bg-pink-400  hover:bg-pink-600 transition"}`}
                    >
                        {i + 1}
                    </span>
                ))}
            </div>        </div>
    );
}

export default Products;
