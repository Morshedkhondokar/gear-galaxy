import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../Context/Cartcontext';
import AddCart from '../AddCart/AddCart';
import { Link } from 'react-router';

const Cart = () => {
    const [totalPrice , setTotalPrice] = useState(null)
    const {cart} = useContext(CartContext)

    useEffect( () => {
        const total = cart.reduce((acc, item) => acc + item.price, 0)
        setTotalPrice(total)
    },[cart])
    return (
        <div className='px-2.5'>
            <div className='flex justify-between mt-6 '> 
                <h1 className='text-3xl font-bold'>Cart</h1>
                <div className=' md:flex gap-2.5 justify-center items-center'>
                    <h1 className=' text-2xl font-bold text-end'>Total cost: ${totalPrice}</h1>
                   <div>
                     <button className='btn'>Sort by Price</button>
                    <button className='btn'>Purchase</button>
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