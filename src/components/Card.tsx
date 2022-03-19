import React from 'react';
import ITodo from '../types/Todo';
import CardContainer from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Card: React.FC<{ item: ITodo }> = ({ item }) => (
    <CardContainer variant='outlined'>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">{item.status}</Button>
        </CardActions>
    </CardContainer>
);

export default Card;