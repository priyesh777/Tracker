import React from "react";
import UserPanel from "./Dashboard/Main";
import Submissions from "./SubmissionTabs/Submissions";
import Researchers from "./Researchers";
import Rewards from "./Rewards";
import Programs from "./ProgramList/Programs";
import ProgramDetails from "./ProgramList/ProgramDetails";
import Users from "./Users";
import Settings from "./Settings";
import Support from "./Support";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SubmissionForm from "./SubmissionTabs/SubmissionForm";

const UserRoute = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/main_panel">
          <Redirect to="/main_panel/main" />
        </Route>
        <Route exact path="/main_panel/main" component={UserPanel} />
        <Route exact path="/main_panel/researchers" component={Researchers} />
        <Route exact path="/main_panel/rewards" component={Rewards} />

        <Route exact path="/main_panel/submissions" component={Submissions} />
        <Route
          exact
          path="/main_panel/submissions_form"
          component={SubmissionForm}
        />

        <Route exact path="/main_panel/programs" component={Programs} />
        <Route
          exact
          path="/main_panel/programs/:id"
          component={ProgramDetails}
        />
        <Route exact path="/main_panel/users" component={Users} />
        <Route exact path="/main_panel/settings" component={Settings} />
        <Route exact path="/main_panel/support" component={Support} />
      </Switch>
    </Router>
  );
};
export default UserRoute;
