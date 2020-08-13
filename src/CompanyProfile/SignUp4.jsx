import React from "react";
import { Button } from "antd";
import BackArrow from "../images/arrow-left.svg";
import { Link, useHistory } from "react-router-dom";

const SignUp3 = () => {
  const history = useHistory();

  return (
    <div
      className="signUp-3-container"
      style={{
        background: "#f6eeee",
        border: "2px solid #F3F3F3",
        boxSizing: "border-box",
        borderRadius: "8px",
        width: "595px",
        height: "265px",
        marginTop: "85px",
        marginLeft: "360px"
      }}
    >
      <div
        className="contact-support-button-sectiom"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "30px"
        }}
      >
        <Button
          style={{
            fontSize: "15px",
            fontFamily: "Karla",
            color: "#1C0025",
            border: "2px solid #F3F3F3",
            borderRadius: "5px"
          }}
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
            3
          </a>
          /4
        </p>
      </div>

      <div
        className="footer-invite-button"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "66px"
        }}
      >
        <Button
          style={{
            marginRight: "24%",
            width: "170px",
            border: "2px solid #AD77C0",
            borderRadius: "5px",
            background: "#FFFFFF",
            color: "#AD77C0",
            fontWeight: "bold"
          }}
        >
          Do this Later
        </Button>
        <Button
          style={{
            width: "170px",
            border: "2px solid #AD77C0",
            borderRadius: "5px",
            background: "#AD77C0",
            color: "#FFFFFF"
          }}
          onClick={() => history.push("/register_step4")}
        >
          Launch Program
        </Button>
      </div>
    </div>
  );
};
export default SignUp3;
