import React from 'react'

function Quote() {
    // funktioniert noch nicht

    const newQuote = getNewQuote(); // setTimeout(getNewQuote, 5000)
    function getNewQuote() {
        const quote = 'quote';
        return quote
    }
    return (
        <div>
            <p>„ {newQuote} “</p>
        </div>
    )
}

export default Quote
