import React from "react";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider"

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveDessertMenu } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { ProductCollection } from "../../../lib/enums/product.enum";

/** REDUX SLICE & SELECTOR **/
  const dessertMenuRetriever = createSelector(
    retrieveDessertMenu,
    ( dessertMenu ) => ({ dessertMenu }),
  );

export default function NewDishes() {
    const { dessertMenu } = useSelector(dessertMenuRetriever);

    console.log("newDishes:", dessertMenu);
    return (
        <div className={"new-products-frame"}>
            <Container>
                <Stack className={"main"}>
                    <Box className={"category-title"}>Dessert Menu</Box>
                    <Stack className={"cards-frame"}>
                        <CssVarsProvider>
                            {dessertMenu.length !== 0 ? (
                            dessertMenu.map((product: Product) => {
                                const imagePath = `${serverApi}/${product.productImages[0]}`;
                                const sizVolume =
                                    product.productCollection === ProductCollection.DESSERT
                                        ? product.productSize
                                        : product.productVolume;
                                return (
                                    <Card key={product._id} variant="outlined" className={"card"}>
                                        <CardOverflow>
                                            <div className="product-sale">{sizVolume}</div>
                                            <AspectRatio ratio="1">
                                                <img src={imagePath} alt="" />
                                            </AspectRatio>
                                        </CardOverflow>

                                        <CardOverflow variant="soft" className="product-detail">
                                            <Stack className="info">
                                                <Stack flexDirection={"row"}>
                                                    <Typography className={"title"}>
                                                        {product.productName}
                                                    </Typography>
                                                    <Divider width="2" height="24" bg="#d9d9d9" />
                                                    <Typography className={"price"}>${product.productPrice}</Typography>
                                                    </Stack>
                                                    <Stack>
                                                    <Typography className={"views"}>
                                                        {product.productViews}
                                                        <VisibilityIcon 
                                                        sx={{ fontSize: 20, marginLeft: "5px" }}
                                                        />
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        </CardOverflow>
                                    </Card>
                                );
                            })
                            ) : (
                                <Box className="no-data">New products are not available</Box>
                        )}
                        </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}