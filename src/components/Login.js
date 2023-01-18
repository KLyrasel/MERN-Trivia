import React, { useState} from "react"
import * as Mui from "@mui/material"
import { Link } from "react-router-dom"


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[dataInput, setdataInput] = useState("");
  const submitData = () => {
    const information = { email: email, password: password };
    setdataInput([information]);
  }

  //Creates values for password and email, as well as a value to include a combination of both to submit that data

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
          type="text"
          name="email"
          id="email"
          value={email}
          label="Username"
          placeholder="Username"
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        </Mui.Box>
        <Mui.Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '30ch', pb: 5, },
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
         onChange={(e) => setPassword(e.target.value)}
         />
        </div>
        </Mui.Box>
        <Mui.Box display="flex" justifyContent="space-evenly" paddingBottom="30px" margin="0" paddingTop="0">
         <Mui.Button
            type="submit"
            variant="contained">
            {'Login'}
          </Mui.Button>
          <Mui.Button color="primary"
            variant="contained"
            type="submit"
            class="signup-page"
            id="signup-page">
            {<Link to="/Signup" style={{ textDecoration: 'none' , color: 'inherit',}}>
                 SIGN UP
            </Link>}
          </Mui.Button>   
        </Mui.Box>
        </Mui.Box>
    </div>
    )
}

export default Login