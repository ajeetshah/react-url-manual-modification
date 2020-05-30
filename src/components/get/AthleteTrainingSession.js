import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { SessionCommentModal } from "./Modal/SessionCommentModal";

//#region STATIC FIELDS
let passedAthleteId = 0;
let passedAthleteSessionId = 0;
const athleteTrainingSessionJSON = {
  AthletePseudo: "Thomas001",
  CoachPseudo: "JackieChan",
  TrainingProgramName: "Thomas - Force et endurance",
  TrainingSessionName: "WOD 1",
  CreationDate: "2020-04-12T14:00:00",
  StartDate: null,
  FinishDate: null,
  TrainingSessionState: 0,
  SessionComments: [
    {
      AthleteSessionId: 0,
      SessionCommentId: 0,
      Comment: "Bonjour coach WOD 1",
      Pseudo: "Thomas001",
      Date: "2020-04-12T10:00:00",
      AppUserType: 1,
    },
    {
      AthleteSessionId: 0,
      SessionCommentId: 0,
      Comment: "Bonjour athlète WOD 1",
      Pseudo: "JackieChan",
      Date: "2020-04-12T10:01:00",
      AppUserType: 0,
    },
  ],
  WarmupExercises: [
    {
      SessionExerciseId: 1,
      ExerciseName: "Air Squat",
      ExerciseRange: 1,
      Rest: 0,
      Duration: 30,
      Repetitions: null,
      Weight: null,
    },
    {
      SessionExerciseId: 2,
      ExerciseName: "Spider Walk",
      ExerciseRange: 2,
      Rest: 0,
      Duration: 30,
      Repetitions: null,
      Weight: null,
    },
    {
      SessionExerciseId: 3,
      ExerciseName: "Box Jump",
      ExerciseRange: 3,
      Rest: 0,
      Duration: 30,
      Repetitions: null,
      Weight: null,
    },
    {
      SessionExerciseId: 4,
      ExerciseName: "Air Squat",
      ExerciseRange: 4,
      Rest: 0,
      Duration: 30,
      Repetitions: null,
      Weight: null,
    },
    {
      SessionExerciseId: 5,
      ExerciseName: "Spider Walk",
      ExerciseRange: 5,
      Rest: 0,
      Duration: 30,
      Repetitions: null,
      Weight: null,
    },
    {
      SessionExerciseId: 6,
      ExerciseName: "Box Jump",
      ExerciseRange: 6,
      Rest: 130,
      Duration: 30,
      Repetitions: null,
      Weight: null,
    },
  ],
  WorkoutExercises: [
    {
      SessionExerciseId: 15,
      ExerciseName: "Kettlebell Clean One Arm",
      ExerciseRange: 1,
      Rest: 30,
      Duration: null,
      Repetitions: 21,
      Weight: 20.0,
    },
    {
      SessionExerciseId: 16,
      ExerciseName: "Kettlebell Clean One Arm",
      ExerciseRange: 2,
      Rest: 30,
      Duration: null,
      Repetitions: 15,
      Weight: 20.0,
    },
    {
      SessionExerciseId: 17,
      ExerciseName: "Kettlebell Clean One Arm",
      ExerciseRange: 3,
      Rest: 70,
      Duration: null,
      Repetitions: 9,
      Weight: 20.0,
    },
    {
      SessionExerciseId: 18,
      ExerciseName: "Overhead Walking Lunges",
      ExerciseRange: 4,
      Rest: 30,
      Duration: null,
      Repetitions: 21,
      Weight: 20.0,
    },
    {
      SessionExerciseId: 19,
      ExerciseName: "Overhead Walking Lunges",
      ExerciseRange: 5,
      Rest: 30,
      Duration: null,
      Repetitions: 15,
      Weight: 20.0,
    },
    {
      SessionExerciseId: 20,
      ExerciseName: "Overhead Walking Lunges",
      ExerciseRange: 6,
      Rest: 60,
      Duration: null,
      Repetitions: 9,
      Weight: 20.0,
    },
    {
      SessionExerciseId: 21,
      ExerciseName: "Toes To Bar",
      ExerciseRange: 7,
      Rest: 30,
      Duration: null,
      Repetitions: 21,
      Weight: 20.0,
    },
    {
      SessionExerciseId: 22,
      ExerciseName: "Toes To Bar",
      ExerciseRange: 8,
      Rest: 30,
      Duration: null,
      Repetitions: 15,
      Weight: 20.0,
    },
    {
      SessionExerciseId: 23,
      ExerciseName: "Toes To Bar",
      ExerciseRange: 9,
      Rest: 60,
      Duration: null,
      Repetitions: 9,
      Weight: 20.0,
    },
    {
      SessionExerciseId: 24,
      ExerciseName: "Spider Walk",
      ExerciseRange: 10,
      Rest: 30,
      Duration: null,
      Repetitions: 21,
      Weight: 20.0,
    },
    {
      SessionExerciseId: 25,
      ExerciseName: "Spider Walk",
      ExerciseRange: 11,
      Rest: 30,
      Duration: null,
      Repetitions: 15,
      Weight: 20.0,
    },
    {
      SessionExerciseId: 26,
      ExerciseName: "Spider Walk",
      ExerciseRange: 12,
      Rest: 0,
      Duration: null,
      Repetitions: 9,
      Weight: 20.0,
    },
  ],
  StretchingExercises: [
    {
      SessionExerciseId: 48,
      ExerciseName: "Etirement des épaules",
      ExerciseRange: 1,
      Rest: 0,
      Duration: 30,
      Repetitions: null,
      Weight: null,
    },
    {
      SessionExerciseId: 49,
      ExerciseName: "Etirement du dos",
      ExerciseRange: 2,
      Rest: 0,
      Duration: 30,
      Repetitions: null,
      Weight: null,
    },
    {
      SessionExerciseId: 50,
      ExerciseName: "Etirement des jambes",
      ExerciseRange: 3,
      Rest: 0,
      Duration: 30,
      Repetitions: null,
      Weight: null,
    },
  ],
};
const warmupsJSON = [
  {
    SessionExerciseId: 1,
    ExerciseName: "Air Squat",
    ExerciseRange: 1,
    Rest: 0,
    Duration: 30,
    Repetitions: null,
    Weight: null,
  },
  {
    SessionExerciseId: 2,
    ExerciseName: "Spider Walk",
    ExerciseRange: 2,
    Rest: 0,
    Duration: 30,
    Repetitions: null,
    Weight: null,
  },
  {
    SessionExerciseId: 3,
    ExerciseName: "Box Jump",
    ExerciseRange: 3,
    Rest: 0,
    Duration: 30,
    Repetitions: null,
    Weight: null,
  },
  {
    SessionExerciseId: 4,
    ExerciseName: "Air Squat",
    ExerciseRange: 4,
    Rest: 0,
    Duration: 30,
    Repetitions: null,
    Weight: null,
  },
  {
    SessionExerciseId: 5,
    ExerciseName: "Spider Walk",
    ExerciseRange: 5,
    Rest: 0,
    Duration: 30,
    Repetitions: null,
    Weight: null,
  },
  {
    SessionExerciseId: 6,
    ExerciseName: "Box Jump",
    ExerciseRange: 6,
    Rest: 130,
    Duration: 30,
    Repetitions: null,
    Weight: null,
  },
];
const workoutsJSON = [
  {
    SessionExerciseId: 15,
    ExerciseName: "Kettlebell Clean One Arm",
    ExerciseRange: 1,
    Rest: 30,
    Duration: null,
    Repetitions: 21,
    Weight: 20.0,
  },
  {
    SessionExerciseId: 16,
    ExerciseName: "Kettlebell Clean One Arm",
    ExerciseRange: 2,
    Rest: 30,
    Duration: null,
    Repetitions: 15,
    Weight: 20.0,
  },
  {
    SessionExerciseId: 17,
    ExerciseName: "Kettlebell Clean One Arm",
    ExerciseRange: 3,
    Rest: 70,
    Duration: null,
    Repetitions: 9,
    Weight: 20.0,
  },
  {
    SessionExerciseId: 18,
    ExerciseName: "Overhead Walking Lunges",
    ExerciseRange: 4,
    Rest: 30,
    Duration: null,
    Repetitions: 21,
    Weight: 20.0,
  },
  {
    SessionExerciseId: 19,
    ExerciseName: "Overhead Walking Lunges",
    ExerciseRange: 5,
    Rest: 30,
    Duration: null,
    Repetitions: 15,
    Weight: 20.0,
  },
  {
    SessionExerciseId: 20,
    ExerciseName: "Overhead Walking Lunges",
    ExerciseRange: 6,
    Rest: 60,
    Duration: null,
    Repetitions: 9,
    Weight: 20.0,
  },
  {
    SessionExerciseId: 21,
    ExerciseName: "Toes To Bar",
    ExerciseRange: 7,
    Rest: 30,
    Duration: null,
    Repetitions: 21,
    Weight: 20.0,
  },
  {
    SessionExerciseId: 22,
    ExerciseName: "Toes To Bar",
    ExerciseRange: 8,
    Rest: 30,
    Duration: null,
    Repetitions: 15,
    Weight: 20.0,
  },
  {
    SessionExerciseId: 23,
    ExerciseName: "Toes To Bar",
    ExerciseRange: 9,
    Rest: 60,
    Duration: null,
    Repetitions: 9,
    Weight: 20.0,
  },
  {
    SessionExerciseId: 24,
    ExerciseName: "Spider Walk",
    ExerciseRange: 10,
    Rest: 30,
    Duration: null,
    Repetitions: 21,
    Weight: 20.0,
  },
  {
    SessionExerciseId: 25,
    ExerciseName: "Spider Walk",
    ExerciseRange: 11,
    Rest: 30,
    Duration: null,
    Repetitions: 15,
    Weight: 20.0,
  },
  {
    SessionExerciseId: 26,
    ExerciseName: "Spider Walk",
    ExerciseRange: 12,
    Rest: 0,
    Duration: null,
    Repetitions: 9,
    Weight: 20.0,
  },
];
const stretchingsJSON = [
  {
    SessionExerciseId: 48,
    ExerciseName: "Etirement des épaules",
    ExerciseRange: 1,
    Rest: 0,
    Duration: 30,
    Repetitions: null,
    Weight: null,
  },
  {
    SessionExerciseId: 49,
    ExerciseName: "Etirement du dos",
    ExerciseRange: 2,
    Rest: 0,
    Duration: 30,
    Repetitions: null,
    Weight: null,
  },
  {
    SessionExerciseId: 50,
    ExerciseName: "Etirement des jambes",
    ExerciseRange: 3,
    Rest: 0,
    Duration: 30,
    Repetitions: null,
    Weight: null,
  },
];
//#endregion

class AthleteTrainingSession extends Component {
  state = {
    athleteTrainingSession: [],
    sessionComments: [],
    warmups: [],
    workouts: [],
    stretchings: [],
    sessionCommentModalShow: false,
    warmupSetsModalShow: false,
    workoutSetsModalShow: false,
    stretchingSetsModalShow: false,
  };

  //#region USEFULL FUNCTIONS
  displayDurationAndRest(rest) {
    let result = "";

    let h = ~~(rest / 3600);
    if (h > 0) {
      result += h.toString() + "°";
    }

    let min = ~~(rest / 60) - h * 60;
    if (min > 0) {
      result += min.toString() + "'";
    }

    let sec = rest % 60;
    if (sec > 0) {
      result += sec.toString() + "''";
    }

    return result;
  }
  //#endregion

  render() {
    const {
      athleteTrainingSession,
      sessionComments,
      warmups,
      workouts,
      stretchings,
      sessionExerciseId,
    } = this.state;

    passedAthleteId = this.props.match.params.athleteId;
    passedAthleteSessionId = this.props.match.params.athleteSessionId;

    return (
      <React.Fragment>
        <div>
          <h2 className="mt-2">
            Training session : {athleteTrainingSessionJSON.TrainingSessionName}
          </h2>
          <h6>Program : {athleteTrainingSessionJSON.TrainingProgramName}</h6>
        </div>
        <div>
          <h4>Training</h4>
          <Table className="mt-2" striped bordered hover size="sm">
            <thead>
              <tr className="d-flex">
                <th className="col-2">Exercice</th>
                <th className="col-2">Rang</th>
                <th className="col-2">Durée</th>
                <th className="col-2">Répétitions</th>
                <th className="col-2">Charge en kg</th>
                <th className="col-2">Repos</th>
              </tr>
            </thead>
            <tbody>
              {workoutsJSON.map((work) => (
                <tr className="d-flex" key={work}>
                  <td className="col-2">{work.ExerciseName}</td>
                  <td className="col-2">{work.ExerciseRange}</td>
                  <td className="col-2">
                    {this.displayDurationAndRest(work.Duration)}
                  </td>
                  <td className="col-2">{work.Repetitions}</td>
                  <td className="col-2">{work.Weight}</td>
                  <td className="col-2">
                    {this.displayDurationAndRest(work.Rest)}
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

export default AthleteTrainingSession;
