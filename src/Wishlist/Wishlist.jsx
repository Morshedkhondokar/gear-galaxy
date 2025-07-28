import React, { useContext } from 'react';
import WishlistContext from '../Context/WishlistContext';
import WishCart from '../WishCart/WishCart';

const Wishlist = () => {
    const {wishlist} = useContext(WishlistContext)
    return (
     <div className='px-2.5 my-14'>
           {
            wishlist.length !== 0 ? <div className='flex flex-col gap-3.5 my-7'>
            {
                wishlist.map((item, index) => <WishCart key={index} item={item}></WishCart>)
            }
           </div>
           : 
           <div className='w-full h-72 bg-[#2a323d] flex justify-center items-center my-6 rounded-2xl
           flex-col space-y-5'>
                <h2 className='text-3xl text-center'>Oops! Your Wishlist is empty.</h2>
               
           </div>
           }
        </div>
    );
};

export default Wishlist;