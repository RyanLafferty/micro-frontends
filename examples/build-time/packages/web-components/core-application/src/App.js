import React from 'react';
import Vue from 'vue';
import './App.css';

function App() {
  window.Vue = Vue;
  require('child-application');

  return (
    <div className="container">
      <h1 className="contentContainer core">
        Core Application
      </h1>
      <div className="contentContainer">
        <child-application />
      </div>
    </div>
  );
}

export default App;
