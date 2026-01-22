"use client";

import { Text, SkeletonText, Grid, GridItem, Highlight, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-fade';

export function Ticker() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const basePath: string = process.env.NODE_ENV === 'production' ? '/web_page_loading_test/' : '';
            const response = await fetch(basePath + 'ticker.json');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setData(jsonData.ticker_data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, []);

    if (loading) {
        return <SkeletonText noOfLines={1}></SkeletonText>
    }

    if (error) {
        return <Text textStyle="xs" textAlign="right">Error: {error}</Text>;
    }

    function createSwiperSlide(item: any) {
        const highlightText: string = item.value;
        const tickerText: string = item.ticker_name + ' ' + item.value
        const color: string = item.up ? "green" : "red";

        return (
            <SwiperSlide>
                <Text textStyle="xs" textAlign="right">
                    <Highlight query={highlightText} styles={{ color: color, fontWeight: "bold" }}>
                        {tickerText}
                    </Highlight>
                </Text>
            </SwiperSlide>
        );
    }

    return (
        <Swiper 
            modules={[Autoplay, EffectFade]}
            autoplay={{delay: 5000, disableOnInteraction: false}}
            loop={true}
            effect={"fade"}
            fadeEffect={{crossFade: true}}
        >
            {data.map((item: any, index) => createSwiperSlide(item))}
        </Swiper>
    );
}
