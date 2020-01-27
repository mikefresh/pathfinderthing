import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Nav from "./components/nav";
import { Index as Feats } from "./components/feats/index";
import CharacterCreation from "./components/character_creation/index";
import Classes from "./components/classes/classes";

const client = new ApolloClient({
  uri: "https://pathfinderdemo.herokuapp.com/v1/graphql"
});

function Home() {
  return <h2>Hello!</h2>;
}

const App = () => (
  <ApolloProvider client={client}>
    <Nav></Nav>
    <Router>
      <Home path="/" />
      <Feats path="/feats/*" />
      <Classes path="/classes" />
      <CharacterCreation path="/character_creation/*" />
    </Router>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
