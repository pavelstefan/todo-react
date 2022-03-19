import { Routes, Route } from "react-router-dom";
import InProgress from "./pages/InProgress";
import Finished from "./pages/Finished";
import TodoInput from "./components/TodoInput";
import { Container } from '@mui/material';
import ITodo, { TODO_STATUS } from './types/Todo';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState<ITodo[]>([]);

  const finished = items.filter(item => item.status === TODO_STATUS.FINISHED);

  return (
    <Container>
      <TodoInput />
      <Routes>
        <Route path="/" element={<InProgress />} />
        <Route path="finished" element={<Finished items={finished} />} />
      </Routes>
    </Container>
  );
}

export default App;
