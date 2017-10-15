/*
 *
 * QuizPage
 *
 */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from 'components/Button';
import makeSelectQuizPage from './selectors';
import { getQuestions, setAnswer } from './actions';
import Question from './Question';

class QuizPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.getQuestions();
  }

  renderQuestions() {
    return this.props.QuizPage.data.questions.map(q => (
      <Question key={q.id} setAnswer={this.props.setAnswer} {...q} />
    ));
  }

  submitQuiz = () => {
    alert('submit');
  }

  render() {
    if (this.props.QuizPage.data.questions.length === 0) {
      return (<p> Loading Questions </p>);
    }

    return (
      <div>
        <h1>Yo</h1>
        { this.renderQuestions() }
        <div>
          <Button onSubmit={this.submitQuiz}>Submit</Button>
        </div>
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
    setAnswer: bindActionCreators(setAnswer, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
