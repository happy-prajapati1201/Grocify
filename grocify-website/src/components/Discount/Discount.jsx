import React, { useContext } from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'
import { CartContext } from '../../context/CartContext'
import { AuthContext } from '../../context/AuthContext'

const Discount = () => {
  const { isFirstTimeOrder, activateDiscount, discountActivated } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);

  const handleGetDiscount = () => {
    if (!isLoggedIn) {
      return;
    }

    if (!isFirstTimeOrder) {
      return;
    }

    if (discountActivated) {
      return;
    }

    activateDiscount();
  };

  return (
    <>
      <section className='bg-zinc-100 bg-no-repeat bg-right bg-contain' style={{backgroundImage: `url(${FreshFruits})`}}>
        <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10'>
          <span className='md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90 md:self-center '>20%</span>
          <div className='max-w-[700px]'>
            <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold '>First order Discount!</h3>
            <p className='text-zinc-600 my-6'>
              Enjoy an exclusive first orderd discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.
            </p>
            <button 
              onClick={handleGetDiscount}
              disabled={discountActivated && isLoggedIn}
              className={`${
                discountActivated && isLoggedIn
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-linear-to-b from-red-400 to-orange-500 hover:scale-105'
              } text-white px-8 py-3 rounded-lg text-lg transition-all duration-300 font-semibold`}
            >
              {discountActivated && isLoggedIn ? 'Discount Activated ✓' : 'Get a Discount'}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Discount
