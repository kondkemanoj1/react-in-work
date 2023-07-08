import "./header.css";

const heading = <h1>Food Villa - By Manoj</h1>;
export const HeaderComponent = (props) => {
  return (
    <div className="header">
      <img
        height="80"
        width="120"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQplfEnfHTrbXjlEZOEQ2GcHnfRtehsHwSNDalDGNA&s"
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
