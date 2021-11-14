import React, { useEffect } from "react";
import "./styles/greeting.css";
import Particles from "./utils/Particles";
import { Redirect, Link, useParams } from "react-router-dom";
import song from "../assets/audio/song.mp3";
import ReactAudioPlayer from "react-audio-player";
import greetapi from "../api/greet";
import Loading from "./utils/Loading";

function Greeting() {
  let { id } = useParams();
  const [redirectError, setRedirectError] = React.useState(false);
  const [user, setUser] = React.useState("We");
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await greetapi.get(`/${id}`);
        setUser(data.greeting.name);
      } catch (err) {
        console.log(err);
        setRedirectError(true);
      }
    })();
  },[id]);
  return (
    <React.Fragment>
      <Loading load={isLoading}/>
      <div className="trees">
        <Particles />
        <div className="merry">
          <h1 className="name">{user} wishes you</h1>
          <h2>Merry Christmas</h2>
          <h4>and</h4>
          <h2>Happy New Year</h2>
          <button className="create">
            <h3>
              <Link to="/create">Create Greeting</Link>
            </h3>
          </button>
        </div>
        <div className="image-group">
          <div className="fox">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/25839/critters.svg"
              width="300px"
              alt="fox"
            />
          </div>

          <div className="tree">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/25839/tree.svg"
              width="200px"
              alt="tree"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
        <ReactAudioPlayer src={song} autoPlay controls />
        {redirectError ? <Redirect to={`/error`} /> : null}
      </div>
    </React.Fragment>
  );
}

export default Greeting;
