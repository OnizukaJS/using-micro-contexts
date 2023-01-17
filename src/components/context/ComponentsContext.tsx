import React from "react";
import SubComponentOneContext from "./SubComponentOneContext";
import SubComponentTwoContext from "./SubComponentTwoContext";

const ComponentsContext = () => {
  console.log("ComponentsContext is refreshed");
  return (
    <div style={{ border: "1px solid", padding: 16, marginTop: 8 }}>
      Components Context
      <SubComponentOneContext />
      <SubComponentTwoContext />
    </div>
  );
};

export default ComponentsContext;
