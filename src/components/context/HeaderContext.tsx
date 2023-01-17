import React, { useContext } from "react";
import { useContextProvider } from "../../context/ContextProvider";

const HeaderContext = () => {
  console.log("HeaderContext is refreshed");
  const { state } = useContextProvider();

  return (
    <div style={{ border: "1px solid", marginBottom: 8 }}>
      Header Context <p>The name is: {state.title}</p>
    </div>
  );
};

export default HeaderContext;
