import React from "react";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <>
      <h1>
        <Link to="/">hmalone</Link>
      </h1>
      <div>
        <h2>Things I'm Learning This Year</h2>
        <h3>
          <a href="">Go</a>
        </h3>
        <p>Learning Go.</p>
        <h3>
          <a href="">TypeScript</a>
        </h3>
        <p>Learning TypeScript.</p>
        <h3>
          <a href="">GraphQL</a>
        </h3>
        <p>Learning GraphQL.</p>
        <h3>
          <a href="">Golf</a>
        </h3>
        <p>Learnig golf.</p>
        <h3>
          <a href="">
            Weights
          </a>
        </h3>
        <p></p>
      </div>
    </>
  );
}
