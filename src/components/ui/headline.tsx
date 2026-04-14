"use client";

import { Box, Heading, Text, Image } from "@chakra-ui/react";
import blackMarble2016_928m_asia_east_labeled from '../../resources/BlackMarble_2016_928m_asia_east_labeled.js';

const base64_url = 'data:image/jpeg;base64, ' + blackMarble2016_928m_asia_east_labeled;

export function Headline() {
    return (
        <Box>
            <Box 
                position="relative" 
                width="100%" 
                mb="4"
                aspectRatio="16/9"
                overflow="hidden"
                bg="gray.100"
                borderRadius="md"
            >
                <Image
                    src={base64_url}
                    alt="World map visualization"
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    onLoad={() => console.log("Done loading")}>
                </Image>
            </Box>
            <Heading size="6xl" mb="4">
                Lorem ipsum dolor sit amet
            </Heading>
            <Text textStyle="md" mb="4">
                This 19 MB image will load last.
            </Text>
        </Box>
    )
}
