import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import CartContext from "../../Context/Cartcontext";


const Product = ({product}) => {
    const {id,name,image,brand, rating} = product;
    const {addToCart} = useContext(CartContext)


    return (
        <div className="h-96 max-w-[370px] border border-gray-400 rounded-2xl p-6">
           
            <div className="bg-amber-400 rounded-2xl overflow-hidden max-w-[400px] max-h-[400px]">
                <img className="h-56 w-auto object-cover " src={image} alt="" />
            </div>
            <div className="p-2">
                <h1 className="text-[18px] font-bold ">Name: {name}</h1>
                <p className="font-medium">Brand: {brand}</p>
                <div className="flex justify-between gap-5 items-center my-3">
                   <div>
                     <button
                     onClick={() => addToCart(product)}
                     className="btn btn-outline btn-info p-2 rounded-xl mr-3">Add Cart</button>
                    <Link to={`/products/${id}`}><button class="btn btn-outline btn-success p-2 rounded-2xl">View Details</button></Link>
                   </div>
                  <div className="flex gap-1.5 items-center ">
                    <p>{rating}</p>
                    <FaStar className="text-orange-400"/>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Product;