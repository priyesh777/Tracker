import React from "react";
import { Button } from "antd";
import { Row, Col } from "react-bootstrap";
import BackArrow from "../../images/arrow-left.svg";
import { Link, useHistory } from "react-router-dom";

const SignUp4 = () => {
  const history = useHistory();

  return (
    <div className="container">
      <Row>
        <Col>
          <div className="add-first-program">
            <div className="support-button-section">
              <Button
                className="cps-form-backButton"
                onClick={() => {
                  history.push("/register_step3");
                }}
              >
                <img src={BackArrow} alt="back-arrow-left" /> Back
              </Button>
              <p>
                Need Help?{" "}
                <Link to="##" className="link-words">
                  Contact Support
                </Link>
              </p>
            </div>
            <div className="set-up-account">
              <p className="header">Add Your First Program</p>

              <p className="header">
                <a href="###" style={{ color: "#AD77C0" }}>
                  4
                </a>
                /4
              </p>
            </div>

            <div className="footer-button">
              <Button
                className="white-button"
                onClick={() => history.push("/main_panel")}
              >
                Do this Later
              </Button>
              <Button
                className="Purple-button"
                onClick={() => history.push("/program_details")}
              >
                Launch Program
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default SignUp4;
