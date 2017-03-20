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


//window indicates the current page of browser
const preloadedState = window.__PRELOADED_STATE__;


const store = configureStore(preloadedState);

//This code will render router component at the html compoent with id "root"
//Router : main component of react-router / set up attiributes of router
//Route : A component will decide which component will be rendered according to our set path
//IndexRoute : If there is no sub-route, in other words, if the user access to '/' path of specific route, the component assigned by the indexRoute will be shown.
//browserHistory : keeping changes of URL bsed on History API in HTML 5
render(
    <Provider store={store} >
        <Router history={browserHistory}>
        	<Route path="/" component={App}>
		      <IndexRoute component={Intro}/>
		      <Route path="intro" component={Intro}/>
		      <Route path="todolist" component={TodoListApp}/>
		      <Route path="questions/:id" component={Questions}/>
		    </Route>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
