import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Terms from "./Terms";
import SetScope from "./SetScope";
import BackArrow from "../../images/arrow-left.svg";
import { Button } from "antd";
import { Tab, Tabs, Row } from "react-bootstrap";
import Rewards from "./Rewards";
import Review from "./Review";
import NameDetails from "./NameDetails";

const Program = () => {
  const history = useHistory();

  //------State for "NAME & DETAILS"-----------//
  const [nameData, setNameData] = useState({
    program_name: "",
    tagline: "",
    description: ""
  });
  const [programLogo, setProgramLogo] = useState();

  const handleNameDetails = info => {
    setNameData(info);
    console.log("Name details ::", nameData);
  };

  const handleImage = info => {
    setProgramLogo(info);
  };
  //------------------------------------------//

  //--------State for "SET-SCOPE"------//
  const [scopeData, setScopeData] = useState([]);

  const handleScope = info => {
    setScopeData(info);
    console.log("Scope data ::", info);
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
    console.log("reward data ::::", rewardData);
  };
  //----------------------------------------//

  return (
    <Row>
      <div className="program-container">
        <div className="tabs-list">
          <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Name & Details">
              <NameDetails
                nameData={nameData}
                handleNameDetails={handleNameDetails}
                handleImage={handleImage}
              />
            </Tab>
            <Tab eventKey={2} title="Set Scope">
              <SetScope scopeData={scopeData} handleScope={handleScope} />
            </Tab>
            <Tab eventKey={3} title="Terms and Conditions">
              <Terms />
            </Tab>
            <Tab eventKey={4} title="Rewards">
              <Rewards rewardData={rewardData} handleReward={handleReward} />
            </Tab>
            <Tab eventKey={5} title="Review & Submit">
              <Review programLogo={programLogo} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </Row>
  );
};
export default Program;
