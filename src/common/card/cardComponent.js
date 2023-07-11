import { Navigate } from "react-router-dom";
import "./card.css";

const CardComponent = (props) => {
  const { id, name, slaString, costForTwoString, cuisines, cloudinaryImageId } =
    props;
  const goToRestaurantMenu = () => {
    //Navigate({ to: "restaurant/" + id });
  };
  return (
    <div
      className="card"
      onClick={() => {
        goToRestaurantMenu();
      }}
    >
      <p>
        <img
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
export default CardComponent;
