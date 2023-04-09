import { Button } from "@mui/material";
import React, { useState } from "react";


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

  export default WorkoutForm;
