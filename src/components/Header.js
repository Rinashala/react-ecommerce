import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="flex justify-between items-center bg-pink-400 text-white px-6 py-4 shadow-md">
            <h5 className="text-lg font-semibold">Ecommerce</h5>

            <nav className="flex gap-6">
                <NavLink to="/products" className="hover:text-pink-600 font-semibold transition">Home</NavLink>
                <NavLink to="/checkout" className="hover:text-pink-600 font-semibold transition">Checkout</NavLink>
                <NavLink to="/login" className="hover:text-pink-600 font-semibold transition">Login</NavLink>
            </nav>

            <NavLink to="/checkout">
                <img src="../../public/products-api/images/shoppigCart.png" alt="" className="w-24" />
            </NavLink>
        </header>
    );
}

export default Header;
