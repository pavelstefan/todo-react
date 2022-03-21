import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import InProgress from "./pages/InProgress";
import Finished from "./pages/Finished";
import TodoInput from "./components/TodoInput";
import { Container } from '@mui/material';
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getItems } from './store/todo.actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <Container>
      <Stack direction='row' gap='10px'>
        <Link to="/">Inprogress</Link>
        <Link to="/finished">Finished</Link>
      </Stack>
      <TodoInput />
      <Routes>
        <Route path="/" element={<InProgress />} />
        <Route path="finished" element={<Finished />} />
      </Routes>
    </Container>
  );
}

export default App;
