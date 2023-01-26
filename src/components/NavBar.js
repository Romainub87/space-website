import "../styles/NavBar.css";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import Crew from "./Crew";

function NavBar() {
  return (
    <div className="NavBar">
      <img src={logo} alt="logo" />
      <div className="trait"></div>
      <div className="list">
        <ul class="item-list">
          <li>
            <Link to="/">
              <span className="number">00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <span className="number">01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew">
              <span className="number">02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/tech">
              <span className="number">03</span> Technology
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
