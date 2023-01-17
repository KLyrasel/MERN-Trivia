import * as Mui from "@mui/material"

import { useState, useEffect, Suspense } from 'react'

import GameLauncher from './GameLauncher'
import Game from './Game'
import { searchTriviaAPI } from '../SearchAPIHelper'

export default function Home() {

    let [api_url, setApi_Url] = useState('') // Stores the parsed api url.
    let [data, setData] = useState(null) // Stores the data fetched from the trivia api.

    // Takes the trivia parameters specified in the Game Launcher component, parses them into the api query string and stores the completed url within the 'api_url' variable.
    const handleSettings = (settings) => {
        let category = settings.category === 'random' ? '' : `categories=${settings.category}`
        let limit = `&limit=${settings.limit}`
        let difficulty = settings.difficulty === 'random' ? '' : `&difficulty=${settings.difficulty}`
        let API_URL = 'https://the-trivia-api.com/api/questions?' + category + limit + difficulty
        setApi_Url(API_URL)
    }

    const resetSettings = () => {
        setApi_Url('')
        setData(null)
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
                <Suspense fallback={<Mui.CircularProgress />}>
                    <Game data={data} resetSettings={resetSettings} />
                </Suspense>
            )
        } else {
            return (
                <GameLauncher handleSettings={handleSettings} />
            )
        }
    }

    return (
        <div>
            <h1></h1>

            {renderGame()}

        </div>
    )
}