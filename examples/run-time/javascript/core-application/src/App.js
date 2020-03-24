import React from 'react';
import MicroFrontend from 'components/MicroFrontend';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="contentContainer core">
        Core Application
      </h1>
      <MicroFrontend
        name="Child"
        host="http://localhost:3001/"
      />
    </div>
  );
}

export default App;
