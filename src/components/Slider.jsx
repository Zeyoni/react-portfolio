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
                    props.source.map((element, i) => (
                        <SwiperSlide key={i} >
                            <a href={element.link} target="_blank" rel="noreferrer">
                                <img src={element.image} alt={element.description}/>
                            </a>
                        </SwiperSlide>
                    ))
                }

                <div className="my-navigation mt-2">
                    <div className="slidePrev-btn me-3"><i className='bx bx-left-arrow-alt' ></i></div>
                    <div className="slideNext-btn"><i className='bx bx-right-arrow-alt' ></i></div>
                </div>
            </Swiper>
        </div >
    )
}
export default Slider;