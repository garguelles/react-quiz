/*
 *
 * QuizPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_QUESTIONS_FULFILLED,
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
    default:
      return state;
  }
}

export default quizPageReducer;
