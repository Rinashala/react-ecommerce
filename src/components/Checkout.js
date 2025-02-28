import React, { useState, useEffect } from "react";

function Checkout({ cart, setCart, activeButtons }) {
    const [totalPrice, setTotalPrice] = useState(0);

    const RemoveItem = function (id) {
        const updatedCart = cart.filter((product) => product.id !== id);
        setCart(updatedCart);
        activeButtons[id] = !activeButtons[id];
    };

    function calculateTotalPrice() {
        let total = 0;
        cart.forEach((product) => {
            total += product.price;
        });

        const roundedTotal = Math.round(total * 100) / 100;
        setTotalPrice(roundedTotal);
    }

    useEffect(() => {
        calculateTotalPrice();
    }, [cart]);

    const Checkout = function () {
        alert("Thank you for shopping with us!");
        setCart([]);
        Object.keys(activeButtons).forEach((key) => {
            activeButtons[key] = false;
        });


    }
    return (<div className=" min-h-min grid justify-center items-center ">


        {cart.length === 0 ? (<div className="grid justify-center items-center h-full"><p className="text-center">No items in the cart</p></div>) : (<>
            <div><ul className="grid grid-cols-[1fr] min-h-full items-center justify-center p-4 m-4 border border-gray-300 rounded-lg shadow-lg transition-transform duration-300">
                {cart.map((product, index) => (
                    <li className="relative grid grid-cols-1 md:grid-cols-2 m-2" key={product.id}>
                        <div className="flex gap-8">
                            <p className="hidden sm:block">{index + 1}.</p>
                            <figure className="w-1/6 md:w-1/4 object-cover rounded-md">
                                <img
                                    src={`/react-ecommerce/products-api/images/${product.imageUrl}`}
                                    alt={product.name}
                                    className="object-cover rounded-md"
                                />
                            </figure>
                            <div className="grid gap-8 justify-center items-center">
                                <div className="grid">
                                    <h5 className="text-xl font-semibold">{product.name}</h5>
                                    <p className="text-gray-600">{product.price}$</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 m-2">
                            <button
                                onClick={() => RemoveItem(product.id)}
                                className="text-xl font-bold text-pink-600 hover:text-pink-400 focus:outline-none">
                                X
                            </button>
                        </div>
                    </li>



                ))}
                <li className="  p-4 mt-7 ml-7 ">
                    <hr />
                    <div className="grid grid-cols-[1fr_1fr] mt-7 ">
                        <div className=" flex gap-8">
                            <p>Total Price :</p>
                            <p>{totalPrice}$</p>
                        </div>
                        <div className="grid items-center justify-center P-4">
                            <button onClick={Checkout} className="h-8 w-20 text-[10px] rounded-md font-semibold bg-pink-600 text-white hover:bg-pink-400">
                                CHECKOUT
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
            </div ></>)}
    </div>);
}

export default Checkout;
