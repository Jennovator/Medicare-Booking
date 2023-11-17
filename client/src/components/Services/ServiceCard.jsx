import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;
  return (
    <div className='py-[30px] px-3 lg:px-5 bg-amber-50/70 rounded-2xl drop-shadow-xl'>
      <h2 className='text-[26px] leading-9 text-headingColor font-[700]'>{name}</h2>
      <p className='text-[16px] leading-7 text-textColor font-[400] mt-4'>
        {desc}
      </p>

      <div className='flex items-center justify-between mt-[30px]'>
        <Link
          to='/doctors'
          className='flex w-[44px] h-[44px] border border-solid border-[#181A1E] rounded-full items-center justify-center group hover:bg-primaryColor hover:border-none'
        >
          <BsArrowRight className='group-hover:text-white h-5 w-6' />
        </Link>

        <span 
          className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]'
          style={{background:`${bgColor}`, color: `${textColor}`, borderRadius: '6px 6px 6px 6px'}}
        >
          {index + 1}
        </span>
      </div>
    </div>
  )
}

export default ServiceCard;