import { createSelector } from 'reselect';

/**
 * Direct selector to the quizPage state domain
 */
const selectQuizPageDomain = () => (state) => state.get('quizPage');

/**
 * Other specific selectors
 */

const makeSelectResults = () => createSelector(
  selectQuizPageDomain(),
  (substate) => {
    return substate ? substate.getIn(['ui', 'results']).toJS() : false;
  }
);


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
  makeSelectResults,
};
