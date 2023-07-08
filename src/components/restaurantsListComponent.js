import { CardComponent } from "../common/cardComponent";
import { foodData } from "../data/data";

export const RestaurantsListComponent = () => {
  return foodData.map((food) => {
    return <CardComponent key={food.id} {...food}></CardComponent>;
  });
};
