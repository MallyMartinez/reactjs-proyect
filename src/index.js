import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const married = true;
  return <h1>{married ? "estoy casado" : "no estoy casado"}</h1>;
}
//self closing tags
root.render(
  <div>
    <Greeting />
  </div>
);
