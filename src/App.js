import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect, Suspense } from 'react'

import GameLauncher from './components/GameLauncher'
import Game from './components/Game'
import { searchTriviaAPI } from './SearchAPIHelper'

function App() {

  let [api_url, setApi_Url] = useState('') // Stores the parsed api url.
  let [data, setData] = useState(null) // Stores the data fetched from the trivia api.

  // Takes the trivia parameters specified in the Game Launcher component, parses them into the api query string and stores the completed url within the 'api_url' variable.
  const handleSettings = (settings) => {
    let limit = settings.limit
    let category = settings.category === 'random' ? '' : `categories=${settings.category}&`
    let difficulty = settings.difficulty === 'random' ? '' : `&difficulty=${settings.difficulty}`
    let API_URL = 'https://the-trivia-api.com/api/questions?' + category + limit + difficulty
    setApi_Url(API_URL)
  }

  // Once 'api_url' has been assigned a new api url value, a fetch request is sent with the result stored within the 'data' variable.
  useEffect(() => {
    if (api_url) {
      setData(searchTriviaAPI(api_url))
    }
  }, [api_url])

  // Renders the game once the trivia data has been received, otherwise Game Launcher gets rendered.
  const renderGame = () => {
    if (data) {
      return (
        <Suspense fallback={<h1>Loading Game...</h1>}>
          <Game data={data} />
        </Suspense>
      )
    } else {
      return (
        <GameLauncher handleSettings={handleSettings} />
      )
    }
  }

  return (
    <div className="App">
      <h1>TRIVIA APP</h1>

      <Router>
        <Routes>
          <Route path='/' element={
            <>
              {renderGame()}
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
