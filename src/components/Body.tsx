import shoe from "../assets/shoe.png";
import "./Body.css"; // Import the CSS file for styling

export const Body = () => {
  return (
    <>
      <div className="container">
        <div className="first-container">
          <h1>Your feet deserve the best</h1>
          <p>
            Your feet deveres the best and we are here to help you with our
            shoes. Your feet deveres the best and we are here to help you with
            our shoes.
          </p>
          <div className="buttons">
            <button className="shop-btn">Shop Now</button>
            <button className="catogory-btn">Catogory</button>
          </div>
        </div>
        <div className="second-container">
          <img src={shoe} alt="A picture of a shoe" className="shoe" />
        </div>
      </div>
    </>
  );
};
