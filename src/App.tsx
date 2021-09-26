import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { Summary } from "./components/Summary";
import CssImport from "./ways/1-css-import/CssImportStyling";
import CssStyleImporting from "./ways/2-css-style-importing/CssStyleImporting";
import StyledComponents from "./ways/3-styled-components/StyledComponents";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="menu">
          <nav>
            <ol>
              <li>
                <Link to="/css-import">CSS Import</Link>
              </li>
              <li>
                <Link to="/css-style-importing">CSS Style Importing</Link>
              </li>
              <li>
                <Link to="/styled-components">Styled Components</Link>
              </li>
            </ol>
          </nav>
        </div>

        <div className="content">
          <Switch>
            <Route path="/" exact={true}>
              <Summary />
            </Route>
            <Route path="/css-import">
              <CssImport />
            </Route>
            <Route path="/css-style-importing">
              <CssStyleImporting />
            </Route>
            <Route path="/styled-components">
              <StyledComponents />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
