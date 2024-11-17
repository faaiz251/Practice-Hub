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
                justifyContent: 'center',
                alignItems: 'center',
                gap: '550px',

            }}>
            
            <Typography variant="h5" style={{ textDecoration: 'underline', fontWeight: "bold",  color: "white" }}>
               Title
            </Typography>
            <Typography variant="h5" style={{textDecoration: 'underline',fontWeight: "bold",  color: "white" }}>
               Description
            </Typography>
            </div>
            <div style = {{
               marginTop: '50px',
               display: 'flex',
               justifyContent: 'center',
                alignItems: 'center',
                gap: '550px',
                marginLeft: '-100px',
                marginRight: '-50px'
            }}>
          <Button variant="text" style = {{
                    color: 'White',
                    fontSize: "20px"
                }}
                    onClick={async () => {
                        navigate('/content1');
                        }
                    }
                >Two Sum</Button>
                 <Typography variant="h5" style={{color: "green" }}>
              Easy
            </Typography>
        </div>
            <div style = {{
               marginTop: '50px',
               display: 'flex',
               justifyContent: 'space-between',
                marginLeft: '60px',
                marginRight: '280px'
            }}>
          <Button variant="text" style = {{
                    color: 'White',
                    fontSize: "20px"
                }}
                    onClick={async () => {
                        navigate('/content2');
                        }
                    }
                >Longest Substring Without repeating characters</Button>
                 <Typography variant="h5" style={{color: "yellow" }}>
              Medium
            </Typography>
        </div>
            <div style = {{
               marginTop: '50px',
               display: 'flex',
               justifyContent: 'center',
                alignItems: 'center',
                gap: '400px',
                marginLeft: '-40px',
                marginRight: '110px'
            }}>
          <Button variant="text" style = {{
                    color: 'White',
                    fontSize: "20px"
                }}
                    onClick={async () => {
                        navigate('/content3');
                        }
                    }
                >Regular Expression Matching</Button>
                 <Typography variant="h5" style={{color: "red" }}>
              Hard
            </Typography>
        </div>
        </div>
    ) }

                {/* <Button variant="text" style = {{
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
                }}
                    onClick={async () => {
                        navigate('/content3');
                        }
                    }
                >Regular Expression Matching</Button>

                
            </div>

            <div style= {{
                marginLeft: "830px",
                marginTop: "-205px",
                justifyContent: "center"
            }}>
            <Typography variant="h5" style={{marginTop :"-1px", color: "green" }}>
              Easy
            </Typography>
                 <Typography variant="h5" style={{ marginTop: "55px",color: "yellow" }}>
              Medium
            </Typography>
                 <Typography variant="h5" style={{ marginTop: "45px" ,color: "red" }}>
             Hard
            </Typography>
            </div>

        </div>
    )

} */}
