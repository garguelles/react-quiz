/*
 *
 * QuizPage actions
 *
 */

import {
  GET_QUESTIONS,
  GET_QUESTIONS_FULFILLED,
  SET_ANSWER,
  SET_RESULTS,
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

export function setResults({ correctAnswers, timeElapsed }) {
  return {
    type: SET_RESULTS,
    payload: { correctAnswers, timeElapsed },
  };
}
