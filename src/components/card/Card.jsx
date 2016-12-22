import React, { Component, PropTypes } from 'react';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flipped: props.flipped
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.flipped != this.props.flipped)
      this.setState({ flipped: nextProps.flipped })
  }

  render() {
    return (
      <div className={"jazzcard flipcard" + (this.state.flipped ? " flipped" : "")}>
        <div className="flip-front">
          <p className="questionText">
            What is b6 of A?
          </p>
        </div>
        <div className="flip-back">
          <p className="answerText">
            F
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
