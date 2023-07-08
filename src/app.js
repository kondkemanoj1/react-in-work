import React from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/header/headerComponent";
import FooterComponent from "./components/footer/footerComponent";
import { RestaurantsListComponent } from "./components/restaurants/restaurantsListComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HeaderComponent />
    <div className="restaurantContainer">
      <RestaurantsListComponent />
    </div>
    <FooterComponent></FooterComponent>
  </>
);
