import { CardComponent } from "../../common/card/cardComponent";
import { foodData } from "../../data/data";
import "./restaurants.css";

export const RestaurantsListComponent = () => {
  return foodData.map((food) => {
    return <CardComponent key={food.data.id} {...food.data}></CardComponent>;
  });
};

export default RestaurantsListComponent;
