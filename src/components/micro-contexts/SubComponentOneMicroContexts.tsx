import React, { useContext } from "react";
import { MicroContextsData } from "../../context/MicroContextsProvider";

const SubComponentOneMicroContexts = () => {
  console.log("SubComponentOneMicroContexts is refreshed");
  const useMicroContextsData = () => useContext(MicroContextsData);
  const title = useMicroContextsData();

  return (
    <div style={{ border: "1px solid", padding: 16, marginBottom: 8 }}>
      <p>Sub component one Micro Contexts</p>
      <p>
        I also need the title here:
        {title}
      </p>
    </div>
  );
};

export default SubComponentOneMicroContexts;
