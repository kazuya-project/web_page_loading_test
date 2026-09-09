"use client"

import { Box, Stack, HStack, Image, Center, Separator, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function NewsList() {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("./news-list.json")
            .then(res => res.json())
            .then(json => {
                setData(json.news_list || []);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to load news list", err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return null;
    }

    return (
        <>
            {data.map((item: any, index) => (
                <>
                    <Grid templateColumns="repeat(5, 1fr)">
                        <GridItem colSpan={1} mr="2" mb="2">
                            <Image src={item.img} w="150px" height="150px" fit="cover" loading="lazy" ></Image>
                        </GridItem>
                        <GridItem colSpan={4} mr="2" mb="2">
                            <Heading size="2xl">{item.headline}</Heading>
                            <Text>{item.subhead}</Text>
                        </GridItem>
                    </Grid>
                    <Separator mb="2"></Separator>
                 </>
            ))}
        </>
    );
}
