import ITodo from "../types/Todo";
import Action from "../types/redux-action";

export enum TODO_TYPES {
    ADD = 'todo/add',
    UPDATE = 'todo/update',
    SET = 'todo/set',
    GET = 'todo/get',
}

export const addItem = (description: string): Action<string> => ({
    type: TODO_TYPES.ADD,
    payload: description
});

export const updateItem = (id: string): Action<string> => ({
    type: TODO_TYPES.UPDATE,
    payload: id
});

export const getItems = (): Action => ({
    type: TODO_TYPES.GET
});

export const setItems = (items: ITodo[]): Action<ITodo[]> => ({
    type: TODO_TYPES.SET,
    payload: items
});
