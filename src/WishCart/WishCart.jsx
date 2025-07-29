import React, { useContext } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import WishlistContext from '../Context/WishlistContext';


const WishCart = ({item}) => {
    const {removeFromWishlist} = useContext(WishlistContext)
    const {image,name,price,description} = item
    return (
             <div className='flex justify-between bg-[#2a323d] p-5 rounded-2xl'>
                    <div className='flex gap-2.5 '>
                        <div className='max-w-[190px] h-[130px]'>
                            <img className=' rounded-2xl h-[130px] object-cover' src={image} alt="" />
                        </div>
                        <div className='md:space-y-2 my-auto'>
                            <h1 className='text-xl md:text-2xl font-bold'>{name}</h1>
                            <p className="text-[14px] md:text-[18px] font-medium"><span className='font-extrabold'>Description:</span > {description}</p>
                            <h5><span className='font-extrabold'>Price:</span> ${price}</h5>
        
                        </div>
                    </div>
                    <button 
                    onClick={() => removeFromWishlist(item)}
                    className="flex"><IoMdCloseCircle className="text-3xl text-red-500 cursor-pointer "/></button>
                </div>
    );
};

export default WishCart;