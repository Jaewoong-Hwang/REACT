import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="">About</Link>
          </li>
        </ul>
      </nav>
      <h1>ABOUT</h1>
      <p>Welcome to the About page!</p>
    </div>
  );
};

export default About;
