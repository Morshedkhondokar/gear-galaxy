import { Link, NavLink } from "react-router";
import { GiShoppingCart } from "react-icons/gi";
import { BsHeartFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Context/Cartcontext";
import WishlistContext from "../../Context/WishlistContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); 
      } else {
        setShowNavbar(true); 
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    console.log(window.scrollY) 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const Links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/products">Products</NavLink></li>
      <li><NavLink to="/cart">Cart</NavLink></li>
      <li><NavLink to="/wishlist">Wishlist</NavLink></li>
    </>
  );

  return (
    <div
      className={`navbar bg-base-100 shadow-sm sticky top-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {Links}
          </ul>
        </div>
        <Link to="/" className=" md:pl-3 btn-ghost text-xl md:text-2xl font-extrabold">Gear Galaxy</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end flex gap-3.5">
        <Link to="/cart">
          <button className="relative flex justify-center items-center p-1 rounded-full hover:bg-gray-100 transition cursor-pointer">
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex justify-center items-center shadow-md">
                {cart.length}
              </span>
            )}
            <GiShoppingCart className="text-3xl text-gray-500" />
          </button>
        </Link>
        <Link to="/wishlist">
          <button className="relative flex justify-center items-center p-1 rounded-full hover:bg-gray-100 transition cursor-pointer">
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex justify-center items-center shadow-md">
                {wishlist.length}
              </span>
            )}
            <BsHeartFill className="text-3xl text-gray-500" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
