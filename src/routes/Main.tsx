import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../components/TabPanel";
import FinishedForms from "../components/forms/FinishedForms";
import InProgressForms from "../components/forms/InProgressForms";
import CircularProgress from "@mui/material/CircularProgress";
import { useLoaderData } from "react-router-dom";
import "./../styles.css";
import formsApi from "../api/formsApi";
import Form from "../types/types";
import "./../styles.css";

export const loader = async () => {
  const forms = await formsApi.getForms();
  return forms;
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const forms = useLoaderData() as Array<Form>;
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (forms) {
      setLoading(false);
    }
  }, [forms]);

  return loading ? (
    <CircularProgress size={50}></CircularProgress>
  ) : (
    <div>
      <div>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="In Progress" />
          <Tab label="Finished Forms" />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <InProgressForms data={forms}></InProgressForms>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FinishedForms />
      </TabPanel>
    </div>
  );
};

export default App;
