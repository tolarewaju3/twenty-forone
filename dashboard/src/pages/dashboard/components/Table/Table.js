import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

// components
import { Button } from "../../../../components/Wrappers";

const states = {
  sent: "success",
  pending: "warning",
  declined: "secondary",
};

export default function TableComponent({ data }) {
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  console.log(keys)
  keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableBody>
        {data.map(({ create_date, done_date, helper, needed_help, zip }) => (
          <TableRow>
            <TableCell>{helper} delivered groceries to {needed_help} in {zip}</TableCell>
            <TableCell>{done_date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
