import React from "react"
import Card from "./Card"
import cardData from "../data/cardData.json"

class Gameboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            cards: cardData.sort(() => Math.random() - 0.5),
            lastCardValue: 0,
            lastCardKey: -1
        }
    }

    handleIncreaseScore = () => {
        const newScore = this.state.score + 1;
        this.setState({score: newScore})
    }

    handleOnCheck = (cardValue,cardKey) => {
        if (this.state.lastCardKey !== cardKey) {
            if(this.state.lastCardValue === cardValue) {
                score
            }
        }
    }

    render() {
        return(
            <div>
                <div>Score: {this.state.score}</div>
                <div className="board">
                    {
                        this.state.cards.map(
                            (card, index) => <Card key={index} value={card.value} imgSrc={card.imgSrc} onCheck={this.handleOnCheck} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Gameboard;
