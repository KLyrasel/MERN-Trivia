import react from "react"
import * as Mui from "@mui/material"
import { Link } from "react-router-dom"
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const theme = Mui.createTheme();

theme.spacing(2);


function Navbar() {
    return (
        
      <Mui.Box sx={{ flexGrow: 1 }}>
        <Mui.AppBar position="static" style={{ margin: 0 }}>
          <Mui.Toolbar>
          <EmojiObjectsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, pl:5, }}/>
          <Mui.Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Helvetica',
              fontWeight: 700,
              letterSpacing: '2.5px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TRIVIA
          </Mui.Typography>
            <Mui.IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </Mui.IconButton>
            <Mui.Typography variant="h6" component="div"  sx={{
              pl: 25,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Helvetica',
              fontWeight: 700,
              letterSpacing: '2.5px',
              color: 'inherit',
            }}>
                <Link to="/" style={{ textDecoration: 'none' , color: 'inherit',}}>
              HOME
              </Link>
            </Mui.Typography>

            <Mui.Typography variant="h6" component="div"  sx={{
              pl: 10,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Helvetica',
              fontWeight: 700,
              letterSpacing: '2.5px',
              color: 'inherit',
            }}>
               <Link to="/Scoreboard" style={{ textDecoration: 'none' , color: 'inherit', }}>
               HIGHSCORES
             </Link>
          </Mui.Typography>
          <Mui.Typography variant="h6" component="div"  sx={{
              pl: 10,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Helvetica',
              fontWeight: 700,
              letterSpacing: '2.5px',
              color: 'inherit',
              textDecoration: 'none',
            }}>
             <Link to="/" style={{ textDecoration: 'none' , color: 'inherit', }}>
               USER
            </Link>
          </Mui.Typography>
            <Mui.Button color="primary" sx={{
              pl:110,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Helvetica',
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: '2.5px',
              color: 'inherit',
              textDecoration: 'none',
            }}>
              <Link to="/Login" style={{ textDecoration: 'none' , color: 'inherit', }}>
                LOGIN
              </Link></Mui.Button>
          </Mui.Toolbar>
        </Mui.AppBar>
      </Mui.Box>
    );
  }

export default Navbar;