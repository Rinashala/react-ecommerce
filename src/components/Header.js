import React from "react";
import { NavLink } from "react-router-dom";

function Header({ cart }) {
    return (
        <header className="flex justify-between items-center bg-pink-400 text-white px-6 py-4 shadow-md">
            <NavLink to="/products"><h5 className="text-lg font-semibold hidden sm:block">Rina</h5></NavLink>

            <nav className="flex gap-6">
                <NavLink to="/products" className="hover:text-pink-600 font-semibold transition">Home</NavLink>
                <NavLink to="/checkout" className="hover:text-pink-600 font-semibold transition relative">Checkout
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">
                            {cart.length}
                        </span>
                    )}</NavLink>
                <NavLink to="/login" className="hover:text-pink-600 font-semibold transition">Login</NavLink>
            </nav>

            <NavLink to="/checkout">
            </NavLink>
        </header>
    );
}

export default Header;
