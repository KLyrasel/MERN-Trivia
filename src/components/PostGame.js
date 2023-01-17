import * as Mui from "@mui/material"

export default function PostGame({ postGameData }) {

    const { performanceData, triviaData } = postGameData

    const renderPostGameData = performanceData.map((userResult, index) => {

        return (
            <Mui.Zoom key={index} in={true} style={{ transitionDelay: true ? `${200 * index}ms` : '0ms' }}>
                <Mui.Paper sx={{ border: `2px solid ${userResult.isCorrect ? 'green' : 'red'}` }}>
                    <Mui.Box sx={{ backgroundColor: userResult.isCorrect ? 'green' : 'red' }}>
                        <Mui.Typography color={'white'}>{index + 1}. {triviaData[index].question}</Mui.Typography>
                    </Mui.Box>
                    <Mui.Typography>Selection: <b>{userResult.choice}</b></Mui.Typography>
                    <Mui.Typography>Answer: <b>{triviaData[index].correctAnswer.toUpperCase()}</b></Mui.Typography>
                    <Mui.Typography>Answered In: <b>{5 - userResult.seconds} second(s)</b></Mui.Typography>
                </Mui.Paper>
            </Mui.Zoom>
        )
    })

    return (
        <div>
            <h1>POST GAME</h1>

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
            </Mui.Box>
        </div>
    )
}