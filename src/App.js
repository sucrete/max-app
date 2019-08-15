import React from "react";
import "./App.css";
import Navigator from "./components/navigator";
import Header from "./components/header";
import Content from "./components/content";

function App() {
  return (
    <div className="App">
      <div className="maxAppContainer">
        <Navigator />
        <main className="maxMain">
          <Header />
          <Content />
        </main>
      </div>
    </div>
  );
}

export default App;
