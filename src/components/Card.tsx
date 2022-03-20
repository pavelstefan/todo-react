import React from 'react';
import ITodo from '../types/Todo';
import CardContainer from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useUpdateItem } from '../hooks/TodoContext';
import { TODO_STATUS } from '../types/Todo';
import { updateItem } from '../store/todo.actions';
import { useDispatch } from 'react-redux';

const statusMap: { [key in TODO_STATUS]: string; } = {
    [TODO_STATUS.CREATED]: 'Start',
    [TODO_STATUS.STARTED]: 'Finish',
    [TODO_STATUS.FINISHED]: 'Reopen',

}

const Card: React.FC<{ item: ITodo }> = ({ item }) => {
    const updateItemContext = useUpdateItem();
    const dispatch = useDispatch();

    const handleClick = () => {
        switch (item.status) {
            case TODO_STATUS.CREATED: {
                updateItemContext(item.id, TODO_STATUS.STARTED);
                dispatch(updateItem(item.id, TODO_STATUS.STARTED));
                break;
            }
            case TODO_STATUS.STARTED: {
                updateItemContext(item.id, TODO_STATUS.FINISHED);
                dispatch(updateItem(item.id, TODO_STATUS.FINISHED));
                break;
            }
            case TODO_STATUS.FINISHED: {
                updateItemContext(item.id, TODO_STATUS.CREATED);
                dispatch(updateItem(item.id, TODO_STATUS.CREATED));
                break;
            }
            default: {
                console.log(`Wrong status ${item.status}`)
            }
        }
    }

    return (
        <CardContainer variant='outlined'>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleClick}>{statusMap[item.status]}</Button>
            </CardActions>
        </CardContainer>
    );
}

export default Card;