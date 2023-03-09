import React from 'react'
import Avatar from '../Assets/Avatar.png'

const Body = () => {
  return (
    <div className=" w-[80%] m-auto p-3 flex items-center gap-5 lg:gap-0 lg:flex-col-reverse lg:w-[90%] lg:px-0">
      <div className=" w-[55%] lg:w-full">
        <h1 className=" font-serif text-[#b1cbf5] font-bold text-[55px] lg:text-[40px] lg:text-center">
          Hi, I am Daniella
        </h1>
        <p className=' lg:w-full lg:text-center'>
          I’m a Graphic Designer. I am passionate about creating eye-catching designs for you and your users. Let's chat and I would handle that design job to your taste.
        </p>
      </div>
      <div className=" w-[35%] lg:w-[50%] md:w-[75%] lg:m-auto">
        <img src={Avatar} alt="" className='w-full'/>
      </div>
    </div>
  );
}

export default Body