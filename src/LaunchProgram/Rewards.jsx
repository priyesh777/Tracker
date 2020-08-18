import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
import { Radio, Input } from "antd";
import { Card, Table } from "react-bootstrap";

const Rewards = () => {
  const [radioState, setRadioState] = useState({ value: 1 });

  const handleRadio = e => {
    setRadioState({ value: e.target.value });
  };

  return (
    <div className="Rewards" style={{ marginTop: "20px" }}>
      <Card style={{ width: "850px" }} body>
        <p className="instruction-header">Reward Type</p>
        <div className="radio-buttons">
          <Radio.Group onChange={handleRadio} value={radioState.value}>
            <Radio className="radio-option" value={1}>
              Bounty
            </Radio>
            <Radio className="radio-option" value={2}>
              Points
            </Radio>
          </Radio.Group>
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
                    width: "200px",
                    fontSize: "18px"
                  }}
                >
                  Technical Severity
                </th>
                <th
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontFamily: "Karla",
                    fontWeight: "bold",
                    width: "380px",
                    fontSize: "18px"
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
      </Card>
    </div>
  );
};
export default Rewards;
