import ITodo, { TODO_STATUS } from '../types/Todo';
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
        case TODO_TYPES.ADD: {
            const itemToAdd = action.payload as ITodo;
            return {
                items: [...state.items, itemToAdd],
            }
        }
        case TODO_TYPES.UPDATE: {
            const { id, status } = action.payload as { id: string; status: TODO_STATUS }
            return {
                items: state.items.map((item) => {
                    if (item.id !== id) {
                        return item;
                    }
                    return {
                        ...item,
                        status
                    }
                })
            }
        }
        default: {
            return state;
        }
    }
};

export default todoReducer;