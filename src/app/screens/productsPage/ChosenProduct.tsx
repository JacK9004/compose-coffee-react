import React, { useEffect } from "react";
import { Container, Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Divider from "../../components/divider";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setChosenProduct, setCoffee } from "./slice";
import { createSelector } from "reselect";
import { retrieveChosenProduct, retrieveCoffee } from "./selector";
import { Product } from "../../../lib/types/product";
import { Member } from "../../../lib/types/member";
import { useParams } from "react-router-dom";
import ProductService from "../../services/ProductService";
import MemberService from "../../services/MemberService";
import { serverApi } from "../../../lib/config";
import { CartItem } from "../../../lib/types/search";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setCoffee: (data: Member) => dispatch(setCoffee(data)),
  setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
});
const chosenProductRetriever = createSelector(
retrieveChosenProduct, 
(chosenProduct) => ({
  chosenProduct,
}));

const coffeeRetriever = createSelector(
retrieveCoffee, 
(coffee) => ({
  coffee,
}));

interface ChosenProductProps {
  onAdd: (item: CartItem) => void;
} 

export default function ChosenProduct(props: ChosenProductProps) {
  const { onAdd } = props;
  const { productId } = useParams<{ productId: string }>();
  const { setCoffee, setChosenProduct} = actionDispatch(useDispatch())
  const { chosenProduct} = useSelector(chosenProductRetriever);
  const { coffee } = useSelector(coffeeRetriever); 

useEffect(() => {
  const product = new ProductService();
  product
    .getProduct(productId)
    .then((data) => setChosenProduct(data)) 
    .catch((err) => console.log(err));


const member = new MemberService();
member
  .getCoffee()
  .then((data) => setCoffee(data))
  .catch((err) => console.log(err));

}, []);


if (!chosenProduct) return null;
  return (
    <div className={"chosen-product"}>
      <Box className={"title"}>Menu Detail</Box>
      <Container className={"product-container"}>
        <Stack className={"chosen-product-slider"}>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-area"
          >
            {chosenProduct?.productImages.map(
              (ele: string, index: number) => {
                const imagePath = `${serverApi}/${ele}`;
                return (
                  <SwiperSlide key={index}>
                    <img className="slider-image" src={imagePath} />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </Stack>
        <Stack className={"chosen-product-info"}>
          <Box className={"info-box"}>
          <strong className={"product-name"}>
              {chosenProduct?.productName}
            </strong>
            <span className={"resto-name"}>{coffee?.memberNick}</span>
            <span className={"resto-name"}>{coffee?.memberPhone}</span>
            <Box className={"rating-box"}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <div className={"evaluation-box"}>
                <div className={"product-view"}>
                  <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                  <span>{chosenProduct?.productViews}</span>
                </div>
              </div>
            </Box>
            <p className={"product-desc"}>
              { chosenProduct?.productDesc
                  ? chosenProduct?.productDesc
                  : "No description"}        
              </p>
            <Divider height="1" width="100%" bg="#000000" />
            <div className={"product-price"}>
              <span>Price:</span>
              <span>${chosenProduct?.productPrice}</span>
            </div>
            <div className={"button-box"}>
              <Button variant="contained">Add To Basket</Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
