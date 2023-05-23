import React from "react";
import "./../styles.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      id={`tabpanel-${index}`}
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && <div className="tabContainer">{children}</div>}
    </div>
  );
};

export default TabPanel;
