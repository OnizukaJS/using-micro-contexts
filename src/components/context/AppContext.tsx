import React from "react";
import ComponentsContext from "./ComponentsContext";
import HeaderContext from "./HeaderContext";
import ContextProvider from "../../context/ContextProvider";

const AppContext = () => {
  console.log("AppContext is refreshed");

  return (
    <>
      <p>App Context</p>

      <ContextProvider>
        <HeaderContext />

        <ComponentsContext />
      </ContextProvider>
    </>
  );
};

export default AppContext;
