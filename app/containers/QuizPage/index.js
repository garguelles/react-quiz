/*
 *
 * QuizPage
 *
 */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectQuizPage from './selectors';
import { getQuestions } from './actions';

export class QuizPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.getQuestions();
  }

  render() {
    return (
      <div>
        <h1>Yo</h1>
      </div>
    );
  }
}

QuizPage.propTypes = {
  getQuestions: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  QuizPage: makeSelectQuizPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getQuestions: bindActionCreators(getQuestions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
