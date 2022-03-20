import React, { createContext, useState, useContext } from "react";
import ITodo, { TODO_STATUS } from "../types/Todo";

type AddItemFunc = (item: ITodo) => void;
type UpdateItemFunc = (id: string, status: TODO_STATUS) => void;

export interface ITodoContext {
    addItem: AddItemFunc;
    updateItem: UpdateItemFunc;
    items: ITodo[];
}

export const TodoContext = createContext<ITodoContext>({
    addItem: () => { },
    updateItem: () => { },
    items: []
});

const TodoContextProvider: React.FC = ({ children }) => {
    const [items, setItems] = useState<ITodo[]>([]);
    const addItem = (item: ITodo) => {
        setItems([...items, item]);
    }

    const updateItem = (id: string, status: TODO_STATUS) => {
        setItems(items.map((item) => {
            if (item.id !== id) {
                return item;
            }
            return {
                ...item,
                status,
            }
        }))
    }
    console.log(items);
    return (
        <TodoContext.Provider value={{ items, addItem, updateItem }}>
            {children}
        </TodoContext.Provider>
    );
}


export const useAddItem = (): AddItemFunc => {
    const { addItem } = useContext(TodoContext);
    return addItem;
}

export const useUpdateItem = (): UpdateItemFunc => {
    const { updateItem } = useContext(TodoContext);
    return updateItem;
}

export const useInProgressItems = (): ITodo[] => {
    const { items } = useContext(TodoContext);
    return items.filter(item => item.status !== TODO_STATUS.FINISHED)
}

export const useFinishedItems = (): ITodo[] => {
    const { items } = useContext(TodoContext);
    return items.filter(item => item.status === TODO_STATUS.FINISHED);
}

export default TodoContextProvider;