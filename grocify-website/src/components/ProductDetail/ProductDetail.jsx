import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import Heading from '../Heading/Heading';
import { FaHeart, FaPlus } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import { LikesContext } from '../../context/LikesContext';
import Button from '../Button/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = ProductList.find((p) => p.id === parseInt(id));
  
  const { addToCart } = useContext(CartContext);
  const { toggleLike, isLiked } = useContext(LikesContext);

  if (!product) {
    return (
      <section className='min-h-screen'>
        <div className='max-w-[1400px] mx-auto px-10 py-20 mt-20 text-center'>
          <p className='text-2xl text-zinc-600 mb-6'>Product not found</p>
          <button onClick={() => navigate('/')} className='bg-linear-to-b from-red-400 to-orange-500 text-white px-8 py-3 rounded-lg text-lg hover:scale-105 hover:to-orange-600 transition-all duration-300'>
            Go Home
          </button>
        </div>
      </section>
    );
  }

  const liked = isLiked(product.id);

  const handleLike = () => {
    toggleLike(product);
  };

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <section className='min-h-screen'>
      <div className='max-w-[1400px] mx-auto px-10 py-20 mt-20'>
        <button onClick={() => navigate(-1)} className='text-zinc-600 hover:text-orange-500 transition-colors mb-6 font-semibold'>
          ← Back
        </button>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* Product Image */}
          <div className='bg-zinc-100 rounded-xl p-10 flex items-center justify-center h-96'>
            <img src={product.image} alt={product.name} className='w-full h-full object-contain' />
          </div>

          {/* Product Details */}
          <div>
            <h1 className='text-4xl font-bold mb-2'>{product.name}</h1>
            <p className='text-lg text-zinc-600 mb-6'>{product.category}</p>
            
            <div className='mb-8'>
              <p className='text-5xl font-bold text-black'>
                Rs {product.price.toFixed(2)} <span className="text-3xl text-zinc-500 font-normal">/ {product.quantity}</span>
              </p>
            </div>

            {/* Description */}
            <p className='text-zinc-700 mb-8 leading-relaxed'>
              High-quality {product.name} sourced fresh for your family. Perfect for {product.category} lovers. 
              Packed with nutrients and perfect taste.
            </p>

            {/* Actions */}
            <div className='flex gap-4 mb-8'>
              <button
                onClick={handleLike}
                className='flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-orange-500 text-orange-500 hover:bg-orange-50 transition-colors'
              >
                <FaHeart style={{ color: liked ? '#ef4444' : '#f97316' }} />
                {liked ? 'Unlike' : 'Add to Favorites'}
              </button>
              <button
                onClick={handleAddToCart}
                className='flex items-center gap-2 px-6 py-3 rounded-lg bg-linear-to-b from-red-400 to-orange-500 text-white hover:scale-105 transition-transform'
              >
                <FaPlus /> Add to Cart
              </button>
            </div>

            {/* Additional Info */}
            <div className='bg-zinc-100 rounded-xl p-6'>
              <h3 className='text-lg font-semibold mb-4'>Product Information</h3>
              <ul className='space-y-3 text-zinc-700'>
                <li><strong>Category:</strong> {product.category}</li>
                <li><strong>ID:</strong> #{product.id}</li>
                <li><strong>Availability:</strong> In Stock</li>
                <li><strong>Shipping:</strong> Free shipping on orders above Rs 500</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
