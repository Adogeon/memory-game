import React from "react"

class Card extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            key:props.key,
            value:props.value,
            imgSrc:props.imgSrc,
            isFlip:false,
            hasMatched: false
        }
    }

    handleOnClick = (isFlipped) => {
        if(!this.state.hasMatched) {
            isFlipped
                ? this.setState({ isFlip: false })
                : this.setState({ isFlip: true })
            this.props.onCheck(this.state.value,this.state.key);
        }
    }


    render() {
        return(
            <div className="playCard" data-id={this.state.id} onClick={()=>this.handleOnClick(this.state.isFlip)}>
                {
                    this.state.isFlip 
                        ? <img className="img-fluid" src={this.state.imgSrc}/>
                        : <i class="fas fa-10x fa-question"></i>
                }
            </div>
        )
    }
}

export default Card;