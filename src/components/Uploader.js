import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {setPropTypes} from 'recompose';

const Uploader = ({onUpload}) => {
  return (
    <Button variant="raised" color="primary" component="label">
      {'Upload'}
      <input
        onChange={e => onUpload(e.target.files)}
        style={{display: 'none'}}
        type="file"
      />
    </Button>
  );
};

export default setPropTypes({onUpload: PropTypes.func.isRequired})(Uploader);
