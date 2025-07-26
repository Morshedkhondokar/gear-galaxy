import React, {  useState , useEffect} from 'react';
import toast, { Toaster } from "react-hot-toast";
import CartContext from '../Context/Cartcontext';

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalPrice , setTotalPrice] = useState(null)


    const addToCart = (product) => {
        const exists = cart.find((item) => item.id === product.id)
        if(exists){
            
            setCart(cart.map(item => item.id === product.id ? 
                 {...item, quantity: item.quantity + 1} : item))
        }else{
            setCart([{...product, quantity: 1 },...cart ])
            
        }
        toast.success(`${product.name} added to cart ✅`, {
            position: "top-right"
        });
        
    };

    // total cost
    useEffect( () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        setTotalPrice(total)
    },[cart])

    useEffect(() => {
    console.log("Cart updated:", cart);
    }, [cart]);

    const removeFromCart = (product) => {
        const removeCart = cart.filter(item => item.id !== product.id);
        setCart(removeCart); 
        toast.error(`${product.name} remove from Cart ❌`, {
            position: "top-right"
    })

    };
    return (<>
        {/* Cart Provider */}
    <CartContext.Provider value={{cart, addToCart, removeFromCart,totalPrice}}>
         <Toaster/>
        {children}
    </CartContext.Provider>
    </>);
};

export default CartProvider;