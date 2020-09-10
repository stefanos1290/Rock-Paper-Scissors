import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";

const App = () => {
  return (
    <div>
      <Root />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
