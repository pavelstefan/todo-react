import { Stack } from '@mui/material';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { finishedItemsSelector } from '../store/todo.selectors';

const Finished: React.FC = () => {
    const items = useSelector(finishedItemsSelector);

    return (
        <Stack direction='row' flexWrap='wrap' gap='10px'>
            {items.map(item => <Card key={item.id} item={item} />)}
        </Stack>

    )
}

export default Finished;