import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Submissions from './Submissions'

const Layout = () => {
  return (
    <div className='min-h-screen min-w-screen h-fit w-screen overflow-x-hidden bg-[##F8F9FD]'>
      <Header />
      <HeroSection />
      <Submissions />
    </div>
  )
}

export default Layout
