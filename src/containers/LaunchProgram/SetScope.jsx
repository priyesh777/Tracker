import React, { useState } from "react";
import { Modal, Radio, Input } from "antd";
import { Table, Button } from "react-bootstrap";
import BackArrow from "../../images/arrow-left.svg";

const SetScope = props => {
  const [tempTarget, setTempTarget] = useState({});
  const [targetList, setTargetList] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const handleModal = () => {
    targetList.push(tempTarget);
    setTargetList(targetList);
    props.handleScope(targetList);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setTempTarget({ ...tempTarget, [name]: value });
  };

  return (
    <>
      <div className="set-scope-tables">
        <div
          className="support-button-section"
          style={{ width: "100%", padding: "0px" }}
        >
          <Button
            className="cps-form-backButton"
            onClick={() => props.handleTab(1)}
            style={{ background: "#ffffff" }}
          >
            <img src={BackArrow} alt="back-arrow-left" /> Back
          </Button>
        </div>
        <p className="instruction">
          Define targets that are eligible and non-eligible for your program
        </p>
        <div className="add-scope">
          <Button className="Add-new" onClick={openModal}>
            Add new
          </Button>

          <Modal
            title="Adding Target"
            visible={showModal}
            onOk={handleModal}
            onCancel={closeModal}
            destroyOnClose={true}
          >
            <p className="instruction">Target Type</p>
            <div className="radio-buttons">
              <Radio.Group name="scope" onChange={e => handleChange(e)}>
                <Radio className="radio-option" value={true}>
                  In-Scope
                </Radio>
                <Radio className="radio-option" value={false}>
                  Out-of-Scope
                </Radio>
              </Radio.Group>
            </div>
            <div className="input-form" style={{ marginTop: "6%" }}>
              <p
                className="input-instruction"
                style={{ fontFamily: "Karla", fontWeight: "bold" }}
              >
                Target Name
              </p>
              <Input
                className="Form-input"
                name="name"
                type="text"
                placeholder="Eg. vulnerability spot"
                onChange={e => handleChange(e)}
              />
              <p
                className="input-instruction"
                style={{
                  fontFamily: "Karla",
                  fontWeight: "bold",
                  marginTop: "2%"
                }}
              >
                Target Type
              </p>
              <Input
                className="Form-input"
                name="type"
                type="text"
                placeholder="Eg. Securing out cloud services"
                onChange={e => handleChange(e)}
              />
            </div>
          </Modal>
        </div>

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
            {targetList.map(data => (
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
            {targetList.map(data => (
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
        <div
          className="footer-button"
          style={{ width: "100%", float: "right" }}
        >
          <Button
            className="program-continue"
            style={{ float: "right" }}
            onClick={() => props.handleTab(3)}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};
export default SetScope;
