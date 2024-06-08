import { useState, useEffect } from "react";
import Image1 from "./images/Nike-Mbappe.jpeg";
import Image2 from "./images/NIke-BRONZE.jpg";
import Image3 from "./images/Mbappe10.webp";
import Image4 from "./images/KM2022.jpg";
import Image5 from "./images/Bronze-Mercurial.jpg";

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const images = [Image1, Image2, Image3, Image4, Image5];
  const totalImages = images.length;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const addToCart = () => {
    // Add the selected quantity of cleats to the cart
    // You can add your cart logic here
    setAddedToCart(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <div className="Main">
      <div className="Navbar">
        <span className="Menu" onClick={toggleSidebar}>
          ☰
        </span>
        <h1>Nike-AirZoom</h1>
        <a>Collections</a>
        <a>Men</a>
        <a>Women</a>
        <a>About</a>
        <a>Contact</a>
        <span className="Cart">🛒</span>
        {addedToCart && (
            <div className="CartItemCounter">
              <span className="Quantity">{quantity}</span>
              </div>
          )}
      </div>
      <div className="Testimonial">
        <div className="Photo-Unify">
        <img
          className="Mbappe"
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
        />
        <div className="Images">
          <img className="Kylian" src={Image1} alt="" />
          <img className="Kylian" src={Image2} alt="" />
          <img className="Kylian" src={Image3} alt="" />
        </div>
        </div>
        <div className="Unify">
        <h3>Nike-Cleats KM Edition</h3>
        <h2 className="Limited">Limited Edition Kylian Mbappe Football Cleats</h2>
        <p className="description">
          This Is Nike Air-Zoom one of the most reliable and comfortable cleats on
          Nike history. Best Players Choose Nike what Are you Choosing?
        </p>
        <div className="Prices">
          <h1 className="Price">200$</h1>
          <p>
            Previous Price: <span className="Strike">300$</span>
          </p>
          </div>
        
        <div className="Add-toCart">
          
            <button className="Increment" onClick={increment}>
              +
            </button>
            <h5>{quantity}</h5>
            <button className="Increment" onClick={decrement}>
              -
            </button>
            
          
          </div>
          {/* <button onClick={addToCart}>Add to Cart 🛒</button> */}
          <button className="cart" onClick={addToCart}>Add to Cart 🛒</button>
        </div>
      </div>
      <div
        className="Side-Bar"
        style={{ display: isSidebarOpen ? "block" : "none" }}
      >
        <h1 className="Close-Btn" onClick={toggleSidebar}>
          ✖
        </h1>
        <h1 className="Side-Menu">Men</h1>
        <h1 className="Side-Menu">Women</h1>
        <h1 className="Side-Menu">About</h1>
        <h1 className="Side-Menu">Contact</h1>
      </div>
    </div>
  );
};

export default App;
