import React from "react";
import Statistics from "./Statistics";
import PopularCoffies from "./PopularCoffies";
import Desserts from "./Desserts";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";


export default function HomePage() {
    return (
    <div className={"homepage"}>          
      <Events />
     
      <PopularCoffies />   
      <Desserts />
      <ActiveUsers /> 
      <Statistics /> 
      <Advertisement /> 

    </div>
    );
  }
  