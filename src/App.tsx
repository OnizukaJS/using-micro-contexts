import React from "react";
import "./App.css";
import AppContext from "./components/context/AppContext";
import AppMicroContexts from "./components/micro-contexts/AppMicroContexts";
import AppPropsDrilling from "./components/props-drilling/AppPropsDrilling";

function App() {
  console.log("App is refreshed");

  return (
    <div className="App">
      {/* <AppPropsDrilling /> */}

      <AppContext />

      {/* <AppMicroContexts /> */}
    </div>
  );
}

export default App;
