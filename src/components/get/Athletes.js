import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import Moment from "react-moment";

//#region STATIC FIELDS
const athletesJSON = [
  {
    AthleteId: 2,
    Pseudo: "Thomas001",
    FirstName: "Thomas",
    LastName: "Dupont",
    LastSessionState: 0,
    LastSessionDate: "2020-04-14T14:00:00",
    TrainingProgramName: "Thomas - Force et endurance",
    SubscriptionExpiration: "2020-10-12T10:02:00",
  },
  {
    AthleteId: 1,
    Pseudo: "SophieSophie",
    FirstName: "Sophie",
    LastName: "Leclerc",
    LastSessionState: 1,
    LastSessionDate: "2020-04-16T14:00:00",
    TrainingProgramName: "Sophie - Perte de poids",
    SubscriptionExpiration: "2020-07-12T10:01:00",
  },
  {
    AthleteId: 3,
    Pseudo: "Marie90",
    FirstName: "Marie",
    LastName: "Lemaitre",
    LastSessionState: 2,
    LastSessionDate: "2020-04-17T14:00:00",
    TrainingProgramName: "Marie - Perte de poids",
    SubscriptionExpiration: "2021-04-12T10:03:00",
  },
];
//#endregion

class Athletes extends Component {
  state = { athletes: [] };

  //#region USEFULL FUNCTIONS
  cursorHand = (e) => {
    e.target.style.cursor = "pointer";
  };

  disableNewSessionButton = (lastSessionState) => {
    if (lastSessionState !== 0 && lastSessionState !== 1) return false;
    else return true;
  };

  displaySessionState(sessionState) {
    let sessionStateString = "";
    switch (sessionState) {
      case 0:
        sessionStateString = "Programmée";
        break;
      case 1:
        sessionStateString = "Commencée";
        break;
      case 2:
        sessionStateString = "Finie";
        break;
      case 3:
        sessionStateString = "Abandonnée";
        break;
      default:
        break;
    }
    return sessionStateString;
  }

  disableNewSessionButton = (trainingSessionState) => {
    if (trainingSessionState === 0 || trainingSessionState === 1) return true;
    else return false;
  };
  //#endregion

  render() {
    const { athletes } = this.state;

    return (
      <React.Fragment>
        <div>
          <h2>Athletes</h2>
          <p>
            <h6>Choose an athlete</h6>
          </p>
        </div>
        <div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr className="d-flex">
                <th className="col-1">Athlète</th>
                <th className="col-1">Prénom</th>
                <th className="col-1">Nom</th>
                <th className="col-2">Programme</th>
                <th className="col-2">Dernière séance</th>
                <th className="col-2">Fin de l'abonnement</th>
                <th className="col-3">Options</th>
              </tr>
            </thead>
            <tbody>
              {athletesJSON.map((ath) => (
                <tr className="d-flex" key={ath.AthleteId}>
                  <td
                    className="col-1"
                    onMouseEnter={this.cursorHand}
                    onClick={() => {
                      this.props.history.push({
                        pathname:
                          "Athletes/" + ath.AthleteId + "/AthleteSessions/",
                      });
                    }}
                  >
                    {ath.Pseudo}
                  </td>
                  <td
                    onMouseEnter={this.cursorHand}
                    onClick={() => {
                      this.props.history.push({
                        pathname:
                          "Athletes/" + ath.AthleteId + "/AthleteSessions/",
                      });
                    }}
                    className="col-1"
                  >
                    {ath.FirstName}
                  </td>
                  <td
                    onMouseEnter={this.cursorHand}
                    onClick={() => {
                      this.props.history.push({
                        pathname:
                          "Athletes/" + ath.AthleteId + "/AthleteSessions/",
                      });
                    }}
                    className="col-1"
                  >
                    {ath.LastName}
                  </td>
                  <td
                    onMouseEnter={this.cursorHand}
                    onClick={() => {
                      this.props.history.push({
                        pathname:
                          "Athletes/" + ath.AthleteId + "/AthleteSessions/",
                      });
                    }}
                    className="col-2"
                  >
                    {ath.TrainingProgramName}
                  </td>
                  <td
                    onMouseEnter={this.cursorHand}
                    onClick={() => {
                      this.props.history.push({
                        pathname:
                          "Athletes/" + ath.AthleteId + "/AthleteSessions/",
                      });
                    }}
                    className="col-2"
                  >
                    Créée le{" "}
                    <Moment format="DD MMMM YYYY à HH:mm">
                      {ath.LastSessionDate}
                    </Moment>{" "}
                    - {this.displaySessionState(ath.LastSessionState)}
                  </td>
                  <td
                    onMouseEnter={this.cursorHand}
                    onClick={() => {
                      this.props.history.push({
                        pathname:
                          "Athletes/" + ath.AthleteId + "/AthleteSessions/",
                      });
                    }}
                    className="col-2"
                  >
                    <Moment format="DD MMMM YYYY">
                      {ath.SubscriptionExpiration}
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

export default Athletes;
