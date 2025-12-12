import React from "react";
import ReactDOM from "react-dom/client";

// React Element using JSX
const Title = () => (
  <h1 id="heading" className="head">
      Title Component !
  </h1>
);


const reactElementTitle = (
  <h1 id="heading" className="head">
      Title using react Element !
  </h1>
);

//React Component
// Class based component - old
// Functional component - new

// React Functional Component - just a JS function that returns React Element
// A function returning JSX is called Functional Component
// Component name should start with a capital letter
//Component composition - using a component inside another component

const number = 10;

const HeadingComponent = () => (
  <div id="container">
    <Title />  
    {
     console.log("Inside HeadingComponent")
    } 
    {reactElementTitle}
  <h1 className="heading">Hello React Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
