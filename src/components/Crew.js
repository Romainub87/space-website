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
        {nbPerso === 0 ? (
          <div className="text-crew">
            <div className="crew-role uppercase">Commander</div>
            <div className="name-crew uppercase">Douglas Hurley</div>
            <div className="description-crew">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </div>
          </div>
        ) : null}
        {nbPerso === 1 ? (
          <div className="text-crew">
            <div className="crew-role uppercase">Mission specialist</div>
            <div className="name-crew uppercase">Mark shuttleworth</div>
            <div className="description-crew">
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </div>
          </div>
        ) : null}
        {nbPerso === 2 ? (
          <div className="text-crew">
            <div className="crew-role uppercase">Pilot</div>
            <div className="name-crew uppercase">Victor Glover</div>
            <div className="description-crew">
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </div>
          </div>
        ) : null}
        {nbPerso === 3 ? (
          <div className="text-crew">
            <div className="crew-role uppercase">Flight engineer</div>
            <div className="name-crew uppercase">Anousheh Ansari</div>
            <div className="description-crew">
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </div>
          </div>
        ) : null}

        <div className="change-crew">
          {nbPerso === 0 ? (
            <button
              type="button"
              onClick={() => DisplayPerso(0)}
              className="btn active"
            />
          ) : (
            <button
              type="button"
              onClick={() => DisplayPerso(0)}
              className="btn presque"
            />
          )}
          {nbPerso === 1 ? (
            <button
              type="button"
              onClick={() => DisplayPerso(1)}
              className="btn active"
            />
          ) : (
            <button
              type="button"
              onClick={() => DisplayPerso(1)}
              className="btn presque"
            />
          )}
          {nbPerso === 2 ? (
            <button
              type="button"
              onClick={() => DisplayPerso(2)}
              className="btn active"
            />
          ) : (
            <button
              type="button"
              onClick={() => DisplayPerso(2)}
              className="btn presque"
            />
          )}
          {nbPerso === 3 ? (
            <button
              type="button"
              onClick={() => DisplayPerso(3)}
              className="btn active"
            />
          ) : (
            <button
              type="button"
              onClick={() => DisplayPerso(3)}
              className="btn presque"
            />
          )}
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
            <img src={Mark} alt="img-crew" width="470" className="img-perso" />
          ) : null}
          {nbPerso === 2 ? (
            <img
              src={Victor}
              alt="img-crew"
              width="550"
              className="img-perso"
            />
          ) : null}
          {nbPerso === 3 ? (
            <img
              src={Ann}
              alt="img-crew"
              width="600"
              height="500"
              className="img-perso"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Crew;
