import { Typography , Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Home () {
    const navigate = useNavigate();
   return (

    <div style = {{
        color: "#FFFFFF",
    }
    }>
        <Typography style = {{
            marginLeft: "375px",
        marginTop: "100px"
        }}variant={"h3"}>Welcome to Practice Hub!</Typography>
        <br/>
        <br/>
        <br/>
        <br/>
        <Typography style = {{
             marginLeft: "250px",     
             }}variant={"h5"}><strong>Dive into a diverse range of data structures questions to sharpen your</strong></Typography>
        <Typography style = {{
             marginLeft: "250px",     
             }}variant={"h5"}><strong>problem-solving skills. From Array to Linked List, we've got you covered.</strong></Typography>

        <br/>
        <br/>
        <br/>
        <br/>
        <div style = {{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "550px",
            width: "200px"
        }}>
            <Button 
                variant={"contained"}
                onClick={() => {
                    navigate ('/signup')
                }}
            >Signup</Button> 

            <Button
            variant={"contained"}
            onClick={() => {
                navigate ('/signin')
            }}
        >Signin</Button>
        </div>
    </div>
   )
}


