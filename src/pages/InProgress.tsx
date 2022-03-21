import React from 'react';
import { Stack } from '@mui/material';
import Card from '../components/Card';
import { useInProgressItems } from '../hooks/TodoContext';
import { inProgressItemsSelector } from '../store/todo.selectors';
import { useSelector } from 'react-redux';

const InProgress: React.FC = () => {
    const contextItems = useInProgressItems();
    const items = useSelector(inProgressItemsSelector);

    return (
        <Stack direction='row' flexWrap='wrap' gap='10px'>
            <Stack>
                <h3>Context</h3>
                {contextItems.map(item => <Card key={`ctx-${item.id}`} item={item} />)}
            </Stack>

            <Stack>
                <h3>Redux</h3>
                {items.map(item => <Card key={item.id} item={item} />)}
            </Stack>
        </Stack>
    )
}

export default InProgress;