import CardComponent from "../../common/card/cardComponent";
import { useState, useEffect } from "react";
import "./restaurants.css";
import SearchComponent from "../../common/search/searchComponent";
import ShimmerComponent from "../../common/shimmer/shimmerComponent";
import useOnline from "../../utils/hooks/useOnline";

const RestaurantsListComponent = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  function filterData(text) {
    return allRestaurants?.filter((item) =>
      item?.info?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  const handleSearchClicked = (ele) => {
    const data = filterData(searchText);
    setRestaurants(data);
  };

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.610917933460854&lng=73.74800976365805&page_type=DESKTOP_WEB_LISTING"
      );
      const result = await data.json();
      if (!result.statusCode) {
        setRestaurants(
          result?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setAllRestaurants(
          result?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } else {
        setRestaurants([]);
        setAllRestaurants([]);
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <div className="offline">
        <h1> ⛔️ Looks like you are offline. Please Connect to Internet</h1>
      </div>
    );
  }

  return (
    <>
      <SearchComponent
        handleSearchTextChange={handleSearchTextChange}
        handleSearchClicked={handleSearchClicked}
      />

      {allRestaurants?.length === 0 ? (
        <ShimmerComponent type="horizontally" />
      ) : restaurants?.length > 0 ? (
        <div className="restaurantContainer">
          {restaurants.map((food) => {
            return (
              <CardComponent key={food.info.id} {...food.info}></CardComponent>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            marginBottom: "350px",
            marginTop: "100px",
            textAlign: "center",
          }}
        >
          No Restaurants Found...!!!
        </div>
      )}
    </>
  );
};

export default RestaurantsListComponent;
