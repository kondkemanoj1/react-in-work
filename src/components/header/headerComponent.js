import "./header.css";

const heading = <h1>Food Villa - By Manoj</h1>;
export const HeaderComponent = (props) => {
  return (
    <div className="header">
      <img
        height="100"
        width="100"
        src="https://content.jdmagicbox.com/comp/delhi/u4/011pxx11.xx11.200225192016.u8u4/catalogue/foodvilla-the-catering-co-karkardooma-delhi-9s5uw8jrt1.jpg"
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
