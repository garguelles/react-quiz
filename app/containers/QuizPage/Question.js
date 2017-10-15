/*
 *
 * Question Component
 *
 */

import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { P } from 'components/Text';
import { RadioButton, RadioGroup } from 'react-radio-buttons';

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

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
    const choices = this.props.choices;

    return choices.map((c, i) => (
      <RadioButton rootColor="#aaa" key={i} value={c}>{c}</RadioButton>
    ));
  }

  onChange = (answer) => {
    const { id, correct_answer } = this.props;

    this.props.setAnswer(id, answer, correct_answer);
  }

  render() {
    return (
      <Wrapper>
        <P margin="0 0 15px 0" size="1.6em" dangerouslySetInnerHTML={{__html: this.props.question}} />
        <RadioGroup value="" onChange={this.onChange} style={{ fontSize: '16px' }}>
          {this.renderChoices()}
        </RadioGroup>
      </Wrapper>
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
