import React, { useState } from "react";

import "./App.css";
import data from "./data";

function App() {
  const [tag, setTag] = useState("action");

  const handleTagChange = (e) => {
    const { id } = e.target;
    setTag(id);
  };

  return (
    <div className="App">
      <header>Movie Recommendations</header>
      <main>
        <nav className="tagContainer">
          {Object.keys(data).map((tag) => (
            <div onClick={handleTagChange} className="tag" id={tag} key={tag}>
              {tag}
            </div>
          ))}
        </nav>

        <div>
          {data[tag].map((cur, i) => (
            <div className="movieCard" key={i}>
              <p className="title">{cur.name}</p>
              <p className="description">{cur.description}</p>
              <p className="rating">Rating: {cur.rating}</p>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>
          Created with love by
          <a
            href="https://www.atulgairola.tech/"
            rel="noreferrer"
            target="_blank"
          >
            Atul Gairola
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
