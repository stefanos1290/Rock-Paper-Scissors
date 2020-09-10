import React from "react";
import "./start.css";
import { Link } from "react-router-dom";
const Start = () => {
  return (
    <div className="container">
      <div className="triangle-container">
        <img className="triangle" src="images/bg-triangle.svg" alt="tri" />
        <button className="paper">
          <Link to="/psc/1">
            <img
              className="paper-icon"
              src="images/icon-paper.svg"
              alt="paper"
            />
          </Link>
        </button>
        <div className="paper-outline"></div>
        <button className="scissors">
          <Link to="/psc/2">
            <img
              className="scissors-icon"
              src="images/icon-scissors.svg"
              alt="scissors"
            />
          </Link>
        </button>
        <div className="scissors-outline"></div>
        <button className="rock">
          <Link to="/psc/3">
            <img className="rock-icon" src="images/icon-rock.svg" alt="rock" />
          </Link>
        </button>
        <div className="rock-outline"></div>
      </div>
    </div>
  );
};
export default Start;
