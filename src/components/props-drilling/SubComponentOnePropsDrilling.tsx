import React from "react";

const SubComponentOnePropsDrilling = ({ title }: { title: string }) => {
  console.log("SubComponentOnePropsDrilling is refreshed");

  return (
    <div style={{ border: "1px solid", padding: 16, marginBottom: 8 }}>
      <p>Sub component one Props Drilling</p>
      <p>
        I also need the title here:
        {title}
      </p>
    </div>
  );
};

export default SubComponentOnePropsDrilling;
