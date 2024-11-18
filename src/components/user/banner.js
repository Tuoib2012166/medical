import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'antd';
import '../../assets/css/banner.css';
import Swal from 'sweetalert2';

const Banner = () => {
    const carouselRef = useRef(null);
    const [autoplayInterval, setAutoplayInterval] = useState(5000); 

    useEffect(() => {
        const interval = setInterval(() => {
            carouselRef.current.next();
        }, autoplayInterval);

        return () => {
            clearInterval(interval);
        };
    }, [autoplayInterval]);


    return (
        <Carousel
            ref={carouselRef}
            autoplay={false}
            dotPosition="bottom"
            effect="fade"
            speed={1500}
        >
            <div>
                <img src="./img/banner/slide1.jpg" alt="banner cua trang chu"  />
            </div>
            <div>
                <img src="./img/banner/slide2.jpg" alt="banner cua trang chu"  />
            </div>
            <div>
                <img src='./img/banner/slide3.jpg' alt="banner cua trang chu"  />
            </div>
        </Carousel>
    );
};

export default Banner;