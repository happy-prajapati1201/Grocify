import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Toast from '../Toast/Toast'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Toast />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
