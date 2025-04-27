"use client";

import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const CustomSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "var(--switch-track)",
  },
  "& .MuiSwitch-switchBase + .MuiSwitch-track": {
    backgroundColor: "var(--switch-track)",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-thumb": {
    backgroundColor: "var(--switch-track)",
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "var(--switch-thumb)",
  },
}));

export default CustomSwitch;
