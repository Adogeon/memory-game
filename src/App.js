import React from "react";
import Jumbotron from "./components/Jumbotron"
import Gameboard from "./components/Gameboard"

class App extends React.Component {
    render() {
        return ( 
            <div className='container'>
                <Jumbotron/>
                <Gameboard/>
            </div>
        )
    }
}

export default App