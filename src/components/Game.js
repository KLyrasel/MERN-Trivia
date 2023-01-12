export default function Game(props) {

    const data = props.data.result.read() // ***NEED TO READ UP ON HOW THIS WORKS***

    // Tests the existence of trivia data by rendering the questions (*For testing purposes*)
    const renderQuestions = data.map((question, index) => {
        return (
            <h1 key={index} >{question.question}</h1>
        )
    })

    return (
        <div>
            <h1>GAME</h1>

            {renderQuestions}
        </div>

    )
}