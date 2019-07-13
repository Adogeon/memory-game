import React from "react"

class Card extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            key:props.index,
            value:props.value,
        }
    }

    handleOnClick = () => {
        if(!this.props.hasMatched) {
            this.props.compareAndUpdate(this.state.key,this.state.value)
        }
    }


    render() {
        return(
            <div className="playCard" onClick={this.handleOnClick}>
                {
                    this.props.isFlip 
                        ? <img className="img-fluid" src={this.props.imgSrc} alt="cardimage"/>
                        : <i className="fas fa-10x fa-question"></i>
                }
            </div>
        )
    }
}

export default Card;