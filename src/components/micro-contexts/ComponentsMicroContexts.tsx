import React from "react";
import SubComponentOneMicroContexts from "./SubComponentOneMicroContexts";
import SubComponentTwoMicroContexts from "./SubComponentTwoMicroContexts";

const ComponentsMicroContexts = () => {
  console.log("ComponentsMicroContexts is refreshed");
  return (
    <div style={{ border: "1px solid", padding: 16, marginTop: 8 }}>
      Components Micro Contexts
      <SubComponentOneMicroContexts />
      <SubComponentTwoMicroContexts />
    </div>
  );
};

export default ComponentsMicroContexts;
