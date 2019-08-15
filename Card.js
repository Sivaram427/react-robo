import React, {Component} from "react";
class Card extends Component {
  render()
  {
    return(
    <div className="bg-blue dib card br3 pa3 grow ma2 bw2 shadow-5">
    <img src={`https://robohash.org/${this.props.name}`} alt="rbo"/>
      <h1>{this.props.name}</h1>
      <p>{this.props.mail}</p>
      </div>
      )
  }
}

 

export default Card;
