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
                    Try to find all the pairs.
                </p>
            </div>
        )
    }
}

export default Jumbotron;