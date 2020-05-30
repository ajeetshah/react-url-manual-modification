import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./common/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Athletes from "./get/Athletes";
import AthleteSessions from "./get/AthleteSessions";
import AthleteTrainingSession from "./get/AthleteTrainingSession";

export const paths = {
  Athletes: "/Athletes",
  AthleteSessions: "/Athletes/:id/AthleteSessions",
  AthleteTrainingSession:
    "/Athletes/:athleteId/AthleteSessions/:athleteSessionId/TrainingSession",
};

export const makePaths = {
  AthleteSessions: (id) => {
    return `/Athletes/${id}/AthleteSessions`;
  },
  AthleteTrainingSession: (athleteId, athleteSessionId) => {
    return `/Athletes/${athleteId}/AthleteSessions/${athleteSessionId}/TrainingSession`;
  },
};

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={paths.Athletes} component={Athletes} />
        <Route exact path={paths.AthleteSessions} component={AthleteSessions} />
        <Route
          exact
          path={paths.AthleteTrainingSession}
          component={AthleteTrainingSession}
        />
      </Switch>
    </div>
  );
}

export default App;
