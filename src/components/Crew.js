import NavBar from "./NavBar";
import Douglas from "../assets/crew/image-douglas-hurley.png";
import Ann from "../assets/crew/image-anousheh-ansari.png";
import Mark from "../assets/crew/image-mark-shuttleworth.png";
import Victor from "../assets/crew/image-victor-glover.png";
import "../styles/Crew.css";
import { useState } from "react";

function Crew() {
  const [nbPerso, setNbPerso] = useState(0);

  function DisplayPerso(nb) {
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
          {nbPerso === 0 ? (
            <img
              src={Douglas}
              alt="img-crew"
              width="500"
              className="img-perso"
            />
          ) : null}
          {nbPerso === 1 ? (
            <img
              src={Ann}
              alt="img-crew"
              width="600"
              height="500"
              className="img-perso"
            />
          ) : null}
          {nbPerso === 2 ? (
            <img
              src={Victor}
              alt="img-crew"
              width="530"
              className="img-perso"
            />
          ) : null}
          {nbPerso === 3 ? (
            <img src={Mark} alt="img-crew" width="450" className="img-perso" />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Crew;
