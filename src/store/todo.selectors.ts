import AppState from "../types/app-state";
import ITodo, { TODO_STATUS } from "../types/Todo";

export const finishedItemsSelector = (state: AppState): ITodo[] => state.todo.items.filter(
    item => item.status === TODO_STATUS.FINISHED
);

export const inProgressItemsSelector = (state: AppState): ITodo[] => state.todo.items.filter(
    item => item.status !== TODO_STATUS.FINISHED
)
