import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";
import UserPanel from "./Dashboard/Main";
import Submissions from "./SubmissionTabs/Submissions";
import Researchers from "./Researchers";
import Rewards from "./Rewards";
import Programs from "./ProgramList/Programs";
import ProgramDetails from "./ProgramList/ProgramDetails";
import Users from "./Users";
import Settings from "./Settings";
import Support from "./Support";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MainPanel = () => {
  const [activeMenu, setActiveMenu] = useState("1");
  const [openCard, setOpenCard] = useState(false);

  const handleMenuClick = e => {
    setActiveMenu(e.key);
  };

  const handleOpenCard = () => {
    setActiveMenu("0");
    setOpenCard(true);
  };

  const handleCloseCard = () => {
    setOpenCard(false);
    setActiveMenu("5");
  };

  return (
    <>
      <div className="container-fluid">
        <Row sm={2} md={2}>
          <Col lg={3} style={{ padding: "0px" }}>
            <SideBar
              activeMenu={activeMenu}
              handleMenuClick={handleMenuClick}
            />
          </Col>
          <Col lg={9} style={{ background: "#f7f7f7" }}>
            {activeMenu === "1" && <UserPanel />}
            {activeMenu === "2" && <Researchers />}
            {activeMenu === "3" && <Submissions />}
            {activeMenu === "4" && <Rewards />}
            {activeMenu === "5" && (
              <Programs openCard={openCard} handleOpenCard={handleOpenCard} />
            )}
            {activeMenu === "6" && <Users />}
            {activeMenu === "7" && <Settings />}
            {activeMenu === "8" && <Support />}
            {activeMenu === "0" && openCard && (
              <ProgramDetails handleCloseCard={handleCloseCard} />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};
export default MainPanel;
