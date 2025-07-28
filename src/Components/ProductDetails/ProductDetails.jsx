import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";


import CartContext from "../../Context/Cartcontext";
import WishlistContext from "../../Context/WishlistContext";


const ProductDetails = () => {
  const [details, setDetails] = useState([]);
  const { productId } = useParams();
  const {addToCart} = useContext(CartContext)
  const {handleWishProduct,wishlist} = useContext(WishlistContext)
  
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  // console.log(details, productId);

  const product = details.find((item) => item.id === parseInt(productId));

  const isWishlist = wishlist.some(item => item.id === product?.id)

  

   

  return (
    <div>
      {
      product ? (
        <div className="flex flex-col md:flex-row gap-5 md:items-center m-5 leading-20">
          <div className="bg-amber-400 rounded-2xl max-w-[500px] max-h-[400px]">
            <img
              className="rounded-2xl h-[400px] w-auto object-cover"
              src={product.image}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Name: {product.name}</h1>
            <div className="border-t-1 my-3"></div>
            <h1 className="text-2xl font-bold">Brand: {product.brand}</h1>
            <h1 className="text-2xl font-bold">Storage: {product.storage}</h1>
            {product.ram !== "N/A" && (
              <h1 className="text-2xl font-bold">RAM: {product.ram}</h1>
            )}
            <p className="text-2xl font-bold">price: ${product.price}</p>
            <div className="border-t-1 mt-2.5"></div>
            <p className="text-2xl font-bold my-3">Description: {product.description}</p>
            <div className="border-t-1 mb-2.5"></div>
            

            <div className="flex gap-1.5 items-center text-2xl font-bold">
              <p>{product.rating}</p>
              <FaStar className="text-orange-400" />
            </div>

            <div className="flex items-center mt-1.5">
              {/* add cart */}
              <button
              onClick={ () => addToCart(product)}
              className="btn btn-outline btn-info p-2 rounded-xl mr-3">
                Add Cart
                <GiShoppingCart className="text-2xl"/>
              </button>
              {/* add wishlist */}
              <button
              onClick={() => handleWishProduct(product)}
               className="text-xl font-bold cursor-pointer border border-gray-100 p-2 rounded-full hover:bg-gray-100 transition">
                <FaHeart  className={isWishlist ? "text-red-500" : "text-gray-500"}/>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[400px]">
          <span className="loading loading-bars loading-lg "></span>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
