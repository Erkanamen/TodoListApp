import { combineReducers, createStore } from 'redux'
import { todoList } from './TodoListReducer'
import { filterGroup } from './FilterGroupReducer'

/*
const todoAppReducer = combineReducers({
  todoList,
  filterGroup
});
*/

function todoAppReducer(state = {}, action) {
  return {
  	todoList: todoList(state.todoList, action),
  	filterGroup: filterGroup(state.filterGroup, action)
  }
};

export default todoAppReducer;
