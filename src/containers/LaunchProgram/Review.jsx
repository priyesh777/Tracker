import React from "react";
import BackArrow from "../../images/arrow-left.svg";
import { Input, Radio, Button } from "antd";
import { Card, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { AuthPostApi } from "../../api/callapi";
import { LaunchProgramLink } from "../../api/endpoints";

const Review = props => {
  const handleSubmit = async e => {
    e.preventDefault();
    console.log("clicked handle submit:");

    var form_values = new FormData();

    for (var key in props.nameData) {
      form_values.append(key, props.nameData[key]);
    }
    form_values.append("Appended logo", props.programLogo);

    for (var k in props.scopeData) {
      form_values.append(k, props.scopeData[k]);
    }

    var response = await AuthPostApi(LaunchProgramLink, form_values);
    if (response.status === 201) {
      toast.success("Program Launched");
    } else {
      console.log("error in process::");
    }
  };

  return (
    <>
      <div className="Review" style={{ marginTop: "20px" }}>
        <div
          className="support-button-section"
          style={{ width: "100%", padding: "0px" }}
        >
          <Button
            className="cps-form-backButton"
            onClick={() => props.handleTab(4)}
          >
            <img src={BackArrow} alt="back-arrow-left" /> Back
          </Button>
        </div>
        <Card className="agreement-points" body>
          <p className="terms-list">Name of the program</p>
          <p className="program-name">
            {props.nameData && props.nameData.program_name}
          </p>

          <p className="terms-list">Tagline</p>
          <p className="details">{props.nameData && props.nameData.tagline}</p>

          <p className="terms-list">Icon</p>
          <div className="upload-pic">
            <img
              src={props.programLogo && props.programLogo.name}
              alt="pro-pic"
            />
          </div>
          <p className="terms-list">Program Details</p>
          <p className="details">
            {props.nameData &&
              props.nameData.description.replace(/<[^>]+>/g, "")}
          </p>
        </Card>

        <div className="set-scope-tables">
          <div className="scope-table">
            <p className="scope-table-header">In-Scope</p>
            <Table striped bordered hover className="Table">
              <thead>
                <tr>
                  <th className="table-head" style={{ width: "360px" }}>
                    Target Name
                  </th>
                  <th className="table-head">Target Type</th>
                </tr>
              </thead>
              {props.scopeData &&
                props.scopeData.map(data => (
                  <tbody>
                    {data.scope && (
                      <tr>
                        <td style={{ fontFamily: "Karla" }}>{data.name}</td>
                        <td style={{ fontFamily: "Karla" }}>{data.type}</td>
                      </tr>
                    )}
                  </tbody>
                ))}
            </Table>
          </div>
          <div className="scope-table">
            <p className="scope-table-header">Out-Scope</p>
            <Table className="Table" striped bordered hover>
              <thead>
                <tr>
                  <th className="table-head" style={{ width: "360px" }}>
                    Target Name
                  </th>
                  <th className="table-head">Target Type</th>
                </tr>
              </thead>
              {props.scopeData &&
                props.scopeData.map(data => (
                  <tbody>
                    {!data.scope && (
                      <tr>
                        <td style={{ fontFamily: "Karla" }}>{data.name}</td>
                        <td style={{ fontFamily: "Karla" }}>{data.type}</td>
                      </tr>
                    )}
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
            <Radio className="terms-list" defaultChecked>
              Bounty
            </Radio>
          </div>
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
                {props.rewardData &&
                  props.rewardData.map(each => (
                    <tr>
                      <td className="row-head">{each.severity}</td>
                      <td>
                        <div
                          className="reward-amt"
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly"
                          }}
                        >
                          <Input
                            className="input-amount"
                            type="number"
                            placeholder="Min"
                            value={each.min_amount}
                            disabled
                          />
                          <Input
                            className="input-amount"
                            type="number"
                            placeholder="Max"
                            value={each.max_amount}
                            disabled
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>

        <div
          className="footer-button"
          style={{ width: "100%", float: "right" }}
        >
          <Button
            className="program-continue"
            style={{ float: "right" }}
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </>
  );
};
export default Review;
