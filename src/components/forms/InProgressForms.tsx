import React from "react";
import ControlPanel from "./ControlPanel";
import ReusableTable from "../ReusableTable";
import Form from "../../types/types";
import { Chip, IconButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

interface InProgressFormsProps {
  data: Array<Form>;
}

const InProgressForms = (props: InProgressFormsProps) => {
  const { data } = props;

  const formatStatus = (cellData: string) => {
    if (cellData === "Approved") {
      return <Chip label="Approved" color="success"></Chip>;
    }
    if (cellData === "Created") {
      return <Chip label="Created" color="secondary"></Chip>;
    }
    if (cellData === "In Progress") {
      return <Chip label="In Progress" color="warning"></Chip>;
    }
    return;
  };

  const formatResult = (cellData: string) => {
    if (cellData === "OK") {
      return <DoneIcon color="success" sx={{ fontSize: 30 }}></DoneIcon>;
    }
  };

  const MAX_ACTIONS_IN_ROW = 2;
  const formatRequiredActions = (cellData: string) => {
    if (cellData && cellData.length > 0) {
      const actions = cellData.split(",");
      return (
        <div style={{ display: "flex" }}>
          <div>
            {actions.map((action, idx) => {
              return (
                idx < MAX_ACTIONS_IN_ROW && (
                  <Chip key={idx} label={action}></Chip>
                )
              );
            })}
          </div>
          <div>
            {actions && actions.length > MAX_ACTIONS_IN_ROW && (
              <Chip label={`+${actions.length - MAX_ACTIONS_IN_ROW}`}></Chip>
            )}
          </div>
        </div>
      );
    }
  };

  const columnsDefinition = [
    {
      id: "name",
      label: "Form name",
      style: { width: "15%" },
    },
    {
      id: "referenceId",
      label: "Reference Number",
      style: { width: "10%" },
    },
    {
      id: "created",
      label: "Created",
      style: { width: "10%" },
    },
    {
      id: "deadline",
      label: "Deadline",
      style: { width: "10%" },
    },
    {
      id: "modifiedBy",
      label: "Modified by",
      style: { width: "10%" },
    },
    {
      id: "modificationDate",
      label: "Modification date",
      style: { width: "10%" },
    },
    {
      id: "status",
      label: "Status",
      style: { width: "5%" },
      format: (cellData: string) => formatStatus(cellData),
    },
    {
      id: "result",
      label: "Result",
      style: { width: "5%" },
      format: (cellData: string) => formatResult(cellData),
    },
    {
      id: "requiredAction",
      label: "Required Action",
      style: { width: "15%" },
      format: (cellData: string) => formatRequiredActions(cellData),
    },
  ];

  return (
    <div>
      <ControlPanel />
      <ReusableTable
        data={data}
        columns={columnsDefinition}
        rowActions={[
          (cellData) => (
            <Link to={`details/${cellData.id}`}>
              <IconButton>
                <KeyboardArrowRightIcon />
              </IconButton>
            </Link>
          ),
        ]}
      ></ReusableTable>
    </div>
  );
};

export default InProgressForms;
