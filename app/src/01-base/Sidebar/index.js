import React from "react";

export default function Sidebar(props) {
  let { bg, position } = props;
  console.log(position);

  var obj1 = { left: 0 };
  var obj2 = { right: 0 };
  var obj = { background: bg, width: "200px", position: "fixed" };

  var styleobj =
    position === "left" ? { ...obj, ...obj1 } : { ...obj, ...obj2 };

  return (
    <div style={styleobj}>
      <ul>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
      </ul>
    </div>
  );
}

// Sidebar.defaultProps
// Sidebar.propTypes
