import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Carousel.css';

{/* <Link to={`/events/${id}`} className="button-88">
Register
</Link> */}

const Carousel = () => {
  return (
    <div className='carousel-container'>
        <Swiper
        spaceBetween={30}
        loop = {true}
        effect={'fade'}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
        >
        <SwiperSlide>
            <Link to={`/events/1`}><img src="https://images.unsplash.com/photo-1549451371-64aa98a6f660?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nature 1" /></Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to={`/events/2`}><img src="https://images.unsplash.com/photo-1614607653708-0777e6d003b8?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nature 2" /></Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to={`/events/3`}><img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nature 3" /></Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to={`/events/4`}><img src="https://images.unsplash.com/photo-1643759543584-fb6f448d42d4?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nature 4" /></Link>
        </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Carousel;
