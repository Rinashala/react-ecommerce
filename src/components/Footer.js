import React from "react";

function Footer() {
    return (
        <footer className="flex  flex-col md:flex-row justify-between items-center w-full p-10 bg-pink-400 text-white text-center">
            <p>© 2025 Ecommerce. Your go-to shopping platform.</p>
            <p>
                Contact us:{" "}
                <a href="mailto:support@ecommerce.com" className="text-pink-800 hover:underline">
                    support@ecommerce.com
                </a>
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <a href="https://facebook.com" target="_blank" >
                    Facebook
                </a>
                <span>|</span>
                <a href="https://twitter.com" target="_blank" >
                    Twitter
                </a>
                <span>|</span>
                <a href="https://instagram.com" target="_blank" >
                    Instagram
                </a>
            </div>
        </footer>
    );
}

export default Footer;
