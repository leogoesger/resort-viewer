import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import csv from 'csvtojson';
import {compose, setPropTypes} from 'recompose';

import UploaderHOC from '../hocs/UploaderHOC';
import {uploadResorts} from '../actions/resort';

const stringProcessor = csvStr => {
  return csv({}).fromString(csvStr);
};

const Uploader = UploaderHOC(stringProcessor);

const mapDispatchToProps = dispatch => {
  return {uploadResorts: d => dispatch(uploadResorts(d))};
};

const composer = mapDispatchToProps => {
  return compose(
    connect(null, mapDispatchToProps),
    setPropTypes({
      uploadResorts: PropTypes.func.isRequired,
    })
  );
};

export default composer(mapDispatchToProps)(Uploader);
