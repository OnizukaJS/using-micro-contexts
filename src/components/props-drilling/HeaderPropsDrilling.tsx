import React from "react";

const HeaderPropsDrillings = ({ title }: { title: string }) => {
  console.log("Header Prop Drilling is refreshed");

  return (
    <div style={{ border: "1px solid", marginBottom: 8 }}>
      Header Props Drilling <p>The name is: {title}</p>
    </div>
  );
};

export default HeaderPropsDrillings;
