/*
 *
 * Question Component
 *
 */

import React, { PureComponent, PropTypes } from 'react';
import { RadioButton, RadioGroup } from 'react-radio-buttons';

class Question extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderChoices() {
    return this.props.choices.map((c, i) => (
      <RadioButton key={i} value={c}>{c}</RadioButton>
    ));
  }

  onChange = (answer) => {
    const { id, correct_answer } = this.props;

    this.props.setAnswer(id, answer, correct_answer);
  }

  render() {
    return (
      <div>
        <p dangerouslySetInnerHTML={{__html: this.props.question}} />
        <RadioGroup value="" onChange={this.onChange}>
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
