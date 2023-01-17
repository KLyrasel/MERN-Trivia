import * as Mui from "@mui/material"
import { useEffect, useState } from "react"
import Timer from "./Timer"

export default function Game(props) {

    const data = props.data.result.read() // ***NEED TO READ UP ON HOW THIS WORKS***

    let [index, setIndex] = useState(0) // Stores the index of the current question being prompted

    let [shuffledAnswers, setShuffledAnswers] = useState([]) // Stores the shuffled answers array

    let [currentTimerDate, setCurrentTimerDate] = useState(Date.now()) // Stores the start time of a question
    let [seconds, setSeconds] = useState() // Stores the amount of seconds remaining for a question
    let [intervalID, setIntervalID] = useState(null)

    let [performanceData, setPerformanceData] = useState([])

    // Shuffle the order of the elements in the answers array.
    const shuffleAnswers = () => {
        let answers = [data[index].correctAnswer, ...data[index].incorrectAnswers] // Stores an array of the four possible answers
        let currentIndex = answers.length
        let randomIndex

        // Shuffle logic
        while (currentIndex !== 0) {
            // Choose a random answer from the array.
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex-- //decrement current index.

            // Swap the random element wirth the current element.
            [answers[currentIndex], answers[randomIndex]] = [answers[randomIndex], answers[currentIndex]]
        }

        setShuffledAnswers(answers)
    }

    // Assign a button to each answer in it's new random order.
    let renderAnswers = shuffledAnswers.map((answer, indexKey) => {
        if (index < data.length) {
            return (
                <Mui.Button variant='contained' color={answer === data[index].correctAnswer ? 'success' : 'primary'} key={indexKey} fullWidth onClick={(e) => checkAnswer(e.target.innerText)}>{answer}</Mui.Button>
            )
        }
    })

    // Check whether the user got the question right or wrong.
    const checkAnswer = (choice) => {
        let isCorrect
        if (choice === data[index].correctAnswer.toUpperCase()) {
            isCorrect = true
        }
        else {
            isCorrect = false
        }

        setPerformanceData([...performanceData, { choice, isCorrect, seconds }])
        prepNextQuestion(intervalID)
    }

    // Initiates the timer
    const startTimer = () => {
        const endTime = currentTimerDate + 5000

        let interval = setInterval(() => {
            setIntervalID(interval)
            const currentTime = new Date().getTime()
            const timeLeft = endTime - currentTime

            // Converts the milliseconds to seconds
            const secs = Math.floor((timeLeft % (60 * 1000)) / 1000)

            if (timeLeft < 0) {
                setPerformanceData([...performanceData, { choice: 'none', isCorrect: false, seconds: 0 }])
                prepNextQuestion(interval)
            }
            else {
                setSeconds(secs)
            }
        })
    }

    const prepNextQuestion = (interval) => {
        clearInterval(interval)
        setCurrentTimerDate(Date.now())
        setIndex(index + 1)
    }

    useEffect(() => {
        if (performanceData.length >= data.length) {
            props.handlePostGameData({ performanceData, triviaData: data })
        } else {
            shuffleAnswers()
            startTimer()
        }
    }, [index])

    return (

        <div>
            <h1>GAME</h1>

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

                <Mui.Button variant='contained' onClick={() => props.resetSettings()}>Back to Launcher</Mui.Button>

                <Mui.Paper variant='outlined' sx={{ margin: '30px auto', width: 'inherit' }}>

                    <Mui.Typography variant='h6'>{index >= data.length ? '' : `${index + 1}. ${data[index].question}`}</Mui.Typography>

                    <Timer seconds={seconds} />

                    <Mui.Stack spacing={2} sx={{ margin: '10px' }}>
                        {renderAnswers}
                    </Mui.Stack>

                </Mui.Paper>

            </Mui.Box>

        </div>

    )
}