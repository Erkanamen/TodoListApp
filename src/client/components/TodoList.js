import React, {PropTypes} from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, onTodoClick, onRemoveItem}) => {
    return (
        <ul>
        {todos.map(todo => 
            <TodoItem
                key={todo.id}
                {...todo} 
                onClick={() => onTodoClick(todo.id)}
                removeItem={() => onRemoveItem(todo.id)}
            />
        )}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired
}

export default TodoList;