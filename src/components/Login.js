import React from "react"
import * as Mui from "@mui/material"
import { Link } from "react-router-dom"

function Login() {
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
            pr:20,}}>
            Login
            </Mui.FormLabel>
        <Mui.Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' },
         }}
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
        <Mui.Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '30ch', pb: 5, },
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
        <Mui.Box display="flex" justifyContent="space-evenly" paddingBottom="30px" margin="0" paddingTop="0">
         <Mui.Button
            type="submit"
            variant="contained">
            {'Login'}
          </Mui.Button>

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

export default Login