import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import SimilarProduct from './SimilarProduct';

const SwiperComp = ({ productArray }) => {
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const [slides, setSlides] = useState(2.3)
    const [arrow, setArrow] = useState(true)

    useEffect(() => {
        if (screenSize < 640) {
            setSlides(2.3)
            setArrow(false)
        } else if (screenSize < 1024) {
            setSlides(3.3)
        } else {
            setSlides(5.3)
            setArrow(true)
        }
    }, [screenSize])

    window.addEventListener("resize", () => {
        setScreenSize(window.innerWidth)
    })

    return (
        <Swiper
            slidesPerView={slides}
            spaceBetween={10}
            loop={false}
            navigation={arrow}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full"
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-navigation-size": "20px",
            }}
        >
            {productArray.map((productId, index) => (
                <SwiperSlide key={index} className=' w-full  overflow-hidden '>
                    <SimilarProduct productId={productId} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SwiperComp