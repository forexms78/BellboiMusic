import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid"; // Grid version 1
import { IconButton } from "@mui/material";

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

  export default WorkoutList;
