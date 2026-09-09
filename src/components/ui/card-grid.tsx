"use client"

import { Box, Stack, HStack, Image, Center, Separator, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface MediaContainerProps {
    src: string;
    type: "image" | "video";
}

function MediaContainer({ src, type }: MediaContainerProps) {
    return (
        <Box
            position="relative"
            width="120px"
            height="120px"
            flexShrink="0"
            overflow="hidden"
            bg="gray.100"
            borderRadius="md"
        >
            {type === "image" ? (
                <Image
                    src={src}
                    alt={src}
                    loading="lazy"
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                />
            ) : (
                <video
                    src={src}
                    muted
                    loop
                    autoPlay
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}
                />
            )}
        </Box>
    );
}

export function CardGrid() {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(json => {
                setData(json.data || []);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to load data", err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return null;
    }

    const d = data;

    return (
        <Center>
            <Box columnCount="2" gap="0" breakInside="avoid">
                {d.map((item, index) => (
                    <Stack breakInside="avoid" ml="4" mr="4">
                        <HStack>
                            {item.hasOwnProperty("img") && (
                                <MediaContainer src={item.img} type="image" />
                            )}
                            {item.hasOwnProperty("video") && (
                                <MediaContainer src={item.video} type="video" />
                            )}
                        </HStack>
                        <HStack><Heading size="xl">{item.title}</Heading></HStack>
                        <HStack><Text textStyle="sm">{item.desc}</Text></HStack>
                        <Separator mt="2" mb="2" />
                    </Stack>
                ))}
            </Box>
        </Center>
    );
}
