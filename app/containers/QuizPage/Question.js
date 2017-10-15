/*
 *
 * Question Component
 *
 */

import React, { PureComponent, PropTypes } from 'react';
import { RadioButton, RadioGroup } from 'react-radio-buttons';

class Question extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderChoices() {
    const choices = this.props.incorrect_answers.concat([this.props.correct_answer]);

    return choices.map((c, i) => (
      <RadioButton key={i} value={c}>{c}</RadioButton>
    ));
  }

  render() {
    return (
      <div>
        <p dangerouslySetInnerHTML={{__html: this.props.question}} />
        <RadioGroup vertical>
          {this.renderChoices()}
        </RadioGroup>
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.string,
  correct_answer: PropTypes.string,
  wrong_answers: PropTypes.array,
};

export default Question;
