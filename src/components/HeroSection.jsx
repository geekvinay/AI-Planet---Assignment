import React from 'react'
import bulbImg from '../assets/Hand holding bulb 3D.png'

const HeroSection = () => {
  return (
    <div className='w-[100%] h-fit bg-[#003145] flex justify-center items-center'>
      <section className='waves max-w-[1240px] py-[5rem] grid grid-cols-3 grid-row-1'>
        <div className='left-wrapper col-span-2 text-white font-sans'>
          <h1 className='text-[42px] font-semibold'>Hackathon Submissions</h1>
          <p className='text-lg py-6'>
            Lorem ipsum dolor sit amet consectetur. Urna cursus amet
            pellentesque in parturient purus feugiat faucibus. Congue laoreet
            duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus
            nec vitae.
          </p>
          <button className='bg-[#44924C] text-lg font-medium rounded-sm px-6 py-2'>
            Upload Submissions
          </button>
        </div>
        <img src={bulbImg} alt='' className='h-[18rem] justify-self-center' />
      </section>
    </div>
  )
}

export default HeroSection
