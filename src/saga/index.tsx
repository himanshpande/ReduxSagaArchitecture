import { all, fork } from 'redux-saga/effects';
import { getWeatherSaga } from './weatherSaga';

export function* rootSaga() {
  yield all([
    fork(getWeatherSaga),
  ]);
}