import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Form, FormGroup, Col, Button, ControlLabel, FormControl } from 'react-bootstrap';

let AddTodo = ({ dispatch }) => {
  let input;
  let user;

  return (
    <Form
      style={{
        marginTop: 50
      }}
      horizontal
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value, user.value));
        input.value = '';
        user.value = '';
      }}>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} md={1}>
          Todo
        </Col>
        <Col md={6}>
          <FormControl
            type="text"
            inputRef={(ref) => {input = ref}}
            placeholder="Todo item" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} md={1}>
          User
        </Col>
        <Col md={6}>
          <FormControl
            type="text"
            inputRef={(ref) => {user = ref}}
            placeholder="For user" />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col mdOffset={1} md={6}>
          <Button bsStyle="success" type="submit">Add todo</Button>
        </Col>
      </FormGroup>
    </Form>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo