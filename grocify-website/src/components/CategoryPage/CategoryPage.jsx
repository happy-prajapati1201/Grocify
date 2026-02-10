import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import Category from '../Category/Category'

const CategoryPage = ({title,bgImage,categories=[]}) => {

    let filterdItems = categories.includes('All')
    ? ProductList 
    :ProductList.filter(item=> categories.includes(item.category))

    const renderProduct = filterdItems.map(product => {
      return(
        <Cards 
          key={product.id}
          id={product.id}
          image={product.image} 
          name={product.name} 
          price={product.price}
          category={product.category}
          quantity={product.quantity}
        />
      )
    })

  return (
    <div>
      <Banner title={title} bgImage={bgImage}/>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-9 py-20 max-w-[1400px] mx-auto'>
        {renderProduct}
      </div>
    </div>
  )
}

export default CategoryPage
