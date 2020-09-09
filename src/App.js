import React from "react";
/* CSS FILES */
import "./index.scss";
import "antd/dist/antd.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* ------- */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SignUp1 from "./containers/CompanyProfile/SignUp1";
import SignUp2 from "./containers/CompanyProfile/SignUp2";
import SignUp3 from "./containers/CompanyProfile/SignUp3";
import SignUp4 from "./containers/CompanyProfile/SignUp4";
import Program from "./containers/LaunchProgram/Program";
import Terms from "./containers/LaunchProgram/Terms";
import UserRoute from "./containers/UserPanel/index";
import UserLogin from "./containers/User_Profile/UserLogin";
import UserRegister from "./containers/User_Profile/UserRegister";
import Programs from "./containers/UserPanel/ProgramList/Programs";
import NameDetails from "./containers/LaunchProgram/NameDetails";
import SetScope from "./containers/LaunchProgram/SetScope";
import Rewards from "./containers/UserPanel/Rewards";
import Review from "./containers/LaunchProgram/Review";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp1} />
          <Route path="/register_step2" component={SignUp2} />
          <PrivateRoute path="/register_step3" component={SignUp3} />
          <Route path="/register_step4" component={SignUp4} />

          <Route path="/program_details" component={Program} />
          <Route path="/program_details/name_details" component={NameDetails} />
          <Route path="/program_details/set_scope" component={SetScope} />
          <Route path="/program_details/terms" component={Terms} />
          <Route path="/program_details/rewards" component={Rewards} />
          <Route path="/program_details/review" component={Review} />

          <Route path="/all_program" component={Programs} />
          <Route path="/terms" component={Terms} />

          <Route path="/main_panel" component={UserRoute} />

          <Route path="/user_login" component={UserLogin} />
          <Route path="/user_register" component={UserRegister} />
        </Switch>
      </Router>
    </>
  );
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() ? (
          <>
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
export const isLogin = () => {
  if (localStorage.getItem("token") != null) {
    return true;
  } else {
    return false;
  }
};

export default App;
