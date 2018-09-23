import React from 'react'

const Todo = ({ onClick, completed, text, user }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <strong>{text}</strong> for <strong>{user}</strong>
  </li>
)

export default Todo