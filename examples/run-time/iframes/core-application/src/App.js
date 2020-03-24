import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="contentContainer core">
        Core Application
      </h1>
      <iframe
        className="contentContainer"
        src="http://localhost:3001"
      />
    </div>
  );
}

export default App;
