import React from "react";
/* CSS FILES */
import "./index.scss";
import "antd/dist/antd.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
/* ------- */
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SignUp1 from "./containers/CompanyProfile/SignUp1";
import SignUp2 from "./containers/CompanyProfile/SignUp2";
import SignUp3 from "./containers/CompanyProfile/SignUp3";
import SignUp4 from "./containers/CompanyProfile/SignUp4";
import Program from "./containers/LaunchProgram/Program";
import Terms from "./containers/LaunchProgram/Terms";
import MainPanel from "./containers/UserPanel/MainPanel";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp1} />
          <Route path="/register_step2" component={SignUp2} />
          <PrivateRoute path="/register_step3" component={SignUp3} />
          <Route path="/register_step4" component={SignUp4} />
          <Route path="/program_details" component={Program} />
          <Route path="/terms" component={Terms} />
          <Route path="/main_panel" component={MainPanel} />
        </Switch>
      </Router>
    </>
  );
};
export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
      <Route {...rest} render={props => (
          isLogin() ? <>
              <Component {...props} />
          </>

              : <Redirect to="/login" />
      )} />
  );
}
export const isLogin = () => {
  if (localStorage.getItem('token') != null) {
      return true
  } else {
      return false
  }
}

export default App;
