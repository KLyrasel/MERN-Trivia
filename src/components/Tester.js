import { useLocation } from "react-router-dom"

export default function Tester() {

    const location = useLocation()
    const { limit } = location.state

    return (
        <>
            <h1>Tester</h1>

            {console.log(limit)}
        </>
    )
}