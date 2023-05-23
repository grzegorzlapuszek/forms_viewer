import React from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Button, FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import "./../../styles.css";

const ControlPanel = () => {
  const [value, setValue] = React.useState(null);
  const [status, setStatus] = React.useState<string | undefined>("Approved");
  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };
  const [reqAction, setReqAction] = React.useState<string | undefined>(
    "Quality"
  );
  const handleReqActionChange = (event: SelectChangeEvent) => {
    setReqAction(event.target.value as string);
  };

  return (
    <div className="controlPanel">
      <div className="controlPanelFilters">
        <div className="controlPanelElement">
          <TextField
            id="input-search"
            label="Search template"
            variant="outlined"
          />
        </div>
        <div className="controlPanelElement">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
        </div>
        <div className="controlPanelElement">
          <FormControl style={{ minWidth: "250px" }}>
            <InputLabel>Status</InputLabel>
            <Select
              labelId="select-label"
              id="select-status"
              value={status}
              label="Status"
              onChange={handleStatusChange}
            >
              <MenuItem value={"Approved"}>Approved</MenuItem>
              <MenuItem value={"In Progress"}>In Progress</MenuItem>
              <MenuItem value={"Created"}>Created</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="controlPanelElement">
          <FormControl style={{ minWidth: "250px" }}>
            <InputLabel>Required action</InputLabel>
            <Select
              id="select-action"
              value={reqAction}
              label="Required action"
              onChange={handleReqActionChange}
            >
              <MenuItem value={"Quality"}>Quality</MenuItem>
              <MenuItem value={"Operator"}>Operator</MenuItem>
              <MenuItem value={"Other1"}>Other1</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <Button variant="contained">Add form</Button>
      </div>
    </div>
  );
};

export default ControlPanel;
