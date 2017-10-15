/*
 *
 * QuizPage
 *
 */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SweetAlert from 'sweetalert-react';
import Button from 'components/Button';
import makeSelectQuizPage from './selectors';
import { getQuestions, setAnswer, setResults } from './actions';
import Question from './Question';

class QuizPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    showAlert: false,
    correctAnswers: 0,
    timeElapsed: 0,
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ timeElapsed: this.state.timeElapsed + 1 });
    }, 1000);
  }

  componentWillMount() {
    this.props.getQuestions();
  }

  renderQuestions() {
    return this.props.QuizPage.data.questions.map(q => (
      <Question key={q.id} setAnswer={this.props.setAnswer} {...q} />
    ));
  }

  submitQuiz = () => {
    const answers = this.props.QuizPage.ui.answers;
    const questions = this.props.QuizPage.data.questions;

    if (answers.length < questions.length) {
      return alert('please answer all questions');
    }

    const correctAnswers = answers
      .map((a) => (a.correctAnswer === a.answer))
      .filter((i) => (i === true)).length;

    clearInterval(this.timer);
    this.props.setResults({
      correctAnswers,
      timeElapsed: this.state.timeElapsed,
    });

    this.props.router.push('/results');
  }

  render() {
    if (this.props.QuizPage.data.questions.length === 0) {
      return (<p> Loading Questions </p>);
    }

    return (
      <div>
        <h1>Quiz</h1>
        { this.renderQuestions() }
        <div>
          <Button onClick={this.submitQuiz}>Submit</Button>
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
    setResults: bindActionCreators(setResults, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
