import { Flex, Spacer, Box, Separator, HoverCard, Portal, Text, Grid } from "@chakra-ui/react";
import fs from "fs";
import path from "path";

export async function MainMenu() {
    const filePath = path.join(process.cwd(), "public", "menu.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const json = JSON.parse(fileContents);
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
