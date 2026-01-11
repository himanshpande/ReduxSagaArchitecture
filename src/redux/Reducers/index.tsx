import { combineReducers } from 'redux';
import { WeatherReducer } from './weatherReducer';

const appReducer = combineReducers({ WeatherReducer });
export default appReducer;