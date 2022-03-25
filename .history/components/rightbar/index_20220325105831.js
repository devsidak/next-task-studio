import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Calendar from "react-calendar";

function Calender() {
  const [value, onChange] = React.useState(new Date());

  return (
    <div>
      <Box p={2}>
        <Calendar onChange={onChange} value={value} />
      </Box>
    </div>
  );
}

export default Calender;
