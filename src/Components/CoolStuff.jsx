import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import D1 from '../Assets/Design 1.jpg'
import D2 from '../Assets/Design 2.jpg'
import D3 from '../Assets/Design 3.jpg'
import D4 from '../Assets/Design 4.jpg'
import D5 from '../Assets/Design 5.jpg'
import D6 from '../Assets/Design 6.jpg'
import D7 from '../Assets/Design 7.jpg'
import D8 from '../Assets/Design 8.jpg'
import D9 from '../Assets/Design 9.jpg'
import D10 from '../Assets/Design 10.jpg'
import D11 from '../Assets/Design 11.jpg'
import D12 from '../Assets/Design 12.jpg'

const CoolStuff = () => {
  return (
    <div className="bg-black">
      <div>
        <Nav />
        <div className="w-[80%] m-auto p-3 flex flex-wrap justify-between gap-5 lg:w-[90%]" >
          <div className=' max-w-[30%] lg:max-w-[48%] md:max-w-full'>
            <img src={D1} alt="" className='w-full' />
          </div>
          <div className=' max-w-[30%] lg:max-w-[48%] md:max-w-full'>
            <img src={D2} alt="" className='w-full' />
          </div>
          <div className=' max-w-[30%] lg:max-w-[48%] md:max-w-full'>
            <img src={D3} alt="" className='w-full' />
          </div>
          <div className=' max-w-[30%] lg:max-w-[48%] md:max-w-full'>
            <img src={D4} alt="" className='w-full' />
          </div>
          <div className=' max-w-[30%] lg:max-w-[48%] md:max-w-full'>
            <img src={D5} alt="" className='w-full' />
          </div>
          <div className=' max-w-[30%] lg:max-w-[48%] md:max-w-full'>
            <img src={D6} alt="" className='w-full' />
          </div>
          <div className=' max-w-[30%] lg:max-w-[48%] md:max-w-full'>
            <img src={D7} alt="" className='w-full' />
          </div>
          <div className=' max-w-[30%] lg:max-w-[48%] md:max-w-full'>
            <img src={D8} alt="" className='w-full' />
          </div>
          <div className=' max-w-[30%] lg:max-w-[48%] md:max-w-full'>
            <img src={D9} alt="" className='w-full' />
          </div>
          <div className=' max-w-[30%] lg:max-w-[48%] md:max-w-full'>
            <img src={D10} alt="" className='w-full' />
          </div>
          <div className=' max-w-[30%] lg:max-w-[48%] md:max-w-full'>
            <img src={D11} alt="" className='w-full' />
          </div>
          <div className=' max-w-[30%] lg:max-w-[48%] md:max-w-full'>
            <img src={D12} alt="" className='w-full' />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CoolStuff