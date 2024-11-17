// import { Typography , Button} from "@mui/material";
// import { useNavigate } from "react-router-dom";

// export function Home () {
//     const navigate = useNavigate();
//    return (

//     <div style = {{
//         color: "#000000",
//         fontFamily: "cursive",
//     }
//     }>
//         <h1 style= {{
//             display: "flex",
//             justifyContent: "center",
//             marginTop: "80px",
//             fontSize: "60px"
//         }}>Welcome to Practice Hub!</h1>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <Typography style = {{
//               display: "flex",
//               justifyContent: "center",     
//              }}variant={"h5"}><strong>Dive into a diverse range of data structures questions to sharpen your</strong></Typography>
//         <Typography style = {{
//              display: "flex",
//         justifyContent: "center",    
//              }}variant={"h5"}><strong>problem-solving skills. From Array to Linked List, we've got you covered.</strong></Typography>

//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <div style = {{
//             display: "flex",
//             justifyContent: "space-evenly",
//             marginTop: "-10px",
//             margin: "100px"
//         }}>
//             <Button 
//                 variant={"contained"}
//                 onClick={() => {
//                     navigate ('/signup')
//                 }}
//             >Signup</Button> 

//             <Button
//             variant={"contained"}
//             onClick={() => {
//                 navigate ('/signin')
//             }}
//         >Signin</Button>
//         </div>
//     </div>
//    )
// }

// import React from "react";
// import { Typography, Button } from "@mui/material";
// import { MainNav } from "../common/MainNav";
// export function Home() {
  
//     return (
//       <div>
//         <MainNav></MainNav>
//         <div style = {{
//             alignContent: 'right'


//         }}>
//           <Typography variant="h5" style ={{
//             color: 'white',
//           }}>A New Way to Learn</Typography>
//           <Typography>
//             LeetCode is the best platform to help you enhance your skills, expand
//             your knowledge and prepare for technical interviews.
//           </Typography>
//           <Button>Create Account</Button>
//         </div>
  
       
//       </div>
//     );
//   }



import React from 'react';
import { MainNav } from '../common/MainNav';
import { useNavigate } from 'react-router-dom';

export function  Home ()  {
    const navigate = useNavigate();
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>     


      <MainNav></MainNav>

      <div style={{
        marginTop: "-50px",
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div style={{
          display: 'flex',
          maxWidth: '1100px',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>

          <div style={{
            background: 'white',
            marginLeft: "50px",
            padding: '20px',
            borderRadius: '20px',
            transform: 'rotate(-5deg)'
          }}>
            <div style={{
              width: '250px',
              height: '150px',
              border: '1px solid #ccc',
              display: 'flex',                       
              flexDirection: 'column',
              justifyContent: 'space-around'
            }}>
              <div style={{ display: 'flex', gap: '5px', padding: '10px' ,}}>
                <div style={{ backgroundColor: '#4fc3f7', height: '20px', width: '20px', borderRadius: '5px' }}></div>
                <div style={{ backgroundColor: '#81c784', height: '20px', width: '20px', borderRadius: '5px' }}></div>
                <div style={{ backgroundColor: '#ffb74d', height: '20px', width: '20px', borderRadius: '5px' }}></div>
                <div style={{ backgroundColor: '#e57373', height: '20px', width: '20px', borderRadius: '5px' }}></div>
                <div style={{ backgroundColor: '#4fc3f7', height: '20px', width: '20px', borderRadius: '100px' }}></div>
              </div>

            </div>
          </div>

          <div style={{
            textAlign: 'left',
            maxWidth: '500px',
            marginLeft: '20px'
          }}>
            <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>A New Way to Learn</h1>
            <p style={{ fontSize: '18px', lineHeight: '1.6' ,color: 'grey'}}>
             Practice Hub is the best platform to help you enhance your skills, expand
              your knowledge and prepare for technical interviews.
            </p>
            <button style={{
              marginTop: '15px',
              padding: '10px 20px',
              backgroundColor: '#26a69a',
              color: '#fff',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer'
            }} onClick={() => {
                navigate('/signup');
            }}>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};


