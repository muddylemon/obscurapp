import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import configureStore from './CreateStore';
import ReduxPersist from '../Config/ReduxPersist';

export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer,
  image: require('./ImageRedux').reducer,
});

export default () => {
  let finalReducers = reducers;
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  let { store } = configureStore(finalReducers);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
