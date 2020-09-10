import React from "react";
import Start from "./components/Start";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Score from "./components/Score";
import Play from "./components/Play";
import Modal from "./components/Modal";

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Score />
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/psc/:id" exact component={Play} />
        </Switch>
        <Modal />
      </BrowserRouter>
    </div>
  );
};

export default Root;
