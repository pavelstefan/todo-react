import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import InProgress from "./pages/InProgress";
import Finished from "./pages/Finished";
import TodoInput from "./components/TodoInput";
import { Container } from '@mui/material';
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getItems } from './store/todo.actions';
import Login from './pages/Login';
import { setUser, isAuthenticated } from './store/user';
import { useSelector } from 'react-redux';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Stack direction='row' gap='10px'>
        <Link to="/todo">Inprogress</Link>
        <Link to="/finished">Finished</Link>
      </Stack>
      <TodoInput />
      {children}
    </>
  )
}

function App() {
  const dispatch = useDispatch();
  const authenticated = useSelector(isAuthenticated);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/todo');
    }
  }, [location, navigate]);

  useEffect(() => {
    dispatch(getItems());
    const email = localStorage.getItem('email');
    if (email) {
      dispatch(setUser(email));
    }
  }, []);

  if (!authenticated) {
    return (
      <Container>
        <Login />
      </Container>
    )
  }

  return (
    <Container>

      <Routes>
        <Route path="todo" element={<Layout><InProgress /></Layout>} />
        <Route path="finished" element={<Layout><Finished /></Layout>} />
        <Route path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
