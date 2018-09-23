import React from 'react'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span><strong>{children}</strong></span>
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

export default Link