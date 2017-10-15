/*
 *
 * ResultsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from 'components/Button';
import { P } from 'components/Text';
import { createStructuredSelector } from 'reselect';
import { makeSelectResults } from './selectors';
import { Wrapper } from './styles';

export class ResultsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    if (!this.props.results) {
      this.props.router.push('/');
    }
  }

  startQuiz = () => {
    // use window.location.replace to clear all state
    window.location.replace('/quiz');
  }

  render() {
    const { correctAnswers, timeElapsed } = this.props.results;

    return (
      <Wrapper>
        <P size="1.8em" margin="0 0 10px 0">Correct Answers: {correctAnswers}</P>
        <P size="1.8em" margin="0 0 10px 0">Time Elapsed: {timeElapsed} seconds</P>
        <Button onClick={this.startQuiz} size="2em">Play Again</Button>
      </Wrapper>
    );
  }
}

ResultsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  results: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]), // false if visited directly from url
};

const mapStateToProps = createStructuredSelector({
  results: makeSelectResults(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
