/*
 *
 * QuizPage Sagas
 *
 */

import { take, takeLatest, put, cancel, call, watcher } from 'redux-saga/effects';
import axios from 'axios';
import { LOCATION_CHANGE } from 'react-router-redux';
import { getQuestionsFulfilled } from './actions';
import { GET_QUESTIONS } from './constants';

export function* getQuestions() {
  try {
    const response = yield call(axios.get, 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple');

    yield put(getQuestionsFulfilled(response.data.results));
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
}

// Individual exports for testing
export function* getQuestionsSaga() {
  const watcher = yield takeLatest(GET_QUESTIONS, getQuestions);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  getQuestionsSaga,
];
