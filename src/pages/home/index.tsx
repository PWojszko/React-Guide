import React from "react";

import { Link } from "react-router-dom";

import ArticlesNav from "../articles/ArticlesNav";

function Home() {
  return (
    <div className="App">
      <h1>React Guide</h1>
      <h2>
        <Link to={"/articles"}>Go to articles</Link>
      </h2>
    </div>
  );
}

export default Home;
