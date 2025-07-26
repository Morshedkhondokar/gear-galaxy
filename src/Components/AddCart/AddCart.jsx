import { useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import CartContext from "../../Context/Cartcontext";

const AddCart = ({item}) => {
    const {removeFromCart,handleIncrement, handleDecrement} = useContext(CartContext)
    const {image,name,description,price,quantity} = item;

   

    return (
        <div className='flex justify-between bg-[#2a323d] p-5 rounded-2xl'>
            <div className='flex gap-2.5 '>
                <div className='max-w-[190px] h-[130px]'>
                    <img className=' rounded-2xl h-[130px] object-cover' src={image} alt="" />
                </div>
                <div className='md:space-y-2 my-auto'>
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <p className="text-[14px] md:text-[18px] font-medium"><span className='font-extrabold'>Description:</span > {description}</p>
                    <h5><span className='font-extrabold'>Price:</span> ${price}</h5>

                    <div className="inline-flex h-6 items-center bg-gray-600  rounded-2xl  space-x-2 overflow-hidden">
                        <button 
                        onClick={() => handleIncrement(item.id)}
                        className="bg-gray-700 text-white text-2xl px-3   hover:bg-gray-800 transition cursor-pointer">+</button>
                        <p className="font-semibold  text-white">{quantity}</p>
                        <button
                        onClick={() => handleDecrement(item.id)}
                        className="bg-gray-700 text-white text-2xl px-3  hover:bg-gray-800 transition cursor-pointer">-</button>
                    </div>

                </div>
            </div>
            <button onClick={() => removeFromCart(item)} 
            className="flex"><IoMdCloseCircle className="text-3xl text-red-500 cursor-pointer "/></button>
        </div>
    );
};

export default AddCart;