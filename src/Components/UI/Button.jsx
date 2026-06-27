import React from 'react'

function Button({children, className, onClick, disabled}) {
  return (
    <button onClick={onClick} disabled={disabled} className={`px-6 py-4 disabled:scale-100 active:scale-95 transition-all duration-300 disabled:hover:scale-100 hover:scale-101 rounded-3xl font-bold ${className}`}>{children}</button>
  )
}

export default Button