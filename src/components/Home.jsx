import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ArtCard from './ArtCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
    const paintings = useLoaderData();
    return (
        <div>
            <h1 className='font-bold uppercase text-5xl bg-gradient-to-r from-blue-400 to-blue-900 
            text-center my-10 text-transparent bg-clip-text'>Bless your eyes with our gallery!</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slideToClickedSlide={true}
                loop={true}
                slidesPerView={'3'}
                clickable={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src="1.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="2.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="3.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="4.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="5.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="6.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="7.jpg" alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>

            <h1 className='font-bold uppercase text-5xl bg-gradient-to-r from-blue-400 to-blue-900 
            text-center my-10 text-transparent bg-clip-text'>Art Gallery: <br /> Paintings and Drawings for Purchase</h1>

            <table className='art-card-table'>
                <tbody>
                    {paintings.map((painting, index) => (
                        <tr key={painting._id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                            <td>
                                <ArtCard painting={painting} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home