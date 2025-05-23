import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="">about</Link>
          </li>
        </ul>
      </nav>
      <h1>Contact</h1>
      <p>Welcome to the Contact page!</p>
    </div>
  );
};

export default Contact;
