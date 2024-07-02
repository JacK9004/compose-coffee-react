import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Container, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product, ProductInquiry } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../../lib/types/search";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data: Product[]) => dispatch(setProducts(data)),
  });
const productsRetriever = createSelector(retrieveProducts, (products) => ({
    products,
}));

interface ProductsProps {
    onAdd: (item: CartItem) => void;
  } 

export default function Products(props: ProductsProps) {
    const { onAdd } = props;
    const { setProducts } = actionDispatch(useDispatch());
    const { products } = useSelector(productsRetriever);
    const [ productSearch, setProductSearch] = useState<ProductInquiry>({
        page: 1,
        limit: 8,
        order: "createdAt",
        productCollection: ProductCollection.COFFEE,
        search: "",
    });

    const [searchText, setSearchText] = useState<string>("");
    const history = useHistory();

    useEffect(() => {
        const product = new ProductService();
        product
            .getProducts(productSearch)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    }, [productSearch]);

    useEffect(() => {
        if (searchText === "") {
            productSearch.search = "";
            setProductSearch({ ...productSearch});
        }
    }, [searchText]);

    /** HANDLERS **/
    
    const searchCollectionHandler = (collection: ProductCollection) => {
       productSearch.page = 1;
       productSearch.productCollection = collection;
       setProductSearch({ ...productSearch });
    };

    const searchOrderHandler = (order: string) => {
        productSearch.page = 1;
        productSearch.order = order;
        setProductSearch({ ...productSearch }); 
    };

    const searchProductHandler = () => {
        productSearch.search = searchText;
        setProductSearch({ ...productSearch });
    };

    const paginationHandler = (e: ChangeEvent<any>, value: number) => {
        productSearch.page = value;
        setProductSearch({...productSearch });
    };

    const chooseDishHandler = (id: string) => {
        history.push(`/products/${id}`);
    }; 

    return (
        <div className={"products"}>
            <Container>
                 <Stack flexDirection={"column"} alignItems={"center"}>
                     <Stack className={"avatar-big-box"}>
                         <Box className={"top-text"}>
                           {/* <p>Menu</p> */}
                           <Box className={"search-big-box"}>
                             {/* <form className={"search-form"} action={""} method={""}> */}
                                <input
                                type={"search"}
                                className={"search-input"}
                                name={"single-resSearch"}
                                placeholder={"Type here"}
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        // e.preventDefault(); // Prevent default form submission behavior
                                        searchProductHandler();
                                    }
                                }}
                                />
                                <Button
                                className={"single-button-search"}
                                variant="contained"
                                endIcon={<SearchIcon />}
                                onClick={searchProductHandler}
                                >
                                Search
                            </Button>
                         {/* </form> */}
                        </Box>
                    </Box>
                </Stack>   
  

                <Stack className={"dishes-filter-section"}>
                    <Box className={"dishes-filter-box"}>
                        <Button
                            variant={"contained"}
                            className={"order"}
                            color={
                                productSearch.order === "createdAt" 
                                    ? "primary" 
                                    : "secondary"
                            }                           
                            onClick={() => searchOrderHandler("createdAt")}
                >
                            NEW
                        </Button>
                        <Button
                            variant={"contained"}
                            className={"order"}
                            color={
                                productSearch.order === "productPrice" 
                                    ? "primary" 
                                    : "secondary"
                            }                           
                            onClick={() => searchOrderHandler("productPrice")}
                            
                        >
                            PRICE
                            </Button>
                            <Button
                            variant={"contained"}
                            className={"order"}
                            color={
                                productSearch.order === "productViews" 
                                    ? "primary" 
                                    : "secondary"
                            }                           
                            onClick={() => searchOrderHandler("productViews")}
                           
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
                        color={
                            productSearch.productCollection === ProductCollection.COFFEE
                            ? "primary"
                            : "secondary"
                        }
                        onClick={() => 
                            searchCollectionHandler(ProductCollection.COFFEE)}
                    >
                            COFFEE
                    </Button>
                    <Button
                            variant={"contained"}
                            color={
                                productSearch.productCollection === ProductCollection.TEA
                                ? "primary"
                                : "secondary"
                            }
                            onClick={() => 
                                searchCollectionHandler(ProductCollection.TEA)}
                    >
                            TEA
                    </Button>
                    <Button
                           variant={"contained"}
                           color={
                               productSearch.productCollection === ProductCollection.JUICE
                               ? "primary"
                               : "secondary"
                           }
                           onClick={() => 
                               searchCollectionHandler(ProductCollection.JUICE)}
                       >
                            JUICE
                    </Button>
                    <Button
                            variant={"contained"}
                            color={
                                productSearch.productCollection === ProductCollection.DESSERT
                                ? "primary"
                                : "secondary"
                            }
                            onClick={() => 
                                searchCollectionHandler(ProductCollection.DESSERT)}
                    >
                            DESSERT
                    </Button>
                    <Button
                            variant={"contained"}
                            color={
                                productSearch.productCollection === ProductCollection.SET
                                ? "primary"
                                : "secondary"
                            }
                            onClick={() => 
                                searchCollectionHandler(ProductCollection.SET)}
                    >
                            SET
                    </Button>
                    </Box>
                    </Stack>
              


                    <Stack className={"product-wrapper"}>
                    { products.length !== 0 ? (
                        products.map((product: Product) => {
                            const imagePath = `${serverApi}/${product.productImages[0]}`;
                            const sizeVolume =
                                product.productCollection === ProductCollection.DESSERT
                                    ? product.productSize
                                    : product.productVolume;

                                    return (
                                        <Stack 
                                            key={product._id} 
                                            className={"product-card"}
                                           onClick={() => chooseDishHandler(product._id)}
                                           >
                                            <Stack
                                                className={"product-img"}
                                                sx={{ backgroundImage: `url(${imagePath})` }}
                                            >
                                            <div className={"product-sale"}>{sizeVolume}</div>
                                            <Button 
                                            className={"shop-btn"}
                                            onClick={(e) => {                                               
                                                onAdd({
                                                    _id: product._id,
                                                    quantity: 1,
                                                    name: product.productName,
                                                    price: product.productPrice,
                                                    image: product.productImages[0],
                                                });
                                                e.stopPropagation();
                                            }}
                                       >
                                                    <img 
                                                        src={"/icons/shopping-cart.svg"}
                                                        style={{ display: "flex"}}
                                                />
                                                </Button>
                                                <Button className={"view-btn"} sx={{ right: "36px" }}>
                                                    <Badge
                                                    badgeContent={product.productViews} 
                                                    color="secondary">
                                                        <RemoveRedEyeIcon
                                                        sx={{ color:
                                                            product.productViews === 0 ? "gray" : "white" }}
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
                                                        {product.productPrice}
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
                                count={
                                products.length !== 0
                                    ? productSearch.page + 1
                                    : productSearch.page    
                                }
                                page={productSearch.page}
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
                                onChange={paginationHandler}
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
                    <Box className={"category-title"}>Annual Win Awards</Box>
                    <Stack flexDirection={"row"} display={"flex"} justifyContent={"space-between"} width={"100%"} className="review-box">
                        {["/img/win2.png", "/img/win3.png", "/img/win4.png", "/img/win5.png"].map((ele, index) => (
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