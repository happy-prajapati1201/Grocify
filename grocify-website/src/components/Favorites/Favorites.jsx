import React, { useContext } from 'react';
import { LikesContext } from '../../context/LikesContext';
import Heading from '../Heading/Heading';
import { FaHeart, FaTrash } from 'react-icons/fa';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';

const Favorites = () => {
  const { likedItems, toggleLike } = useContext(LikesContext);

  const handleRemoveLike = (product) => {
    toggleLike(product);
  };

  return (
    <section className='min-h-screen'>
      <div className='max-w-[1400px] mx-auto px-10 py-20 mt-15'>
        <Heading heighlight='Your' Heading='Favorites' />

        {likedItems.length === 0 ? (
          <div className='text-center py-20'>
            <p className='text-2xl text-zinc-600 mb-6'>No favorite items yet!</p>
            <Link 
              to='/' 
              className='bg-linear-to-b from-red-400 to-orange-500 text-white px-8 py-3 rounded-lg 
                        text-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer inline-block'
            >
              Add
            </Link>
          </div>
        ) : (
          <div>
            <p className='text-lg text-zinc-600 mb-10'>You have {likedItems.length} favorite item(s)</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9'>
              {likedItems.map((product) => {
                const productDetails = ProductList.find(item => item.id === product.id) || {};
                const quantity = product.quantity || productDetails.quantity;
                return (
                <div key={product.id} className='bg-zinc-100 p-5 rounded-xl'>
                  {/* card icons */}
                  <div className='flex justify-between'>
                    <button 
                      onClick={() => handleRemoveLike(product)}
                      className='text-3xl text-red-500 transition-colors duration-300 cursor-pointer hover:text-red-600'
                    >
                      <FaHeart />
                    </button>
                    <button 
                      onClick={() => handleRemoveLike(product)}
                      className='bg-red-500 text-white text-xl px-4 py-3 rounded-lg hover:bg-red-600 transition-colors'
                    >
                      <FaTrash />
                    </button>
                  </div>

                  {/* card image */}
                  <div className='w-full h-50 my-4'>
                    <img src={product.image} className='w-full h-full object-contain mx-auto' alt={product.name} />
                  </div>

                  {/* Card content */}
                  <div className='text-center'>
                    <h3 className='text-2xl font-semibold'>{product.name}</h3>
                    <p className='text-sm text-zinc-600 mt-1'>{product.category} {quantity && `- ${quantity}`}</p>
                    <p className='text-2xl font-bold mt-4 mb-3'>Rs {product.price.toFixed(2)}</p>
                    <Button content='Shop Now' />
                  </div>
                </div>
              )})}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorites;
