import React from "react";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider"

const dessert = [
    { productName: "Caramel Waffle", imagePath: "/img/desert1.jpg" },
    { productName: "Red Velvet Cake", imagePath: "/img/desert2.jpg" },
    { productName: "Black Velvet Cake", imagePath: "/img/desert3.jpg" },
    { productName: "Cranberry Cookie", imagePath: "/img/desert4.jpg" },
];

export default function Desserts() {
    return (
        <div className={"new-products-frame"}>
            <Container>
                <Stack className={"main"}>
                    <Box className={"category-title"}>Dessert Menu</Box>
                    <Stack className={"cards-frame"}>
                        <CssVarsProvider>
                            {dessert.map((ele, index) => {
                                return (
                                    <Card key={index} variant="outlined" className={"card"}>
                                        <CardOverflow>
                                            {/* <div className="product-sale">Normal-size</div> */}
                                            <AspectRatio ratio="1">
                                                <img src={ele.imagePath} alt="" />
                                            </AspectRatio>
                                        </CardOverflow>

                                        <CardOverflow variant="soft" className="product-detail">
                                            <Stack className="info">
                                                <Stack flexDirection={"row"}>
                                                    <Typography className={"title"}>
                                                        {ele.productName}
                                                    </Typography>
                                                    <Divider width="2" height="24" bg="#d9d9d9" />
                                                    <Typography className={"price"}>$12</Typography>
                                                    </Stack>
                                                    <Stack>
                                                    <Typography className={"views"}>
                                                        20
                                                        <VisibilityIcon 
                                                        sx={{ fontSize: 20, marginLeft: "5px" }}
                                                        />
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        </CardOverflow>
                                    </Card>
                                );
                            })}
                        </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}