import React from 'react';
import { faqs } from '../../constants';
import FaqItem from './FaqItem';

const FaqList = () => {
  return (
    <ul className='mt-[38px]'>
      {
        faqs.map((item, index) =>
          <FaqItem item={item} key={index} />
        )
      }
    </ul>
  )
}

export default FaqList;