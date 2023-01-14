import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home';
import Tester from './components/Tester';

function App() {

  return (
    <div className="App">
      <h1>TRIVIA APP</h1>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tester' element={<Tester />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
