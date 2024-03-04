import "./Header.css"; // Import the CSS file for styling
import nikelogo from "../assets/nikelogo.png"; // Import the image file

const Header = () => {
  return (
    <header>
      <div>
        <img src={nikelogo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <button>Login</button>
    </header>
  );
};

export default Header;
