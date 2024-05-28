"use client"
import Footer from '@/component/footer/Index'
import HeroComponent from '@/component/heroSection/Index'
import NavBar from '@/component/navbar/Index'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavBar />
      <HeroComponent />
      <Footer/>
     
    </div>
  )
}

export default page

