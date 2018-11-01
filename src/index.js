import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "antd";

import {
  HashRouter as Router,
  Route,
  NavLink as Link,
  Switch,
  withRouter
} from "react-router-dom";
import "./styles.css";
import "antd/dist/antd.css";
function About() {
  return <h2>About</h2>;
}

function Company() {
  return <h2>Company</h2>;
}

function User({ match }) {
  return (
    <div>
      <h2>User: {match.params.user}</h2>
    </div>
  );
}

function NavMenu() {
  return (
    <Menu
      mode="horizontal"
      onClick={e => {
        console.log(e);
      }}
    >
      <Menu.Item key="about">
        <Link to="/about" activeClassName="selected">
          About Us (static)
        </Link>
      </Menu.Item>

      <Menu.Item key="company">
        <Link to="/company" activeClassName="selected">
          Company (static)
        </Link>
      </Menu.Item>

      <Menu.Item key="kim">
        <Link to="/kim" activeClassName="selected">
          Kim (dynamic)
        </Link>
      </Menu.Item>

      <Menu.Item key="chris">
        <Link to="/chris" activeClassName="selected">
          Chris (dynamic)
        </Link>
      </Menu.Item>
    </Menu>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/company" component={Company} />
          <Route path="/:user" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
