import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Students from "./components/Students/Students";
import Teachers from "./components/Teachers/Teachers";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/students" component={Students} />
            <Route path="/teachers" component={Teachers} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
