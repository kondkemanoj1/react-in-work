import "./header.css";
import { Link } from "react-router-dom";

const heading = (
  <h1 className="font-semibold text-2xl">Food Villa - By Manoj</h1>
);
export const HeaderComponent = (props) => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          height="80"
          width="120"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGs9eSh4qe3qMi-bzXTJHCmUMcR4xgoUpEa-xTkgzzt616Kxdh12WOBoufoOzDcdtvds&usqp=CAU"
        />
      </div>
      <span> {heading}</span>
      <ul className="headerMenu">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};
