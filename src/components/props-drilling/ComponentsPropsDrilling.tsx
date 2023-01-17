import React from "react";
import SubComponentOnePropsDrilling from "./SubComponentOnePropsDrilling";
import SubComponentTwoPropsDrilling from "./SubComponentTwoPropsDrilling";

const ComponentsPropsDrilling = ({
  title,
  setTitle,
}: {
  title: string;
  setTitle: (title: string) => void;
}) => {
  console.log("ComponentsPropsDrilling is refreshed");

  return (
    <div style={{ border: "1px solid", padding: 16, marginTop: 8 }}>
      Components Prop Drilling
      <SubComponentOnePropsDrilling title={title} />
      <SubComponentTwoPropsDrilling setTitle={setTitle} />
    </div>
  );
};

export default ComponentsPropsDrilling;
