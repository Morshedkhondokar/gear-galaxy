import { Link, NavLink } from "react-router";
import { GiShoppingCart } from "react-icons/gi";
import { BsHeartFill } from "react-icons/bs";
import { useContext } from "react";
import CartContext from "../../Context/Cartcontext";
import WishlistContext from "../../Context/WishlistContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const {wishlist} = useContext(WishlistContext)
  const Links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-extrabold">Gear Galaxy</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end flex gap-3.5 ">
        {/* Cart icon */}
        <Link to="/cart">
          <button className="relative flex justify-center items-center p-1 rounded-full hover:bg-gray-100 transition cursor-pointer">
            {/* Cart Count Badge */}
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex justify-center items-center shadow-md">
                {cart.length}
              </span>
            )}
            {/* Shopping Bag Icon */}
            <GiShoppingCart className="text-3xl  text-gray-500"  />
          </button>
        </Link>
        {/* wishlist  Icon*/}
        <Link to="wishlist">
          <button className="relative flex justify-center items-center p-1 rounded-full hover:bg-gray-100 transition cursor-pointer">
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex justify-center items-center shadow-md">
                {wishlist.length}
              </span>
            )}
            <BsHeartFill className="text-3xl  text-gray-500" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
