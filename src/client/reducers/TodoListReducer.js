import React from 'react';
import { callApi } from '../util/apiCaller';

//This class will take the action and decide what to do 
//basically, it handles two actions for TodoList 
// 1) toggleTodoStatus
// 2) addTodoItem 

export const todo = (state, action) => {
    switch (action.type) {
		//Action for addint Item to List
        case 'ADD_TODO_ITEM':
            state.itemIndex ++;
            return {
            	table: 'todoItem',
                id: state.itemIndex,
                text: action.text,
                completed: false
            };

        case 'TOGGLE_TODO_STATUS':
            if(state.id !== action.id){
                return state;
            }

            return {
                ...state, 
                completed:!state.completed
            };

        default:
            return state;
    }
}

export const todoList = (state, action) => {
    switch (action.type) {
		//Add item
        case 'ADD_TODO_ITEM':
            return {
                ...state,
                todos: [...state.todos, todo(state, action)],
            };
		//Check up completion status
        case 'TOGGLE_TODO_STATUS':
            return {
                ...state,
                todos: state.todos.map(t => todo(t, action))
            };
		//Remove item
        case 'REMOVE_TODO_ITEM':
            return {
                ...state,
                todos: state.todos.filter(t => t.id !== action.id)
            };
        default:
            return state;
    }
}
