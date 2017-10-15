/*
 *
 * QuizPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_QUESTIONS_FULFILLED,
  SET_ANSWER,
} from './constants';

const initialState = fromJS({
  ui: {
    answers: [],
  },
  data: {
    questions: [],
  },
});

function quizPageReducer(state = initialState, action) {
  let answerIndex = false;

  switch (action.type) {
    case GET_QUESTIONS_FULFILLED:
      return state.setIn(['data', 'questions'], fromJS(action.payload.questions));

    case SET_ANSWER:
      answerIndex = state.getIn(['ui', 'answers']).findIndex((a) => {
        console.log('the a', a);
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

    default:
      return state;
  }
}

export default quizPageReducer;
