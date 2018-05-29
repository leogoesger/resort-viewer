import React from 'react';
import PropTypes from 'prop-types';
import SummaryTable from './SummaryTable';

const Layout = props => {
  return (
    <SummaryTable
      tableItems={props.resorts}
      columnNames={Object.keys(props.resorts[0])}
    />
  );
};

export default Layout;

Layout.propTypes = {
  resorts: PropTypes.array.isRequired,
};
