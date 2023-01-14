import * as Mui from "@mui/material"
import { useState } from "react"

export default function Game(props) {

    const data = props.data.result.read() // ***NEED TO READ UP ON HOW THIS WORKS***

    let [index, setIndex] = useState(0) // Stores the index of the current question being prompted

    const renderAnswers = () => {
        let answers = [data[index].correctAnswer, ...data[index].incorrectAnswers]
        let currentIndex = answers.length
        let randomIndex

        // Shuffle the order of the elements in the answers array.
        while (currentIndex != 0) {
            // Choose a random answer from the array.
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex-- //decrement current index.

            // Swap the random element wirth the current element.
            [answers[currentIndex], answers[randomIndex]] = [answers[randomIndex], answers[currentIndex]]
        }

        // Assign a button to each answer in it's new random order.
        const render = answers.map((answer, indexKey) => {
            return (
                <Mui.Button variant={answer === data[index].correctAnswer ? 'outlined' : 'contained'} key={indexKey} fullWidth onClick={(e) => checkAnswer(e.target.innerText)}>{answer}</Mui.Button>
            )
        })

        return render
    }

    // Check whether the user got the question right or wrong.
    const checkAnswer = (choice) => {
        if (choice === data[index].correctAnswer.toUpperCase()) {
            setIndex(index + 1)
        }
        else {
            console.log('WRONG!')
        }
    }

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

                <Mui.Button variant='contained' onClick={() => props.resetSettings()}>Back</Mui.Button>

                <Mui.Paper variant='outlined' sx={{ margin: '30px auto', width: 'inherit' }}>
                    <Mui.Typography>{data[index].question}</Mui.Typography>

                    <Mui.Stack spacing={2} sx={{ margin: '10px' }}>
                        {renderAnswers()}
                    </Mui.Stack>

                </Mui.Paper>

            </Mui.Box>

        </div>

    )
}