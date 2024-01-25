import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import FS from "@isomorphic-git/lightning-fs";
import { clone } from "isomorphic-git";
import http from "isomorphic-git/http/web";

function App() {
  const [count, setCount] = useState(0);

  const fs = new FS("extensions");
  const dir = "/example";
  const loadExtension = async () => {
    await clone({
      fs,
      http,
      dir,
      corsProxy: "https://cors.isomorphic-git.org",
      // url: "https://github.com/artawower/orgnote-atom-one-dark.git",
      url: "https://github.com/artawower/orgnote-atom-one-dark",
      singleBranch: true,
      depth: 1,
    });
  };

  useEffect(() => {
    loadExtension();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
