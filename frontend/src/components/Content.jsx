import { Link,useNavigate } from "react-router-dom";
import { Button, responsiveFontSizes, Typography } from "@mui/material";
export function Content() {
    return ( 
        <div>
            <Navbar></Navbar>
            <br/>
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
    return(
        <div>
            <div style = {{
                display: "flex",
            }}>
            <Typography variant="h5" style={{ marginTop: '20px', marginLeft: "200px", fontWeight: "bold",  color: "white" }}>
               Title
            </Typography>
            <Typography variant="h5" style={{ marginTop: '20px', marginLeft: "550px",fontWeight: "bold",  color: "white" }}>
               Description
            </Typography>
            </div>
            <div style = {{
                marginLeft: "200px",
                marginTop: "40px"
            }}>
                
                <Link 
                href="/content1"
                style={{
                    color: "white",
                fontSize: "25px"
                }}>Two Sum</Link>

                <br/>
                <br/>
                <br/>

                <Link 
                href="/content2"
                style={{
                color: 'white',
                fontSize: "25px"
                }}>Longest Substring Without repeating characters</Link>

                <br/>
                <br/>
                <br/>
                <Link 
                href="/content3"
                style={{
                color: 'white',
                "&:hover" : {
                    color: "blue"
                },
                fontSize: "25px"
                }}>Regular Expression Matching</Link>
            </div>

            <div style= {{
                marginLeft: "830px",
                marginTop: "-160px",
                justifyContent: "center"
            }}>
                 <Typography variant="h5" style={{ color: "green" }}>
              Easy
            </Typography>
                 <Typography variant="h5" style={{ marginTop: "35px",color: "yellow" }}>
              Medium
            </Typography>
                 <Typography variant="h5" style={{ marginTop: "35px" ,color: "red" }}>
             Hard
            </Typography>
            </div>

        </div>
    )

}

