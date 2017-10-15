/*
 *
 * Question Component
 *
 */

import React, { PureComponent, PropTypes } from 'react';

class Question extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <p>{this.props.question}</p>
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
