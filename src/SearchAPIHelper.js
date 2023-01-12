// Asynchronously fetches data from the trivia api.
const fetchQuestions = async (url) => {
    const response = await fetch(url) // Request data from the trivia api.
    const responseData = await response.json() // Parses the body text as JSON.
    return responseData // return parsed data.
}

// Takes the 'fetchQuestions' promise as an arguement and wraps it.
const promiseSuspender = (promise) => {

    let status = 'pending' // Tracks the status of the promise.
    let result = '' // Stores to result of the promise.

    // The suspender represents the resolution of the promise and updates the 'status' variable by flagging either a success or an error.
    let suspender = promise.then(response => {
        status = 'success'
        result = response
    }, error => {
        status = 'error'
        result = error
    })

    // The suspender will return 
    return {
        read() {
            // If the promise hasn't been initialized then trigger it.
            if (status === 'pending') {
                throw suspender
            }
            // If the promise has flagged an error then send that error through.
            else if (status === 'error') {
                throw result
            }

            // If the promise has been triggered and no error has occured then return the result!
            return result
        }
    }
}

export const searchTriviaAPI = (url) => {
    // Returns an object with the value of the trivia api results.
    return {
        result: promiseSuspender(fetchQuestions(url))
    }
}