import React from "react";
import "./styles/ErrorPage.css";

function ErrorPage() {
  return (
    <React.Fragment>
      <div className="report">
        <a href="mailto:jonyjasjonyjas@yahoo.com">Report an issue</a>
      </div>
      <div className="content">
        <div className="main-text">
          <h1>
            Aw jeez.
            <br />
            That page has gone missing.
          </h1>
          <a className="home-link" href="/create">
            Hitch a ride back home.
          </a>
        </div>
        <div className="ground">
          <div className="mound">
            <div className="mound_text">404</div>
            <div className="mound_spade"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ErrorPage;
