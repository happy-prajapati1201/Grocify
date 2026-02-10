import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Heading from '../Heading/Heading';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';

const Buy = () => {
  const { items, increment, decrement, removeFromCart, clearCart, totalItems, totalPrice, isDiscountEligible, discountAmount, finalPrice } = useContext(CartContext);

  return (
    <section className='min-h-screen'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20 mt-8 sm:mt-12'>
        <Heading heighlight='Your' Heading='Bag' />

        {items.length === 0 ? (
          <div className='text-center py-16 sm:py-20 px-4'>
            <p className='text-xl sm:text-2xl text-zinc-600 mb-6'>Your bag is empty.</p>
            <Link to='/' className='bg-linear-to-b from-red-400 to-orange-500 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 inline-block w-full sm:w-auto'>Start Shopping</Link>
          </div>
        ) : (
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8'>
            <div className='lg:col-span-2 space-y-4 sm:space-y-5'>
              {items.map((p) => {
                const productDetails = ProductList.find(item => item.id === p.id) || {};
                const quantity = p.quantity || productDetails.quantity;
                return (
                  <div key={p.id} className='bg-zinc-100 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-5'>
                    <div className='w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-lg flex items-center justify-center mx-auto sm:mx-0'>
                      <img src={p.image} alt={p.name} className='w-16 h-16 sm:w-20 sm:h-20 object-contain' />
                    </div>
                    <div className='flex-1 w-full text-center sm:text-left'>
                      <h3 className='text-xl font-semibold'>{p.name}</h3>
                      <p className='text-sm text-zinc-500'>{p.category} {quantity && `- ${quantity}`}</p>
                      <p className='text-lg font-bold mt-2'>Rs {(p.price * p.qty).toFixed(2)}</p>
                    </div>
                    <div className='flex items-center gap-3 mt-3 sm:mt-0 justify-center sm:justify-start'>
                      <button onClick={() => decrement(p.id)} className='w-9 h-9 rounded-lg bg-white text-zinc-700 flex items-center justify-center shadow-sm'><FaMinus /></button>
                      <span className='w-10 text-center font-semibold'>{p.qty}</span>
                      <button onClick={() => increment(p.id)} className='w-9 h-9 rounded-lg bg-white text-zinc-700 flex items-center justify-center shadow-sm'><FaPlus /></button>
                    </div>
                    <button onClick={() => removeFromCart(p.id)} className='w-full sm:w-auto mt-3 sm:mt-0 sm:ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2'>
                      <FaTrash /> Remove
                    </button>
                  </div>
                );
              })}
            </div>
            <div className='bg-zinc-100 rounded-xl p-4 sm:p-6 h-fit'>
              <h4 className='text-xl font-semibold mb-4'>Order Summary</h4>
              <div className='flex justify-between py-2'>
                <span className='text-zinc-600'>Items</span>
                <span className='font-semibold'>{totalItems}</span>
              </div>
              <div className='flex justify-between py-2'>
                <span className='text-zinc-600'>Subtotal</span>
                <span className='font-semibold'>Rs {totalPrice.toFixed(2)}</span>
              </div>
              {isDiscountEligible && (
                <>
                  <div className='flex justify-between py-2 text-green-600'>
                    <span className='font-medium'>First Order Discount (20%)</span>
                    <span className='font-semibold'>-Rs {discountAmount.toFixed(2)}</span>
                  </div>
                  <div className='border-t border-zinc-300 my-2'></div>
                  <div className='flex justify-between py-2 text-lg'>
                    <span className='font-semibold'>Total</span>
                    <span className='font-bold text-black'>Rs {finalPrice.toFixed(2)}</span>
                  </div>
                  <div className='bg-green-50 border border-green-200 rounded-lg p-3 mt-3'>
                    <p className='text-sm text-green-700 font-medium'>🎉 You're saving Rs {discountAmount.toFixed(2)} on your first order!</p>
                  </div>
                </>
              )}
              {!isDiscountEligible && (
                <div className='flex justify-between py-2 text-lg border-t border-zinc-300 mt-2 pt-2'>
                  <span className='font-semibold'>Total</span>
                  <span className='font-bold text-black'>Rs {totalPrice.toFixed(2)}</span>
                </div>
              )}
              <Link to='/checkout' className='mt-5 w-full bg-linear-to-b from-red-400 to-orange-500 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg hover:scale-[1.01] hover:to-orange-600 transition-all duration-300 inline-block text-center'>Checkout</Link>
              <button onClick={clearCart} className='mt-3 w-full bg-zinc-300 text-zinc-900 px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg hover:bg-zinc-400 transition-all duration-300'>Clear Cart</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Buy;
