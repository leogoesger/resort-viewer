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
    <div style={{width: '80%', margin: '20px auto'}}>
      {
        'Looks like you have not uploaded any data yet. Make sure to upload csv from the Upload page first!'
      }
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  resorts: PropTypes.array.isRequired,
  mapping: PropTypes.object.isRequired,
};
