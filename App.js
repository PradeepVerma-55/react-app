import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
                    "h1", 
                    { id: "heading" },
                     "Hello World from React"
                    );
  //JXS - HTML like syntax     
  // JXS (transpiled before it reaches to the React/JS Engine)  --> React.createElement()          
  // Babel is used to transpile the JSX code to React.createElement() code
  // Parcel Bundler comes with Babel pre-configured
  // Parcel is used to bundle the code and its dependencies into a single file for the browser to understand
  // Parcel also comes with a development server that hot reloads the code on changes
const jsxHeading = <h1 id='heading'>Hello React using JSX</h1>                   


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

