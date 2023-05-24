import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import Form from "../types/types";

interface ReusableTableProps {
  data: Array<Form>;
  columns: Array<any>;
  rowActions?: Array<any> | undefined;
}

const ReusableTable = (props: ReusableTableProps) => {
  const { data, columns, rowActions } = props;

  const getCellData = (row, id) => {
    if (row[id]) {
      return row[id];
    }
    return null;
  };

  const headerStyling = {
    fontWeight: "bold",
    backgroundColor: "lightgray",
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.id}
                style={{ ...col.style, ...headerStyling }}
              >
                {col.label}
              </TableCell>
            ))}
            {rowActions && (
              <TableCell style={{ width: "5%", ...headerStyling }}></TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {columns.map((col) => {
                const { format } = col;
                const cellData = getCellData(row, col.id);
                const formattedData = format ? format(cellData, row) : cellData;
                return <TableCell key={col.id}>{formattedData}</TableCell>;
              })}
              {rowActions && (
                <TableCell>
                  <div>
                    {rowActions.map((action, idx) => (
                      <div key={`actions_${idx}`}>{action(row)}</div>
                    ))}
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ReusableTable;
