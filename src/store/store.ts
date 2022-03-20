import { createStore, combineReducers } from 'redux';
import todoReducer from './todo.reducer';
import AppState from '../types/app-state';

const rootReducer = combineReducers<AppState>({
    todo: todoReducer,
});

const store = createStore(
    rootReducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store