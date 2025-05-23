import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';


const About = () => {
     const location = useLocation();
    const query = new URLSearchParams(location.search); //파싱하는 작업
    console.log("query", query);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <h1>ABOUT</h1>
      Param : {query.get("name")}, {query.get("age")} <br/>
      <p>Welcome to the About page!</p>
    </div>
  );
};

export default About;
