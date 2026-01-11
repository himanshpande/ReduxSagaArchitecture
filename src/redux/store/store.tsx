import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import appReducer from '../Reducers';
import { rootSaga } from '../../saga';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };