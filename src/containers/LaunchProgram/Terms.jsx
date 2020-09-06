import React from "react";
import { Button } from "antd";
import { Card } from "react-bootstrap";

const Terms = props => {
  const handleContinue = () => {
    props.handleTab(4);
  };

  return (
    <>
      <div className="agreement-details" style={{ marginTop: "20px" }}>
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
export default Terms;
