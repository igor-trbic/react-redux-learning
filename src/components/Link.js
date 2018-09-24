import React from 'react'
import { Button } from 'react-bootstrap';

const Link = ({ active, children, onClick }) => {
  // if (active) {
  //   return <span><strong>{children}</strong></span>
  // }

  return (
    <Button bsStyle="primary"
    style={{
      marginRight: 10
    }}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}>
      {children}
    </Button>
    // <a
    //   href=""
    //   onClick={e => {
    //     e.preventDefault()
    //     onClick()
    //   }}
    // >
    //   {children}
    // </a>
  )
}

export default Link