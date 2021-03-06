import {ResortTypes as types} from '../action-types';

const uploadResortObjects = resorts => {
  return {
    type: types.UPLOAD_RESORT_OBJECTS,
    resorts,
  };
};

const getResortObject = resort => {
  return {
    type: types.GET_RESORT_OBJECT,
    resort,
  };
};

const updateAttributeMapObject = maps => {
  return {
    type: types.UPDATE_ATTRIBUTE_MAP,
    maps,
  };
};

const updateErrorObject = error => {
  return {
    type: types.UPDATE_RESORT_ERROR_OBJECT,
    error,
  };
};

export function uploadResorts(resorts) {
  return dispatch => {
    try {
      if (Object.keys(resorts[0]).length !== 11) {
        return dispatch(
          updateErrorObject(
            'Sorry, app only supports data which has exactly 11 columns!'
          )
        );
      }
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

export function updateAttributeMap(maps) {
  return dispatch => {
    try {
      dispatch(updateAttributeMapObject(maps));
    } catch (e) {
      throw e;
    }
  };
}

export function getErrorMessage(error) {
  return dispatch => {
    dispatch(updateErrorObject(error));
  };
}
