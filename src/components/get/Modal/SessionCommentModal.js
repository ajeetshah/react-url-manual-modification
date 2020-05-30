import React, { Component } from "react";
import { Table, Modal } from "react-bootstrap";
import Moment from "react-moment";

//#region STATIC FIELDS
//#endregion

export class SessionCommentModal extends Component {
  //#region USEFULL FUNCTIONS
  colorSessionComment = (objType) => {
    let inputStyle = {
      background: "#e6cae0",
    };

    if (objType === 0) {
      inputStyle = {
        background: "#64b5a7",
      };
    } else {
      inputStyle = {
        background: "#64b588",
      };
    }
    return inputStyle;
  };

  goodSessionComment = (sessionComments) => {
    let sessionCommentsResult = [];
    for (var i = 0; i < sessionComments.length; i++) {
      if (
        sessionComments[i].AthleteSessionId === this.props.propAhleteSessionId
      ) {
        sessionCommentsResult.push(sessionComments[i]);
      }
    }
    return sessionCommentsResult;
  };
  //#endregion

  render() {
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Commentaires séance
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table className="mt-4" striped bordered hover size="sm">
              <thead>
                <tr className="d-flex">
                  <th className="col-3">Expéditeur</th>
                  <th className="col-6">Message</th>
                  <th className="col-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {this.props.propSessionComments.map((disc) => (
                  <tr className="d-flex" key={disc.SessionCommentId}>
                    <td
                      className="col-3"
                      style={this.colorSessionComment(disc.AppUserType)}
                    >
                      {disc.Pseudo}
                    </td>
                    <td
                      className="col-6"
                      style={this.colorSessionComment(disc.AppUserType)}
                    >
                      {disc.Comment}
                    </td>
                    <td
                      className="col-3"
                      style={this.colorSessionComment(disc.AppUserType)}
                    >
                      <Moment format="DD MMMM YYYY à HH:mm:ss">
                        {disc.Date}
                      </Moment>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <p>
              <small>Appuyez sur échap pour fermer</small>
            </p>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
