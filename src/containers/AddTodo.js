import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input;
  let user;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value, user.value));
          input.value = '';
          user.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
          placeholder = "Todo item"
        />
        <input
          ref={node => {
            user = node;
          }}
          placeholder = "For user"
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo