import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import { CartContext } from '../../context/CartContext';

const BillPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { items } = useContext(CartContext);

  // Get order data from navigation state
  const state = location.state || {};
  const { orderId, address, blockNumber, paymentMethod, user, totalItems, totalPrice, isDiscountEligible, discountAmount, finalPrice } = state;

  const orderTotal = isDiscountEligible ? finalPrice : totalPrice;

  // If no order data, redirect back
  if (!orderId) {
    return (
      <section className='min-h-screen'>
        <div className='max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-16 mt-10'>
          <div className='bg-zinc-100 rounded-xl p-8 mt-8 text-center'>
            <p className='text-lg text-zinc-700'>No order data found. Please place an order first.</p>
            <Link to='/checkout' className='inline-block mt-6 bg-linear-to-b from-red-400 to-orange-500 text-white px-8 py-3 rounded-lg text-lg hover:scale-105 transition-all duration-300'>
              Go to Checkout
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='min-h-screen bg-linear-to-b from-green-50 to-white'>
      <div className='max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20 mt-8 sm:mt-12'>
        <div className='text-center mb-12'>
          <div className='flex justify-center mb-4'>
            <div className='w-20 h-20 bg-green-500 rounded-full flex items-center justify-center'>
              <FiCheck className='text-white text-4xl' />
            </div>
          </div>
          <h1 className='text-4xl font-bold text-green-600 mb-2'>Order Successful!</h1>
          <p className='text-lg text-zinc-600'>Thank you for your purchase</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2 space-y-6'>
            {/* Order Details */}
            <div className='bg-white rounded-xl p-6 shadow-lg border-2 border-green-200'>
              <h3 className='text-2xl font-semibold mb-4'>Order Details</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='text-sm text-zinc-600 font-medium'>Order ID</label>
                  <p className='text-xl font-bold text-zinc-800 mt-1'>{orderId}</p>
                </div>
                <div>
                  <label className='text-sm text-zinc-600 font-medium'>Payment Method</label>
                  <p className='text-lg font-semibold text-zinc-800 mt-1 capitalize'>{paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod === 'upi' ? 'UPI / Wallet' : 'Credit / Debit Card'}</p>
                </div>
                <div>
                  <label className='text-sm text-zinc-600 font-medium'>Customer Name</label>
                  <p className='text-lg font-semibold text-zinc-800 mt-1'>{user?.name || 'Guest'}</p>
                </div>
                <div>
                  <label className='text-sm text-zinc-600 font-medium'>Email</label>
                  <p className='text-lg font-semibold text-zinc-800 mt-1'>{user?.email || 'Not provided'}</p>
                </div>
                <div className='md:col-span-2'>
                  <label className='text-sm text-zinc-600 font-medium'>Delivery Address</label>
                  <p className='text-lg font-semibold text-zinc-800 mt-1'>{blockNumber}, {address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary and Button */}
          <div className='space-y-6'>
            <div className='bg-white rounded-xl p-6 shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4'>Order Summary</h3>
              <div className='space-y-3'>
                <div className='flex justify-between'>
                  <span className='text-zinc-600'>Total Items</span>
                  <span className='font-semibold'>{totalItems}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-zinc-600'>Subtotal</span>
                  <span className='font-semibold'>Rs {totalPrice.toFixed(2)}</span>
                </div>
                {isDiscountEligible && (
                  <div className='flex justify-between text-green-600'>
                    <span className='font-medium'>First Order Discount (20%)</span>
                    <span className='font-semibold'>-Rs {discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className='border-t border-zinc-300 pt-3 flex justify-between text-xl'>
                  <span className='font-semibold'>Total</span>
                  <span className='font-bold text-black'>Rs {orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Link to='/' className='w-full bg-linear-to-b from-red-400 to-orange-500 text-white px-6 py-4 rounded-lg text-lg hover:scale-[1.02] hover:to-orange-600 transition-all duration-300 inline-block text-center font-semibold'>
              Go to Home
            </Link>

            <div className='bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center'>
              <p className='text-sm text-green-700'>
                🎉 Your order has been confirmed! You will receive tracking details via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillPage;
