import React, { useContext } from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'
import { LikesContext } from '../../context/LikesContext'
import { CartContext } from '../../context/CartContext'

const Cards = ({image, name, price, id, category}) => {
  const { toggleLike, isLiked } = useContext(LikesContext);
  const liked = isLiked(id);
  const { addToCart } = useContext(CartContext);

  const handleLike = () => {
    toggleLike({ id, name, price, image, category });
  };

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, category }, 1);
  }

  return (
    <div className='bg-zinc-100 p-5 rounded-xl'>

        {/* card icons */}
      <div className='flex justify-between '>
        <button 
          onClick={handleLike}
          className='text-3xl transition-colors duration-300 cursor-pointer'
          style={{ color: liked ? '#ef4444' : '#d4d4d8' }}
        >
            <FaHeart />
        </button>
        <button onClick={handleAddToCart} className='bg-linear-to-b from-red-400 to-orange-500 text-white text-xl px-4 py-3 rounded-lg' >
            <FaPlus />
        </button>
      </div>

        {/* card image */}
        <div className='w-full h-60'> 
            <img src={image}  className ='w-Full h-full object-contain mx-auto' />
        </div>

        {/* Card content */}
        <div className='text-center'>
            <h3 className='text-2xl font-semibold'>{name}</h3>
            <p className='text-2xl font-bold mt-4 mb-3'>Rs {price.toFixed(2)}</p>
            <Button content="Buy Now" onClick={handleAddToCart}/>
        </div>

    </div>
  )
}

export default Cards