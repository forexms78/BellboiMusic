import React, { useState } from "react";
import { Button } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import WorkoutList from "./\bcomponent/WorkoutList";

const WorkoutTracker = () => {
  // 다크모드 state 활용
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  // 다크 모드 전환하는 함수
  const toggleDarkMode = () => {
    console.log("내부");
    setIsDarkMode(!isDarkMode);
  };

  // 테마 함수
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#c4302b", // change this to your desired color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {" "}
      <div>
        <h1>나의 운동 일지</h1>
        {/* WorkoutForm 컴포넌트 렌더링 */}
        <WorkoutForm addWorkout={addWorkout} />
        {/* WorkoutList 컴포넌트 렌더링 */}
        <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} />
      </div>
    </ThemeProvider>
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

<WorkoutList/>

export default WorkoutTracker;
