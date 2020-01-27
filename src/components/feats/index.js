import React from "react";
import { Router } from "@reach/router";
import Feats from "./Feats.js";
import NewFeat from "./new.js";
import EditFeat from "./edit.js";

function Index() {
  return (
    <section>
      <h1>Feats</h1>
      <Router>
        <Feats path="/" />
        <NewFeat path="new" />
        <EditFeat path="edit/:featId" />
      </Router>
    </section>
  );
}

export { Index };
