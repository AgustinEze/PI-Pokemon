import {createStore, applyMiddleware} from 'redux';
import actionReducer from './reducer';
import thunk from 'redux-thunk';

const store = createStore(
    actionReducer,
    applyMiddleware(thunk)
);

export default store;