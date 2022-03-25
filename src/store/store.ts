import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import todoReducer from './todo.reducer';
import AppState from '../types/app-state';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import { userReducer } from './user';

const rootReducer = combineReducers<AppState>({
    todo: todoReducer,
    user: userReducer
});

const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            sagaMiddleware,
        )
    )
);

sagaMiddleware.run(rootSaga);

export default store;