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
  > div > div {
    > div {
      align-items: center;
      > div:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0!important;
      }
    }
  }
`;

class Question extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
        <RadioGroup vertical value="" onChange={this.onChange} style={{ fontSize: '16px' }}>
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
