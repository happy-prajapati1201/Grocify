import React, { useState } from 'react'
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'
import Heading from '../Heading/Heading'

// Add custom animation styles
const styles = `
  @keyframes slideDown {
    from {
      transform: translateY(-100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const [showToast, setShowToast] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    })
  }

  return (
    <>
      {/* Inject custom animations */}
      <style>{styles}</style>
      
      {/* Success Toast - Enhanced */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-100 pointer-events-none">
        {showToast && (
          <div className="relative animate-[slideDown_0.4s_ease-out] shadow-2xl">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-linear-to-r from-green-200 to-emerald-200 blur-xl opacity-20 rounded-2xl"></div>
            
            {/* Main toast card */}
            <div className="relative flex items-center gap-4 bg-linear-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl px-8 py-5 backdrop-blur-sm">
              {/* Icon with pulse animation */}
              <div className="shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-20"></div>
                  <div className="relative flex items-center justify-center w-14 h-14 bg-linear-to-r from-green-300 to-emerald-400 rounded-full shadow-lg">
                    <FaCheckCircle className="text-white text-2xl" />
                  </div>
                </div>
              </div>
              
              {/* Message */}
              <div className="flex flex-col gap-1">
                <p className="text-lg font-bold text-green-700">Success!</p>
                <p className="text-sm font-medium text-green-600">Your message has been sent successfully. We'll get back to you soon!</p>
              </div>
            </div>
          </div>
        )}
      </div>

    <section className='min-h-screen bg-linear-to-b from-white to-orange-50/30'>
      <div className='max-w-[1400px] mx-auto px-6 md:px-10 py-20 mt-20'>
        <div className='text-center mb-12'>
          <Heading heighlight="Contact" Heading="Us" />
          <p className='text-zinc-600 mt-4 max-w-2xl mx-auto'>
            Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-10 items-start'>
          {/* Contact Form */}
          <div className='bg-white rounded-2xl shadow-lg p-8 md:p-10'>
            <h2 className='text-2xl font-bold text-zinc-800 mb-6'>Send us a message</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name Field */}
              <div>
                <label htmlFor='name' className='block text-sm font-semibold text-zinc-700 mb-2'>
                  Your Name
                </label>
                <div className='relative'>
                  <span className='absolute left-4 top-1/2 -translate-y-1/2 text-orange-500'>
                    <FaUser />
                  </span>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='Enter your name'
                    className='w-full pl-12 pr-4 py-3 border-2 border-zinc-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors'
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor='phone' className='block text-sm font-semibold text-zinc-700 mb-2'>
                  Phone Number
                </label>
                <div className='relative'>
                  <span className='absolute left-4 top-1/2 -translate-y-1/2 text-orange-500'>
                    <FaPhone />
                  </span>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder='Enter your phone number'
                    className='w-full pl-12 pr-4 py-3 border-2 border-zinc-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors'
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor='email' className='block text-sm font-semibold text-zinc-700 mb-2'>
                  Email Address
                </label>
                <div className='relative'>
                  <span className='absolute left-4 top-1/2 -translate-y-1/2 text-orange-500'>
                    <FaEnvelope />
                  </span>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='Enter your email'
                    className='w-full pl-12 pr-4 py-3 border-2 border-zinc-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors'
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor='message' className='block text-sm font-semibold text-zinc-700 mb-2'>
                  Message
                </label>
                <div className='relative'>
                  <span className='absolute left-4 top-4 text-orange-500'>
                    <MdMessage />
                  </span>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows='6'
                    placeholder='Write your message here...'
                    className='w-full pl-12 pr-4 py-3 border-2 border-zinc-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none'
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full bg-linear-to-b from-red-400 to-orange-500 text-white font-semibold py-4 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300'
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-lg p-8'>
              <h2 className='text-2xl font-bold text-zinc-800 mb-6'>Get in touch</h2>
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <span className='flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600 text-xl shrink-0'>
                    <FaMapMarkerAlt />
                  </span>
                  <div>
                    <h3 className='font-semibold text-zinc-800 mb-1'>Our Address</h3>
                    <p className='text-zinc-600'>123 Grocery Street, Fresh Market District, City 12345</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <span className='flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600 text-xl shrink-0'>
                    <FaPhone />
                  </span>
                  <div>
                    <h3 className='font-semibold text-zinc-800 mb-1'>Phone Number</h3>
                    <p className='text-zinc-600'>+1 (555) 123-4567</p>
                    <p className='text-zinc-600'>+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <span className='flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600 text-xl shrink-0'>
                    <FaEnvelope />
                  </span>
                  <div>
                    <h3 className='font-semibold text-zinc-800 mb-1'>Email Address</h3>
                    <p className='text-zinc-600'>support@grocify.com</p>
                    <p className='text-zinc-600'>info@grocify.com</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <span className='flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600 text-xl shrink-0'>
                    <FaClock />
                  </span>
                  <div>
                    <h3 className='font-semibold text-zinc-800 mb-1'>Working Hours</h3>
                    <p className='text-zinc-600'>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className='text-zinc-600'>Saturday: 10:00 AM - 4:00 PM</p>
                    <p className='text-zinc-600'>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className='bg-white rounded-2xl shadow-lg p-4 overflow-hidden'>
              <div className='w-full h-64 rounded-lg overflow-hidden border border-orange-100'>
                <iframe
                  title='Grocify Location'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.039861928109!2d72.5709723!3d23.0225059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f23e8a5b5d%3A0x8b3d06cdd0b2de2d!2sAhmedabad%2C%20Gujarat%20380001%2C%20India!5e0!3m2!1sen!2sin!4v1700000000100!5m2!1sen!2sin'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactUs
