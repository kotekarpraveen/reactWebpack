import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { persistStore, persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import allReducers from '../reducers/index.js';
// import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
  const initialState = {};
  const middleware = [
    thunk
    //  logger
  ];
  // const persistConfig = {
  //   key: '__jio__unified__portal__header__',
  //   storage,
  //   whitelist: ['auth']
  // };

  // const reducer = persistCombineReducers(persistConfig, rootReducer);

  const store = createStore(
    allReducers,
    initialState,
    compose(
      applyMiddleware(...middleware)
      // , composeWithDevTools()
    )
  );

  // const persistor = persistStore(store);

  return { store };
}
