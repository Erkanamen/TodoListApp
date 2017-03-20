/**
 * Main store function
 */
import todoAppReducer from './reducers/TodoAppReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//Shen: need to allow asynchronous call 

export function configureStore(initialState = {}) {

	//This is a enhancers for adding thunk funtionality into the middleware. 
	//It enable developers to use asynchronous call instead of dispatching actions to reducers directly.  
    const enhancers = [
    applyMiddleware(thunk),
    ];

	//Createstore function is imported from redux.
	//It takes three arguements - 1) rootReducer 2) initalstates of store 3) enhancers
	//In this simplified version, the todoAppReducer is the rootReducer.
	const store = createStore(todoAppReducer, initialState, compose(...enhancers)); 

    return store;
}

