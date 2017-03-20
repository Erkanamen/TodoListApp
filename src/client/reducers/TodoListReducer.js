import React from 'react';

//This class will take the action and decide what to do 
//basically, it handles two actions for TodoList 
// 1) toggleTodoStatus
// 2) addTodoItem 

export const todo = (state, action) => {
    switch (action.type) {
		//Action for addint Item to List
        case 'ADD_TODO_ITEM':
            state.itemIndex ++;
            //console.log("id getting added: " + state.itemIndex) 
            return {
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

//Temporary initial satates
//This variable is similar with the temporary array of todoList in tutorial 5
const todoListInitialState = {
    itemIndex: 0,
    todos: []
};

export const todoList = (state = todoListInitialState, action) => {
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
