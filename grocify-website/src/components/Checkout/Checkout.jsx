import React, { useContext, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import Heading from '../Heading/Heading';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalItems, totalPrice, isDiscountEligible, discountAmount, finalPrice, completeOrder } = useContext(CartContext);
  const { isLoggedIn, user } = useContext(AuthContext);

  const [address, setAddress] = useState('');
  const [blockNumber, setBlockNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const orderTotal = useMemo(() => (isDiscountEligible ? finalPrice : totalPrice), [isDiscountEligible, finalPrice, totalPrice]);

  const handlePay = (e) => {
    e.preventDefault();

    if (!address.trim() || !blockNumber.trim()) {
      alert('Please enter your address and block number.');
      return;
    }

    completeOrder();
    alert('Payment successful! Your order has been placed.');
    navigate('/');
  };

  if (!isLoggedIn) {
    return (
      <section className='min-h-screen'>
        <div className='max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-16 mt-10'>
          <Heading heighlight='Login' Heading='Required' />
          <div className='bg-zinc-100 rounded-xl p-8 mt-8 text-center'>
            <p className='text-lg text-zinc-700'>Please login to proceed to checkout.</p>
            <Link to='/login' className='inline-block mt-6 bg-linear-to-b from-red-400 to-orange-500 text-white px-8 py-3 rounded-lg text-lg hover:scale-105 transition-all duration-300'>
              Go to Login
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className='min-h-screen'>
        <div className='max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-16 mt-10'>
          <Heading heighlight='Your' Heading='Cart' />
          <div className='bg-zinc-100 rounded-xl p-8 mt-8 text-center'>
            <p className='text-lg text-zinc-700'>Your cart is empty.</p>
            <Link to='/' className='inline-block mt-6 bg-linear-to-b from-red-400 to-orange-500 text-white px-8 py-3 rounded-lg text-lg hover:scale-105 transition-all duration-300'>
              Start Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='min-h-screen'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20 mt-8 sm:mt-12'>
        <Heading heighlight='Checkout' Heading='Details' />

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8'>
          <div className='lg:col-span-2 space-y-6'>
            <div className='bg-zinc-100 rounded-xl p-6'>
              <h3 className='text-2xl font-semibold mb-4'>Customer Details</h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className='text-sm text-zinc-600'>Name</label>
                  <div className='mt-1 bg-white border border-zinc-200 rounded-lg px-4 py-3 text-zinc-800'>
                    {user?.name || 'Guest'}
                  </div>
                </div>
                <div>
                  <label className='text-sm text-zinc-600'>Email</label>
                  <div className='mt-1 bg-white border border-zinc-200 rounded-lg px-4 py-3 text-zinc-800'>
                    {user?.email || 'Not provided'}
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handlePay} className='bg-zinc-100 rounded-xl p-6 space-y-5'>
              <h3 className='text-2xl font-semibold'>Delivery Address</h3>
              <div>
                <label className='text-sm text-zinc-600'>Address</label>
                <input
                  type='text'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder='Street, City, State'
                  className='mt-2 w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400'
                />
              </div>
              <div>
                <label className='text-sm text-zinc-600'>Block Number</label>
                <input
                  type='text'
                  value={blockNumber}
                  onChange={(e) => setBlockNumber(e.target.value)}
                  placeholder='Block / House No.'
                  className='mt-2 w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400'
                />
              </div>

              <div>
                <h3 className='text-2xl font-semibold mb-3'>Payment Method</h3>
                <div className='space-y-3'>
                  <label className='flex items-center gap-3 bg-white border border-zinc-200 rounded-lg px-4 py-3 cursor-pointer'>
                    <input
                      type='radio'
                      name='payment'
                      value='card'
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className='text-zinc-700'>Credit / Debit Card</span>
                  </label>
                  <label className='flex items-center gap-3 bg-white border border-zinc-200 rounded-lg px-4 py-3 cursor-pointer'>
                    <input
                      type='radio'
                      name='payment'
                      value='cod'
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className='text-zinc-700'>Cash on Delivery</span>
                  </label>
                  <label className='flex items-center gap-3 bg-white border border-zinc-200 rounded-lg px-4 py-3 cursor-pointer'>
                    <input
                      type='radio'
                      name='payment'
                      value='upi'
                      checked={paymentMethod === 'upi'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className='text-zinc-700'>UPI / Wallet</span>
                  </label>
                </div>
              </div>

              <button type='submit' className='w-full bg-linear-to-b from-red-400 to-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:scale-[1.01] hover:to-orange-600 transition-all duration-300'>
                Pay Now
              </button>
            </form>
          </div>

          <div className='bg-zinc-100 rounded-xl p-6 h-fit'>
            <h3 className='text-2xl font-semibold mb-4'>Order Summary</h3>
            <div className='space-y-3'>
              {items.map((item) => (
                <div key={item.id} className='flex items-center gap-3 bg-white rounded-lg p-3'>
                  <div className='w-14 h-14 bg-zinc-50 rounded-lg flex items-center justify-center'>
                    <img src={item.image} alt={item.name} className='w-10 h-10 object-contain' />
                  </div>
                  <div className='flex-1'>
                    <p className='font-medium'>{item.name}</p>
                    <p className='text-sm text-zinc-500'>Qty {item.qty}</p>
                  </div>
                  <div className='font-semibold'>Rs {(item.price * item.qty).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <div className='border-t border-zinc-300 mt-5 pt-4'>
              <div className='flex justify-between py-1'>
                <span className='text-zinc-600'>Total Items</span>
                <span className='font-semibold'>{totalItems}</span>
              </div>
              <div className='flex justify-between py-1'>
                <span className='text-zinc-600'>Subtotal</span>
                <span className='font-semibold'>Rs {totalPrice.toFixed(2)}</span>
              </div>
              {isDiscountEligible && (
                <div className='flex justify-between py-1 text-green-600'>
                  <span className='font-medium'>First Order Discount (20%)</span>
                  <span className='font-semibold'>-Rs {discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className='flex justify-between py-2 text-lg border-t border-zinc-300 mt-2 pt-2'>
                <span className='font-semibold'>Total</span>
                <span className='font-bold text-orange-500'>Rs {orderTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
