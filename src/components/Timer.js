import * as Mui from "@mui/material"

export default function Timer({ seconds }) {

    return (
        <>
            <Mui.Typography>Seconds Left:{seconds}</Mui.Typography>
            <Mui.LinearProgress variant='determinate' value={(seconds / 30) * 100} sx={{ margin: '10px', borderRadius: '5px', height: '10px' }} />
        </>
    )
}

Timer.defaultProps = {
    seconds: 30
}