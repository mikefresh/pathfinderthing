import React from "react";
import { Link } from "@reach/router";

function Nav() {
  return (
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/feats">Feats</Link>
      </li>
    </ul>
  );
}

export default Nav;
