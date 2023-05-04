import React from "react";
import { createRoot } from "react-dom/client";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const Dog = {
  name: "ketch",
  animal: "ksnfiw",
  breed: "oefj",
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "Adopt me!"),
    React.createElement(Pet,Dog),
    React.createElement(Pet,Dog),
    React.createElement(Pet,Dog),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
