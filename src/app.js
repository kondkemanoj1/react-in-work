import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/header/headerComponent";
import FooterComponent from "./components/footer/footerComponent";
import RestaurantsListComponent from "./components/restaurants/restaurantsListComponent";
import AboutUsComponent from "../src/components/about-us/aboutus";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorComponent from "./common/errorPage/errorPage";
import RestaurantMenuComponent from "./components/restaurantMenu/restaurantMenu";

const AppLayout = (props) => {
  return (
    <>
      <HeaderComponent />
      <Outlet></Outlet>
      <FooterComponent></FooterComponent>
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <RestaurantsListComponent />,
      },
      {
        path: "/about",
        element: <AboutUsComponent />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenuComponent />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
