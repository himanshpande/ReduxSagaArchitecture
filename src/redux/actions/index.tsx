import * as TYPES from './types';

// Weather actions
export const getWeatherAction = (payload: string) => ({ type: TYPES.GET_WEATHER, payload });
export const saveWeather = (payload: any) => ({ type: TYPES.SAVE_WEATHER, payload });
export const weatherLoaderAction = (payload: boolean) => ({ type: TYPES.WEATHER_LOADER, payload });
export const weatherErrorAction = (payload: string) => ({ type: TYPES.WEATHER_ERROR, payload });   