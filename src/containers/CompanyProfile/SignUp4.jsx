import React from "react";
import { Button } from "antd";
import BackArrow from "../../images/arrow-left.svg";
import { Link, useHistory } from "react-router-dom";

const SignUp4 = () => {
  const history = useHistory();

  return (
    <div className="container">
      <div className="add-first-program">
        <div
          className="support-button-section"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "30px"
          }}
        >
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
            <Link to="##" style={{ color: "#AD77C0" }}>
              Contact Support
            </Link>
          </p>
        </div>
        <div
          className="Set-up-account"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "34px",
            marginRight: "34px",
            height: "34px"
          }}
        >
          <p
            style={{
              color: "#000000",
              fontFamily: "Karla",
              fontSize: "16px",
              fontWeight: "bold"
            }}
          >
            Add Your First Program
          </p>

          <p
            style={{
              color: "#000000",
              fontSize: "20px",
              fontWeight: "bold"
            }}
          >
            <a href="###" style={{ color: "#AD77C0" }}>
              4
            </a>
            /4
          </p>
        </div>
        <div
          className="footer-button"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "66px"
          }}
        >
          <Button className="white-button">Do this Later</Button>
          <Button
            className="Purple-button"
            onClick={() => history.push("/program_details")}
          >
            Launch Program
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SignUp4;
