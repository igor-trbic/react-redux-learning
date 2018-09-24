import React from 'react'
import Todo from './Todo'
import { Grid, Row, Col } from 'react-bootstrap';

const TodoList = ({ todos, onTodoClick }) => (
  <Grid fluid>
    <Row className="show-grid">
      <Col mdOffset={1} xs={11} md={11}>
        <ol>
          {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
          ))}
        </ol>
      </Col>
    </Row>
  </Grid>
)

export default TodoList