import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Login";
import { BrowserRouter, Route } from "react-router-dom";
import { Register } from "./Register";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </BrowserRouter>
  );
}

export default App;
