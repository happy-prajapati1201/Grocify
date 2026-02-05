import React from 'react'
import { PiPlant, PiFactory } from 'react-icons/pi'
import { SlBadge } from 'react-icons/sl'
import { BsTruck } from 'react-icons/bs'
import { FaLeaf, FaWarehouse, FaCheckCircle, FaThermometerHalf } from 'react-icons/fa'
import { GiFarmer, GiWateringCan } from 'react-icons/gi'
import Heading from '../Heading/Heading'

const Ourprocess = () => {
  const steps = [
    {
      id: 1,
      title: 'Farm Selection & Harvesting',
      description: 'We partner with certified organic and sustainable farms. Fruits and vegetables are hand-picked at peak ripeness by experienced farmers who understand the optimal harvest time for each crop.',
      icon: <PiPlant />,
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
      details: [
        'Partner with 120+ certified local farms',
        'Hand-picked at peak freshness',
        'Early morning harvest (4-7 AM)',
        'Soil quality testing every season',
        'Fair trade & organic certifications'
      ]
    },
    {
      id: 2,
      title: 'Washing & Sorting',
      description: 'Within 2 hours of harvest, produce arrives at our processing facility where it is washed with purified water, sorted by size and quality, and prepared in temperature-controlled rooms.',
      icon: <PiFactory />,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
      details: [
        'Triple-wash with purified water',
        'Temperature maintained at 4-8°C',
        'Automated size sorting system',
        'Removal of damaged produce',
        'UV sanitation process'
      ]
    },
    {
      id: 3,
      title: 'Quality Control & Packaging',
      description: 'Every batch undergoes rigorous quality checks for ripeness, texture, color, and safety. Items are then carefully packaged in breathable, eco-friendly materials to maintain freshness.',
      icon: <SlBadge />,
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80',
      details: [
        'Multi-point quality inspection',
        'Pesticide residue testing',
        'Ripeness & texture assessment',
        'Eco-friendly packaging materials',
        '100% traceability with batch codes'
      ]
    },
    {
      id: 4,
      title: 'Cold Chain Delivery',
      description: 'Products are loaded into refrigerated vehicles and delivered within 4-6 hours using GPS-optimized routes. Temperature is monitored in real-time to ensure vegetables and fruits stay fresh.',
      icon: <BsTruck />,
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80',
      details: [
        'GPS-tracked refrigerated trucks',
        'Real-time temperature monitoring',
        'Delivery within 4-6 hours',
        'Insulated packaging for last-mile',
        'Contact-free delivery option'
      ]
    },
  ]

  return (
    <main className="bg-white text-zinc-800">
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-20 mt-20">
        <div className="flex flex-col gap-12">

            <Heading heighlight="Detailed" Heading="Process Flow" />
         

          <div className="space-y-12">
            {steps.map((step, index) => (
              <article key={step.id} className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white text-2xl">
                          {step.icon}
                        </span>
                        <span className="text-orange-300 text-sm font-semibold tracking-wider">STEP {step.id}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>
                </div>

                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold tracking-wider">
                    STEP {step.id} OF 4
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900">{step.title}</h3>
                  <p className="text-zinc-600 leading-relaxed text-lg">{step.description}</p>
                  
                  <div className="pt-4">
                    <h4 className="text-sm font-semibold text-zinc-800 uppercase tracking-wider mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">✓</span>
                          <span className="text-zinc-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 bg-orange-50 border border-orange-100 rounded-2xl p-6 md:p-8">
            <Stat label="Avg. delivery time" value="4-6 hrs" />
            <Stat label="Orders kept chilled" value="98%" />
            <Stat label="Partner farms" value="120+" />
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-zinc-50 to-orange-50/30 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <Heading heighlight="supply" Heading="Chain Details" />
            <p className="text-zinc-600 mt-4 max-w-2xl mx-auto">Our comprehensive supply chain ensures complete transparency and quality at every touchpoint.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SupplyCard 
              icon={<GiFarmer />}
              title="Farm Partnership"
              description="Direct contracts with 120+ certified organic farms across the region. Regular audits and fair pricing."
            />
            <SupplyCard 
              icon={<FaLeaf />}
              title="Sustainable Practices"
              description="Zero-pesticide farming, crop rotation, natural fertilizers, and water conservation methods."
            />
            <SupplyCard 
              icon={<GiWateringCan />}
              title="Irrigation & Care"
              description="Drip irrigation systems, soil moisture monitoring, and optimal watering schedules for each crop."
            />
            <SupplyCard 
              icon={<FaWarehouse />}
              title="Storage Facilities"
              description="State-of-the-art cold storage with humidity control, maintaining 4-8°C for optimal freshness."
            />
            <SupplyCard 
              icon={<FaThermometerHalf />}
              title="Temperature Control"
              description="Unbroken cold chain from farm to doorstep with real-time monitoring and alerts."
            />
            <SupplyCard 
              icon={<FaCheckCircle />}
              title="Traceability"
              description="Every product tagged with batch code linking to farm, harvest date, and quality reports."
            />
          </div>
        </div>
      </section>
    </main>
  )
}

const Stat = ({ label, value }) => (
  <div className="flex flex-col gap-2 text-center md:text-left">
    <p className="text-sm uppercase tracking-[0.2em] text-orange-500">{label}</p>
    <p className="text-3xl font-bold text-zinc-900">{value}</p>
  </div>
)

const SupplyCard = ({ icon, title, description }) => (
  <div className="bg-white border border-orange-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
    <div className="flex items-center gap-4 mb-4">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-orange-600 text-3xl">
        {icon}
      </span>
      <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
    </div>
    <p className="text-zinc-600 leading-relaxed">{description}</p>
  </div>
)

export default Ourprocess
