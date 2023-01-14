import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Scoreboard from './components/Scoreboard'
import Login from './components/Login'
import Signup from './components/Signup'


function App() {

  return (

    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/scoreboard' element={<Scoreboard/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
