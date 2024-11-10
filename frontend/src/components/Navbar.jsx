import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

export function Navbar() {
    const navigate=useNavigate();
    return (
        <div>
            <div style = {{
                display : "flex",
                justifyContent: "space-between",
                margin: "20px"
            }}> 
            <Button variant="text" style = {{
                    color: 'white',
                    marginTop: "20px",
                    fontSize: "20px"
                }}
                    onClick={async () => {
                        navigate('/content');
                        }
                    }
                ><strong>Practice Hub</strong></Button>
               
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