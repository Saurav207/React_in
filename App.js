import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Title = () => (
  <h1 className="heading" tabIndex="5">
    This is using JSX..
  </h1>
);
const number = 11;

//React Functional Component
const HeadingCom = () => (
  <div className="container">
    {number}
    <h1 className="heading">Hello this is Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCom />);
