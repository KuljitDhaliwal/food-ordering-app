import React from 'react'

function Button({children, className, onClick}) {
  return (
    <button onClick={onClick} className={`px-6 py-4 active:scale-95 cursor-pointer rounded-3xl font-bold ${className}`}>{children}</button>
  )
}

export default Button