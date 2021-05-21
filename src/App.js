import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Containers/Login";
import { BrowserRouter, Route } from "react-router-dom";
import { Register } from "./Containers/Register";
import { ForgotPassword } from "./Containers/ForgotPassword";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/password" component={ForgotPassword} />
      </div>
    </BrowserRouter>
  );
}

export default App;
