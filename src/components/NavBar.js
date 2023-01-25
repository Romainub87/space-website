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
            <a href="/">
              <span className="number">00</span> Home
            </a>
          </li>
          <li>
            <a href="/destination">
              <span className="number">01</span> Destination
            </a>
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
