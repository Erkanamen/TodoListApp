import React from 'react';

//Provider will generate an optimized application combined with redux 
import { Provider } from 'react-redux';
import { render } from 'react-dom';
// Router of react-router can rerender of components in client side
import {Router, Route, IndexRoute, browserHistory } from 'react-router';

import {configureStore} from './store';

import App from './App'; //Navigator - parent
import Intro from './routers/Intro'; //Intro - child for router
import TodoListApp from './routers/TodoListApp'; //TodoListApp - child for router
import Questions from './routers/Questions'; //TodoListAppItemCounter - child for router

import { callApi } from '../client/util/apiCaller';


function uniqueNumber() {
    var date = Date.now();
    
    // If created at same millisecond as previous
    if (date <= uniqueNumber.previous) {
        date = ++uniqueNumber.previous;
    } else {
        uniqueNumber.previous = date;
    }
    
    return date;
};

var uniqueID = uniqueNumber();

const todoListAppInitialState = {
	todoList : {
		itemIndex: uniqueID,
    	todos: []
	},
	filterGroup : {
    	filter: "All"
	}
};

//calling API for initializing todoList
//But this way is not better than http://redux.js.org/docs/recipes/ServerRendering.html
//Please have a look at the page of the link
callApi('todos', 'get', {
        }).then(response => {
            //set initial states to the store
            const store = configureStore({...todoListAppInitialState, todoList : { todos : response }});         
            renderApp(store);
        });

//This code will render router component at the html compoent with id "root"
//Router : main component of react-router / set up attiributes of router
//Route : A component will decide which component will be rendered according to our set path
//IndexRoute : If there is no sub-route, in other words, if the user access to '/' path of specific route, the component assigned by the indexRoute will be shown.
//browserHistory : keeping changes of URL bsed on History API in HTML 5
const renderApp = (store) => {
    render(
        <Provider store={store} >
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                <IndexRoute component={Intro}/>
                <Route path="intro" component={Intro}/>
                <Route path="todolist" component={TodoListApp}/>
                <Route path="questions(/:id)" component={Questions}/>
                </Route>
            </Router>
        </Provider>, 
        document.getElementById('root')
    );
}