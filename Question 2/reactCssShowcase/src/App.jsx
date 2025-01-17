import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h2>FLEXBOX</h2>
      {/* Flexbox Section */}
      <div className="flex-container">
        <div className="flex-item">Item 1</div>
        <div className="flex-item">Item 2</div>
        <div className="flex-item">Item 3</div>
        <div className="flex-item">Item 4</div>
      </div>

      <h2>Grid</h2>
      {/* Grid Section */}
      <div className="grid-container">
        <div className="grid-item">Item 1</div>
        <div className="grid-item">Item 2</div>
        <div className="grid-item">Item 3</div>
        <div className="grid-item">Item 4</div>
        <div className="grid-item">Item 5</div>
        <div className="grid-item">Item 6</div>
      </div>
    </div>
  );
};

export default App;
