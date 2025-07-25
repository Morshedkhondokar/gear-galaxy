import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';

const Home = () => {

   const [allProducts, setAllProducts] = useState([]);

   useEffect( ()=>{
    fetch('/products.json')
    .then(res => res.json())
    .then(data => setAllProducts(data))
   },[])

   
//    console.log(allProducts.length)
    return (
        <div>
            <Banner></Banner>
    
         <div className='my-10'>
                <h1 className='text-3xl font-bold text-center mb-2'>Best Products</h1>
          
            <div className={
                 allProducts.length > 0 ? `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-8`
                : `flex justify-center items-center h-[400px] max-w-[700px] mx-auto `
                }>
                {
                    allProducts.length > 0 ? 
                 allProducts.map((product, i) => <Product key={i} product={product}></Product>) 
                : 
                <div>
                     <span className="loading loading-bars loading-lg "></span>
                </div>
                }
            </div>
         </div>
        </div>
    );
};

export default Home;