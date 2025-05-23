import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/About">about</Link>
          </li>
        </ul>
      </nav>
      <h1>HOME</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
};

export default Home;
