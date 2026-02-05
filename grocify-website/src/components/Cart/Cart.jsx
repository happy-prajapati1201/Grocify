import React from 'react'
import Banner from '../Banner/Banner'
import bgImage from '../../assets/all-banner.jpg'
import ProductList from '../ProductList/ProductList'
import CategoryPage from '../CategoryPage/CategoryPage'

const Cart = () => {
  return (
    <div>
     <CategoryPage title="Your Cart" bgImage={bgImage} />
    </div>
  )
}

export default Cart
