import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './redux/rootReducer.js';

const store = createStore(rootReducer, {} , applyMiddleware(createLogger(),thunk) );

export default store;