import React from 'react'
import BgAll from '../../assets/all-banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage'

const Allproducts = () => {
  return (
    <div>
      <CategoryPage title="All products" bgImage={BgAll} categories={['All']}/>
    </div>
  )
}

export default Allproducts
