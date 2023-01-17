import React, { useContext } from "react";
import { MicroContextsAPI } from "../../context/MicroContextsProvider";

const SubComponentTwoMicroContexts = () => {
  console.log("SubComponentTwoMicroContexts is refreshed");

  const useMicroContextsApi = () => useContext(MicroContextsAPI);
  const microContextsApi = useMicroContextsApi();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    microContextsApi(e.target.value);
  };

  return (
    <div style={{ border: "1px solid", padding: 16, marginTop: 8 }}>
      Sub component two Micro Contexts
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default SubComponentTwoMicroContexts;
