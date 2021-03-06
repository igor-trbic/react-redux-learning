// What is happening

// simple unique todoId
let nextTodoId = 0;

/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(text, user) {
  return {
      type: ADD_TODO,
      text,
      user,
      id: nextTodoId++
    }
}

export function toggleTodo(index) {
  return {
      type: TOGGLE_TODO,
      index
    }
}

export function setVisibilityFilter(filter) {
  return {
      type: SET_VISIBILITY_FILTER,
      filter
    }
}

export function filterTodos(text) {
  return {
    keyword: text
  }
}