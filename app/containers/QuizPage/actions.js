/*
 *
 * QuizPage actions
 *
 */

import {
  GET_QUESTIONS,
  GET_QUESTIONS_FULFILLED,
  SET_ANSWER,
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

export function setAnswer(questionId, answer, correctAnswer) {
  return {
    type: SET_ANSWER,
    payload: { questionId, answer, correctAnswer },
  };
}
