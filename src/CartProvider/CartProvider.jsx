import React, {  useState , useEffect, } from 'react';
import toast, { Toaster } from "react-hot-toast";
import CartContext from '../Context/Cartcontext';

const CartProvider = ({children}) => {
    const [cart, setCart] = useState(() => {
        const saveCart = localStorage.getItem("cart");
        return saveCart ? JSON.parse(saveCart) : [];
    });
    const [totalPrice , setTotalPrice] = useState(null)
    const [finalTotalPrice, setFinalTotalPrice] = useState(0)



    // add to cart 
    const addToCart = (product) => {
        const exists = cart.find((item) => item.id === product.id)
        if(exists){
            
            setCart(cart.map(item => item.id === product.id ? 
                {...item, quantity: item.quantity + 1} : item))
        }else{
            setCart([{...product, quantity: 1 },...cart ])
            
        }
        toast.success(`${product.name} added to cart ✅`);
        
    };
    
    // add quantity 
    const handleIncrement = (id) => {
        const updateCart = cart.find(item => item.id === id)
        if(updateCart){
            setCart(cart.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item))
        }
    }
    // minus quantity
    const handleDecrement = (id) => {
        const updateCart = cart.find(item => item.id === id)
        // console.log(updateCart)
        if(updateCart.quantity <= 1){
            removeFromCart(updateCart)
        }else{
            setCart(cart.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item))

        }
    } 

    // localstorage save Cart data
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // total cost
    useEffect( () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        setTotalPrice(total)
    },[cart])

    // Remove from cart
    const removeFromCart = (product) => {
        const removeCart = cart.filter(item => item.id !== product.id);
        setCart(removeCart); 
        toast.error(`${product.name} remove from Cart ❌`)
    };

        // Purchase function 
    const handlePurchaseBtn = () => {
        if(cart.length > 0){
            const purchaseModal = document.getElementById("purchaseBtn");
            purchaseModal.showModal()

            const finalTotalCost = totalPrice;
            setFinalTotalPrice(finalTotalCost)
            
            setCart([])
        }else{

            toast.error("Your cart is empty now!! buy Something.")
        }
    }
    return (<>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
    {/* <button className="btn" onClick={()=>document.getElementById('purchaseBtn').showModal()}>open modal</button> */}
    <dialog id="purchaseBtn" className="modal">
        <div className="modal-box ">
            <div className='w-[70px] mx-auto my-2.5'>
                <img src="/Group.png" alt="" />
            </div>
            <p className="text-center text-2xl font-extrabold">Payment Successfully</p>
            <hr className='my-3'/>
            <p className='text-center font-medium'>Thanks for Purchasing.</p>
            <p className='text-center font-medium'>Total: ${finalTotalPrice}</p>
            <div className="modal-action block">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn w-full">Close</button>
            </form>
            </div>
        </div>
    </dialog>
        {/* Cart Provider */}
    <CartContext.Provider
     value={{cart, addToCart,setCart, removeFromCart,totalPrice, handleIncrement,handleDecrement, handlePurchaseBtn}}>
         <Toaster/>
        {children}
    </CartContext.Provider>
    </>);
};

export default CartProvider;