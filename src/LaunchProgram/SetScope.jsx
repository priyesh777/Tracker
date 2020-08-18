import React from "react";
import { Table, Button } from "react-bootstrap";

const SetScope = () => {
  const TableData = [
    { name: "Active", type: "website" },
    { name: "Radio", type: "website" },
    { name: "Radio", type: "other" }
  ];
  return (
    <div className="set-scope-tables">
      <p className="instruction">
        Define targets that are eligible and non-eligible for your program
      </p>
      <div className="add-scope">
        <Button className="Add-new">Add new</Button>
      </div>
      <div className="scope-table">
        <p className="scope-table-header">In-Scope</p>
        <Table striped bordered hover className="Table">
          <thead>
            <tr>
              <th
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontFamily: "Karla",
                  fontWeight: "bold",
                  width: "360px"
                }}
              >
                Target Name
              </th>
              <th
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontFamily: "Karla",
                  fontWeight: "bold"
                }}
              >
                Target Type
              </th>
            </tr>
          </thead>
          {TableData.map(data => (
            <tbody>
              <tr>
                <td style={{ fontFamily: "Karla" }}>{data.name}</td>
                <td style={{ fontFamily: "Karla" }}>{data.type}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
      <div className="scope-table">
        <p className="scope-table-header">Out-Scope</p>
        <Table className="Table" striped bordered hover>
          <thead>
            <tr>
              <th
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontFamily: "Karla",
                  fontWeight: "bold",
                  width: "360px"
                }}
              >
                Target Name
              </th>
              <th
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontFamily: "Karla",
                  fontWeight: "bold"
                }}
              >
                Target Type
              </th>
            </tr>
          </thead>
          {TableData.map(data => (
            <tbody>
              <tr>
                <td style={{ fontFamily: "Karla" }}>{data.name}</td>
                <td style={{ fontFamily: "Karla" }}>{data.type}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};
export default SetScope;
