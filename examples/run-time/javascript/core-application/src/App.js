import React from 'react';
import MicroFrontend from 'components/MicroFrontend';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="contentContainer core">
        Core Application
      </h1>
      <div className="contentContainer">
        <MicroFrontend
          name="child-app"
          host="http://localhost:3001/"
        />
      </div>
    </div>
  );
}

export default App;
