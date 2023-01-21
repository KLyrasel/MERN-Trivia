import * as Mui from "@mui/material"

import { useState, useEffect } from "react"
import axios from "axios"

export default function PostGame({ postGameData, resetSettings }) {

    const { performanceData, triviaData } = postGameData // Destructures the player's performance data and the trivia data

    let [playerName, setPlayerName] = useState('Anonymous') // Stores the player's name
    let [playerScore, setPlayerScore] = useState(10) // Stores the player's score

    // Posts the player's highscore to the Trivia Master database
    const submitHighscore = () => {
        // Sends highscore data to the post route of the database api
        axios.post("http://localhost:3001/api/posthighscore", {
            player_name: playerName,
            player_score: playerScore,
            question_count: triviaData.length
        }).then((result) => {
            console.log('Result: ', result)
            resetSettings()
            window.alert("Insert was successful")
        }).catch(err => {
            console.log('Error: ', err)
        })
    }

    // Render trivia results
    const renderPostGameData = performanceData.map((userResult, index) => {
        return (
            <Mui.Zoom key={index} in={true} style={{ transitionDelay: true ? `${200 * index}ms` : '0ms' }}>
                <Mui.Paper sx={{ border: `2px solid ${userResult.isCorrect ? 'green' : 'red'}` }}>
                    <Mui.Box sx={{ backgroundColor: userResult.isCorrect ? 'green' : 'red' }}>
                        <Mui.Typography color={'white'}>{index + 1}. {triviaData[index].question}</Mui.Typography>
                    </Mui.Box>
                    <Mui.Typography>Selection: <b>{userResult.choice}</b></Mui.Typography>
                    <Mui.Typography>Answer: <b>{triviaData[index].correctAnswer.toUpperCase()}</b></Mui.Typography>
                    <Mui.Typography>Answered In: <b>{30 - userResult.seconds} second(s)</b></Mui.Typography>
                </Mui.Paper>
            </Mui.Zoom>
        )
    })

    return (
        <div>

            <Mui.Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                margin: '50px auto',
                padding: '50px',
                width: '80vw',
                boxShadow: '0px 0px 20px 0px grey',
                borderRadius: '30px'
            }}>
                <Mui.Typography variant='h4'>POST GAME RESULTS</Mui.Typography>

                <Mui.Stack spacing={2} sx={{ margin: '10px' }}>
                    {renderPostGameData}
                </Mui.Stack>

                <Mui.Button variant='contained' onClick={() => submitHighscore()}>Test Submit</Mui.Button>

            </Mui.Box>
        </div>
    )
}