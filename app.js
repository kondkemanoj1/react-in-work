import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Food Villa - By Manoj</h1>;
const foodData = [
  {
    id: 1,
    name: "Pizza Bites",
    slaString: "32 MINS",
    costForTwoString: "₹300 FOR TWO",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    cloudinaryImageId: "be87ef87d60b0e6baa2a24c080065c30",
  },
  {
    id: 2,
    name: "Burger King",
    slaString: "22 MINS",
    costForTwoString: "₹350 FOR TWO",
    cuisines: ["Burgers", "American"],
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  },
  {
    id: 3,
    name: "Pizza Hut",
    slaString: "38 MINS",
    costForTwoString: "₹600 FOR TWO",
    cuisines: ["Pizzas"],
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  },
  {
    id: 4,
    name: "Tea Post",
    slaString: "52 MINS",
    costForTwoString: "₹400 FOR TWO",
    cuisines: ["Beverages", "Fast Food", "Snacks"],
    cloudinaryImageId: "47a5a4f1020f6715556094680749bada",
  },
  {
    id: 5,
    name: "Pizza Bites",
    slaString: "32 MINS",
    costForTwoString: "₹300 FOR TWO",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    cloudinaryImageId: "be87ef87d60b0e6baa2a24c080065c30",
  },
  {
    id: 6,
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
        src="https://content.jdmagicbox.com/comp/delhi/u4/011pxx11.xx11.200225192016.u8u4/catalogue/foodvilla-the-catering-co-karkardooma-delhi-9s5uw8jrt1.jpg"
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
    return <CardComponent key={food.id} {...food}></CardComponent>;
  });
};

const FooterComponent = () => {
  return (
    <div className="footer">
      &copy; Copyright Reserved By Manoj Kondke @2023
    </div>
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
