import { useEffect, useState } from "react";
import WishlistContext from "../Context/WishlistContext";
import toast from "react-hot-toast";


const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState(() => {
        const saveWishlist = localStorage.getItem("wishlist");
        return saveWishlist ? JSON.parse(saveWishlist) : [];
    })

    const handleWishProduct = (product) => {
        const exists = wishlist.find(item => item.id === product.id)
        if(!exists){
            setWishlist([product, ...wishlist]);
            toast.success(`${product.name} added to Wishlist`);
        }else{
            toast.error(`The ${product.name} alredy in Wishlist`)
        }
    }

    
    // save Localstorage wishlist data
    useEffect( () => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    },[wishlist])

    // Remove from Wishlist
    const removeFromWishlist = (product) => {
        const removeCart = wishlist.filter(item => item.id !== product.id);
        setWishlist(removeCart); 
        toast.error(`${product.name} remove from Wishlist ❌`)
    };
    
    return (
        <WishlistContext.Provider value={{wishlist, handleWishProduct,removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistProvider;