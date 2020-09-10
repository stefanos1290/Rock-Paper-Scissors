import React, { useState } from "react";
import "./modal.css";

const Modal = () => {
  const [idName, setIdName] = useState("invisible");
  return (
    <>
      <div
        id={idName}
        onClick={() => setIdName("invisible")}
        className="background-modal-container"
      ></div>
      <div id={idName} className="rules-image-card">
        <div className="rules-text-modal">RULES</div>
        <img
          onClick={() => setIdName("invisible")}
          className="icon-close"
          src="/images/icon-close.svg"
          alt="close"
        ></img>
        <img
          className="rules-image"
          alt="rules"
          src="/images/image-rules.svg"
        ></img>
      </div>
      <button
        onClick={() => {
          setIdName("visible");
        }}
        className="rules-button"
      >
        RULES
      </button>
    </>
  );
};
export default Modal;
