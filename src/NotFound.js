import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry, but not sorry</h2>
      <p>Page is not found</p>
      <Link to="/home">Go to Home page</Link>
    </div>
  );
};

export default NotFound;
