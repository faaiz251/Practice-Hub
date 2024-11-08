import { TextField, Button, Typography, Card } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Signin() {
    const navigate = useNavigate();
    const[username , setUsername] = useState("");
    const[password , setPassword] = useState("");

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#000000',
                padding: '30px',
                borderRadius: '10px',
                width: '300px',
                margin: '450px',
                marginTop: "100px",
                color: 'white',
                border: '1px solid white',
            }}
        >
            <Typography variant="h5" style={{ marginBottom: '20px' }}>
                Signin
            </Typography>
            <TextField
            onChange={(e) => {
                setUsername(e.target.value);
            }}
                label="Username"
                variant="outlined"
                fullWidth
                style={{
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    marginBottom: '20px',
                }}
            />
            <TextField
            onChange={(e) => {
                setPassword(e.target.value);
            }}
                label="Password"
                variant="outlined"
                type='password'
                fullWidth
                style={{
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    marginBottom: '20px',
                }}
               
            />
            <Button
                variant="contained"
                fullWidth
                style={{
                    backgroundColor: '#4dabf5',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                }}
                onClick={async () => {
                    try {
                    const res = await axios.post(`http://localhost:3000/signin/`, {
                        username: username,
                        password: password
                    }, {
                        headers: {
                            "Content-type": "application/json",
                        }
                    })
                    const data = res.data;
                    console.log(data);
                    alert('Login SuccessFully!'); 
                    navigate('/content');
                } catch(err) {
                    if (err) {
                        alert('Invalid username or password. Please try again.');
                    }
                }}
            }>Sign in
            </Button>
            <Typography variant="h7" style={{ color: 'white' }}>
                Not a User?{' '}
                <Link to="/signup" style={{ color: '#4dabf5' }}>
                    Signup
                </Link>
            </Typography>
        </Card>
    )
}