import React from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/headerComponent";
import FooterComponent from "./components/footerComponent";
import { RestaurantsListComponent } from "./components/restaurantsListComponent";

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
