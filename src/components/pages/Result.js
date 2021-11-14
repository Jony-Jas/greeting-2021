import React from "react";
import gift from "../../assets/img/gift.png";
import "../styles/gift.css";
import Loading from "../utils/Loading";

function Result({ user, setPage }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const onClick = () => {
    setPage(true);
  };
  return (
    <React.Fragment>
      <Loading load={isLoading}/>
      <i
        className="fas fa-arrow-left"
        style={{
          position: "absolute",
          top: "20px",
          fontSize: "2em",
          alignSelf: "flex-start",
          left: "20px",
          cursor: "pointer",
          zIndex: 1,
        }}
        onClick={onClick}
      ></i>

      <div className="result-container">
        <img alt="result" src={gift}  onLoad={() => setIsLoading(false)}></img>
        <h2 className="result-title">Share the link</h2>
        <div className="result-copy-container">
          <div className="result-link">
            <span className="link">{`greeting-2021.web.app/${user._id}`}</span>
          </div>
          <div className="tooltip">
            <button
              className="result-copy"
              onClick={() => {
                const copyText = document.querySelector(".link").innerText;
                navigator.clipboard.writeText(copyText);
              }}
            >
              <span>COPY</span>
            </button>
            <span className="tooltiptext">Copied to clipboard</span>
          </div>
        </div>
        <div className="wrapper">
          <div className="icon facebook">
            <div className="tooltip">Facebook</div>
            <span>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </span>
          </div>
          <div className="icon twitter">
            <div className="tooltip">Twitter</div>
            <span>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </span>
          </div>
          <div className="icon instagram">
            <div className="tooltip">Instagram</div>
            <span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </span>
          </div>
          <div className="icon whatsapp">
            <div className="tooltip">Whatsapp</div>
            <span>
              <a
                href={`whatsapp://send?text=${user.name}%20wants%20to%20share%20a%20greeting%20🥳🥳%0AClick%20the%20link%20to%20open%20the%20greeting%20👉👉%20greeting-2021.web.app/${user._id}`}
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Result;
