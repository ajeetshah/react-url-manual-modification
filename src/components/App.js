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

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Athletes" exact component={Athletes} />
        <Route
          path="/Athletes/:id/AthleteSessions"
          exact
          component={AthleteSessions}
        />
        <Route
          path="/Athletes/:athleteId/AthleteSessions/:athleteSessionId/TrainingSession"
          exact
          component={AthleteTrainingSession}
        />
      </Switch>
    </div>
  );
}

export default App;
