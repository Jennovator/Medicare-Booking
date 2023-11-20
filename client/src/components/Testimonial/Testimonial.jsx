import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { HiStar } from 'react-icons/hi';
import { testimonials } from '../../constants';
import { patientAvatar } from '../../assets';

const Testimonial = () => {
    return (
        <div className='mt-[30px] lg:mt-[55px]'>
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
                className='pb-[70px]'
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className='py-[30px] px-5 rounded-3'>
                            <div className='flex items-center gap-[13px]'>
                                <img src={testimonial.image} alt='' />
                                <div>
                                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                        {testimonial.name}
                                    </h4>
                                    <div className='flex items-center gap-[2px]'>
                                        {Array.from({ length: Math.floor(testimonial.star) }, (_, starIndex) => (
                                            <HiStar
                                                key={starIndex}
                                                className='text-yellowColor w-[18px] h-5'
                                            />
                                        ))}
                                        {testimonial.star % 1 === 0.5 && (
                                            <HiStar
                                                className='text-yellowColor w-[18px] h-5'
                                                style={{ clipPath: 'polygon(0 0, 50% 0%, 50% 100%, 0% 100%)' }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                                "{testimonial.testimonial}"
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonial;
