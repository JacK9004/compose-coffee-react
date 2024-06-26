import React from "react";
import Statistics from "./Statistics";
import PopularCoffies from "./PopularCoffies";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";


export default function HomePage() {
    return (
    <div className={"homepage"}>
      <Statistics />
      <PopularCoffies />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
    );
  }
  