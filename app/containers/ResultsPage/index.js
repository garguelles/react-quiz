/*
 *
 * ResultsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from 'components/Button';
import { createStructuredSelector } from 'reselect';
import { makeSelectResults } from './selectors';

export class ResultsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { correctAnswers, timeElapsed } = this.props.results;

    return (
      <div>
        <p>Correct Answers: {correctAnswers}</p>
        <p>Time Elapsed: {timeElapsed}</p>
        <Button>Play Again</Button>
      </div>
    );
  }
}

ResultsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  results: PropTypes.object,
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
