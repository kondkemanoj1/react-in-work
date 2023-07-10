import "./header.css";

const heading = <h1>Food Villa - By Manoj</h1>;
export const HeaderComponent = (props) => {
  return (
    <div className="header">
      <img
        height="80"
        width="120"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGs9eSh4qe3qMi-bzXTJHCmUMcR4xgoUpEa-xTkgzzt616Kxdh12WOBoufoOzDcdtvds&usqp=CAU"
      />
      <span> {heading}</span>
      <ul className="headerMenu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};
