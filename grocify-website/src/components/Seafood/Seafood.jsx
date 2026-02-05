import React from 'react'
import Bgseafood from '../../assets/seafood-banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage'

const Seafood = () => {
  return (
    <div>
      <CategoryPage title="Meat & Seafood" bgImage={Bgseafood} categories={["Meat","SeaFood"]}/>
    </div>
  )
}

export default Seafood
