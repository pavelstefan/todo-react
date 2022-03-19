import React, { createContext, useState, useContext } from "react";
import ITodo, { TODO_STATUS } from "../types/Todo";

type AddItemFunc = (item: ITodo) => void;

export interface ITodoContext {
    addItem: AddItemFunc;
    items: ITodo[];
}

export const TodoContext = createContext<ITodoContext>({
    addItem: () => { },
    items: []
});

const TodoContextProvider: React.FC = ({ children }) => {
    const [items, setItems] = useState<ITodo[]>([]);
    const addItem = (item: ITodo) => {
        setItems([...items, item]);
    }

    return (
        <TodoContext.Provider value={{ items, addItem }}>
            {children}
        </TodoContext.Provider>
    );
}

export const useAddItem = (): AddItemFunc => {
    const { addItem } = useContext(TodoContext);
    return addItem
}

export const useInProgressItems = (): ITodo[] => {
    const { items } = useContext(TodoContext);
    return items.filter(item => item.status !== TODO_STATUS.FINISHED)
}

export default TodoContextProvider;