import { createSelector } from 'reselect';

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

/**
 * Direct selector to the app state domain
 */

const selectAppDomain = (state) => state.get('app');

/**
 * Other specific selectors
 */


/**
 * Default selector use by App
 */

const makeSelectApp = createSelector(
  selectAppDomain,
  (substate) => substate.toJS()
);

export {
  makeSelectLocationState,
  makeSelectApp,
};
