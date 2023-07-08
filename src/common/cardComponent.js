export const CardComponent = (props) => {
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
