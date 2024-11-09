import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { useState,useEffect } from 'react'
import axios from 'axios';
import './content.css';


export function Content() {
    return ( 
        <div>
            <Navbar></Navbar>
            <Problems></Problems>
        </div>
    )
}
function Navbar() {
    const navigate=useNavigate();
    return (
        <div>
            <div style = {{
                display : "flex",
                justifyContent: "space-between",
                margin: "20px"
            }}> 
            <Typography variant="h5" style={{ marginTop: '20px', fontWeight: "bold",  color: "white" }}>
               Practice Hub
            </Typography>
               
            <Button
                variant="contained"
                fullWidth
                style={{
                    backgroundColor: '#4dabf5',
                    width: 100,
                    color: 'white',
                    padding: '9px',
                    borderRadius: '5px',
                    marginTop: "20px"
                }}
                onClick={async () => {
                    localStorage.removeItem('token');
                    navigate('/');
                    }
                }
            >Log Out</Button>
            </div>
    
        </div>

    )

}
function Problems(){
    const [problems,setProblems]=useState([])
    useEffect(()=>{
        fetchProblems()
    },[])
    const fetchProblems = async()=>{
        const options={
            method:'GET',
            url:'https://localhost:3000/content',
            headers:{
                'Content-Type':'application/json',
                authorization:localStorage.getItem('token')
            }
        }
        const response=await axios.request(options)
        setProblems(response.data)
    }
    
    return(
        <div>
        <table>
            <thead>
                <th>Title</th>
                <th>Difficulty</th>
            </thead>
            <tbody>
            {problems.map((problem) => (
    <Child key={problem._id} _id={problem._id} title={problem.title} difficulty={problem.difficulty} />))}
            </tbody>
        </table>
        </div>
    )

}
function Child(props) {
    const id = "/content/" +props._id;
    return (
        <tr>
            <td>
                <a href={id}>{props.title}</a>
            </td>
            <td style={{ color: props.difficulty === 'Easy' ? "green" : (props.difficulty === 'Medium' ? "yellow" : "red") }}>
                {props.difficulty}
            </td>
        </tr>
    );
}
