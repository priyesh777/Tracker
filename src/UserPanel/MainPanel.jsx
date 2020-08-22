import React, { useState } from "react";

import { Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";
import UserPanel from "./Dashboard/Main";
import Submissions from "./Submissions";
import Researchers from "./Researchers";
import Rewards from "./Rewards";
import Programs from "./Programs";
import Users from "./Users";
import Settings from "./Settings";
import Support from "./Support";

const MainPanel = () => {
  const [activeMenu, setActiveMenu] = useState("1");

  const handleMenuClick = e => {
    setActiveMenu(e.key);
  };

  return (
    <>
      <div className="container-fluid">
        <Row sm={2} md={2}>
          <Col lg={3}>
            <SideBar
              activeMenu={activeMenu}
              handleMenuClick={handleMenuClick}
            />
          </Col>
          <Col lg={9}>
            {activeMenu === "1" && <UserPanel />}
            {activeMenu === "2" && <Researchers />}
            {activeMenu === "3" && <Submissions />}
            {activeMenu === "4" && <Rewards />}
            {activeMenu === "5" && <Programs />}
            {activeMenu === "6" && <Users />}
            {activeMenu === "7" && <Settings />}
            {activeMenu === "8" && <Support />}
          </Col>
        </Row>
      </div>
    </>
  );
};
export default MainPanel;
