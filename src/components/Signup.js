import React from 'react'
import * as Mui from "@mui/material"
import { Link } from "react-router-dom"

function Signup() {
        return(
            <div>
            <Mui.Box sx={{
                display: 'flex',
                 flexDirection: 'column',
                justifyContent: 'space-evenly',
                margin: '50px auto',
                padding: '50px',
                width: '500px',
                height: '400px',
                boxShadow: '0px 0px 20px 0px grey',
                borderRadius: '30px'
            }}>
            <Mui.FormLabel id='login' sx={{
                color: "rgb(0,0,0)",
                fontFamily: 'Helvetica',
                fontWeight: 700,
                fontSize: 30,
                letterSpacing: '1px',
                pt:8,
                pb: 0,
                m: 0,
                pr:17,}}>
                Sign Up
                </Mui.FormLabel>
                <Mui.Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' },}}
                noValidate
                autoComplete="off">
               <div>
                <Mui.TextField
                 required
                 id="outlined-required"
                 label="Required"
                 defaultValue="Username"/>
                </div>
                </Mui.Box>
            <Mui.Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' },
             }}
             noValidate
            autoComplete="off">
            <div>
            <Mui.TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="E-mail Address"/>
            </div>
            </Mui.Box>
            <Mui.Box component="form" sx={{ '& .MuiTextField-root': { mt: 1, mb: 0, width: '30ch', pb: 0, },
            }}
             noValidate
            autoComplete="off">
            <div>
            <Mui.TextField
             required
             id="outlined-required"
             label="Required"
             defaultValue="Password"/>
            </div>
            </Mui.Box>
            <div>
                <h5>Already have an account?  { <Link to="/Login" style={{ textDecoration: 'none' , color: 'inherit',}}>
                Sign in!
                </Link>} 
                 </h5>
            </div>
            <Mui.Box display="flex" justifyContent="space-evenly" paddingBottom="30px" margin="0" paddingTop="0">
              <Mui.Button
                type="submit"
                variant="contained">
                { <Link to="/Signup" style={{ textDecoration: 'none' , color: 'inherit',}}>
                     Sign up
                </Link>}
              </Mui.Button>   
            </Mui.Box>
            </Mui.Box>
        </div>
        )
}

export default Signup