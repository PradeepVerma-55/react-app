import React from "react";
import ReactDOM from "react-dom/client";

// React Element using JSX
const heading = (
  <h1 id="heading" className="head">
    Hello React using JSX !
  </h1>
);

//React Component
// Class based component - old
// Functional component - new

// React Functional Component - just a JS function that returns React Element
// A function returning JSX is called Functional Component
// Component name should start with a capital letter

const HeadingComponent = () => (
  <div id="container">
  <h1 className="heading">Hello React Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
