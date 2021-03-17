import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import caughtReducer from './cards';
import cardsReducer from './cards';

export const rootReducer = combineReducers({
    caught: caughtReducer,
    cards: cardsReducer
})

const store = createStore(rootReducer);
export default store;
