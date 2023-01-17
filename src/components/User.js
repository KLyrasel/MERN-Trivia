import react from 'react'
import * as Mui from "@mui/material"

function User() {
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
            pt: 0,
            pb: 15,
            m: 0,
            pr:0,}}>
            Hi there, 
            </Mui.FormLabel>

            USERNAME
            
            <Mui.FormLabel id='login' sx={{
             color: "rgb(0,0,0)",
            fontFamily: 'Helvetica',
            fontWeight: 700,
            fontSize: 25,
            letterSpacing: '1px',
            pt: 0,
            pb: 0,
            m: 0,
            pr:0,}}>
            Great job on your highscore!
            </Mui.FormLabel>
            
            <Mui.FormLabel id='login' sx={{
            color: "rgb(0,0,0)",
            fontFamily: 'Helvetica',
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: '1px',
            pt: 0,
            pb: 15,
            m: 0,
            pr:0,}}>
            <Mui.Typography sx={{fontStyle: 'italic'}}>
                You're almost a trivia master..</Mui.Typography>
            </Mui.FormLabel>
        </Mui.Box>
        </div>
     )
}

export default User