import React, { useState } from "react";
import BackArrow from "../../images/arrow-left.svg";
import { Radio, Input, Button } from "antd";
import { Card, Table } from "react-bootstrap";

const Rewards = props => {
  const [radioState, setRadioState] = useState(true);
  const [tableData, setTableData] = useState([
    {
      severity: "Critical",
      min_amount: "",
      max_amount: ""
    },
    {
      severity: "High",
      min_amount: "",
      max_amount: ""
    },
    {
      severity: "Medium",
      min_amount: "",
      max_amount: ""
    },
    {
      severity: "Low",
      min_amount: "",
      max_amount: ""
    }
  ]);

  const handleRadio = e => {
    setRadioState(e.target.value);
  };

  const handleChange = e => {
    const { name, value, id } = e.target;
    const list = tableData;
    for (var i in list) {
      if (list[i]["severity"] === id) {
        if (name === "max_amount") {
          list[i]["max_amount"] = value;
        } else {
          list[i]["min_amount"] = value;
        }
      }
    }
    props.handleReward(list);
  };
  console.log("radio state ::", tableData);
  return (
    <>
      <div className="Rewards" style={{ marginTop: "20px" }}>
        <div
          className="support-button-section"
          style={{ width: "100%", padding: "0px" }}
        >
          <Button
            className="cps-form-backButton"
            onClick={() => props.handleTab(3)}
          >
            <img src={BackArrow} alt="back-arrow-left" /> Back
          </Button>
        </div>
        <Card style={{ width: "850px" }} body>
          <p className="instruction-header">Reward Type</p>
          <div className="radio-buttons">
            <Radio.Group onChange={handleRadio} value={radioState}>
              <Radio className="radio-option" value={true}>
                Bounty
              </Radio>
              <Radio className="radio-option" value={false}>
                Points
              </Radio>
            </Radio.Group>
          </div>
          {radioState ? (
            <div className="reward-table">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="table-head" style={{ width: "200px" }}>
                      Technical Severity
                    </th>
                    <th className="table-head" style={{ width: "380px" }}>
                      Reward Range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="row-head">Critical</td>
                    <td>
                      <div
                        className="reward-amt"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly"
                        }}
                      >
                        <Input
                          id="Critical"
                          className="input-amount"
                          name="min_amount"
                          type="number"
                          placeholder="Min"
                          onChange={e => handleChange(e)}
                        />
                        <Input
                          id="Critical"
                          className="input-amount"
                          name="max_amount"
                          type="number"
                          placeholder="Max"
                          onChange={e => handleChange(e)}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="row-head">High</td>
                    <td>
                      <div
                        className="reward-amt"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly"
                        }}
                      >
                        <Input
                          id="High"
                          className="input-amount"
                          type="number"
                          name="min_amount"
                          placeholder="Min"
                          onChange={e => handleChange(e)}
                        />
                        <Input
                          id="High"
                          className="input-amount"
                          type="number"
                          name="max_amount"
                          placeholder="Max"
                          onChange={e => handleChange(e)}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="row-head">Medium</td>
                    <td>
                      <div
                        className="reward-amt"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly"
                        }}
                      >
                        <Input
                          id="Medium"
                          className="input-amount"
                          type="number"
                          name="min_amount"
                          placeholder="Min"
                          onChange={e => handleChange(e)}
                        />
                        <Input
                          id="Medium"
                          className="input-amount"
                          type="number"
                          name="max_amount"
                          placeholder="Max"
                          onChange={e => handleChange(e)}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="row-head">Low</td>
                    <td>
                      <div
                        className="reward-amt"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly"
                        }}
                      >
                        <Input
                          id="Low"
                          className="input-amount"
                          type="number"
                          name="min_amount"
                          placeholder="Min"
                          onChange={e => handleChange(e)}
                        />
                        <Input
                          id="Low"
                          className="input-amount"
                          type="number"
                          name="max_amount"
                          placeholder="Max"
                          onChange={e => handleChange(e)}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ) : (
            () => {
              setTableData("");
            }
          )}
        </Card>
        <div
          className="footer-button"
          style={{ width: "100%", float: "right" }}
        >
          <Button
            className="program-continue"
            style={{ float: "right" }}
            onClick={() => props.handleTab(5)}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};
export default Rewards;
