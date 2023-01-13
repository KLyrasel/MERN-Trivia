import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Game from './components/Game'
import Login from './components/Login'
import Signup from './components/Signup'
import Scoreboard from './components/Scoreboard'
import Navbar from './components/Navbar'

function App() {

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game' element={<Game/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/scoreboard' element={<Scoreboard/>}/>
          <Route path='/navbar' element={<Navbar/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
