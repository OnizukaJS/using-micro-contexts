import React, { useContext } from "react";
import { MicroContextsData } from "../../context/MicroContextsProvider";

const HeaderMicroContexts = () => {
  console.log("HeaderMicroContexts is refreshed");
  const useMicroContextsData = () => useContext(MicroContextsData);
  const title = useMicroContextsData();

  return (
    <div style={{ border: "1px solid", marginBottom: 8 }}>
      Header Micro Contexts <p>The name is: {title}</p>
    </div>
  );
};

export default HeaderMicroContexts;
