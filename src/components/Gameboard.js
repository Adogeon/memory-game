import React from "react"
import Card from "./Card"
import cardData from "../data/cardData.json"


class Gameboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            cards: cardData.sort(() => Math.random() - 0.5),
            prevCardValue: 0,
            prevCardKey: -1
        }
    }

    waitAndFlip = (cardKey1,cardKey2) => {
        setTimeout(()=>{
            console.log("It lauch")
            const newCardArray = this.state.cards.slice()
            newCardArray[cardKey1].isFlip = false
            newCardArray[cardKey2].isFlip = false
            this.setState({
                cards: newCardArray
            })
        },750)
    }

    updateStates(newCards,cardKey,cardValue) { // pass -1 for cardKey & 0 for cardValue to reset
        this.setState({
            cards: newCards,
            prevCardKey: cardKey,
            prevCardValue: cardValue
        })
    }

    compareAndUpdate = (newCardKey,newCardValue) => {
        if (this.state.prevCardKey === -1 && this.state.prevCardValue === 0) { //clicked first card
            let newCardArray = this.state.cards.slice()
            newCardArray[newCardKey].isFlip = true
            this.updateStates(newCardArray,newCardKey,newCardValue)
        } else { //clicked second card
            if(this.state.prevCardKey === newCardKey) { //clicked same card
                let newCardArray = this.state.cards.slice()
                newCardArray[newCardKey].isFlip = false //flip it back
                this.updateStates(newCardArray,-1,0) //reset prevCardKey and prevCardValue
            } else { //clicked different card
                //compare
                if(this.state.prevCardValue === newCardValue) {
                    const newCardArray = this.state.cards.slice()
                    newCardArray[newCardKey].isFlip = true             //flip new card
                    newCardArray[newCardKey].isMatch = true            //mark new card as matched
                    newCardArray[this.state.prevCardKey].isMatch = true //mark prev card as matched
                    this.updateStates(newCardArray,-1,0)               //update card array & reset prev values
                } else {
                    const newCardArray = this.state.cards.slice()
                    newCardArray[newCardKey].isFlip = true //flip new card
                    this.waitAndFlip(newCardKey,this.state.prevCardKey) // call function that flip these back
                    this.updateStates(newCardArray,-1,0)          //update card array & reset prev values
                }
            }
        }
    }

    flipCard = (card)=>{
        return card.isFlip ? false: true
    }

    render() {
        return(
            <div>
                <div className="board">
                    {
                        this.state.cards.map(
                            (card, index) => <Card key={index} index={index} value={card.value} imgSrc={card.imgSrc} compareAndUpdate={this.compareAndUpdate} isFlip={card.isFlip} isMatch={card.isMatch}/>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Gameboard;
