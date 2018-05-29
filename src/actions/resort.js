import {ResortTypes as types} from '../action-types';

const uploadResortObjects = resorts => {
  return {
    type: types.UPLOAD_RESORT_OBJECTS,
    resorts,
  };
};

const getResortObject = resort => {
  return {
    type: types.GET_RESORT_OBJECTS,
    resort,
  };
};

export function uploadResorts(resorts) {
  return dispatch => {
    try {
      dispatch(uploadResortObjects(resorts));
    } catch (e) {
      throw e;
    }
  };
}

export function getResort(resort) {
  return dispatch => {
    try {
      dispatch(getResortObject(resort));
    } catch (e) {
      throw e;
    }
  };
}
