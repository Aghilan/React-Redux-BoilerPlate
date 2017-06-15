import { createStore } from 'redux';
import allReducer from './reducers';

export default function(initialState) {
    return createStore(allReducer, initialState);
}
