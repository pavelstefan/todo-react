import { Button, TextField, Stack } from "@mui/material";
import { useState } from "react";
import { setUser } from "../store/user";
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleChange = (type: 'email' | 'password') => (e: any) => {
    //     const value = e.target.value;
    //     if (type === 'email') {
    //         setEmail(value)
    //     } else {
    //         setPassword(value);
    //     }
    // }

    const handleChange = (setValue: (v: string) => void) => (e: any) => {
        setValue(e.target.value);
    }

    const handleLogin = () => {
        if (email && password) {
            localStorage.setItem('email', email);
            dispatch(setUser(email));
        }
    }

    return (
        <Stack gap='10px'>
            <TextField label="Email" variant="outlined" onChange={handleChange(setEmail)} />
            <TextField label="Password" variant="outlined" onChange={handleChange(setPassword)} />
            <Button onClick={handleLogin} variant="contained" disabled={!email || !password}>Login</Button>
        </Stack >
    )
};

export default Login;