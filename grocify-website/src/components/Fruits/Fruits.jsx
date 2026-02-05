import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import Bgfruits from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Veggies" bgImage={Bgfruits} categories={["Fruits","Vegetables"]}/>
    </div>
  )
}

export default Fruits
