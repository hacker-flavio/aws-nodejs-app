import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const test = async () => {
    axios
      .get("/test")
      .then(async (response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Typescript
        </a>

        <button onClick={() => test()}>click me : )</button>
        <div>Hi this is flavio herrera</div>
        <div>
          welcome to my shitty app i still dont have ssl, someone please help me
          : (
        </div>
      </header>
    </div>
  );
}

export default App;
