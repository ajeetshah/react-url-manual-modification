import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { CommentsModal } from "./Modal/CommentsModal";
import Moment from "react-moment";

//#region STATIC FIELDS
let passedAthleteId = 0;
const athleteSessionsJSON = [
  {
    AthleteSessionId: 1,
    AthletePseudo: "Thomas001",
    CoachPseudo: "JackieChan",
    Goals: [
      {
        Id: 4,
        Name: "Endurance",
      },
      {
        Id: 5,
        Name: "Cardio",
      },
    ],
    TrainingProgramName: "Thomas - Force et endurance",
    TrainingSessionName: "WOD 1",
    CreationDate: "2020-04-12T14:00:00",
    StartDate: null,
    FinishDate: null,
    TrainingSessionState: 0,
    SessionComments: [
      {
        AthleteSessionId: 1,
        SessionCommentId: 62,
        Comment: "Bonjour coach WOD 1",
        Pseudo: "Thomas001",
        Date: "2020-04-12T10:00:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 1,
        SessionCommentId: 63,
        Comment: "Bonjour athlète WOD 1",
        Pseudo: "JackieChan",
        Date: "2020-04-12T10:01:00",
        AppUserType: 0,
      },
    ],
  },
  {
    AthleteSessionId: 2,
    AthletePseudo: "Thomas001",
    CoachPseudo: "JackieChan",
    Goals: [
      {
        Id: 4,
        Name: "Endurance",
      },
      {
        Id: 5,
        Name: "Cardio",
      },
    ],
    TrainingProgramName: "Thomas - Force et endurance",
    TrainingSessionName: "WOD 2",
    CreationDate: "2020-04-13T14:00:00",
    StartDate: "2020-04-15T18:00:00",
    FinishDate: null,
    TrainingSessionState: 3,
    SessionComments: [
      {
        AthleteSessionId: 2,
        SessionCommentId: 31,
        Comment: "Bonjour coach WOD 2",
        Pseudo: "Thomas001",
        Date: "2020-04-12T12:00:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 2,
        SessionCommentId: 32,
        Comment: "Bonjour coach WOD 2",
        Pseudo: "Thomas001",
        Date: "2020-04-12T12:01:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 2,
        SessionCommentId: 33,
        Comment: "Bonjour coach WOD 2",
        Pseudo: "Thomas001",
        Date: "2020-04-12T12:02:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 2,
        SessionCommentId: 34,
        Comment: "Bonjour coach WOD 2",
        Pseudo: "Thomas001",
        Date: "2020-04-12T12:03:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 2,
        SessionCommentId: 35,
        Comment: "Bonjour athlète WOD 2",
        Pseudo: "JackieChan",
        Date: "2020-04-12T12:04:00",
        AppUserType: 0,
      },
      {
        AthleteSessionId: 2,
        SessionCommentId: 36,
        Comment: "Bonjour coach WOD 2",
        Pseudo: "Thomas001",
        Date: "2020-04-12T12:05:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 2,
        SessionCommentId: 37,
        Comment: "Bonjour coach WOD 2",
        Pseudo: "Thomas001",
        Date: "2020-04-12T12:06:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 2,
        SessionCommentId: 38,
        Comment: "Bonjour athlète WOD 2",
        Pseudo: "JackieChan",
        Date: "2020-04-12T12:07:00",
        AppUserType: 0,
      },
      {
        AthleteSessionId: 2,
        SessionCommentId: 39,
        Comment: "Bonjour athlète WOD 2",
        Pseudo: "JackieChan",
        Date: "2020-04-12T12:08:00",
        AppUserType: 0,
      },
      {
        AthleteSessionId: 2,
        SessionCommentId: 40,
        Comment: "Bonjour athlète WOD 2",
        Pseudo: "JackieChan",
        Date: "2020-04-12T12:09:00",
        AppUserType: 0,
      },
      {
        AthleteSessionId: 2,
        SessionCommentId: 41,
        Comment: "Bonjour coach WOD 2",
        Pseudo: "Thomas001",
        Date: "2020-04-12T12:10:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 2,
        SessionCommentId: 42,
        Comment: "Bonjour athlète WOD 2",
        Pseudo: "JackieChan",
        Date: "2020-04-12T12:11:00",
        AppUserType: 0,
      },
      {
        AthleteSessionId: 2,
        SessionCommentId: 43,
        Comment: "Bonjour athlète WOD 2",
        Pseudo: "JackieChan",
        Date: "2020-04-12T12:12:00",
        AppUserType: 0,
      },
      {
        AthleteSessionId: 2,
        SessionCommentId: 44,
        Comment: "Bonjour coach WOD 2",
        Pseudo: "Thomas001",
        Date: "2020-04-12T12:13:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 2,
        SessionCommentId: 45,
        Comment: "Bonjour coach WOD 2",
        Pseudo: "Thomas001",
        Date: "2020-04-12T12:14:00",
        AppUserType: 1,
      },
    ],
  },
  {
    AthleteSessionId: 3,
    AthletePseudo: "Thomas001",
    CoachPseudo: "JackieChan",
    Goals: [
      {
        Id: 4,
        Name: "Endurance",
      },
      {
        Id: 5,
        Name: "Cardio",
      },
    ],
    TrainingProgramName: "Thomas - Force et endurance",
    TrainingSessionName: "WOD 3",
    CreationDate: "2020-04-14T14:00:00",
    StartDate: "2020-04-16T18:00:00",
    FinishDate: "2020-04-16T18:50:00",
    TrainingSessionState: 0,
    SessionComments: [
      {
        AthleteSessionId: 3,
        SessionCommentId: 46,
        Comment: "Bonjour coach WOD 3",
        Pseudo: "Thomas001",
        Date: "2020-04-12T11:00:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 3,
        SessionCommentId: 47,
        Comment: "Bonjour coach WOD 3",
        Pseudo: "Thomas001",
        Date: "2020-04-12T11:01:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 3,
        SessionCommentId: 48,
        Comment: "Bonjour coach WOD 3",
        Pseudo: "Thomas001",
        Date: "2020-04-12T11:02:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 3,
        SessionCommentId: 49,
        Comment: "Bonjour coach WOD 3",
        Pseudo: "Thomas001",
        Date: "2020-04-12T11:03:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 3,
        SessionCommentId: 50,
        Comment: "Bonjour athlète WOD 3",
        Pseudo: "JackieChan",
        Date: "2020-04-12T11:04:00",
        AppUserType: 0,
      },
      {
        AthleteSessionId: 3,
        SessionCommentId: 51,
        Comment: "Bonjour coach WOD 3",
        Pseudo: "Thomas001",
        Date: "2020-04-12T11:05:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 3,
        SessionCommentId: 52,
        Comment: "Bonjour coach WOD 3",
        Pseudo: "Thomas001",
        Date: "2020-04-12T11:06:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 3,
        SessionCommentId: 53,
        Comment: "Bonjour athlète WOD 3",
        Pseudo: "JackieChan",
        Date: "2020-04-12T11:07:00",
        AppUserType: 0,
      },
      {
        AthleteSessionId: 3,
        SessionCommentId: 54,
        Comment: "Bonjour athlète WOD 3",
        Pseudo: "JackieChan",
        Date: "2020-04-12T11:08:00",
        AppUserType: 0,
      },
      {
        AthleteSessionId: 3,
        SessionCommentId: 55,
        Comment: "Bonjour athlète WOD 3",
        Pseudo: "JackieChan",
        Date: "2020-04-12T11:09:00",
        AppUserType: 0,
      },
      {
        AthleteSessionId: 3,
        SessionCommentId: 56,
        Comment: "Bonjour coach WOD 3",
        Pseudo: "Thomas001",
        Date: "2020-04-12T11:10:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 3,
        SessionCommentId: 57,
        Comment: "Bonjour athlète WOD 3",
        Pseudo: "JackieChan",
        Date: "2020-04-12T11:11:00",
        AppUserType: 0,
      },
      {
        AthleteSessionId: 3,
        SessionCommentId: 58,
        Comment: "Bonjour athlète WOD 3",
        Pseudo: "JackieChan",
        Date: "2020-04-12T11:12:00",
        AppUserType: 0,
      },
      {
        AthleteSessionId: 3,
        SessionCommentId: 59,
        Comment: "Bonjour coach WOD 3",
        Pseudo: "Thomas001",
        Date: "2020-04-12T11:13:00",
        AppUserType: 1,
      },
      {
        AthleteSessionId: 3,
        SessionCommentId: 60,
        Comment: "Bonjour coach WOD 3",
        Pseudo: "Thomas001",
        Date: "2020-04-12T11:14:00",
        AppUserType: 1,
      },
    ],
  },
];
const athleteGoalsJSON = [
  {
    Pseudo: "Thomas001",
    Goal: "Endurance",
  },
  {
    Pseudo: "Thomas001",
    Goal: "Cardio",
  },
];
//#endregion

class AthleteSessions extends Component {
  state = {
    athleteSessions: [],
    athleteGoals: [],
    sessionComments: [],
    sessionCommentModalShow: false,
  };

  //#region USEFULL FUNCTIONS
  formatSessionState = (sessionState) => {
    if (sessionState === 0) {
      return "Programmée";
    } else if (sessionState === 1) {
      return "Commencée";
    }
    if (sessionState === 2) {
      return "Finie";
    }
    if (sessionState === 3) {
      return "Abandonnée";
    }
    return "RAS";
  };

  capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.toLowerCase().charAt(0).toUpperCase() + s.toLowerCase().slice(1);
  };

  formatGoals = (goals) => {
    let goalsNames = "";
    for (let i = 0; i < goals.length; i++) {
      goalsNames += goals[i].Goal + ", ";
    }

    if (goalsNames.endsWith(", ")) {
      goalsNames = goalsNames.slice(0, -2);
    }

    return this.capitalize(goalsNames);
  };

  displayGoalTitle = (goalsString) => {
    let commaCount = 0;
    let objectifString = "";
    for (var j = 0; j < goalsString.length; j++) {
      if (goalsString.charAt(j) === ",") {
        commaCount++;
      }
    }
    if (commaCount > 0) {
      objectifString = "Objectifs";
    } else {
      objectifString = "Objectif";
    }

    return objectifString;
  };

  cursorHand = (e) => {
    e.target.style.cursor = "pointer";
  };

  disableDeleteButton = (trainingSessionState) => {
    if (trainingSessionState === 0) return false;
    else return true;
  };
  //#endregion

  render() {
    const {
      athSessId,
      sessionComments,
      athleteSessions,
      athleteGoals,
    } = this.state;

    passedAthleteId = this.props.match.params.id;

    let goals = this.formatGoals(athleteGoalsJSON);
    let goalsTitle = this.displayGoalTitle(goals);
    let athletePseudo = "";
    if (athleteSessions.length > 0) {
      athletePseudo = athleteSessions[0].AthletePseudo;
    }

    let disableAddButton = true;
    let programmedSessionsCount = 0;
    for (let i = 0; i < athleteSessions.length; i++) {
      if (athleteSessions[i].TrainingSessionState === 0) {
        programmedSessionsCount++;
      }

      if (programmedSessionsCount === 0) {
        disableAddButton = false;
      }
    }

    return (
      <React.Fragment>
        <div>
          <h2 className="mt-2">Traning sessions of {athletePseudo}</h2>
        </div>
        <div>
          <p className="mt-2">
            <h6>Choose a training session</h6>
          </p>
        </div>
        <div>
          <Table className="mt-4" striped bordered hover size="sm">
            <thead>
              <tr className="d-flex">
                <th className="col-2">Séance</th>
                <th className="col-2">Programme</th>
                <th className="col-2">État</th>
                <th className="col-1">Création</th>
                <th className="col-1">Début</th>
                <th className="col-1">Fin</th>
                <th className="col-3">Options</th>
              </tr>
            </thead>
            <tbody>
              {athleteSessionsJSON.map((athSess) => (
                <tr className="d-flex" key={athSess.AthleteSessionId}>
                  <td
                    className="col-2"
                    onMouseEnter={this.cursorHand}
                    onClick={() => {
                      this.props.history.push({
                        pathname: `/Athletes/${this.props.match.params?.id}/AthleteSessions/${athSess.AthleteSessionId}/TrainingSession`,
                      });
                    }}
                  >
                    {athSess.TrainingSessionName}
                  </td>
                  <td
                    className="col-2"
                    onMouseEnter={this.cursorHand}
                    onClick={() => {
                      this.props.history.push({
                        pathname: `/Athletes/${this.props.match.params?.id}/AthleteSessions/${athSess.AthleteSessionId}/TrainingSession`,
                      });
                    }}
                  >
                    {athSess.TrainingProgramName}
                  </td>
                  <td
                    className="col-2"
                    onMouseEnter={this.cursorHand}
                    onClick={() => {
                      this.props.history.push({
                        pathname: `/Athletes/${this.props.match.params?.id}/AthleteSessions/${athSess.AthleteSessionId}/TrainingSession`,
                      });
                    }}
                  >
                    {this.formatSessionState(athSess.TrainingSessionState)}
                  </td>
                  <td
                    className="col-1"
                    onMouseEnter={this.cursorHand}
                    onClick={() => {
                      this.props.history.push({
                        pathname: `/Athletes/${this.props.match.params?.id}/AthleteSessions/${athSess.AthleteSessionId}/TrainingSession`,
                      });
                    }}
                  >
                    <Moment format="DD MMMM YYYY à HH:mm:ss">
                      {athSess.CreationDate}
                    </Moment>
                  </td>
                  <td
                    className="col-1"
                    onMouseEnter={this.cursorHand}
                    onClick={() => {
                      this.props.history.push({
                        pathname: `/Athletes/${this.props.match.params?.id}/AthleteSessions/${athSess.AthleteSessionId}/TrainingSession`,
                      });
                    }}
                  >
                    <Moment format="DD MMMM YYYY à HH:mm:ss">
                      {athSess.StartDate}
                    </Moment>
                  </td>
                  <td
                    className="col-1"
                    onMouseEnter={this.cursorHand}
                    onClick={() => {
                      this.props.history.push({
                        pathname: `/Athletes/${this.props.match.params?.id}/AthleteSessions/${athSess.AthleteSessionId}/TrainingSession`,
                      });
                    }}
                  >
                    <Moment format="DD MMMM YYYY à HH:mm:ss">
                      {athSess.FinishDate}
                    </Moment>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}

export default AthleteSessions;
