import { Box, Stack, HStack, Image, Center, Separator, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import fs from "fs";
import path from "path";

export async function NewsList() {
    const filePath = path.join(process.cwd(), "public", "news-list.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const json = JSON.parse(fileContents);
    const data: any[] = json.news_list;

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
