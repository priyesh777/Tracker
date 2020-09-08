import React, { useState } from "react";
import Terms from "./Terms";
import SetScope from "./SetScope";
import { Tab, Tabs, Row, Fade } from "react-bootstrap";
import Rewards from "./Rewards";
import Review from "./Review";
import NameDetails from "./NameDetails";

const Program = () => {
  const [tabKey, setTabKey] = useState(1);

  const handleTab = key => {
    setTabKey(key);
  };

  //------State for "NAME & DETAILS"-----------//
  const [nameData, setNameData] = useState({
    program_name: "",
    tagline: "",
    description: ""
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
  const [rewardData, setRewardData] = useState([
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

  const handleReward = info => {
    setRewardData(info);
    console.log("REWARD DATA::", rewardData);
  };
  //----------------------------------------//

  return (
    <Row>
      <div className="program-container">
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
                rewardData={rewardData}
                handleReward={handleReward}
                handleTab={handleTab}
              />
            </Tab>
            <Tab eventKey={5} title="Review & Submit">
              <Review
                nameData={nameData}
                programLogo={programLogo}
                scopeData={scopeData}
                rewardData={rewardData}
                handleTab={handleTab}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </Row>
  );
};
export default Program;
