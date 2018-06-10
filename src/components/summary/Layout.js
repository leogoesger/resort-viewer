import React from 'react';
import PropTypes from 'prop-types';

import SummaryTable from './SummaryTable';
import {predefinedAttributes} from '../../utils/constants';

const Layout = props => {
  return props.resorts.length ? (
    <SummaryTable
      tableItems={props.resorts}
      columnNames={predefinedAttributes}
      mapping={props.mapping}
    />
  ) : (
    <div>Upload csv from the homepage!</div>
  );
};

export default Layout;

Layout.propTypes = {
  resorts: PropTypes.array.isRequired,
  mapping: PropTypes.object.isRequired,
};
