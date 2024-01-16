import React, { useState } from 'react';
import { formatDate } from '../../utils/formatDate';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';

const Feedback = ({ reviews, totalRating }) => {

  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All reviews ({totalRating})
        </h4>

        <div className='flex flex-col justify-between gap-10 mb-[30px]'>
          {
            reviews.map((review) => (
              <div
                key={review.name}
                className='flex gap-3'
              >
                <figure className='w-10 h-10 rounded-full'>
                  <img src={review.avatar} alt='' className='w-full' />
                </figure>

                <div>
                  <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                    {review.name}
                  </h5>
                  <p className='text-[14px] leading-6 text-textColor'>
                    {formatDate(review.dateReviewed)}
                  </p>
                  <p className='text__para mt-3 font-medium text-[15px]'>
                    {review.description}
                  </p>
                </div>

                <div className='flex gap-1 ml-auto'>
                  {Array.from({ length: Math.floor(review.star) }, (_, starIndex) => (
                    <AiFillStar
                      color='#0067FF'
                      key={starIndex}
                    />
                  ))}
                  {review.star % 1 === 0.5 && (
                    <AiFillStar
                      color='#0067FF'
                      style={{ clipPath: 'polygon(0 0, 50% 0%, 50% 100%, 0% 100%)' }}
                    />
                  )}
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {
        !showFeedbackForm &&
        <div className='text-center'>
          <button
            className='btn'
            onClick={() => setShowFeedbackForm(true)}
          >
            Give feedback
          </button>
        </div>
      }
      {
        showFeedbackForm && <FeedbackForm />
      }
    </div>
  )
}

export default Feedback;