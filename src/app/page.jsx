"use client"
import {Index} from '@/component/footer/Index'
import HeroComponent from '@/component/heroSection/Index'
import NavBar from '@/component/navbar/Index'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavBar />
      <HeroComponent />
      <Index />
    </div>
  )
}

export default page

