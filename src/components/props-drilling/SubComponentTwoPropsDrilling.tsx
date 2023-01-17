import React from "react";

const SubComponentTwoPropsDrilling = ({
  setTitle,
}: {
  setTitle: (title: string) => void;
}) => {
  console.log("SubComponentTwoPropsDrilling is refreshed");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div style={{ border: "1px solid", padding: 16, marginTop: 8 }}>
      <p>Sub component two Props Drilling</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default SubComponentTwoPropsDrilling;
