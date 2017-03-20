import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodoRequest, deleteItemRequest} from '../actions/TodoAppActions'

const getTodosByFilter = (todos, filter) => {
    switch (filter) {
        case "All": 
            return todos;
        case "Active": 
            return todos.filter(t => !t.completed);
        case "Completed": 
            return todos.filter(t => t.completed); 
        default: 
            throw new Error('Unknown filter: ' + filter);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemIndex: state.todoList.itemIndex,
        todos: getTodosByFilter(state.todoList.todos, state.filterGroup.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
 return {
        onTodoClick: (id) => {
            dispatch(toggleTodoRequest(id));
        },
        onRemoveItem: (id) => {
            dispatch(deleteItemRequest(id));
        }
    }
}

const TodoListContainer =  connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;