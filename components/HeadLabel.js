import React from "react";

export default ({ children, style = {}, ...props }) => (
  <h2 style={{ verticalAlign: "center" }}>
    {children}
  </h2>
);