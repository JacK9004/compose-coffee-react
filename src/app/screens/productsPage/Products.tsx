import React from "react";
import { Box, Button, Container, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const products = [
    { productName: "Americano", imagePath: "/img/product1.jpg" },
    { productName: "Dolce Latte", imagePath: "/img/product2.jpg"},
    { productName: "Cafe Latte", imagePath: "/img/product3.jpg" },
    { productName: "Capuccino", imagePath: "/img/product4.jpg" },
    { productName: "Vanila Latte", imagePath: "/img/product5.jpg" },
    { productName: "Cafe Mocha", imagePath: "/img/product6.jpg" },
    { productName: "Caramel Macchiato", imagePath: "/img/product7.jpg"},
    { productName: "Dalgona Latte", imagePath: "/img/product8.jpg" },

];

export default function Products() {
    return (
        <div className={"products"}>
            <Container>
                 <Stack flexDirection={"column"} alignItems={"center"}>
                     <Stack className={"avatar-big-box"}>
                         <Box className={"top-text"}>
                           {/* <p>Menu</p> */}
                            <Box className={"search-big-box"}>
                             <form className={"search-form"} action={""} method={""}>
                                <input
                                type={"search"}
                                className={"search-input"}
                                name={"single-resSearch"}
                                placeholder={"Type here"}
                                />
                                <Button
                                className={"single-button-search"}
                                variant="contained"
                                endIcon={<SearchIcon />}
                                >
                                Search
                            </Button>
                         </form>
                        </Box>
                    </Box>
                </Stack>   

                <Stack className={"dishes-filter-section"}>
                    <Box className={"dishes-filter-box"}>
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            className={"order"}
                >
                            NEW
                        </Button>
                        <Button
                            variant={"contained"}
                            color={"secondary"}
                            className={"order"}
                        >
                            PRICE
                            </Button>
                            <Button
                            variant={"contained"}
                            color={"secondary"}
                            className={"order"}
                        >
                            VIEWS
                        </Button>
                    </Box>
                </Stack>
            </Stack>
        
                <Stack className={"list-category-section"}>
                <Stack className={"product-category"}>
                    <Box className={"category-main"}>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                    >
                            COFFEE
                    </Button>
                    <Button
                            variant={"contained"}
                            color={"secondary"}
                    >
                            TEA
                    </Button>
                    <Button
                            variant={"contained"}
                            color={"secondary"}
                        >
                            JUICE
                    </Button>
                    <Button
                            variant={"contained"}
                            color={"secondary"}
                    >
                            DESSERT
                    </Button>
                    <Button
                            variant={"contained"}
                            color={"secondary"}
                    >
                            SET
                    </Button>
                    </Box>
                    </Stack>
              

                <Stack className={"product-wrapper"}>
                    { products.length !== 0 ? (
                        products.map((product, index) => {
                            return (
                                <Stack key={index} className={"product-card"}>
                                    <Stack
                                        className={"product-img"}
                                        sx={{ backgroundImage: `url(${product.imagePath})` }}
                                    >
                                    <div className={"product-sale"}>Normal size</div>
                                       <Button className={"shop-btn"}>
                                            <img 
                                                src={"/icons/shopping-cart.svg"}
                                                style={{ display: "flex"}}
                                        />
                                        </Button>
                                        <Button className={"view-btn"} sx={{ right: "36px" }}>
                                            <Badge badgeContent={20} color="secondary">
                                                <RemoveRedEyeIcon
                                                sx={{ color: 20 ? "gray" : "white" }}
                                             />
                                            </Badge>
                                        </Button>                                          
                                    </Stack>
                                                              
                                        <Box className={"product-desc"}>
                                            <span className={"product-title"}>
                                                { product.productName }
                                            </span>
                                            <div className={"product-desc-text"}>
                                                <MonetizationOnIcon />
                                                {3}
                                            </div>
                                        </Box>
                                    </Stack>
                                );
                            })
                        ) : (
                            <Box className="no-data">Products are not available</Box>
                        )}
                    </Stack>
                    </Stack>
                
                <Stack className="pagination-section">
                    <Pagination
                        count={3}
                        page={1}
                        renderItem={(item) => (
                            <PaginationItem
                                components={{
                                    previous: ArrowBackIcon,
                                    next: ArrowForwardIcon,
                                }}
                                {...item}
                                color={"secondary"}
                            />                             
                        )}
                    />           
                </Stack>
            </Container>

            <div className={"brands-logo"}>
                <Container
                    sx={{ mt: "100px" }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box className={"category-title"}>Compose Branchs</Box>
                    <Stack flexDirection={"row"} display={"flex"} justifyContent={"space-between"} width={"100%"}>
                        {["/img/branch1.jpg", "/img/branch2.jpg", "/img/branch3.jpg", "/img/branch4.jpg"].map((ele, index) => (
                            <Box className={"review-box"} key={index}>
                                <Box className={"review-img"}>
                                    <img src={ele} className={"review-img"} />                                    
                                </Box>                            
                            </Box>
                        ))}
                    </Stack>
                </Container>
            </div>


            <div className={"address"}>
                <Container>
                    <Stack className={"address-area"}>
                        <Box className={"address-title"}>Store Location</Box>
                        <iframe
                            style={{ marginTop: "60px" }}
                            src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d52228.720333603545!2d128.98785402929678!3d35.09934342656346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m5!1s0x3568e9a0793fbca9%3A0xaf831093d690d28d!2sCompose%20Coffee!3m2!1d35.099280199999995!2d129.0291392!4m1!2shttps%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FCompose%2BCoffee%2Fdata%3D*214m6*213m5*211s0x3568e9a0793fbca9%3A0xaf831093d690d28d*218m2*213d35.0992802*214d129.0291392*2116s%252Fg%252F11g0kj8cpj%3Fentry%3Dttu!5e0!3m2!1sen!2skr!4v1719497260401!5m2!1sen!2skr"
                            width="1320"
                            height="500"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Stack>
                </Container>

            </div>
        </div>
    );
}