import ITodo, { TODO_STATUS } from "../types/Todo";
import Action from "../types/redux-action";

export enum TODO_TYPES {
    ADD = 'todo/add',
    UPDATE = 'todo/update'
}

export const addItem = (item: ITodo): Action<ITodo> => ({
    type: TODO_TYPES.ADD,
    payload: item
});

export const updateItem = (id: string, status: TODO_STATUS): Action<{ id: string; status: TODO_STATUS }> => ({
    type: TODO_TYPES.UPDATE,
    payload: {
        id,
        status
    }
})