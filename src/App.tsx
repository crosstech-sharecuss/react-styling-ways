import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { Summary } from "./components/Summary";
import {
  InlineCssStyling,
  InlineCssStylingReadme,
} from "./ways/1-inline-css/InlineCssStyling";
import {
  CssImportStyling,
  CssImportStylingReadme,
} from "./ways/2-css-import/CssImportStyling";
import {
  CssModuleStyling,
  CssModuleStylingReadme,
} from "./ways/3-css-module/CssModule";
import {
  StyledComponents,
  StyledComponentsReadme,
} from "./ways/5-styled-components/StyledComponents";
import { SassStyling, SassStylingReadme } from "./ways/4-sass/Sass";
import {
  TailwindCssStyling,
  TailwindCssStylingReadme,
} from "./ways/6-tailwind-css/TailwindCss";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="menu">
          <h3 className="menu-title">Styling Ways</h3>
          <nav>
            <ol>
              <li>
                <Link to="/inline-css">Inline CSS</Link>
              </li>
              <li>
                <Link to="/css-import">CSS Import</Link>
              </li>
              <li>
                <Link to="/css-module">CSS Module</Link>
              </li>
              <li>
                <Link to="/sass">SASS</Link>
              </li>
              <li>
                <Link to="/styled-components">Styled Components</Link>
              </li>
              <li>
                <Link to="/tailwind-css">Tailwind CSS</Link>
              </li>
            </ol>
          </nav>
        </div>

        <div className="content">
          <Switch>
            <Route path="/" exact={true}>
              <Summary />
            </Route>
            <Route path="/inline-css">
              <React.Fragment>
                <InlineCssStyling />
                <InlineCssStylingReadme />
              </React.Fragment>
            </Route>
            <Route path="/css-import">
              <React.Fragment>
                <CssImportStyling />
                <CssImportStylingReadme />
              </React.Fragment>
            </Route>
            <Route path="/css-module">
              <React.Fragment>
                <CssModuleStyling />
                <CssModuleStylingReadme />
              </React.Fragment>
            </Route>
            <Route path="/sass">
              <React.Fragment>
                <SassStyling />
                <SassStylingReadme />
              </React.Fragment>
            </Route>
            <Route path="/styled-components">
              <React.Fragment>
                <StyledComponents />
                <StyledComponentsReadme />
              </React.Fragment>
            </Route>
            <Route path="/tailwind-css">
              <React.Fragment>
                <TailwindCssStyling />
                <TailwindCssStylingReadme />
              </React.Fragment>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
