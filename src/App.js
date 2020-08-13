import React from "react";
import "antd/dist/antd.css";
//components
// import AdminPanel from "./Dashboard/AdminPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp1 from "./CompanyProfile/SignUp1";
import SignUp2 from "./CompanyProfile/SignUp2";
import SignUp3 from "./CompanyProfile/SignUp3";
import SignUp4 from "./CompanyProfile/SignUp4";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp1} />
          <Route path="/register_step2" component={SignUp2} />
          <Route path="/register_step3" component={SignUp3} />
          <Route path="/register_step4" component={SignUp4} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
