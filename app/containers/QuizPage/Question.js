/*
 *
 * Question Component
 *
 */

import React, { PureComponent, PropTypes } from 'react';
import { RadioButton, RadioGroup } from 'react-radio-buttons';

class Question extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // shuffle choices
  /*shuffle(array) {
    let currentIndex = array.length,
      temporaryValue = 0,
      randomIndex = 0;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }*/

  renderChoices() {
    const choices = this.props.incorrect_answers.concat([this.props.correct_answer]);

    return choices.map((c, i) => (
      <RadioButton key={i} value={c}>{c}</RadioButton>
    ));
  }

  onChange = (e) => {
    this.props.setAnswer(this.props.id, e);
  }

  render() {
    return (
      <div>
        <p dangerouslySetInnerHTML={{__html: this.props.question}} />
        <RadioGroup value="" onChange={this.onChange} vertical>
          {this.renderChoices()}
        </RadioGroup>
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  correct_answer: PropTypes.string.isRequired,
  incorrect_answers: PropTypes.array.isRequired,
  setAnswer: PropTypes.func.isRequired
};

export default Question;
