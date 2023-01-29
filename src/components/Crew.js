import NavBar from "./NavBar";
import Douglas from "../assets/crew/image-douglas-hurley.png";
import "../styles/Crew.css";
import { useState } from "react";

function Crew() {
  const [nbPerso, setNbPerso] = useState(0);

  function setDisplayPerso(nb) {
    setNbPerso(nb);
  }

  return (
    <div className="crew">
      <NavBar />
      <div className="title-page-crew uppercase">
        <span className="title-page-crew-number">02</span>
        Meet your crew
      </div>
      <div className="content-crew">
        <div className="text-crew">
          <div className="crew-role uppercase">Commander</div>
          <div className="name-crew uppercase">Douglas Hurley</div>
          <div className="description-crew">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </div>
        </div>
        <div className="img-crew">
          <img src={Douglas} alt="img-crew" className="img-perso"></img>
        </div>
      </div>
    </div>
  );
}

export default Crew;
