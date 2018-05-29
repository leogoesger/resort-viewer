import {ResortTypes as types} from '../action-types';

type STATE = {};
type ACTION = {};

const initialState: STATE = {
  resorts: null,
  resort: null,
  error: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.UPLOAD_RESORT_OBJECTS:
      return {...state, resorts: action.resorts};

    case types.GET_RESORT_OBJECT:
      return {...state, resort: action.resort};

    default:
      return state;
  }
}
