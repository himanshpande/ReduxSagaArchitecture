import { takeLatest, put } from 'redux-saga/effects';
import * as TYPES from '../redux/actions/types';
import { saveWeather, weatherLoaderAction, weatherErrorAction } from '../redux/actions';
import { weatherService } from '../redux/services/weatherService';

export function* getWeatherSaga() {
  yield takeLatest(TYPES.GET_WEATHER, getWeatherWorker);
}

function* getWeatherWorker(action: any) {
  try {
    yield put(weatherLoaderAction(true));
    yield put(weatherErrorAction(''));
    
    if (!action.payload || !action.payload.trim()) {
      yield put(weatherErrorAction('Please enter a city name'));
      yield put(weatherLoaderAction(false));
      return;
    }

    const response = yield weatherService.getWeather(action.payload);
    yield put(saveWeather(response.data));
    yield put(weatherLoaderAction(false));
  } catch (error: any) {
    yield put(weatherLoaderAction(false));
    yield put(weatherErrorAction(error.response?.data?.message || 'City not found ❌'));
    yield put(saveWeather(null));
  }
}
