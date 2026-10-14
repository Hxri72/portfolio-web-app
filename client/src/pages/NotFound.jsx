import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="container page not-found page-fade">
      <h1 className="gradient-text">404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn">Back to home</Link>
    </section>
  );
}

export default NotFound;
