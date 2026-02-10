import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList"
import Cards from "../Cards/Cards"
import { Link } from "react-router-dom";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setactivTab] = useState("All");

  let filterdItems = activeTab === 'All'
  ? ProductList : ProductList.filter(item => item.category === activeTab)

  const renderCards = filterdItems.slice(0,8).map(product => {
    return(
        <Cards 
          key={product.id}
          image={product.image} 
          name={product.name} 
          price={product.price}
          id={product.id}
          category={product.category}
          quantity={product.quantity}
        />
    )
  })

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading heighlight="Our" Heading="Products" />

        {/* tabbs */}
        <div className="flex gap-3 justify-center mt-10 ">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={`px-5 py-2 text-lg rounded-xl cursor-pointer ${
                  activeTab === category ? "bg-orange-500" : "bg-zinc-100" }`} onClick={()=> setactivTab(category)}>
                {category}
              </button>
            );
          })}
        </div>

        {/* Product listing */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-20">
          {renderCards}
        </div>

       <div className="mt-15 w-fit mx-auto">
         <Link to='/allproducts' className='bg-linear-to-b from-red-400 to-orange-500 text-white px-8 py-3 rounded-lg 
                        text-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>View all</Link>
       </div>

      </div>
    </section>
  );
};

export default Products;
