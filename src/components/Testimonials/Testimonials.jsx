import React from 'react';
import css from '../Testimonials/Testivonials.module.css'
import Hero from '../../assets/testimonialHero.png'
import {Swiper, SwiperSlide} from "swiper/react";
import {TestimonialsData} from "../../data/testimonials";

export const Testimonials = () => {
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>

                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
                </div>

                <img src={Hero} alt=""/>

                <div className={css.container}>
                    <span>100k</span>
                    <span>Happy Customers with us</span>
                </div>
            </div>
                <div className={css.reviews}>Reviews</div>

            <div className={css.carousel}>
                <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}
                className={css.tCarousel}

                >
                    {TestimonialsData.map((el, i) => {
                        return (
                            <SwiperSlide key={i}>
                               <div className={css.testimonial}>
                                   <img src={el.image} alt={el.name}/>
                                   <span>{el.comment}</span>
                                   <hr/>
                                   <span>{el.name}</span>
                               </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    );
};

