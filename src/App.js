import logo from "./logo.svg";
import "./App.css";
import history from "./utils/history";
import { Login } from "./Containers/Login";
import { Router, Route, Switch } from "react-router-dom";
import { Register } from "./Containers/Register";
import { ForgotPassword } from "./Containers/ForgotPassword";
import { Dashboard } from "./Containers/Dashboard";
import Alerts from "./Alerts";
function App() {
 
  return (
    <>
    <Alerts />
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
