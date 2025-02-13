import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const user = {
    fistname: "mally",
    lastname: "martinez"
  }
  return <div>
    <h1>{user.fistname}</h1>
    <h1>{user.lastname}</h1>
    </div>
}
//self closing tags
root.render(
  <div>
    <Greeting />
  </div>
);
