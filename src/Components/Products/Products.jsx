import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import { useEffect, useState } from "react";

const Products = () => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const allProducts = useLoaderData();
  // console.log(allProducts)

  useEffect(() => {
    setDisplayProducts(allProducts);
  }, [allProducts]);

  const handleProductsNeed = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setDisplayProducts(allProducts);
    } else {
      const filtered = allProducts.filter((item) => item.category === category);
      setDisplayProducts(filtered);
    }
  };
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center my-5">Our Products</h1>
      <div className="flex  flex-wrap gap-2 justify-center my-5">
        <button
          onClick={() => handleProductsNeed("All")}
          className={`btn ${
            activeCategory === "All" ? "bg-[#f54a00] text-white rounded-xl" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleProductsNeed("Mobile")}
          className={`btn ${
            activeCategory === "Mobile"
              ? "bg-[#f54a00] text-white rounded-xl"
              : ""
          }`}
        >
          Mobile
        </button>
        <button
          onClick={() => handleProductsNeed("Laptop")}
          className={`btn ${
            activeCategory === "Laptop"
              ? "bg-[#f54a00] text-white rounded-xl"
              : ""
          }`}
        >
          Laptop
        </button>
        <button
          onClick={() => handleProductsNeed("Tablet")}
          className={`btn ${
            activeCategory === "Tablet"
              ? "bg-[#f54a00] text-white rounded-xl"
              : ""
          }`}
        >
          Tablet
        </button>
        <button
          onClick={() => handleProductsNeed("Smart Watch")}
          className={`btn ${
            activeCategory === "Smart Watch"
              ? "bg-[#f54a00] text-white rounded-xl"
              : ""
          }`}
        >
          Smart Watch
        </button>
        <button
          onClick={() => handleProductsNeed("Camera")}
          className={`btn ${
            activeCategory === "Camera"
              ? "bg-[#f54a00] text-white rounded-xl"
              : ""
          }`}
        >
          Camera
        </button>
        <button
          onClick={() => handleProductsNeed("Drone")}
          className={`btn ${
            activeCategory === "Drone"
              ? "bg-[#f54a00] text-white rounded-xl"
              : ""
          }`}
        >
          Drone
        </button>
      </div>
      {/* get data product component */}
      <div>
        {
        displayProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-8">
            {displayProducts.map((product, i) => (
              <Product key={i} product={product} />
            ))}
          </div>
        ) : (
          <div className="h-[400px] bg-[#2a323d] flex justify-center items-center p-6"> 
            <p className="text-center text-2xl text-red-700 font-semibold mt-10 ">
            We’re working on adding products in the {" "}
            <span className="capitalize">{activeCategory}</span> section. Stay tuned!
          </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
