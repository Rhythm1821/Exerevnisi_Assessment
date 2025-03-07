import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import StorySection from './components/StorySection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='min-h-screen pt-16 font-serif'>
      <Navbar />
      <Hero />
      <hr className='border-neutral-800' />
      <FeatureSection />
      <hr className='border-neutral-800' />
      <StorySection />
      <hr className='border-neutral-800' />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App
