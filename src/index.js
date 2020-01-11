import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Classes from "./classes";
import Feats from "./Feats";
const client = new ApolloClient({
  uri: "https://pathfinderdemo.herokuapp.com/v1/graphql"
});

function Home() {
  return <h2>Hello!</h2>;
}

const App = () => (
  <ApolloProvider client={client}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/feats">Feats</Link>
      </li>
    </ul>
    <Router>
      <Home path="/" />
      <Classes path="/classes" />
      <Feats path="/feats" />
    </Router>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
