import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootLayout from './RootLayout/RootLayOut.jsx'

import { createBrowserRouter, RouterProvider,} from "react-router-dom";

import Home from './Components/Home/Home.jsx';
import Products from './Components/Products/Products.jsx';
import Cart from './Components/Cart/Cart.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import CartProvider from './CartProvider/CartProvider.jsx';
import WishlistProvider from './WishlistProvider/WishlistProvider.jsx';
import Wishlist from './Wishlist/Wishlist.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/products',
        element: <Products></Products>,
        loader: () => fetch('/products.json')
      },
      {
        path:'/:productId',
        element: <ProductDetails></ProductDetails>,
      },
      {
        path:"/cart",
        element: <Cart></Cart>
      },
      {
        path:"/wishlist",
        element: <Wishlist></Wishlist>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </WishlistProvider>
  </StrictMode>,
)
