"use client";

import { Heading, Center, Flex, Spacer, Button, Box, Grid, GridItem, Text } from "@chakra-ui/react"
import { Ticker } from "@/components/ui/ticker";
import { useEffect, useState } from "react";

export function PageHeader() {
    const [ds, setDs] = useState<string>("");

    useEffect(() => {
        setDs(new Date().toDateString());
    }, []);

    return (
        <>
            <Flex mt="4" gap="4">
                <Spacer />
                <Button size="xs" variant="surface" colorPalette="cyan">Subscribe</Button>
                <Button size="xs" variant="surface">Login</Button>
            </Flex>

            <Grid templateColumns="repeat(7, 1fr)">
                <GridItem colSpan={2}>

                </GridItem>

                <GridItem colSpan={3}>
                    <Center>
                        <Heading textStyle="7xl" mt="2" mb="6">
                            Web Page Loading Test
                        </Heading>
                    </Center>
                </GridItem >
                <GridItem colSpan={2}>
                    <Text textStyle="xs" textAlign="right" fontWeight="bold" mt="6">{ds}</Text>
                    <Ticker></Ticker>
                </GridItem>
            </Grid>
        </>
    );
}
