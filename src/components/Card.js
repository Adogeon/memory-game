import React from "react"

class Card extends React.Component {
    constructor(prop) {
        super(prop) 
        this.state = {
            id:'',
            value:'',
            frontHref:'',
            backHref:'',
            isFlip:false
        }
    }

    render() {
        return(
            <div className="playCard" data-id={this.state.id}>
                {
                    this.state.isFlip
                    ?//render the front of the card
                    ://render the back of the card
                }
            </div>
        )
    }
}