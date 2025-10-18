import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <div className="notfound-code">404</div>

        <div className="notfound-body">
          <h1>Page Not Found</h1>
          <p>
            Oops! The page you're looking for doesn't exist or has been moved.
            Try going back to the homepage.
          </p>

          <div className="notfound-actions">
            <button className="primary-btn" onClick={() => navigate("/")}>
              Go to Home
            </button>
            <button className="ghost-btn" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        </div>
      </div>

      <footer className="notfound-footer">
        <p>
          If you think this is an error, contact us at{" "}
          <a href="mailto:help@fashionfusion.com">help@fashionfusion.com</a>
        </p>
      </footer>
    </div>
  );
}
