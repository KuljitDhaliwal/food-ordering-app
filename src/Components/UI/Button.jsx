import React from 'react'

function Button({children, className, onClick, disabled}) {
  return (
    <button onClick={onClick} disabled={disabled} className={`px-6 py-4 disabled:scale-100 active:scale-95 rounded-3xl font-bold ${className}`}>{children}</button>
  )
}

export default Button