import React, { useState } from 'react'
import * as Mui from "@mui/material"
import { Link } from "react-router-dom"

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")
  const[dataInput, setdataInput] = useState("");
  const submitData = () => {
    const information = { email: email, password: password, username: username };
    setdataInput([information]);
  }
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
                type="text"
                name="username"
                id="username"
                value={username}
                label="Username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}/>
                </div>
                </Mui.Box>
            <Mui.Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' },
             }}
             noValidate
            autoComplete="off">
            <div>
            <Mui.TextField
              required
              type="text"
              name="email"
              value={email}
              id="email"
              label="Email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            </Mui.Box>
            <Mui.Box component="form" sx={{ '& .MuiTextField-root': { mt: 1, mb: 0, width: '30ch', pb: 0, },
            }}
             noValidate
            autoComplete="off">
            <div>
            <Mui.TextField
            required
            type="text"
            name="password"
             id="password"
            value={password}
            label="Password"
            placeholder="********"
           onChange={(e) => setPassword(e.target.value)}/>
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
             color="primary"
             class="signup-page"
             id="signup-page"
             type="submit"
             variant="contained">
            {<Link to="/Signup" style={{ textDecoration: 'none' , color: 'inherit',}}>
              SIGN UP
            </Link>}
            </Mui.Button>
            </Mui.Box>
            </Mui.Box>
        </div>
        )
}

export default Signup