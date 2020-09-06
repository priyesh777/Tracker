import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Modal, Radio, Input } from "antd";
import { Table, Button } from "react-bootstrap";

const SetScope = props => {
  const TableData = [
    { name: "Active", type: "website" },
    { name: "Radio", type: "website" },
    { name: "Radio", type: "other" }
  ];

  const [radioState, setRadioState] = useState({ value: 1 });

  const handleRadio = e => {
    setRadioState({ value: e.target.value });
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const handleModal = () => {
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleContinue = () => {
    props.handleTab(3);
  };

  return (
    <>
      <div className="set-scope-tables">
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
          >
            <p className="instruction">Target Type</p>
            <div className="radio-buttons">
              <Radio.Group onChange={handleRadio} value={radioState.value}>
                <Radio className="radio-option" value={1}>
                  In-Scope
                </Radio>
                <Radio className="radio-option" value={2}>
                  Out-of-Scope
                </Radio>
              </Radio.Group>
            </div>
            <div className="input-form" style={{ marginTop: "6%" }}>
              <p
                className="input-instruction"
                style={{ fontFamily: "Karla", fontWeight: "bold" }}
              >
                Write the name of your program
              </p>
              <Input
                className="Form-input"
                type="email"
                placeholder="Eg. vulnerability spot"
              />
              <p
                className="input-instruction"
                style={{ fontFamily: "Karla", fontWeight: "bold" }}
              >
                Add a Tagline
              </p>
              <Input
                className="Form-input"
                type="email"
                placeholder="Eg. Securing out cloud services"
              />
            </div>
          </Modal>
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
      <div className="footer-button" style={{ width: "100%" }}>
        <Button
          className="program-continue"
          onClick={handleContinue}
          style={{ float: "right" }}
        >
          Continue
        </Button>
      </div>
    </>
  );
};
export default SetScope;
