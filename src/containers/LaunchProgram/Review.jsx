import React from "react";
// import { Link, useHistory } from "react-router-dom";
import { Input, Radio } from "antd";
import { Card, Table } from "react-bootstrap";
import thumbnail from "../../images/thumbnail.png";

const Review = () => {
  const TableData = [
    { name: "Active", type: "website" },
    { name: "Radio", type: "website" },
    { name: "Radio", type: "other" }
  ];

  return (
    <div className="Review" style={{ marginTop: "20px" }}>
      <Card className="agreement-points" body>
        <p className="terms-list">Name of the program</p>
        <p className="program-name">My Awesome Program</p>
        <p className="terms-list">Tagline</p>
        <p className="details">
          Ea aut est quas. Facilis unde sit nam ut labore et maiores eum.
        </p>
        <p className="terms-list">Icon</p>
        <div className="upload-pic">
          <img src={thumbnail} alt="pro-pic" />
        </div>
        <p className="terms-list">Program Details</p>
        <p className="details">
          Ea aut est quas. Facilis unde sit nam ut labore et maiores eum.
        </p>
      </Card>
      <div className="set-scope-tables">
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
      <Card className="agreement-points" style={{ width: "850px" }} body>
        <p className="terms-list">You agree to the following conditions</p>
        <p className="topics"> Agreement Lorem epsum</p>
        <p className="topics"> Special Terms Agreement </p>
        <p className="topics"> Fire Agreement </p>
        <p className="topics"> Riva Agreement </p>
      </Card>
      <div className="reward-section">
        <p className="instruction-header">Reward Type</p>
        <div className="radio-buttons">
          <Radio className="terms-list">Bounty</Radio>
        </div>
        <div className="reward-table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontFamily: "Karla",
                    fontWeight: "bold",
                    width: "200px"
                  }}
                >
                  Technical Severity
                </th>
                <th
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontFamily: "Karla",
                    fontWeight: "bold",
                    width: "380px"
                  }}
                >
                  Reward Range
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontFamily: "Karla",
                    fontWeight: "bold",
                    justifyContent: "center"
                  }}
                >
                  Critical
                </td>
                <td>
                  <div
                    className="reward-amt"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Input
                      type="number"
                      placeholder="Min"
                      style={{
                        background: "#f3f3f3",
                        border: " 2px solid #c4c4c4",
                        borderRadius: "5px",
                        marginRight: "10px",
                        width: "150px"
                      }}
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      style={{
                        background: "#f3f3f3",
                        border: " 2px solid #c4c4c4",
                        borderRadius: "5px",
                        marginRight: "10px",
                        width: "150px"
                      }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontFamily: "Karla",
                    fontWeight: "bold",
                    justifyContent: "center"
                  }}
                >
                  High
                </td>
                <td>
                  <div
                    className="reward-amt"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Input
                      type="number"
                      placeholder="Min"
                      style={{
                        background: "#f3f3f3",
                        border: " 2px solid #c4c4c4",
                        borderRadius: "5px",
                        marginRight: "10px",
                        width: "150px"
                      }}
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      style={{
                        background: "#f3f3f3",
                        border: " 2px solid #c4c4c4",
                        borderRadius: "5px",
                        marginRight: "10px",
                        width: "150px"
                      }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontFamily: "Karla",
                    fontWeight: "bold",
                    justifyContent: "center"
                  }}
                >
                  Medium
                </td>
                <td>
                  <div
                    className="reward-amt"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Input
                      type="number"
                      placeholder="Min"
                      style={{
                        background: "#f3f3f3",
                        border: " 2px solid #c4c4c4",
                        borderRadius: "5px",
                        marginRight: "10px",
                        width: "150px"
                      }}
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      style={{
                        background: "#f3f3f3",
                        border: " 2px solid #c4c4c4",
                        borderRadius: "5px",
                        marginRight: "10px",
                        width: "150px"
                      }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontFamily: "Karla",
                    fontWeight: "bold",
                    justifyContent: "center"
                  }}
                >
                  Low
                </td>
                <td>
                  <div
                    className="reward-amt"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Input
                      type="number"
                      placeholder="Min"
                      style={{
                        background: "#f3f3f3",
                        border: " 2px solid #c4c4c4",
                        borderRadius: "5px",
                        marginRight: "10px",
                        width: "150px"
                      }}
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      style={{
                        background: "#f3f3f3",
                        border: " 2px solid #c4c4c4",
                        borderRadius: "5px",
                        marginRight: "10px",
                        width: "150px"
                      }}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default Review;
