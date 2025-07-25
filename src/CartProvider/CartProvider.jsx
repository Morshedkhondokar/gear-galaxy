import React, {  useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import CartContext from '../Context/Cartcontext';

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        toast.success(`${product.name} added to cart ✅`, {
            position: "top-right"
        });
        console.log(product)
    };

    const removeFromCart = (product) => {
        const removeCart = cart.filter(item => item.id !== product.id);
        setCart(removeCart); 
        toast.error(`${product.name} remove from Cart ❌`, {
            position: "top-right"
    })

    };
    return (<>
        {/* Cart Provider */}
    <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
         <Toaster/>
        {children}
    </CartContext.Provider>
    </>);
};

export default CartProvider;