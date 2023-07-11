import "./shimmer.css";

const ShimmerComponent = (prop) => {
  const { type } = prop;
  return (
    <>
      <div
        className={"cardContainer " + (type === "vertical" ? "column" : "row")}
      >
        <div
          className={
            "shimmercard " + (type === "vertical" ? "columnWidth" : "rowWidth")
          }
        >
          <div className="shimmerBG media"></div>
          <div className="p-32">
            <div className="shimmerBG title-line"></div>
            <div className="shimmerBG title-line end"></div>

            <div className="shimmerBG content-line m-t-24"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line end"></div>
          </div>
        </div>

        <div
          className={
            "shimmercard " + (type === "vertical" ? "columnWidth" : "rowWidth")
          }
        >
          <div className="shimmerBG media"></div>
          <div className="p-32">
            <div className="shimmerBG title-line"></div>
            <div className="shimmerBG title-line end"></div>

            <div className="shimmerBG content-line m-t-24"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line end"></div>
          </div>
        </div>

        <div
          className={
            "shimmercard " + (type === "vertical" ? "columnWidth" : "rowWidth")
          }
        >
          <div className="shimmerBG media"></div>
          <div className="p-32">
            <div className="shimmerBG title-line"></div>
            <div className="shimmerBG title-line end"></div>

            <div className="shimmerBG content-line m-t-24"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line end"></div>
          </div>
        </div>

        <div
          className={
            "shimmercard " + (type === "vertical" ? "columnWidth" : "rowWidth")
          }
        >
          <div className="shimmerBG media"></div>
          <div className="p-32">
            <div className="shimmerBG title-line"></div>
            <div className="shimmerBG title-line end"></div>

            <div className="shimmerBG content-line m-t-24"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line end"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShimmerComponent;
