import { combineReducers, createStore } from 'redux'
import { todoList } from './TodoListReducer'
import { filterGroup } from './FilterGroupReducer'

const todoAppReducer = combineReducers({
  todoList,
  filterGroup
});

export default todoAppReducer;
