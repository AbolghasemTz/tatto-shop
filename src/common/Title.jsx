import React from 'react'

function Title({title,className}) {
  return (
    <h3 className={`${className} underline decoration-wavy underline-offset-8 decoration-[#ef4444] category-title  font-semibold md:text-2xl text-base `} >
     {title}
    </h3>
  
  )
}

export default Title