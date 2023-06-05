import React from 'react';
import './Slider.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import {SliderProducts} from "../../data/products";


export const Slider = () => {
    return (
        <div className='container'>
            <Swiper
                breakpoints={{
                    640: {
                        slidesPerView: 3
                    },
                    0: {
                        slidesPerView: 1
                    }
                }}
                modules={[Pagination, Navigation]}
                className='miSwiper'
                navigation={true}
                loopFillGroupWithBlank={true}
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
            >
                {SliderProducts.map((slider, index) => (
                    <SwiperSlide key={index}>
                        <div className='left'>
                            <div className='name'>
                                <span>{slider.name}</span>
                                <span>{slider.detail}</span>
                            </div>
                            <span>{slider.price}$</span>

                            <div>Shop now</div>
                        </div>
                        <img src={slider.img} alt="product" className='product'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

