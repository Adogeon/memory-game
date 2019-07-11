import React from "react"

class Jumbotron extends React.Component {
    render() {
        return(
            <div className="jumbotron">
                <h1>
                    Memory Game
                </h1>
                <span>
                    Rules:
                </span>
                <p>
                    You have 30 seconds to memorize the card locations. Try to find all the pairs.
                </p>
            </div>
        )
    }
}

export default Jumbotron;