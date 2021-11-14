import React from "react";
import Santa from "../../assets/img/santa.gif";
import "../styles/loading.css";
import Modal from "react-modal";

function Loading({ load }) {
  const customStyles = {
    content: {
      padding: 0,
      background: "radial-gradient(white, #b5bbff)",
      inset: "5px",
    },
  };
  return (
    <Modal isOpen={load} style={customStyles}>
      <div className="loading-content">
        <img className="loading-image" alt="santa" src={Santa} />
        <h2 className="loading">Loading...</h2>
      </div>
    </Modal>
  );
}

export default Loading;
