import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import isEmail from "validator/lib/isEmail";
import greetapi from "../../api/greet";

function Form({ setPage, user }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [verify, setVerify] = useState(false);
  const [button, setButton] = useState('Create Now');

  const submitButton = async () => {
    const button = document.querySelector(".create-button");
    button.disabled = true;
    if (!verify) {
      button.removeAttribute("disabled");
      return alert("Please verify using ReCAPTCHA");
    }
    if (!isEmail(email)) {
      button.removeAttribute("disabled");
      return alert("Please enter valid email address");
    }
    try {
      setButton("Creating...");
      const res = await greetapi.post("/create", { name: name, email: email });
      setPage(false);
      user(res.data);
    } catch (e) {
      console.log(e);
    }
    setButton("Create Now");
    button.removeAttribute("disabled");
  };
  return (
    <div className="form-container">
      <div className="title">
        <h2>Create your greeting</h2>
      </div>
      <form className="form-field">
        <div className="label">
          <label>Enter Your Name:</label>
        </div>
        <input
          type="text"
          to="name"
          maxLength={10}
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <div className="label">
          <label>Enter Your email id:</label>
        </div>
        <input
          type="text"
          to="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </form>
      <ReCAPTCHA
        sitekey="6Le0GwkdAAAAALRMNNtgIekgpH1KQhKn0UccwYOf"
        size="normal"
        onChange={() => {
          setVerify(true);
        }}
      />
      <button className="create-button" onClick={submitButton}>
        {button}
      </button>
    </div>
  );
}

export default Form;
