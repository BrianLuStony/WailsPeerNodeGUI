import React, { useState } from "react";
import { render } from "react-dom";
import "./styles/index.css";
import "./styles/sidebar.css";
import Dashboard from "./components/dashboard";

const App = () => {
  return (
    <div className="app-container">
<div className="sidebar">
          <div className="sidebar-section">
            <div className="sidebar-label-title">OrcaNet</div>

          <div className="sidebar-section">
            <div className="sidebar-labels">Overview</div>
            <button
                className="sidebar-button"
                onClick={() => {
                }}  //Todo: make links
              >
                Dashboard
              </button>  
          </div>
          <div className="sidebar-section">
            <div className="sidebar-labels">Data Access</div>
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
      </div>

      <Dashboard />
    </div>
  );
};

render(<App />, document.querySelector("#root"));
