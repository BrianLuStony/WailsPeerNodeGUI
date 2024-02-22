import React, { useState } from "react";
import "./index.css";
import "./sidebar.css";
import Dashboard from "../Dashboard/dashboard";
import Header from "../Header/Header";
import logo from '../../assets/images/orca.jpg';

const App = () => {
  return (
    <div>
    <Header />
    <div className="app-container">
<div className="sidebar">
          <div className="sidebar-section">
            <div className="sidebar-label-title">
            <img src={logo} alt="OrcaNet Logo" />OrcaNet</div>
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
    </div>
  );
};

export default App;