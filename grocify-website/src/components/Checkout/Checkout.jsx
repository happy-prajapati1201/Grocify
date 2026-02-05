import React, { useContext, useMemo, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import Heading from '../Heading/Heading';
import { FiCheck } from 'react-icons/fi';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalItems, totalPrice, isDiscountEligible, discountAmount, finalPrice, completeOrder } = useContext(CartContext);
  const { isLoggedIn, user } = useContext(AuthContext);

  const [address, setAddress] = useState('');
  const [blockNumber, setBlockNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);

  const orderTotal = useMemo(() => (isDiscountEligible ? finalPrice : totalPrice), [isDiscountEligible, finalPrice, totalPrice]);

  // Load Razorpay script on mount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handleRazorpayPayment = async () => {
    if (typeof window.Razorpay === 'undefined') {
      alert('Razorpay script failed to load. Please try again.');
      return;
    }

    const options = {
      key: 'rzp_test_1DP5MMOk03G1g9', // Replace with your Razorpay Key ID
      amount: Math.round(orderTotal * 100), // Amount in paise
      currency: 'INR',
      name: 'Grocify',
      description: `Order from ${user?.name || 'Guest'}`,
      image: '/src/assets/grocery.png',
      handler: function (response) {
        // Payment successful
        setOrderId(response.razorpay_payment_id);
        completeOrder();
        setOrderSuccess(true);
      },
      prefill: {
        name: user?.name || '',
        email: user?.email || '',
      },
      theme: {
        color: '#f97316', // Orange color
      },
      modal: {
        ondismiss: function () {
          setLoading(false);
          alert('Payment cancelled');
        },
      },
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Razorpay error:', error);
      alert('Payment initiation failed. Please try again.');
      setLoading(false);
    }
  };

  const handlePay = (e) => {
    e.preventDefault();

    if (!address.trim() || !blockNumber.trim()) {
      alert('Please enter your address and block number.');
      return;
    }

    setLoading(true);

    if (paymentMethod === 'card' || paymentMethod === 'upi') {
      handleRazorpayPayment();
    } else if (paymentMethod === 'cod') {
      // Cash on Delivery - instant success
      setOrderId(`COD-${Date.now()}`);
      completeOrder();
      setOrderSuccess(true);
      setLoading(false);
    }
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

  // Order Success Display
  if (orderSuccess) {
    return (
      <section className='min-h-screen bg-gradient-to-b from-green-50 to-white'>
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

              {/* Order Items */}
              <div className='bg-white rounded-xl p-6 shadow-lg'>
                <h3 className='text-2xl font-semibold mb-4'>Order Items</h3>
                <div className='space-y-3 max-h-96 overflow-y-auto'>
                  {items.map((item) => (
                    <div key={item.id} className='flex items-center gap-4 bg-zinc-50 rounded-lg p-4 border border-zinc-200'>
                      <div className='w-16 h-16 bg-white rounded-lg flex items-center justify-center'>
                        <img src={item.image} alt={item.name} className='w-12 h-12 object-contain' />
                      </div>
                      <div className='flex-1'>
                        <p className='font-semibold text-zinc-800'>{item.name}</p>
                        <p className='text-sm text-zinc-500'>Qty: {item.qty} × Rs {item.price.toFixed(2)}</p>
                      </div>
                      <div className='font-bold text-lg text-zinc-800'>Rs {(item.price * item.qty).toFixed(2)}</div>
                    </div>
                  ))}
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
                    <span className='font-bold text-green-600'>Rs {orderTotal.toFixed(2)}</span>
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

              <button 
                type='submit' 
                disabled={loading}
                className={`w-full px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  loading 
                    ? 'bg-zinc-300 text-zinc-600 cursor-not-allowed' 
                    : 'bg-linear-to-b from-red-400 to-orange-500 text-white hover:scale-[1.01] hover:to-orange-600'
                }`}>
                {loading ? 'Processing...' : 'Pay Now'}
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
