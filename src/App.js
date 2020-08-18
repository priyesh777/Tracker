import React from "react";
/* CSS FILES */
import "./index.scss";
import "antd/dist/antd.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
/* ------- */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp1 from "./CompanyProfile/SignUp1";
import SignUp2 from "./CompanyProfile/SignUp2";
import SignUp3 from "./CompanyProfile/SignUp3";
import SignUp4 from "./CompanyProfile/SignUp4";
import Program from "./LaunchProgram/Program";
import Terms from "./LaunchProgram/Terms";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp1} />
          <Route path="/register_step2" component={SignUp2} />
          <Route path="/register_step3" component={SignUp3} />
          <Route path="/register_step4" component={SignUp4} />
          <Route path="/program_details" component={Program} />
          <Route path="/terms" component={Terms} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
