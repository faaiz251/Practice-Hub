import {Typography , Button } from "@mui/material";
import {Navbar} from '../common/Navbar';
import { useNavigate } from "react-router-dom";
export function Content() {
    return ( 
        <div>
            <Navbar></Navbar>
            <br/>
            <Problems></Problems>
        </div>
    )
}

function Problems(){
    const navigate = useNavigate();
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
                marginLeft: "195px",
                marginTop: "40px"
            }}>
        

                <Button variant="text" style = {{
                    color: 'white',
                    fontSize: "15px"
                }}
                    onClick={async () => {
                        navigate('/content1');
                        }
                    }
                >Two Sum</Button>

                <br/>
                <br/>
                <br/>

              
                   <Button variant="text" style = {{
                    color: 'white',
                    fontSize: "15px"
                }}
                    onClick={async () => {
                        navigate('/content2');
                        }
                    }
                >Longest Substring Without repeating characters</Button>

                <br/>
                <br/>
                <br/>

    <Button variant="text" style = {{
                    color: 'white',
                    fontSize: "15px",
                    "&:hover" : {
                        color: "blue"
                    },
                }}
                    onClick={async () => {
                        navigate('/content3');
                        }
                    }
                >Regular Expression Matching</Button>

                
            </div>

            <div style= {{
                marginLeft: "830px",
                marginTop: "-182px",
                justifyContent: "center"
            }}>
                 <Typography variant="h5" style={{marginTop :"-1px", color: "green" }}>
              Easy
            </Typography>
                 <Typography variant="h5" style={{ marginTop: "40px",color: "yellow" }}>
              Medium
            </Typography>
                 <Typography variant="h5" style={{ marginTop: "40px" ,color: "red" }}>
             Hard
            </Typography>
            </div>

        </div>
    )

}

