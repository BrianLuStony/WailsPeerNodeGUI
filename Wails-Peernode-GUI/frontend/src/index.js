import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import "./sidebar.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="sidebar-section">
          <div className="sidebar-label">Overview</div>
          <button
            className="sidebar-button"
            onClick={() => {
              /* TODO: make links to correct page  */
            }}
          >
            Dashboard
          </button>
        </div>
        <div className="sidebar-section">
          <div className="sidebar-label">Data Access</div>
          <button
            className="sidebar-button"
            onClick={() => {
              /* trigger file upload */
            }}
          >
            Upload File
          </button>
        </div>
      </div>

      <div className="main-content">
        <header className="app-header">
          <h1>Welcome to Peer App</h1>
          <p>Your go-to app for seamless peer-to-peer interactions.</p>
        </header>
        <main></main>
        <footer>
          <p>Peer App © 2024</p>
        </footer>
      </div>
    </div>
  );
};

render(<App />, document.querySelector("#root"));
