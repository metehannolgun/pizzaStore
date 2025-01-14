import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Cart() {
    const [activeCart, setActiveCart] = useState(false); // Sepetin açık olup olmadığını kontrol etmek için bir state tanımlıyoruz
    const cartItems = useSelector(state => state.cart.cart);//redux store'dan cart'ı çekiyoruz
    const totalQty = cartItems.reduce((totalQty,item)=>totalQty+item.qty,0);//cartItems dizisindeki her bir item'ın qty'sini topluyoruz
    const totalPrice = cartItems.reduce((total,item)=>total+item.qty*item.price,0);//cartItems dizisindeki her bir item'ın qty'sini price'ı ile çarpıp topluyoruz

    const navigate = useNavigate();

    return (
        <>
            <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${activeCart ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 z-50`}>
                <div className='flex justify-between items-center my-3'>
                    <span className='text-xl font-bold text-gray-800'>My order</span>
                    <IoCloseSharp
                        onClick={() => setActiveCart(!activeCart)}
                        className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer'
                    />
                </div>
                
                {cartItems.length > 0 ? cartItems.map((food, index) => (
                    <ItemCard
                        key={food.id || index} // Benzersiz bir key sağlamak için id veya index kullanılır
                        id={food.id}
                        name={food.name}
                        price={food.price}
                        img={food.img}
                        qty={food.qty}
                    />
                )) : <h2 className='text-xl text-gray-800 text-center'>Your cart is empty</h2>}
                
                <div className='absolute bottom-0'>
                    <h3 className='font-semibold text-gray-800'>Items : {totalQty}</h3>
                    <h3 className='font-semibold text-gray-800'>Total Amount : {totalPrice} </h3>
                    <hr className='w-[90vw] lg:w-[18vw] my-2' />
                    <button onClick={()=>navigate("/success")} className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'>
                        Checkout
                    </button>
                </div>
            </div>
            <FaShoppingCart
                onClick={() => setActiveCart(!activeCart)}
                className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4
                            ${totalQty>0 && 'animate-bounce delay-500 transtation-all'} 
                    `} // Sepette ürün varsa animasyon ekler
            />
        </>
    );
}

export default Cart;