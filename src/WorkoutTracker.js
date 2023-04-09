import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WorkoutList from "./\bcomponent/WorkoutList";
import WorkoutForm from "./\bcomponent/WorkoutForm";

<WorkoutForm/>

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

<WorkoutList/>



export default WorkoutTracker;
