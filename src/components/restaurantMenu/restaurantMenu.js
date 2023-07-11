import { useParams } from "react-router-dom";
import "./restaurantMenu.css";
import { useEffect, useState } from "react";

const RestaurantMenuComponent = () => {
  const params = useParams();
  const restaurantId = params?.id;
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [menuInfo, setMenuInfo] = useState([]);

  async function getData() {
    const restaurant = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.610917933460854&lng=73.74800976365805&restaurantId=${restaurantId}&submitAction=ENTER`
    );
    const data = await restaurant.json();
    setRestaurantInfo(data?.data?.cards[0]?.card?.card?.info);

    setMenuInfo(
      data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="restaurantMenuContainer">
      <div className="menuHeader">
        <div className="leftheaderMenu">
          <p
            style={{
              fontFamily: "sans-serif",
              fontWeight: 600,
              fontSize: "18px",
            }}
          >
            {restaurantInfo?.name}
          </p>
          <p
            style={{
              fontFamily: "sans-serif",
              color: "grey",
              fontSize: "14px",
              marginTop: "10px",
              fontWeight: 300,
            }}
          >
            {restaurantInfo?.cuisines?.join(",")}
          </p>
          <p
            style={{
              fontFamily: "sans-serif",
              color: "gray",
              fontSize: "14px",
              fontWeight: 300,
            }}
          >
            {restaurantInfo?.locality},
            {restaurantInfo?.locality?.sla?.lastMileTravelString}
          </p>
        </div>

        <div
          style={{
            border: "1px solid lightgrey",
            borderRadius: "4px",
            padding: "4px",
          }}
        >
          <p
            style={{
              color: "grey",
              fontSize: "14px",
              fontWeight: 800,
              color: "green",
              textAlign: "center",
              marginTop: "8px",
              fontFamily: "sans-serif",
              borderBottom: "1px solid lightgrey",
              paddingBottom: "4px",
            }}
          >
            ☆ {restaurantInfo?.avgRatingString}
          </p>
          <p
            style={{
              fontFamily: "sans-serif",
              color: "grey",
              fontSize: "10px",
              marginTop: "8px",
              fontWeight: 300,
            }}
          >
            {restaurantInfo?.totalRatingsString}
          </p>
        </div>
      </div>
      <p
        style={{ marginTop: "20px", borderBottom: "1px dotted lightgrey" }}
      ></p>

      <div style={{ marginTop: "20px" }}>
        <h3>Menu ({menuInfo.length})</h3>
      </div>

      <div className="menuItems margin20">
        {menuInfo.map((menu) => {
          return (
            <>
              <div className="menuHeader">
                <div className="leftheaderMenu">
                  <h1
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: 500,
                      fontSize: "18px",
                    }}
                  >
                    {menu?.card?.info?.name}
                  </h1>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      color: "grey",
                      fontSize: "14px",
                      marginTop: "5px",
                      fontWeight: 500,
                    }}
                  >
                    {menu.length > 0 ? menu?.card?.info?.price : ""}
                  </p>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      color: "gray",
                      marginTop: "20px",
                      fontSize: "12px",
                      fontWeight: 300,
                    }}
                  >
                    {menu?.card?.info?.description}
                  </p>
                </div>

                <div
                  style={{
                    padding: "5px",
                  }}
                >
                  <img
                    width="100"
                    height="90"
                    alt="No Image Available"
                    src={
                      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                      // "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,e_grayscale,c_fit/" +
                      menu?.card?.info?.imageId
                    }
                  ></img>
                </div>
              </div>
              <p
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  borderBottom: "1px dotted lightgrey",
                }}
              ></p>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenuComponent;
