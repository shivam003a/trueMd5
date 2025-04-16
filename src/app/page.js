"use client"

import React from 'react'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import FAQ from '@/components/Faq'
import Footer from '@/components/Footer'

function Home() {
  return (
    <>
      <div className='relative'>
        <div className='max-w-[1200px] mx-auto'>
          <Hero />
        </div>

        <video loop autoPlay muted className='w-full h-full absolute top-0 left-0 object-cover z-0 opacity-5'>
          <source src={'/assets/bg.mp4'} />
        </video>
      </div>

      <div className='max-w-[1200px] mx-auto z-100'>
        <Features />
      </div>

      <div className='z-100'>
        <FAQ />
      </div>

      <div className='z-100'>
        <Footer />
      </div>
    </>
  )
}

export default Home
