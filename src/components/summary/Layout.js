import React from 'react';
import PropTypes from 'prop-types';

import SummaryTable from './SummaryTable';
import {predefinedAttributes} from '../../utils/constants';

const Layout = ({resorts, mapping, getResort}) => {
  return resorts.length ? (
    <SummaryTable
      tableItems={resorts}
      columnNames={predefinedAttributes}
      mapping={mapping}
      getResort={r => getResort(r)}
    />
  ) : (
    <div style={{width: '80%', margin: '40px auto'}}>
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
  getResort: PropTypes.func.isRequired,
};
