import * as TYPES from '../actions/types';

const initialState = {
  weather: null as any,
  loading: false,
  error: null as string | null,
};

export const WeatherReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.SAVE_WEATHER:
      return { ...state, weather: payload };
    case TYPES.WEATHER_LOADER:
      return { ...state, loading: payload };
    case TYPES.WEATHER_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
