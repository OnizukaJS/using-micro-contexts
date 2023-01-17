import React from "react";
import ComponentsMicroContexts from "./ComponentsMicroContexts";
import HeaderMicroContexts from "./HeaderMicroContexts";
import MicroContextsProvider from "../../context/MicroContextsProvider";

const AppMicroContexts = () => {
  console.log("AppMicroContexts is refreshed");

  return (
    <>
      <p>App Micro Contexts</p>

      <MicroContextsProvider>
        <HeaderMicroContexts />

        <ComponentsMicroContexts />
      </MicroContextsProvider>
    </>
  );
};

export default AppMicroContexts;
