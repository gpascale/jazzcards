import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PageLayout from '../pagelayout/PageLayout';
import Card from '../card/Card';

class QuizPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false
    };
  }

  render() {
    return (
      <PageLayout>
        <div className="quizPage">
          <Card flipped={this.state.flipped}></Card>
          <div className="controls">
            <RaisedButton label="Submit" style={{ margin: 12 }}
                          onClick={() => this.setState({ flipped: !this.state.flipped })} />
          </div>
        </div>
      </PageLayout>
    );
  }
}

export default QuizPage;
