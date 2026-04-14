"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Box, Image, Heading, Skeleton } from "@chakra-ui/react";

import 'swiper/css';
import 'swiper/css/navigation';

import image_552 from '../../resources/image-552';
import image_496 from '../../resources/image-496';
import image_1290 from '../../resources/image-1290';

const base64_url_552 = 'data:image/jpeg;base64, ' + image_552;
const base64_url_496 = 'data:image/jpeg;base64, ' + image_496;
const base64_url_1290 = 'data:image/jpeg;base64, ' + image_1290;

interface CarouselSlideProps {
    src: string;
    alt: string;
    heading: string;
    aspectRatio: string;
}

function CarouselSlide({ src, alt, heading, aspectRatio }: CarouselSlideProps) {
    return (
        <Box>
            <Box 
                position="relative" 
                width="100%" 
                mb="4"
                aspectRatio={aspectRatio}
                overflow="hidden"
                bg="gray.100"
            >
                <Image 
                    src={src} 
                    alt={alt}
                    loading="lazy"
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                />
            </Box>
            <Heading size="4xl" mb="4">
                {heading}
            </Heading>
        </Box>
    );
}

export function Carousel() {
    return (
        <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{delay: 2000, disableOnInteraction: false}} loop={true}>
            <SwiperSlide>
                <CarouselSlide 
                    src={base64_url_552}
                    alt="Carousel slide 1"
                    heading="Carousel headline 1"
                    aspectRatio="16/9"
                />
            </SwiperSlide>

            <SwiperSlide>
                <CarouselSlide 
                    src={base64_url_496}
                    alt="Carousel slide 2"
                    heading="Carousel headline 2"
                    aspectRatio="16/9"
                />
            </SwiperSlide>

            <SwiperSlide>
                <CarouselSlide 
                    src={base64_url_1290}
                    alt="Carousel slide 3"
                    heading="Carousel headline 3"
                    aspectRatio="16/9"
                />
            </SwiperSlide>
      </Swiper>
    );
}
