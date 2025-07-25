import { useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import CartContext from "../../Context/Cartcontext";

const AddCart = ({item,i}) => {
    const {removeFromCart} = useContext(CartContext)
    const {image,name,description,price} = item;
    return (
        <div className='flex justify-between bg-[#2a323d] p-5 rounded-2xl'>
            <div className='flex gap-2.5 '>
                <div className='max-w-[190px] h-[130px]'>
                    <img className=' rounded-2xl h-[130px] object-cover' src={image} alt="" />
                </div>
                <div className='md:space-y-2 my-auto'>
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <p><span className='font-extrabold'>Description:</span> {description}</p>
                    <h5><span className='font-extrabold'>Price:</span> ${price}</h5>
                </div>
            </div>
            <button onClick={() => removeFromCart(item,i)} 
            className="flex"><IoMdCloseCircle className="text-3xl text-red-500 cursor-pointer "/></button>
        </div>
    );
};

export default AddCart;