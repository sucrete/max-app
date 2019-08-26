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
          <footer id="willandree">
            <span>site developed by </span>
            <a
              id="willLink"
              href="https://www.linkedin.com/in/william-andree/"
              target="_blank"
            >
              William Andrée
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
