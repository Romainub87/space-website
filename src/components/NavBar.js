import "../styles/NavBar.css";
import logo from "../assets/shared/logo.svg";

function NavBar() {
  return (
    <div className="NavBar">
      <img src={logo} alt="logo" />
      <div className="trait"></div>
      <div className="list">
        <ul class="item-list">
          <li>
            <span className="number">00</span> Home
          </li>
          <li>
            <span className="number">01</span> Destination
          </li>
          <li>
            <span className="number">02</span> Crew
          </li>
          <li>
            <span className="number">03</span> Technology
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
