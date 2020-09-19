import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BackArrow from "../../../images/arrow-left.svg";
import thumbnail from "../../../images/pic_upload.png";
import { Button, Card, Input, Popconfirm, message } from "antd";
import { Row, Col, Table } from "react-bootstrap";
import MainPanel from "../MainPanel";
import { GetApi, DeleteApi, PatchApi } from "../../../api/callapi";
import {
  ProgramDetailLink,
  TargetDeleteLink,
  ProgramDetailEdit
} from "../../../api/endpoints";
import { toast } from "react-toastify";
import Editor from "../../components/Editor";

const ProgramDetails = props => {
  const { Meta } = Card;
  const history = useHistory();
  const reportSubmit = localStorage.getItem("user_type");

  const [programDetail, setProgramDetail] = useState({});
  const [editMode, setEditMode] = useState(false);

  const [editedData, setEditedData] = useState({
    tag_line: "",
    description: ""
  });

  const cardId = props.match.params.id;
  const url = ProgramDetailLink + cardId;

  useEffect(() => {
    init();
  }, []);

  const init = async e => {
    const response = await GetApi(url);
    if (response.status === 200) {
      let responseData = response.data;
      setProgramDetail(responseData);
    } else {
      toast.error("Sorry couldn't load Program-details right now");
    }
  };

  const handleSubmitReport = id => {
    history.push(`/main_panel/submission_form/${id}`);
  };

  const handleEditProgram = () => {
    setEditMode(true);
  };

  //Patching the Edited data below ...//
  var EditPatch = new FormData();
  EditPatch.append("EditPatch", editedData);
  //.................................//

  const handleConfirmEdit = async e => {
    const url = ProgramDetailEdit + cardId;
    console.log("Url check :::%%", url);
    const response = await PatchApi(url, EditPatch);
    if (response.status === 200) {
      let responseData = response.data;
      console.log("edited detail response ######::", responseData);
      window.location.reload(true);
    } else {
      // message.error("target-delete failed");
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  const handleTargetDelete = async e => {
    console.log("event from delete:", e);
    const response = await DeleteApi(TargetDeleteLink);
    if (response.status === 200) {
      let responseData = response.data;
      console.log("delete response ::", responseData);
    } else {
      // message.error("target-delete failed");
    }
  };

  const handleEdit = e => {
    const { name, value } = e.target;
    const info = editedData;
    info[name] = value;
    setEditedData(info);
  };

  return (
    <>
      <MainPanel>
        <Row>
          <Col lg={6}>
            <div className="back-button">
              <Button
                className="user-back-button"
                onClick={() => history.push("/main_panel/programs")}
              >
                <img src={BackArrow} alt="back-arrow-left" /> Back
              </Button>
            </div>
            <div className="program-name-card">
              <Card hoverable>
                <div className="title-description">
                  <Meta
                    avatar={
                      <img
                        src={thumbnail}
                        alt="program-thumbnail"
                        style={{ height: "120px" }}
                      />
                    }
                    title={<p className="card-title">{programDetail.name}</p>}
                    description={
                      <>
                        {editMode ? (
                          <Input
                            style={{ width: "90%" }}
                            name="tag_line"
                            className="input-box"
                            type="text"
                            placeholder="Enter Tagline"
                            onChange={e => handleEdit(e)}
                          />
                        ) : (
                          <p>{programDetail.tag_line}</p>
                        )}

                        {reportSubmit && reportSubmit === "Researcher" ? (
                          <Button
                            className="edit-button"
                            onClick={() => handleSubmitReport(cardId)}
                            style={{ width: "130px" }}
                          >
                            Submit Report
                          </Button>
                        ) : (
                          <>
                            {editMode ? (
                              <div style={{ marginTop: "20px" }}>
                                <Button
                                  className="edit-button"
                                  onClick={handleConfirmEdit}
                                  style={{
                                    background: "#ad77c0",
                                    color: "#ffffff"
                                  }}
                                >
                                  Confirm
                                </Button>

                                <Button
                                  className="edit-button"
                                  onClick={handleCancelEdit}
                                  style={{ marginLeft: "20px" }}
                                >
                                  Cancel
                                </Button>
                              </div>
                            ) : (
                              <Button
                                className="edit-button"
                                onClick={handleEditProgram}
                              >
                                Edit Program
                              </Button>
                            )}
                          </>
                        )}
                      </>
                    }
                  />
                </div>
              </Card>
            </div>

            <div className="details-card">
              <div className="program-details-card">
                <Card hoverable>
                  <div className="title-description">
                    <Meta
                      title={<p className="card-title">Program Details</p>}
                      description={
                        <>
                          {editMode ? (
                            <Editor
                              name="description"
                              value={programDetail.description}
                              onChange={e => handleEdit(e)}
                            />
                          ) : (
                            <p>{programDetail.description}</p>
                          )}
                        </>
                      }
                    />
                  </div>
                </Card>
              </div>

              <div className="range-table">
                <p className="table-head">Reward Range</p>
                <Table className="strip-table" striped hover>
                  <thead>
                    <tr>
                      <th className="table-header">Technical Severity</th>
                      <th
                        className="table-header"
                        style={{
                          width: "380px"
                        }}
                      >
                        Reward Range
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {programDetail.program_reward &&
                      programDetail.program_reward.map((each, index) => (
                        <>
                          <tr key={`rewardTable-${index}`}>
                            <td className="table-topic">{each.severity}</td>
                            <td>
                              <div
                                className="reward-amt"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-evenly"
                                }}
                              >
                                <Input
                                  className="reward-input"
                                  type="number"
                                  placeholder="Min"
                                  value={each.min_amount}
                                  disabled
                                />
                                <Input
                                  className="reward-input"
                                  type="number"
                                  placeholder="Max"
                                  value={each.max_amount}
                                  disabled
                                />
                              </div>
                            </td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                </Table>
              </div>

              <div className="range-table">
                <p className="table-head">In-Scope</p>
                <Table className="strip-table" striped hover>
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
                  {programDetail.program_target &&
                    programDetail.program_target.map((data, i) => (
                      <tbody>
                        {data.scope && (
                          <tr key={`inScope-${i}`}>
                            <td style={{ fontFamily: "Karla" }}>{data.name}</td>
                            <td style={{ fontFamily: "Karla" }}>{data.type}</td>
                            {editMode ? (
                              <Popconfirm
                                title="Are you sure delete this task?"
                                onConfirm={e => handleTargetDelete(e)}
                                okText="Yes"
                                cancelText="No"
                              >
                                <Button danger style={{ marginTop: "10px" }}>
                                  Delete
                                </Button>
                              </Popconfirm>
                            ) : null}
                          </tr>
                        )}
                      </tbody>
                    ))}
                </Table>
              </div>

              <div className="range-table">
                <p className="table-head">Out-Scope</p>
                <Table className="strip-table" striped hover>
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
                  {programDetail.program_type &&
                    programDetail.program_type.map((data, i) => (
                      <tbody>
                        {!data.scope && (
                          <tr key={`outScope-${i}`}>
                            <td style={{ fontFamily: "Karla" }}>{data.name}</td>
                            <td style={{ fontFamily: "Karla" }}>{data.type}</td>
                          </tr>
                        )}
                      </tbody>
                    ))}
                </Table>
              </div>

              <div className="program-details-card">
                <Card hoverable>
                  <div className="title-description">
                    <Meta
                      title={<p className="card-title">Program Rules</p>}
                      description={
                        <>
                          <p>
                            ed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                          </p>
                        </>
                      }
                    />
                  </div>
                </Card>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="reward-range">
              <div className="content-header">Reward range vulnerability</div>
              <div className="bounty">
                <Card hoverable>
                  <p className="instruction">Bounty</p>
                  <p className="card-number-data">$25 - $100</p>
                </Card>
              </div>
              <div className="bounty">
                <Card hoverable>
                  <p className="instruction">Points</p>
                  <p className="card-number-data">1 - 200</p>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </MainPanel>
    </>
  );
};
export default ProgramDetails;
