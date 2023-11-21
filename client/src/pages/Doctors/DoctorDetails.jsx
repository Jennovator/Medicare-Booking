import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { doctors } from '../../constants';
import { starIcon } from '../../assets';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';

const DoctorDetails = () => {
  const { id } = useParams(); // Get the ID from the URL params

  // Find the doctor with the matching ID
  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) {
    // Handle the case where the doctor is not found
    return <div>Doctor not found</div>;
  }

  const {
    name,
    specialty,
    avgRating,
    totalRating,
    photo,
    about,
    bio,
    education,
    experience
  } = doctor;

  const [tab, setTab] = useState('about');

  return(
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={photo} alt='' className='w-full'/>
              </figure>

              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                  {specialty}
                </span>
                <h3 className='text-headingColor mt-3 font-bold text-[22px] leading-9'>
                  {name}
                </h3>
                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={starIcon} alt='' /> {avgRating} 
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400]'>
                    ({totalRating})
                  </span>
                </div>

                <p className='text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'>
                  {bio}
                </p>
              </div>
            </div>

            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button 
                onClick={() => setTab('about')}
                className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button 
                onClick={() => setTab('feedback')}
                className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className='mt-[50px]'>
              {
                tab === 'about' && <DoctorAbout name={name} about={about} education={education} experience={experience} />
              }
              {
                tab === 'feedback' && <Feedback />
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails;