import "../styles/Destination.css";
import NavBar from "./NavBar";
import Lune from "../assets/destination/image-moon.png";
import Europa from "../assets/destination/image-europa.png";
import Mars from "../assets/destination/image-mars.png";
import Titan from "../assets/destination/image-titan.png";
import { useState } from "react";

function Destination() {
  const [nbPlanet, setNbPlanet] = useState(0);

  function changeTemplate(number) {
    setNbPlanet(number);
  }

  return (
    <div className="destination text-white">
      <NavBar />
      <div className="title-page-destination uppercase">
        <span className="title-page-destination-number">01</span>Pick your
        destination
      </div>
      <div className="content-destination">
        {nbPlanet === 0 ? <img src={Lune} alt="Lune" width="445px" /> : null}
        {nbPlanet === 1 ? <img src={Mars} alt="Lune" width="445px" /> : null}
        {nbPlanet === 2 ? <img src={Europa} alt="Lune" width="445px"  /> : null}
        {nbPlanet === 3 ? <img src={Titan} alt="Lune" width="445px" /> : null}
        <div className="text-destination">
          <nav className="navbar-planet">
            <li
              onClick={() => changeTemplate(0)}
              className={nbPlanet === 0 ? "item-planet active" : "item-planet"}
            >
              Moon
            </li>
            <li
              onClick={() => changeTemplate(1)}
              className={nbPlanet === 1 ? "item-planet active" : "item-planet"}
            >
              Mars
            </li>
            <li
              onClick={() => changeTemplate(2)}
              className={nbPlanet === 2 ? "item-planet active" : "item-planet"}
            >
              Europa
            </li>
            <li
              onClick={() => changeTemplate(3)}
              className={nbPlanet === 3 ? "item-planet active" : "item-planet"}
            >
              Titan
            </li>
          </nav>
          {nbPlanet === 0 ? (
            <div>
              <h1 className="name-planet uppercase">Moon</h1>
              <div className="description-planet">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </div>
              <div className="trait"></div>
              <div className="stat-planet">
                <div className="distance"><span className="text-distance">Avg. distance</span>384,400 km</div>
                <div className="travel-time"><span className="text-travel">Est. travel time</span>3 days</div>
              </div>
            </div>
          ) : null}

          {nbPlanet === 1 ? (
            <div>
              <h1 className="name-planet uppercase">Mars</h1>
              <div className="description-planet">
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </div>
              <div className="trait"></div>
              <div className="stat-planet">
                <div className="distance"><span className="text-distance">Avg. distance</span>225 mil. km</div>
                <div className="travel-time"><span className="text-travel">Est. travel time</span>9 months</div>
              </div>
            </div>
          ) : null}

          {nbPlanet === 2 ? (
            <div>
              <h1 className="name-planet uppercase">Europa</h1>
              <div className="description-planet">
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </div>
              <div className="trait"></div>
              <div className="stat-planet">
                <div className="distance"><span className="text-distance">Avg. distance</span>628 mil. km</div>
                <div className="travel-time"><span className="text-travel">Est. travel time</span>3 years</div>
              </div>
            </div>
          ) : null}

          {nbPlanet === 3 ? (
            <div>
              <h1 className="name-planet uppercase">Titan</h1>
              <div className="description-planet">
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </div>
              <div className="trait"></div>
              <div className="stat-planet">
                <div className="distance"><span className="text-distance">Avg. distance</span>1.6 bil. km</div>
                <div className="travel-time"><span className="text-travel">Est. travel time</span>7 years</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Destination;
