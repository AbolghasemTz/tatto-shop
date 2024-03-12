import React from 'react'

function Title({title,className}) {
  return (
    <h3 className={`${className} underline decoration-clone underline-offset-8 decoration-[#0A9A73] category-title  font-semibold md:text-2xl text-base `} >
     {title}
    </h3>
  
  )
}

export default Title