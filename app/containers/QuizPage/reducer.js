/*
 *
 * QuizPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_QUESTIONS_FULFILLED,
  SET_ANSWER,
  SET_RESULTS,
} from './constants';

const initialState = fromJS({
  ui: {
    results: {
      correctAnswers: 0,
      timeElapsed: 0,
    },
    answers: [],
  },
  data: {
    questions: [],
  },
});

function quizPageReducer(state = initialState, action) {
  let answerIndex = -1;

  switch (action.type) {
    case GET_QUESTIONS_FULFILLED:
      return state.setIn(['data', 'questions'], fromJS(action.payload.questions));

    case SET_ANSWER:
      answerIndex = state.getIn(['ui', 'answers']).findIndex((a) => {
        return a.get('questionId') === action.payload.questionId
      });

      if (answerIndex !== -1) {
        return state.setIn(
          ['ui', 'answers'],
          state.getIn(['ui', 'answers']).update(
            answerIndex,
            (item) => {
              return item.set('answer', action.payload.answer);
            }
          )
        )
      }

      return state.updateIn(['ui', 'answers'], (answers) => answers.push(fromJS(action.payload)));

    case SET_RESULTS:
      return state.setIn(['ui', 'results'], fromJS(action.payload));

    default:
      return state;
  }
}

export default quizPageReducer;
