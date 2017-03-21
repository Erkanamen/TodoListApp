//TodoAppList will have three simple actions
//1) addTodoItem
//2) toggleTodoStatus
//3) setFilter 

//this api will be used for communication with server 
import { callApi } from '../util/apiCaller';

//This function will take the text submitted as argument
//And send out an object expression with the type equal to action name
//and payload equal to text. Note that since it's an object, need to add () 
//outside of {}
export const addTodoItem  = (text) => ({
    type: 'ADD_TODO_ITEM', 
    text 
}); 

//This function has made a request to server to add item into DB
export const addTodoItemRequest = (tableName, id, text) => {
    return (dispatch) => {
        callApi('todos', 'post', {
            todoItem: {
				table : tableName,
                id: id+1,
                text: text,
                completed: false
            }
        }).then(response => {
            console.log(response)
            dispatch(addTodoItem(text))
        })
    }
};

export const toggleTodoStatus = (id) => ({
    type: 'TOGGLE_TODO_STATUS', 
    id
});

export const toggleTodoRequest = (mid) => {
    console.log("Toggle Todo Requested on id " + mid)
    return (dispatch) => {
        callApi( `todos/${mid}`, 'post', {id:mid} )
        .then(dispatch(toggleTodoStatus(mid)))
        .catch( err => console.log(err) )
    }
}

export const removeTodoItem = (id) => ({
    type: 'REMOVE_TODO_ITEM', 
    id
});

export const deleteItemRequest = (mid) => {
    console.log("deleteItemRequest called " + mid);
    return (dispatch) => {
        callApi(`todos/${mid}`, 'delete', {id:mid}).then(
            () => dispatch(removeTodoItem(mid))
        ).catch(
            (err) => console.log("error: " + err)
        )
    }
};

export const setFilter = (filter) => ({
    type: 'SET_FILTER', 
    filter
});
