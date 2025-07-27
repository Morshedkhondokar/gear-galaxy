import React, { useContext, useState } from 'react';
import CartContext from '../../Context/Cartcontext';
import AddCart from '../AddCart/AddCart';
import { Link } from 'react-router';
import { FaSort } from "react-icons/fa6";

const Cart = () => {
    const {cart,totalPrice,setCart} = useContext(CartContext)
    const [isAscending, setIsAscending] = useState(true)
    

    const sortByPrice = () => {
        const sortedCart = [...cart].sort((a,b)=> isAscending ? a.price - b.price : b.price - a.price)
        setCart(sortedCart)
        setIsAscending(!isAscending)
    }
    return (
        <div className='px-2.5'>
            <div className='flex justify-between mt-6 '> 
                <h1 className='text-3xl font-bold'>Cart</h1>
                <div className=' md:flex gap-2.5 justify-center items-center'>
                    <h1 className=' text-2xl font-bold text-end mr-3'>Total cost: ${totalPrice}</h1>
                   <div className='my-2'>
                     <button
                     onClick={ sortByPrice}
                     className='btn bg-[#f54a00] text-white rounded-xl p-2'>Sort by Price <FaSort/></button>
                    <button className='btn bg-[#f54a00] text-white rounded-xl p-2 ml-2.5'>Purchase</button>
                   </div>
                </div>
            </div>
           {
            cart.length !== 0 ? <div className='flex flex-col gap-3.5 my-7'>
            {
                cart.map((item, i) => <AddCart key={i} i={i} item={item}></AddCart>)
            }
           </div>
           : 
           <div className='w-full h-72 bg-[#2a323d] flex justify-center items-center my-6 rounded-2xl
           flex-col space-y-5'>
                <h2 className='text-3xl text-center'>Oops! Your cart is empty.</h2>
                <Link to='/products'><button className="btn bg-[#f54a00] text-white rounded-xl">Start Shopping now</button></Link>
           </div>
           }
        </div>
    );
};

export default Cart;