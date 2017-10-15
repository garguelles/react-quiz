import { createSelector } from 'reselect';
import _ from 'lodash';

/**
 * Direct selector to the quizPage state domain
 */
const selectQuizPageDomain = () => (state) => state.get('quizPage');

/**
 * Other specific selectors
 *
 * Shuffle choices
 */
const makeSelectQuestions = () => createSelector(
  selectQuizPageDomain(),
  (substate) => {
    const questions = substate.getIn(['data', 'questions']).toJS();

    return questions.map((e) => {
      const choices = e.incorrect_answers.concat([e.correct_answer]);

      return Object.assign({}, e, { choices: _.shuffle(choices) });
    });
  }
)


/**
 * Default selector used by QuizPage
 */

const makeSelectQuizPage = () => createSelector(
  selectQuizPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectQuizPage;
export {
  selectQuizPageDomain,
  makeSelectQuestions,
};
