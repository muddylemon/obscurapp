import { createStore, applyMiddleware, compose } from 'redux';
import Rehydration from '../Services/Rehydration';
import ReduxPersist from '../Config/ReduxPersist';
import { composeWithDevTools } from 'remote-redux-devtools';
import Config from '../Config/DebugConfig';
import ScreenTracking from './ScreenTrackingMiddleware';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

// creates the store
export default rootReducer => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Navigation Middleware ------------ */
  const navigationMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
  );
  middleware.push(navigationMiddleware);

  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking);

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  const composer = Config.useReduxDevTools
    ? composeWithDevTools({ hostname: 'remotedev.io' })
    : compose;
  const store = createStore(rootReducer, composer(...enhancers));

  if (ReduxPersist.active) {
    Rehydration.updateReducers(store);
  }

  return {
    store,
  };
};
