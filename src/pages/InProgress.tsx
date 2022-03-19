import React from 'react';
import { Stack } from '@mui/material';
import Card from '../components/Card';
import { useInProgressItems } from '../hooks/TodoContext';

const InProgress: React.FC = () => {
    const items = useInProgressItems();
    return (
        <Stack direction='row' flexWrap='wrap' gap='10px'>
            {items.map(item => <Card key={item.id} item={item} />)}
        </Stack>
    )
}

export default InProgress;