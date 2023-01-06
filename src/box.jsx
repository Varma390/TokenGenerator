import React from "react";

const Box = (props) => {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: `${props.color}`,
          margin: 10,
          height: 100,
          width: 100,
          display: "inline-flex",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {`${props.prefix}${props.num}`}
      </div>
    </>
  );
};

export default Box;
