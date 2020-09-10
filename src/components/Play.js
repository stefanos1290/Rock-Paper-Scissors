import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import "./play.css";

const Play = () => {
  const checkPlayer1 = () => {
    if (params.id === "1") {
      return "paper";
    }
    if (params.id === "2") {
      return "scissors";
    }
    if (params.id === "3") {
      return "rock";
    }
  };

  const checkPlayer1Outline = () => {
    if (params.id === "1") {
      return "player1-paper-outline";
    }
    if (params.id === "2") {
      return "player1-scissors-outline";
    }
    if (params.id === "3") {
      return "player1-rock-outline";
    }
  };

  const params = useParams();

  const [selector] = useState(checkPlayer1);
  const [player1classname] = useState(checkPlayer1Outline);

  const player2elements = [1, 2, 3];
  const randomPlayer2elements =
    player2elements[Math.floor(Math.random() * player2elements.length)];

  const checkPlayer2 = () => {
    if (randomPlayer2elements === 1) {
      return "paper";
    }
    if (randomPlayer2elements === 2) {
      return "scissors";
    }
    if (randomPlayer2elements === 3) {
      return "rock";
    }
  };

  const checkPlayer2Outline = () => {
    if (randomPlayer2elements === 1) {
      return "player2-paper-outline";
    }
    if (randomPlayer2elements === 2) {
      return "player2-scissors-outline";
    }
    if (randomPlayer2elements === 3) {
      return "player2-rock-outline";
    }
  };

  const [selector2] = useState(checkPlayer2);
  const [player2classname] = useState(checkPlayer2Outline);
  const [count, setCount] = useState(0);
  const [resultsCount, setResultsCount] = useState(0);

  useEffect(() => {
    if (count === 1) return;
    // setAnimation(true);
    setTimeout(() => {
      setCount(1);
      // setAnimation(false)
    }, 2000);
  }, [count]);

  useEffect(() => {
    if (resultsCount === 1) return;
    setTimeout(() => {
      setResultsCount(1);
    }, 3000);
  }, [resultsCount]);

  const results = () => {
    if (params.id === "1" && player2classname === "player2-scissors-outline") {
      return "YOU LOSE";
    }
    if (params.id === "1" && player2classname === "player2-rock-outline") {
      return "YOU WIN";
    }
    if (params.id === "1" && player2classname === "player2-paper-outline") {
      return "DRAW";
    }
    if (params.id === "2" && player2classname === "player2-scissors-outline") {
      return "DRAW";
    }
    if (params.id === "2" && player2classname === "player2-rock-outline") {
      return "YOU LOSE";
    }
    if (params.id === "2" && player2classname === "player2-paper-outline") {
      return "YOU WIN";
    }
    if (params.id === "3" && player2classname === "player2-scissors-outline") {
      return "YOU WIN";
    }
    if (params.id === "3" && player2classname === "player2-rock-outline") {
      return "DRAW";
    }
    if (params.id === "3" && player2classname === "player2-paper-outline") {
      return "YOU LOSE";
    }
  };

  const [winOrLose] = useState(results);

  const player1Ref = useRef();
  const player1OutlineRef = useRef();
  const youPickedRef = useRef();
  const player2Ref = useRef();
  const player2OutlineRef = useRef();
  const housePickedRef = useRef();

  const changeCssWithRefs = () => {
    player1Ref.current.style.transform = "translate(-150%, 60%)";
    player1OutlineRef.current.style.transform = "translate(-116%, 46%)";
    youPickedRef.current.style.transform = "translate(-303px, -71px)";
    player2Ref.current.style.transform = "translate(150%, 60%)";
    player2OutlineRef.current.style.transform = "translate(115%, 46%)";
    housePickedRef.current.style.transform = "translate(295px, -71px)";
  };

  useEffect(() => {
    setTimeout(() => {
      changeCssWithRefs();
    }, 3000);
  }, []);

  const winne1Outline = useRef();
  const winne2Outline = useRef();

  const checkWinnerOutline = () => {
    if (winOrLose === "YOU WIN") {
      winne1Outline.current.style.display = "inline";
    }
    if (winOrLose === "YOU LOSE") {
      winne2Outline.current.style.display = "inline";
    }
    if (winOrLose === "DRAW") {
      return;
    }
  };
  useEffect(() => {
    setTimeout(() => {
      checkWinnerOutline();
    }, 3000);
  });

  return (
    <div className="play-container">
      <span ref={youPickedRef} className="you-picked">
        YOU PICKED
      </span>
      <span ref={housePickedRef} className="house-picked">
        THE HOUSE PICKED
      </span>
      <div ref={player1OutlineRef} className={player1classname}></div>
      <button ref={player1Ref} className="player1">
        <img
          className="player1Icon"
          alt="player1"
          src={`/images/icon-${selector}.svg`}
        />
      </button>
      {count >= 1 && (
        <div ref={player2OutlineRef} className={player2classname}></div>
      )}
      <div ref={player2Ref} className="player2">
        {count >= 1 && (
          <button className="player2Button">
            <img
              className="player1Icon"
              alt="player1"
              src={`/images/icon-${selector2}.svg`}
            />
          </button>
        )}
      </div>
      {resultsCount >= 1 && (
        <div className="winContainer">
          <div ref={winne1Outline} style={{ display: "none" }}>
            <div className="winner3Outline"></div>
            <div className="winner2Outline"></div>
            <div className="winner1Outline"></div>
          </div>
          <div ref={winne2Outline} style={{ display: "none" }}>
            <div className="homeWinner3Outline"></div>
            <div className="homeWinner2Outline"></div>
            <div className="homeWinner1Outline"></div>
          </div>

          <div className="winOrLoseMessage">{winOrLose}</div>
          <button className="buttonToStartAgain">
            <Link className="linkToStartAgain" to="/">
              PLAY AGAIN
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Play;
