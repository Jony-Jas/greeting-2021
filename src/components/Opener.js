import React from "react";
import "./styles/opener.css";
import "./styles/opener2.css";
import { Redirect, useParams } from "react-router-dom";
import Lights from "./utils/Lights";
import greetapi from "../api/greet";
import Loading from "./utils/Loading";

function Opener() {
  let { id } = useParams();
  const [label, setLabel] = React.useState(1);
  const [redirect, setRedirect] = React.useState(false);
  const [redirectError, setRedirectError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useState(() => {
    (async () => {
      try {
        await greetapi.get(`/${id}`);
      } catch (err) {
        setRedirectError(true);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    })();
  }, []);

  const animation = () => {
    const giftbox = document.querySelector(".giftbox");
    const giftboxTop = document.querySelector(".cover");
    const giftboxBottom = document.querySelector(".box");
    const fill = document.querySelector(".fill");
    const label = document.querySelector(".click-label");

    label.style.animation = "fade 0.8s ease-out both";
    giftbox.style.animation =
      "slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both";

    setTimeout(() => {
      giftbox.style.top = `${giftbox.offsetTop - 100}px`;

      giftbox.style.animation = "wobble-hor-bottom 0.8s both";

      setTimeout(() => {
        giftbox.style.animation = "vibrate-3 0.8s linear both";

        setTimeout(() => {
          giftboxTop.style.animation =
            "slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
          setLabel(0);
          giftboxBottom.style.animation =
            "slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
          fill.style.display = "block";
          fill.style.animation =
            "scale-in-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both";

          setTimeout(() => setRedirect(true), 1200);
        }, 800);
      }, 800);
    }, 800);
  };

  return (
    <React.Fragment>
      <Loading load={isLoading} />
      <Lights />
      <div className="main">
        <div className="click-label">
          <h1>Tap to open</h1>
          <h3>
            <i className="fad fa-angle-double-down"></i>
          </h3>
        </div>
        <div id="merrywrap" className="merrywrap">
          <div className="giftbox" onClick={animation}>
            <div className="cover">
              <div></div>
            </div>
            <div className="box"></div>
            <style>{`.giftbox:after{opacity:${label}}`}</style>
          </div>
        </div>
        <div className="fill"></div>
        {redirect ? <Redirect to={`/greet/${id}`} /> : null}
        {redirectError ? <Redirect to={`/error`} /> : null}
      </div>
    </React.Fragment>
  );
}

export default Opener;
