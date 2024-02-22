import React from "react";
import "./index.css";
import Dashboard from "../Dashboard/dashboard";
import Discover from "../../pages/Discover";
import Transfers from "../../pages/Transfers";
import Header from "../Header/Header";

import { BrowserRouter as Router,Routes, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
      <div className="app">
        <Header />
        <div className="main-content">
          <Routes>
          <Route path="/discover" element={<Discover />} />
          <Route path="/transfers" element={<Transfers />}/>
          <Route exact path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
  );
};


export default App;
