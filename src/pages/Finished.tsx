import { Stack } from '@mui/material';
import Card from '../components/Card';
import { useFinishedItems } from '../hooks/TodoContext';

const Finished: React.FC = () => {
    const items = useFinishedItems();

    return (

        <Stack direction='row' flexWrap='wrap' gap='10px'>
            {items.map(item => <Card key={item.id} item={item} />)}
        </Stack>

    )
}

export default Finished;