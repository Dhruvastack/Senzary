import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Login";
import { BrowserRouter, Route } from "react-router-dom";
import { Register } from "./Register";
import { ForgotPassword } from "./ForgotPassword";
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
