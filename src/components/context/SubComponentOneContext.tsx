import React from "react";
import { useContextProvider } from "../../context/ContextProvider";

const SubComponentOneContext = () => {
  console.log("SubComponentOneContext is refreshed");
  const { state } = useContextProvider();

  return (
    <div style={{ border: "1px solid", padding: 16, marginBottom: 8 }}>
      <p>Sub component one Context</p>
      <p>
        I also need the title here:
        {state.title}
      </p>
    </div>
  );
};

export default SubComponentOneContext;
