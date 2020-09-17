import React, { useState } from "react";
import Terms from "./Terms";
import SetScope from "./SetScope";
import { Tab, Tabs, Row, Fade } from "react-bootstrap";
import Rewards from "./Rewards";
import Review from "./Review";
import NameDetails from "./NameDetails";
import MainPanel from "../../MainPanel";

const Program = () => {
  const [tabKey, setTabKey] = useState(1);

  const handleTab = key => {
    setTabKey(key);
  };

  //------State for "NAME & DETAILS"-----------//
  const [nameData, setNameData] = useState({
    name: "",
    tag_line: "",
    description: "",
    accept_tc: true
  });

  const [programLogo, setProgramLogo] = useState();

  const handleNameDetails = info => {
    setNameData(info);
  };

  const handleImage = info => {
    setProgramLogo(info);
  };
  //------------------------------------------//

  //--------State for "SET-SCOPE"------//
  const [scopeData, setScopeData] = useState([]);

  const handleScope = info => {
    setScopeData(info);
  };
  //----------------------------------------//

  //--------State for "REWARDS"------//
  const [rewardData, setRewardData] = useState([]);
  const [points, setPoints] = useState();

  const handleReward = info => {
    setRewardData(info);
    console.log("REWARD DATA::", rewardData);
  };

  const handlePoint = info => {
    setPoints(info);
  };
  //----------------------------------------//

  return (
    <MainPanel>
      <Row>
        <div
          className="program-container"
          style={{ marginLeft: "5%", border: "0px" }}
        >
          <div className="tabs-list">
            <Tabs
              activeKey={tabKey}
              onSelect={e => setTabKey(e)}
              transition={Fade}
            >
              <Tab eventKey={1} title="Name & Details">
                <NameDetails
                  nameData={nameData}
                  handleNameDetails={handleNameDetails}
                  handleImage={handleImage}
                  handleTab={handleTab}
                />
              </Tab>
              <Tab eventKey={2} title="Set Scope">
                <SetScope
                  scopeData={scopeData}
                  handleScope={handleScope}
                  handleTab={handleTab}
                />
              </Tab>
              <Tab eventKey={3} title="Terms and Conditions">
                <Terms handleTab={handleTab} />
              </Tab>
              <Tab eventKey={4} title="Rewards">
                <Rewards
                  handleReward={handleReward}
                  handleTab={handleTab}
                  handlePoint={handlePoint}
                />
              </Tab>
              <Tab eventKey={5} title="Review & Submit">
                <Review
                  nameData={nameData}
                  programLogo={programLogo}
                  scopeData={scopeData}
                  rewardData={rewardData}
                  points={points}
                  handleTab={handleTab}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </Row>
    </MainPanel>
  );
};
export default Program;
