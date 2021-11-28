import React from "react";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);



const Slider = (props) => {

    return (
        <div>
            <Swiper
                navigation={{
                    prevEl: '.slidePrev-btn',
                    nextEl: '.slideNext-btn'
                }}
                loop={true}
                slidesPerView={1} spaceBetween={10} pagination={{
                    "clickable": true
                }} breakpoints={{
                    "640": {
                        "slidesPerView": 1,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 2,
                        "spaceBetween": 40
                    },
                    "1024": {
                        "slidesPerView": 3,
                        "spaceBetween": 50
                    }
                }} className="mySwiper">
                {
                    props.photos.map((photo, i) => (
                        <SwiperSlide key={i} >
                            <img src={photo} alt="" />
                        </SwiperSlide>
                    ))
                }
                <div className="my-navigation">
                    <div className="slidePrev-btn"><i className='bx bx-left-arrow-alt' ></i></div>
                    <div className="slideNext-btn"><i className='bx bx-right-arrow-alt' ></i></div>
                </div>
            </Swiper>
        </div >
    )
}
export default Slider;