import React from "react";
import { Card } from "react-bootstrap";
import BackArrow from "../../images/arrow-left.svg";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
const Terms = props => {
  const history = useHistory();

  return (
    <>
      <div className="agreement-details" style={{ marginTop: "20px" }}>
        <div
          className="support-button-section"
          style={{ width: "100%", padding: "0px" }}
        >
          <Button
            className="cps-form-backButton"
            onClick={() => {
              history.push("/register_step4");
            }}
          >
            <img src={BackArrow} alt="back-arrow-left" /> Back
          </Button>
        </div>
        <Card style={{ width: "850px" }} body>
          <p className="terms-list">Agreement Lorem Epsum</p>
          <p>
            Ea aut est quas. Facilis unde sit nam ut labore et maiores eum.
            Dolorem quisquam atque laboriosam nemo accusantium. Deleniti et
            consequuntur qui qui tempore aut. Dolorem labore provident rem.
          </p>
          <p className="terms-list">Special terms Agreement</p>
          <p>
            Ea aut est quas. Facilis unde sit nam ut labore et maiores eum.
            Dolorem quisquam atque laboriosam nemo accusantium. Deleniti et
            consequuntur qui qui tempore aut. Dolorem labore provident rem.
          </p>
          <p className="terms-list">Fire Free Agreement</p>
          <p>
            Ea aut est quas. Facilis unde sit nam ut labore et maiores eum.
            Dolorem quisquam atque laboriosam nemo accusantium. Deleniti et
            consequuntur qui qui tempore aut. Dolorem labore provident rem.
          </p>
          <p className="terms-list">Riva Agreement</p>
          <p>
            Ea aut est quas. Facilis unde sit nam ut labore et maiores eum.
            Dolorem quisquam atque laboriosam nemo accusantium. Deleniti et
            consequuntur qui qui tempore aut. Dolorem labore provident rem.
          </p>
        </Card>
        <p className="instruction">
          By contuining, you agree to our terms and conditions above.
        </p>
        <div
          className="footer-button"
          style={{ width: "100%", float: "right" }}
        >
          <Button
            className="program-continue"
            style={{ float: "right" }}
            onClick={() => history.push("###")}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};
export default Terms;
