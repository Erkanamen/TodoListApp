import React, {Component} from 'react';;
import AddTodoBar from '../containers/AddTodoBarContainer';
import TodoListContainer from '../containers/TodoListContainer';
import FilterLinkContainer from '../containers/FilterLinkContainer';

class TodoListApp extends Component {
    render() {
        return (
            <div> 
                <AddTodoBar />
                <TodoListContainer />
                <FilterLinkContainer />
            </div>
        );
    }
}

export default TodoListApp;