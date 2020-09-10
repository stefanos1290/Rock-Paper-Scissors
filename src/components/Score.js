import React from "react";
import "./score.css";

const Score = () => {
  return (
    <div>
      <div className="headline-container">
        <div className="rps-container">
          <div style={{ height: "29px" }}>ROCK</div>
          <div style={{ height: "29px" }}>PAPER</div>
          <div style={{ height: "29px" }}>SCISSORS</div>
        </div>
        <div className="fakeDiv1"></div>
        <div className="fakeDiv2"></div>
        <div className="fakeDiv3"></div>
        <div className="fakeDiv4"></div>
        <div className="score">
          <div style={{ fontWeight: "600", color: "#182a44" }}>SCORE</div>
          <div
            style={{
              fontWeight: "600",
              fontSize: "50px",
              color: "#182a44",
            }}
          >
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
