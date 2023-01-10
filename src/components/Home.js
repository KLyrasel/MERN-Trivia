import * as Mui from "@mui/material"
import { useState } from "react"

export default function Home(props) {

    let [questionAmount, setQuestionAmount] = useState(10)
    let [difficulty, setDifficulty] = useState('random')
    let [category, setCategory] = useState('random')

    const difficultyMarks = [
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 30, label: '30' },
        { value: 40, label: '40' },
        { value: 50, label: '50' }
    ]

    return (
        <div>
            <h1>HOME</h1>

            <Mui.Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                margin: '50px auto',
                padding: '50px',
                width: '500px',
                height: '400px',
                boxShadow: '0px 0px 20px 0px grey',
                borderRadius: '30px'
            }}>

                <Mui.Box>
                    <Mui.FormLabel id='number-of-questions'>Number of Questions</Mui.FormLabel>
                    <Mui.Slider
                        aria-labelledby='number-of-questions'
                        marks={difficultyMarks}
                        value={questionAmount}
                        step={10} min={10} max={50}
                        onChange={(event) => setQuestionAmount(event.target.value)}
                    />
                </Mui.Box>

                <Mui.Box>
                    <Mui.FormLabel id='difficulty'>Difficulty</Mui.FormLabel>
                    <Mui.RadioGroup
                        row
                        aria-labelledby='difficulty'
                        name='difficulty-radio-button-group'
                        value={difficulty}
                        onChange={(event) => setDifficulty(event.target.value)}
                    >
                        <Mui.FormControlLabel value="random" control={<Mui.Radio />} label="Random" />
                        <Mui.FormControlLabel value="easy" control={<Mui.Radio />} label="Easy" />
                        <Mui.FormControlLabel value="medium" control={<Mui.Radio />} label="Medium" />
                        <Mui.FormControlLabel value="hard" control={<Mui.Radio />} label="Hard" />
                    </Mui.RadioGroup>
                </Mui.Box>

                <Mui.Box>
                    <Mui.FormControl fullWidth variant='filled'>
                        <Mui.InputLabel id='category'>Category</Mui.InputLabel>
                        <Mui.Select
                            labelId='category'
                            value={category}
                            label='Category'
                            onChange={(event) => setCategory(event.target.value)}
                        >
                            <Mui.MenuItem value='random'>Random</Mui.MenuItem>
                            <Mui.MenuItem value='arts_and_literature'>Arts & Literature</Mui.MenuItem>
                            <Mui.MenuItem value='film_and_tv'>Film & TV</Mui.MenuItem>
                            <Mui.MenuItem value='food_and_drink'>Food & Drink</Mui.MenuItem>
                            <Mui.MenuItem value='general_knowledge'>General Knowledge</Mui.MenuItem>
                            <Mui.MenuItem value='geography'>Geography</Mui.MenuItem>
                            <Mui.MenuItem value='history'>History</Mui.MenuItem>
                            <Mui.MenuItem value='music'>Music</Mui.MenuItem>
                            <Mui.MenuItem value='science'>Science</Mui.MenuItem>
                            <Mui.MenuItem value='society_and_culture'>Society & Culture</Mui.MenuItem>
                            <Mui.MenuItem value='sport_and_leisure'>Sport & Leisure</Mui.MenuItem>
                        </Mui.Select>
                    </Mui.FormControl>
                </Mui.Box>

                <Mui.Link href='/game'>
                    <Mui.Button fullWidth variant='contained'>PLAY</Mui.Button>
                </Mui.Link>
            </Mui.Box>
        </div>
    )
}