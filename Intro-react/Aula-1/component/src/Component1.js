import React from "react";

function Component1(props) {
  return (
    <div>
      Component1
      <div>{props.children}</div>
    </div>
  );
}

export default Component1;
