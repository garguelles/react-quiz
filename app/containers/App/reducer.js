import { fromJS } from 'immutable';
import {
  TOGGLE_SIDE_NAV,
} from 'common/constants';

const initialState = fromJS({
  ui: {
    sideNavOpen: false,
  },
  data: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDE_NAV:
      return state.setIn(['ui', 'sideNavOpen'], !state.getIn(['ui', 'sideNavOpen']));
    default:
      return state;
  }
}

export default appReducer;
