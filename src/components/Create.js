import React, { useState, useEffect } from "react";
import "./styles/create.css";
import Particles from "./utils/Particles";
import Form from "./pages/Form";
import Result from "./pages/Result";

function Create() {
  const [Page, setPage] = useState(true);
  const [user, setUser] = useState({});
  const [snow, setSnow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSnow(true);
    }, 800);
  });

  return (
    <div className="create-bg">
      {snow ? <Particles /> : null}
      <div className="container">
        {Page ? (
          <Form setPage={setPage} user={setUser} />
        ) : (
          <Result setPage={setPage} user={user} />
        )}
      </div>
    </div>
  );
}

export default Create;
