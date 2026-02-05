import React from 'react'
import Heading from '../Heading/Heading'
import FruitCat from '../../assets/fruits-and-veggies.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import { Link } from 'react-router-dom'


const Category = () => {

    const renderCards = category.map (card=> {
        return (

            // card
            <div className='flex-1 basis-[300px]' key={card.id}>

                {/* card image */}
                <div className=' w-full min-h-[30vh] relative -mb-10'>
                     <img src={card.image} className='absolute bottom-0'></img> 
                </div>

                {/* card content */}
                <div className='bg-zinc-100 pt-17 p-8 rounded-xl'> 
                    <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                    <Link to={card.path} className='bg-linear-to-b from-red-400 to-orange-500 text-white px-8 py-3 rounded-lg 
                        text-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>See all</Link>
                </div>
            </div>
        )
    })

  return (
    <section>
        <div className='py-20 px-10 max-w-[1400px] mx-auto'>
             <Heading heighlight="Shop" Heading="by Category" />

             {/* Category cards */}
             <div className='flex flex-wrap gap-10 md:mt-15 mt-10 '>
                {renderCards}
             </div>
        </div>
    </section>
  )
}

export default Category

const category=[
    {
        id:1,
        title:'Fruits & Veggies',
        description:'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vagetables',
        image: FruitCat,
        path:'/fruits'
    },
    {
        id:2,
        title:'Dairy & Eggs',
        description:'Wholesome dairy products and free-range eggs. From creamy milk and yogurd to artisanal cheeses.',
        image: DairyCat,
        path:'/dairy'
    },
     {
        id:3,
        title:'Meat & Seafood',
        description:'High-Quality, reaponsibly sourced meat and seafood. Chooes from fresh cuts, marinated optionss,and more.',
        image: SeaFoodCat,
        path:'/seafood'
    },
]
