import React from 'react';
import { formatDate } from '../../utils/formatDate';

const DoctorAbout = ({ name, about, education, experience }) => {
  return (
    <div>
      <div>
        <h3 className='flex items-center gap-2 font-semibold text-[20px] leading-[30px] text-headingColor'>
          Get to know
          <span className='text-irisBlueColor font-bold leading-9'>
            {name}
          </span>
        </h3>
        <p className='text__para'>
          {about}
        </p>
      </div>

      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Education
        </h3> <hr />

        <ul className='pt-4 md:p-5'>
          {
            education.map((educ) => (
              <li
                key={educ.degree}
                className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'
              >
                <div>
                  <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                    {formatDate(educ.year)}
                  </span>
                  <p className='text-[15px] leading-6 font-medium text-textColor'>
                    {educ.degree}
                  </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                  {educ.school}
                </p>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Experience
        </h3> <hr />

        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          {
            experience.map((exp) => (
              <li
                key={exp.position}
                className='p-4 bg-[#fff9ea] rounded drop-shadow-lg'
              >
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                  {exp.position}
                </p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                  {exp.company}
                </p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default DoctorAbout;