import { Link } from "react-router-dom";
import "../styles/Home.css";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <div className="description text-white">
        <div className="start-text uppercase">So you want to travel to</div>
        <div className="space uppercase">Space</div>
        <div className="end-text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>
      <Link to="/destination">
        <div className="explorer uppercase text-black">Explore</div>
      </Link>
    </div>
  );
}

export default Home;
