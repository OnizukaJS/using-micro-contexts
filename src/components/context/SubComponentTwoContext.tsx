import React from "react";
import { useContextProvider } from "../../context/ContextProvider";

const SubComponentTwoContext = () => {
  console.log("SubComponentTwoContext is refreshed");
  const { onTitleChange } = useContextProvider();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTitleChange(e.target.value);
  };

  return (
    <div style={{ border: "1px solid", padding: 16, marginTop: 8 }}>
      Sub component two Context
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default SubComponentTwoContext;
