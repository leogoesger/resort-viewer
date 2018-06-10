import {ResortTypes as types} from '../action-types';

type STATE = {};
type ACTION = {};

const initialState: STATE = {
  resorts: [],
  resort: null,
  error: null,
  mapping: {},
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.UPLOAD_RESORT_OBJECTS:
      return {...state, resorts: action.resorts};

    case types.GET_RESORT_OBJECT:
      return {...state, resort: action.resort};

    case types.UPDATE_ATTRIBUTE_MAP:
      return {...state, mapping: action.maps};

    case types.UPDATE_RESORT_ERROR_OBJECT:
      return {...state, error: action.error};

    default:
      return state;
  }
}
