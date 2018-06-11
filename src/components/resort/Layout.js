import React from 'react';
import PropTypes from 'prop-types';
import {compose, setPropTypes} from 'recompose';

import ResortOverview from './ResortOverview';

const Layout = ({resort, mapping}) => (
  <ResortOverview resort={resort} mapping={mapping} />
);

const enhancer = compose(
  setPropTypes({
    resort: PropTypes.object.isRequired,
    mapping: PropTypes.object.isRequired,
  })
);
export default enhancer(Layout);
