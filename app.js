import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Food Villa - By Manoj</h1>;
const foodData = [
  {
    name: "Pizza Bites",
    slaString: "32 MINS",
    costForTwoString: "₹300 FOR TWO",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    cloudinaryImageId: "be87ef87d60b0e6baa2a24c080065c30",
  },
  {
    name: "Burger King",
    slaString: "22 MINS",
    costForTwoString: "₹350 FOR TWO",
    cuisines: ["Burgers", "American"],
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  },
  {
    name: "Pizza Hut",
    slaString: "38 MINS",
    costForTwoString: "₹600 FOR TWO",
    cuisines: ["Pizzas"],
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  },
  {
    name: "Tea Post",
    slaString: "52 MINS",
    costForTwoString: "₹400 FOR TWO",
    cuisines: ["Beverages", "Fast Food", "Snacks"],
    cloudinaryImageId: "47a5a4f1020f6715556094680749bada",
  },
  {
    name: "Pizza Bites",
    slaString: "32 MINS",
    costForTwoString: "₹300 FOR TWO",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    cloudinaryImageId: "be87ef87d60b0e6baa2a24c080065c30",
  },
  {
    name: "Burger King",
    slaString: "22 MINS",
    costForTwoString: "₹350 FOR TWO",
    cuisines: ["Burgers", "American"],
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  },
];

const HeaderComponent = (props) => {
  const { title } = props;
  return (
    <div className="header">
      <img
        height="100"
        width="100"
        src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
      />
      <span> {heading}</span>
      <ul className="headerMenu">
        <li> Home</li>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
    </div>
  );
};

const CardComponent = (props) => {
  const { name, slaString, costForTwoString, cuisines, cloudinaryImageId } =
    props;
  return (
    <div className="card">
      <p>
        <img
          height="160"
          width="254"
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
          alt="Restaurant Name"
        ></img>
      </p>
      <div>
        <strong>{name}</strong>
        <br></br>
        <em style={{ fontSize: "14px", color: "gray" }}>
          {cuisines.join(", ")}
        </em>
      </div>
      <p className="starContainer">
        <span>{slaString}</span>
        <span>{costForTwoString}</span>
      </p>
    </div>
  );
};

const FoodListComponent = () => {
  return foodData.map((food) => {
    return <CardComponent {...food}></CardComponent>;
  });
};

const FooterComponent = () => {
  return (
    <div class="footer">&copy; Copyright Reserved By Manoj Kondke @2023</div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HeaderComponent />
    <div className="restaurantContainer">
      <FoodListComponent />
    </div>
    <FooterComponent></FooterComponent>
  </>
);
