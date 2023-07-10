import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/header/headerComponent";
import FooterComponent from "./components/footer/footerComponent";
import RestaurantsListComponent from "./components/restaurants/restaurantsListComponent";
import AboutUsComponent from "../src/components/about-us/aboutus";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorComponent from "./common/errorPage/errorPage";

const AppLayout = (props) => {
  return (
    <>
      <HeaderComponent />
      {props?.component === "about" ? (
        <AboutUsComponent />
      ) : (
        <RestaurantsListComponent />
      )}
      <FooterComponent></FooterComponent>
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/about",
    element: <AppLayout component="about" />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
