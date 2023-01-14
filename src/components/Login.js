import React from "react"
import * as Mui from "@mui/material"

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
            letterSpacing: '1px',}}>
            Login</Mui.FormLabel>
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
        <Mui.Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' },
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
        </Mui.Box>
    </div>
    )
}

export default Login