import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick} className='bg-linear-to-b from-red-400 to-orange-500 text-white px-8 py-3 rounded-lg 
                        text-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>
        {props.content} 
    </button>
  )
}

export default Button
