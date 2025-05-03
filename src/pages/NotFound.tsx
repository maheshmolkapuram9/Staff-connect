import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <h1>Oops! Something went wrong!</h1>
      <p>
        Go back to the{" "}
        <span>
          <Link to="/">Home Page</Link>
        </span>
      </p>
    </div>
  );
};

export default NotFound;
