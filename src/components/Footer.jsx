import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h1 className="logo">
          Fashion <span>Fusion</span>
        </h1>
        <h4>Contact</h4>
        <p>Address: Peshawar</p>
        <p>Phone: 0304 123 7882</p>
        <p>Hours: 10:00 - 18:00, Mon - Sat</p>
      </div>

      <div className="footer-section">
        <h2>About</h2>
        <p>
          <a href="#">Delivery Information</a>
        </p>
        <p>
          <a href="#">Privacy Policy</a>
        </p>
        <p>
          <a href="#">Terms & Conditions</a>
        </p>
        <p>
          <a href="#">Contact Us</a>
        </p>
      </div>

      <div className="footer-section">
        <h2>My Account</h2>
        <p>
          <a href="#">Sign In</a>
        </p>
        <p>
          <a href="#">View Cart</a>
        </p>
        <p>
          <a href="#">My Wishlist</a>
        </p>
        <p>
          <a href="#">Track My Order</a>
        </p>
        <p>
          <a href="#">Help</a>
        </p>
      </div>

      <div className="footer-section media">
        <h2>Install App</h2>
        <p>From App Store or Google Play</p>
        <div className="media-logo">
          <img src="./img/pay/app.jpg" alt="App Store" />
          <img src="./img/pay/play.jpg" alt="Google Play" />
        </div>
        <p>Secured Payment Gateways</p>
        <img
          src="./img/pay/pay.png"
          alt="Payment Methods"
          className="payment-img"
        />
      </div>
    </footer>
  );
}
