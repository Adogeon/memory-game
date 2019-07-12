import React from "react"

class Card extends React.Component {
    constructor(prop) {
        super(prop) 
        this.state = {
            id:'',
            value:'',
            frontSrc:'',
            backSrc:'',
            isFlip:false
        }
    }

    handleOnClick = () => {
        this.state.isFlip
            ? this.setState({ isFlip: false })
            : this.setState({ isFlip: true })
    }

    render() {
        return(
            <div className="playCard" data-id={this.state.id} onclick={this.handleOnClick()}>
                <image src = 
                    {
                        this.state.isFlip
                            ? frontSrc
                            : backSrc
                    }
                />
            </div>
        )
    }
}