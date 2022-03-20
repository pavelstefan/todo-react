import { Stack, TextField, Button } from '@mui/material';
import { TODO_STATUS } from '../types/Todo';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useAddItem } from '../hooks/TodoContext';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/todo.actions';

const TodoInput: React.FC = () => {
    const [value, setValue] = useState('');
    const addTodo = useAddItem();
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleClick = () => {
        if (!value) {
            return;
        }

        const item = {
            description: value,
            id: uuid(),
            status: TODO_STATUS.CREATED
        };
        addTodo(item);
        dispatch(addItem(item));
        setValue('');
    }

    return (
        <Stack flexDirection='row' gap='10px'>
            <TextField value={value} onChange={handleChange} />
            <Button variant='outlined' onClick={handleClick}>create</Button>
        </Stack>
    )
}

export default TodoInput;