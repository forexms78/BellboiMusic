import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid"; // Grid version 1

const WorkoutTracker = () => {
  // 운동 내용을 저장할 state
  const [workouts, setWorkouts] = useState([]);

  // 운동을 추가하는 함수
  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  // 운동을 삭제하는 함수
  const deleteWorkout = (index) => {
    const newWorkouts = [...workouts];
    newWorkouts.splice(index, 1);
    setWorkouts(newWorkouts);
  };

  return (
    <div>
      <h1>나의 운동 일지</h1>
      {/* WorkoutForm 컴포넌트 렌더링 */}
      <WorkoutForm addWorkout={addWorkout} />
      {/* WorkoutList 컴포넌트 렌더링 */}
      <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
  );
};

const WorkoutForm = ({ addWorkout }) => {
  // 입력 필드의 값을 저장할 state
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);

  // 폼 제출 처리 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { exercise, weight, reps };
    // 부모 컴포넌트에서 전달된 addWorkout 함수 호출
    addWorkout(newWorkout);
    // 입력 필드 초기화
    setExercise("");
    setWeight(0);
    setReps(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>새로운 운동 추가하기</h2>
      <div>
        <label>운동: </label>
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
      </div>
      <div>
        <label>무게(kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>횟수: </label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
      </div>
      {/* type에 submit을 넣어줘야 텍스트값이 전달 */}
      <Button variant="contained" color="success" type="submit">
        저장
      </Button>
    </form>
  );
};

const WorkoutList = ({ workouts, deleteWorkout }) => {
  return (
    <div>
      <Grid container spacing={2} columns={16}>
        <Grid xs={8}>
          <div>xs=8</div>
        </Grid>
        <Grid xs={8}>
          <div>xs=8</div>
        </Grid>
      </Grid>
      <h2>나의 운동 리스트</h2>
      <List component="nav" aria-label="운동 리스트">
        {/* workouts 배열을 매핑하여 리스트 아이템 렌더링 */}
        {workouts.map((workout, index) => (
          <div key={index}>
            <ListItemButton>
              <ListItemText
                primary={workout.exercise}
                secondary={`${workout.weight}kg, ${workout.reps}회`}
              />
              {/* deleteWorkout 함수 호출 */}
              <IconButton
                onClick={() => deleteWorkout(index)}
                aria-label="삭제"
              >
                <DeleteIcon />
              </IconButton>
            </ListItemButton>
            {/* Add a divider after each item except the last one */}
            {index !== workouts.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </div>
  );
};

export default WorkoutTracker;
