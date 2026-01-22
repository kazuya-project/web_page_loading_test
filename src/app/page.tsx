import { CardGrid } from "@/components/ui/card-grid";
import { PageHeader } from "@/components/ui/page-header";
import { MainMenu } from "@/components/ui/main-menu";
import { Headline } from "@/components/ui/headline";
import { Carousel } from "@/components/ui/carousel";
import { NewsList } from "@/components/ui/news-list";
import { Grid, GridItem } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

export default async function Page() {
    return (
        <Container width="1920px">
            <PageHeader></PageHeader>
            <MainMenu></MainMenu>
            <Grid templateColumns="repeat(5, 1fr)">
                <GridItem colSpan={3} mr="4">
                    <Headline></Headline>
                    <Carousel></Carousel>
                    <NewsList></NewsList>
                </GridItem>
                <GridItem colSpan={2}>
                    <CardGrid></CardGrid>
                </GridItem>
            </Grid>
        </Container>
    )
}
