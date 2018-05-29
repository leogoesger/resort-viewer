import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import resort from './resort';

export default combineReducers({
  routing: routerReducer,
  resort,
});
