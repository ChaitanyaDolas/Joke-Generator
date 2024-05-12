import React from 'react'
import { FaDiceFive } from "react-icons/fa";

const CustomButton = ({ onClick }) => {
  return (
    <div className='flex justify-center items-center mt-6  '>
      <button onClick={onClick} className=' w-12 h-12 bg-[#eb5e28] flex items-center justify-center rounded-full hover:bg-[#deb09d] ' >
        <FaDiceFive size='30px' />
      </button>
    </div>
  )
}

export default CustomButton