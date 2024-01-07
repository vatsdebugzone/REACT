import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const MyReactApp = () => {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );
};

const reactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Click Me Google"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <MyReactApp />

  </React.StrictMode>
);
