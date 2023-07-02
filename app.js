import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hello React</h1>;

const HeaderComponent = (props) => {
  const { title } = props;
  return (
    <>
      {heading}
      <h1> This is Header Component</h1>
      <h2>Welcome to React - {title}</h2>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeaderComponent({ title: "Manoj" }));
