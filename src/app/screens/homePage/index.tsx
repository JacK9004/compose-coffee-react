import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularCoffies from "./PopularCoffies";
import Desserts from "./Desserts";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";


export default function HomePage() {
    // Selector: Store => DATA

    useEffect(() => {
      // Backend server data request => DATA
      // Slice: Data => Store
  
    }, []);
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
  