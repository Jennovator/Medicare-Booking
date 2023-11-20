import React from 'react';
import { Link } from 'react-router-dom';
import { heroImg01, heroImg02, heroImg03, featureImg, videoIcon, avatarIcon, faqImg } from '../assets';
import { BsArrowRight } from 'react-icons/bs';
import { finderLinks, features } from '../constants';
import { About, ServiceList, DoctorList, FaqList } from '../components';

const GridItem = ({ icon, title, description, path }) => (
  <div className='py-[30px] px-5'>
    <div className='flex items-center justify-center'>
      <img src={icon} alt='' />
    </div>
    <div className='mt-[30px]'>
      <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>{title}</h2>
      <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>{description}</p>

      <Link
        to={path}
        className='flex w-[44px] h-[44px] border border-solid border-[#181A1E] mt-[30px] rounded-full mx-auto items-center justify-center group hover:bg-primaryColor hover:border-none'
      >
        <BsArrowRight className='group-hover:text-white h-5 w-6' />
      </Link>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      {/* --------- HERO SECTION --------- */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

            {/* --------- hero content --------- */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  We help patient live a healthy, longer life.
                </h1>
                <p className='text__para'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <button className='btn'>Request an Appointment</button>
              </div>

              {/* --------- hero counter !!!TO BE UPDATED INTO ONE BLOCK OF CODE!!! --------- */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    30+
                  </h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Years of Experience</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    15+
                  </h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Clinic Location</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    100%
                  </h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Patient Satisfaction</p>
                </div>
              </div>
            </div>

            <div className='hidden lg:flex gap-[30px] justify-end'>
              <div>
                <img className='w-full' src={heroImg01} alt='' />
              </div>
              <div className='mt-[30px]'>
                <img className='w-full mb-[30px]' src={heroImg02} alt='' />
                <img className='w-full mb-[30px]' src={heroImg03} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------- HERO SECTION END --------- */}

      <section>
        <div className="container">

          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Providing the best medical services
            </h2>
            <p className='text__para text-center'>World-class care for everyone. Our health system offers unmatched, expert health care.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

            {finderLinks.map((link, index) => (
              <GridItem
                key={index}
                icon={link.icon}
                title={link.display}
                description={link.description}
                path={link.path}
              />
            ))}

            {/* <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt='' />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a Doctor
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link 
                  to='/doctors'
                  className='flex w-[44px] h-[44px] border border-solid border-[#181A1E] mt-[30px] rounded-full mx-auto items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  <BsArrowRight className='group-hover:text-white h-5 w-6'/>
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt='' />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a Location
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link 
                  to='/doctors'
                  className='flex w-[44px] h-[44px] border border-solid border-[#181A1E] mt-[30px] rounded-full mx-auto items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  <BsArrowRight className='group-hover:text-white h-5 w-6'/>
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt='' />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Book Appointment
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link 
                  to='/doctors'
                  className='flex w-[44px] h-[44px] border border-solid border-[#181A1E] mt-[30px] rounded-full mx-auto items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  <BsArrowRight className='group-hover:text-white h-5 w-6'/>
                </Link>
              </div>
            </div> */}

          </div>

        </div>
      </section>

      <About />

      {/* --------- SERVICES SECTION --------- */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Our medical services
            </h2>
            <p className='text__para text-center'>
              World-class care for everyone. Our health system offers unmatched, expert health care.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* --------- SERVICES SECTION END --------- */}

      {/* --------- FEATURE SECTION --------- */}
      <section>
        <div className="container">
          <div className='flex items-center justify-between flex-col lg:flex-row'>

            {/* --------- feature content --------- */}
            <div className='xl:w-[670px]'>
              <h2 className='heading'>
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className='pl-4'>
                {
                  features.map((item, index) => (
                    <li key={index} className='text__para'>
                      {index + 1}. {item.description}
                    </li>
                  ))
                }
              </ul>

              <Link to='/'>
                <button className='btn'> Learn More </button>
              </Link>
            </div>

            {/* --------- feature image --------- */}
            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={featureImg} alt='' className='w-3/4' />
              <div className='w-[150px] lg:w-[240px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] drop-shadow-xl'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[6px] lg:gap-3'>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                      Tue, 24
                    </p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                      10:00 AM
                    </p>
                  </div>

                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center bg-yellowColor justify-center rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                    <img src={videoIcon} alt='' />
                  </span>
                </div>

                <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
                  Consultation
                </div>

                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                  <img src={avatarIcon} alt='' />
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* --------- FEATURE SECTION END --------- */}

      {/* --------- DOCTORS SECTION --------- */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Our Great Doctors
            </h2>
            <p className='text__para text-center'>
              World-class care for everyone. Our health system offers unmatched, expert health care.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* --------- DOCTORS SECTION END --------- */}
      
      {/* --------- FAQ SECTION --------- */}
      <section>
        <div className="container">
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src={faqImg} alt=''/>
            </div>
            <div className='w-full  md:w-1/2'>
              <h2 className='heading'> Most questions by our beloved patients </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* --------- FAQ SECTION END --------- */}

    </>
  )
}

export default Home;