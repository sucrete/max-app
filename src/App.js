import React from "react";
import "./App.css";
import Navigator from "./components/navigator";
import Header from "./components/header";
import Content from "./components/content";

function App() {
  return (
    <div className="App">
      <Navigator />
      <Header />
      <Content />
      {/* <header className="App-header">
        
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
