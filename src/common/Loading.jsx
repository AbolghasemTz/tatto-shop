import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loading() {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#1B6DC4"

      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alingItems: "center"
      }}
      wrapperClassName=""
      visible={true}
    />
  );
}

export default Loading;