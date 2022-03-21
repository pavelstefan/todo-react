import ITodo from '../types/Todo';
import Action from '../types/redux-action';
import { TODO_TYPES } from './todo.actions';

export interface ITodoReducer {
    items: ITodo[];
}

const initialState: ITodoReducer = {
    items: []
}

const todoReducer = (state = initialState, action: Action<unknown>): ITodoReducer => {
    switch (action.type) {
        case TODO_TYPES.SET: {
            const items = action.payload as ITodo[];
            return {
                items
            }
        }
        default: {
            return state;
        }
    }
};

export default todoReducer;