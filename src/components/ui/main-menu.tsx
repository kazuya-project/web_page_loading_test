"use client"

import { Flex, Spacer, Box, Separator, HoverCard, Portal, Text, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function MainMenu() {
    const [menuItems, setMenuItems] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("./menu.json")
            .then(res => res.json())
            .then(json => {
                setMenuItems(json.menu_items || []);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to load menu", err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return null;
    }

    const menu_items = menuItems;
    return (
        <>
            <Flex gap="4">
                <Spacer />
                {menu_items.map((menu, index) => (
                    <>
                        <HoverCard.Root openDelay={0} closeDelay={0} skipAnimationOnMount={true}>
                            <HoverCard.Trigger asChild>
                                <Box mb="4">{menu.menu_name}</Box>
                            </HoverCard.Trigger>
                            <Portal>
                                <HoverCard.Positioner>
                                    <HoverCard.Content>
                                        <Grid templateColumns="repeat(3, 1fr)">
                                            {menu.submenus.map((submenu : any[], submenu_index: any) => (
                                                <Text textStyle="md">{submenu}</Text>
                                            ))}
                                        </Grid>
                                    </HoverCard.Content>
                                </HoverCard.Positioner>
                            </Portal>
                        </HoverCard.Root>
                        <Spacer />
                    </>
                ))}
            </Flex>
            <Separator variant="solid" mb="4" size="lg"/>
        </>
    )
}
