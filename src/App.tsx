import CssBaseline from "@material-ui/core/CssBaseline";
import ProofEditor from "features/proofs/ProofEditor";
import ProofList from "features/proofs/ProofList";
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <ProofList />
          </Route>
          <Route exact path="/proof/:proofId">
            <ProofEditor />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
