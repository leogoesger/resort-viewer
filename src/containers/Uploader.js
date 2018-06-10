import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import csv from 'csvtojson';
import {compose, setPropTypes, lifecycle} from 'recompose';

import UploaderHOC from '../hocs/UploaderHOC';
import {uploadResorts} from '../actions/resort';

const stringProcessor = (csvStr, cb) => {
  csv({})
    .fromString(csvStr)
    .on('err', err => cb(err, null))
    .then(csvRows => cb(null, csvRows));
};

const Uploader = UploaderHOC(stringProcessor);

const mapDispatchToProps = dispatch => {
  return {uploadResorts: d => dispatch(uploadResorts(d))};
};

const composer = mapDispatchToProps => {
  return compose(
    connect(
      null,
      mapDispatchToProps
    ),
    setPropTypes({
      uploadResorts: PropTypes.func.isRequired,
    }),
    lifecycle({
      componentDidMount() {
        document.title = 'UpMetric | Upload';
      },
    })
  );
};

export default composer(mapDispatchToProps)(Uploader);
