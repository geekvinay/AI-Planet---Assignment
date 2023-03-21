import React from 'react'
import logo from '../assets/AI Planet Logo.png'

const Header = () => {
  return (
    <div className='wrapper bg-white h-[5rem] w-[100%] flex justify-center'>
      <header className='w-[100%] max-w-[1240px] h-full max-w-96 flex items-center'>
        <a href='/'>
          <img src={logo} alt='' className='h-[60%]' />
        </a>
      </header>
    </div>
  )
}

export default Header
