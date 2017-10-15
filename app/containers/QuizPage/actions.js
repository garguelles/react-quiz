/*
 *
 * QuizPage actions
 *
 */

import {
  GET_QUESTIONS,
  GET_QUESTIONS_FULFILLED,
} from './constants';

export function getQuestions() {
  return {
    type: GET_QUESTIONS,
  };
}

export function getQuestionsFulfilled(questions) {
  return {
    type: GET_QUESTIONS_FULFILLED,
    payload: { questions },
  };
}
