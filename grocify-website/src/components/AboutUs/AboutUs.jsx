import React from 'react';
import Heading from '../Heading/Heading';
import Strawberry from '../../assets/strawberry.png';
import Cabbage from '../../assets/cabbage.png';
import Broccoli from '../../assets/broccoli.png';
import Eggplant from '../../assets/eggplant.png';
import Capsicum from '../../assets/capsicum.png';
import Kiwi from '../../assets/kiwi.png';

const AboutUs = () => {
  const vegetables = [
    { name: 'Cabbage', image: Cabbage, desc: 'Fresh and crispy cabbage, rich in vitamins and fiber.' },
    { name: 'Broccoli', image: Broccoli, desc: 'Nutrient-dense superfood packed with vitamins C and K.' },
    { name: 'Eggplant', image: Eggplant, desc: 'Purple perfection for delicious and healthy meals.' },
    { name: 'Capsicum', image: Capsicum, desc: 'Colorful bell peppers loaded with antioxidants.' },
    { name: 'Strawberry', image: Strawberry, desc: 'Sweet and juicy berries, perfect for desserts.' },
    { name: 'Kiwi', image: Kiwi, desc: 'Tropical fruit rich in vitamin C and dietary fiber.' },
  ];

  return (
    <section className='min-h-screen'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20 mt-16 sm:mt-20'>
        <Heading heighlight='About' Heading='Us' />

        {/* Our Story */}
        <div className='mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center'>
          <div>
            <h2 className='text-2xl sm:text-3xl font-bold mb-6 text-zinc-900'>Our Story</h2>
            <p className='text-sm sm:text-base text-zinc-700 leading-relaxed mb-4'>
              Welcome to <span className='text-orange-500 font-semibold'>Grocify</span>, your trusted partner for fresh, 
              organic vegetables and fruits delivered right to your doorstep. We started our journey with a simple mission: 
              to bring farm-fresh produce to every household.
            </p>
            <p className='text-sm sm:text-base text-zinc-700 leading-relaxed mb-4'>
              Our commitment to quality means we work directly with local farmers who share our passion for sustainable 
              agriculture and organic farming practices. Every vegetable and fruit is handpicked to ensure you receive 
              only the finest products.
            </p>
            <p className='text-sm sm:text-base text-zinc-700 leading-relaxed'>
              From crisp cabbages to vibrant bell peppers, from sweet strawberries to exotic kiwis – we bring nature's 
              best to your table, ensuring freshness and nutrition in every bite.
            </p>
          </div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
            <img src={Cabbage} alt='Fresh Cabbage' className='w-full h-32 sm:h-40 md:h-48 object-contain bg-zinc-100 rounded-xl p-4' />
            <img src={Broccoli} alt='Fresh Broccoli' className='w-full h-32 sm:h-40 md:h-48 object-contain bg-zinc-100 rounded-xl p-4' />
            <img src={Eggplant} alt='Fresh Eggplant' className='w-full h-32 sm:h-40 md:h-48 object-contain bg-zinc-100 rounded-xl p-4' />
            <img src={Capsicum} alt='Fresh Capsicum' className='w-full h-32 sm:h-40 md:h-48 object-contain bg-zinc-100 rounded-xl p-4' />
          </div>
        </div>

        {/* Our Values */}
        <div className='mt-16 sm:mt-20'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center text-zinc-900'>Our Values</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
            <div className='bg-orange-50 rounded-xl p-6 sm:p-8 text-center'>
              <div className='text-4xl sm:text-5xl mb-4'>🌱</div>
              <h3 className='text-lg sm:text-xl font-bold mb-3 text-zinc-900'>Fresh & Organic</h3>
              <p className='text-sm sm:text-base text-zinc-700'>
                We source only the freshest organic produce directly from trusted local farms, 
                ensuring quality and sustainability.
              </p>
            </div>
            <div className='bg-green-50 rounded-xl p-6 sm:p-8 text-center'>
              <div className='text-4xl sm:text-5xl mb-4'>🚚</div>
              <h3 className='text-lg sm:text-xl font-bold mb-3 text-zinc-900'>Fast Delivery</h3>
              <p className='text-sm sm:text-base text-zinc-700'>
                Same-day delivery available to bring farm-fresh vegetables and fruits to your 
                home within hours of harvest.
              </p>
            </div>
            <div className='bg-blue-50 rounded-xl p-6 sm:p-8 text-center'>
              <div className='text-4xl sm:text-5xl mb-4'>💚</div>
              <h3 className='text-lg sm:text-xl font-bold mb-3 text-zinc-900'>Customer First</h3>
              <p className='text-sm sm:text-base text-zinc-700'>
                Your satisfaction is our priority. We ensure every product meets our high 
                standards before it reaches you.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Vegetables */}
        <div className='mt-16 sm:mt-20'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center text-zinc-900'>Featured Vegetables & Fruits</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6'>
            {vegetables.map((veg, index) => (
              <div key={index} className='bg-zinc-100 rounded-xl p-3 sm:p-4 md:p-5 text-center hover:shadow-lg transition-shadow'>
                <div className='w-full h-24 sm:h-28 md:h-32 mb-2 sm:mb-3 md:mb-4'>
                  <img src={veg.image} alt={veg.name} className='w-full h-full object-contain' />
                </div>
                <h4 className='text-sm sm:text-base md:text-lg font-bold mb-1 md:mb-2 text-zinc-900'>{veg.name}</h4>
                <p className='text-xs sm:text-sm text-zinc-600'>{veg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className='mt-16 sm:mt-20 bg-linear-to-r from-orange-100 to-green-100 rounded-2xl p-6 sm:p-8 md:p-10'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-zinc-900'>Why Choose Grocify?</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='flex items-start gap-3 sm:gap-4'>
              <span className='text-xl sm:text-2xl shrink-0'>✓</span>
              <div>
                <h4 className='font-bold text-sm sm:text-base md:text-lg mb-1'>100% Fresh Guarantee</h4>
                <p className='text-xs sm:text-sm md:text-base text-zinc-700'>Every product is quality-checked before delivery</p>
              </div>
            </div>
            <div className='flex items-start gap-3 sm:gap-4'>
              <span className='text-xl sm:text-2xl  shrink-0'>✓</span>
              <div>
                <h4 className='font-bold text-sm sm:text-base md:text-lg mb-1'>Organic Certified</h4>
                <p className='text-xs sm:text-sm md:text-base text-zinc-700'>Pesticide-free, naturally grown produce</p>
              </div>
            </div>
            <div className='flex items-start gap-3 sm:gap-4'>
              <span className='text-xl sm:text-2xl  shrink-0'>✓</span>
              <div>
                <h4 className='font-bold text-sm sm:text-base md:text-lg mb-1'>Direct from Farms</h4>
                <p className='text-xs sm:text-sm md:text-base text-zinc-700'>Supporting local farmers and communities</p>
              </div>
            </div>
            <div className='flex items-start gap-3 sm:gap-4'>
              <span className='text-xl sm:text-2xl  shrink-0'>✓</span>
              <div>
                <h4 className='font-bold text-sm sm:text-base md:text-lg mb-1'>Best Prices</h4>
                <p className='text-xs sm:text-sm md:text-base text-zinc-700'>No middlemen, direct savings passed to you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
