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
        <Route exact path="/" component={Home} />
        <Route exact path="/Athletes" component={Athletes} />
        <Route
          exact
          path="/Athletes/:id/AthleteSessions"
          component={AthleteSessions}
        />
        <Route
          exact
          path="/Athletes/:athleteId/AthleteSessions/:athleteSessionId/TrainingSession"
          component={AthleteTrainingSession}
        />
      </Switch>
    </div>
  );
}

export default App;
