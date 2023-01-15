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
            <div>
                PROFILE
            </div>
        </Mui.Box>
        </div>
     )
}

export default User