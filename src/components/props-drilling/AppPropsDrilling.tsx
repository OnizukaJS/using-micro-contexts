import React, { useState } from "react";
import ComponentsPropsDrilling from "./ComponentsPropsDrilling";
import HeaderPropsDrillings from "./HeaderPropsDrilling";

const AppPropsDrilling = () => {
  console.log("AppPropsDrilling is refreshed");
  const [title, setTitle] = useState<string>("");

  return (
    <>
      <p>App Props Drilling</p>
      <HeaderPropsDrillings title={title} />
      <ComponentsPropsDrilling title={title} setTitle={setTitle} />
    </>
  );
};

export default AppPropsDrilling;
