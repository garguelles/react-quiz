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
  ui: {},
  data: {
    questions: [],
  },
});

function quizPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS_FULFILLED:
      return state.setIn(['data', 'questions'], fromJS(action.payload.questions));

    case SET_ANSWER:
      return state.setIn(
        ['data', 'questions'],
        state.getIn(['data', 'questions']).update(
          state.getIn(['data', 'questions']).findIndex((item) => {
            return item.get('id') === action.payload.questionId;
          }), (item) => {
            return item.set('answer', action.payload.answer);
          }
        )
      );

    default:
      return state;
  }
}

export default quizPageReducer;
