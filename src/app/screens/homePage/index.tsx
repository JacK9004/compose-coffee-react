import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDrinks from "./PopularDrinks";
import Desserts from "./Desserts";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setDessertMenu, setPopularDrinks, setTopUsers } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import "../../../css/home.css";
import { Member } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDrinks: (data: Product[]) => dispatch(setPopularDrinks(data)),
  setDessertMenu: (data: Product[]) => dispatch(setDessertMenu(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});

export default function HomePage() {
  const { setPopularDrinks, setDessertMenu, setTopUsers} = actionDispatch(useDispatch());  
  // Selector: Store => DATA

  // console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {    // // Backend server data request => DATA
      const product = new ProductService();
      product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.COFFEE
      })
      .then((data) => {
        console.log("data passed here", data);
        setPopularDrinks(data);
      })
      .catch((err) => console.log(err));

      product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        productCollection: ProductCollection.DESSERT
      })
      .then((data) => setDessertMenu(data))
      .catch((err) => console.log(err));

    const member = new MemberService();
    member
      .getTopUsers()
      .then((data) => setTopUsers(data))
      .catch((err) => console.log(err));

      
   }, []);

    return (
    <div className={"homepage"}>          
      <Events />     
      <PopularDrinks />   
      <Desserts />
      <ActiveUsers /> 
      <Statistics /> 
      <Advertisement /> 

    </div>
    );
  }
  