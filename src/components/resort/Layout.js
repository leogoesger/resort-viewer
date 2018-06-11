import React from 'react';
import PropTypes from 'prop-types';
import {compose, setPropTypes} from 'recompose';

import ResortOverview from './ResortOverview';

const Layout = ({resort, mapping, getNextResort}) => (
  <ResortOverview
    resort={resort}
    mapping={mapping}
    getNextResort={getNextResort}
  />
);

const enhancer = compose(
  setPropTypes({
    resort: PropTypes.object.isRequired,
    mapping: PropTypes.object.isRequired,
    getNextResort: PropTypes.func.isRequired,
  })
);
export default enhancer(Layout);
