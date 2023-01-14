import react from "react"
import * as Mui from "@mui/material"
import { Link } from "react-router-dom"


function Navbar() {
    return (
      <Mui.Box sx={{ flexGrow: 1 }}>
        <Mui.AppBar position="static">
          <Mui.Toolbar>
            <Mui.IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </Mui.IconButton>
            <Mui.Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
              HOME
              </Link>
            </Mui.Typography>

            <Mui.Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               <Link to="/Scoreboard" style={{ textDecoration: 'none' }}>
               HIGHSCORES
             </Link>
          </Mui.Typography>
          <Mui.Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <Link to="/" style={{ textDecoration: 'none' }}>
               USER
            </Link>
          </Mui.Typography>
            <Mui.Button color="inherit">Login</Mui.Button>
          </Mui.Toolbar>
        </Mui.AppBar>
      </Mui.Box>
    );
  }

export default Navbar;