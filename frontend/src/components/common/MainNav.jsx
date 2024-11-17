// import { Typography } from "@mui/material";
// import credit from '../assets/logo.png';
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

// export function MainNav() {
//     const navigate = useNavigate();
//     return (
//     <div>

//           <div style={{ display: "flex", marginLeft: "10px", color: 'white', }}>
//             <img
//               src={credit}
//               alt="LeetCode Logo"
//               style={{ height: "150px",mixBlendMode: "color-burn", }}
//               onClick={() => {
//                 navigate('/');
//               }}
//             />
         
         
//          <NavLink to="/signin" style={{
//             color: 'white',
//             fontSize: "25px",
//             marginLeft: "700px",
//             marginRight: "70px",
//             marginTop: "60px"
//          }}>
//         Sign In 
//         </NavLink>
//          <NavLink to="/signup" style={{
//             color: 'white',
//             fontSize: "25px",
//               marginTop: "60px"
//          }}>
//         Sign Up
//         </NavLink>

            
//           </div>

//       </div>
//     )
// }


import React from 'react';
import credit from '../assets/logo.png';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function MainNav () {
    const navigate = useNavigate();
    return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '50px 100px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              fontWeight: 'bold',
              fontSize: '26px',
              marginRight: '10px',
              color: '#f9a825',
              cursor: 'pointer',
            }}>
              Practice
            </div>
            <div style={{
              fontSize: '15px',
              color: '#000',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}>
              Hub
            </div>
          </div>
          <div style={{
            display: 'flex',
            gap: '100px'
          }}>
           
            <div onClick= { () => {
                navigate('/signup');
            }}
              style={{ cursor: 'pointer' }}>Sign Up</div>
            <div onClick= { () => {
                navigate('/signin');
            }}
              style={{ cursor: 'pointer' }}>Sign In</div>
          </div>
        </div>
        </div>
  );
}

