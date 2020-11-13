import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ProofList from "features/proofs/ProofList";
import ProofEditor from "features/proofs/ProofEditor";

const Home = () => {
  return <p>Home</p>;
};

function App() {
  return (
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
  );
}

export default App;
