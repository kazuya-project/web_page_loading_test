import { Flex, Spacer, Box, Separator, HoverCard, Portal, Text, Grid } from "@chakra-ui/react";

export async function MainMenu() {
    const response = await fetch("http://localhost:3000/menu.json");
    const json = await response.json();
    const menu_items: any[] = json.menu_items;
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
