import React from "react";

function Title({ title, className }) {
  return (
    <h3
      className={`${className} underline decoration-clone underline-offset-8 decoration-[#16579D] category-title text-white  font-semibold md:text-2xl text-base `}
    >
      {title}
    </h3>
  );
}

export default Title;
